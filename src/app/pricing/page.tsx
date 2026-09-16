import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, CreditCard, CalendarX, Download, FileText, type LucideIcon } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { Faq } from '@/components/landing/Faq'
import { Reveal } from '@/components/landing/Reveal'
import { GlowCard } from '@/components/landing/GlowCard'
import { CountUp } from '@/components/landing/CountUp'
import { JsonLd } from '@/components/marketing/JsonLd'
import { DataSecurity } from '@/components/marketing/DataSecurity'
import { pageMetadata, APP_URL } from '@/lib/site'
import {
  breadcrumbSchema,
  softwareApplicationSchema,
  pricingProductSchema,
  faqSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Pricing — Free, Pro & Ultra Plans',
  description:
    'Simple, honest pricing for Clienter. Every plan includes the whole product — clients, projects, GST invoicing, leads, documents and the client portal. Start free forever, or grab the launch offer: Pro at ₹199/month (was ₹499) and Ultra at ₹799/month (was ₹1,999).',
  path: '/pricing',
  keywords: [
    'Clienter pricing',
    'freelancer software pricing India',
    'invoice software price',
    'client management software cost',
  ],
})

type Plan = {
  name: string
  /** Current (launch) price. */
  price: string
  /** Struck-through pre-launch price, shown only during the launch offer. */
  originalPrice?: string
  period: string
  tagline: string
  /** Who the plan is for, in one plain line. */
  bestFor: string
  /** The numbers — what you can add. Rendered as a grid, not buried in bullets. */
  limits: { value: string; label: string }[]
  /** Heading above the feature list: "Includes" or "Everything in X, plus". */
  featuresHeading: string
  features: string[]
  cta: string
  popular: boolean
  /** Whether to show the "Launch Offer" badge + strikethrough. */
  launch?: boolean
}

/**
 * Plan data — limits and gating mirror src/lib/plans.ts in the app
 * (PLAN_LIMITS + PLAN_FEATURES, 2026-09 restructure). The honest shape of the
 * product: EVERY plan has the whole toolset; paid plans lift the numbers and
 * add automation, payroll and white label. Anything not listed as a paid
 * feature is on Free too — see EVERY_PLAN below.
 */
const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    tagline: 'For getting started',
    bestFor: 'Best for your first few clients — the whole app, smaller numbers.',
    limits: [
      { value: '3', label: 'clients' },
      { value: '5', label: 'projects' },
      { value: '1', label: 'teammate' },
      { value: '20', label: 'active leads' },
      { value: '100 MB', label: 'file storage' },
      { value: '3', label: 'AI quotes / mo' },
    ],
    featuresHeading: 'Includes',
    features: [
      'Client portal for 1 client — your name and logo',
      'Google Calendar & Meet sync',
      'GST-ready invoices, payments & quotations',
      'Leads pipeline, documents & e-signatures',
      'Meetings, reminders & task boards',
      'Community support',
    ],
    cta: 'Get started free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹199',
    originalPrice: '₹499',
    period: '/month',
    tagline: 'For growing freelancers',
    bestFor: 'Best when client work is your income and admin starts eating the week.',
    limits: [
      { value: '20', label: 'clients' },
      { value: '40', label: 'projects' },
      { value: '5', label: 'team members' },
      { value: '200', label: 'active leads' },
      { value: '1 GB', label: 'file storage' },
      { value: '25', label: 'AI quotes / mo' },
    ],
    featuresHeading: 'Everything in Free, plus',
    features: [
      'Client portal for every client',
      'No “Powered by Clienter” mark on your portal',
      'Auto-invoicing for monthly retainers',
      'Automatic lead follow-up reminders',
      '25 AI-written quotes & contracts a month',
      'Email support',
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
    bestFor: 'Best for a studio running many accounts, a real team, and its own brand.',
    limits: [
      { value: 'Unlimited', label: 'clients' },
      { value: 'Unlimited', label: 'projects' },
      { value: 'Unlimited', label: 'team members' },
      { value: 'Unlimited', label: 'active leads' },
      { value: '10 GB', label: 'file storage' },
      { value: '100', label: 'AI quotes / mo' },
    ],
    featuresHeading: 'Everything in Pro, plus',
    features: [
      'Team payroll — monthly salaries & payslips',
      'White label — your brand colour and logo across the app',
      'Lead integrations: Meta, Google Ads, IndiaMART & webhooks',
      '100 AI-written quotes & contracts a month',
      'Priority support',
    ],
    cta: 'Start Ultra →',
    popular: false,
    launch: true,
  },
]

/**
 * The floor under all three plans. Stated once, loudly, because the single most
 * useful thing a visitor can learn here is that Free is not a crippled trial —
 * the only paid-only features are the six listed on the Pro and Ultra cards.
 */
