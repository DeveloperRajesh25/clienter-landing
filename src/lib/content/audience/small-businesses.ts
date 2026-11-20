import {
  Users,
  CalendarClock,
  FileText,
  ReceiptText,
  Bell,
  LayoutDashboard,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const SMALL_BUSINESSES: AudiencePageConfig = {
  slug: 'small-businesses',
  path: '/for/small-businesses',
  audience: 'Small businesses',
  metaTitle: 'Small Business Management Software — Free All-in-One',
  metaDescription:
    'Free small business management software to run clients, quotes, invoicing, payments, team and bookings in one place. All features free, limits scale. Start free.',
  keywords: [
    'small business management software',
    'small business CRM',
    'free small business software',
    'client management for small business',
    'small business invoicing software',
    'all-in-one small business app',
    'quoting software for small business',
    'small business booking software',
    'business management software India',
  ],
  ogTitle: 'Small Business Management Software — Clienter',
  ogDescription:
    'Run your clients, quotes, invoices, payments, team and bookings from one free workspace built for small businesses. Every feature free, limits scale. Start free.',
  breadcrumbLabel: 'For Small Businesses',
  eyebrow: 'For small businesses',
  h1: 'Free small business management software for clients, quotes, and',
  h1Highlight: 'payments',
  subheading:
    'A studio, a clinic, a repair service, a tutoring centre — a few staff, a mix of recurring and one-off clients, quotes to send, invoices to chase, and bookings to keep straight. Clienter holds all of it in one workspace, so you’re not stitching together a spreadsheet, a notes app, and three group chats to run the business.',
  intro: {
    heading: 'One workspace for the whole business',
    body: [
      'Small business management software should do the plain, daily jobs well: keep every client and their history in one place, turn an enquiry into a quote, send the invoice when the work is done, and show you who owes what. Most small teams run this across a contacts list, a paper book, a quoting template someone saved once, and a WhatsApp thread — and things fall through the cracks exactly where those tools don’t connect.',
      'The cost shows up quietly. A quote is sent and never followed up. An invoice goes out late because the job was marked done in one place and billed from another. A booking is double-entered, a staff member misses it, and a client turns up to a closed door. None of these are disasters on their own, but across a month of real work they add up to lost revenue and a reputation you can’t afford to dent when word of mouth is how you grow.',
      'Clienter is built for exactly this — a small business CRM, quoting, invoicing, bookings, and a shared team view in one app, priced for India with GST invoices in rupees and UPI payment tracking. Every feature is free to use; only the usage limits scale as you grow. You get the full toolset on day one and pay more only when the volume of clients and work actually asks for it.',
    ],
  },
  pains: {
    heading: 'Where a small team loses time and money',
    sub: 'The gaps that open up when the business runs across disconnected tools.',
    items: [
      {
        title: 'Client details scattered everywhere',
        desc: 'Phone numbers in one place, past jobs in another, what they last paid in a third. When a regular calls back, nobody can see their history without digging through three apps.',
      },
      {
        title: 'Quotes sent and forgotten',
        desc: 'You send a quote, the client goes quiet, and there’s no reminder to follow up. The job quietly dies not because the price was wrong but because no one chased it.',
      },
      {
        title: 'Invoices go out late',
        desc: 'The work is finished, but billing happens whenever someone remembers. A late invoice means a later payment, and cash you’ve earned sits unbilled for weeks.',
      },
      {
        title: 'Payment follow-ups eat your week',
        desc: 'Chasing who still owes you means scrolling messages and guessing. Awkward reminders get skipped, and overdue amounts pile up because no one’s tracking them in one list.',
      },
      {
        title: 'Bookings and the team fall out of sync',
        desc: 'The calendar lives in one person’s head or a wall diary. A staff member books over an existing slot, and a client shows up to a clash nobody caught.',
      },
    ],
  },
  workflow: {
    heading: 'From first enquiry to paid, in one flow',
    sub: 'How a job moves through Clienter when a client gets in touch.',
    steps: [
      {
        title: '1. Capture the client and the enquiry',
        desc: 'A new enquiry lands as a lead with the client’s details and what they need, so the first call and every one after it builds on the same record instead of a fresh scramble.',
      },
      {
        title: '2. Send a quote they can accept',
        desc: 'Turn the enquiry into a clear quote with your line items and price, send it, and track whether it’s been opened and accepted — with a nudge to follow up if it goes quiet.',
      },
      {
        title: '3. Book the work and assign the team',
        desc: 'Once it’s a yes, put the job on the shared calendar, pick the staff member, and everyone sees the same schedule — no double-booking, no clash at the door.',
      },
      {
        title: '4. Invoice the moment it’s done',
        desc: 'Raise a GST invoice straight from the finished job in rupees, send it, and record the UPI or bank payment against it, so billing happens with the work, not weeks later.',
      },
      {
        title: '5. See what’s owed and what’s next',
        desc: 'Your dashboard shows paid, outstanding, and upcoming bookings at a glance, so you know who to remind and what the week holds without opening five tabs.',
      },
    ],
  },
  features: {
    heading: 'The toolset to run a small business',
    sub: 'Everything a small team needs to manage clients and get paid, in one place.',
    items: [
      { icon: Users, title: 'Client records', desc: 'Every client, their history, jobs, and payments kept in one profile your whole team can see.' },
      { icon: FileText, title: 'Quotes & proposals', desc: 'Build a quote in minutes, send it, and track whether it’s been opened and accepted.' },
      { icon: ReceiptText, title: 'GST invoicing', desc: 'Raise rupee invoices from finished work and record UPI or bank payments against them.' },
      { icon: CalendarClock, title: 'Bookings & calendar', desc: 'A shared schedule for appointments and jobs so the team never double-books a slot.' },
      { icon: Bell, title: 'Payment reminders', desc: 'See every outstanding amount in one list and nudge clients without the awkward hunt.' },
      { icon: LayoutDashboard, title: 'Business dashboard', desc: 'Paid, outstanding, and upcoming work on one screen so you always know where you stand.' },
    ],
  },
  compare: {
    heading: 'A pile of apps vs one workspace',
    sub: 'What changes when clients, quotes, bookings, and billing share one system.',
    old: [
      'Client details spread across phone, notes, and chats',
      'Quotes sent with no follow-up and no record',
      'Invoices raised late, long after the job is done',
      'Overdue payments tracked by scrolling messages',
      'Bookings in one person’s head or a wall diary',
    ],
    calm: [
      'Every client and their full history in one profile',
      'Quotes tracked from sent to accepted, with nudges',
      'Invoices raised the moment the work is finished',
      'Outstanding amounts in one list, ready to remind',
      'A shared calendar the whole team books against',
    ],
  },
  pricing: {
    heading: 'Full features free, limits that grow with you',
    body: [
      'Start on the Free plan and run a real business on it — clients, quotes, GST invoicing, bookings, and the team view are all included, free forever and no card needed. You’re not trialling a stripped-down version; you get the working toolset and simply have room for your first handful of clients and projects.',
      'When the volume grows, Pro at $19/month (₹199 in India) raises the limits for a busy small team and gives every client a branded portal, while Ultra at $39/month (₹799 in India) removes the caps entirely — unlimited clients, jobs, and staff — for a business running at full tilt. Every feature stays available on every plan; you pay more only when the amount of work genuinely asks for it, never to unlock a button you needed all along.',
    ],
  },
  faqHeading: 'Small business FAQs',
  faqs: [
    {
      q: 'What is small business management software?',
      a: 'Small business management software is one app that handles the daily running of a small company — client records, quotes, invoicing, payments, bookings, and the team — instead of spreading them across separate tools. Clienter does exactly this in a single free workspace, so a small team can take an enquiry through to a paid invoice without switching apps.',
    },
    {
      q: 'Is Clienter really free for a small business?',
      a: 'Yes. Every feature is free to use, including the CRM, quotes, GST invoicing, bookings, and the shared team view, with no card required to start. Only the usage limits scale with paid plans, so you get the full toolset from day one and pay more only when your client and job volume grows past the free caps.',
    },
    {
      q: 'Can it handle quotes and invoicing for my business?',
      a: 'Yes. Build a quote with your line items, send it, and track whether the client accepts, then raise a GST invoice in rupees straight from the finished job and record the UPI or bank payment against it. Quoting, invoicing, and payment tracking live on the same client record, so nothing is billed late or missed.',
    },
    {
      q: 'Does it work for a small team with shared bookings?',
      a: 'Yes. The calendar is shared across your staff, so appointments and jobs sit in one schedule everyone can see and book against, with role-based access to keep things tidy. That stops the double-bookings and missed slots that happen when the diary lives in one person’s head.',
    },
  ],
  related: [
    { href: '/features/invoicing', label: 'Invoicing', desc: 'GST invoices in rupees with UPI and payment tracking.' },
    { href: '/features/crm-lead-pipeline', label: 'CRM & Lead Pipeline', desc: 'Capture enquiries and move them to won work.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded space where clients follow their jobs.' },
    { href: '/for/freelancers', label: 'For Freelancers', desc: 'The same workspace, tuned for solo operators.' },
  ],
  ctaTitle: 'Run the whole business from one place',
  ctaSubtitle: 'Create your free account and bring clients, quotes, bookings, and invoices together today.',
}
