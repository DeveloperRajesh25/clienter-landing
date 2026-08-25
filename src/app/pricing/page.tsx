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
    'Simple, honest pricing for Clienter. Start free forever, or grab the launch offer: Pro at ₹199/month (was ₹499) and Ultra at ₹799/month (was ₹1,999). No hidden fees, no credit card to start, cancel anytime.',
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
  features: string[]
  cta: string
  popular: boolean
  /** Whether to show the "Launch Offer" badge + strikethrough. */
  launch?: boolean
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
      'Full leads & CRM pipeline (unlimited leads)',
      'Invoice generation',
      'Meetings & reminders',
      'Basic analytics',
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
    features: [
      'Up to 30 clients',
      'Up to 60 projects',
      'Up to 5 team members',
      'Full invoice system',
      'White-label client portal',
      'Google Calendar & Meet integration',
      'Project files & payments',
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
      'Lead follow-up push reminders',
      'Everything in Pro',
      'Dedicated support',
    ],
    cta: 'Start Ultra →',
    popular: false,
    launch: true,
  },
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

// Comparison matrix — plan gating mirrors the per-plan feature lists above.
const COMPARE: { label: string; free: string | boolean; pro: string | boolean; ultra: string | boolean }[] = [
  { label: 'Clients', free: '5', pro: '30', ultra: 'Unlimited' },
  { label: 'Projects', free: '10', pro: '60', ultra: 'Unlimited' },
  { label: 'Team members', free: '0', pro: '5', ultra: 'Unlimited' },
  { label: 'Leads & CRM pipeline', free: true, pro: true, ultra: true },
  { label: 'Invoicing & PDF export', free: true, pro: true, ultra: true },
  { label: 'GST / tax on invoices', free: true, pro: true, ultra: true },
  { label: 'Meetings & reminders', free: true, pro: true, ultra: true },
  { label: 'Revenue analytics', free: 'Basic', pro: 'Full', ultra: 'Full' },
  { label: 'Project files & payments', free: false, pro: true, ultra: true },
  { label: 'White-label client portal', free: false, pro: true, ultra: true },
  { label: 'Google Calendar & Meet', free: false, pro: true, ultra: true },
  { label: 'White-label invoices', free: false, pro: false, ultra: true },
  { label: 'Lead follow-up push reminders', free: false, pro: false, ultra: true },
  { label: 'Support', free: 'Community', pro: 'Priority', ultra: 'Dedicated' },
]

const PRICING_FAQS = [
  {
    q: 'Is the Free plan really free?',
    a: 'Yes — the Free plan is free forever, with no credit card required. It includes up to 5 clients and 10 projects, the full leads & CRM pipeline, invoicing, meetings, and basic analytics.',
  },
  {
    q: 'Can I change or cancel my plan anytime?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel from your billing settings at any time. Cancelling stops future charges and you keep access until the end of your paid period.',
  },
  {
    q: 'How do I pay?',
    a: 'Paid plans are billed monthly in Indian Rupees through Razorpay, which supports UPI, cards, net banking, and wallets.',
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
        subtitle="Start free and upgrade only when you're ready. No hidden fees, no credit card to start, cancel anytime."
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
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Compare every plan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            The same core tools on every plan — higher tiers just lift the limits and add polish.
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
                <tbody className="divide-y divide-stone-200/70">
                  {COMPARE.map((row) => (
                    <tr key={row.label} className="text-sm transition-colors hover:bg-stone-50/60">
                      <td className="px-4 py-4 font-medium text-gray-700 sm:px-8">{row.label}</td>
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
