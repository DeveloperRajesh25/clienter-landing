/**
 * Plan prices — the single source of truth for every price shown on the
 * marketing site (pricing page, homepage pricing section, structured data,
 * comparison pages, llms.txt).
 *
 * WHY THIS FILE EXISTS: the same three prices were previously hardcoded in
 * `app/pricing/page.tsx`, `components/landing/PricingSection.tsx` and
 * `lib/structured-data.ts`. They had already drifted (the schema carried a
 * "was ₹499" claim the pricing page also made, and no file carried the USD
 * prices at all, so international searchers never saw a price they could pay).
 *
 * BILLING REGIONS. Clienter bills in two currencies and the visitor's region
 * decides which at first checkout:
 *   - India        → INR via Razorpay (UPI, cards, net banking, wallets)
 *   - Rest of world→ USD via PayPal
 * These are two separate price lists, not a converted one — do not compute one
 * from the other, and never show a converted figure as if it were the price.
 *
 * LIMITS AND FEATURE GATING ARE NOT DEFINED HERE. They live in the app repo's
 * `src/lib/plans.ts` (`PLAN_LIMITS` + `PLAN_FEATURES`) and are mirrored by hand
 * in `app/pricing/page.tsx`. When the app's plan data changes, update that page
 * and this file together.
 */

export type PlanPrice = {
  /** Plan name as shown to the visitor. */
  name: 'Free' | 'Pro' | 'Ultra'
  /** Monthly price in USD — billed through PayPal outside India. */
  usd: number
  /** Monthly price in INR — billed through Razorpay in India. */
  inr: number
  /** One-sentence plan summary used in SoftwareApplication Offer nodes. */
  offerDescription: string
}

export const PLAN_PRICES: PlanPrice[] = [
  {
    name: 'Free',
    usd: 0,
    inr: 0,
    offerDescription:
      'Free forever: up to 3 clients, 5 projects, 1 teammate and 20 active leads, the client portal for one client, GST-ready invoicing, quotes, e-signatures and Google Calendar sync.',
  },
  {
    name: 'Pro',
    usd: 19,
    inr: 199,
    offerDescription:
      'Up to 20 clients, 40 projects, 5 team members and 200 active leads, the client portal for every client, auto-invoiced retainers, lead follow-up reminders and 25 AI-written quotes a month.',
  },
  {
    name: 'Ultra',
    usd: 39,
    inr: 799,
    offerDescription:
      'Unlimited clients, projects, leads and team members, plus team payroll, white-label branding, a custom portal domain, lead integrations and 100 AI-written quotes a month.',
  },
]

export const PLAN_PRICE_BY_NAME: Record<string, PlanPrice> = Object.fromEntries(
  PLAN_PRICES.map((p) => [p.name, p]),
)

/** "$19/mo ($199/mo …)" helpers — one place, so the phrasing never drifts. */
export function formatUsd(plan: PlanPrice): string {
  return plan.usd === 0 ? '$0' : `$${plan.usd}`
}

export function formatInr(plan: PlanPrice): string {
  return plan.inr === 0 ? '₹0' : `₹${plan.inr.toLocaleString('en-IN')}`
}

/**
 * The canonical way to say a price in body copy for a worldwide reader: the USD
 * figure leads (most of the audience outside India), with the real rupee price
 * in parentheses rather than a conversion.
 */
export function priceSentence(name: PlanPrice['name']): string {
  const p = PLAN_PRICE_BY_NAME[name]
  if (!p) return ''
  if (p.usd === 0) return 'free forever'
  return `${formatUsd(p)}/month (${formatInr(p)}/month in India)`
}

/** Lowest paid price, for "from …" copy. */
export const CHEAPEST_PAID = PLAN_PRICES.find((p) => p.usd > 0)!