const EVERY_PLAN: string[] = [
  'Clients, projects & task boards',
  'Leads pipeline with CSV import & export',
  'GST-ready invoices, quotations & PDF export',
  'Payments, part-payments & receipts',
  'Expenses, payouts & profit analytics',
  'Documents & e-signatures',
  'Client portal branded with your name & logo',
  'Client messaging & file sharing',
  'Meetings, reminders & Google Calendar sync',
  'Verified client reviews & public review page',
  'Multi-currency invoicing',
  'Android app, and export your data anytime',
]

// Honest reassurances — each is a true product fact, not a fabricated number.
const GUARANTEES: { icon: LucideIcon; label: string }[] = [
  { icon: CreditCard, label: 'No credit card to start' },
  { icon: CalendarX, label: 'Cancel anytime' },
  { icon: Download, label: 'Export your data anytime' },
  { icon: FileText, label: 'GST-ready invoices' },
]

// Product-fact stats — no usage/traction claims, only truths about the app.
const STATS: { to: number; prefix?: string; suffix?: string; label: string }[] = [
  { to: 0, prefix: '₹', suffix: '', label: 'To start — free forever' },
  { to: 6, prefix: '', suffix: '-in-1', label: 'Tools in one workspace' },
  { to: 5, prefix: '~', suffix: ' min', label: 'To your first invoice' },
]

type CompareRow = {
  label: string
  /** Small clarifier under the label, for anything a number alone can mislead on. */
  hint?: string
  free: string | boolean
  pro: string | boolean
  ultra: string | boolean
}

/**
 * Comparison matrix, grouped so a visitor can find the one line they care
 * about. Gating mirrors PLAN_FEATURES in the app: only auto-invoicing, lead
 * reminders and the unbranded portal (Pro+), plus payroll, white label and
 * lead integrations (Ultra), are paid-only. Everything else is on every plan.
 */
const COMPARE_GROUPS: { group: string; rows: CompareRow[] }[] = [
  {
    group: 'How much you can add',
    rows: [
      { label: 'Clients', free: '3', pro: '20', ultra: 'Unlimited' },
      { label: 'Projects', free: '5', pro: '40', ultra: 'Unlimited' },
      {
        label: 'Active leads',
        hint: 'Only open leads count — won or lost frees the slot',
        free: '20',
        pro: '200',
        ultra: 'Unlimited',
      },
      { label: 'Team members', hint: 'In addition to you', free: '1', pro: '5', ultra: 'Unlimited' },
      {
        label: 'Clients with portal access',
        free: '1 client',
        pro: 'Every client',
        ultra: 'Every client',
      },
      { label: 'AI quotes & contracts', hint: 'Per month', free: '3', pro: '25', ultra: '100' },
      { label: 'File storage', free: '100 MB', pro: '1 GB', ultra: '10 GB' },
    ],
  },
  {
    group: 'Clients & projects',
    rows: [
      { label: 'Clients, projects & task boards', free: true, pro: true, ultra: true },
      { label: 'Documents, quotations & e-signatures', free: true, pro: true, ultra: true },
      { label: 'Client portal with your name & logo', free: true, pro: true, ultra: true },
      { label: 'Client messaging & file sharing', free: true, pro: true, ultra: true },
      { label: 'Verified client reviews & public page', free: true, pro: true, ultra: true },
      {
        label: 'Portal without the “Powered by Clienter” mark',
        free: false,
        pro: true,
        ultra: true,
      },
    ],
  },
  {
    group: 'Getting paid',
    rows: [
      { label: 'GST-ready invoices & PDF export', free: true, pro: true, ultra: true },
      { label: 'Payments, part-payments & receipts', free: true, pro: true, ultra: true },
      { label: 'Expenses, payouts & profit analytics', free: true, pro: true, ultra: true },
      { label: 'Multi-currency invoicing', free: true, pro: true, ultra: true },
      {
        label: 'Auto-invoicing for retainers',
        hint: 'Raises and emails the invoice on its billing day',
        free: false,
        pro: true,
        ultra: true,
      },
      { label: 'Team payroll & payslips', free: false, pro: false, ultra: true },
    ],
  },
  {
    group: 'Leads & scheduling',
    rows: [
      { label: 'Lead pipeline, import & export', free: true, pro: true, ultra: true },
      { label: 'Meetings & meeting reminders', free: true, pro: true, ultra: true },
      { label: 'Google Calendar & Meet sync', free: true, pro: true, ultra: true },
      {
        label: 'Automatic lead follow-up reminders',
        hint: 'Free stores the date; paid plans notify you',
        free: false,
        pro: true,
        ultra: true,
      },
      {
        label: 'Lead integrations',
        hint: 'Meta, Google Ads, IndiaMART & webhooks',
        free: false,
        pro: false,
        ultra: true,
      },
    ],
  },
  {
    group: 'Team & brand',
    rows: [
      { label: 'Teammate logins & permissions', free: true, pro: true, ultra: true },
      {
        label: 'White label',
        hint: 'Your brand colour & logo across the whole app',
        free: false,
        pro: false,
        ultra: true,
      },
    ],
  },
  {
    group: 'Support & your data',
    rows: [
      { label: 'Support', free: 'Community', pro: 'Email', ultra: 'Priority' },
      { label: 'Android app', free: true, pro: true, ultra: true },
      { label: 'Export your data anytime', free: true, pro: true, ultra: true },
    ],
  },
]

