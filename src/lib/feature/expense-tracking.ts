import { Wallet, PieChart, Target, Receipt } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const EXPENSE_TRACKING: FeaturePageConfig = {
  slug: 'expense-tracking',
  path: '/features/expense-tracking',
  navLabel: 'Expense Tracking',
  navDescription: 'Log costs, categorise them & see which work is profitable',
  icon: Wallet,
  metaTitle: 'Free Expense Tracker for Businesses & Freelancers',
  metaDescription:
    'Track business expenses in Clienter: log costs, sort them into categories, tie them to projects, and watch profitability — revenue minus expenses — update live.',
  keywords: [
    'free expense tracker',
    'expense tracking software',
    'business expense management',
    'track business expenses',
    'profitability tracking',
    'expense tracker for freelancers',
  ],
  eyebrow: 'Expense Tracking',
  h1: 'Know exactly what each project leaves in your',
  h1Highlight: 'pocket',
  subheading:
    'Log every business cost, sort it into a category, and tie it to the project it belongs to — so profitability stops being a guess and becomes a number you can see.',
  intro: {
    heading: 'What is expense tracking in Clienter?',
    body: [
      'Expense tracking is where you record what the business spends — software, subcontractors, travel, ad spend, equipment — and file each cost under a category. It takes a minute to log an expense, and from then on it counts against your revenue so you can see real profit rather than just the money that came in.',
      'Because an expense can be tied to a specific project, Clienter can tell you which work actually made money once costs are taken out — the ₹40,000 job that cost ₹25,000 to deliver was never the win it looked like. Every expense you log also feeds the business dashboard, so your profitability number stays current without you touching a spreadsheet.',
    ],
  },
  stepsHeading: 'How to use expense tracking',
  steps: [
    { title: 'Log an expense', desc: 'Record a cost with its amount, date, and a short note in seconds — from your desk or your phone.' },
    { title: 'Give it a category', desc: 'Sort each expense into a category like software, travel, or subcontractors so spending stays legible.' },
    { title: 'Tie it to a project', desc: 'Link the cost to the project it belongs to, so you can see what that job really cost to deliver.' },
    { title: 'Read your profit', desc: 'Watch revenue minus expenses update on the dashboard — no month-end maths, no surprises.' },
  ],
  helpsHeading: 'How expense tracking helps you',
  helps: [
    { icon: Target, title: 'See true profit', desc: 'Profitability is revenue minus costs — tracking expenses turns a vanity number into the real one.' },
    { icon: PieChart, title: 'Spot where money goes', desc: 'Categories show which costs are quietly eating your margin before they become a habit.' },
    { icon: Receipt, title: 'Price the next job right', desc: 'Knowing what similar work actually cost lets you quote the next project with confidence.' },
    { icon: Wallet, title: 'Ready at tax time', desc: 'Every business cost is already logged and categorised, so the year-end scramble disappears.' },
  ],
  whereHeading: 'Where expense tracking fits',
  where: [
    { title: 'Freelancers watching margins', desc: 'Earning well but never quite sure where the money went by month-end.' },
    { title: 'Project-based businesses', desc: 'Jobs with real delivery costs where some clients are far more profitable than others.' },
    { title: 'Growing agencies', desc: 'Rising software and subcontractor bills that need to be tracked against revenue.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Fast expense logging from any device',
    'Custom spending categories',
    'Expenses tied to specific projects',
    'Profitability — revenue minus expenses',
    'Live feed into the business dashboard',
    'Free on every plan',
  ],
  faqHeading: 'Expense tracking FAQs',
  faqs: [
    { q: 'Can I link an expense to a project?', a: 'Yes. Tying a cost to its project lets Clienter show what that work actually cost to deliver, so you can see which projects are genuinely profitable once expenses are taken out.' },
    { q: 'Does tracking expenses update my profit automatically?', a: 'Yes. Every expense you log counts against your revenue and feeds the business dashboard, so your profitability figure stays current without any manual calculation or separate spreadsheet.' },
    { q: 'Is the expense tracker free?', a: 'Yes — expense tracking is free on every plan, including Free. Only the volume you log scales with your plan; the feature itself is never locked behind a paywall.' },
  ],
  ctaTitle: 'Turn guesswork into a profit number',
  ctaSubtitle: 'Start free and log your first expense in under a minute. No credit card required.',
}
