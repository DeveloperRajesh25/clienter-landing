import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendWaitlistConfirmation } from '@/lib/email'

/**
 * Public waitlist signup (landing page). Anyone may POST { email, name? }.
 *
 * - Validates a basic email shape.
 * - Rate-limits to 3 submissions per IP per hour (shared DB-backed limiter).
 * - Inserts with the service-role client (the table has no anon SELECT policy,
 *   so emails stay private — see migration 20260603_create_waitlist.sql).
 * - Duplicate emails are NOT an error: we report success so we never leak
 *   whether an address is already on the list.
 * - Sends a best-effort confirmation email (never blocks the response).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  // Parse + validate first so malformed requests don't burn the IP's quota.
  let email = ''
  let name: string | null = null
  try {
    const body = await req.json()
    email = String(body?.email ?? '').trim().toLowerCase()
    const rawName = body?.name
    name = typeof rawName === 'string' && rawName.trim() ? rawName.trim() : null
  } catch {
    return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
  }

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
  }

  // Max 3 requests per IP per hour.
  const ip = getClientIp(req)
  const limit = await rateLimit(`waitlist:${ip}`, 3, 60 * 60 * 1000)
  if (!limit.ok) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }

  try {
    const admin = createAdminClient()
    const { error } = await admin.from('waitlist').insert({ email, name, source: 'landing_page' })

    if (error) {
      // 23505 = unique_violation → already on the list, treat as success so we
      // never reveal whether an address is already registered.
      if ((error as { code?: string }).code === '23505') {
        return NextResponse.json(
          { success: true, message: "You're already on the waitlist! We'll be in touch soon." },
          { status: 200 }
        )
      }
      throw error
    }

    // Best-effort confirmation email — a failure here must not fail the signup.
    try {
      await sendWaitlistConfirmation(email, name ?? undefined)
    } catch (mailErr) {
      console.warn('[waitlist] Confirmation email failed:', mailErr)
    }

    return NextResponse.json(
      { success: true, message: "You're on the waitlist! Check your email for confirmation." },
      { status: 200 }
    )
  } catch (err) {
    console.error('[waitlist] Failed to record signup:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
