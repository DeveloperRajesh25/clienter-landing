'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  // Honeypot: a hidden field real users never fill; bots do. Submitted to the
  // API, which silently drops any request where it has a value.
  const [companyWebsite, setCompanyWebsite] = useState('')
  // When the form became interactive. The API treats sub-2s submits as bots.
  // Set in an effect so it's a client-only timestamp (no hydration mismatch).
  const renderedAt = useRef(0)
  useEffect(() => {
    renderedAt.current = Date.now()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company_website: companyWebsite,
          renderedAt: renderedAt.current,
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || "You're on the list!")
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-primary-200 bg-white px-6 py-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
          <CheckCircle2 className="h-6 w-6 text-primary-600" />
        </div>
        <p className="text-lg font-semibold text-gray-900">🎉 {message}</p>
        <p className="mt-1 text-gray-600">We&apos;ll email you when we launch.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl"
      noValidate
    >
      {/* Honeypot — positioned off-screen (not display:none) so headless bots
          that fill every field trip it, while real users never see it. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label htmlFor="company_website">Company website (leave blank)</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="you@example.com"
          disabled={status === 'loading'}
          className="h-12 flex-1 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Joining…
            </>
          ) : (
            <>
              Join waitlist
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-sm font-medium text-red-600" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