const PRICING_FAQS = [
  {
    q: 'Is the Free plan really free?',
    a: 'Yes — free forever, no credit card. It is the whole product, not a trial: up to 3 clients, 5 projects, 1 teammate and 20 active leads, plus the client portal for one client, Google Calendar sync, GST invoicing, documents and e-signatures, meetings, task boards and 3 AI-written quotes a month.',
  },
  {
    q: 'What counts as an “active lead”?',
    a: 'Only leads still open in your pipeline. The moment a lead is won, lost, or converted into a client it stops counting and frees its slot — so the cap is about how much you are working at once, not how many enquiries you have ever had.',
  },
  {
    q: 'What happens when I reach a limit?',
    a: 'Everything you already have keeps working — nothing is deleted, hidden or locked. Clienter simply asks you to upgrade before you add the next client, project or lead.',
  },
  {
    q: 'What if I downgrade and I am over the new limit?',
    a: 'You keep every client, project and lead you already have, and you can carry on editing and invoicing them. You just cannot add new ones until you are back under the limit, or upgrade again.',
  },
  {
    q: 'What is an AI quote?',
    a: 'Clienter can write a quote or contract for you from a short brief, in your own pricing style. One generation is counted each time it writes or rewrites a document — chatting with it costs nothing. The allowance resets every month: 3 on Free, 25 on Pro, 100 on Ultra.',
  },
  {
    q: 'Is the client portal branded with my name?',
    a: 'On every plan the portal carries your agency name and logo. On Free it covers one client and shows a small “Powered by Clienter” link in the footer; Pro and Ultra remove that mark and open the portal to every client; Ultra also repaints the app and portal in your own brand colour.',
  },
  {
    q: 'Can I change or cancel my plan anytime?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel from your billing settings at any time. Cancelling stops future charges and you keep access until the end of your paid period.',
  },
  {
    q: 'How do I pay?',
    a: 'Paid plans are billed monthly in Indian Rupees through Razorpay, which supports UPI, cards, net banking, and wallets. Outside India you can pay in USD through PayPal — $19/month for Pro and $39/month for Ultra.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Plans are billed monthly and you can cancel anytime to avoid future charges. We do not refund charges already made — see our Refund & Cancellation Policy for full details.',
  },
]

