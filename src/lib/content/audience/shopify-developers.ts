import {
  Users,
  FolderKanban,
  ListChecks,
  ReceiptText,
  RefreshCw,
  MessageSquare,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const SHOPIFY_DEVELOPERS: AudiencePageConfig = {
  slug: 'shopify-developers',
  path: '/for/shopify-developers',
  audience: 'Shopify developers',
  metaTitle: 'CRM & Project Software for Shopify Developers',
  metaDescription:
    'Run Shopify builds, theme work and store retainers in one place — pipeline, project boards, launch checklists, milestone invoices and a client portal. Free to start.',
  keywords: [
    'CRM for Shopify developers',
    'Shopify agency management software',
    'project management for Shopify developers',
    'Shopify freelancer CRM',
    'manage Shopify clients',
    'ecommerce development project management',
    'Shopify store launch checklist software',
    'client portal for Shopify clients',
    'Shopify retainer billing',
    'Shopify partner agency software',
  ],
  ogTitle: 'CRM & Project Software for Shopify Developers — Clienter',
  ogDescription:
    'Store builds, theme customisations and monthly retainers in one workspace — with launch checklists, milestone invoicing and a client portal.',
  breadcrumbLabel: 'For Shopify Developers',
  eyebrow: 'For Shopify developers',
  h1: 'Store builds, theme work and retainers on',
  h1Highlight: 'one board',
  subheading:
    'A new store in build, two theme customisations in review, a migration waiting on product data, and three merchants on monthly support. Clienter holds the clients, the projects, the launch checklists and the invoices so you can stay inside the code.',
  intro: {
    heading: 'Ecommerce clients move faster than your admin does',
    body: [
      'Shopify work has a tempo of its own. Merchants are impatient because every day the store isn’t live is a day of lost revenue, and they say so. Scope arrives in fragments — an app integration here, a checkout tweak there, a “quick” theme change the week before Black Friday. The work is small, frequent, and relentless, which is exactly the shape that overwhelms a spreadsheet.',
      'The money has an awkward shape too. A store build is a project fee. A theme customisation is a quote. App setup might be hourly. And then there’s the support retainer that keeps the merchant’s store healthy — the revenue you most want and most often forget to bill. Four billing patterns, usually spread across three tools, plus a chat thread per merchant.',
      'Clienter puts the whole merchant relationship on one page: their store, their projects, their requests, their invoices, and what they’re waiting on you for. Builds run on boards with a reusable launch checklist. Retainers raise their own invoices. And a branded portal gives each merchant somewhere to look that isn’t your phone at 10pm.',
    ],
  },
  pains: {
    heading: 'What slows a Shopify developer down',
    sub: 'Not the code — the coordination around it.',
    items: [
      {
        title: 'Product data that never arrives complete',
        desc: 'The theme is finished, but you’re missing half the product images, the variant names are inconsistent, and nobody has decided on shipping zones. The build waits, visibly stalled, with no record of whose turn it is.',
      },
      {
        title: 'Requests arriving in four channels at once',
        desc: 'WhatsApp, email, a shared Slack channel, and a comment on a Figma file. Anything not written down twice gets done free or gets forgotten.',
      },
      {
        title: 'Peak-season work with no buffer',
        desc: 'Every merchant wants changes shipped before the sale weekend. Without a view across all your active stores, you commit to the fifth one before noticing the first four already fill the week.',
      },
      {
        title: 'Four billing shapes, three tools',
        desc: 'Fixed-fee builds, quoted customisations, hourly app work and monthly support. Keeping that straight across apps means something always goes unbilled.',
      },
      {
        title: 'Launch steps that cost real money if missed',
        desc: 'Payment gateway live, taxes configured, redirects from the old store, test order placed, analytics and pixels firing. A missed step on an ecommerce go-live isn’t cosmetic — it’s lost orders.',
      },
    ],
  },
  workflow: {
    heading: 'A merchant, from first call to a monthly retainer',
    sub: 'How a store build and the support that follows it run through one workspace.',
    steps: [
      {
        title: '1. Qualify the merchant',
        desc: 'Enquiries become pipeline cards with the store’s platform, budget and timeline, so you can see which deals are real before clearing a fortnight for them.',
      },
      {
        title: '2. Quote the store, lock the scope',
        desc: 'A proposal that names the theme, the apps, the migration scope and the revision rounds, signed online, with the deposit invoice raised the same day.',
      },
      {
        title: '3. Build with blockers in the open',
        desc: 'Design, theme development, product import, payments and QA as stages — with “waiting on merchant” a visible state, not a silence you have to explain later.',
      },
      {
        title: '4. Go live from a checklist',
        desc: 'Gateway, taxes, shipping, redirects, a real test order, pixels and analytics. Mark launch, raise the balance invoice, and keep the checklist for the next store.',
      },
      {
        title: '5. Convert to monthly support',
        desc: 'Move the merchant to a recurring support retainer, track every change request against their store, and let them follow the queue in their own portal.',
      },
    ],
  },
  features: {
    heading: 'The pieces a Shopify practice needs',
    sub: 'Clients, builds, requests and revenue in one place.',
    items: [
      { icon: Users, title: 'Merchant profiles', desc: 'Store details, project history, open requests and every invoice on one page.' },
      { icon: FolderKanban, title: 'Store build boards', desc: 'Stages from design through product import to launch, with blockers visible to both sides.' },
      { icon: ListChecks, title: 'Launch checklists', desc: 'Gateway, tax, shipping, redirects and test orders — the same list, every store.' },
      { icon: MessageSquare, title: 'Request tracking', desc: 'Change requests logged against the merchant instead of scattered across chat apps.' },
      { icon: ReceiptText, title: 'Milestone invoicing', desc: 'Deposit, balance and quoted extras, each tied to the work that earned them.' },
      { icon: RefreshCw, title: 'Support retainers', desc: 'Recurring monthly invoices for the merchants you keep healthy after launch.' },
    ],
  },
  compare: {
    heading: 'Chat threads vs a workspace',
    sub: 'The same week, run two ways.',
    old: [
      'Change requests spread across WhatsApp, email and Slack',
      'Launch steps remembered differently on every store',
      'Merchant delays that look like your delays',
      'Support retainers billed when you remember',
      'No single view of what’s due this week across stores',
    ],
    calm: [
      'Every request logged against the merchant who asked',
      'One checklist reused and improved store after store',
      '“Waiting on merchant” visible on the project itself',
      'Recurring invoices raised automatically on renewal',
      'One board across every active store and deadline',
    ],
  },
  pricing: {
    heading: 'Start free, scale by usage not by seat',
    body: [
      'Free covers 3 clients and 5 projects with the full feature set — pipeline, proposals, boards, launch checklists, invoicing and the client portal. Free forever, no card required, nothing held back behind a tier.',
      'Most working Shopify freelancers sit on Pro at $19/month (₹199 in India) for 20 clients, 40 projects, 5 team members and a branded portal per merchant. An agency running many stores and a stack of support retainers takes Ultra at $39/month (₹799 in India) for unlimited everything. There is no per-seat charge, so a second developer costs nothing extra.',
    ],
  },
  faqHeading: 'Shopify developer FAQs',
  faqs: [
    {
      q: 'What’s the best project management tool for Shopify developers?',
      a: 'Look for one that holds the merchant relationship, not just the tasks. Shopify work is dominated by small, frequent requests and recurring support, so a board that doesn’t know who asked, what was quoted, or whether it was billed will leave money on the table. Clienter keeps the store build, the request queue, the retainer and the invoices on one client record, and is free to start.',
    },
    {
      q: 'Can I bill a Shopify build in milestones?',
      a: 'Yes. Raise a deposit when the scope is signed and the balance when the store goes live, with quoted extras invoiced as they’re approved. Outstanding amounts sit beside the project, so you know what the store owes you without opening an accounting app.',
    },
    {
      q: 'How do I handle ongoing Shopify support?',
      a: 'Put the merchant on a recurring monthly invoice and log every change request against their store. At renewal you can see exactly how much work the plan absorbed, which is the difference between pricing support on a hunch and pricing it on evidence.',
    },
    {
      q: 'Does it work for Shopify Plus and migrations?',
      a: 'Yes — the board stages and launch checklist are yours to define, so a Plus build or a WooCommerce-to-Shopify migration gets the same treatment as a standard theme project, with migration steps like product import, URL redirects and a live test order as checklist items you reuse.',
    },
  ],
  related: [
    { href: '/for/ecommerce-development-agencies', label: 'For Ecommerce Development Agencies', desc: 'Store builds and migrations at agency scale.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded space where merchants track their own build.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Boards, stages, checklists and deadlines.' },
    { href: '/blog/website-launch-checklist', label: 'Website Launch Checklist', desc: 'The go-live steps worth running on every store.' },
  ],
  ctaTitle: 'Run every store build from one place',
  ctaSubtitle: 'Create a free account and bring your merchants, projects and retainers together today.',
}
