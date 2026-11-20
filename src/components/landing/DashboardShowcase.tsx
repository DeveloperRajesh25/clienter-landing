'use client'

import Image from 'next/image'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  Home,
  Target,
  Users,
  FolderKanban,
  Repeat,
  TrendingUp,
  TrendingDown,
  Wallet,
  MessageSquare,
  Calendar,
  CheckSquare,
  FileSignature,
  UserCog,
  CreditCard,
  Star,
  Gift,
  HelpCircle,
  Settings,
  Bell,
  PanelLeftClose,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  Moon,
  LineChart,
  SlidersHorizontal,
  ChevronDown,
  CalendarDays,
  CheckCircle2,
  AlertTriangle,
  ReceiptText,
  FolderOpen,
  ListChecks,
  Globe,
  MousePointer2,
  IndianRupee,
  type LucideIcon,
} from 'lucide-react'

/* ────────────────────────────────────────────────────────────────────────────
   DashboardShowcase — pixel-faithful replica of the Clienter dashboard,
   matching the latest production "Overview" layout (Nov 2026).
   Demo workspace + figures are illustrative.
   ──────────────────────────────────────────────────────────────────────────── */

// ── Tooltip system ───────────────────────────────────────────────────────────

type TipRow = { label: string; value: string; color?: string }
type TipData = {
  variant: 'explain' | 'data'
  title: string
  text?: string
  rows?: TipRow[]
}
type TipState = TipData & { x: number; y: number; place: 'top' | 'bottom' }

interface TipApi {
  showAt: (clientX: number, clientY: number, data: TipData) => void
  hide: () => void
}

const TipContext = createContext<TipApi | null>(null)
const useTip = () => useContext(TipContext)

// ── Static data ──────────────────────────────────────────────────────────────

type NavItem = { label: string; icon: LucideIcon; active?: boolean; badge?: number; sub?: string }

const NAV_GROUPS: { label?: string; items: NavItem[] }[] = [
  { items: [{ label: 'Dashboard', icon: Home, active: true }] },
  {
    label: 'Pipeline',
    items: [
      { label: 'Leads', icon: Target },
      { label: 'Clients', icon: Users },
      { label: 'Projects', icon: FolderKanban },
    ],
  },
  {
    label: 'Revenue',
    items: [
      { label: 'Retainers', icon: Repeat },
      { label: 'Payments', icon: TrendingUp },
      { label: 'Payroll', icon: Wallet },
    ],
  },
  {
    label: 'Workspace',
    items: [
      { label: 'Messages', icon: MessageSquare },
      { label: 'Meetings', icon: Calendar },
      { label: 'Tasks', icon: CheckSquare, sub: 'Project task boards' },
      { label: 'Documents', icon: FileSignature, sub: 'Quotations & contracts' },
    ],
  },
  {
    label: 'Organization',
    items: [
      { label: 'Team', icon: UserCog },
      { label: 'Billing', icon: CreditCard },
      { label: 'Public Page', icon: Star },
      { label: 'Refer & Earn', icon: Gift },
      { label: 'Help', icon: HelpCircle },
    ],
  },
]

const MONTH_CARDS: {
  label: string
  value: string
  sub: string
  hint?: string
  icon: LucideIcon
  accent: 'stone' | 'red' | 'emerald'
  highlight?: boolean
  valueClass?: string
  tip: string
}[] = [
  {
    label: 'Revenue',
    value: '₹8,40,000',
    sub: '12 new projects',
    hint: 'Sum of new project budgets this month',
    icon: TrendingUp,
    accent: 'stone',
    tip: 'Booked revenue — the total budget of every project you started this month.',
  },
  {
    label: 'Received',
    value: '₹5,62,000',
    sub: 'Payments collected this month',
    icon: IndianRupee,
    accent: 'stone',
    tip: 'Actual cash collected. Log part-payments and Clienter tracks the running total for you.',
  },
  {
    label: 'Expenses',
    value: '₹1,48,500',
    sub: 'Team payouts & tools',
    icon: TrendingDown,
    accent: 'red',
    valueClass: 'text-red-600',
    tip: 'Everything going out — team payouts, subscriptions and tools — in one place.',
  },
  {
    label: 'Money in account',
    value: '₹4,13,500',
    sub: 'Received minus expenses',
    icon: Wallet,
    accent: 'emerald',
    highlight: true,
    tip: 'Your real cash position: everything received minus everything spent. No spreadsheet needed.',
  },
]

