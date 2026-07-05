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
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Lock,
  Download,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  type LucideIcon,
} from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { LandingHeader } from '@/components/landing/LandingHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { CursorGlow } from '@/components/landing/CursorGlow'
import { TiltCard } from '@/components/landing/TiltCard'
import { GlowCard } from '@/components/landing/GlowCard'
import { DashboardPreview } from '@/components/landing/DashboardPreview'
import { Reveal } from '@/components/landing/Reveal'
import { Faq } from '@/components/landing/Faq'
import { JsonLd } from '@/components/marketing/JsonLd'
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

// Plan limits mirror src/lib/plans.ts (the enforced source of truth) so the
// marketing copy never promises more than the app actually allows.
const PLANS = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    tagline: 'For getting started',
    features: ['Up to 3 clients', 'Up to 5 projects', 'Invoice generation', 'Basic analytics'],
    cta: 'Get started free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: '/month',
    tagline: 'For growing freelancers',
    features: [
      'Up to 25 clients',
      'Up to 50 projects',
      'Full invoice system',
      'Team management (up to 3 members)',
      'Priority support',
    ],
    cta: 'Start Pro',
    popular: true,
  },
  {
    name: 'Ultra',
    price: '₹1,999',
    period: '/month',
    tagline: 'For agencies at scale',
    features: [
      'Unlimited clients',
      'Unlimited projects',
      'Unlimited team members',
      'White-label invoices',
      'Dedicated support',
    ],
    cta: 'Start Ultra',
    popular: false,
  },
]

// Honest product facts — no fabricated traction or usage numbers. Each is
// true of the product itself, not of a user base.
const STATS = [
  { value: '6-in-1', label: 'Tools in one app' },
  { value: '₹0', label: 'To start — free forever' },
  { value: '~5 min', label: 'To your first invoice' },
  { value: '100%', label: 'Your data, always yours' },
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

/** Icon chip + title + copy shared by every bento feature card. */
function FeatureHeader({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-stone-400">{desc}</p>
    </>
  )
}

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
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl ${eyebrow ? 'mt-5' : ''}`}>
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-stone-400">{sub}</p>}
    </Reveal>
  )
}

// ── Bento feature mini-visuals ──────────────────────────────────────────────
// Small abstract compositions in the product's design language; pure divs, no
// screenshots. They give each card its own "look inside" moment.

const CLIENT_ROWS = [
  { name: 'Acme Co.', tag: 'Active', tint: 'bg-emerald-400/10 text-emerald-400' },
  { name: 'Nova Studio', tag: 'Lead', tint: 'bg-amber-400/10 text-amber-400' },
  { name: 'Pixel Labs', tag: 'Active', tint: 'bg-emerald-400/10 text-emerald-400' },
]

function ClientsVisual() {
  return (
    <div className="mt-6 space-y-2">
      {CLIENT_ROWS.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-xs font-bold text-orange-400">
            {c.name[0]}
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-stone-200">{c.name}</div>
            <div className="mt-1.5 h-1.5 w-24 rounded bg-white/[0.06]" />
          </div>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c.tint}`}>
            {c.tag}
          </span>
        </div>
      ))}
    </div>
  )
}

