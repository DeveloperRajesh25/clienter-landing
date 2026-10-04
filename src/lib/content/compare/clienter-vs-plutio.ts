import type { ComparePageConfig } from './_type'
import { SOURCES } from '@/lib/content/sources'

export const CLIENTER_VS_PLUTIO: ComparePageConfig = {
  slug: 'clienter-vs-plutio',
  path: '/compare/clienter-vs-plutio',
  competitor: 'Plutio',
  competitorCategory: 'all-in-one freelancer & agency suite for projects, proposals, invoices & CRM',
  metaTitle: 'Clienter vs Plutio: The Honest Comparison',
  metaDescription:
    'Clienter vs Plutio on price, active-client limits, customisation, teams and tax — with prices read from Plutio’s own pricing page.',
  keywords: [
    'clienter vs plutio',
    'plutio alternative india',
    'plutio vs clienter',
    'plutio alternative for freelancers',
  ],
  ogTitle: 'Clienter vs Plutio — the honest comparison',
  ogDescription:
    'Two all-in-one suites compared on price, client limits, customisation and team features.',
  breadcrumbLabel: 'Clienter vs Plutio',
  eyebrow: 'Clienter vs Plutio',
  h1: 'Clienter vs Plutio: the honest',
  h1Highlight: 'comparison',
  subheading:
    'Plutio is a broad, highly customisable all-in-one for freelancers and agencies, with an active-client cap on its entry plan. Clienter is a flat-priced workspace with a free-forever tier and no cap on its paid plans. Here is how they really compare.',
  intro: {
    heading: 'A customisable toolkit vs an opinionated workspace',
    body: [
      'Plutio is a broad, highly customizable all-in-one built for freelancers and agencies. In one workspace it covers projects and tasks, proposals, invoicing, a CRM and contacts, forms, time tracking, team collaboration and messaging, and a white-label client portal. It supports multiple currencies and languages, and its branding and customization options are a genuine strength — you can make it feel like your own product.',
      'Clienter is also an all-in-one for freelancers and agencies, built around a small team: a simple lead pipeline, projects with boards and budgets, invoicing and quotations in about 30 currencies, proposals with e-signature, payment and expense tracking with a live profit dashboard, meetings, team management with role-based access, and a branded client portal — with invoices in about 30 currencies and GST-compliant invoicing for India.',
      'Both are capable all-in-ones, so this is not about one of them lacking features. The real difference is shape: Clienter is opinionated and flat-priced with a free-forever plan and team payouts built in. Plutio is more of a global, customizable toolkit priced in dollars. If you want a flat price, a free plan and team payouts in the same tool, Clienter fits; if you want maximum customisation across many modules, Plutio is strong.',
    ],
  },
  tableHeading: 'Clienter vs Plutio at a glance',
  rows: [
    { feature: 'Built for', clienter: 'Agencies & established freelancers', other: 'Freelancers & agencies' },
    { feature: 'Entry-plan client cap', clienter: '20 clients on Pro', other: '9 active clients on Core' },
    { feature: 'Lead pipeline & CRM', clienter: 'Yes — simple Kanban pipeline', other: 'Yes — contacts & CRM' },
    { feature: 'Projects & tasks', clienter: 'Yes — boards, tasks, budgets', other: 'Yes — projects & tasks' },
    { feature: 'Proposals & e-signature', clienter: 'Built in', other: 'Yes — proposals' },
    { feature: 'GST-compliant invoicing', clienter: 'Built in', other: 'Invoicing; GST not listed on their pricing page' },
    { feature: 'Payments', clienter: 'Invoices in ~30 currencies; UPI details on Indian invoices', other: 'Multi-currency, USD-oriented' },
    { feature: 'Customization / white-label', clienter: 'Branded portal; full white label on Ultra', other: 'Extensive white-label & custom' },
    { feature: 'Team & collaboration', clienter: 'Role-based team access', other: 'Yes — messaging & collaboration' },
    { feature: 'Free plan', clienter: 'Yes — free forever', other: 'No free-forever plan (check)' },
    { feature: 'Free plan', clienter: 'Yes — free forever, no card', other: 'No free plan; 7-day trial, no card' },
    {
      feature: 'Price (monthly, Oct 2026)',
      clienter: '$19 or $39 (₹199 / ₹799 in India)',
      other: 'Core $19, Pro $49, Max $199',
    },
  ],
  clienterPros: [
    'Invoices and quotations in about 30 currencies, with GST-compliant invoicing for India',
    'A different currency per client, and UPI details on Indian invoices',
    'Free-forever plan to start (3 clients, 5 projects), no credit card needed',
    'An all-in-one that is simple to set up — usable the same day',
    'Branded client portal for every client plus role-based team access on paid plans',
  ],
  clienterCons: [
    'Fewer modules and less deep customization than Plutio',
    'Younger and smaller, with fewer templates and integrations',
    'Not aimed at global, multi-currency teams the way Plutio is',
  ],
  competitorPros: [
    'Very broad all-in-one covering projects, proposals, invoices, CRM, and more',
    'Excellent white-label branding and deep customization',
    'Multi-currency and multi-language support for global teams',
    'Built-in collaboration, messaging, and forms for agencies',
  ],
  competitorCons: [
    'GST-compliant invoicing is not listed on their pricing page',
    'Priced only in US dollars, so what you pay moves with your exchange rate',
    'No free-forever plan the way Clienter has — verify current pricing',
    'Breadth and customization can mean a heavier setup than a solo freelancer needs',
  ],
  pricing: {
    heading: 'Pricing: global toolkit vs plans in USD and INR',
    body: [
      'Plutio is a paid subscription priced in US dollars, with tiers that add team members and features as you scale, and no free-forever plan (a trial to try it) — so check current pricing on its own site. It supports multiple currencies for invoicing, which helps global freelancers, but it is not built specifically around Indian GST.',
      'Clienter is priced in both USD and INR. Free is ₹0 forever and covers up to 3 clients and 5 projects with the full pipeline, invoicing, quotations, and meetings. Pro is $19/month (₹199 in India) for up to 20 clients, 40 projects, 5 team members, and the branded client portal for every client. Ultra is $39/month (₹799 in India) for unlimited everything.',
      'The honest summary: if you want maximum customization across many modules and you bill globally, Plutio’s toolkit is worth a look. If you bill Indian clients and want GST invoicing, rupee pricing, and a free plan, Clienter is the more direct fit.',
    ],
  },
  chooseClienter: {
    heading: 'Choose Clienter if you…',
    points: [
      'Invoice in more than one currency, or need GST-compliant invoices for India',
      'Want one flat price for the workspace rather than a per-seat bill',
      'Want a free-forever plan to start and simple, same-day setup',
      'Want leads, projects, invoicing and a client portal in one login',
      'Prefer a focused tool over configuring many modules',
    ],
  },
  chooseOther: {
    heading: 'Choose Plutio if you…',
    points: [
      'Want maximum customization and white-label branding across modules',
      'Run a global team billing in multiple currencies',
      'Want built-in messaging and collaboration for a larger agency',
      'Are happy to invest time configuring a broad toolkit',
    ],
  },
  migration: {
    heading: 'Moving from Plutio to Clienter',
    body: [
      'Moving from Plutio to Clienter is straightforward. Export your contacts, projects, and invoices, then recreate your active clients and open projects in Clienter and save your go-to proposal and invoice as templates once. Because you will not be rebuilding a heavily customized setup, most freelancers and small agencies are up and running in an afternoon.',
      'The reason people switch is shape: a flat price for the whole workspace, invoicing in about 30 currencies, team payouts in the same tool, and a free plan to start on. And you can export your Clienter data whenever you want, so there is no lock-in.',
    ],
  },
  faqHeading: 'Clienter vs Plutio FAQs',
  faqs: [
    {
      q: 'Is Clienter a good Plutio alternative?',
      a: 'Both are capable all-in-ones, but Plutio is a global, USD-priced toolkit, while Clienter is built for India — GST-compliant invoicing, rupee pricing, and UPI-friendly payments — with a free-forever plan. If a flat price and a free plan matter more to you than deep customisation, Clienter is the better fit.',
    },
    {
      q: 'Does Plutio support GST invoicing for India?',
      a: 'Plutio has flexible, multi-currency invoicing, but it does not list GST-compliant invoicing on its pricing page. Clienter includes GST-compliant invoicing with your GSTIN and the CGST⁄SGST split, so Indian clients get compliant invoices without workarounds.',
    },
    {
      q: 'Is Plutio or Clienter more customizable?',
      a: 'Plutio is more customizable — its white-label branding and configurable modules are a genuine strength, especially for agencies that want the tool to feel like their own. Clienter is more focused and simpler to set up, and it still offers a branded client portal on every plan, plus full white label on Ultra.',
    },
    {
      q: 'Which is cheaper, Clienter or Plutio?',
      a: 'Plutio is priced in US dollars with no free-forever plan, so verify its current pricing on its own site. Clienter starts free and its Pro plan is $19/month (₹199 in India) with projects, invoicing, and a client portal included, so for a small team Clienter is usually the more affordable option.',
    },
  ],
  related: [
    { href: '/compare/clienter-vs-moxie', label: 'Clienter vs Moxie', desc: 'Another all-in-one freelancer suite compared.' },
    { href: '/compare/clienter-vs-bonsai', label: 'Clienter vs Bonsai', desc: 'The other big all-in-one client suite.' },
    { href: '/for/freelancers', label: 'Clienter for freelancers', desc: 'How Clienter fits everyday freelance work.' },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'One opinionated tool instead of a toolkit to configure',
  ctaSubtitle: 'Start Clienter free — leads, quotes, projects, invoices and a client portal in one login.',
  asOf: 'October 2026',
  sources: SOURCES.plutio,
}
