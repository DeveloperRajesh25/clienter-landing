import type { ComparePageConfig } from './_type'
import { SOURCES } from '@/lib/content/sources'

/**
 * Reframed October 2026 for a worldwide reader. The page used to be titled
 * "Which Suite for India?" and argued the whole comparison on GST and rupee
 * pricing — which threw away every US, UK, Australian and Canadian searcher for
 * "clienter vs honeybook", the people most likely to be weighing HoneyBook at
 * all. The India/GST argument is still here, where it is a genuine
 * differentiator rather than the only one.
 *
 * HoneyBook's list prices below come from HoneyBook's own pricing page, read on
 * 2026-10-04 (see `sources`). Promotional rates were also showing on that page
 * at the time, so the copy says "list price".
 */
export const CLIENTER_VS_HONEYBOOK: ComparePageConfig = {
  slug: 'clienter-vs-honeybook',
  path: '/compare/clienter-vs-honeybook',
  competitor: 'HoneyBook',
  competitorCategory: 'client-flow suite for creatives and service businesses',
  metaTitle: 'Clienter vs HoneyBook: An Honest Comparison',
  metaDescription:
    'Clienter vs HoneyBook, compared on price, client flow, team features, payments and tax. Who each one really suits, with sources you can check.',
  keywords: [
    'clienter vs honeybook',
    'honeybook alternative',
    'honeybook vs clienter',
    'honeybook competitors',
  ],
  ogTitle: 'Clienter vs HoneyBook — the honest comparison',
  ogDescription:
    'HoneyBook is a polished client-flow suite built around US payments. See where Clienter fits, and where HoneyBook is still the better buy.',
  breadcrumbLabel: 'Clienter vs HoneyBook',
  eyebrow: 'Clienter vs HoneyBook',
  h1: 'Clienter vs HoneyBook: an honest',
  h1Highlight: 'comparison',
  subheading:
    'HoneyBook is one of the most polished client-flow tools built for creatives, with payments designed around the US and Canada. Clienter runs the same lifecycle — leads, quotes, contracts, projects, portal, invoices — for agencies and freelancers in any country, with a free plan and a flat price. Here is how they really compare.',
  intro: {
    heading: 'A booking-led creative suite vs a whole-agency workspace',
    body: [
      'HoneyBook is a client-flow platform for creatives and service businesses — photographers, event planners, designers, coaches. Its strength is the front half of the relationship: a branded enquiry form, a beautiful proposal, a contract with e-signature, a deposit taken on the spot, and automations that carry someone from first enquiry to a booked, paid job without you touching it. It is mature, well-designed and has a large, loyal base.',
      'Clienter covers the same ground and then keeps going past the booking. Leads on a pipeline, AI-assisted quotations, e-signed contracts, projects on Kanban boards with budgets and assignees, a branded client portal, invoices in about 30 currencies with payment tracking and reminders, team payouts and payroll, and a cash forecast. The centre of gravity is different: HoneyBook is organised around winning the job, Clienter around running a book of clients and a small team.',
      'The honest framing. If you are a solo creative in the US or Canada and what you want is the most polished possible path from enquiry to signed-and-paid, HoneyBook does that better than we do. If you run several clients at once, have people working with you, need to see who owes you what, or are billing from outside the US, Clienter is the better shape — and there is a free plan to test that claim with.',
    ],
  },
  tableHeading: 'Clienter vs HoneyBook at a glance',
  rows: [
    {
      feature: 'Centre of gravity',
      clienter: 'Running a book of clients and a team',
      other: 'Winning and booking the job',
    },
    { feature: 'Lead capture & pipeline', clienter: 'Kanban pipeline', other: 'Enquiry forms & pipeline' },
    {
      feature: 'Quotes & proposals',
      clienter: 'AI-assisted, learns your rates',
      other: 'Polished branded templates',
    },
    { feature: 'Contracts & e-signature', clienter: 'Built in', other: 'Built in, template library' },
    {
      feature: 'Project management',
      clienter: 'Kanban boards, budgets, tasks, assignees',
      other: 'Project pipeline, lighter task management',
    },
    {
      feature: 'Collecting client payments',
      clienter: 'Tracks what is owed and paid — the client pays you directly',
      other: 'Built-in payment processing (US/Canada)',
    },
    {
      feature: 'Invoice currencies',
      clienter: '~30, a different one per client',
      other: 'USD-centred; check current list on their site',
    },
    { feature: 'India GST invoicing', clienter: 'Built in', other: 'Not listed on their pricing page' },
    {
      feature: 'Team payouts & payroll',
      clienter: 'Built in (Ultra)',
      other: 'Not listed on their pricing page',
    },
    {
      feature: 'Automations',
      clienter: 'Lighter — reminders, retainer auto-invoicing',
      other: 'Strong and mature',
    },
    {
      feature: 'Free plan',
      clienter: 'Yes — free forever, no card',
      other: 'No free plan; free trial offered',
    },
    {
      feature: 'Entry price (list, Oct 2026)',
      clienter: '$19/mo (₹199/mo in India), flat',
      other: 'Starter $36/mo, Essentials $59/mo, Premium $129/mo',
    },
  ],
  clienterPros: [
    'Free forever plan with the whole product in it, no card',
    'One flat price rather than a per-seat bill as your team grows',
    'Invoices in about 30 currencies, a different one per client, plus GST-compliant invoices for India',
    'Projects, team assignments, payouts and payroll — the half of the job that comes after the booking',
    'A branded client portal on every plan, and your own domain on Ultra',
  ],
  clienterCons: [
    'No built-in payment processing — Clienter records and tracks what clients owe you, they pay you directly',
    'Automations are lighter than HoneyBook’s; there is no visual workflow builder',
    'Far fewer ready-made creative-industry templates',
    'Younger product, smaller community, fewer third-party integrations',
  ],
  competitorPros: [
    'Takes a deposit inside the proposal — the strongest booking flow in this category',
    'Mature automation that moves an enquiry to a signed job without you',
    'Large template library for proposals, contracts and brochures',
    'Long track record and a big, active community of creatives',
  ],
  competitorCons: [
    'Built-in payments are designed for US and Canadian businesses, so the feature you are largely paying for may not apply where you are',
    'No free-forever plan — a trial, then a paid tier',
    'List pricing starts at $36/month, roughly double Clienter’s Pro, and rises to $129/month',
    'GST invoicing, team payouts and payroll are not listed on their pricing page',
  ],
  pricing: {
    heading: 'Pricing: tiered USD subscription vs one flat price in two currencies',
    body: [
      'HoneyBook’s own pricing page, read on 4 October 2026, listed three plans billed in US dollars: Starter at $36 a month, Essentials at $59 and Premium at $129, each cheaper paid annually ($29, $49 and $109). There is a free trial but no free-forever plan. Promotional rates were also showing on that page when we read it, so treat those figures as list prices and check the page yourself — it is linked below.',
      'Clienter is $19 a month for Pro and $39 for Ultra, billed in USD through PayPal, or ₹199 and ₹799 a month billed in INR through Razorpay if you are in India. Free is free forever and includes the whole product for up to 3 clients and 5 projects. Pro covers 20 clients, 40 projects and 5 team members at one flat price — the price does not move when you add the fifth person.',
      'The honest summary. Cost is not the only axis here. HoneyBook’s price buys payment processing built into the proposal, which is genuinely valuable if you are in the US or Canada. If you cannot use that, you are paying US-market prices for the parts you can use. Clienter is cheaper, flat, and covers the project-and-team half that HoneyBook leaves lighter — but you collect the money yourself.',
    ],
  },
  chooseClienter: {
    heading: 'Choose Clienter if you…',
    points: [
      'Run more than a couple of clients at once and need projects, boards and budgets, not just bookings',
      'Have people working with you, and would rather not pay per seat',
      'Bill in a currency other than US dollars, or in several currencies',
      'Need GST-compliant invoices for Indian clients',
      'Want to pay your team from the same place you invoice clients',
      'Want to try the whole product free, for as long as you like, before paying',
    ],
  },
  chooseOther: {
    heading: 'Choose HoneyBook if you…',
    points: [
      'Are a US or Canadian business and want clients to pay inside the proposal',
      'Live or die on the enquiry-to-booking flow and want the most polished one available',
      'Want deep, visual automation that runs the booking process for you',
      'Want a large library of creative-industry templates out of the box',
      'Work mostly solo, so a per-seat price never bites',
    ],
  },
  migration: {
    heading: 'Moving from HoneyBook to Clienter',
    body: [
      'For a solo operator or a small team this is an afternoon, not a project. Export your contacts, projects and invoices from HoneyBook, recreate the clients you are actively working with and the enquiries still open, and save your usual quote and invoice as templates once. Most client-services businesses only have a handful of live jobs at a time, so there is far less to move than the word "migration" suggests.',
      'The thing to plan for is payments. HoneyBook collects money for you; Clienter does not. You will need whatever you already use to get paid — bank transfer, UPI, a card link — and Clienter will issue the invoice, chase it, record the payment and keep the running balance. If taking a deposit inside the proposal is central to how you sell, that is a real loss and worth weighing before you move.',
      'You can export everything out of Clienter whenever you want, so trying it costs you only the setup time.',
    ],
  },
  faqHeading: 'Clienter vs HoneyBook FAQs',
  faqs: [
    {
      q: 'Is Clienter a good HoneyBook alternative?',
      a: 'It is a good alternative if your work does not fit HoneyBook’s shape: more than a handful of clients at once, a small team to assign work to and pay, billing outside the US, or several currencies. Clienter covers the same lifecycle — leads, quotes, e-signed contracts, portal, invoices — and adds projects, payouts and payroll, with a free-forever plan and a flat price. It is not a good alternative if the single most important thing to you is taking a deposit inside a beautiful proposal, because Clienter does not process payments at all.',
    },
    {
      q: 'Can I use HoneyBook outside the US?',
      a: 'You can use the software, but its built-in payment processing is designed for businesses in the US and Canada. Since that processing is a large part of what the subscription buys, check HoneyBook’s own pricing page for current country availability before committing — it is linked in the sources below. Clienter has no payment processing at all, in any country: it invoices, reminds and records, and your client pays you directly.',
    },
    {
      q: 'Does HoneyBook do GST invoicing for India?',
      a: 'GST invoicing is not listed on HoneyBook’s pricing page as of 4 October 2026, and their invoicing follows US conventions. We would rather say that than claim they cannot do it. Clienter includes GST-compliant invoicing with your GSTIN and the CGST/SGST split, alongside a custom tax rate per line item for every other country.',
    },
    {
      q: 'Which is cheaper, Clienter or HoneyBook?',
      a: 'Clienter, on list prices read on 4 October 2026. HoneyBook listed $36, $59 and $129 a month; Clienter is $19 and $39, or ₹199 and ₹799 in India, with a free-forever plan under both. The gap widens with team size, because Clienter’s Pro plan includes five team members at one price. Price is the easy comparison though — whether you can use HoneyBook’s payments where you are matters more than the difference.',
    },
    {
      q: 'Is HoneyBook worth it?',
      a: 'For a US or Canadian creative business, genuinely yes. The booking flow is the best in the category and the automations save real hours. The question is only whether you are the customer it was designed for. If you are outside North America, running a team, or managing a dozen live projects rather than a dozen enquiries, you are paying for strengths you cannot fully use.',
    },
  ],
  related: [
    {
      href: '/alternatives/honeybook-alternatives',
      label: 'Best HoneyBook alternatives',
      desc: 'Five real options compared, not just ours.',
    },
    {
      href: '/compare/clienter-vs-dubsado',
      label: 'Clienter vs Dubsado',
      desc: 'The other big creative client suite.',
    },
    {
      href: '/features/client-portal',
      label: 'Client portal',
      desc: 'What your clients actually see and do.',
    },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'The whole client lifecycle, not just the booking',
  ctaSubtitle:
    'Start Clienter free — leads, quotes, contracts, projects, portal and invoices in one login. No card.',
  asOf: 'October 2026',
  sources: SOURCES.honeybook,
}