function AnalyticsVisual() {
  const bars = [35, 55, 42, 70, 58, 85, 66, 96]
  return (
    <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-stone-500">This month</span>
        <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
          <ArrowUpRight className="h-3 w-3" /> +18%
        </span>
      </div>
      <div className="mt-3 flex h-20 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t bg-gradient-to-t from-orange-500/25 to-orange-400 ${
              i === bars.length - 1 ? 'shadow-[0_0_14px_rgba(249,115,22,0.55)]' : ''
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function InvoiceVisual() {
  return (
    <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-wide text-stone-300">INV-2026-042</span>
        <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
          PAID
        </span>
      </div>
      <div className="mt-3.5 space-y-2">
        <div className="h-1.5 w-3/4 rounded bg-white/[0.06]" />
        <div className="h-1.5 w-1/2 rounded bg-white/[0.06]" />
        <div className="h-1.5 w-2/3 rounded bg-white/[0.06]" />
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-white/10 pt-3">
        <span className="text-[11px] text-stone-500">Total · GST 18%</span>
        <span className="font-display text-lg font-bold text-white">₹45,000</span>
      </div>
    </div>
  )
}

const KANBAN = [
  { title: 'To do', dot: 'bg-stone-500', bar: 'bg-white/15', cards: [[70, 30], [55, 20]] },
  {
    title: 'Doing',
    dot: 'bg-orange-400',
    bar: 'bg-gradient-to-r from-orange-500 to-amber-400',
    cards: [[65, 60], [50, 45]],
  },
  { title: 'Done', dot: 'bg-emerald-400', bar: 'bg-emerald-400/70', cards: [[60, 100]] },
]

function KanbanVisual() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-2.5">
      {KANBAN.map((col) => (
        <div key={col.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
          <div className="flex items-center gap-1.5 px-1 pb-2">
            <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">
              {col.title}
            </span>
          </div>
          <div className="space-y-2">
            {col.cards.map(([title, progress], i) => (
              <div key={i} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
                <div className="h-1.5 rounded bg-white/10" style={{ width: `${title}%` }} />
                <div className={`mt-2 h-1 rounded ${col.bar}`} style={{ width: `${progress}%` }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const TEAM_AVATARS = [
  { ch: 'R', tint: 'bg-orange-500/20 text-orange-300' },
  { ch: 'S', tint: 'bg-sky-500/20 text-sky-300' },
  { ch: 'A', tint: 'bg-violet-500/20 text-violet-300' },
  { ch: 'K', tint: 'bg-emerald-500/20 text-emerald-300' },
]

function TeamVisual() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2.5">
          {TEAM_AVATARS.map(({ ch, tint }) => (
            <div
              key={ch}
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#151210] text-xs font-bold ${tint}`}
            >
              {ch}
            </div>
          ))}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#151210] bg-white/10 text-[10px] font-semibold text-stone-300">
            +2
          </div>
        </div>
        <span className="text-xs text-stone-500">6 members · 4 assigned today</span>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {['Developer', 'Designer', 'Video editor'].map((role) => (
          <span
            key={role}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-stone-400"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  )
}

const REMINDERS = [
  { title: 'Client call — Acme Co.', when: 'Today · 4:30 PM', hot: true },
  { title: 'Project review — Nova', when: 'Tomorrow · 11 AM', hot: false },
]

function RemindersVisual() {
  return (
    <div className="mt-6 space-y-2">
      {REMINDERS.map((r) => (
        <div
          key={r.title}
          className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
        >
          <div
            className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg ${
              r.hot ? 'bg-orange-500/15 text-orange-400' : 'bg-white/[0.05] text-stone-400'
            }`}
          >
            <Bell className="h-4 w-4" />
          </div>
          <span className="flex-1 truncate text-sm font-medium text-stone-200">{r.title}</span>
          <span
            className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              r.hot ? 'bg-orange-500/10 text-orange-400' : 'bg-white/[0.05] text-stone-400'
            }`}
          >
            {r.when}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0B0908] font-sans text-stone-200 antialiased selection:bg-orange-500/30 selection:text-white">
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* Liquid cursor-chasing glow (fixed, behind everything) */}
      <CursorGlow />

      {/* Static ambient layers: top brand bloom, hero grid, film grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(249,115,22,0.14),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-grid-dark [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black_25%,transparent_75%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      <LandingHeader />

      <main className="relative z-10">
        {/* ───────── Hero ───────── */}
        <section className="relative pt-32 sm:pt-40">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Reveal>
              <a
                href={`${APP_URL}/signup`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-sm font-medium text-stone-300 backdrop-blur transition-colors hover:border-orange-500/30 hover:text-white"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                Now live — start for free
                <ArrowRight className="h-3.5 w-3.5 text-stone-500 transition-all group-hover:translate-x-0.5 group-hover:text-orange-400" />
              </a>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 text-balance font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Run your freelance business{' '}
                <br className="hidden lg:block" />
                without the{' '}
                <span className="text-gradient-fire animate-gradient-pan font-serif-display text-[1.14em] font-normal italic drop-shadow-[0_0_30px_rgba(249,115,22,0.35)]">
                  chaos
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-400 sm:text-xl">
                Clienter brings your clients, projects, invoices, and team together in one beautiful
                place, built for freelancers and agencies.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`${APP_URL}/signup`}
                  className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_-8px_rgba(249,115,22,0.7)] transition-all hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_48px_-8px_rgba(249,115,22,0.9)] sm:w-auto"
                >
                  Start for free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/how-it-works"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold text-stone-200 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
                >
                  See how it works
                </Link>
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={320}>
              <div className="mx-auto mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm text-stone-500">
                {TRUST.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5">
                    <Icon className="h-4 w-4 text-orange-400/80" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto mt-16 max-w-5xl px-4 sm:mt-20 sm:px-6 lg:px-8">
            <div
              aria-hidden
              className="absolute inset-x-6 -top-12 bottom-10 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_50%_20%,rgba(249,115,22,0.22),transparent_70%)] blur-2xl"
            />
            <Reveal delay={200}>
              <TiltCard>
                <DashboardPreview />
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* ───────── Stats bar ───────── */}
        <section className="relative mt-24 border-y border-white/[0.06] bg-white/[0.015] sm:mt-28">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="px-2 py-8 text-center sm:py-10">
                <div className="text-gradient-fire font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-sm text-stone-500">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Problem → Solution ───────── */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              title="Freelancing is hard enough. Your tools shouldn’t make it harder."
              sub="Most freelancers run their business across a dozen disconnected apps. Clienter replaces the mess with one calm system."
            />

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
                  <h3 className="font-display text-lg font-bold text-stone-500">Without Clienter</h3>
                  <ul className="mt-6 space-y-4">
                    {CHAOS.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[15px] text-stone-400">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/[0.05] text-stone-500">
                          <X className="h-3 w-3" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.08] via-transparent to-transparent p-8 shadow-[0_0_60px_-20px_rgba(249,115,22,0.35)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl"
                  />
                  <h3 className="font-display text-lg font-bold text-orange-400">With Clienter</h3>
                  <ul className="mt-6 space-y-4">
                    {CALM.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[15px] text-stone-200">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── Features (bento) ───────── */}
        <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-amber-500/[0.06] blur-[120px]"
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Everything in one place"
              icon={Sparkles}
              title="Your entire agency, beautifully organized"
              sub="Stop stitching together six different tools. Clienter does it all — and looks good doing it."
            />

            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <GlowCard className="rounded-2xl">
                  <div className="p-6 sm:p-7">
                    <FeatureHeader
                      icon={Users}
                      title="Client Management"
                      desc="Track every client, their status, and full project history in one organized place."
                    />
                    <ClientsVisual />
                  </div>
                </GlowCard>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5">
                <GlowCard className="rounded-2xl">
                  <div className="p-6 sm:p-7">
                    <FeatureHeader
                      icon={TrendingUp}
                      title="Revenue Analytics"
                      desc="See monthly revenue, expenses, and profit at a glance — no spreadsheets."
                    />
                    <AnalyticsVisual />
                  </div>
                </GlowCard>
              </Reveal>

              <Reveal className="lg:col-span-5">
                <GlowCard className="rounded-2xl">
                  <div className="p-6 sm:p-7">
                    <FeatureHeader
                      icon={FileText}
                      title="Smart Invoicing"
                      desc="Professional, GST-ready invoices with line items, tax, and one-click PDF download."
                    />
                    <InvoiceVisual />
                  </div>
                </GlowCard>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <GlowCard className="rounded-2xl">
                  <div className="p-6 sm:p-7">
                    <FeatureHeader
                      icon={Briefcase}
                      title="Project Tracking"
                      desc="Kanban boards, deadlines, budgets, and team assignments — for every project."
                    />
                    <KanbanVisual />
                  </div>
                </GlowCard>
              </Reveal>

              <Reveal className="lg:col-span-6">
                <GlowCard className="rounded-2xl">
                  <div className="p-6 sm:p-7">
                    <FeatureHeader
                      icon={UserPlus}
                      title="Team Management"
                      desc="Add developers and designers, assign them to projects, and track payments."
                    />
                    <TeamVisual />
                  </div>
                </GlowCard>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-6">
                <GlowCard className="rounded-2xl">
                  <div className="p-6 sm:p-7">
                    <FeatureHeader
                      icon={Bell}
                      title="Meeting Reminders"
                      desc="Schedule client meetings with automatic browser push reminders."
                    />
                    <RemindersVisual />
                  </div>
                </GlowCard>
              </Reveal>
            </div>

            <Reveal className="mt-12 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-400 transition-colors hover:text-orange-300"
              >
                Explore all features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── How it works ───────── */}
        <section id="how" className="relative scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Up and running in minutes"
              icon={Zap}
              title="From signup to paid in three steps"
            />

            <div className="relative mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent md:block"
              />
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 120}>
                  <GlowCard className="rounded-2xl">
                    <div className="relative overflow-hidden p-7 sm:p-8">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-extrabold leading-none text-white/[0.04]"
                      >
                        {step.n}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 font-display text-base font-bold text-white shadow-[0_0_24px_rgba(249,115,22,0.4)]">
                        {i + 1}
                      </div>
                      <h3 className="mt-6 font-display text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-stone-400">{step.desc}</p>
                    </div>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Pricing ───────── */}
        <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-orange-500/[0.07] blur-[120px]"
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Pricing"
              title="Simple, honest pricing"
              sub="Start free. Upgrade only when you’re ready. No hidden fees, ever."
            />

            <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {PLANS.map((plan, i) => {
                const inner = (
                  <div className="flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>
                      {plan.popular && (
                        <span className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(249,115,22,0.45)]">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-stone-500">{plan.tagline}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-extrabold tracking-tight text-white">
                        {plan.price}
                      </span>
                      <span className="text-stone-500">{plan.period}</span>
                    </div>
                    <ul className="mt-8 flex-1 space-y-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-[15px]">
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-stone-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`${APP_URL}/signup`}
                      className={`press mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_28px_-8px_rgba(249,115,22,0.8)] hover:brightness-110'
                          : 'border border-white/10 bg-white/[0.05] text-white hover:bg-white/10'
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
                      <div className="relative h-full overflow-hidden rounded-3xl bg-orange-500/25 p-px shadow-[0_0_80px_-20px_rgba(249,115,22,0.5)]">
                        <div
                          aria-hidden
                          className="absolute inset-[-100%] animate-[spin_7s_linear_infinite] [background:conic-gradient(from_0deg,transparent_0deg,transparent_240deg,rgba(251,191,36,0.9)_300deg,rgba(249,115,22,1)_330deg,transparent_360deg)]"
                        />
                        <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-[#17120E]">
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

            <Reveal className="mt-10 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-400 transition-colors hover:text-orange-300"
              >
                Compare plans in detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Founder ───────── */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                  From the founder
                </span>
                <blockquote className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                  “I’m building Clienter for the same people I make content for — freelancers and
                  agency owners who want to grow without drowning in tools. This is the app I wished
                  I had.”
                </blockquote>
                <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={FOUNDER.photo}
                      alt={FOUNDER.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-orange-500/40 shadow-[0_0_24px_rgba(249,115,22,0.3)]"
                    />
                    <div>
                      <p className="font-display text-lg font-bold text-white">{FOUNDER.name}</p>
                      <p className="text-sm text-stone-500">{FOUNDER.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {FOUNDER_SOCIALS.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${FOUNDER.name} on ${label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-stone-400 transition-colors hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
                >
                  Read the full story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="scroll-mt-24 py-24 pt-0 sm:py-32 sm:pt-0">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              title="Frequently asked questions"
              sub="Everything you need to know before you get started."
            />
            <Reveal className="mt-12">
              <Faq dark />
            </Reveal>
            <Reveal className="mt-8 text-center">
              <Link
                href="/faq"
                className="font-semibold text-orange-400 transition-colors hover:text-orange-300"
              >
                See all FAQs →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Final CTA ───────── */}
        <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-16 text-center sm:px-12 sm:py-24">
              <div
                aria-hidden
                className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_80%)]"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-full h-[26rem] w-[50rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange-500/20 blur-[100px]"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3.5 py-1.5 text-sm font-medium text-orange-300 backdrop-blur">
                  <ShieldCheck className="h-4 w-4" /> Free plan — no credit card
                </span>
                <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Start running your business the{' '}
                  <span className="text-gradient-fire animate-gradient-pan font-serif-display text-[1.14em] font-normal italic">
                    calm
                  </span>{' '}
                  way
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-stone-400">
                  Create your free account and set up your first client in minutes. No credit card
                  required.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={`${APP_URL}/signup`}
                    className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_-8px_rgba(249,115,22,0.8)] transition-all hover:brightness-110 sm:w-auto"
                  >
                    Create free account
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`${APP_URL}/login`}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold text-stone-200 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <div className="relative z-10">
        <SiteFooter dark />
      </div>
    </div>
  )
}
