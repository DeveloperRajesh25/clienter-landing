import { ReceiptText, Wallet, PieChart, Users, FolderKanban, LayoutDashboard } from 'lucide-react'
import type { AlternativePageConfig } from './_type'

export const QUICKBOOKS_ALTERNATIVE: AlternativePageConfig = {
  slug: 'quickbooks-alternative-india',
  path: '/alternatives/quickbooks-alternative-india',
  competitor: 'QuickBooks',
  tagline: 'An India-ready alternative for client invoicing after QuickBooks.',
  metaTitle: 'QuickBooks Alternative in India for Freelancers 2026',
  metaDescription:
    'QuickBooks stopped selling to new customers in India in 2023. Clienter is a rupee-priced alternative for clients, GST invoicing, and payments.',
  keywords: [
    'quickbooks alternative india',
    'quickbooks alternative for freelancers',
    'quickbooks india alternative',
    'clienter vs quickbooks',
    'gst invoicing software india',
  ],
  ogTitle: 'A QuickBooks alternative built for India',
  ogDescription:
    'QuickBooks left the Indian market for new users in 2023. Clienter is a rupee-priced alternative for client management and GST invoicing.',
  breadcrumbLabel: 'QuickBooks Alternative',
  eyebrow: 'QuickBooks alternative',
  h1: 'A QuickBooks alternative made for',
  h1Highlight: 'India',
  subheading:
    'Intuit stopped selling QuickBooks to new customers in India in 2023, so Indian freelancers need somewhere else to invoice and track payments. Clienter covers the client-management and GST-invoicing side in rupees — honestly, it’s not full accounting, and this page explains exactly what it does and doesn’t replace.',
  intro: {
    heading: 'Why Indian businesses need a QuickBooks alternative',
    body: [
      'QuickBooks is one of the best-known names in accounting software, and for good reason — globally it’s a capable, mature tool for bookkeeping, ledgers, and tax.',
      'For Indian users, though, there’s a specific reason this search exists. In 2023, Intuit stopped selling QuickBooks to new customers in India and gave existing subscribers a window to transition off (it’s worth verifying the current status on Intuit’s own site). If you’re in India and newly shopping around, QuickBooks effectively isn’t on the table — you need an alternative.',
      'What that alternative should be depends on what you actually did in QuickBooks. If you need full double-entry accounting and tax filing, that’s a job for dedicated accounting software or your CA. But if what you really used it for was invoicing clients, tracking who owes you, and watching your money — that’s client management plus GST invoicing, and that’s where Clienter fits.',
    ],
  },
  whySwitch: {
    heading: 'Why Indian users are looking elsewhere',
    sub: 'A capable global product with a very India-specific problem.',
    items: [
      { title: 'Closed to new Indian customers', desc: 'Since 2023, Intuit has not sold QuickBooks to new users in India (verify the current status), so it isn’t a realistic pick for a fresh signup.' },
      { title: 'Built for other markets', desc: 'It’s a global accounting product first; Indian GST workflows and rupee-first billing were never its home turf.' },
      { title: 'Overkill for invoice-led work', desc: 'If you mostly raise invoices and track payments, a full accounting suite is far more tool than the job needs.' },
      { title: 'Separate from your client work', desc: 'Accounting sits in its own silo, away from your projects, proposals, and the day-to-day client relationship.' },
    ],
  },
  clienterFit: {
    heading: 'What Clienter covers (and covers well)',
    sub: 'The client-and-invoicing side of what you used QuickBooks for.',
    items: [
      { icon: ReceiptText, title: 'GST invoicing & quotations', desc: 'GST-ready invoices and quotations with your GSTIN and CGST/SGST/IGST, raised in rupees.' },
      { icon: Wallet, title: 'Payments & expenses', desc: 'Track dues, log expenses, and see money in and out without living in a spreadsheet.' },
      { icon: PieChart, title: 'Live profit dashboard', desc: 'Watch net profit across clients and projects update as you work, not at month-end.' },
      { icon: Users, title: 'Clients & CRM pipeline', desc: 'One profile per client plus a simple visual pipeline for new leads.' },
      { icon: FolderKanban, title: 'Projects with budgets', desc: 'Boards, tasks, and per-project budgets so delivery and money stay in the same place.' },
      { icon: LayoutDashboard, title: 'White-label client portal', desc: 'Clients log in to view work and download their invoices (Pro and Ultra).' },
    ],
  },
  otherOptions: {
    heading: 'Honest accounting options, alongside Clienter',
    sub: 'Clienter handles the client and invoicing side — for full books, these are the fair picks.',
    items: [
      { name: 'Zoho Books', desc: 'A strong, India-first GST accounting product with proper double-entry books and tax filing. If you need full accounting, it’s a natural choice — and it pairs neatly with Clienter for the client and invoicing side.' },
      { name: 'TallyPrime', desc: 'Long-established Indian accounting and GST software, desktop-first and powerful for books — but it isn’t built for client management, proposals, or a portal.' },
      { name: 'Your CA plus clean records', desc: 'Many small businesses simply hand bookkeeping to a chartered accountant. Clienter keeps your invoicing and payment records tidy so there’s less to reconcile.' },
      { name: 'Refrens and similar', desc: 'Popular Indian invoicing tools that cover billing well, but are lighter on project delivery and a white-label client portal.' },
    ],
  },
  compare: {
    heading: 'QuickBooks vs Clienter, in short',
    sub: 'Different scope — here’s the honest split.',
    old: [
      'Not sold to new customers in India since 2023',
      'Built as global accounting, not India-first',
      'Heavier than needed if you mainly invoice',
      'Sits apart from clients, projects & proposals',
      'Full books, but no CRM or client portal',
    ],
    calm: [
      'Available in India today, from a free plan',
      'GST-ready invoicing built for Indian norms',
      'Right-sized for invoicing & payment tracking',
      'Invoicing lives beside clients & projects',
      'CRM pipeline and client portal built in',
    ],
  },
  pricing: {
    heading: 'Pricing, and one honest caveat',
    body: [
      'QuickBooks was a paid subscription — and for new customers in India, it isn’t available to buy at all. That alone is why most people land on this page. Clienter, by contrast, is available today and starts free.',
      'The free plan is free forever: 5 clients, 10 projects, the full lead pipeline, GST invoicing, and meetings. Pro is launch-priced at ₹199/month (down from ₹499) with the client portal and higher limits, and Ultra is ₹799/month (down from ₹1,999) for unlimited use. One honest caveat: if you also need full accounting and tax filing, budget for a dedicated tool like Zoho Books or your CA alongside it — Clienter handles the client-and-invoicing side, not your ledgers.',
    ],
  },
  faqHeading: 'QuickBooks alternative FAQs',
  faqs: [
    {
      q: 'Is QuickBooks still available in India?',
      a: 'Intuit stopped selling QuickBooks to new customers in India in 2023 and gave existing subscribers a transition period. It’s worth checking the current status on Intuit’s own site, but in practice new Indian signups generally need an alternative.',
    },
    {
      q: 'Is Clienter a full accounting or bookkeeping tool?',
      a: 'No, and we’d rather be straight about that. Clienter handles GST invoicing, quotations, and payment and expense tracking with a live profit view — the client-money side of the business. For double-entry books, ledgers, and tax filing, use dedicated accounting software like Zoho Books or your CA. Plenty of freelancers run both happily.',
    },
    {
      q: 'What’s the best QuickBooks alternative in India?',
      a: 'It depends on the job. For full accounting, look at Zoho Books or TallyPrime. For the client management and GST invoicing that many freelancers actually used QuickBooks for, Clienter covers it in one place, starting free with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'Does Clienter handle GST invoices?',
      a: 'Yes. Clienter creates GST-ready invoices and quotations with your GSTIN and CGST/SGST/IGST breakdowns, priced in rupees, and tracks whether each one has been paid.',
    },
  ],
  related: [
    { href: '/compare/clienter-vs-quickbooks', label: 'Clienter vs QuickBooks', desc: 'The full side-by-side comparison.' },
    { href: '/tools/invoice-generator', label: 'Invoice generator', desc: 'Create a GST invoice free, right now.' },
    { href: '/for/indian-freelancers', label: 'For Indian freelancers', desc: 'How Clienter fits an India-based freelance business.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'An India-ready alternative, available today',
  ctaSubtitle: 'Start Clienter free for GST invoicing, payments, and client management in rupees.',
  asOf: 'July 2026',
}
