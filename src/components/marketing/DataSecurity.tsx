import { ShieldCheck, KeyRound, Ban, Wand2, Lock } from 'lucide-react'
import { Reveal } from '@/components/landing/Reveal'

/**
 * Data-privacy trust section. Reused on the homepage (before the footer) and on
 * the pricing page (below the plan cards, above the FAQ) so the security story
 * reads identically in both places. Icons match the site's orange-gradient chip
 * language rather than raw emoji, keeping it on-brand.
 */
const BADGES = [
  {
    icon: ShieldCheck,
    label: 'Row-Level Security',
    sub: 'Every record is isolated to your account — not even we can read it.',
  },
  {
    icon: KeyRound,
    label: 'AES-256 Encrypted tokens',
    sub: 'OAuth tokens are encrypted at rest with AES-256-GCM.',
  },
  {
    icon: Ban,
    label: 'No data sharing, ever',
    sub: 'We never sell, share, or access your business data.',
  },
  {
    icon: Wand2,
    label: 'Secure magic-link client auth',
    sub: 'Portal clients sign in with magic links, not passwords.',
  },
]

export function DataSecurity({ className = '' }: { className?: string }) {
  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${className}`}>
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white/70 p-8 shadow-soft-lg backdrop-blur sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                <Lock className="h-3.5 w-3.5" /> Security &amp; privacy
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Your business data is{' '}
                <span className="text-gradient-brand">100% private</span>.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Your clients, invoices, and financial data belong only to you. Clienter uses
                row-level security — meaning even we at Clienter cannot read your data. Every record
                is isolated to your account. OAuth tokens are encrypted with AES-256-GCM. Your portal
                clients authenticate via secure magic links, not passwords. We will never sell,
                share, or access your data.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {BADGES.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-gray-900">{label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
