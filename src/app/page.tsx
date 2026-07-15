import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Users,
  Briefcase,
  FileText,
  UserPlus,
  TrendingUp,
  Bell,
  Check,
  X,
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Zap,
  Lock,
  Download,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Sheet,
  MessageCircle,
  StickyNote,
  Mail,
  CalendarDays,
  Wallet,
  Clock,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { HeroGrid } from '@/components/landing/HeroGrid'
import { HeroScroll } from '@/components/landing/HeroScroll'
import { SpotlightButton } from '@/components/landing/SpotlightButton'
import { TiltCard } from '@/components/landing/TiltCard'
import { HeroPreview } from '@/components/landing/HeroPreview'
import { Reveal } from '@/components/landing/Reveal'
import { CountUp } from '@/components/landing/CountUp'
import { Marquee } from '@/components/landing/Marquee'
import { Faq } from '@/components/landing/Faq'
import { Parallax } from '@/components/landing/Parallax'
import { Magnetic } from '@/components/landing/Magnetic'
import { SectionLabel } from '@/components/landing/SectionLabel'
import { JsonLd } from '@/components/marketing/JsonLd'
import { DataSecurity } from '@/components/marketing/DataSecurity'
import { VerifiedReviews } from '@/components/marketing/VerifiedReviews'
import { pageMetadata, FOUNDER, SOCIALS } from '@/lib/site'
import { faqSchema } from '@/lib/structured-data'
import { HOME_FAQS } from '@/lib/faq-data'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Clienter — Client Management Software for Indian Freelancers & Agencies',
    description:
      'Clienter brings clients, projects, invoices, payments, meetings, and your team into one beautiful workspace. Built for Indian freelancers and agencies. Start free — no credit card required.',
    path: '/',
    keywords: [
      'client management software India',
      'freelancer CRM',
      'invoice software for freelancers',
      'agency management software',
      'GST invoice generator',
      'freelance business management',
    ],
  }),
  // Home uses an absolute title so the brand template suffix isn't appended.
  title: { absolute: 'Clienter — Client Management Software for Indian Freelancers & Agencies' },
}

const STEPS = [
  {
    n: '01',
    title: 'Add your clients',
    desc: 'Import or add clients in seconds and keep every detail in one tidy profile.',
  },
  {
    n: '02',
    title: 'Run your projects',
    desc: 'Spin up projects, assign your team, and track progress on a clean Kanban board.',
  },
  {
    n: '03',
    title: 'Invoice & get paid',
    desc: 'Generate branded invoices, send them, and watch your revenue analytics update live.',
  },
]

// Plan limits + launch pricing mirror the /pricing page so the two never drift.
type Plan = {
  name: string
  price: string
  originalPrice?: string
  period: string
  tagline: string
  features: string[]
  cta: string
  popular: boolean
  launch: boolean
}
const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    tagline: 'For getting started',
    features: [
      'Up to 5 clients',
      'Up to 10 projects',
      'Leads & CRM pipeline',
      'Invoice generation',
      'Basic analytics',
    ],
    cta: 'Get started free',
    popular: false,
    launch: false,
  },
  {
    name: 'Pro',
    price: '₹199',
    originalPrice: '₹499',
    period: '/month',
    tagline: 'For growing freelancers',
    features: [
      'Up to 30 clients',
      'Up to 60 projects',
      'Up to 5 team members',
      'White-label client portal',
      'Priority support',
    ],
    cta: 'Start Pro →',
    popular: true,
    launch: true,
  },
  {
    name: 'Ultra',
    price: '₹799',
    originalPrice: '₹1,999',
    period: '/month',
    tagline: 'For agencies at scale',
    features: [
      'Unlimited clients',
      'Unlimited projects',
      'Unlimited team members',
      'White-label invoices',
      'Dedicated support',
    ],
    cta: 'Start Ultra →',
    popular: false,
    launch: true,
  },
]

// Honest product facts — no fabricated traction or usage numbers. Each is
// true of the product itself, not of a user base. `to`/prefix/suffix drive the
// scroll-triggered count-up in the stats band.
const STATS = [
  { to: 6, prefix: '', suffix: '-in-1', label: 'Tools in one app' },
  { to: 0, prefix: '₹', suffix: '', label: 'To start — free forever' },
  { to: 5, prefix: '~', suffix: ' min', label: 'To your first invoice' },
  { to: 100, prefix: '', suffix: '%', label: 'Your data, always yours' },
]

// The scattered stack Clienter replaces — generic categories, no brand names.
// Rendered as two counter-sliding marquee rows under the stats band.
const REPLACES = [
  { icon: Sheet, label: 'Spreadsheets' },
  { icon: FileText, label: 'Word invoices' },
  { icon: MessageCircle, label: 'WhatsApp threads' },
  { icon: StickyNote, label: 'Sticky notes' },
  { icon: Mail, label: 'Email chains' },
  { icon: CalendarDays, label: 'Calendar apps' },
  { icon: Wallet, label: 'Payment trackers' },
  { icon: Clock, label: 'Reminder alarms' },
]

