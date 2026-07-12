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
  type LucideIcon,
} from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { HeroGrid } from '@/components/landing/HeroGrid'
import { HeroScroll } from '@/components/landing/HeroScroll'
import { SpotlightButton } from '@/components/landing/SpotlightButton'
import { TiltCard } from '@/components/landing/TiltCard'
import { GlowCard } from '@/components/landing/GlowCard'
import { HeroPreview } from '@/components/landing/HeroPreview'
import { Reveal } from '@/components/landing/Reveal'
import { CountUp } from '@/components/landing/CountUp'
import { Marquee } from '@/components/landing/Marquee'
import { Faq } from '@/components/landing/Faq'
import { JsonLd } from '@/components/marketing/JsonLd'
import { DataSecurity } from '@/components/marketing/DataSecurity'
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

/** Centered section intro: eyebrow chip + headline + optional subcopy. */
function SectionIntro({
  eyebrow,
  icon: Icon,
  title,
  sub,
}: {
  eyebrow?: string
  icon?: LucideIcon
  title: React.ReactNode
  sub?: string
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl ${eyebrow ? 'mt-5' : ''}`}>
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-gray-600">{sub}</p>}
    </Reveal>
  )
}

/**
 * Large alternating feature showcase row — text on one side, a framed product
 * visual on the other. Replaces the old repetitive bento grid; `flip` swaps the
 * sides so consecutive features zig-zag down the page (Stripe/Linear style).
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
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
          <Icon className="h-3.5 w-3.5" /> {eyebrow}
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[2rem] sm:leading-[1.15]">
          {title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">{desc}</p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[15px] text-gray-700">
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(249,115,22,0.14),transparent_70%)] blur-2xl"
          />
          {/* Faux product window so each visual reads as a real screen. */}
          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft-lg">
            <div className="flex items-center gap-1.5 border-b border-stone-100 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
            </div>
            <div className="px-5 pb-6 pt-1 sm:px-6">{visual}</div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

/** Sliding pill for the "replaces your stack" marquee band. */
function ToolChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="mx-1.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-stone-200/80 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-soft">
      <Icon className="h-4 w-4 text-orange-400" />
      {label}
    </span>
  )
}

// ── Bento feature mini-visuals ──────────────────────────────────────────────
// Small abstract compositions in the product's design language; pure divs, no
// screenshots. They give each card its own "look inside" moment.

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
    <div className="mt-6 rounded-xl border border-stone-200/80 bg-stone-50/70 p-4">
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

        {/* ───────── Stats + "replaces your stack" band ───────── */}
        <section className="relative mt-16 border-y border-stone-200/70 bg-white/60 backdrop-blur-sm sm:mt-20">
          {/* Product facts — each number counts up the first time it's seen. */}
          <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className="group relative border-stone-200/70 px-4 py-9 text-center sm:py-11 [&:nth-child(n+3)]:border-t lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-t-0"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="text-gradient-brand font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Two counter-sliding rows of the tools Clienter quietly replaces. */}
          <div className="border-t border-stone-200/70 bg-white/40">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-9 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:px-8">
              <p className="shrink-0 text-center font-display text-sm font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-left">
                One app instead
                <br className="hidden sm:block" /> of ten tabs
              </p>
              <div className="min-w-0 flex-1 space-y-3">
                <Marquee speed={40}>
                  {REPLACES.map((t) => (
                    <ToolChip key={t.label} icon={t.icon} label={t.label} />
                  ))}
                </Marquee>
                <Marquee speed={48} reverse>
                  {[...REPLACES].reverse().map((t) => (
                    <ToolChip key={t.label} icon={t.icon} label={t.label} />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Problem → Solution (transformation ledger) ───────── */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              title="Freelancing is hard enough. Your tools shouldn’t make it harder."
              sub="Most freelancers run their business across a dozen disconnected apps. Here’s what changes the day you switch."
            />

            {/* One clean before→after ledger instead of two big cards. */}
            <Reveal className="mt-14">
              <div className="overflow-hidden rounded-3xl border border-stone-200/70 bg-white/60 shadow-soft-lg backdrop-blur-sm">
                {/* Column headers */}
                <div className="grid grid-cols-2 text-sm font-semibold">
                  <div className="flex items-center gap-2 px-5 py-4 text-gray-400 sm:px-8">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-gray-400">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    The old way
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50/60 to-amber-50/40 px-5 py-4 text-orange-600 sm:px-8">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    The Clienter way
                  </div>
                </div>

                {/* Paired rows: chaos on the left transforms into calm on the right */}
                {CHAOS.map((chaos, i) => (
                  <div
                    key={chaos}
                    className="group grid grid-cols-2 border-t border-stone-200/70 text-[15px]"
                  >
                    <div className="flex items-start gap-3 px-5 py-4 text-gray-500 sm:px-8">
                      <X className="mt-0.5 h-4 w-4 flex-none text-stone-300" />
                      <span className="line-clamp-3">{chaos}</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-orange-50/60 to-amber-50/40 px-5 py-4 text-gray-800 transition-colors group-hover:from-orange-100/70 sm:px-8">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-orange-500" />
                      <span className="font-medium">{CALM[i]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── Features (alternating showcase) ───────── */}
        <section id="features" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Everything in one place"
              icon={Sparkles}
              title="Your entire agency, beautifully organized"
              sub="Stop stitching together six different tools. Clienter does it all — and looks good doing it."
            />

            {/* Three flagship features zig-zag down the page — no bento cards. */}
            <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
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
                visual={<ClientsVisual />}
              />
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
                visual={<InvoiceVisual />}
              />
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
                visual={<KanbanVisual />}
              />
            </div>

            {/* The rest — a light icon row, deliberately not more cards. */}
            <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-stone-200/70 pt-12 sm:mt-24 sm:grid-cols-3">
              {[
                {
                  icon: TrendingUp,
                  title: 'Revenue Analytics',
                  desc: 'See monthly revenue, expenses, and profit at a glance — no spreadsheets.',
                },
                {
                  icon: UserPlus,
                  title: 'Team Management',
                  desc: 'Add developers and designers, assign them to projects, and track payments.',
                },
                {
                  icon: Bell,
                  title: 'Meeting Reminders',
                  desc: 'Schedule client meetings with automatic browser push reminders.',
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 100} className="group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                Explore all features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── How it works (numbered timeline) ───────── */}
        <section id="how" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Up and running in minutes"
              icon={Zap}
              title="From signup to paid in three steps"
            />

            <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {/* Connector line, aligned to the number nodes (desktop) */}
              <div
                aria-hidden
                className="absolute inset-x-[16%] top-7 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-200 to-transparent md:block"
              />
              {/* Directional arrows sitting in the gaps between the nodes */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-7 hidden -translate-y-1/2 md:grid md:grid-cols-3 md:gap-8"
              >
                {[0, 1].map((k) => (
                  <div key={k} className="relative">
                    <span className="absolute right-0 top-0 flex h-8 w-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-soft">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                ))}
              </div>
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 120} className="relative">
                  {/* Number node sits on the connector line */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-orange-500 to-orange-600 font-display text-xl font-bold text-white shadow-lg shadow-orange-500/30">
                    {i + 1}
                  </div>
                  <span className="mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                    Step {step.n}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-gray-600">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Pricing ───────── */}
        <section id="pricing" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Pricing"
              title="Simple, honest pricing"
              sub="Start free. Upgrade only when you’re ready. No hidden fees, ever."
            />

            <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {PLANS.map((plan, i) => {
                const inner = (
                  <div className="flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-gray-900">{plan.name}</h3>
                      {plan.popular && (
                        <span className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>
                    {plan.launch && (
                      <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                        🚀 Launch Offer
                      </span>
                    )}
                    <div className={`flex items-baseline gap-2 ${plan.launch ? 'mt-3' : 'mt-6'}`}>
                      {plan.originalPrice && (
                        <span className="font-display text-2xl font-bold text-gray-400 line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="font-display text-5xl font-extrabold tracking-tight text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <ul className="mt-8 flex-1 space-y-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-[15px]">
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-50 text-orange-600">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-gray-600">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`${APP_URL}/signup`}
                      className={`press mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
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
                  <Reveal key={plan.name} delay={i * 100} className="h-full">
                    {plan.popular ? (
                      // Animated conic border: the spinning highlight sweeps the
                      // 1px ring exposed by p-px; the faint orange base keeps the
                      // ring visible where the sweep isn't.
                      <div className="relative h-full overflow-hidden rounded-3xl bg-orange-300/50 p-px shadow-[0_24px_60px_-24px_rgba(249,115,22,0.5)] lg:-translate-y-3">
                        <div
                          aria-hidden
                          className="absolute inset-[-100%] animate-[spin_7s_linear_infinite] [background:conic-gradient(from_0deg,transparent_0deg,transparent_240deg,rgba(251,146,60,0.9)_300deg,rgba(249,115,22,1)_330deg,transparent_360deg)]"
                        />
                        <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-orange-50/70 to-white">
                          {inner}
                        </div>
                      </div>
                    ) : (
                      <GlowCard className="rounded-3xl">{inner}</GlowCard>
                    )}
                  </Reveal>
                )
              })}
            </div>

            <p className="mt-8 text-center text-base font-semibold text-orange-600">
              🚀 Launch pricing is limited time. Lock in your rate today.
            </p>

            <Reveal className="mt-6 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                Compare plans in detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Founder (editorial pull-quote) ───────── */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <span
                aria-hidden
                className="block select-none font-serif-display text-[5.5rem] leading-[0.7] text-orange-200"
              >
                &rdquo;
              </span>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                From the founder
              </span>
              <blockquote className="mt-6 font-display text-2xl font-bold leading-[1.35] tracking-tight text-gray-900 sm:text-[2rem]">
                I’m building Clienter for the same people I make content for — freelancers and
                agency owners who want to grow without{' '}
                <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                  drowning in tools
                </span>
                . This is the app I wished I had.
              </blockquote>

              <div className="mt-10 flex flex-col items-center gap-4">
                <Image
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  width={144}
                  height={144}
                  className="h-20 w-20 rounded-full object-cover shadow-lg shadow-orange-500/25 ring-2 ring-orange-200"
                />
                <div>
                  <p className="font-display text-lg font-bold text-gray-900">{FOUNDER.name}</p>
                  <p className="text-sm text-gray-500">{FOUNDER.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  {FOUNDER_SOCIALS.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${FOUNDER.name} on ${label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-gray-500 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                >
                  Read the full story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              title="Frequently asked questions"
              sub="Everything you need to know before you get started."
            />
            <Reveal className="mt-12">
              <Faq />
            </Reveal>
            <Reveal className="mt-8 text-center">
              <Link
                href="/faq"
                className="font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                See all FAQs →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Final CTA ───────── */}
        <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-16 text-center shadow-[0_30px_80px_-30px_rgba(249,115,22,0.6)] sm:px-12 sm:py-24">
              <div
                aria-hidden
                className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,black,transparent_80%)]"
              />
              <div
                aria-hidden
                className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-amber-300/40 blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur">
                  <ShieldCheck className="h-4 w-4" /> Free plan — no credit card
                </span>
                <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Start running your business the{' '}
                  <span className="font-serif-display text-[1.16em] font-normal italic drop-shadow-[0_2px_16px_rgba(0,0,0,0.15)]">
                    calm
                  </span>{' '}
                  way
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-orange-50">
                  Create your free account and set up your first client in minutes. No credit card
                  required.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={`${APP_URL}/signup`}
                    className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.25)] transition-all hover:bg-orange-50 sm:w-auto"
                  >
                    Create free account
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`${APP_URL}/login`}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────── Data privacy / security ───────── */}
        <DataSecurity className="pb-16 sm:pb-24" />
      </main>

      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  )
}
