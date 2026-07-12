import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Lock,
  ShieldCheck,
  Database,
  CreditCard,
  Download,
  EyeOff,
  ServerCog,
  KeyRound,
  Globe,
  Fingerprint,
  Layers,
  Bug,
  Mail,
  ArrowRight,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { CountUp } from '@/components/landing/CountUp'
import { Faq } from '@/components/landing/Faq'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, CONTACT, LEGAL } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Security & Data Protection',
  description:
    'How Clienter keeps your business and client data safe: encryption in transit, per-account data isolation with row-level security, secure payments via Razorpay, and full data export — no lock-in.',
  path: '/security',
  keywords: ['Clienter security', 'data protection', 'secure freelancer software'],
})

// ── Guarantee stat band ─────────────────────────────────────────────────────
// Product-fact figures only, each grounded in a practice below. `to` drives the
// scroll-triggered count-up; suffix/prefix ride along.
const GUARANTEES = [
  { to: 256, suffix: '-bit', label: 'Encryption in transit (HTTPS / TLS)' },
  { to: 100, suffix: '%', label: 'Per-account data isolation' },
  { to: 0, suffix: '', label: 'Times we sell or rent your data' },
  { to: 1, suffix: '-click', label: 'Export anytime — no lock-in' },
]

// ── Defense-in-depth layers (outer → inner) ─────────────────────────────────
// Doubles as the legend beside the concentric visual.
const LAYERS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Globe,
    title: 'Managed infrastructure',
    desc: 'Supabase + Vercel, with strict security headers and a locked-down content-security policy.',
  },
  {
    icon: Lock,
    title: 'Encryption in transit',
    desc: 'Every request travels over HTTPS/TLS with HSTS enforced — nothing moves in the clear.',
  },
  {
    icon: Fingerprint,
    title: 'Secure authentication',
    desc: 'Passwords are hashed, never stored as plain text; sessions are handled by our auth provider.',
  },
  {
    icon: Database,
    title: 'Row-level isolation',
    desc: 'Database policies scope every row to its owner, so no account can reach another’s data.',
  },
]

// ── The 8 practices, grouped into themes (varied treatment, not 8 cards) ─────
type Practice = { icon: LucideIcon; title: string; desc: string }
type Theme = {
  n: string
  eyebrow: string
  icon: LucideIcon
  title: React.ReactNode
  desc: string
  items: Practice[]
}

const THEMES: Theme[] = [
  {
    n: '01',
    eyebrow: 'Encryption & access',
    icon: Lock,
    title: 'Locked down, end to end',
    desc: 'From the moment data leaves your device to the moment it’s stored, it stays encrypted and behind secure sign-in.',
    items: [
      {
        icon: Lock,
        title: 'Encrypted in transit',
        desc: 'All traffic is served over HTTPS/TLS, with HSTS enforced. Your data is encrypted while moving between your device and our servers.',
      },
      {
        icon: KeyRound,
        title: 'Secure authentication',
        desc: 'Passwords are hashed and never stored in plain text. Sessions are managed securely by our authentication provider.',
      },
    ],
  },
  {
    n: '02',
    eyebrow: 'Isolation & infrastructure',
    icon: Database,
    title: 'Your account, walled off',
    desc: 'We build on reputable managed platforms and enforce isolation at the database layer, so one customer can never see another.',
    items: [
      {
        icon: Database,
        title: 'Per-account data isolation',
        desc: 'Every account’s data is isolated using row-level security at the database layer, so one customer can never see another’s information.',
      },
      {
        icon: ServerCog,
        title: 'Hardened infrastructure',
        desc: 'We run on managed, reputable infrastructure (Supabase and Vercel) with security headers, a strict content-security policy, and regular updates.',
      },
    ],
  },
  {
    n: '04',
    eyebrow: 'Ownership & privacy',
    icon: ShieldCheck,
    title: 'Your data stays yours',
    desc: 'We collect only what’s needed to run Clienter, never sell it, and let you take it with you whenever you want.',
    items: [
      {
        icon: Download,
        title: 'Your data, exportable',
        desc: 'You can export your clients, projects, and invoices at any time. There’s no lock-in — your data stays yours.',
      },
      {
        icon: EyeOff,
        title: 'We never sell your data',
        desc: 'We do not sell or share your personal or client data with advertisers. We only use trusted providers needed to run the service.',
      },
      {
        icon: ShieldCheck,
        title: 'Privacy by design',
        desc: 'We collect only what we need to run Clienter, and we comply with applicable privacy law including India’s DPDP Act, 2023.',
      },
    ],
  },
]

