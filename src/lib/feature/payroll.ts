import { Wallet, FileText, Repeat, CalendarCheck, PieChart } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const PAYROLL: FeaturePageConfig = {
  slug: 'payroll',
  path: '/features/payroll',
  navLabel: 'Payroll',
  navDescription: 'Run monthly payroll and keep salary records in one place',
  icon: Wallet,
  metaTitle: 'Free Payroll Management for Small Teams — Clienter',
  metaDescription:
    'How payroll works in Clienter: set each person’s salary, run payroll every month, and keep payslips and payment records in one place — connected to attendance and expenses.',
  keywords: [
    'free payroll software for small business',
    'payroll management',
    'team payroll',
    'salary management',
    'monthly payroll',
    'payroll for agencies',
  ],
  eyebrow: 'Payroll',
  h1: 'Run payroll for your team every',
  h1Highlight: 'month',
  subheading:
    'Set each person’s salary, run payroll in one pass each month, and keep every payslip and payment record together — so what you pay your team feeds the same profit picture as everything else.',
  intro: {
    heading: 'What is payroll in Clienter?',
    body: [
      'Payroll is how you pay the people who work for you, month after month. You record each team member’s salary, run payroll for the month in one place, and keep the payment records and payroll documents together instead of reconstructing who got paid what from your bank statement. When the next month comes around, you’re not starting from a blank page — the salaries are already set and you run it again.',
      'Because payroll connects to Attendance and Expenses, the days your team actually worked and the money that leaves to pay them land in the same system as your invoices and project budgets. The single biggest cost in a service business is usually the team — so putting payroll next to your income is what turns “are we making money?” from a guess into a number you can read.',
    ],
  },
  stepsHeading: 'How to use payroll',
  steps: [
    { title: 'Set salaries', desc: 'Record each team member’s monthly salary once, so it’s ready every month without re-typing.' },
    { title: 'Run the month', desc: 'Run payroll for the month in one pass — every person’s pay calculated and recorded together.' },
    { title: 'Keep the documents', desc: 'Store payslips and payroll documents against each run, so every month has a paper trail you can find.' },
    { title: 'See it in the picture', desc: 'Payroll flows into expenses, so what you pay your team shows up in your profitability — not off to the side.' },
  ],
  helpsHeading: 'How payroll helps you',
  helps: [
    { icon: Repeat, title: 'Monthly, without the scramble', desc: 'Salaries are set once and ready each month — running payroll is a pass, not a rebuild from scratch.' },
    { icon: FileText, title: 'A record you can find', desc: 'Payslips and payment records live with each run, so last March’s payroll is one click, not an archaeology dig.' },
    { icon: PieChart, title: 'Your biggest cost, counted', desc: 'Payroll feeds expenses, so the team — usually the largest spend — is in your profit number, not missing from it.' },
    { icon: CalendarCheck, title: 'Tied to the days worked', desc: 'With attendance alongside, what each person was present for sits next to what each person is paid.' },
  ],
  whereHeading: 'Where payroll fits',
  where: [
    { title: 'Agencies with salaried teams', desc: 'A team on monthly pay where payroll runs the same way every month and needs to be on record.' },
    { title: 'Growing freelancers hiring help', desc: 'First few people on the books, and a bank transfer plus a note isn’t a system anymore.' },
    { title: 'Owners watching profit', desc: 'Businesses that want the team’s cost inside the same picture as income, not kept in a separate file.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Per-person monthly salaries',
    'Run payroll each month in one pass',
    'Payslips and payroll documents stored',
    'Payment records per run',
    'Connected to Attendance and Expenses',
    'Free on every plan',
  ],
  faqHeading: 'Payroll FAQs',
  faqs: [
    { q: 'How often can I run payroll?', a: 'Payroll is built around a monthly run. You set each person’s salary once, then run payroll each month in one pass — the salaries carry over, so you’re never re-entering everyone’s pay from scratch.' },
    { q: 'Does payroll connect to the rest of Clienter?', a: 'Yes. Payroll links to Attendance, so the days your team worked sit beside what they’re paid, and it feeds Expenses, so the team’s cost shows up in your profitability picture alongside your invoices and project budgets.' },
    { q: 'Is payroll really free?', a: 'Yes — setting salaries, running monthly payroll, and storing payroll documents are free on every plan. Only usage limits scale by plan as your team grows; the features themselves are never locked.' },
  ],
  ctaTitle: 'Run payroll where your money already lives',
  ctaSubtitle: 'Start free and run your first monthly payroll in minutes. No credit card required.',
}
