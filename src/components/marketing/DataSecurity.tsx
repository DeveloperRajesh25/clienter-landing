import Link from 'next/link'
import { ShieldCheck, KeyRound, Ban, Wand2, Download, Lock, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/landing/Reveal'
import { Marquee } from '@/components/landing/Marquee'
import { SectionLabel } from '@/components/landing/SectionLabel'

/**
 * Compact data-privacy trust band. A short claim on the left, and a single
 * marquee ticker of security guarantees sliding on the right — the in-depth
 * details now live on the dedicated /security page (and the privacy policy),
 * not the homepage.
 *
 * Two looks, one story: the default light card is used on the pricing and SEO
 * landing pages; `variant="editorial"` is the landing page's trust-forward
 * treatment — a warm vault panel with a lit shield mark and grain.
 */
const GUARANTEES: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: 'Row-level security' },
  { icon: KeyRound, label: 'AES-256 encryption' },
  { icon: Ban, label: 'No data sharing, ever' },
  { icon: Wand2, label: 'Magic-link client auth' },
  { icon: Download, label: 'Export anytime' },
  { icon: Lock, label: 'Encrypted in transit' },
]

function Tick({
  icon: Icon,
  label,
  editorial = false,
}: {
  icon: LucideIcon
  label: string
  editorial?: boolean
}) {
  return (
    <span
      className={`mx-5 inline-flex items-center gap-2.5 whitespace-nowrap font-semibold ${
        editorial ? 'text-[15px] text-gray-700' : 'text-base text-gray-700'
      }`}
    >
      <Icon className="h-4 w-4 text-orange-500" />
      {label}
      <span
        aria-hidden
        className={`ml-5 h-1.5 w-1.5 rounded-full ${editorial ? 'bg-orange-500/40' : 'bg-orange-200'}`}
      />
    </span>
  )
}

export function DataSecurity({
  className = '',
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'editorial'
}) {
  const editorial = variant === 'editorial'

  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${className}`}>
      <Reveal className="mx-auto max-w-6xl">
        <div
          className={
            editorial
              ? 'grain grain-light relative overflow-hidden rounded-[2rem] border border-line/70 bg-white/75 shadow-lift-2 backdrop-blur'
              : 'relative overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white/60 shadow-soft-lg backdrop-blur'
          }
        >
          {editorial ? (
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.20),transparent_65%)] blur-2xl" />
              <div className="absolute inset-0 bg-dot-warm opacity-30 [mask-image:linear-gradient(to_right,black,transparent_55%)]" />
            </div>
          ) : (
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl"
            />
          )}

          <div className="relative z-10 grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-10">
            <div>
              {editorial ? (
                <SectionLabel icon={Lock}>Security &amp; privacy</SectionLabel>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
                  <Lock className="h-3.5 w-3.5" /> Security &amp; privacy
                </span>
              )}
              <h2
                className={`font-display font-extrabold tracking-tight text-gray-900 ${
                  editorial ? 'mt-5 text-[1.75rem] leading-[1.15]' : 'mt-4 text-2xl'
                }`}
              >
                Your data is <span className="text-gradient-brand">100% private</span>.
              </h2>
              <p
                className={`leading-relaxed text-gray-500 ${editorial ? 'mt-3 text-[15px]' : 'mt-2 text-sm'}`}
              >
                Row-level isolation, encrypted tokens, and zero data-sharing — even we can’t read
                it.{' '}
                <Link
                  href="/security"
                  className="focus-ember rounded font-semibold text-orange-600 transition-colors hover:text-orange-700"
                >
                  See how we protect it →
                </Link>
              </p>
            </div>

            {/* Single sliding ticker of guarantees — fades at both edges. */}
            <div
              className={`relative min-w-0 lg:pl-10 ${
                editorial ? 'lg:border-l lg:border-line/70' : 'lg:border-l lg:border-stone-200/70'
              }`}
            >
              <Marquee speed={30}>
                {GUARANTEES.map((g) => (
                  <Tick key={g.label} icon={g.icon} label={g.label} editorial={editorial} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