const SECURITY_FAQS = [
  {
    q: 'Where is my data stored?',
    a: 'Clienter runs on managed, reputable infrastructure — Supabase for the database and Vercel for the application — with strict security headers and a locked-down content-security policy. Everything is served over HTTPS/TLS with HSTS enforced, so your data is encrypted while it moves between your device and our servers.',
  },
  {
    q: 'Who can see my clients and invoices?',
    a: 'Only you and the team members you invite. Every account’s data is isolated with row-level security at the database layer, so one customer can never see another’s information. We never sell or share your personal or client data with advertisers, and we collect only what we need to run the service.',
  },
  {
    q: 'Can I export or delete my data?',
    a: 'Yes. You can export your clients, projects, and invoices at any time — there’s no lock-in, your data stays yours. You can also request deletion; we comply with applicable privacy law, including India’s DPDP Act, 2023, and you can reach our Grievance Officer for any data request.',
  },
  {
    q: 'How are payments handled?',
    a: 'Payments are processed by Razorpay, a PCI-DSS compliant provider. We never see or store your full card details on our servers — sensitive payment information stays with the payment processor.',
  },
]

// ── Local presentational helpers ─────────────────────────────────────────────

/** One practice rendered as a light icon row with a top hairline divider — no card chrome. */
function PracticeRow({ icon: Icon, title, desc }: Practice) {
  return (
    <div className="group flex gap-4 border-t border-stone-200/70 py-5 first:border-t-0 first:pt-0">
      <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-100 transition-colors group-hover:bg-orange-100">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

/** A theme block: intro on one side, its practices as icon rows on the other. Zig-zags via `flip`. */
function ThemeBlock({ theme, flip = false }: { theme: Theme; flip?: boolean }) {
  const Icon = theme.icon
  return (
    <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-14">
      <Reveal className={`lg:col-span-2 ${flip ? 'lg:order-2' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-display text-sm font-bold text-stone-300">{theme.n}</span>
        </div>
        <span className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
          {theme.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[1.7rem]">
          {theme.title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{theme.desc}</p>
      </Reveal>

      <Reveal delay={120} className={`lg:col-span-3 ${flip ? 'lg:order-1' : ''}`}>
        <div className="rounded-3xl border border-stone-200/70 bg-white/70 p-6 shadow-soft backdrop-blur-sm sm:p-8">
          {theme.items.map((it) => (
            <PracticeRow key={it.title} {...it} />
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default function SecurityPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Security', path: '/security' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <ShieldCheck className="h-4 w-4" /> Security &amp; trust
          </>
        }
        title="Your business data is"
        highlight="safe with us"
        subtitle="Your clients trust you with their work. You can trust us with your data. Here’s exactly how we protect it."
      />

      {/* ───────── Guarantee stat band ───────── */}
      <section className="relative mt-16 border-y border-stone-200/70 bg-white/60 backdrop-blur-sm sm:mt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g, i) => (
            <Reveal
              key={g.label}
              delay={i * 80}
              className="relative border-stone-200/70 px-4 py-9 text-center sm:py-11 [&:nth-child(n+3)]:border-t lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="text-gradient-brand font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <CountUp to={g.to} suffix={g.suffix} />
              </div>
              <div className="mx-auto mt-2 max-w-[15rem] text-sm text-gray-500">{g.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── Defense in depth (layered visual) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
                <Layers className="h-3.5 w-3.5" /> Defense in depth
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How your data is{' '}
                <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                  protected
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">
                No single lock keeps data safe. We wrap yours in layers — each one an independent
                barrier between the outside world and your clients, projects, and invoices.
              </p>

              <ol className="mt-8 space-y-1">
                {LAYERS.map((layer, i) => {
                  const Icon = layer.icon
                  return (
                    <li
                      key={layer.title}
                      className="flex gap-4 border-t border-stone-200/70 py-4 first:border-t-0"
                    >
                      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-100">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-[11px] font-bold text-stone-300">
                            L{i + 1}
                          </span>
                          <h3 className="font-display text-[15px] font-bold text-gray-900">
                            {layer.title}
                          </h3>
                        </div>
                        <p className="mt-0.5 text-sm leading-relaxed text-gray-600">{layer.desc}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </Reveal>

            {/* Concentric layers wrapping "your data" — built from nested divs. */}
            <Reveal delay={140}>
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(249,115,22,0.14),transparent_70%)] blur-2xl"
                />
                {/* L1 — infrastructure */}
                <div className="rounded-[2.25rem] border border-stone-200 bg-white/80 p-5 shadow-soft-lg backdrop-blur-sm">
                  <LayerTag icon={Globe} tone="stone">
                    Managed infrastructure
                  </LayerTag>
                  {/* L2 — encryption */}
                  <div className="mt-3 rounded-[1.9rem] border border-orange-100 bg-orange-50/40 p-5">
                    <LayerTag icon={Lock} tone="soft">
                      Encryption in transit
                    </LayerTag>
                    {/* L3 — auth */}
                    <div className="mt-3 rounded-[1.5rem] border border-orange-200/70 bg-orange-50/70 p-5">
                      <LayerTag icon={Fingerprint} tone="mid">
                        Secure authentication
                      </LayerTag>
                      {/* L4 — isolation */}
                      <div className="mt-3 rounded-[1.15rem] border border-orange-300/60 bg-orange-100/50 p-5">
                        <LayerTag icon={Database} tone="strong">
                          Row-level isolation
                        </LayerTag>
                        {/* Center — your data */}
                        <div className="mt-3 flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 px-4 py-7 text-center text-white shadow-lg shadow-orange-500/30">
                          <ShieldCheck className="h-7 w-7" />
                          <span className="font-display text-lg font-bold">Your data</span>
                          <span className="text-xs font-medium text-orange-50">
                            Clients · Projects · Invoices
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── Practices, grouped into themes ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
              <ShieldCheck className="h-3.5 w-3.5" /> Our practices
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Every safeguard, in plain English
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Grouped by what they protect — so you can see exactly what stands between your data and
              everyone else.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24">
            <ThemeBlock theme={THEMES[0]} />
            <ThemeBlock theme={THEMES[1]} flip />

            {/* Payments — an alternating split highlight with a faux product window. */}
            <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-14">
              <Reveal className="lg:col-span-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                    <CreditCard className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-stone-300">03</span>
                </div>
                <span className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                  Payments
                </span>
                <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[1.7rem]">
                  Card details never touch our servers
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  Payments are processed by Razorpay, a PCI-DSS compliant provider. We never see or
                  store your full card details — sensitive information stays with the processor.
                </p>
                <ul className="mt-6 space-y-3">
                  {['PCI-DSS compliant processing', 'Full card numbers never stored by us', 'Handled entirely by Razorpay'].map(
                    (p) => (
                      <li key={p} className="flex items-center gap-3 text-[15px] text-gray-700">
                        <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    )
                  )}
                </ul>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-3">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(249,115,22,0.12),transparent_70%)] blur-2xl"
                  />
                  <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft-lg">
                    <div className="flex items-center gap-1.5 border-b border-stone-100 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                      <span className="ml-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-400">
                        <Lock className="h-3 w-3 text-emerald-500" /> secure checkout
                      </span>
                    </div>
                    <div className="px-5 pb-6 pt-5 sm:px-6">
                      <div className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold tracking-wide text-gray-600">
                            Card details
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                            <ShieldCheck className="h-3 w-3" /> PCI-DSS
                          </span>
                        </div>
                        <div className="mt-3.5 flex items-center gap-2 font-display text-lg font-bold tracking-[0.2em] text-gray-400">
                          <span>••••</span>
                          <span>••••</span>
                          <span>••••</span>
                          <span className="text-gray-600">4242</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-dashed border-stone-300 pt-3 text-[11px] text-gray-400">
                          <span>Processed by Razorpay</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-gray-500">
                            <EyeOff className="h-3 w-3" /> Never stored by Clienter
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <ThemeBlock theme={THEMES[2]} />
          </div>
        </div>
      </section>

      {/* ───────── Security FAQ ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Security questions, answered
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The things people ask most about how we handle their data.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <Faq items={SECURITY_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ───────── Responsible disclosure ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-stone-200/70 bg-white/70 shadow-soft-lg backdrop-blur-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl"
              />
              <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-3 lg:gap-12">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                    <Bug className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-extrabold tracking-tight text-gray-900">
                    Responsible disclosure
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    Found a security issue, or have a question about how we handle data? We take it
                    seriously.
                  </p>
                </div>

                <div className="lg:col-span-2 lg:border-l lg:border-stone-200/70 lg:pl-12">
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    Please report it privately before disclosing publicly, and give us a reasonable
                    chance to fix it. For data and privacy concerns you can also reach our Grievance
                    Officer.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href={`mailto:${CONTACT.support}`}
                      className="group flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white px-4 py-3.5 transition-colors hover:border-orange-200 hover:bg-orange-50/50"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-100">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Security reports
                        </span>
                        <span className="block truncate font-medium text-gray-900 group-hover:text-orange-700">
                          {CONTACT.support}
                        </span>
                      </span>
                    </a>
                    <a
                      href={`mailto:${LEGAL.grievanceOfficer.email}`}
                      className="group flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white px-4 py-3.5 transition-colors hover:border-orange-200 hover:bg-orange-50/50"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-100">
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
                          {LEGAL.grievanceOfficer.title}
                        </span>
                        <span className="block truncate font-medium text-gray-900 group-hover:text-orange-700">
                          {LEGAL.grievanceOfficer.email}
                        </span>
                      </span>
                    </a>
                  </div>
                  <p className="mt-6 text-sm text-gray-500">
                    Read our{' '}
                    <Link href="/privacy" className="font-medium text-orange-600 hover:text-orange-700">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/cookies" className="font-medium text-orange-600 hover:text-orange-700">
                      Cookie Policy
                    </Link>
                    , or see how it all fits together in{' '}
                    <Link
                      href="/how-it-works"
                      className="inline-flex items-center gap-1 font-medium text-orange-600 hover:text-orange-700"
                    >
                      how Clienter works <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}

/** Small labelled pill that sits at the top of each concentric defense layer. */
function LayerTag({
  icon: Icon,
  tone,
  children,
}: {
  icon: LucideIcon
  tone: 'stone' | 'soft' | 'mid' | 'strong'
  children: React.ReactNode
}) {
  const tones: Record<typeof tone, string> = {
    stone: 'bg-white text-gray-500 ring-stone-200',
    soft: 'bg-white text-orange-500 ring-orange-100',
    mid: 'bg-white text-orange-600 ring-orange-200',
    strong: 'bg-white text-orange-700 ring-orange-300',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${tones[tone]}`}
    >
      <Icon className="h-3 w-3" />
      {children}
    </span>
  )
}
