import {
  RefreshCw,
  Users,
  ListChecks,
  ReceiptText,
  MessageSquare,
  TrendingUp,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const WEBSITE_MAINTENANCE_AGENCIES: AudiencePageConfig = {
  slug: 'website-maintenance-agencies',
  path: '/for/website-maintenance-agencies',
  audience: 'Website maintenance agencies',
  metaTitle: 'Software for Website Maintenance & Care Plan Agencies',
  metaDescription:
    'Run website care plans and AMCs in one place — recurring invoices, tracked support requests, renewal dates, per-client profitability and a client portal. Free to start.',
  keywords: [
    'website maintenance agency software',
    'website care plan management',
    'AMC management software for web agencies',
    'recurring invoice software for agencies',
    'website support request tracking',
    'retainer management software',
    'WordPress care plan software',
    'client portal for support requests',
    'manage website maintenance clients',
    'web agency recurring revenue software',
  ],
  ogTitle: 'Software for Website Maintenance & Care Plan Agencies — Clienter',
  ogDescription:
    'Care plans, AMCs, support queues, renewals and recurring invoices in one workspace — with a portal where clients raise their own requests.',
  breadcrumbLabel: 'For Website Maintenance Agencies',
  eyebrow: 'For website maintenance agencies',
  h1: 'Care plans that renew, bill and prove their value on their',
  h1Highlight: 'own',
  subheading:
    'Thirty sites under maintenance, requests arriving by WhatsApp, renewals you track in a spreadsheet, and no real idea which plans make money. Clienter turns that into recurring invoices, a logged request queue, visible renewal dates and per-client profitability.',
  intro: {
    heading: 'Recurring revenue is a system, not a promise',
    body: [
      'Maintenance is the best business in web services and the worst-run. The revenue is predictable, the churn is low, and the margin is good — right up until the delivery side is managed informally. Then the requests arrive in four channels, the “quick fixes” go unbilled, the renewal dates live in one person’s calendar, and a plan that looked profitable turns out to have absorbed eleven hours last month.',
      'The failure is almost never the work. It’s that maintenance has no natural artefacts. A build has a kickoff, a deadline and a launch; a care plan has none of those, so nothing forces you to write anything down. Months pass, the plan renews at the same price it had two years ago, and nobody can say whether that price is right because nobody recorded what went into it.',
      'Clienter gives maintenance the structure it lacks. Each client carries their sites, their plan, their renewal date and their full request history. Recurring invoices raise themselves. Support requests arrive through a portal and sit in a queue rather than a chat thread. And because every request is attached to a client, you can finally answer the only question that matters at renewal: is this plan worth what we charge for it?',
    ],
  },
  pains: {
    heading: 'How care plans quietly stop being profitable',
    sub: 'The slow leaks in a book of maintenance clients.',
    items: [
      {
        title: 'Requests arriving in every channel but one',
        desc: 'WhatsApp, a reply to an old email thread, a phone call during lunch. If it isn’t in a queue, it’s either forgotten or done immediately and for free.',
      },
      {
        title: 'Renewals tracked in a spreadsheet',
        desc: 'One missed annual renewal is a full year of revenue gone, and you usually notice months later — when the client mentions they don’t think they’ve been charged.',
      },
      {
        title: 'No evidence at renewal time',
        desc: 'The client says they’ve barely used the plan. You suspect otherwise. Neither of you has a record, so the price gets negotiated on confidence rather than facts.',
      },
      {
        title: 'Out-of-scope work absorbed by default',
        desc: 'A redesign of one page, a new integration, an hour of content entry. Each sits just outside the plan and gets done anyway because raising it feels awkward.',
      },
      {
        title: 'Plans that have never been repriced',
        desc: 'The ₹3,000-a-month plan from three years ago now covers a bigger site, more plugins and more requests, and nobody has ever reviewed whether it still adds up.',
      },
      {
        title: 'No single number for recurring revenue',
        desc: 'The retainers are the most valuable part of the agency and the hardest part to see — spread across invoices, months and clients, never totalled anywhere.',
      },
    ],
  },
  workflow: {
    heading: 'A maintenance client, month after month',
    sub: 'What the cycle looks like once it runs itself.',
    steps: [
      {
        title: '1. Put the plan on the client record',
        desc: 'Plan tier, inclusions, hours or request allowance, price and renewal date attached to the client — not a spreadsheet row and a memory.',
      },
      {
        title: '2. Let the recurring invoice raise itself',
        desc: 'Monthly or annual invoices generated on schedule, GST-ready, with paid, pending and overdue visible at a glance across every plan.',
      },
      {
        title: '3. Take requests through the portal',
        desc: 'Clients raise requests in their own branded portal. Each lands in a queue, attached to their site, with a status they can see — which ends most “did you get my message?” emails.',
      },
      {
        title: '4. Track what each plan absorbs',
        desc: 'Every request logged against the client builds the record that renewal conversations need, and makes out-of-scope work visible while it’s still easy to quote.',
      },
      {
        title: '5. Review, reprice, renew',
        desc: 'At renewal you open a year of evidence: requests handled, work delivered, revenue collected. Repricing becomes a conversation about facts rather than a guess.',
      },
    ],
  },
  features: {
    heading: 'What a maintenance book runs on',
    sub: 'The pieces that make recurring revenue predictable instead of fragile.',
    items: [
      { icon: RefreshCw, title: 'Recurring invoices', desc: 'Monthly and annual plan billing that raises itself on the renewal date.' },
      { icon: Users, title: 'Client & site profiles', desc: 'Every site, plan, renewal date and request history on one record.' },
      { icon: MessageSquare, title: 'Support request queue', desc: 'Requests from the portal, logged against the client, with a status both sides can see.' },
      { icon: ListChecks, title: 'Routine checklists', desc: 'Monthly update, backup and security routines as repeatable tasks per site.' },
      { icon: ReceiptText, title: 'Billing visibility', desc: 'Paid, pending and overdue across the whole book, not one invoice at a time.' },
      { icon: TrendingUp, title: 'Plan profitability', desc: 'What each client asked for against what each client paid — the number renewals need.' },
    ],
  },
  compare: {
    heading: 'Informal maintenance vs a managed book',
    sub: 'Same clients, same work, very different margin.',
    old: [
      'Requests scattered across chat, email and phone calls',
      'Renewal dates in a spreadsheet someone has to check',
      'Out-of-scope work absorbed without being noticed',
      'Renewal pricing argued from memory',
      'Recurring revenue you can’t see as one figure',
    ],
    calm: [
      'One queue, fed by the client’s own portal',
      'Invoices that raise themselves on renewal',
      'Every request logged, so extras get quoted',
      'A year of evidence behind every price review',
      'Plan revenue visible across the whole book',
    ],
  },
  pricing: {
    heading: 'Pricing that suits a growing book',
    body: [
      'Free covers 3 clients and 5 projects with the whole product, including recurring invoices and client portals — enough to run your first care plans properly before you pay anything. Free forever, no card.',
      'Pro at $19/month (₹199 in India) covers 20 clients, 40 projects and 5 team members with branded portals, which fits most agencies early in their retainer push. A book of thirty or more maintenance clients belongs on Ultra at $39/month (₹799 in India) — unlimited clients, projects and team members. Since billing isn’t per seat, adding support staff doesn’t add cost.',
    ],
  },
  faqHeading: 'Website maintenance agency FAQs',
  faqs: [
    {
      q: 'What software should I use to manage website care plans?',
      a: 'The requirements are narrower than they look: recurring invoicing on each plan’s own renewal date, a request queue tied to the client, and a record of what each plan absorbed so renewals can be priced from evidence. Clienter does those three alongside your projects and client records, so the maintenance book isn’t run in a separate system from the builds that created it.',
    },
    {
      q: 'How do I handle AMC renewals without missing any?',
      a: 'Attach the renewal date and plan price to the client and let the recurring invoice raise itself. The failure mode in every agency that misses renewals is the same — the date lives somewhere that depends on a human checking it. Removing the human from that step removes the failure.',
    },
    {
      q: 'How do I know whether a care plan is profitable?',
      a: 'Log every request against the client. Over a year that produces exactly the picture you need: how many requests the plan generated, what kind of work they were, and what the client paid for it. Most agencies that do this for one cycle discover two or three plans that have been underpriced since the day they were written.',
    },
    {
      q: 'Can clients raise their own support requests?',
      a: 'Yes. Each client gets a branded portal where they raise requests and see their status. That one change usually does more for margin than any pricing tweak, because it moves work out of untracked chat threads and into a queue where it can be seen, scheduled and — when it falls outside the plan — quoted.',
    },
  ],
  related: [
    { href: '/for/wordpress-developers', label: 'For WordPress Developers', desc: 'Builds and care plans for WordPress specialists.' },
    { href: '/features/retainer-management', label: 'Retainer Management', desc: 'Recurring invoices and renewal tracking.' },
    { href: '/blog/wordpress-maintenance-plan-pricing', label: 'Maintenance Plan Pricing', desc: 'What to charge, what to include, and when to reprice.' },
    { href: '/blog/monthly-retainers-vs-project-pricing', label: 'Retainers vs Project Pricing', desc: 'Choosing the model that fits the work.' },
  ],
  ctaTitle: 'Make your maintenance book run itself',
  ctaSubtitle: 'Create a free account and put every care plan, request and renewal in one place.',
}
