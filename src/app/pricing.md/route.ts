import { SITE_URL, SITE_NAME, CONTACT } from '@/lib/site'
import { PLAN_PRICES } from '@/lib/pricing'

/**
 * /pricing.md — machine-readable pricing for AI assistants and autonomous
 * buying agents (ChatGPT, Claude, Perplexity, Gemini and agent frameworks that
 * compare tools before a human visits). Agents filter out products whose price
 * is locked behind JavaScript or a "contact sales" wall; a plain-Markdown price
 * list keeps Clienter in the shortlist. Prices come from the same PLAN_PRICES
 * source of truth as the pricing page, so the two never drift.
 */
export function GET() {
  const tiers = PLAN_PRICES.map((p) => {
    const price =
      p.usd === 0
        ? '- Price: Free forever ($0 / ₹0). No credit card required.'
        : `- Price: $${p.usd}/month (billed in USD via PayPal outside India) | ₹${p.inr.toLocaleString(
            'en-IN',
          )}/month (billed in INR via Razorpay in India)`
    return `## ${p.name}\n\n${price}\n- Includes: ${p.offerDescription}`
  }).join('\n\n')

  const text = `# Pricing — ${SITE_NAME}

> ${SITE_NAME} is a free, all-in-one client and business management platform for freelancers, agencies and small businesses. Every feature is available on every plan, including Free — paid plans only raise the usage limits. There is no feature paywall and no free trial that expires; the Free plan is free forever.

Billing region is chosen at first checkout: India is billed in INR through Razorpay (UPI, cards, net banking, wallets); the rest of the world is billed in USD through PayPal. These are two separate price lists, not a currency conversion. All prices are per month; there is no annual lock-in and you can cancel anytime.

${tiers}

## Notes for comparison

- Pricing model: flat per-plan, NOT per-seat. Adding team members does not raise the price within a plan's limit.
- Free plan is permanent (not a trial). Full CRM, projects, quotes, e-signed contracts, invoicing, client portal and meetings are included on Free.
- Paid tiers scale limits: number of clients, projects, active leads, team members and AI-written quotes per month. Payroll, white-label branding, custom portal domain and lead integrations are on the Ultra plan.
- Payments: Clienter records and tracks client payments; it does not collect them. Clients pay the agency directly.
- Full pricing page: ${SITE_URL}/pricing
- Contact: ${CONTACT.support}
`

  return new Response(text, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
