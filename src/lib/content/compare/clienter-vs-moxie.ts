import type { ComparePageConfig } from './_type'
import { SOURCES } from '@/lib/content/sources'

export const CLIENTER_VS_MOXIE: ComparePageConfig = {
  slug: 'clienter-vs-moxie',
  path: '/compare/clienter-vs-moxie',
  competitor: 'Moxie',
  competitorCategory: 'freelancer business-management suite (formerly Hectic)',
  metaTitle: 'Clienter vs Moxie: The Honest Comparison',
  metaDescription:
    'Clienter vs Moxie (formerly Hectic): a solo-freelancer suite against a workspace built for small teams. Price, features and who each fits.',
  keywords: [
    'clienter vs moxie',
    'moxie alternative india',
    'moxie vs clienter',
    'hectic alternative for freelancers',
  ],
  ogTitle: 'Clienter vs Moxie — the honest comparison',
  ogDescription:
    'Moxie is built around the solo freelancer. Clienter is built around a small team. Where each one wins.',
  breadcrumbLabel: 'Clienter vs Moxie',
  eyebrow: 'Clienter vs Moxie',
  h1: 'Clienter vs Moxie: the honest',
  h1Highlight: 'comparison',
  subheading:
    'Moxie (formerly Hectic) is a comprehensive suite built squarely around the solo freelancer, with time tracking and a 14-day trial. Clienter is built around a small team: assignments, payouts and payroll, at one flat price with a free-forever tier. Here is how they really compare.',
  intro: {
    heading: 'A solo-freelancer suite vs a small-team workspace',
    body: [
      'Moxie — formerly Hectic — is a comprehensive business-management suite built for solo freelancers. In one place it handles a CRM and leads, proposals, contracts, invoicing, time tracking, projects and tasks, a client portal, scheduling, and even bookkeeping and tax-planning tools. It is designed by and for freelancers, and the workflow from lead to paid is genuinely well thought out.',
      'Clienter is an all-in-one for agencies and established freelancers: a simple lead pipeline, projects with boards and budgets, invoicing and quotations in about 30 currencies, proposals with e-signature, payment and expense tracking with a live profit dashboard, meetings with Google Calendar and Meet, team management with role-based access, and a branded client portal — with invoices in about 30 currencies and GST-compliant invoicing for India.',
      'Both are strong freelancer suites, so this is about fit, not features. Moxie is US-focused and dollar-priced, with tax tools built around US rules. Clienter is built around a small team — assignments, payouts, payroll, a flat price — with a free-forever plan. If you work alone, Moxie is excellent; once there are a few of you, Clienter is the natural home.',
    ],
  },
  tableHeading: 'Clienter vs Moxie at a glance',
  rows: [
    { feature: 'Built for', clienter: 'Agencies & established freelancers', other: 'Solo freelancers' },
    { feature: 'Team members & payouts', clienter: '5 on Pro, unlimited on Ultra; payroll on Ultra', other: 'Designed around one person' },
    { feature: 'Lead pipeline & CRM', clienter: 'Yes — simple Kanban pipeline', other: 'Yes — CRM & leads' },
    { feature: 'Proposals & e-signature', clienter: 'Built in', other: 'Yes — proposals & contracts' },
    { feature: 'GST-compliant invoicing', clienter: 'Built in', other: 'Not listed on their pricing page' },
    { feature: 'Projects & tasks', clienter: 'Yes — boards, tasks, budgets', other: 'Yes — projects & tasks' },
    { feature: 'Time tracking', clienter: 'Not the focus', other: 'Built in' },
    { feature: 'Bookkeeping / tax tools', clienter: 'Live profit dashboard', other: 'Yes — US bookkeeping/tax' },
    { feature: 'Payments', clienter: 'Invoices in ~30 currencies; UPI details on Indian invoices', other: 'USD-oriented' },
    { feature: 'Branded client portal', clienter: 'Built in (1 client on Free, all on Pro & Ultra)', other: 'Yes — client portal' },
    { feature: 'Free plan', clienter: 'Yes — free forever, no card', other: 'No free plan; 14-day trial' },
    {
      feature: 'Price (monthly, Oct 2026)',
      clienter: '$19 or $39 (₹199 / ₹799 in India)',
      other: 'Tiers listed between roughly $12 and $40 — check their page for the current split',
    },
  ],
  clienterPros: [
    'Invoices and quotations in about 30 currencies, with GST-compliant invoicing for India',
    'Invoices in about 30 currencies and a live profit dashboard',
    'All-in-one: leads, projects with budgets, invoicing, and a client portal',
    'Free-forever plan to start (3 clients, 5 projects), no credit card needed',
    'Team management with role-based access, plus a branded portal for every client on paid plans',
  ],
  clienterCons: [
    'No built-in time tracking or a dedicated bookkeeping/tax module',
    'Younger and smaller, with fewer templates and integrations',
    'Not built for US freelancers who bill in dollars and file US taxes',
  ],
  competitorPros: [
    'Comprehensive, well-designed suite built by and for freelancers',
    'Covers CRM, proposals, contracts, invoicing, time tracking, and projects',
    'Includes bookkeeping and tax-planning tools helpful to US freelancers',
    'Thoughtful lead-to-paid workflow with a client portal and scheduling',
  ],
  competitorCons: [
    'Tax tooling follows US rules, so it does not help outside the US',
    'Priced only in US dollars, so what you pay moves with your exchange rate',
    'Moved on from its free Hectic origins to paid plans — verify current pricing',
    'GST-compliant invoicing is not listed on their pricing page',
  ],
  pricing: {
    heading: 'Pricing: US suite vs plans in USD and INR',
    body: [
      'Moxie is a paid subscription priced in US dollars. It started life as Hectic, which was free, but Moxie has since moved to paid plans — so check its current pricing on its own site. Much of its value for US freelancers is in tax-planning and bookkeeping tools that are built around US rules and will not map to Indian GST.',
      'Clienter is priced in both USD and INR. Free is ₹0 forever and covers up to 3 clients and 5 projects with the full pipeline, invoicing, quotations, and meetings. Pro is $19/month (₹199 in India) for up to 20 clients, 40 projects, 5 team members, and the branded client portal for every client. Ultra is $39/month (₹799 in India) for unlimited everything.',
      'The honest summary: for a US freelancer, Moxie’s price buys a comprehensive, well-designed workspace. For a small team, Clienter’s flat price, free plan, multi-currency invoicing and team payouts make it the practical choice.',
    ],
  },
  chooseClienter: {
    heading: 'Choose Clienter if you…',
    points: [
      'Invoice in more than one currency, or need GST-compliant invoices for India',
      'Want one flat price for the workspace rather than a per-seat bill',
      'Want a free-forever plan to start on',
      'Want leads, projects, invoicing and a client portal in one login',
      'Want role-based team access and a branded portal as you grow',
    ],
  },
  chooseOther: {
    heading: 'Choose Moxie if you…',
    points: [
      'Are a US-based solo freelancer billing in dollars',
      'Want built-in time tracking and US bookkeeping or tax-planning tools',
      'Want a comprehensive, freelancer-designed workflow',
      'Do not need GST-compliant invoicing or a second billing currency',
    ],
  },
  migration: {
    heading: 'Moving from Moxie to Clienter',
    body: [
      'Moving from Moxie to Clienter is a manageable copy-over. Export your clients, projects, and invoices, then recreate your active clients and open work in Clienter and save your go-to proposal and invoice as templates once. Most solo freelancers only carry a handful of active clients at a time, so it is usually an afternoon of setup rather than a project.',
      'What you gain is team assignments, payouts and payroll, a flat price and a free plan. What you give up is Moxie’s time tracking and tax tooling. And you can export your Clienter data whenever you want, so there is no lock-in.',
    ],
  },
  faqHeading: 'Clienter vs Moxie FAQs',
  faqs: [
    {
      q: 'Is Clienter a good Moxie alternative?',
      a: 'Moxie (formerly Hectic) is a comprehensive, US-focused freelancer suite priced in dollars, while Clienter is built around a small team and invoices in about 30 currencies, with GST-compliant invoicing for India — with a free-forever plan. You get an all-in-one shaped around a small team rather than one person.',
    },
    {
      q: 'Is Moxie the same as Hectic?',
      a: 'Yes — Moxie is the rebranded and expanded version of Hectic. Hectic was known for a free plan; Moxie has since moved to paid plans, so check its current pricing on its own site. Clienter, by contrast, offers a free-forever plan alongside its paid tiers.',
    },
    {
      q: 'Does Moxie support GST invoicing for India?',
      a: 'Moxie does not list GST-compliant invoicing on its pricing page, and its tax tooling follows US rules. Clienter includes GST-compliant invoicing with your GSTIN and the CGST⁄SGST split, which is a meaningful difference if you bill Indian clients.',
    },
    {
      q: 'Which is better for a freelancer, Clienter or Moxie?',
      a: 'It depends on where you work. For US freelancers, Moxie is a comprehensive, well-designed choice with time tracking and US tax tools. For a small team, Clienter fits better — assignments, payouts, a flat price and a free plan to start on.',
    },
  ],
  related: [
    { href: '/compare/clienter-vs-bonsai', label: 'Clienter vs Bonsai', desc: 'The other big all-in-one client suite.' },
    { href: '/compare/clienter-vs-plutio', label: 'Clienter vs Plutio', desc: 'Another all-in-one freelancer suite compared.' },
    { href: '/for/freelancers', label: 'Clienter for freelancers', desc: 'How Clienter fits everyday freelance work.' },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'A client workspace built for a small team',
  ctaSubtitle: 'Start Clienter free — leads, projects, invoicing, and a client portal in one place.',
  asOf: 'October 2026',
  sources: SOURCES.moxie,
}
