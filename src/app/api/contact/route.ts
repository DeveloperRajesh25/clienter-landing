import { NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendContactMessage } from '@/lib/email'

/**
 * Public contact form. Anyone may POST { name, email, message, subject? }.
 *
 * - Validates required fields and basic email shape.
 * - Rate-limits to 5 submissions per IP per hour to deter spam/abuse.
 * - Delivers the message to the support inbox via Resend (reply-to = sender).
 * - A honeypot field ("company") silently drops bot submissions.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let name = ''
  let email = ''
  let subject = ''
  let message = ''
  let honeypot = ''
  try {
    const body = await req.json()
    name = String(body?.name ?? '').trim()
    email = String(body?.email ?? '').trim().toLowerCase()
    subject = String(body?.subject ?? '').trim()
    message = String(body?.message ?? '').trim()
    honeypot = String(body?.company ?? '').trim()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Bot trap: real users never fill the hidden "company" field. Pretend success.
  if (honeypot) {
    return NextResponse.json({ success: true, message: 'Thanks! We’ll be in touch.' })
  }

  if (!name || name.length > 100) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!message || message.length < 5 || message.length > 5000) {
    return NextResponse.json({ error: 'Please enter a message (at least a few words).' }, { status: 400 })
  }
  if (subject.length > 150) subject = subject.slice(0, 150)

  const ip = getClientIp(req)
  const limit = await rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000)
  if (!limit.ok) {
    return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 })
  }

  try {
    await sendContactMessage({ name, email, subject, message })
    return NextResponse.json({
      success: true,
      message: 'Thanks for reaching out! We’ll get back to you within one business day.',
    })
  } catch (err) {
    console.error('[contact] Failed to send message:', err)
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please email us directly.' },
      { status: 500 }
    )
  }
}
