import {
  Briefcase,
  FolderKanban,
  Repeat,
  Eye,
  CalendarClock,
  ReceiptText,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const SEO_AGENCIES: AudiencePageConfig = {
  slug: 'seo-agencies',
  path: '/for/seo-agencies',
  audience: 'SEO agencies',
  metaTitle: 'CRM for SEO Agencies: Manage Clients, Retainers & Work',
  metaDescription:
    'A CRM for SEO agencies to manage every client, retainer, and deliverable in one place — track projects, prove the monthly work, and bill on time. Start free.',
  keywords: [
    'CRM for SEO agencies',
    'SEO agency client management',
    'SEO retainer management',
    'SEO project tracking',
    'SEO agency management software',
  ],
  ogTitle: 'CRM for SEO Agencies — Clienter',
  ogDescription:
    'Manage clients, retainers and deliverables, and make the monthly work visible so SEO clients stay through the slow ramp. Start free.',
  breadcrumbLabel: 'For SEO Agencies',
  eyebrow: 'For SEO agencies',
  h1: 'A CRM for SEO agencies built for the',
  h1Highlight: 'long game',
  subheading:
    'SEO is a waiting game, and clients are impatient. Clienter manages the accounts, retainers and deliverables — and makes the monthly work visible — so clients stay long enough for the rankings to land.',
  intro: {
    heading: 'A CRM built for the long, patient work SEO actually is',
    body: [
      'A CRM for SEO agencies has a different job than a CRM for a business that closes and delivers in a week. Your results take three to six months to show up, your retainers have to survive that wait, and your clients need to see that work is happening long before the rankings move. Clienter is built for exactly that gap — the months between signing a client and the graph finally proving you were worth it.',
      'Clienter doesn’t run audits or track keyword positions — you keep your specialist SEO tools for the work itself. What it manages is the client relationship around it: the accounts, the monthly deliverables, the retainer billing, the review calls and the visible progress that keeps a client patient through month four when the rankings are still flat.',
      'Most SEO agencies lose clients not because the work is bad but because the client couldn’t see it. When deliverables live in a spreadsheet the client never opens and updates happen over scattered emails, patience runs out early. Clienter puts every account, project and deliverable in one workspace — with a white-label portal the client can actually log into — so the work is visible the whole way through. It’s built for Indian agencies too: GST-ready invoices, UPI and bank-transfer tracking, and pricing that fits a growing shop.',
    ],
  },
  pains: {
    heading: 'Why SEO retainers slip away',
    sub: 'The problems that come with selling results that take months to arrive.',
    items: [
      {
        title: 'Clients who churn before the rankings move',
        desc: 'SEO’s payoff is months away, but the client’s patience is measured in weeks. Lose them at month three and all the groundwork you laid never gets the credit.',
      },
      {
        title: 'Deliverables the client never sees',
        desc: 'You ship audits, content briefs, technical fixes and links every month — but if it lives in a sheet they never open, it may as well not exist. Invisible work feels like no work.',
      },
      {
        title: 'Retainers tracked in someone’s head',
        desc: 'Which client is on a six-month deal, which is month-to-month, whose renewal is next week? When it isn’t written down anywhere central, recurring revenue slips.',
      },
      {
        title: 'Reporting that’s all rankings, no work',
        desc: 'When a report shows only positions and they haven’t moved yet, the client panics. You need to show the deliverables and the plan, not just a flat graph.',
      },
      {
        title: 'Juggling every client’s backlog at once',
        desc: 'Ten clients, each with a running list of on-page fixes, content and technical tasks — and no single board that shows what’s due where, for whom, this week.',
      },
    ],
  },
  workflow: {
    heading: 'A retainer, month after month, in one place',
    sub: 'How an SEO client flows through Clienter — from signed to renewed.',
    steps: [
      {
        title: '1. Sign the client with clear scope',
        desc: 'A lead moves through your CRM pipeline to won, with an e-signable proposal that sets the retainer scope and timeline up front — so expectations are agreed before month one.',
      },
      {
        title: '2. Onboard and set the timeline',
        desc: 'The won lead becomes a client account. An intake form gathers site access, goals and current state, and you set an honest expectation of when results should start to show.',
      },
      {
        title: '3. Build the retainer as a project',
        desc: 'Create a retainer project with the month’s deliverables — audits, content, technical fixes, links — as cards on a Kanban board with owners and deadlines.',
      },
      {
        title: '4. Make the work visible',
        desc: 'Share progress through a white-label client portal and monthly review meetings with auto Google Meet links, so the client sees momentum long before the rankings do.',
      },
      {
        title: '5. Bill the retainer and keep it renewing',
        desc: 'Send the recurring GST invoice, track the payment, and see each retainer’s status on your dashboard so renewals are planned, not missed.',
      },
    ],
  },
  features: {
    heading: 'Everything around the SEO, in one tool',
    sub: 'The features that keep long retainers organised — and visible to the client.',
    items: [
      { icon: Briefcase, title: 'Client account profiles', desc: 'One profile per client with site access, scope, contacts, files and the full history of what you’ve done.' },
      { icon: FolderKanban, title: 'SEO project boards', desc: 'Every deliverable — audit, content, links, technical fixes — as a card with an owner, deadline and status.' },
      { icon: Repeat, title: 'Retainer projects', desc: 'Set up recurring retainers so monthly scope, billing and renewal dates are tracked, not remembered.' },
      { icon: Eye, title: 'White-label client portal', desc: 'A branded portal where clients see progress and deliverables — proof of work through the slow months.' },
      { icon: CalendarClock, title: 'Monthly review meetings', desc: 'Google Calendar sync and auto Meet links for the review calls that keep long retainers alive.' },
      { icon: ReceiptText, title: 'GST invoices & quotations', desc: 'Recurring, GST-ready invoices that reuse each client’s details and export to PDF in a click.' },
    ],
  },
  compare: {
    heading: 'Scattered tools vs one SEO workspace',
    sub: 'What changes when the client can finally see the work.',
    old: [
      'Deliverables buried in a sheet the client never opens',
      'Retainers and renewal dates tracked from memory',
      'Progress explained over scattered emails and calls',
      'Reports that show only rankings — and panic when they’re flat',
      'Every client’s task backlog living in a different place',
    ],
    calm: [
      'Deliverables visible to the client in a branded portal',
      'Retainer projects that track scope, billing and renewals',
      'Monthly review meetings booked with auto Meet links',
      'Progress shown as work done, not just positions',
      'One board per client with owners and deadlines',
    ],
  },
  pricing: {
    heading: 'Priced for a growing SEO shop',
    body: [
      'The Free plan lets you run your first clients properly — up to 5 clients and 10 projects with the full CRM pipeline, invoicing and meetings, free forever. It’s enough to get one long retainer off spreadsheets and onto a system the client can actually see.',
      'As you take on more retainers, Pro is a launch-priced ₹199/month (was ₹499; up to 30 clients, 60 projects and 5 team members) and unlocks the white-label client portal — the single biggest lever for keeping SEO clients patient. Ultra at ₹799/month (was ₹1,999) removes the limits for a full agency. No per-seat pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'SEO agency FAQs',
  faqs: [
    {
      q: 'What is the best CRM for SEO agencies?',
      a: 'The best CRM for SEO agencies is built around long retainers and slow-to-show results — it tracks deliverables and renewals, and makes the monthly work visible to clients who can’t yet see it in the rankings. Clienter does exactly this, with a white-label client portal, recurring GST invoicing and launch pricing from ₹199/month.',
    },
    {
      q: 'Does Clienter do SEO audits or track keyword rankings?',
      a: 'No — Clienter isn’t an SEO tool and doesn’t run audits or track positions. You keep your specialist tools for that. Clienter manages everything around the SEO work: the clients, retainer projects, deliverable tracking, review meetings, invoices and the client-facing portal that proves work is happening.',
    },
    {
      q: 'How does Clienter help with SEO retainer management?',
      a: 'You set each client up as a retainer project with recurring scope and billing, so the month’s deliverables, the invoice and the renewal date all live in one place. Because it’s visible, a retainer coming up for renewal is something you plan for — not something you discover when the client stops replying.',
    },
    {
      q: 'How do I keep SEO clients from churning before results show?',
      a: 'Make the work visible. Clienter’s white-label portal lets clients see the deliverables you ship every month, and monthly review meetings keep the relationship warm through the slow ramp — so patience lasts long enough for the rankings to catch up. It’s client management, not keyword tracking, but it’s usually what saves the retainer.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Kanban boards, deadlines and owners for every deliverable.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'The white-label portal that makes your work visible.' },
    { href: '/for/digital-marketing-agencies', label: 'For Digital Marketing Agencies', desc: 'The same workspace for full-service marketing retainers.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month with the portal.' },
  ],
  ctaTitle: 'Keep every SEO client through the slow months',
  ctaSubtitle: 'Create your free account and put every client, retainer and deliverable where the client can finally see it.',
}
