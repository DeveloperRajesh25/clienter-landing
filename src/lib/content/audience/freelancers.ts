import {
  Users,
  KanbanSquare,
  FileText,
  Wallet,
  CalendarClock,
  BadgeCheck,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const FREELANCERS: AudiencePageConfig = {
  slug: 'freelancers',
  path: '/for/freelancers',
  audience: 'Freelancers',
  metaTitle: 'Freelance Business Management Software (Free to Start)',
  metaDescription:
    'Run your whole freelance business in one place — clients, projects, invoices, and payments. Freelance business management software built for India. Start free.',
  keywords: [
    'freelance business management software',
    'software for freelancers',
    'all-in-one freelancer software',
    'how to manage clients as a freelancer',
    'freelance software India',
  ],
  ogTitle: 'Freelance Business Management Software — Clienter',
  ogDescription:
    'Clients, projects, invoices, and payments in one calm workspace built for freelancers. Start free.',
  breadcrumbLabel: 'For Freelancers',
  eyebrow: 'For freelancers',
  h1: 'Freelance business management software that runs the whole',
  h1Highlight: 'business',
  subheading:
    'Freelancing is 20% the craft you were hired for and 80% admin — chasing briefs, raising invoices, following up on payments. Clienter puts all of it in one place so the admin stops eating your evenings.',
  intro: {
    heading: 'The software freelancers actually need',
    body: [
      'When you go freelance, nobody warns you that you have just taken a second unpaid job: running the business around the work. Suddenly you are the salesperson chasing leads, the account manager keeping five clients happy, the accountant raising invoices and reconciling payments, and the operations person trying to remember what you promised whom. Most freelancers stitch this together with a notes app, a WhatsApp folder, an Excel invoice, and their own memory — and things slip.',
      'Freelance business management software replaces that scattered stack with one system. Instead of a spreadsheet for clients, a template for invoices, and your inbox for everything else, you get a single workspace where every client, project, invoice, and payment lives together and stays connected. Clienter is built for exactly this — the operating system for a one-person business that still needs to look and run like a real company.',
      'It is built for the Indian freelance reality too: invoices in rupees with GST where you need it, payment tracking that matches how UPI and bank transfers actually arrive, and pricing that makes sense on a freelancer’s income rather than an enterprise budget.',
    ],
  },
  pains: {
    heading: 'The admin that eats your week',
    sub: 'The stuff that has nothing to do with the work you were actually hired for.',
    items: [
      {
        title: 'Payments you forget to chase',
        desc: 'An invoice goes out, the client goes quiet, and three weeks later you realise you were never paid — because nothing was tracking it.',
      },
      {
        title: 'Client details scattered everywhere',
        desc: 'Their brief is in email, their number is in WhatsApp, the file is in Drive, and the last thing you agreed is in a chat you can’t find.',
      },
      {
        title: 'Invoices rebuilt from scratch',
        desc: 'Every month you copy last month’s Word invoice, change the numbers, fix the formatting, and hope you didn’t miss a GST detail.',
      },
      {
        title: 'No idea what you actually earned',
        desc: 'Money comes in, expenses go out, and at year-end you’re guessing your real profit from a pile of screenshots.',
      },
      {
        title: 'Looking small next to agencies',
        desc: 'A pitch competes with studios that have portals, contracts, and process — and a lone freelancer on WhatsApp can feel amateur by comparison.',
      },
    ],
  },
  workflow: {
    heading: 'A project, start to finish, in one place',
    sub: 'Here’s how a typical freelance job flows through Clienter.',
    steps: [
      {
        title: '1. Capture the lead',
        desc: 'A new enquiry drops into your pipeline as a lead. You track it through “talking”, “quoted”, and “won” so no “maybe next month” quietly disappears.',
      },
      {
        title: '2. Turn it into a client & project',
        desc: 'When they say yes, the lead becomes a client with one profile, and you spin up a project with a Kanban board, deadline, and budget.',
      },
      {
        title: '3. Quote, then invoice',
        desc: 'Send a quotation before the work and a GST-ready invoice after — both reuse the client’s details, so there’s no re-typing.',
      },
      {
        title: '4. Track the money',
        desc: 'Log the payment when it lands and any expenses along the way. Your dashboard shows what’s paid, what’s due, and your real profit.',
      },
      {
        title: '5. Collect the review',
        desc: 'Finish the project and Clienter gathers a verified review you can show the next prospect — turning good work into your next lead.',
      },
    ],
  },
  features: {
    heading: 'Every hat you wear, in one tool',
    sub: 'The features that replace your spreadsheet-and-WhatsApp stack.',
    items: [
      { icon: Users, title: 'Client profiles', desc: 'One tidy profile per client with contacts, files, notes, and full history.' },
      { icon: KanbanSquare, title: 'Lead pipeline & projects', desc: 'A visual pipeline for leads and Kanban boards for the work you win.' },
      { icon: FileText, title: 'GST-ready invoices', desc: 'Branded invoices and quotations with one-click PDF export.' },
      { icon: Wallet, title: 'Payments & profit', desc: 'Track dues, expenses, and net profit without a spreadsheet.' },
      { icon: CalendarClock, title: 'Meetings & reminders', desc: 'Google Calendar sync, auto Meet links, and follow-up reminders.' },
      { icon: BadgeCheck, title: 'Verified reviews', desc: 'Turn finished projects into credible social proof automatically.' },
    ],
  },
  compare: {
    heading: 'The freelancer stack vs one workspace',
    sub: 'What changes the day you stop juggling apps.',
    old: [
      'Clients tracked in your head and a notes app',
      'Invoices copied from a Word template each month',
      'Payments chased whenever you happen to remember',
      'Profit worked out (badly) at tax time',
      'A pitch that looks like one person on WhatsApp',
    ],
    calm: [
      'Every client in one profile with full history',
      'GST-ready invoices generated in under a minute',
      'Dues tracked automatically with reminders',
      'Live profit, paid, and outstanding on a dashboard',
      'A branded portal and reviews that look established',
    ],
  },
  pricing: {
    heading: 'Priced for one person, not a sales team',
    body: [
      'Clienter’s Free plan is genuinely usable for a solo freelancer just starting out — up to 5 clients and 10 projects, the full leads and CRM pipeline, invoicing, and meetings, free forever with no credit card. It’s enough to run your first clients properly instead of from a spreadsheet.',
      'When you outgrow it, Pro is a launch-priced ₹199/month (up to 30 clients, 60 projects, and 5 team members) and unlocks the white-label client portal. Ultra at ₹799/month removes the limits entirely for when you’re busy enough to think about scaling into a small studio. No per-seat enterprise pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Freelancer FAQs',
  faqs: [
    {
      q: 'What is the best software for freelancers in India?',
      a: 'The best software for an Indian freelancer handles the whole business, not just one slice — clients, projects, GST invoices, and payments in rupees, at a price that fits a freelance income. Clienter combines all of that in one workspace, starting free and with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'How do I manage clients as a freelancer?',
      a: 'Keep everything about each client in one place instead of scattered across chats and files: their contact details, projects, invoices, payments, and the history of what you agreed. Clienter gives every client a single profile so you can answer “where are we at?” in one click, and a pipeline so new leads never slip through.',
    },
    {
      q: 'Do I need business software if I only have a few clients?',
      a: 'Even with two or three clients, a simple system stops payments from being forgotten and keeps briefs and files in one place. Clienter’s Free plan is designed for exactly this stage — you get organised early, then upgrade only when you have enough clients to need higher limits.',
    },
    {
      q: 'Can I send GST invoices as a freelancer?',
      a: 'Yes. Clienter lets you add your GSTIN and the client’s, apply CGST/SGST or IGST, and export a clean, branded PDF invoice. If you’re not registered for GST, you can raise a simple non-GST invoice instead — the tool works either way.',
    },
  ],
  related: [
    { href: '/for/indian-freelancers', label: 'For Indian Freelancers', desc: 'GST, UPI, and the Indian freelance market in detail.' },
    { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'The lead-and-client CRM side, in depth.' },
    { href: '/tools/freelance-rate-calculator', label: 'Freelance Rate Calculator', desc: 'Work out what to actually charge per hour.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your freelance business without the chaos',
  ctaSubtitle: 'Create your free account and bring your clients, projects, and invoices into one place today.',
}
