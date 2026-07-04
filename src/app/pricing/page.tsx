import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { Faq } from '@/components/landing/Faq'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, APP_URL } from '@/lib/site'
import {
  breadcrumbSchema,
  softwareApplicationSchema,
  faqSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Pricing — Free, Pro & Ultra Plans',
  description:
    'Simple, honest pricing for Clienter. Start free forever, upgrade to Pro at ₹499/month or Ultra at ₹1,999/month. No hidden fees, no credit card to start, cancel anytime.',
  path: '/pricing',
  keywords: [
    'Clienter pricing',
    'freelancer software pricing India',
    'invoice software price',
    'client management software cost',
  ],
})

const PLANS = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    tagline: 'For getting started',
    features: ['Up to 3 clients', 'Up to 5 projects', 'Invoice generation', 'Meetings & reminders', 'Basic analytics'],
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
      'Up to 3 team members',
      'Project files & payments',
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
      'Everything in Pro',
      'Dedicated support',
    ],
    cta: 'Start Ultra',
    popular: false,
  },
]

// Comparison matrix — keep values aligned with src/lib/plans.ts (source of truth).
const COMPARE: { label: string; free: string | boolean; pro: string | boolean; ultra: string | boolean }[] = [
  { label: 'Clients', free: '3', pro: '25', ultra: 'Unlimited' },
  { label: 'Projects', free: '5', pro: '50', ultra: 'Unlimited' },
  { label: 'Team members', free: '0', pro: '3', ultra: 'Unlimited' },
  { label: 'Invoicing & PDF export', free: true, pro: true, ultra: true },
  { label: 'GST / tax on invoices', free: true, pro: true, ultra: true },
  { label: 'Meetings & reminders', free: true, pro: true, ultra: true },
  { label: 'Revenue analytics', free: 'Basic', pro: 'Full', ultra: 'Full' },
  { label: 'Project files & payments', free: false, pro: true, ultra: true },
  { label: 'White-label invoices', free: false, pro: false, ultra: true },
  { label: 'Support', free: 'Community', pro: 'Priority', ultra: 'Dedicated' },
]

const PRICING_FAQS = [
  {
    q: 'Is the Free plan really free?',
    a: 'Yes — the Free plan is free forever, with no credit card required. It includes up to 3 clients and 5 projects, full invoicing, meetings, and basic analytics.',
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
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 sm:p-8 ${
                  plan.popular
                    ? 'bg-gray-900 text-white shadow-2xl shadow-gray-900/25 lg:-translate-y-3'
                    : 'border border-gray-200 bg-white hover:-translate-y-1 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    Most popular
                  </span>
                )}
                <h2 className={`font-display text-lg font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h2>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-gray-400' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-[15px]">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                          plan.popular ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-600'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${APP_URL}/signup`}
                  className={`press mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          All prices in INR, billed monthly. Start on the Free plan — upgrade anytime, no card required.
        </p>
      </section>

      {/* Comparison table */}
      <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-gray-900">
          Compare plans
        </h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50 text-sm">
                <th className="px-4 py-4 font-semibold text-gray-900 sm:px-6">Feature</th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900">Free</th>
                <th className="px-4 py-4 text-center font-semibold text-orange-600">Pro</th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900">Ultra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {COMPARE.map((row) => (
                <tr key={row.label} className="text-sm">
                  <td className="px-4 py-3.5 font-medium text-gray-700 sm:px-6">{row.label}</td>
                  <td className="px-4 py-3.5 text-center"><Cell value={row.free} /></td>
                  <td className="bg-orange-50/40 px-4 py-3.5 text-center"><Cell value={row.pro} /></td>
                  <td className="px-4 py-3.5 text-center"><Cell value={row.ultra} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="mx-auto mt-24 max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-gray-900">
          Pricing questions
        </h2>
        <div className="mt-10">
          <Faq items={PRICING_FAQS} />
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 text-center sm:px-6">
        <Link
          href={`${APP_URL}/signup`}
          className="press inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
        >
          Create your free account
        </Link>
      </section>
    </PageShell>
  )
}
