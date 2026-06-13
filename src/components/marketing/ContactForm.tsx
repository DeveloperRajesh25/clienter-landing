'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, Send } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

// Web3Forms requires client-side submission on the free plan (server-side is
// Pro-only), so the access key necessarily ships in the bundle. That's safe:
// the key only permits sending to the verified inbox, nothing else.
const WEB3FORMS_ACCESS_KEY = '926ca2ba-713a-4244-a5b7-9f1997668a9b'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return
    // Honeypot: silently drop bot submissions.
    if (form.company) return
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'Clienter Contact Form',
          subject: `[Contact] ${form.subject.trim() || 'New message'} — from ${form.name}`,
          name: form.name,
          email: form.email,
          message_subject: form.subject.trim() || '(none)',
          message: form.message,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        setStatus('success')
        setMessage("Thanks! We'll be in touch.")
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-orange-200 bg-white px-6 py-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
          <CheckCircle2 className="h-6 w-6 text-orange-600" />
        </div>
        <p className="text-lg font-semibold text-gray-900">Message sent 🎉</p>
        <p className="mt-1 text-gray-600">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={update('company')}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            disabled={status === 'loading'}
            placeholder="Your name"
            className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            disabled={status === 'loading'}
            placeholder="you@example.com"
            className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-gray-700">
          Subject <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          value={form.subject}
          onChange={update('subject')}
          disabled={status === 'loading'}
          placeholder="What's this about?"
          className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          disabled={status === 'loading'}
          placeholder="How can we help?"
          className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="press inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}
