import {
  Users,
  Repeat,
  CalendarClock,
  FolderKanban,
  ReceiptText,
  BarChart3,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const MARKETING_AGENCIES: AudiencePageConfig = {
  slug: 'marketing-agencies',
  path: '/for/marketing-agencies',
  audience: 'Marketing agencies',
  metaTitle: 'Marketing Agency Management Software, CRM & Billing',
  metaDescription:
    'Free, all-in-one for marketing agencies — pipeline, client retainers, projects, team, recurring invoicing, and a client portal in one place. Start free.',
  keywords: [
    'marketing agency management software',
    'marketing agency CRM',
    'agency management software for marketing agencies',
    'manage marketing clients and retainers',
    'marketing agency project management',
    'client portal for marketing agency',
    'recurring billing for marketing agencies',
    'marketing retainer management software',
    'marketing agency client management',
    'software for creative marketing agencies',
  ],
  ogTitle: 'Marketing Agency Management Software — Clienter',
  ogDescription:
    'Run every client account, retainer, campaign, and recurring invoice from one free workspace built for marketing agencies. Start free.',
  breadcrumbLabel: 'For Marketing Agencies',
  eyebrow: 'For marketing agencies',
  h1: 'Marketing agency management software for retainers, campaigns, and',
  h1Highlight: 'reporting',
  subheading:
    'A dozen client accounts, monthly retainers to deliver, campaigns to coordinate across a team of specialists, and new business to keep closing. Clienter holds the whole agency — pipeline, retainers, projects, people, and recurring invoicing — in one place, so no client account lives in a separate tool.',
  intro: {
    heading: 'The system of record for every client account',
    body: [
      'Marketing agency management software has to carry the part of the work that isn’t the creative itself — the sales pipeline that brings in the next retainer, the monthly deliverables each client expects, the campaigns running in parallel across the team, and the recurring invoices that have to go out on the same day every month. Your specialists have their own tools for the actual work; what tends to go missing is the layer that keeps clients, deliverables, and billing tied to one account.',
      'For a 2–15 person agency, the friction shows up fast. One retainer is mid-campaign, another is overdue on a report, a prospect is waiting on a proposal, and the person who knows the status of all three is in a meeting. A proper marketing agency CRM keeps every account connected to its retainer scope, its projects, its team, and its invoices — so the answer to ‘where are we with this client this month?’ is one screen instead of a scramble through chat threads and spreadsheets.',
      'Clienter is that layer, built for Indian marketing agencies — GST invoices in rupees, recurring retainer billing on a schedule, UPI and bank-transfer tracking, role-based access for the team, and a live profit view per client so you can see which retainers actually pay. It runs the agency around the work, rather than adding another board for the team to keep updated.',
    ],
  },
  pains: {
    heading: 'Where many retainers and a small team collide',
    sub: 'The friction that grows with every client account you take on.',
    items: [
      {
        title: 'No single view across every account',
        desc: 'One retainer is ahead, one is behind on deliverables, one hasn’t had a report sent, one is up for renewal. With nothing showing all of them side by side, a slipping account surfaces only when the client sends a frustrated email.',
      },
      {
        title: 'Retainer scope quietly creeps',
        desc: 'A client keeps asking for ‘one more thing’ and the team keeps saying yes. Without the agreed scope written down against the account, the retainer turns into unpaid work nobody tracked until margins vanish.',
      },
      {
        title: 'Recurring invoices get raised by memory',
        desc: 'Every retainer bills on its own date. Chasing them by hand means one month an invoice goes out late, another month it’s forgotten, and cash flow wobbles for no good reason.',
      },
      {
        title: 'Reporting eats the team’s billable time',
        desc: 'Each client wants to see progress, but pulling a monthly update together from four tools takes an afternoon per account — time the specialists could have spent on the campaigns themselves.',
      },
      {
        title: 'New business stalls while you deliver',
        desc: 'The team goes heads-down on a big campaign push and the pipeline stops moving. A retainer ends, nothing is lined up to replace it, and the agency rides a feast-or-famine cycle.',
      },
    ],
  },
  workflow: {
    heading: 'A client account, from pitch to monthly report',
    sub: 'How a marketing engagement flows through Clienter, month after month.',
    steps: [
      {
        title: '1. Work the pipeline between retainers',
        desc: 'New leads and referrals land in a CRM pipeline and move through discovery, pitch, proposal, and won — so there’s always a next retainer forming while the current ones run.',
      },
      {
        title: '2. Pin the scope with a proposal',
        desc: 'Turn a won deal into a proposal that spells out the retainer scope, deliverables, and monthly fee, then collect an e-signature — so the engagement starts from an agreement the whole team can see.',
      },
      {
        title: '3. Set up the account and the campaign work',
        desc: 'Create the client account with its projects, recurring deliverables, and campaign deadlines, then assign specialists with role-based access so each person sees their work and leads see load across accounts.',
      },
      {
        title: '4. Bill the retainer on schedule',
        desc: 'Set the monthly retainer as a recurring GST invoice so it goes out on the same date every cycle, with one-off project fees added when extra work lands — revenue tied to the agreement, not chased.',
      },
      {
        title: '5. Share a portal, watch the margin',
        desc: 'Each client follows campaigns and deliverables in a branded portal instead of asking for updates, while your dashboard shows paid, outstanding, and real profit on every account.',
      },
    ],
  },
  features: {
    heading: 'The operations stack for a marketing agency',
    sub: 'The features that keep accounts, campaigns, and billing connected across the team.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'Every client linked to their retainer scope, projects, team, proposals, and invoices in one profile.' },
      { icon: Repeat, title: 'Retainer billing', desc: 'Recurring GST invoices that go out on each client’s schedule, with one-off project fees added on top.' },
      { icon: CalendarClock, title: 'Campaign timelines', desc: 'Deadlines and deliverables per account so every campaign and report lands when the client expects it.' },
      { icon: FolderKanban, title: 'Projects & team', desc: 'Boards with role-based assignments so you can see who’s on which account across the whole agency.' },
      { icon: ReceiptText, title: 'Invoicing & payments', desc: 'GST invoices with UPI and bank-transfer tracking, and outstanding balances kept next to each account.' },
      { icon: BarChart3, title: 'Profit dashboard', desc: 'Live paid, outstanding, and net profit per client — see which retainers actually earn their keep.' },
    ],
  },
  compare: {
    heading: 'A tool for every task vs one agency platform',
    sub: 'What changes when accounts, campaigns, and billing share one system.',
    old: [
      'Clients, campaigns, and billing in separate tools',
      'Retainer scope kept loosely in chat threads',
      'Recurring invoices raised from memory each month',
      'Monthly reports pulled together by hand',
      'The pipeline drying up during busy campaign months',
    ],
    calm: [
      'Accounts, projects, team, and invoices connected',
      'Agreed scope written against every account',
      'Recurring invoices that go out on schedule',
      'Clients self-serve progress in their own portal',
      'A CRM pipeline that keeps filling while you deliver',
    ],
  },
  pricing: {
    heading: 'Agency software priced without per-seat pain',
    body: [
      'Start free while you bring your accounts across — the Free plan covers up to 3 clients and 5 projects with the full CRM pipeline, proposals, invoicing, and meetings, free forever and no card required. Every feature is included on every plan; only the usage limits scale.',
      'For a working agency, Pro at $19/month (₹199 in India) covers up to 20 clients, 40 projects, and 5 team members with the branded client portal for every account, while Ultra at $39/month (₹799 in India) lifts every limit — unlimited clients, projects, and team members — for agencies running a full book of retainers. There’s no per-seat enterprise pricing and no annual lock-in, so adding a specialist or taking on another retainer never means a renegotiated contract.',
    ],
  },
  faqHeading: 'Marketing agency FAQs',
  faqs: [
    {
      q: 'What is marketing agency management software?',
      a: 'Marketing agency management software is the operations layer around your creative work — one system that keeps your sales pipeline, client accounts, retainers, campaign projects, team, and recurring billing connected instead of scattered across tools. Clienter is exactly this: a free workspace for managing marketing clients and retainers, from the first pitch to the monthly invoice.',
    },
    {
      q: 'Can Clienter handle recurring retainer billing?',
      a: 'Yes. Set a client’s monthly retainer as a recurring GST invoice and it goes out on the same date every cycle, with one-off project fees added when extra work lands. Outstanding balances sit next to each account, and payments track against UPI or bank transfer, so revenue follows the agreement instead of being chased by memory.',
    },
    {
      q: 'How is this different from a digital marketing agency tool?',
      a: 'This is the broad page for full-service marketing agencies running retainers and campaigns across many clients. If your agency is channel-specific — paid media, performance, or SEO — the digital marketing agencies and SEO agencies pages speak to those workflows directly. The underlying platform is the same free Clienter workspace either way.',
    },
    {
      q: 'Can clients see their campaigns without extra logins to your tools?',
      a: 'Yes. Each client gets a branded portal where they can follow campaign progress, review deliverables, and see what’s billed — no access to your internal boards and no afternoon spent building a report by hand. It keeps clients informed while your specialists stay on the actual work.',
    },
  ],
  related: [
    { href: '/features/retainer-management', label: 'Retainer Management', desc: 'Recurring scope and billing for monthly client retainers.' },
    { href: '/features/crm-lead-pipeline', label: 'CRM & Lead Pipeline', desc: 'Keep new business flowing while the team delivers.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded portal that gives clients progress without the back-and-forth.' },
    { href: '/for/digital-marketing-agencies', label: 'For Digital Marketing Agencies', desc: 'The same platform, tuned for channel and performance teams.' },
  ],
  ctaTitle: 'Run the agency, not the tool sprawl',
  ctaSubtitle: 'Create your free account and bring every client account, retainer, and invoice into one place today.',
}