// The "before" (chaos) vs "after" (Clienter) contrast.
const CHAOS = [
  'Client details scattered across WhatsApp and email',
  'Invoices copied from a Word template every month',
  'Project status living only in your head',
  'No clear picture of what you earned or who owes you',
  'Juggling 5–6 different apps that don’t talk to each other',
]
const CALM = [
  'Every client, project, and invoice in one organized place',
  'Professional GST-ready invoices in under a minute',
  'A clean Kanban board that shows exactly where work stands',
  'Live revenue analytics — no spreadsheets, no guessing',
  'One calm workspace built for how you actually work',
]

// Hand-tuned scatter for the "old way" stack. Fixed (never random) so the
// server and client render byte-identical markup — and so the disarray is
// art-directed rather than accidental. Each entry: [rotate deg, indent px].
const CHAOS_SCATTER: [number, number][] = [
  [-1.4, 0],
  [1.2, 22],
  [-0.6, 8],
  [1.7, 30],
  [-1.1, 14],
]

const TRUST = [
  { icon: Lock, label: 'Encrypted in transit' },
  { icon: ShieldCheck, label: 'Per-account data isolation' },
  { icon: Download, label: 'Export anytime — no lock-in' },
  { icon: Check, label: 'No card required to start' },
]

const FOUNDER_SOCIALS = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.twitter, label: 'X', Icon: Twitter },
]

/**
 * Editorial section headline. Left-aligned by default — centering every
 * section is the fastest way to make a page feel templated, so `center` is
 * opt-in and used sparingly (only where the content genuinely radiates from
 * the middle, like pricing and the FAQ).
 */
function SectionHead({
  label,
  icon: Icon,
  title,
  sub,
  align = 'left',
  tone = 'light',
  className = '',
}: {
  label?: string
  icon?: LucideIcon
  title: React.ReactNode
  sub?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {label && (
        <Reveal>
          <SectionLabel icon={Icon} tone={tone} className={centered ? 'justify-center' : ''}>
            {label}
          </SectionLabel>
        </Reveal>
      )}
      <Reveal variant="mask" delay={label ? 90 : 0}>
        <h2
          className={`font-display text-3xl font-extrabold tracking-tight sm:text-display-sm lg:text-display ${
            label ? 'mt-6' : ''
          } ${dark ? 'text-espresso-text' : 'text-gray-900'}`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={180}>
          <p
            className={`mt-5 text-lg leading-relaxed ${centered ? 'mx-auto max-w-measure' : 'max-w-measure'} ${
              dark ? 'text-espresso-muted' : 'text-gray-600'
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/**
 * Warm product-window chrome. One frame vocabulary for every product mock on
 * the page — hairline edge, warm layered elevation, an optional URL slug so
 * each mock reads as a real screen rather than an illustration.
 */
function ProductFrame({
  children,
  url,
  className = '',
}: {
  children: React.ReactNode
  url?: string
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-lift-3 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-stone-100 bg-stone-50/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
        {url && (
          <span className="ml-2 truncate text-[11px] font-medium text-stone-400">{url}</span>
        )}
      </div>
      <div className="px-5 pb-6 pt-1 sm:px-6">{children}</div>
    </div>
  )
}

/**
 * A flagship feature row. Asymmetric 5/7 split (never 50/50), zig-zagging via
 * `flip`, with the visual free to break its column. Each row passes its own
 * fully-composed visual, so no two read the same.
 */
function FeatureSplit({
  eyebrow,
  icon: Icon,
  title,
  desc,
  points,
  visual,
  flip = false,
}: {
  eyebrow: string
  icon: LucideIcon
  title: string
  desc: string
  points: string[]
  visual: React.ReactNode
  flip?: boolean
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
        <SectionLabel icon={Icon}>{eyebrow}</SectionLabel>
        <h3 className="mt-6 font-display text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-[2.25rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-measure text-[15px] leading-relaxed text-gray-600 sm:text-base">
          {desc}
        </p>
        <ul className="mt-7 space-y-3.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] text-gray-700">
              {/* Custom bullet: a hairline-ringed ember tick, not a default disc. */}
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-500/20">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
        {visual}
      </Reveal>
    </div>
  )
}

/** Sliding pill for the "replaces your stack" marquee band. */
function ToolChip({
  icon: Icon,
  label,
  tone = 'light',
}: {
  icon: LucideIcon
  label: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <span
      className={`mx-1.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
        dark
          ? 'border-espresso-line/80 bg-espresso-soft/70 text-espresso-muted'
          : 'border-stone-200/80 bg-white text-gray-500 shadow-soft'
      }`}
    >
      <Icon className={`h-4 w-4 ${dark ? 'text-terracotta-400' : 'text-orange-400'}`} />
      {label}
    </span>
  )
}

// ── Feature mini-visuals ────────────────────────────────────────────────────
// Small abstract compositions in the product's design language; pure divs, no
// screenshots. They give each feature its own "look inside" moment.

const CLIENT_ROWS = [
  { name: 'Acme Co.', tag: 'Active', tint: 'bg-emerald-50 text-emerald-600' },
  { name: 'Nova Studio', tag: 'Lead', tint: 'bg-amber-50 text-amber-600' },
  { name: 'Pixel Labs', tag: 'Active', tint: 'bg-emerald-50 text-emerald-600' },
]

function ClientsVisual() {
  return (
    <div className="mt-6 space-y-2">
      {CLIENT_ROWS.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 rounded-xl border border-stone-200/80 bg-stone-50/70 px-3.5 py-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
            {c.name[0]}
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-800">{c.name}</div>
            <div className="mt-1.5 h-1.5 w-24 rounded bg-stone-200" />
          </div>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c.tint}`}>
            {c.tag}
          </span>
        </div>
      ))}
    </div>
  )
}

function InvoiceVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-wide text-gray-600">INV-2026-042</span>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
          PAID
        </span>
      </div>
      <div className="mt-3.5 space-y-2">
        <div className="h-1.5 w-3/4 rounded bg-stone-200" />
        <div className="h-1.5 w-1/2 rounded bg-stone-200" />
        <div className="h-1.5 w-2/3 rounded bg-stone-200" />
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-stone-300 pt-3">
        <span className="text-[11px] text-gray-400">Total · GST 18%</span>
        <span className="font-display text-lg font-bold text-gray-900">₹45,000</span>
      </div>
    </div>
  )
}

const KANBAN = [
  { title: 'To do', dot: 'bg-stone-400', bar: 'bg-stone-300', cards: [[70, 30], [55, 20]] },
  {
    title: 'Doing',
    dot: 'bg-orange-500',
    bar: 'bg-gradient-to-r from-orange-500 to-amber-400',
    cards: [[65, 60], [50, 45]],
  },
  { title: 'Done', dot: 'bg-emerald-500', bar: 'bg-emerald-400', cards: [[60, 100]] },
]

function KanbanVisual() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-2.5">
      {KANBAN.map((col) => (
        <div key={col.title} className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-2.5">
          <div className="flex items-center gap-1.5 px-1 pb-2">
            <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              {col.title}
            </span>
          </div>
          <div className="space-y-2">
            {col.cards.map(([title, progress], i) => (
              <div key={i} className="rounded-lg border border-stone-200/80 bg-white p-2">
                <div className="h-1.5 rounded bg-stone-200" style={{ width: `${title}%` }} />
                <div className={`mt-2 h-1 rounded ${col.bar}`} style={{ width: `${progress}%` }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Warm radial bloom behind a product mock. Drifts on scroll for depth. */
function MockGlow({ className = '' }: { className?: string }) {
  return (
    <Parallax
      speed={26}
      className={`pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(249,115,22,0.16),transparent_70%)] blur-2xl ${className}`}
    >
      <span />
    </Parallax>
  )
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FFF8F2] font-sans text-stone-800 antialiased selection:bg-orange-500/20 selection:text-orange-900">
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* Static ambient layers: top brand bloom + soft side washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(ellipse_70%_45%_at_50%_-8%,rgba(249,115,22,0.13),transparent_70%)]" />
        <div className="absolute right-0 top-[28rem] h-[34rem] w-[34rem] rounded-full bg-amber-200/20 blur-[130px]" />
        <div className="absolute left-0 top-[80rem] h-[30rem] w-[30rem] rounded-full bg-orange-200/20 blur-[130px]" />
      </div>

      <SiteHeader />

      <main className="relative z-10">
        {/* ───────── Hero ───────── */}
        <section className="relative">
          {/* Interactive 3D grid — pops toward the cursor for a depth effect */}
          <HeroGrid />

          {/* Hero copy — vertically centered in the viewport, transform-pinned +
              zoomed out on scroll (see HeroScroll) so the dashboard below rises
              and stacks on top of it. */}
          <HeroScroll className="relative z-0 mx-auto flex min-h-[100svh] max-w-5xl flex-col px-4 pt-20 pb-10 text-center sm:px-6">
            {/* Main copy group — centered in the space above the trust strip */}
            <div className="flex flex-1 flex-col items-center justify-center">
              <Reveal>
                <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                  Run your freelance business{' '}
                  <br className="hidden lg:block" />
                  without the{' '}
                  <span className="text-gradient-brand animate-gradient-pan font-serif-display text-[1.14em] font-normal italic drop-shadow-[0_2px_20px_rgba(249,115,22,0.25)]">
                    chaos
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
                  Clienter brings your clients, projects, invoices, and team together in one
                  beautiful place, built for freelancers and agencies.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                  {/* Primary — black pill, orange spotlight tracks the cursor on hover */}
                  <SpotlightButton
                    href={`${APP_URL}/signup`}
                    className="w-full px-8 py-[15px] text-base font-semibold sm:w-auto"
                  >
                    Start for free
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </SpotlightButton>

                  {/* Secondary — glass pill, brand glow ring + play chip that fills on hover */}
                  <Link
                    href="/how-it-works"
                    className="press group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-stone-200/90 bg-white/70 px-7 py-[15px] text-base font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-700 hover:shadow-[0_14px_36px_-14px_rgba(249,115,22,0.5)] sm:w-auto"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50 to-amber-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Play className="h-3 w-3 translate-x-[0.5px] fill-current" />
                    </span>
                    <span className="relative">See how it works</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Trust strip — sits in normal flow near the bottom of the hero.
                Uses a plain CSS fade-in (not <Reveal>'s IntersectionObserver)
                so it renders immediately on first paint, never gated behind
                a scroll-triggered visibility check. */}
            <div
              className="animate-fade-in mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm text-gray-500"
              style={{ animationDelay: '320ms' }}
            >
              {TRUST.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-orange-500" />
                  {label}
                </span>
              ))}
            </div>
          </HeroScroll>

          {/* Product preview — sits above the hero copy (z-20) and rises up to
              stack on top of it as the hero recedes. */}
          <div className="relative z-20 mx-auto -mt-4 max-w-5xl px-4 sm:mt-0 sm:px-6 lg:px-8">
            <div
              aria-hidden
              className="absolute inset-x-6 -top-10 bottom-10 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_50%_20%,rgba(249,115,22,0.16),transparent_70%)] blur-2xl"
            />
            <Reveal delay={200}>
              <TiltCard>
                <HeroPreview />
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* ───────── Product facts ─────────
            An editorial rail rather than a boxed band: figures set large and
            left-aligned, separated by hairlines that fade out at both ends. */}
        <section className="relative mt-20 sm:mt-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rule-warm" />
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 90}
                  className="group relative px-1 py-9 sm:px-6 sm:py-14"
                >
                  {/* Hairline separators — vertical on desktop, horizontal on
                      the 2-col mobile grid. Never a full box. */}
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="absolute inset-y-8 left-0 hidden w-px bg-gradient-to-b from-transparent via-line to-transparent lg:block"
                    />
                  )}
                  {i > 1 && (
                    <span
                      aria-hidden
                      className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent lg:hidden"
                    />
                  )}
                  <div className="text-gradient-brand font-display text-[2.75rem] font-extrabold leading-none tracking-[-0.03em] sm:text-[3.5rem]">
                    <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-3.5 text-sm leading-snug text-gray-500">{s.label}</div>
                </Reveal>
              ))}
            </div>
            <div className="rule-warm" />
          </div>
        </section>

        {/* ───────── Tool chaos → the Clienter way ─────────
            The page's first dark beat. The scattered stack slides overhead as
            two tilted, dimmed marquees — the "ten tabs" made literal — then
            resolves into the lit, ordered panel on the right. */}
        <section className="grain relative mt-20 overflow-hidden bg-espresso text-espresso-text sm:mt-28">
          {/* Ambient warmth: one deep bloom, drifting slowly on scroll. */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <Parallax
              speed={-70}
              className="absolute -top-52 right-[-10%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.20),transparent_65%)] blur-3xl"
            >
              <span />
            </Parallax>
            <div className="absolute inset-0 bg-dot-ember opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent)]" />
          </div>

          <div className="relative z-10 py-20 sm:py-28">
            {/* The clutter, sliding past — tilted off-axis so it never settles. */}
            <div aria-hidden className="relative -mx-6 rotate-[-2.2deg] space-y-3 opacity-90">
              <Marquee speed={40}>
                {REPLACES.map((t) => (
                  <ToolChip key={t.label} icon={t.icon} label={t.label} tone="dark" />
                ))}
              </Marquee>
              <Marquee speed={48} reverse>
                {[...REPLACES].reverse().map((t) => (
                  <ToolChip key={t.label} icon={t.icon} label={t.label} tone="dark" />
                ))}
              </Marquee>
            </div>

            <div className="mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-5">
                  <SectionHead
                    tone="dark"
                    label="One app instead of ten tabs"
                    title={
                      <>
                        Freelancing is hard enough. Your tools shouldn’t make it{' '}
                        <span className="text-gradient-ember font-serif-display text-[1.12em] font-normal italic">
                          harder
                        </span>
                        .
                      </>
                    }
                    sub="Most freelancers run their business across a dozen disconnected apps. Here’s what changes the day you switch."
                  />
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
                    {/* Old way — the stack literally doesn't line up. */}
                    <div>
                      <div className="flex items-center gap-2.5 pb-5 text-xs font-bold uppercase tracking-[0.2em] text-espresso-muted">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-espresso-soft text-espresso-muted ring-1 ring-inset ring-espresso-line">
                          <X className="h-3 w-3" strokeWidth={3} />
                        </span>
                        The old way
                      </div>
                      <ul className="space-y-3">
                        {CHAOS.map((chaos, i) => (
                          <Reveal key={chaos} delay={i * 70} as="li">
                            <div
                              className="flex gap-3 rounded-xl border border-espresso-line/70 bg-espresso-soft/50 px-4 py-3 text-[14px] leading-snug text-espresso-muted"
                              style={{
                                transform: `rotate(${CHAOS_SCATTER[i][0]}deg)`,
                                marginLeft: `${CHAOS_SCATTER[i][1]}px`,
                              }}
                            >
                              <X className="mt-0.5 h-3.5 w-3.5 flex-none text-espresso-muted/60" />
                              <span>{chaos}</span>
                            </div>
                          </Reveal>
                        ))}
                      </ul>
                    </div>

                    {/* The Clienter way — same content, finally at rest. The
                        label sits outside the panel so it shares a baseline
                        with "The old way" opposite. */}
                    <div className="relative">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(234,88,12,0.16),transparent_70%)] blur-xl"
                      />
                      <div className="flex items-center gap-2.5 pb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-400 ring-1 ring-inset ring-orange-500/30">
                          <Sparkles className="h-3 w-3" />
                        </span>
                        The Clienter way
                      </div>
                      <div className="rounded-2xl border border-orange-500/25 bg-gradient-to-b from-orange-500/[0.09] to-transparent px-4 py-1 shadow-ember sm:px-5">
                        <ul className="divide-y divide-orange-500/10">
                          {CALM.map((calm, i) => (
                            <Reveal key={calm} delay={i * 70} as="li">
                              <div className="flex gap-3 py-3 text-[14px] font-medium leading-snug text-espresso-text">
                                <Check
                                  className="mt-0.5 h-3.5 w-3.5 flex-none text-orange-400"
                                  strokeWidth={3}
                                />
                                <span>{calm}</span>
                              </div>
                            </Reveal>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Features (asymmetric showcase) ───────── */}
        <section id="features" className="relative scroll-mt-24 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead
              label="Everything in one place"
              icon={Sparkles}
              title={
                <>
                  Your entire agency,{' '}
                  <span className="text-gradient-brand font-serif-display text-[1.12em] font-normal italic">
                    beautifully organized
                  </span>
                </>
              }
              sub="Stop stitching together six different tools. Clienter does it all — and looks good doing it."
            />

            <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-32">
              {/* 1 — a plain window, with a live stat card breaking out of it. */}
              <FeatureSplit
                eyebrow="Client Management"
                icon={Users}
                title="Every client, in one calm profile"
                desc="Track every client, their status, and full project history in one organized place — no more digging through WhatsApp threads and old emails."
                points={[
                  'Full contact & project history',
                  'A status pipeline you can see at a glance',
                  'Notes, files, and payments in one view',
                ]}
                visual={
                  <div className="relative">
                    <MockGlow />
                    <ProductFrame url="clienter.co.in/clients">
                      <ClientsVisual />
                    </ProductFrame>
                    {/* Breaks the frame — depth without a drop shadow gimmick.
                        Hung off the corner rather than across it, so it never
                        sits on top of a client row. */}
                    <Parallax
                      speed={-22}
                      className="absolute -bottom-7 -left-10 hidden rounded-2xl border border-stone-200/80 bg-white/95 p-3.5 shadow-lift-3 backdrop-blur lg:block"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                          <TrendingUp className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display text-sm font-bold leading-none text-gray-900">
                            3 active
                          </div>
                          <div className="mt-1 text-[10px] font-medium text-stone-400">
                            1 lead in pipeline
                          </div>
                        </div>
                      </div>
                    </Parallax>
                  </div>
                }
              />

              {/* 2 — the invoice as a physical document: a stacked sheet behind,
                  the live one tilted on top. Deliberately not another window. */}
              <FeatureSplit
                flip
                eyebrow="Smart Invoicing"
                icon={FileText}
                title="Send GST-ready invoices in a minute"
                desc="Professional, branded invoices with line items, tax, and one-click PDF download — so you get paid faster and look sharp doing it."
                points={[
                  'GST-compliant, branded templates',
                  'One-click PDF export',
                  'Track paid, pending & overdue live',
                ]}
                visual={
                  <div className="relative mx-auto max-w-lg lg:mx-0 lg:ml-8">
                    <MockGlow />
                    {/* The sheet underneath — the invoice you sent last month. */}
                    <div
                      aria-hidden
                      className="absolute inset-x-6 -top-4 h-24 rotate-[-3deg] rounded-2xl border border-stone-200/70 bg-white/70 shadow-lift-1"
                    />
                    <Parallax speed={-16} className="relative">
                      <div className="rotate-[1.6deg] overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-lift-4">
                        {/* Perforated header strip — reads as paper, not chrome. */}
                        <div className="flex items-center justify-between border-b border-dashed border-stone-200 bg-stone-50/70 px-5 py-3">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                            Tax Invoice
                          </span>
                          <span className="font-display text-[10px] font-bold text-orange-600">
                            Clienter
                          </span>
                        </div>
                        <InvoiceVisual />
                      </div>
                    </Parallax>
                    <Parallax
                      speed={-30}
                      className="absolute -bottom-5 -right-2 hidden rounded-xl border border-stone-200/80 bg-white/95 px-3.5 py-2.5 shadow-lift-3 backdrop-blur sm:block"
                    >
                      <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-600">
                        <Download className="h-3.5 w-3.5" />
                        PDF exported
                      </div>
                    </Parallax>
                  </div>
                }
              />

              {/* 3 — a wide board that runs past its column edge. */}
              <FeatureSplit
                eyebrow="Project Tracking"
                icon={Briefcase}
                title="See exactly where every project stands"
                desc="Kanban boards, deadlines, budgets, and team assignments for every project — the whole studio on one clean board."
                points={[
                  'Drag-and-drop Kanban board',
                  'Deadlines & budgets per project',
                  'Assign your team in a click',
                ]}
                visual={
                  <div className="relative lg:-mr-16">
                    <MockGlow />
                    <ProductFrame url="clienter.co.in/projects">
                      <KanbanVisual />
                    </ProductFrame>
                  </div>
                }
              />
            </div>

            {/* Supporting features — an editorial index, not three more cards.
                Staggered vertical offsets + hairline rules keep the eye moving. */}
            <div className="relative mt-24 sm:mt-32">
              <div className="rule-warm" />
              <div className="grid gap-x-10 gap-y-12 pt-14 sm:grid-cols-3">
                {[
                  {
                    icon: TrendingUp,
                    n: '04',
                    title: 'Revenue Analytics',
                    desc: 'See monthly revenue, expenses, and profit at a glance — no spreadsheets.',
                    offset: 'sm:mt-0',
                  },
                  {
                    icon: UserPlus,
                    n: '05',
                    title: 'Team Management',
                    desc: 'Add developers and designers, assign them to projects, and track payments.',
                    offset: 'sm:mt-10',
                  },
                  {
                    icon: Bell,
                    n: '06',
                    title: 'Meeting Reminders',
                    desc: 'Schedule client meetings with automatic browser push reminders.',
                    offset: 'sm:mt-4',
                  },
                ].map(({ icon: Icon, n, title, desc, offset }, i) => (
                  <Reveal key={title} delay={i * 110} className={`group relative ${offset}`}>
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="absolute -left-5 top-1 hidden h-16 w-px bg-gradient-to-b from-line to-transparent sm:block"
                      />
                    )}
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xs font-bold tracking-[0.16em] text-orange-500/60">
                        {n}
                      </span>
                      <span className="h-px flex-1 bg-line/70" />
                      <Icon className="h-4 w-4 flex-none text-orange-500 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-gray-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-16">
              <Link
                href="/features"
                className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-orange-600 transition-colors hover:text-orange-700"
              >
                Explore all features
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-200 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-50">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Verified Client Reviews (flagship trust feature) ───────── */}
        <VerifiedReviews />

        {/* ───────── How it works (numbered spine) ───────── */}
        <section
          id="how"
          className="grain relative scroll-mt-24 overflow-hidden bg-espresso py-20 text-espresso-text sm:py-32"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <Parallax
              speed={-60}
              className="absolute -bottom-40 left-[-8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.16),transparent_65%)] blur-3xl"
            >
              <span />
            </Parallax>
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead
              tone="dark"
              label="Up and running in minutes"
              icon={Zap}
              title={
                <>
                  From signup to paid in{' '}
                  <span className="text-gradient-ember font-serif-display text-[1.12em] font-normal italic">
                    three steps
                  </span>
                </>
              }
            />

            <div className="relative mt-16 sm:mt-24">
              {/* The spine. Draws itself left-to-right on desktop (top-to-bottom
                  on mobile) as the section arrives, so the eye is pulled along
                  the sequence rather than hopping between columns. */}
              <Reveal
                variant="wipeX"
                aria-hidden
                className="absolute left-[1.75rem] top-0 hidden h-full w-px md:left-0 md:top-[1.75rem] md:h-px md:w-full md:block"
              >
                <span className="block h-full w-full bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0" />
              </Reveal>
              <span
                aria-hidden
                className="mask-fade-y absolute left-[1.75rem] top-0 block h-full w-px bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0 md:hidden"
              />

              <ol className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
                {STEPS.map((step, i) => (
                  <Reveal key={step.n} delay={i * 160} as="li" className="relative pl-20 md:pl-0">
                    {/* Number node — sits on the spine, with a lit ring. */}
                    <div className="absolute left-0 top-0 md:relative">
                      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/30 bg-espresso-soft font-display text-xl font-bold text-orange-300 shadow-ember">
                        {i + 1}
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent"
                        />
                      </span>
                    </div>
                    <span className="mt-0 block text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400/80 md:mt-8">
                      Step {step.n}
                    </span>
                    <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-espresso-text">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xs leading-relaxed text-espresso-muted">
                      {step.desc}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────── Pricing ───────── */}
        <section id="pricing" className="relative scroll-mt-24 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Centered here on purpose: three peers radiating from a middle
                hero card is the one place symmetry is the honest layout. */}
            <SectionHead
              align="center"
              label="Pricing"
              title={
                <>
                  Simple,{' '}
                  <span className="text-gradient-brand font-serif-display text-[1.12em] font-normal italic">
                    honest
                  </span>{' '}
                  pricing
                </>
              }
              sub="Start free. Upgrade only when you’re ready. No hidden fees, ever."
            />

            <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
              {PLANS.map((plan, i) => {
                const inner = (
                  <div className="relative flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold tracking-tight text-gray-900">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="rounded-full bg-gray-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-gray-500">{plan.tagline}</p>

                    {/* The badge row is always rendered, even on Free, so the
                        three price baselines land on the same line across the
                        set — peers should read as peers. */}
                    <div className="mt-5 flex h-7 items-center">
                      {plan.launch && (
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-orange-500/25 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-orange-700">
                          <Rocket className="h-3 w-3" />
                          Launch Offer
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-baseline gap-2.5">
                      {plan.originalPrice && (
                        // Hairline strike drawn over the old price rather than a
                        // heavy line-through — reads as a correction, not a slash.
                        <span className="relative font-display text-2xl font-bold text-stone-400">
                          {plan.originalPrice}
                          <span
                            aria-hidden
                            className="absolute inset-x-[-2px] top-1/2 h-px -rotate-[8deg] bg-terracotta-500/70"
                          />
                        </span>
                      )}
                      <span className="font-display text-[3.25rem] font-extrabold leading-none tracking-[-0.03em] text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-500">{plan.period}</span>
                    </div>

                    <ul className="mt-8 flex-1 space-y-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-[15px]">
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-500/20">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-gray-600">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`${APP_URL}/signup`}
                      className={`press focus-ember mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_28px_-10px_rgba(249,115,22,0.8)] hover:brightness-105'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                )

                return (
                  <Reveal key={plan.name} delay={i * 110} className="h-full">
                    {plan.popular ? (
                      // The one card allowed to be loud: raised, warm-lit, with a
                      // single slow sheen crossing it. Everything else stays quiet.
                      <div className="relative h-full rounded-3xl bg-gradient-to-b from-orange-400/60 to-orange-200/30 p-px shadow-ember-lg lg:-translate-y-4">
                        <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-orange-50/80 via-white to-white">
                          <span
                            aria-hidden
                            className="animate-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                          />
                          <span
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(249,115,22,0.12),transparent)]"
                          />
                          {inner}
                        </div>
                      </div>
                    ) : (
                      <div className="group/plan relative h-full overflow-hidden rounded-3xl border border-stone-200/80 bg-white/70 shadow-lift-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lift-3">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                )
              })}
            </div>

            <Reveal className="mt-10 flex flex-col items-center gap-5 text-center">
              <p className="inline-flex items-center gap-2 text-base font-semibold text-orange-600">
                <Rocket className="h-4 w-4 flex-none" />
                Launch pricing is limited time. Lock in your rate today.
              </p>
              <Link
                href="/pricing"
                className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-gray-500 transition-colors hover:text-orange-600"
              >
                Compare plans in detail
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Founder (editorial pull-quote) ─────────
            Asymmetric: the quote runs wide on the left, attribution sits in a
            narrow rail on the right, hung off a hairline. */}
        <section className="relative py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rule-warm" />
            <div className="grid gap-10 pt-16 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <Reveal>
                  <SectionLabel>From the founder</SectionLabel>
                </Reveal>
                <Reveal variant="mask" delay={100}>
                  <blockquote className="relative mt-7">
                    {/* Oversized open-quote, set as a background mark rather
                        than a floating decoration. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-2 -top-14 select-none font-serif-display text-[9rem] leading-none text-orange-500/10 sm:-left-8 sm:text-[13rem]"
                    >
                      &rdquo;
                    </span>
                    <p className="relative font-display text-[1.6rem] font-bold leading-[1.3] tracking-[-0.02em] text-gray-900 sm:text-[2.35rem] sm:leading-[1.24]">
                      I’m building Clienter for the same people I make content for — freelancers and
                      agency owners who want to grow without{' '}
                      <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                        drowning in tools
                      </span>
                      . This is the app I wished I had.
                    </p>
                  </blockquote>
                </Reveal>
              </div>

              <Reveal delay={200} className="lg:col-span-4">
                <div className="flex items-start gap-5 lg:h-full lg:flex-col lg:justify-center lg:border-l lg:border-line/70 lg:pl-10">
                  <div className="relative flex-none">
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.28),transparent_70%)] blur-md"
                    />
                    <Image
                      src={FOUNDER.photo}
                      alt={FOUNDER.name}
                      width={144}
                      height={144}
                      className="relative h-20 w-20 rounded-full object-cover shadow-lift-2 ring-1 ring-orange-500/20 sm:h-24 sm:w-24"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-gray-900">
                      {FOUNDER.name}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-500">{FOUNDER.role}</p>

                    <div className="mt-4 flex items-center gap-1.5">
                      {FOUNDER_SOCIALS.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${FOUNDER.name} on ${label}`}
                          className="focus-ember flex h-8 w-8 items-center justify-center rounded-full text-stone-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600"
                        >
                          <Icon className="h-[15px] w-[15px]" />
                        </a>
                      ))}
                    </div>

                    <Link
                      href="/about"
                      className="focus-ember group mt-5 inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                    >
                      Read the full story
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="scroll-mt-24 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead
              align="center"
              title="Frequently asked questions"
              sub="Everything you need to know before you get started."
            />
            <Reveal className="mt-14">
              <Faq variant="editorial" />
            </Reveal>
            <Reveal className="mt-10 text-center">
              <Link
                href="/faq"
                className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-gray-500 transition-colors hover:text-orange-600"
              >
                See all FAQs
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Final CTA ─────────
            The page lands dark: espresso, grain, and a single ember bloom
            rising behind the type. Warmer and more confident than a flat
            orange gradient panel. */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <div className="grain relative overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-20 text-center shadow-lift-4 sm:px-12 sm:py-28">
              <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                {/* Ember rising from the base, behind the headline: a hot core
                    at the foot of the panel fading up into amber at the crown. */}
                <div className="absolute inset-x-0 bottom-[-18%] h-[34rem] bg-[radial-gradient(ellipse_55%_55%_at_50%_100%,rgba(234,88,12,0.70),transparent_72%)]" />
                <div className="absolute inset-x-0 bottom-[-6%] h-[18rem] bg-[radial-gradient(ellipse_32%_60%_at_50%_100%,rgba(251,146,60,0.45),transparent_70%)]" />
                <div className="absolute inset-x-0 top-[-20%] h-[26rem] bg-[radial-gradient(ellipse_45%_60%_at_50%_0%,rgba(245,158,11,0.20),transparent_70%)]" />
                <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,black,transparent_80%)]" />
              </div>

              <div className="relative z-10">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-espresso-text backdrop-blur">
                    <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                    Free plan — no credit card
                  </span>
                </Reveal>
                <Reveal variant="mask" delay={100}>
                  <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-display-lg">
                    Start running your business the{' '}
                    <span className="text-gradient-ember font-serif-display text-[1.14em] font-normal italic">
                      calm
                    </span>{' '}
                    way
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mx-auto mt-6 max-w-measure text-lg leading-relaxed text-espresso-muted">
                    Create your free account and set up your first client in minutes. No credit card
                    required.
                  </p>
                </Reveal>
                <Reveal delay={280}>
                  <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Magnetic strength={7} className="w-full sm:w-auto">
                      <a
                        href={`${APP_URL}/signup`}
                        className="press focus-ember-dark group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-ember transition-all hover:brightness-110 sm:w-auto"
                      >
                        Create free account
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </Magnetic>
                    <Magnetic strength={5} className="w-full sm:w-auto">
                      <a
                        href={`${APP_URL}/login`}
                        className="press focus-ember-dark inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-espresso-text transition-colors hover:border-white/40 hover:bg-white/[0.06] sm:w-auto"
                      >
                        Sign in
                      </a>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────── Data privacy / security ───────── */}
        <DataSecurity variant="editorial" className="pt-16 pb-16 sm:pt-24 sm:pb-24" />
      </main>

      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  )
}
