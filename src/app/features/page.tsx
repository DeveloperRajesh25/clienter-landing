import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  Briefcase,
  FileText,
  UserPlus,
  TrendingUp,
  Bell,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  KanbanSquare,
  ReceiptText,
  FileSignature,
  ClipboardList,
  LayoutDashboard,
  CalendarClock,
  type LucideIcon,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { Marquee } from '@/components/landing/Marquee'
import { CountUp } from '@/components/landing/CountUp'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, APP_URL } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Features — Clients, Projects, Invoices & Team in One Place',
  description:
    'Explore everything Clienter does: a CRM lead pipeline, client management, quotations, proposals with e-signatures, intake forms, project tracking, GST-ready invoicing, a white-label client portal, Google Calendar & Meet, team management, and revenue analytics — built for Indian freelancers and agencies.',
  path: '/features',
  keywords: [
    'freelancer client management features',
    'invoice software features',
    'project tracking for freelancers',
    'team management software India',
  ],
})

// ── Feature copy (unchanged) ────────────────────────────────────────────────
type Feature = {
  icon: LucideIcon
  title: string
  tagline: string
  how: string[]
  benefit: string
}

const FEATURES: Feature[] = [
  {
    icon: KanbanSquare,
    title: 'CRM Lead Pipeline',
    tagline: 'A Kanban sales pipeline to track leads before they become clients.',
    how: [
      'Capture every lead in a visual pipeline with custom, drag-and-drop columns.',
      'Move prospects from first contact to won across the stages you define.',
      'Convert a won lead into a full client in one click — no re-typing details.',
    ],
    benefit:
      'Stop losing deals in your inbox. See exactly where every prospect stands and turn more conversations into paying clients.',
  },
  {
    icon: Users,
    title: 'Client Management',
    tagline: 'Every client, every detail, one organized profile.',
    how: [
      'Add clients in seconds with contact details, company, and notes.',
      'See each client’s full history — projects, invoices, payments, and meetings — on one screen.',
      'Track client status (active, lead, on-hold) so you always know where things stand.',
    ],
    benefit:
      'No more digging through WhatsApp, email, and spreadsheets to remember what a client owes or what you promised. It’s all in one place.',
  },
  {
    icon: ReceiptText,
    title: 'Quotations',
    tagline: 'Generate and send quotes before a project begins.',
    how: [
      'Draft itemized quotations with rates, quantities, and tax in ₹.',
      'Send a clean, branded quote for your client to review and approve.',
      'Turn an approved quote into a project or invoice without re-entering anything.',
    ],
    benefit:
      'Give clients a clear price up front and set the right expectations before a single hour of work begins.',
  },
  {
    icon: FileSignature,
    title: 'Proposals & E-Signatures',
    tagline: 'Send professional proposals your clients sign digitally.',
    how: [
      'Build polished proposals with your scope, pricing, and terms.',
      'Deliver them to clients through their branded portal.',
      'Clients review and sign digitally — no printing, scanning, or back-and-forth.',
    ],
    benefit:
      'Close work faster with proposals that look the part and get signed in minutes, right inside Clienter.',
  },
  {
    icon: ClipboardList,
    title: 'Intake Forms',
    tagline: 'Custom onboarding forms with public, tokenized links.',
    how: [
      'Build custom intake forms for onboarding new clients or projects.',
      'Share a secure, tokenized public link — no login required to fill it in.',
      'Responses flow straight back into the client’s record.',
    ],
    benefit:
      'Collect everything you need to start a project up front, without chasing clients over email for details.',
  },
  {
    icon: Briefcase,
    title: 'Project Tracking',
    tagline: 'Kanban boards, deadlines, and budgets for every project.',
    how: [
      'Spin up a project, link it to a client, and set a budget and deadline.',
      'Move work across a clean Kanban board — from To-do to In progress to Done.',
      'Assign team members to projects and track tasks against the budget.',
    ],
    benefit:
      'You always know which projects are on track, which are slipping, and how much budget is left — without a single status meeting.',
  },
  {
    icon: UserPlus,
    title: 'Team Management',
    tagline: 'Add your developers and designers, assign work, track payments.',
    how: [
      'Invite team members by email — they get their own secure login.',
      'Assign them to specific projects and tasks so everyone knows what to do.',
      'Track what you owe each team member and record payments as you go.',
    ],
    benefit:
      'Scale from solo freelancer to a small agency without losing control of who’s doing what and who you’ve paid.',
  },
  {
    icon: FileText,
    title: 'Smart Invoicing',
    tagline: 'Professional, GST-ready invoices in under a minute.',
    how: [
      'Build invoices with line items, quantities, rates, and tax.',
      'Amounts are in ₹ by default, with your business and GST details on every invoice.',
      'Download a clean, branded PDF and send it to your client in one click.',
    ],
    benefit:
      'Get paid faster with invoices that look like they came from an agency twice your size — no Word templates, no manual math.',
  },
  {
    icon: LayoutDashboard,
    title: 'White-Label Client Portal',
    tagline: 'A branded login where clients see everything in one place.',
    how: [
      'Give each client their own branded portal login.',
      'They view project progress, download invoices, and sign documents themselves.',
      'Everything stays under your brand — not ours.',
    ],
    benefit:
      'Look like the agency you’re becoming. Clients get a premium, self-serve experience that builds trust and cuts down status emails.',
  },
  {
    icon: CalendarClock,
    title: 'Google Calendar & Meet',
    tagline: 'Sync meetings with Google Calendar and auto-create Meet links.',
    how: [
      'Connect your Google Calendar so meetings stay in sync both ways.',
      'Auto-generate a Google Meet link for every scheduled call.',
      'Get push reminders before each meeting so you’re never late.',
    ],
    benefit:
      'Schedule once and let Clienter handle the calendar invite, the video link, and the reminder — no tab-switching.',
  },
  {
    icon: Bell,
    title: 'Meetings & Reminders',
    tagline: 'Never miss a client call again.',
    how: [
      'Schedule client meetings and attach them to the right client or project.',
      'Get automatic browser push reminders before each meeting.',
      'Keep a running history of every conversation alongside the client.',
    ],
    benefit:
      'Show up prepared and on time, every time — the small thing that makes clients trust you with bigger work.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Analytics',
    tagline: 'See your money clearly — revenue, expenses, and profit.',
    how: [
      'Your dashboard rolls up monthly revenue, outstanding invoices, and expenses automatically.',
      'Spot your best months and your most valuable clients at a glance.',
      'No spreadsheets, no formulas — the numbers update as you work.',
    ],
    benefit:
      'Make confident decisions about pricing, hiring, and which clients to keep — backed by real numbers, not gut feel.',
  },
]

