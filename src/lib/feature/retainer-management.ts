import { Repeat, CalendarClock, TrendingUp, Clock, Link2 } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const RETAINER_MANAGEMENT: FeaturePageConfig = {
  slug: 'retainer-management',
  path: '/features/retainer-management',
  navLabel: 'Retainer Management',
  navDescription: 'Recurring retainers that auto-generate the invoice each cycle',
  icon: Repeat,
  metaTitle: 'Retainer Billing & Auto-Invoicing',
  metaDescription:
    'How retainer management works in Clienter: set up a recurring retainer and the invoice is generated automatically each cycle, linked to the client and your dashboard.',
  keywords: [
    'retainer management',
    'recurring billing software',
    'auto-invoicing',
    'retainer invoicing',
    'recurring invoices for agencies',
    'monthly retainer billing',
  ],
  eyebrow: 'Retainer Management',
  h1: 'Let monthly retainers bill themselves on',
  h1Highlight: 'autopilot',
  subheading:
    'Set up a recurring retainer for an ongoing client once, and Clienter raises the invoice every cycle on its own — so the billing happens whether or not you remember it’s the first of the month.',
  intro: {
    heading: 'What is retainer management in Clienter?',
    body: [
      'Retainer management is how you bill the clients you work with every month without re-doing the paperwork every month. You set up a retainer once — the client, the amount, and the billing cycle — and Clienter auto-generates the invoice each period on schedule. The recurring work stops depending on whether you remembered to raise it.',
      'Each retainer is linked to the client it belongs to and feeds the revenue dashboard, so your recurring income shows up next to one-off invoices in the same picture. You can see your predictable monthly base at a glance, and the client’s retainer sits alongside their projects and past invoices — the whole relationship in one place, billing itself in the background.',
    ],
  },
  stepsHeading: 'How to use retainer management',
  steps: [
    { title: 'Set up the retainer', desc: 'Create a retainer for an ongoing client with the amount and the billing cycle you’ve agreed.' },
    { title: 'Pick the cycle', desc: 'Choose when each invoice goes out — monthly or on your own rhythm — and let the schedule run.' },
    { title: 'Invoices raise themselves', desc: 'Clienter auto-generates the invoice every cycle, so you never have to remember to raise it.' },
    { title: 'Watch the revenue build', desc: 'Each retainer feeds the dashboard, so your recurring income is always visible alongside the rest.' },
  ],
  helpsHeading: 'How retainer management helps you',
  helps: [
    { icon: Clock, title: 'Never forget to bill', desc: 'The invoice raises itself each cycle, so a busy month never quietly costs you a retainer payment.' },
    { icon: CalendarClock, title: 'Set it once', desc: 'Configure the retainer a single time and the monthly billing runs on its own from then on.' },
    { icon: TrendingUp, title: 'See predictable income', desc: 'Recurring revenue feeds the dashboard, so you know your stable monthly base at a glance.' },
    { icon: Link2, title: 'Tied to the client', desc: 'Each retainer lives with its client, so the whole relationship and its billing stay in one place.' },
  ],
  whereHeading: 'Where retainer management fits',
  where: [
    { title: 'Agencies on monthly retainers', desc: 'Billing the same clients every month and tired of manually raising each invoice on the first.' },
    { title: 'Freelancers with ongoing clients', desc: 'Keeping a few steady relationships that pay a fixed amount each cycle for continuing work.' },
    { title: 'Maintenance & support plans', desc: 'Recurring care packages where the billing should just happen without a monthly reminder.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Recurring retainers per client',
    'Automatic invoice generation each cycle',
    'Flexible billing cycles',
    'Retainers linked to the client',
    'Recurring revenue on the dashboard',
    'Alongside one-off invoices & projects',
  ],
  faqHeading: 'Retainer management FAQs',
  faqs: [
    { q: 'Do retainer invoices go out automatically?', a: 'Yes. Once you set up a retainer with the amount and cycle, Clienter auto-generates the invoice every period on schedule — so monthly billing happens on its own instead of relying on you to remember to raise it.' },
    { q: 'Are retainers linked to the client and my revenue?', a: 'Yes. Each retainer is tied to the client it belongs to and feeds the revenue dashboard, so you see recurring income alongside one-off invoices and the client’s full history in one place.' },
    { q: 'Is retainer management free?', a: 'Yes — setting up recurring retainers and auto-invoicing is free on every plan, including Free. Limits only ever apply to volume as you grow, never to the features themselves.' },
  ],
  ctaTitle: 'Put your monthly billing on autopilot',
  ctaSubtitle: 'Start free and set up your first recurring retainer in minutes. No credit card required.',
}