const ATTENTION: {
  icon: LucideIcon
  title: string
  body: string
  amount?: string
  action: string
  rail: string
  tone: string
}[] = [
  {
    icon: ReceiptText,
    title: '1 invoice overdue',
    body: 'Northwind Co. · 13 days late',
    amount: '₹1,20,000',
    action: 'Chase payment',
    rail: 'bg-red-500',
    tone: 'text-red-500',
  },
  {
    icon: FolderOpen,
    title: '6 projects past deadline',
    body: 'Acme Studio +5 more · 6 months late',
    action: 'Open',
    rail: 'bg-amber-400',
    tone: 'text-amber-500',
  },
  {
    icon: Users,
    title: '22 lead follow-ups overdue',
    body: 'Pipeline going cold',
    action: 'Call',
    rail: 'bg-amber-400',
    tone: 'text-amber-500',
  },
  {
    icon: FileSignature,
    title: '7 documents awaiting signature',
    body: 'New Contract +6 more · sent 159d ago',
    action: 'Follow up',
    rail: 'bg-stone-300',
    tone: 'text-stone-400',
  },
]

const WHATS_NEXT: { title: string; project: string }[] = [
  { title: 'Collect the project brief', project: 'Harbor CRM revamp' },
  { title: 'Collect the project brief', project: 'Peak Fitness app' },
  { title: 'Hand over and confirm delivery', project: 'Lumen landing page' },
  { title: 'Collect the project brief', project: 'Vista SaaS onboarding' },
]

const PULSE = {
  collectedPct: 69,
  booked: '₹68,40,000',
  received: '₹47,20,000',
  pending: '₹21,20,000',
  expenses: '₹12,80,000',
  inAccount: '₹34,40,000',
  mrr: '₹1,45,000',
  activeRetainers: 9,
  retainerPct: 22,
}

const PULSE_COUNTS: { label: string; value: string }[] = [
  { label: 'New projects', value: '6' },
  { label: 'Ongoing', value: '28' },
  { label: 'Completed', value: '112' },
  { label: 'Total projects', value: '146' },
  { label: 'Clients', value: '118' },
]

const FOLLOW_UPS: { name: string; late: string; amount?: string }[] = [
  { name: 'Rhea Kapoor', late: '141d late', amount: '₹2,40,000' },
  { name: 'Nexa web & CMS', late: '129d late', amount: '₹85,000' },
  { name: 'Orion Food Ecom', late: '128d late', amount: '₹3,10,000' },
  { name: 'Bluebird Rentals', late: '112d late' },
  { name: 'Metro community app', late: '107d late' },
]

const PORTAL_STATS = ['Messages', 'Approvals', 'Changes', 'Referrals', 'Reviews']

const TREND_MONTHS = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
const TREND_REVENUE = [780000, 1000000, 300000, 320000, 820000, 540000]
const TREND_RECEIVED = [180000, 620000, 580000, 590000, 380000, 240000]
const TREND_EXPENSES = [110000, 200000, 220000, 210000, 230000, 180000]

const COLORS = {
  revenue: '#3b82f6',
  received: '#10b981',
  expenses: '#ef4444',
}

// ── Root component ───────────────────────────────────────────────────────────

export function DashboardShowcase() {
  const rootRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={rootRef} className="relative">
      <TipProvider rootRef={rootRef}>
        <ShowcaseFrame />
      </TipProvider>
    </div>
  )
}

function TipProvider({
  rootRef,
  children,
}: {
  rootRef: React.RefObject<HTMLDivElement>
  children: ReactNode
}) {
  const [tip, setTip] = useState<TipState | null>(null)
  const [visible, setVisible] = useState(false)

  const showAt = useCallback(
    (clientX: number, clientY: number, data: TipData) => {
      const root = rootRef.current
      if (!root) return
      const rr = root.getBoundingClientRect()
      const x = clientX - rr.left
      const y = clientY - rr.top
      const place: 'top' | 'bottom' = y > 140 ? 'top' : 'bottom'
      setTip({ ...data, x, y, place })
      setVisible(true)
    },
    [rootRef]
  )

  const hide = useCallback(() => setVisible(false), [])

  const api = useMemo<TipApi>(() => ({ showAt, hide }), [showAt, hide])

  return (
    <TipContext.Provider value={api}>
      {children}
      <FloatingTip tip={tip} visible={visible} />
    </TipContext.Provider>
  )
}