/** One plan's inner content — shared by the conic-border (popular) and GlowCard shells. */
function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full flex-col p-7 sm:p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-gray-900">{plan.name}</h2>
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

      <p className="mt-4 text-[13px] leading-relaxed text-gray-500">{plan.bestFor}</p>

      {/* The numbers first, as a grid — what you can actually add, at a glance. */}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-stone-200/70 py-5">
        {plan.limits.map((limit) => (
          <div key={limit.label}>
            <p className="font-display text-[15px] font-bold leading-tight tabular-nums text-gray-900">
              {limit.value}
            </p>
            <p className="text-xs text-gray-500">{limit.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400">
        {plan.featuresHeading}
      </p>
      <ul className="mt-3.5 flex-1 space-y-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-[15px]">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-gray-600">{feat}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`${APP_URL}/signup`}
        className={`press mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
          plan.popular
            ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_28px_-10px_rgba(249,115,22,0.8)] hover:brightness-105'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  )
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-orange-600">
        <Check className="h-3.5 w-3.5" />
      </span>
    )
  if (value === false) return <X className="mx-auto h-4 w-4 text-gray-300" />
  return <span className="text-sm font-medium text-gray-700">{value}</span>
}

export default function PricingPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          pricingProductSchema(),
          faqSchema(PRICING_FAQS),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Pricing"
        title="Simple, honest"
        highlight="pricing"
        subtitle="Every plan includes the whole product — clients, projects, GST invoicing, leads, documents and the client portal. Paid plans lift the limits and add automation. No hidden fees, no credit card to start."
      />

      {/* Plan cards */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:mt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              {plan.popular ? (
                // Animated conic border: the spinning highlight sweeps the 1px
                // ring exposed by p-px; the faint orange base keeps the ring
                // visible where the sweep isn't. Matches the homepage pricing.
                <div className="relative h-full overflow-hidden rounded-3xl bg-orange-300/50 p-px shadow-[0_24px_60px_-24px_rgba(249,115,22,0.5)] lg:-translate-y-3">
                  <div
                    aria-hidden
                    className="absolute inset-[-100%] animate-[spin_7s_linear_infinite] [background:conic-gradient(from_0deg,transparent_0deg,transparent_240deg,rgba(251,146,60,0.9)_300deg,rgba(249,115,22,1)_330deg,transparent_360deg)]"
                  />
                  <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-orange-50/70 to-white">
                    <PlanCard plan={plan} />
                  </div>
                </div>
              ) : (
                <GlowCard className="rounded-3xl">
                  <PlanCard plan={plan} />
                </GlowCard>
              )}
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-semibold text-orange-600">
          🚀 Launch pricing is limited time. Lock in your rate today.
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          All prices in INR, billed monthly. Start on the Free plan — upgrade anytime, no card required.
        </p>
        <p className="mt-2 text-center text-xs text-gray-400">
          By signing up you agree to our{' '}
          <Link href="/terms" className="font-semibold text-gray-500 hover:text-orange-600">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="font-semibold text-gray-500 hover:text-orange-600">
            Privacy Notice
          </Link>
          .
        </p>

        {/* Honest reassurance chips */}
        <Reveal className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {GUARANTEES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-soft backdrop-blur"
              >
                <Icon className="h-4 w-4 text-orange-500" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* What every plan includes — the point most pricing pages bury. */}
      <section id="included" className="scroll-mt-24 mx-auto mt-16 max-w-5xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-stone-200/70 bg-white/70 shadow-soft-lg backdrop-blur">
            <div className="border-b border-stone-200/70 bg-[#FFFBF7] px-6 py-5 text-center sm:px-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Every plan includes the whole product
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
                Free is not a stripped-down trial. You get the same tools on every plan — paid plans
                raise the limits and add automation, payroll and white label.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 px-6 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
              {EVERY_PLAN.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] leading-snug text-gray-600"
                >
                  <Check className="mt-[3px] h-3.5 w-3.5 flex-none text-orange-500" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Product-fact stat band */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 divide-y divide-stone-200/70 overflow-hidden rounded-3xl border border-stone-200/70 bg-white/60 shadow-soft-lg backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <div className="text-gradient-brand font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Comparison table */}
      <section id="compare" className="scroll-mt-24 mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Compare every plan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Line by line, so there are no surprises after you sign up.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-stone-200/70 bg-white/70 shadow-soft-lg backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <thead>
                  <tr className="text-sm">
                    <th className="sticky top-16 z-10 bg-white/95 px-4 py-5 font-semibold text-gray-900 backdrop-blur sm:px-8">
                      Feature
                    </th>
                    <th className="sticky top-16 z-10 bg-white/95 px-4 py-5 text-center font-semibold text-gray-700 backdrop-blur">
                      Free
                    </th>
                    <th className="sticky top-16 z-10 bg-orange-50/90 px-4 py-5 text-center backdrop-blur">
                      <span className="font-display text-base font-bold text-orange-600">Pro</span>
                      <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-orange-500/80">
                        Most popular
                      </span>
                    </th>
                    <th className="sticky top-16 z-10 bg-white/95 px-4 py-5 text-center font-semibold text-gray-700 backdrop-blur">
                      Ultra
                    </th>
                  </tr>
                </thead>
                {COMPARE_GROUPS.map(({ group, rows }) => (
                  <tbody
                    key={group}
                    className="divide-y divide-stone-200/70 border-t border-stone-200/70"
                  >
                    <tr>
                      <th
                        colSpan={4}
                        className="bg-stone-50/80 px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-stone-500 sm:px-8"
                      >
                        {group}
                      </th>
                    </tr>
                    {rows.map((row) => (
                      <tr key={row.label} className="text-sm transition-colors hover:bg-stone-50/60">
                        <td className="px-4 py-4 sm:px-8">
                          <span className="font-medium text-gray-700">{row.label}</span>
                          {row.hint && (
                            <span className="mt-0.5 block text-xs text-gray-400">{row.hint}</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <Cell value={row.free} />
                        </td>
                        <td className="bg-orange-50/50 px-4 py-4 text-center">
                          <Cell value={row.pro} />
                        </td>
                        <td className="px-4 py-4 text-center">
                          <Cell value={row.ultra} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Data privacy / security */}
      <DataSecurity className="pb-16 sm:pb-24" />

      {/* Pricing FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Pricing questions
        </h2>
        <div className="mt-10">
          <Faq items={PRICING_FAQS} />
        </div>
      </section>

      <section className="px-4 pb-20 text-center sm:px-6 sm:pb-28">
        <Reveal>
          <Link
            href={`${APP_URL}/signup`}
            className="press inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
          >
            Create your free account
          </Link>
        </Reveal>
      </section>
    </PageShell>
  )
}
