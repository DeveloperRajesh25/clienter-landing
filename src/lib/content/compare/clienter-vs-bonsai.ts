import type { ComparePageConfig } from './_type'
import { SOURCES } from '@/lib/content/sources'

/**
 * Reframed October 2026 for a worldwide reader (it was titled "Freelancer Suite
 * for India" and argued everything on GST and rupee pricing, which discarded the
 * US/UK/AU/CA half of the query). Bonsai's prices below are quoted from Bonsai's
 * own pricing page and its FAQ structured data, read 2026-10-04 — see `sources`.
 * Bonsai bills PER USER, which is the structural difference worth knowing.
 */
export const CLIENTER_VS_BONSAI: ComparePageConfig = {
  slug: 'clienter-vs-bonsai',
  path: '/compare/clienter-vs-bonsai',
  competitor: 'Bonsai',
  competitorCategory:
    'all-in-one freelancer suite with proposals, contracts, invoicing, CRM & time tracking',
  metaTitle: 'Clienter vs Bonsai: The Honest Comparison',
  metaDescription:
    'Clienter vs Bonsai on price, per-user billing, templates, time tracking and team features. Who each suite really suits, with checkable sources.',
  keywords: [
    'clienter vs bonsai',
    'bonsai alternative',
    'bonsai vs clienter',
    'bonsai competitors',
  ],
  ogTitle: 'Clienter vs Bonsai — the honest comparison',
  ogDescription:
    'Bonsai bills per user; Clienter is flat. Two all-in-one suites compared on price, templates, teams and tax.',
  breadcrumbLabel: 'Clienter vs Bonsai',
  eyebrow: 'Clienter vs Bonsai',
  h1: 'Clienter vs Bonsai: the honest',
  h1Highlight: 'comparison',
  subheading:
    'Bonsai is a mature all-in-one suite for solo freelancers, billed per user. Clienter runs the same lifecycle for agencies and established freelancers at one flat price, with a free-forever plan. The difference shows up the moment you add a second person.',
  intro: {
    heading: 'Two all-in-one suites, priced on opposite principles',
    body: [
      'Bonsai is one of the most polished all-in-one suites built for freelancers. Proposals, contracts with e-signature, invoicing, a client CRM, projects and tasks, time tracking, and bookkeeping and tax tooling, all in one well-designed workspace. The template library is genuinely excellent and there are years of refinement behind it. For a solo freelancer it is one of the strongest options on the market.',
      'Clienter covers the same lifecycle — lead pipeline, AI-assisted quotations, e-signed contracts, projects with boards and budgets, a branded client portal, invoices in about 30 currencies with payment tracking — and then adds the parts a small agency needs that a solo tool does not: teammate logins with permissions, per-project assignments, team payouts and payroll, and a cash forecast.',
      'The difference that matters most is structural, not featural. Bonsai bills per user: the price on its pricing page is per seat, per month. Clienter bills per workspace: Pro includes five team members for one flat $19 a month, and Ultra is unlimited. With one person, Bonsai Basic is cheaper than Clienter Pro. With four, it is not close. Work out which of those you are before comparing anything else.',
    ],
  },
  tableHeading: 'Clienter vs Bonsai at a glance',
  rows: [
    { feature: 'Built for', clienter: 'Agencies & established freelancers', other: 'Solo freelancers' },
    { feature: 'How it is billed', clienter: 'Per workspace — flat', other: 'Per user, per month' },
    { feature: 'Lead pipeline & CRM', clienter: 'Yes — simple Kanban pipeline', other: 'Yes — client CRM' },
    { feature: 'Projects & tasks', clienter: 'Yes — boards, tasks, budgets', other: 'Yes — projects & tasks' },
    { feature: 'India GST invoicing', clienter: 'Built in', other: 'Not listed on their pricing page' },
    { feature: 'Team payouts & payroll', clienter: 'Built in (Ultra)', other: 'Not listed on their pricing page' },
    { feature: 'Proposals & e-signature', clienter: 'Built in', other: 'Yes — polished templates' },
    { feature: 'Contracts', clienter: 'Via proposals & e-sign', other: 'Yes — strong contract library' },
    { feature: 'Time tracking', clienter: 'Not the focus', other: 'Built in' },
    { feature: 'Branded client portal', clienter: 'Built in (1 client on Free, all on Pro & Ultra)', other: 'Client portal included' },
    { feature: 'Payment tracking & profit dashboard', clienter: 'Built in', other: 'Built in' },
    { feature: 'Free plan', clienter: 'Yes — free forever, no card', other: 'No free plan; 7-day trial' },
    {
      feature: 'Price (monthly, Oct 2026)',
      clienter: '$19 or $39 flat (₹199 / ₹799 in India)',
      other: 'Basic $15, Essentials $25, Premium $39, Elite $59 — per user',
    },
  ],
  clienterPros: [
    'One flat price for the workspace — five team members on Pro, unlimited on Ultra',
    'Invoices in about 30 currencies with a different currency per client, plus GST-compliant invoices for India',
    'Leads, projects, invoicing, payments, and a client portal in one workspace',
    'Free-forever plan (3 clients, 5 projects) — start without a credit card',
    'Branded client portal (every client on Pro & Ultra) to look established to clients',
    'Team payouts and payroll in the same place you invoice clients',
  ],
  clienterCons: [
    'Younger and smaller than Bonsai, with far fewer templates and integrations',
    'No built-in time tracking, and no bookkeeping or tax-filing module',
    'No built-in payment processing — Clienter records what clients owe, they pay you directly',
    'More than Bonsai Basic if you are a single person who only needs the basics',
  ],
  competitorPros: [
    'Mature, beautifully designed suite with a rich library of proposal and contract templates',
    'Strong contracts with e-signatures and a polished, professional client experience',
    'Built-in time tracking, plus bookkeeping and tax tooling a solo freelancer can genuinely use',
    'Well-established, with a wide integration ecosystem and a large user base',
    'Basic at $15 a month is cheaper than Clienter Pro for one person',
  ],
  competitorCons: [
    'Billed per user, so the cost scales linearly with your team — four people on Essentials is $100 a month',
    'No free-forever plan; a 7-day trial, then a paid tier',
    'Priced only in US dollars, so what you pay moves with your exchange rate',
    'GST invoicing, team payouts and payroll are not listed on their pricing page',
  ],
  pricing: {
    heading: 'Pricing: per user vs per workspace',
    body: [
      'Bonsai’s own pricing page and its FAQ structured data, read on 4 October 2026, listed four tiers billed per user, per month: Basic $15, Essentials $25, Premium $39 and Elite $59, with lower rates when billed annually ($9, $19, $29 and $49). There is a 7-day free trial and no free-forever plan. The page is linked below — check it, because plans move.',
      'Clienter is $19 a month for Pro and $39 for Ultra, billed in USD through PayPal, or ₹199 and ₹799 in INR through Razorpay if you are in India. Free is free forever with the whole product in it, for up to 3 clients and 5 projects. The number that matters: Pro includes five team members at that one price, and Ultra is unlimited, so adding a designer or a second developer does not change your bill.',
      'Work the sums for your own headcount. One person on Bonsai Basic is $15 against Clienter Pro at $19 — Bonsai wins. Three people who need proposals and invoicing are $75 a month on Essentials against $19 on Clienter Pro. At five, it is $125 against $19. That is the whole pricing argument, and it is arithmetic rather than opinion.',
      'What Bonsai’s price buys that Clienter’s does not: time tracking, a bookkeeping module and tax tooling, and a much larger template library. If you are solo and those matter to you, the per-user price is not a problem — you are the one user.',
    ],
  },
  chooseClienter: {
    heading: 'Choose Clienter if you…',
    points: [
      'Have anyone else working with you, now or soon — the flat price is the whole argument',
      'Need team assignments, payouts or payroll alongside client invoicing',
      'Invoice in several currencies, or need GST-compliant invoices for India',
      'Want to try the whole product free, indefinitely, before paying anything',
      'Want a branded client portal, on your own domain if you are on Ultra',
    ],
  },
  chooseOther: {
    heading: 'Choose Bonsai if you…',
    points: [
      'Work alone and expect to keep working alone',
      'Want built-in time tracking, bookkeeping and tax tooling in the same subscription',
      'Want the largest, most polished library of proposal and contract templates',
      'Want the most mature product with the longest track record',
      'Are at the very start and $15 a month on Basic is the right size',
    ],
  },
  migration: {
    heading: 'Moving from Bonsai to Clienter',
    body: [
      'Switching from Bonsai to Clienter is mostly a copy-over, not a project. Export your clients, projects, and invoices from Bonsai (CSV and PDF), then recreate your active clients and open projects in Clienter and rebuild your go-to proposal and invoice as reusable templates once. Most freelancers only carry a manageable set of active relationships at a time, so this is usually an afternoon of setup.',
      'Two things to plan for honestly. If you rely on Bonsai’s time tracking, Clienter does not replace it — you will need a separate tracker. And if you use its bookkeeping or tax features, those have no equivalent here; Clienter runs the client side of the business, not your ledgers. What you gain is the flat price, the free plan, invoicing in about 30 currencies, and the team and payout features Bonsai does not list.',
      'You can export your Clienter data whenever you want, so trying it costs only the setup time.',
    ],
  },
  faqHeading: 'Clienter vs Bonsai FAQs',
  faqs: [
    {
      q: 'Is Clienter a good Bonsai alternative?',
      a: 'If you have a team, or are heading towards one, yes — that is the clearest case. Bonsai bills per user; Clienter’s Pro plan includes five people at one flat price and Ultra is unlimited, and it adds team assignments, payouts and payroll that Bonsai does not list. It is also the better fit if you invoice in several currencies or need GST-compliant invoices for India. If you are a solo freelancer who wants time tracking and bookkeeping in the same tool, Bonsai is the better buy and we would rather say so.',
    },
    {
      q: 'Which is cheaper, Clienter or Bonsai?',
      a: 'It depends entirely on headcount, because they are billed on different principles. On prices read from Bonsai’s own pricing page on 4 October 2026: one person on Bonsai Basic is $15 a month against Clienter Pro at $19, so Bonsai is cheaper. Three people on Bonsai Essentials is $75 against $19. Five is $125 against $19. Clienter also has a free-forever plan and Bonsai does not — it offers a 7-day trial instead.',
    },
    {
      q: 'Does Bonsai support GST invoicing for India?',
      a: 'GST invoicing is not listed on Bonsai’s pricing page as of 4 October 2026, and its tax tooling follows US rules. We would rather state that than claim they cannot do it. Clienter includes GST-compliant invoicing with your GSTIN and the CGST/SGST split, plus a custom tax rate per line item for every other country. There are no other country-specific VAT or sales-tax invoice formats in Clienter, so check a sample against your local rules.',
    },
    {
      q: 'Does Clienter have time tracking like Bonsai?',
      a: 'No. Time tracking is not a Clienter feature, and that is a genuine gap if you bill hourly against tracked time. Clienter tracks project budgets, payments and profit rather than hours. If hourly tracking is central to how you invoice, either keep a separate tracker alongside Clienter or stay with Bonsai.',
    },
    {
      q: 'Is Bonsai worth it?',
      a: 'For a solo freelancer, genuinely yes. The templates, contracts, time tracking and tax tooling are mature and well designed, and Basic at $15 a month is a fair price for one person. The case against it is not quality, it is the per-user bill once you are more than one person, and the absence of a free plan to start on.',
    },
  ],
  related: [
    { href: '/alternatives/bonsai-alternatives', label: 'Best Bonsai alternatives', desc: 'Six real options compared, not just ours.' },
    { href: '/compare/clienter-vs-honeybook', label: 'Clienter vs HoneyBook', desc: 'The other big all-in-one client suite.' },
    { href: '/crm-for-freelancers', label: 'CRM for freelancers', desc: 'Why a freelancer-first CRM beats a generic one.' },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'One flat price, however many of you there are',
  ctaSubtitle: 'Start Clienter free — leads, quotes, contracts, projects, portal and invoices in one login.',
  asOf: 'October 2026',
  sources: SOURCES.bonsai,
}