const BY_TITLE: Record<string, Feature> = Object.fromEntries(FEATURES.map((f) => [f.title, f]))
const pick = (title: string): Feature => BY_TITLE[title]

/** Slug used for per-feature #anchors — kept identical to the old page so deep links survive. */
const slug = (title: string) => title.toLowerCase().replace(/[^a-z]+/g, '-')

// ── Product-window mock visuals (pure divs, product design language) ─────────

/** Faux app window with a 3-dot title bar — the "look inside" frame. */
function ProductWindow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(249,115,22,0.14),transparent_70%)] blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft-lg">
        <div className="flex items-center gap-1.5 border-b border-stone-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          <span className="ml-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            {label}
          </span>
        </div>
        <div className="px-5 pb-6 pt-4 sm:px-6">{children}</div>
      </div>
    </div>
  )
}

const PIPELINE = [
  {
    title: 'New',
    dot: 'bg-stone-400',
    leads: [
      { n: 'Rohan D.', v: '₹40k' },
      { n: 'Meera S.', v: '₹25k' },
    ],
  },
  {
    title: 'In talks',
    dot: 'bg-orange-500',
    leads: [{ n: 'Kiran V.', v: '₹80k' }],
  },
  {
    title: 'Won',
    dot: 'bg-emerald-500',
    leads: [{ n: 'Acme Co.', v: '₹1.2L' }],
  },
]

