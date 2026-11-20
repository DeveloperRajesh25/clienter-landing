import { LayoutDashboard, TrendingUp, LineChart, Eye } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const DASHBOARD: FeaturePageConfig = {
  slug: 'dashboard',
  path: '/features/dashboard',
  navLabel: 'Business Dashboard',
  navDescription: 'Revenue, profitability, payments & a forecast in one view',
  icon: LayoutDashboard,
  metaTitle: 'Business Dashboard — Revenue, Profit & Forecasting',
  metaDescription:
    'The Clienter business dashboard shows revenue, profitability, and paid, pending and overdue payments — plus a forecast panel — pulled live from your real work.',
  keywords: [
    'free business dashboard',
    'revenue dashboard',
    'business analytics for freelancers',
    'profitability dashboard',
    'financial dashboard',
    'agency dashboard',
  ],
  eyebrow: 'Business Dashboard',
  h1: 'See how the business is doing at a',
  h1Highlight: 'glance',
  subheading:
    'Revenue, profitability, payment analytics, and a forward forecast on one screen — pulled live from your invoices, payments, and expenses, so you never open a spreadsheet to know where you stand.',
  intro: {
    heading: 'What is the business dashboard in Clienter?',
    body: [
      'The dashboard is the one screen that answers “how is the business actually doing?” It shows your revenue, your profitability — revenue minus expenses — and payment analytics that split what’s paid from what’s still pending or overdue. A forecast panel projects where the numbers are heading, so you can see a quiet month coming before it arrives.',
      'None of it is typed in by hand. The dashboard reads live from the invoices you raise, the payments you record, and the expenses you log, so the moment a client pays or a cost lands, the figures move. Instead of stitching a picture together from your inbox and a spreadsheet at month-end, you open one screen and the whole business is in front of you.',
    ],
  },
  stepsHeading: 'How to use the dashboard',
  steps: [
    { title: 'Work as normal', desc: 'Raise invoices, record payments, and log expenses — the dashboard builds itself from what you already do.' },
    { title: 'Read your revenue', desc: 'See money earned over your chosen period without adding up invoices one by one.' },
    { title: 'Check profit & payments', desc: 'View profitability alongside what’s paid, pending, and overdue — all on the same screen.' },
    { title: 'Look ahead', desc: 'Open the forecast panel to see where the numbers are trending and plan your next move.' },
  ],
  helpsHeading: 'How the dashboard helps you',
  helps: [
    { icon: Eye, title: 'The whole business, one screen', desc: 'Revenue, profit, and payments together — no tab-switching to piece the picture together.' },
    { icon: TrendingUp, title: 'Always current', desc: 'Figures move the moment an invoice is paid or an expense lands, so you’re never acting on stale numbers.' },
    { icon: LineChart, title: 'See the month coming', desc: 'The forecast panel flags a dip or a strong run early, while you still have time to act on it.' },
    { icon: LayoutDashboard, title: 'No spreadsheet, ever', desc: 'The maths is done for you — no formulas to maintain, no month-end reconciliation to dread.' },
  ],
  whereHeading: 'Where the dashboard fits',
  where: [
    { title: 'Owners flying blind', desc: 'Busy delivering work and never quite sure how the month is really shaping up.' },
    { title: 'Freelancers planning cash', desc: 'Needing to know what’s owed and what’s coming before committing to the next expense.' },
    { title: 'Agencies tracking health', desc: 'A team that needs one shared, honest view of revenue, profit, and outstanding dues.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Revenue tracking over any period',
    'Profitability — revenue minus expenses',
    'Paid, pending & overdue payment analytics',
    'A forward-looking forecast panel',
    'Live data from invoices, payments & expenses',
    'Free on every plan',
  ],
  faqHeading: 'Business dashboard FAQs',
  faqs: [
    { q: 'Where does the dashboard get its numbers?', a: 'It pulls live from your invoices, payments, and expenses. As you raise invoices, record payments, and log costs in Clienter, the dashboard updates on its own — there’s nothing to enter twice.' },
    { q: 'Does it show profit, not just revenue?', a: 'Yes. Alongside revenue it shows profitability — revenue minus the expenses you’ve logged — so you see what the business actually keeps, not only what it billed.' },
    { q: 'Is the dashboard free?', a: 'Yes. The business dashboard is free on every plan, including Free. Plans differ only on the volume of data you run through Clienter, never on access to the dashboard itself.' },
  ],
  ctaTitle: 'Know where your business stands',
  ctaSubtitle: 'Start free and watch your dashboard fill in as you work. No credit card required.',
}