function ShowcaseFrame() {
  const tip = useTip()
  const [scrolled, setScrolled] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-canvas shadow-lift-4 ring-1 ring-black/[0.03]">
      <BrowserChrome />

      <div className="flex h-[600px] bg-stone-50 sm:h-[680px] lg:h-[720px]">
        <ShowcaseSidebar />

        <div
          data-lenis-prevent
          onScroll={() => {
            if (!scrolled) setScrolled(true)
            tip?.hide()
          }}
          className="relative flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-stone-300/80 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5"
        >
          <DashboardContent />
        </div>
      </div>

      <BottomFade show={!scrolled} />

      <div className="pointer-events-none absolute bottom-4 right-4 z-20 hidden items-center gap-1.5 rounded-full bg-orange-500 px-3.5 py-2 text-xs font-semibold text-white shadow-ember sm:inline-flex">
        <HelpCircle className="h-3.5 w-3.5" />
        Help
      </div>
    </div>
  )
}

// ── Browser chrome ───────────────────────────────────────────────────────────

function BrowserChrome() {
  return (
    <div className="flex items-center gap-3 border-b border-stone-200/70 bg-gradient-to-b from-stone-50 to-stone-100/70 px-4 py-3">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      <div className="ml-1 hidden items-center gap-1 text-stone-300 sm:flex">
        <ArrowLeft className="h-4 w-4" />
        <ArrowRight className="h-4 w-4" />
        <RotateCw className="ml-0.5 h-[13px] w-[13px] text-stone-400" />
      </div>

      <div className="flex h-7 flex-1 items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3 text-[11px] font-medium text-stone-500 shadow-sm">
        <Lock className="h-3 w-3 flex-none text-emerald-500" />
        <span className="truncate">
          app.clienter.co.in<span className="text-stone-400">/dashboard</span>
        </span>
      </div>
    </div>
  )
}

// ── Sidebar ──────────────────────────────────────────────────────────────────