function PipelineVisual() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {PIPELINE.map((col) => (
        <div key={col.title} className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-2.5">
          <div className="flex items-center gap-1.5 px-1 pb-2">
            <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              {col.title}
            </span>
          </div>
          <div className="space-y-2">
            {col.leads.map((lead) => (
              <div key={lead.n} className="rounded-lg border border-stone-200/80 bg-white p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-700">{lead.n}</span>
                  <span className="text-[11px] font-bold text-orange-600">{lead.v}</span>
                </div>
                <div className="mt-2 h-1 w-full rounded bg-stone-100">
                  <div className="h-1 rounded bg-gradient-to-r from-orange-500 to-amber-400" style={{ width: '60%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const CLIENT_ROWS = [
  { name: 'Acme Co.', tag: 'Active', tint: 'bg-emerald-50 text-emerald-600' },
  { name: 'Nova Studio', tag: 'Lead', tint: 'bg-amber-50 text-amber-600' },
  { name: 'Pixel Labs', tag: 'Active', tint: 'bg-emerald-50 text-emerald-600' },
]

function ClientsVisual() {
  return (
    <div className="space-y-2">
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
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c.tint}`}>{c.tag}</span>
        </div>
      ))}
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
    <div className="grid grid-cols-3 gap-2.5">
      {KANBAN.map((col) => (
        <div key={col.title} className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-2.5">
          <div className="flex items-center gap-1.5 px-1 pb-2">
            <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              {col.title}
            </span>
          </div>
          <div className="space-y-2">
            {col.cards.map(([w, progress], i) => (
              <div key={i} className="rounded-lg border border-stone-200/80 bg-white p-2">
                <div className="h-1.5 rounded bg-stone-200" style={{ width: `${w}%` }} />
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
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">PAID</span>
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

// ── Layout data ─────────────────────────────────────────────────────────────

const VISUALS: Record<string, { node: React.ReactNode; label: string; flip: boolean }> = {
  'CRM Lead Pipeline': { node: <PipelineVisual />, label: 'Leads', flip: false },
  'Client Management': { node: <ClientsVisual />, label: 'Clients', flip: true },
  'Project Tracking': { node: <KanbanVisual />, label: 'Projects', flip: false },
  'Smart Invoicing': { node: <InvoiceVisual />, label: 'Invoice', flip: true },
}

type Group = {
  step: string
  eyebrow: string
  title: React.ReactNode
  sub: string
  flagship: string[]
  lite: string[]
  liteLayout: 'grid' | 'row'
}

const GROUPS: Group[] = [
  {
    step: '01',
    eyebrow: 'Win the work',
    title: (
      <>
        Turn conversations into{' '}
        <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
          paying clients
        </span>
      </>
    ),
    sub: 'From the first cold lead to a signed proposal — capture, qualify, and close without a single deal slipping through the cracks.',
    flagship: ['CRM Lead Pipeline', 'Client Management'],
    lite: ['Quotations', 'Proposals & E-Signatures', 'Intake Forms'],
    liteLayout: 'grid',
  },
  {
    step: '02',
    eyebrow: 'Deliver the work',
    title: (
      <>
        Run every project like{' '}
        <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
          clockwork
        </span>
      </>
    ),
    sub: 'Boards, budgets, portals, and meetings that keep the actual work — and your clients — moving on time.',
    flagship: ['Project Tracking'],
    lite: ['White-Label Client Portal', 'Google Calendar & Meet', 'Meetings & Reminders'],
    liteLayout: 'grid',
  },
  {
    step: '03',
    eyebrow: 'Get paid & grow',
    title: (
      <>
        Get paid faster and see the{' '}
        <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
          whole picture
        </span>
      </>
    ),
    sub: 'GST-ready invoices in a minute and live analytics that turn your day-to-day work into decisions.',
    flagship: ['Smart Invoicing'],
    lite: ['Revenue Analytics'],
    liteLayout: 'grid',
  },
  {
    step: '04',
    eyebrow: 'Your team',
    title: (
      <>
        Grow from solo into an{' '}
        <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
          agency
        </span>
      </>
    ),
    sub: 'Bring on developers and designers, hand off work, and stay on top of who you’ve paid.',
    flagship: [],
    lite: ['Team Management'],
    liteLayout: 'row',
  },
]

const STATS = [
  { to: 6, prefix: '', suffix: '-in-1', label: 'Tools in one app' },
  { to: 12, prefix: '', suffix: '', label: 'Features, one login' },
  { to: 0, prefix: '₹', suffix: '', label: 'To start — free forever' },
  { to: 5, prefix: '~', suffix: ' min', label: 'To your first invoice' },
]

// ── Presentational blocks ───────────────────────────────────────────────────

function FeatureNamePill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="mx-1.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-stone-200/80 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-soft">
      <Icon className="h-4 w-4 text-orange-400" />
      {label}
    </span>
  )
}

/** Full alternating split row with a framed product window — for flagship features. */
function FlagshipRow({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  const v = VISUALS[feature.title]
  return (
    <section id={slug(feature.title)} className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={v.flip ? 'lg:order-2' : ''}>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
          <Icon className="h-3.5 w-3.5" /> {feature.title}
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[2rem] sm:leading-[1.15]">
          {feature.tagline}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">{feature.benefit}</p>
        <ul className="mt-6 space-y-3">
          {feature.how.map((h) => (
            <li key={h} className="flex items-start gap-3 text-[15px] text-gray-700">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Check className="h-3 w-3" />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className={v.flip ? 'lg:order-1' : ''}>
        <ProductWindow label={v.label}>{v.node}</ProductWindow>
      </Reveal>
    </section>
  )
}

/** Light treatment — icon + title + tagline + how bullets, hairline divider, no card chrome. */
function LiteFeature({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <div id={slug(feature.title)} className="scroll-mt-28 border-t border-stone-200/70 pt-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="font-display text-lg font-bold text-gray-900">{feature.title}</h4>
      </div>
      <p className="mt-3 text-sm font-medium text-orange-600">{feature.tagline}</p>
      <ul className="mt-4 space-y-2.5">
        {feature.how.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
            <Check className="mt-1 h-3.5 w-3.5 flex-none text-orange-500" />
            {h}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm italic leading-relaxed text-gray-500">{feature.benefit}</p>
    </div>
  )
}

/** Wide horizontal band — used for a group that stands alone (Your team). */
function LiteRow({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <Reveal>
      <div
        id={slug(feature.title)}
        className="scroll-mt-28 grid items-center gap-8 rounded-3xl border border-stone-200/70 bg-white/60 p-7 shadow-soft backdrop-blur-sm sm:p-10 lg:grid-cols-[1fr_1.2fr]"
      >
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
            <Icon className="h-6 w-6" />
          </span>
          <h4 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900">
            {feature.title}
          </h4>
          <p className="mt-2 text-[15px] font-medium text-orange-600">{feature.tagline}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{feature.benefit}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-1">
          {feature.how.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 rounded-2xl border border-stone-200/70 bg-stone-50/60 px-4 py-3 text-[15px] text-gray-700"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Check className="h-3 w-3" />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

function GroupHeading({ step, eyebrow, title, sub }: Pick<Group, 'step' | 'eyebrow' | 'title' | 'sub'>) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
        <span className="font-display">{step}</span>
        <span className="h-1 w-1 rounded-full bg-orange-300" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">{sub}</p>
    </Reveal>
  )
}

export default function FeaturesPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <Sparkles className="h-4 w-4" /> Everything in one place
          </>
        }
        title="One app to run your whole"
        highlight="freelance business"
        subtitle="Stop stitching together six different tools. Clienter handles leads, clients, proposals, projects, invoices, your client portal, team, and analytics — and looks good doing it."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${APP_URL}/signup`}
            className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800 sm:w-auto"
          >
            Start for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
          >
            See how it works
          </Link>
        </div>
      </PageHero>

      {/* ── Feature-name marquee: all 12 sliding, two counter rows ── */}
      <div className="mt-16 space-y-3 sm:mt-20">
        <Marquee speed={44}>
          {FEATURES.map((f) => (
            <FeatureNamePill key={f.title} icon={f.icon} label={f.title} />
          ))}
        </Marquee>
        <Marquee speed={52} reverse>
          {[...FEATURES].reverse().map((f) => (
            <FeatureNamePill key={f.title} icon={f.icon} label={f.title} />
          ))}
        </Marquee>
      </div>

      {/* ── Honest product-fact stat band ── */}
      <section className="mt-16 border-y border-stone-200/70 bg-white/60 backdrop-blur-sm sm:mt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="border-stone-200/70 px-4 py-9 text-center sm:py-11 [&:nth-child(n+3)]:border-t lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="text-gradient-brand font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-gray-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Grouped feature sections ── */}
      {GROUPS.map((group) => (
        <section key={group.step} className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <GroupHeading step={group.step} eyebrow={group.eyebrow} title={group.title} sub={group.sub} />

            {group.flagship.length > 0 && (
              <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-24">
                {group.flagship.map((title) => (
                  <FlagshipRow key={title} feature={pick(title)} />
                ))}
              </div>
            )}

            {group.lite.length > 0 &&
              (group.liteLayout === 'row' ? (
                <div className="mt-12 sm:mt-16">
                  <LiteRow feature={pick(group.lite[0])} />
                </div>
              ) : (
                <div className="mt-14 grid gap-x-12 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                  {group.lite.map((title, i) => (
                    <Reveal key={title} delay={i * 90}>
                      <LiteFeature feature={pick(title)} />
                    </Reveal>
                  ))}
                </div>
              ))}
          </div>
        </section>
      ))}

      {/* ── Closing note before CTA ── */}
      <section className="pb-4">
        <Reveal className="mx-auto max-w-2xl px-4 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
          >
            See what’s included on each plan
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <CtaSection
        title="Ready to bring it all together?"
        subtitle="Create your free account and start running your freelance business the calm way."
      />
    </PageShell>
  )
}
