import type { Metadata } from 'next'
import Link from 'next/link'
import {
  UserPlus,
  FolderKanban,
  FileText,
  Wallet,
  ArrowRight,
  Zap,
  Check,
  Clock,
  Send,
  Rocket,
  MousePointerClick,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { CountUp } from '@/components/landing/CountUp'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'How It Works — From Signup to Paid in 4 Steps',
  description:
    'See exactly how Clienter works: add your clients, run projects on a Kanban board, send GST-ready invoices, and track payments and revenue — all in one workspace built for Indian freelancers.',
  path: '/how-it-works',
  keywords: ['how Clienter works', 'freelance workflow software', 'invoice and project workflow'],
})

// ── Step mini-visuals ───────────────────────────────────────────────────────
// Small abstract compositions in the product's design language — pure divs, no
// screenshots. Each one gives a step its own "look inside" moment. They mirror
// the homepage FeatureSplit visuals so the two pages read as one product.

function ClientsVisual() {
  const rows = [
    { name: 'Acme Co.', tag: 'Active', tint: 'bg-emerald-50 text-emerald-600' },
    { name: 'Nova Studio', tag: 'Lead', tint: 'bg-amber-50 text-amber-600' },
    { name: 'Pixel Labs', tag: 'Active', tint: 'bg-emerald-50 text-emerald-600' },
  ]
  return (
    <div className="space-y-2">
      {rows.map((c) => (
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

function KanbanVisual() {
  const cols = [
    { title: 'To do', dot: 'bg-stone-400', bar: 'bg-stone-300', cards: [[70, 30], [55, 20]] },
    {
      title: 'Doing',
      dot: 'bg-orange-500',
      bar: 'bg-gradient-to-r from-orange-500 to-amber-400',
      cards: [[65, 60], [50, 45]],
    },
    { title: 'Done', dot: 'bg-emerald-500', bar: 'bg-emerald-400', cards: [[60, 100]] },
  ]
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {cols.map((col) => (
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

function InvoiceVisual() {
  return (
    <div className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-4">
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

function RevenueVisual() {
  const bars = [42, 58, 50, 72, 66, 92]
  return (
    <div className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-medium text-gray-400">This month</div>
          <div className="font-display text-lg font-bold text-gray-900">₹1,84,000</div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
          <TrendingUpMini /> +38%
        </span>
      </div>
      <div className="mt-4 flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${
              i === bars.length - 1
                ? 'bg-gradient-to-t from-orange-500 to-amber-400'
                : 'bg-stone-200'
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

// Tiny inline up-trend glyph so the revenue chip needs no extra import weight.
function TrendingUpMini() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M2 11l4-4 3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 5h3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type Step = {
  icon: LucideIcon
  n: string
  title: string
  desc: string
  detail: string
  visual: React.ReactNode
}

const STEPS: Step[] = [
  {
    icon: UserPlus,
    n: '01',
    title: 'Add your clients',
    desc: 'Create a profile for each client in seconds — contact details, company, notes, and status. This becomes the home for everything you do together.',
    detail: '~2 min for your first client',
    visual: <ClientsVisual />,
  },
  {
    icon: FolderKanban,
    n: '02',
    title: 'Run your projects',
    desc: 'Spin up projects, set budgets and deadlines, assign your team, and move work across a clean Kanban board. Everyone knows what to do and when.',
    detail: 'Drag-and-drop, zero training',
    visual: <KanbanVisual />,
  },
  {
    icon: FileText,
    n: '03',
    title: 'Invoice your work',
    desc: 'Turn completed work into a professional, GST-ready invoice with line items and tax. Download a branded PDF and send it to your client in one click.',
    detail: 'First invoice in under 5 min',
    visual: <InvoiceVisual />,
  },
  {
    icon: Wallet,
    n: '04',
    title: 'Get paid & track revenue',
    desc: 'Record payments, see what’s outstanding, and watch your revenue analytics update live. Pay your team and keep your profit clear.',
    detail: 'Live revenue, always clear',
    visual: <RevenueVisual />,
  },
]

// Honest product facts about the flow — no invented traction numbers.
const STATS = [
  { to: 4, prefix: '', suffix: '', label: 'Steps from signup to paid' },
  { to: 5, prefix: '~', suffix: ' min', label: 'To your first invoice' },
  { to: 0, prefix: '', suffix: '', label: 'Onboarding calls needed' },
  { to: 6, prefix: '', suffix: '-in-1', label: 'Tools in one workspace' },
]

// Realistic first-session actions, framed as a mini onboarding timeline.
const FIRST_FIVE: { icon: LucideIcon; title: string; desc: string; time: string }[] = [
  {
    icon: UserPlus,
    title: 'Add your first client',
    desc: 'Drop in a name and email — their profile is ready in seconds.',
    time: '0:30',
  },
  {
    icon: FolderKanban,
    title: 'Create a project',
    desc: 'Set a budget and a deadline, then start moving tasks on the board.',
    time: '1:30',
  },
  {
    icon: Send,
    title: 'Send an invoice',
    desc: 'Add line items, apply GST, and export a branded PDF in one click.',
    time: '3:30',
  },
  {
    icon: Users,
    title: 'Invite a teammate',
    desc: 'Bring a designer or developer in and assign them to the work.',
    time: '5:00',
  },
]

/** One alternating split row: text + detail chip on one side, a framed product
 *  window on the other. `flip` zig-zags consecutive rows down the page. */
function StepRow({ step, index, flip }: { step: Step; index: number; flip: boolean }) {
  const Icon = step.icon
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-4">
          {/* Big step number anchors the sequence */}
          <span className="font-display text-6xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_theme(colors.orange.300)] sm:text-7xl">
            {step.n}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
            <Icon className="h-3.5 w-3.5" /> Step {step.n}
          </span>
        </div>
        <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[2rem] sm:leading-[1.15]">
          {step.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">{step.desc}</p>
        {/* detail rendered as a highlighted stat/eyebrow chip */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 text-sm font-semibold text-orange-700 ring-1 ring-inset ring-orange-100">
          <Zap className="h-4 w-4 text-orange-500" />
          {step.detail}
        </div>
      </Reveal>

      <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(249,115,22,0.14),transparent_70%)] blur-2xl"
          />
          {/* Faux product window so each visual reads as a real screen */}
          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft-lg">
            <div className="flex items-center gap-1.5 border-b border-stone-100 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              <span className="ml-2 text-[11px] font-medium text-gray-400">
                {['Clients', 'Projects', 'Invoices', 'Analytics'][index]}
              </span>
            </div>
            <div className="px-5 pb-6 pt-5 sm:px-6">{step.visual}</div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default function HowItWorksPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'How it works', path: '/how-it-works' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <Zap className="h-4 w-4" /> Up and running in minutes
          </>
        }
        title="From signup to paid in"
        highlight="four simple steps"
        subtitle="Clienter is designed so you can start today, with no onboarding calls and no learning curve. Here’s the whole flow."
      />

      {/* ───────── Stat band (CountUp + dividers) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-stone-200/70 bg-white/60 shadow-soft-lg backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4">
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
          </div>
        </div>
      </section>

      {/* ───────── The four steps (alternating split rows on a progress rail) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
              <MousePointerClick className="h-3.5 w-3.5" /> The whole flow
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Four steps, start to{' '}
              <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                paid
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No manuals, no setup calls. Each step takes minutes — and everything you add flows
              straight into the next.
            </p>
          </Reveal>

          {/* Numbered progress rail down the center (desktop) links the steps */}
          <div className="relative mt-16 sm:mt-20">
            <div
              aria-hidden
              className="absolute left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-orange-200 via-orange-200 to-transparent lg:block"
              style={{ bottom: '4rem' }}
            />
            <div className="space-y-16 sm:space-y-24">
              {STEPS.map((step, i) => (
                <StepRow key={step.n} step={step} index={i} flip={i % 2 === 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── First 5 minutes (onboarding mini-timeline) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
              <Clock className="h-3.5 w-3.5" /> Your first five minutes
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              What you can do right after you sign up
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A quick head start — knock these out in one sitting and your workspace is already
              working for you.
            </p>
          </Reveal>

          <div className="relative mt-14">
            {/* vertical connector aligned to the number nodes */}
            <div
              aria-hidden
              className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-orange-200 via-orange-200 to-transparent sm:left-7"
            />
            <ol className="space-y-4">
              {FIRST_FIVE.map((item, i) => {
                const Icon = item.icon
                return (
                  <Reveal key={item.title} delay={i * 90} as="li">
                    <div className="relative flex items-center gap-4 sm:gap-6">
                      <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white text-orange-600 shadow-soft ring-1 ring-stone-200 sm:h-14 sm:w-14">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-4 rounded-2xl border border-stone-200/70 bg-white/70 px-5 py-4 shadow-soft backdrop-blur-sm sm:px-6">
                        <div>
                          <h3 className="font-display text-base font-bold text-gray-900 sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                        </div>
                        <span className="hidden flex-none items-center gap-1.5 rounded-full bg-stone-50 px-3 py-1.5 font-display text-sm font-bold text-gray-500 ring-1 ring-inset ring-stone-200 sm:inline-flex">
                          <Clock className="h-3.5 w-3.5 text-orange-400" />
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>

          {/* Closing "done" marker + demo link */}
          <Reveal className="mt-10 flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
              <Check className="h-4 w-4" /> You’re fully set up — in about five minutes
            </span>
            <Link
              href="/demo"
              className="press group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
            >
              <Rocket className="h-4 w-4" />
              See it in action
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