function ShowcaseSidebar() {
  return (
    <div className="hidden flex-none p-2.5 md:block">
      <aside className="flex h-full w-[216px] flex-col overflow-hidden rounded-[24px] border border-stone-200/70 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04),0_18px_44px_-24px_rgba(28,25,23,0.2)]">
      {/* Logo row */}
      <div className="flex h-14 flex-none items-center justify-between px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-8 w-8 flex-none items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="Clienter"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="truncate text-[17px] font-bold tracking-tight text-ink">Clienter</span>
        </div>
        <div className="flex flex-none items-center gap-0.5 text-stone-400">
          <Bell className="h-[18px] w-[18px]" strokeWidth={1.75} />
          <PanelLeftClose className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </div>
      </div>

      {/* Nav groups */}
      <nav className="min-h-0 flex-1 overflow-y-auto px-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex flex-col pb-2">
          {NAV_GROUPS.map((group, gi) => (
            <div key={gi} className={gi > 0 ? 'mt-2.5' : ''}>
              {group.label && (
                <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-stone-400">
                  {group.label}
                </p>
              )}
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="relative">
                      <div
                        className={`relative flex items-center gap-2.5 rounded-xl px-3 py-1.5 text-[13.5px] font-medium ${
                          item.active ? 'bg-orange-50 text-orange-700' : 'text-stone-600'
                        }`}
                      >
                        {item.active && (
                          <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-orange-600" />
                        )}
                        <Icon
                          className={`h-[18px] w-[18px] flex-none ${
                            item.active ? 'text-orange-600' : 'text-stone-400'
                          }`}
                          strokeWidth={1.75}
                        />
                        <span className="min-w-0 flex-1 leading-tight">
                          <span className="flex items-center gap-2">
                            <span className="truncate">{item.label}</span>
                            {item.badge && (
                              <span className="flex h-5 min-w-[20px] flex-none items-center justify-center rounded-full bg-orange-600 px-1.5 text-[11px] font-semibold text-white">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          {item.sub && (
                            <span className="block truncate text-[10px] font-normal text-stone-400">
                              ({item.sub})
                            </span>
                          )}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* Workspace footer */}
      <div className="flex-none p-2.5">
        <div className="flex items-center gap-2.5 rounded-2xl border border-stone-200/70 bg-stone-50 px-2.5 py-2">
          <span className="flex h-8 w-8 flex-none items-center justify-center overflow-hidden rounded-lg ring-1 ring-stone-200/70">
            <Image
              src="/webcros-logo.jpg"
              alt="WEBCROS"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-ink">WEBCROS</p>
            <span className="mt-0.5 inline-flex rounded-full bg-orange-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
              Ultra
            </span>
          </div>
          <Settings className="h-[18px] w-[18px] flex-none text-stone-400" />
        </div>
      </div>
      </aside>
    </div>
  )
}

// ── Dashboard content ──────────────────────────────────────────────────────

function DashboardContent() {
  return (
    <div className="min-h-full">
      {/* Overview header */}
      <header className="border-b border-stone-200/70 bg-stone-50/80 px-4 pb-5 pt-6 backdrop-blur sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[26px] font-semibold tracking-tight text-ink sm:text-[30px]">
              Overview
            </h2>
            <p className="mt-1 text-[13px] text-ink-muted">Rajesh · Friday, Nov 20</p>
          </div>
          <div className="hidden flex-wrap items-center gap-2 sm:flex">
            <button className="flex items-center gap-1.5 rounded-lg border border-stone-200/70 bg-white px-2.5 py-1.5 text-[12px] font-medium text-stone-600 shadow-sm">
              <Moon className="h-3.5 w-3.5" />
              Dark mode
            </button>
            <button className="flex items-center gap-1.5 rounded-lg border border-stone-200/70 bg-white px-2.5 py-1.5 text-[12px] font-medium text-stone-600 shadow-sm">
              <LineChart className="h-3.5 w-3.5" />
              Forecast
            </button>
            <button className="flex items-center gap-1.5 rounded-lg border border-stone-200/70 bg-white px-2.5 py-1.5 text-[12px] font-medium text-stone-600 shadow-sm">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Customise
            </button>
          </div>
        </div>
      </header>

      <div className="space-y-6 px-4 py-5 sm:px-6 sm:py-6">
        <ThisMonth />
        <TodayAttention />
        <WhatsNext />
        <BusinessPulse />
        <FollowUpsAndPortal />
        <RevenueTrend />
      </div>
    </div>
  )
}

// ── This month cards ─────────────────────────────────────────────────────────

function ThisMonth() {
  const tip = useTip()
  const toneMap = {
    stone: 'text-stone-400',
    red: 'text-red-500',
    emerald: 'text-emerald-500',
  } as const
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-[15px] font-semibold tracking-tight text-ink">This month</h3>
        <button className="flex items-center gap-1.5 rounded-lg border border-stone-200/70 bg-white px-2.5 py-1 text-[12px] font-medium text-stone-600 shadow-sm">
          November 2026
          <ChevronDown className="h-3 w-3 text-stone-400" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        {MONTH_CARDS.map((c) => {
          const Icon = c.icon
          return (
            <div
              key={c.label}
              onMouseMove={(e) =>
                tip?.showAt(e.clientX, e.clientY, {
                  variant: 'explain',
                  title: c.label,
                  text: c.tip,
                })
              }
              onMouseLeave={() => tip?.hide()}
              className={`relative overflow-hidden rounded-2xl border p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-md sm:p-5 ${
                c.highlight
                  ? 'border-emerald-200/70 bg-emerald-50/40'
                  : 'border-stone-200/70 bg-white'
              }`}
            >
              {c.highlight && (
                <span className="absolute inset-x-0 top-0 h-0.5 bg-emerald-400/80" />
              )}
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-ink-muted">{c.label}</span>
                <Icon className={`h-[18px] w-[18px] flex-none ${toneMap[c.accent]}`} strokeWidth={1.75} />
              </div>
              <p
                className={`mt-4 text-[26px] font-semibold leading-none tracking-tight tabular-nums sm:text-[30px] ${
                  c.highlight ? 'text-emerald-700' : c.valueClass || 'text-ink'
                }`}
              >
                {c.value}
              </p>
              <p className="mt-3 text-[12px] text-stone-400">{c.sub}</p>
              {c.hint && <p className="mt-0.5 text-[11px] leading-snug text-stone-400/80">{c.hint}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ── Today / Tasks / Needs attention ──────────────────────────────────────────

function PanelHeader({
  label,
  icon: Icon,
  action,
  badge,
}: {
  label: string
  icon?: LucideIcon
  action?: string
  badge?: string
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h4 className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-500">
        {Icon && <Icon className="h-[15px] w-[15px]" strokeWidth={1.75} />}
        {label}
        {badge && (
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-stone-100 px-1.5 text-[11px] font-semibold text-stone-600">
            {badge}
          </span>
        )}
      </h4>
      {action && (
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-stone-500">
          {action}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
      )}
    </div>
  )
}

function EmptyState({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-50 text-stone-300 ring-1 ring-stone-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <p className="text-[12px] text-stone-400">{text}</p>
    </div>
  )
}

function TodayAttention() {
  const tip = useTip()
  return (
    <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-5">
      {/* Left column: Today + Tasks */}
      <div className="space-y-3 lg:col-span-3">
        <div className="rounded-2xl border border-stone-200/70 bg-white p-4 shadow-soft sm:p-5">
          <PanelHeader label="Today" icon={CalendarDays} action="Calendar" />
          <EmptyState icon={CalendarDays} text="No meetings today." />
        </div>

        <div className="rounded-2xl border border-stone-200/70 bg-white p-4 shadow-soft sm:p-5">
          <PanelHeader label="Tasks" icon={CheckCircle2} action="Boards" />
          <div className="mt-3 flex items-center gap-4 border-b border-stone-100 pb-2 text-[12px] font-medium">
            <span className="text-stone-400">Overdue</span>
            <span className="text-ink">Today</span>
            <span className="text-stone-400">Next 3 days</span>
          </div>
          <EmptyState icon={CheckCircle2} text="No tasks in this window." />
        </div>
      </div>

      {/* Right column: Needs attention */}
      <div className="lg:col-span-2">
        <div
          onMouseMove={(e) =>
            tip?.showAt(e.clientX, e.clientY, {
              variant: 'explain',
              title: 'Needs attention',
              text: 'Clienter surfaces what is slipping — overdue invoices, stalled projects, cold leads — so nothing falls through the cracks.',
            })
          }
          onMouseLeave={() => tip?.hide()}
          className="h-full rounded-2xl border border-stone-200/70 bg-white p-4 shadow-soft sm:p-5"
        >
          <PanelHeader label="Needs attention" icon={AlertTriangle} badge="4" />
          <ul className="mt-3 space-y-2">
            {ATTENTION.map((a) => {
              const Icon = a.icon
              return (
                <li
                  key={a.title}
                  className="relative flex items-start gap-3 rounded-xl border border-stone-100 px-3.5 py-3"
                >
                  <span className={`absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full ${a.rail}`} />
                  <Icon className={`mt-0.5 h-4 w-4 flex-none ${a.tone}`} strokeWidth={1.75} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12.5px] font-semibold text-ink">{a.title}</p>
                    <p className="truncate text-[11px] text-stone-400">{a.body}</p>
                  </div>
                  <div className="flex flex-none flex-col items-end gap-0.5">
                    {a.amount && (
                      <span className="text-[12px] font-semibold tabular-nums text-ink">{a.amount}</span>
                    )}
                    <span className="text-[11px] font-medium text-orange-600">{a.action}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ── What's next ──────────────────────────────────────────────────────────────

function WhatsNext() {
  const tip = useTip()
  return (
    <section
      onMouseMove={(e) =>
        tip?.showAt(e.clientX, e.clientY, {
          variant: 'explain',
          title: "What's next",
          text: 'A single prioritised to-do list across every project — Clienter always tells you the next move.',
        })
      }
      onMouseLeave={() => tip?.hide()}
      className="rounded-2xl border border-stone-200/70 bg-white p-4 shadow-soft sm:p-5"
    >
      <div className="flex items-center justify-between">
        <h4 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
          <ListChecks className="h-[18px] w-[18px] text-orange-500" strokeWidth={1.75} />
          What&apos;s next
          <span className="text-[13px] font-medium text-stone-400">(14)</span>
        </h4>
        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-stone-500">
          <Users className="h-3.5 w-3.5" strokeWidth={1.75} />
          Your move
        </span>
      </div>

      <ul className="mt-3 divide-y divide-stone-100">
        {WHATS_NEXT.map((w, i) => (
          <li key={i} className="flex items-center gap-3 py-2.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13.5px] font-semibold text-ink">{w.title}</p>
              <p className="truncate text-[12px] text-stone-400">{w.project}</p>
            </div>
            <ArrowRight className="h-4 w-4 flex-none text-stone-300" strokeWidth={1.75} />
          </li>
        ))}
      </ul>

      <div className="mt-2 text-center">
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-stone-500">
          View all 14 items
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </div>
    </section>
  )
}

// ── Business pulse ───────────────────────────────────────────────────────────

function BusinessPulse() {
  const tip = useTip()
  const r = 52
  const circ = 2 * Math.PI * r
  const filled = (PULSE.collectedPct / 100) * circ

  return (
    <section
      onMouseMove={(e) =>
        tip?.showAt(e.clientX, e.clientY, {
          variant: 'explain',
          title: 'Business pulse',
          text: 'Your all-time money picture at a glance — collected vs pending, expenses, cash in hand and recurring revenue.',
        })
      }
      onMouseLeave={() => tip?.hide()}
      className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-soft"
    >
      <header className="flex items-center justify-between gap-3 border-b border-stone-200/70 px-5 py-3.5">
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-500">
            Business pulse
          </h2>
          <p className="mt-0.5 text-[11px] text-stone-400">All time</p>
        </div>
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-stone-500">
          Payments
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
      </header>

      <div className="grid grid-cols-1 divide-y divide-stone-200/70 md:grid-cols-[160px_1fr_200px] md:divide-x md:divide-y-0">
        {/* Gauge */}
        <div className="flex flex-col items-center justify-center px-5 py-5">
          <div className="relative h-[140px] w-[140px]">
            <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
              <circle cx="70" cy="70" r={r} fill="none" stroke="#f0efed" strokeWidth="15" />
              <circle
                cx="70"
                cy="70"
                r={r}
                fill="none"
                stroke={COLORS.received}
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray={`${filled} ${circ - filled}`}
              />
            </svg>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[26px] font-bold tabular-nums text-ink">{PULSE.collectedPct}%</span>
              <span className="text-[11px] font-medium text-stone-400">collected</span>
            </div>
          </div>
          <p className="mt-1 text-center text-[11px] text-stone-400">of {PULSE.booked} booked</p>
        </div>

        {/* Figures */}
        <div className="flex flex-col justify-center gap-4 px-5 py-5">
          <div>
            <div className="flex h-2 overflow-hidden rounded-full bg-stone-100">
              <span className="bg-emerald-500" style={{ width: `${PULSE.collectedPct}%` }} />
              <span className="flex-1 bg-amber-300" />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-stone-400">
              <span>Received {PULSE.collectedPct}%</span>
              <span>Pending {PULSE.pending}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
            {[
              { label: 'Received', value: PULSE.received, color: 'text-emerald-700' },
              { label: 'Pending', value: PULSE.pending, color: 'text-amber-600' },
              { label: 'Expenses', value: PULSE.expenses, color: 'text-red-600' },
              { label: 'In account', value: PULSE.inAccount, color: 'text-emerald-700' },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-[10px] uppercase tracking-[0.06em] text-stone-400">{f.label}</p>
                <p className={`mt-1 text-[15px] font-semibold tabular-nums tracking-tight ${f.color}`}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recurring */}
        <div className="flex flex-col justify-center gap-3 px-5 py-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.06em] text-stone-400">Monthly recurring</p>
              <p className="mt-1 text-[22px] font-semibold leading-none tabular-nums tracking-tight text-ink">
                {PULSE.mrr}
              </p>
              <p className="mt-1.5 text-[11px] text-stone-400">{PULSE.activeRetainers} active retainers</p>
            </div>
            <Repeat className="h-[18px] w-[18px] flex-none text-stone-400" strokeWidth={1.75} />
          </div>
          <div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-stone-100">
              <span className="bg-orange-500" style={{ width: `${PULSE.retainerPct}%` }} />
              <span className="flex-1 bg-stone-200" />
            </div>
            <p className="mt-1.5 text-[11px] text-stone-400">
              {PULSE.retainerPct}% of revenue is retainer work
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-[12px] font-medium text-stone-500">
            Retainers
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </span>
        </div>
      </div>

      {/* Counter strip */}
      <div className="grid grid-cols-5 divide-x divide-stone-200/70 border-t border-stone-200/70">
        {PULSE_COUNTS.map((c) => (
          <div key={c.label} className="flex flex-col gap-1 px-3 py-3">
            <p className="text-[17px] font-semibold leading-none tabular-nums tracking-tight text-ink">
              {c.value}
            </p>
            <p className="text-[10px] leading-tight text-stone-400">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Lead follow-ups + Client portal ──────────────────────────────────────────

function FollowUpsAndPortal() {
  return (
    <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-2">
      <LeadFollowUps />
      <ClientPortal />
    </div>
  )
}

function LeadFollowUps() {
  const tip = useTip()
  return (
    <section
      onMouseMove={(e) =>
        tip?.showAt(e.clientX, e.clientY, {
          variant: 'explain',
          title: 'Lead follow-ups',
          text: 'A built-in CRM that chases itself — Clienter ranks every overdue lead so you always know who to call next.',
        })
      }
      onMouseLeave={() => tip?.hide()}
      className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-soft"
    >
      <div className="flex items-center justify-between gap-3 px-5 py-3.5">
        <h4 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
          <Target className="h-[18px] w-[18px] text-orange-500" strokeWidth={1.75} />
          Lead follow-ups
        </h4>
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-orange-600">
          Open leads
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 px-5 pb-3">
        <button className="flex-1 rounded-lg px-3 py-1.5 text-center text-[12px] font-medium text-stone-400">
          Today
        </button>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[12px] font-semibold text-ink shadow-sm ring-1 ring-stone-200/70">
          Overdue
          <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-50 px-1 text-[10px] font-bold text-red-500">
            22
          </span>
        </button>
      </div>

      <ul className="divide-y divide-stone-100 px-5">
        {FOLLOW_UPS.map((l) => (
          <li key={l.name} className="flex items-center justify-between gap-3 py-2.5">
            <p className="min-w-0 flex-1 truncate text-[13px] font-medium text-ink">{l.name}</p>
            <div className="flex flex-none items-center gap-3 text-[12px]">
              <span className="font-medium text-red-500">{l.late}</span>
              {l.amount && <span className="font-semibold tabular-nums text-ink">{l.amount}</span>}
            </div>
          </li>
        ))}
      </ul>

      <div className="px-5 pb-2 pt-1">
        <span className="text-[12px] font-medium text-orange-600">+17 more</span>
      </div>

      <div className="flex items-center gap-2 border-t border-stone-100 px-5 py-3 text-[11px] text-stone-400">
        <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span>
          <span className="font-semibold text-stone-600">42</span> open leads have no follow-up date
        </span>
      </div>
    </section>
  )
}

function ClientPortal() {
  const tip = useTip()
  return (
    <section
      onMouseMove={(e) =>
        tip?.showAt(e.clientX, e.clientY, {
          variant: 'explain',
          title: 'Client portal',
          text: 'Your clients get their own portal — messages, approvals, change requests, referrals and reviews, all in one place.',
        })
      }
      onMouseLeave={() => tip?.hide()}
      className="rounded-2xl border border-stone-200/70 bg-white p-5 shadow-soft"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
          <Globe className="h-[18px] w-[18px] text-orange-500" strokeWidth={1.75} />
          Client portal
        </h4>
        <div className="flex items-center gap-1 rounded-lg bg-stone-100 p-0.5">
          <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm">
            Activity
          </span>
          <span className="px-2.5 py-1 text-[11px] font-medium text-stone-400">Announce</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-5 gap-1.5">
        {PORTAL_STATS.map((label) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 rounded-xl border border-stone-100 py-3"
          >
            <span className="text-[20px] font-bold tabular-nums text-stone-300">0</span>
            <span className="text-[10px] text-stone-400">{label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-8">
        <p className="text-[12px] text-stone-400">No recent portal activity.</p>
      </div>
    </section>
  )
}

// ── Revenue trend ────────────────────────────────────────────────────────────

function smoothPath(pts: [number, number][]) {
  if (pts.length < 2) return ''
  let d = `M ${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
  }
  return d
}

function RevenueTrend() {
  const tip = useTip()
  const W = 760
  const H = 300
  const padL = 46
  const padR = 12
  const padT = 14
  const padB = 30
  const plotW = W - padL - padR
  const plotH = H - padT - padB
  const n = TREND_MONTHS.length
  const yMax = 1000000

  const xAt = (i: number) => padL + (i / (n - 1)) * plotW
  const yAt = (v: number) => padT + plotH - (v / yMax) * plotH

  const revenuePts: [number, number][] = TREND_REVENUE.map((v, i) => [xAt(i), yAt(v)])
  const receivedPts: [number, number][] = TREND_RECEIVED.map((v, i) => [xAt(i), yAt(v)])
  const expensesPts: [number, number][] = TREND_EXPENSES.map((v, i) => [xAt(i), yAt(v)])

  const areaOf = (pts: [number, number][]) =>
    `${smoothPath(pts)} L ${xAt(n - 1)},${padT + plotH} L ${xAt(0)},${padT + plotH} Z`

  const ticks = [0, 200000, 400000, 600000, 800000, 1000000]

  return (
    <section
      onMouseMove={(e) =>
        tip?.showAt(e.clientX, e.clientY, {
          variant: 'explain',
          title: 'Revenue trend',
          text: 'Track new revenue, collections and expenses over time — spot seasonal patterns at a glance.',
        })
      }
      onMouseLeave={() => tip?.hide()}
      className="rounded-2xl border border-stone-200/70 bg-white p-5 shadow-soft"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="text-[15px] font-semibold tracking-tight text-ink">Revenue trend</h4>
          <p className="mt-0.5 text-[12px] text-stone-400">Received, expenses &amp; new revenue</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 text-[11px] text-ink-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.revenue }} />
              Revenue (New)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.received }} />
              Received
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.expenses }} />
              Expenses
            </span>
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-stone-200/70 bg-white px-2.5 py-1 text-[12px] font-medium text-stone-600 shadow-sm">
            <Calendar className="h-3 w-3 text-stone-400" />
            June 2026 – November 2026
            <ChevronDown className="h-3 w-3 text-stone-400" />
          </button>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" style={{ maxHeight: 260 }} aria-hidden>
        <defs>
          <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.revenue} stopOpacity={0.22} />
            <stop offset="100%" stopColor={COLORS.revenue} stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id="fillReceived" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.received} stopOpacity={0.22} />
            <stop offset="100%" stopColor={COLORS.received} stopOpacity={0.02} />
          </linearGradient>
        </defs>

        {ticks.map((t) => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={yAt(t)} y2={yAt(t)} stroke="#f0efed" strokeWidth={1} />
            <text x={padL - 8} y={yAt(t) + 4} textAnchor="end" fontSize="11" fill="#a8a29e">
              {t === 0 ? '0' : `${t / 100000}L`}
            </text>
          </g>
        ))}

        <path d={areaOf(revenuePts)} fill="url(#fillRevenue)" />
        <path d={areaOf(receivedPts)} fill="url(#fillReceived)" />
        <path d={smoothPath(revenuePts)} fill="none" stroke={COLORS.revenue} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        <path d={smoothPath(receivedPts)} fill="none" stroke={COLORS.received} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        <path d={smoothPath(expensesPts)} fill="none" stroke={COLORS.expenses} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

        {TREND_MONTHS.map((m, i) => (
          <text key={m} x={xAt(i)} y={H - 6} textAnchor="middle" fontSize="12" fill="#a8a29e">
            {m}
          </text>
        ))}
      </svg>
    </section>
  )
}

// ── Floating tooltip renderer ────────────────────────────────────────────────

function FloatingTip({ tip, visible }: { tip: TipState | null; visible: boolean }) {
  if (!tip) return null
  const isTop = tip.place === 'top'
  const scale = visible ? 1 : 0.94
  const transform = `translate(-50%, ${isTop ? 'calc(-100% - 10px)' : '10px'}) scale(${scale})`

  return (
    <div aria-hidden className="pointer-events-none absolute z-40" style={{ left: tip.x, top: tip.y }}>
      <div
        className="origin-center transition-all duration-150 ease-out"
        style={{ transform, opacity: visible ? 1 : 0 }}
      >
        {tip.variant === 'explain' ? (
          <div className="relative w-max max-w-[240px] rounded-xl bg-espresso px-3.5 py-2.5 text-left shadow-lift-3 ring-1 ring-white/10">
            <div className="flex items-center gap-1.5">
              <MousePointer2 className="h-3 w-3 flex-none text-orange-400" />
              <p className="text-[12px] font-bold text-espresso-text">{tip.title}</p>
            </div>
            <p className="mt-1 text-[11.5px] leading-relaxed text-espresso-muted">{tip.text}</p>
            <TipArrow isTop={isTop} tone="dark" />
          </div>
        ) : (
          <div className="relative w-max rounded-xl border border-stone-200/80 bg-white px-3 py-2 shadow-lift-3">
            <p className="mb-1 text-[12px] font-semibold text-ink">{tip.title}</p>
            <div className="space-y-0.5">
              {tip.rows?.map((r) => (
                <div key={r.label} className="flex items-center gap-2 text-[11.5px]">
                  {r.color && (
                    <span className="h-2 w-2 flex-none rounded-full" style={{ background: r.color }} />
                  )}
                  <span className="text-ink-muted">{r.label}</span>
                  <span className="ml-auto pl-3 font-medium tabular-nums text-ink">{r.value}</span>
                </div>
              ))}
            </div>
            <TipArrow isTop={isTop} tone="light" />
          </div>
        )}
      </div>
    </div>
  )
}

function TipArrow({ isTop, tone }: { isTop: boolean; tone: 'dark' | 'light' }) {
  return (
    <span
      aria-hidden
      className={`absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 ${
        tone === 'dark' ? 'bg-espresso' : 'border-b border-r border-stone-200/80 bg-white'
      } ${isTop ? 'bottom-[-4px]' : 'top-[-4px]'}`}
    />
  )
}

// ── Scroll affordance ────────────────────────────────────────────────────────

function BottomFade({ show }: { show: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-24 items-end justify-center bg-gradient-to-t from-stone-50 via-stone-50/70 to-transparent transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span className="mb-4 inline-flex animate-float items-center gap-1.5 rounded-full border border-stone-200/80 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-stone-500 shadow-soft-md backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        Scroll to explore the live dashboard
      </span>
    </div>
  )
}
