import {
  Users,
  FolderKanban,
  FileSignature,
  UserCog,
  ReceiptText,
  RefreshCw,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const SAAS_DEVELOPMENT_AGENCIES: AudiencePageConfig = {
  slug: 'saas-development-agencies',
  path: '/for/saas-development-agencies',
  audience: 'SaaS development agencies',
  metaTitle: 'SaaS Development Agency CRM & Project Software',
  metaDescription:
    'Run product builds, sprint retainers and long client engagements in one workspace — signed scopes, phase boards, team roles, milestone invoicing and client portals. Free to start.',
  keywords: [
    'SaaS development agency CRM',
    'software development agency management software',
    'project management for SaaS agencies',
    'dev shop client management',
    'sprint retainer billing software',
    'client portal for software projects',
    'product studio management software',
    'manage software development clients',
    'milestone invoicing for software projects',
    'software agency operations software',
  ],
  ogTitle: 'SaaS Development Agency CRM & Project Software — Clienter',
  ogDescription:
    'Product builds, sprint retainers, signed scopes, milestone invoices and client portals in one workspace built for software studios.',
  breadcrumbLabel: 'For SaaS Development Agencies',
  eyebrow: 'For SaaS development agencies',
  h1: 'Long product engagements, run like a business not a',
  h1Highlight: 'group chat',
  subheading:
    'Two MVPs in build, a founder who messages at midnight, sprint retainers that need billing on time, and engineers you can’t afford to have idle. Clienter runs the commercial layer — pipeline, signed scopes, phase boards, team allocation, milestone and retainer invoicing, and a portal per client.',
  intro: {
    heading: 'Your engineering tools don’t run your studio',
    body: [
      'A software studio already has good tools for software. The repository, the issue tracker, the CI pipeline, the design files — none of that is the problem. The problem is the layer nobody buys a tool for: which prospects are worth a discovery call, what exactly was agreed in the statement of work, which engineer is free in three weeks, whether sprint nine has been invoiced, and what you tell a founder who wants to know where their money went.',
      'That layer is unusually expensive to get wrong in this business, because engagements are long and the people change. A founder’s requirements shift as they learn their market. A new CTO arrives with a different opinion of the architecture. Six months in, “we agreed that was phase two” is a conversation you will have, and the only thing that settles it quickly is a document everyone signed.',
      'Clienter holds the commercial record alongside the work. Each client carries their engagements, their signed scope, their stakeholders, their change requests and their invoices. Projects run as phases with assigned engineers. Retainers and milestones raise their own invoices. And the client portal gives founders and stakeholders a place to see progress — so visibility stops costing you senior engineering hours.',
    ],
  },
  pains: {
    heading: 'Where product studios lose money',
    sub: 'Rarely on the engineering. Almost always on everything around it.',
    items: [
      {
        title: 'Requirements that evolve faster than the contract',
        desc: 'The founder learns something from a customer and the roadmap moves. Healthy for the product, lethal for a fixed scope nobody is re-papering as it changes.',
      },
      {
        title: 'Bench time nobody saw coming',
        desc: 'A phase ends two weeks before the next engagement starts. With allocation held informally, you discover the gap when it’s already too late to sell into it.',
      },
      {
        title: 'Sprint retainers invoiced late',
        desc: 'The sprint ran, the work shipped, and the invoice goes out whenever someone gets to it. On a monthly retainer across several clients, that lag becomes a permanent hole in cash flow.',
      },
      {
        title: 'Stakeholder updates eating senior time',
        desc: 'The founder wants a weekly summary, the investor update needs a paragraph, and the only people who can write either are the ones you most need writing code.',
      },
      {
        title: 'Discovery given away before qualification',
        desc: 'Two days of architecture conversation for a prospect who was never funded. Without a pipeline that records budget, timeline and decision-maker, this repeats quarterly.',
      },
      {
        title: 'Engagement history scattered at renewal',
        desc: 'When it’s time to extend, the record of what you delivered sits across chat, email, tickets and invoices — so the renewal pitch gets rebuilt from scratch every time.',
      },
    ],
  },
  workflow: {
    heading: 'An engagement, from first call to renewal',
    sub: 'The commercial spine of a long software project.',
    steps: [
      {
        title: '1. Qualify before you architect',
        desc: 'Pipeline cards carrying funding stage, budget, timeline and decision-maker, so discovery effort is spent where it can convert.',
      },
      {
        title: '2. Paper the scope properly',
        desc: 'An e-signed proposal or SOW naming phases, deliverables, assumptions, exclusions and the change process — the document that makes month six a conversation instead of a dispute.',
      },
      {
        title: '3. Run the engagement in phases',
        desc: 'Discovery, architecture, build, QA, UAT, release as stages with assigned engineers, deadlines and client-side dependencies tracked explicitly.',
      },
      {
        title: '4. Log every change against the record',
        desc: 'New requirements recorded, priced and approved or deferred to a later phase — so the roadmap can move without the margin moving with it.',
      },
      {
        title: '5. Bill phases and sprints on time',
        desc: 'Milestone invoices on phase completion, recurring invoices for sprint retainers, and a live view of what every client owes.',
      },
      {
        title: '6. Renew from evidence',
        desc: 'A complete delivery and billing history on the client record turns the extension conversation into a summary you can open rather than assemble.',
      },
    ],
  },
  features: {
    heading: 'The studio layer around your engineering stack',
    sub: 'Keep your tracker. Fix everything it was never meant to do.',
    items: [
      { icon: Users, title: 'Client & stakeholder records', desc: 'Engagements, contacts, documents, change requests and invoices in one profile.' },
      { icon: FileSignature, title: 'Signed scopes & SOWs', desc: 'E-signed documents with exclusions and change process in writing.' },
      { icon: FolderKanban, title: 'Phase boards', desc: 'Discovery to release as stages, with owners, deadlines and dependencies.' },
      { icon: UserCog, title: 'Team allocation', desc: 'Role-based access and a view of who is committed to what, and when they free up.' },
      { icon: ReceiptText, title: 'Milestone invoicing', desc: 'Phase-linked invoices so cash tracks delivery instead of trailing it.' },
      { icon: RefreshCw, title: 'Sprint retainers', desc: 'Recurring invoices for ongoing engagements, raised on schedule every cycle.' },
    ],
  },
  compare: {
    heading: 'Studio by group chat vs studio by record',
    sub: 'What changes on a nine-month engagement.',
    old: [
      'Scope agreed in calls and recalled differently later',
      'Change requests absorbed to protect the relationship',
      'Weekly updates written by your lead engineer',
      'Retainer invoices raised whenever someone remembers',
      'Allocation and bench time discovered too late',
    ],
    calm: [
      'A signed SOW every disagreement resolves against',
      'A priced, approved change log the roadmap runs through',
      'A portal stakeholders read without asking anyone',
      'Recurring invoices that go out on the same day each cycle',
      'A board showing commitments and gaps before they arrive',
    ],
  },
  pricing: {
    heading: 'One flat price for the whole studio',
    body: [
      'Free covers 3 clients and 5 projects with every feature on — pipeline, SOWs, phase boards, change logs, milestone and recurring invoicing, client portals. Free forever and no card to begin.',
      'A small studio fits Pro at $19/month (₹199 in India) with 20 clients, 40 projects, 5 team members and branded portals. A shop running several long engagements at once takes Ultra at $39/month (₹799 in India) for unlimited clients, projects and team members. Nothing is charged per seat, so a hiring round never changes the software bill.',
    ],
  },
  faqHeading: 'SaaS development agency FAQs',
  faqs: [
    {
      q: 'Do we have to move off Jira or Linear?',
      a: 'No. Engineering work stays where your engineers work. Clienter runs the layer your tracker was never built for — the client relationship, the signed scope, the phase and milestone view a non-technical stakeholder can read, the change request trail, the invoices, and the portal. The two coexist, and most studios need both.',
    },
    {
      q: 'How do we bill a long engagement?',
      a: 'Two patterns, both supported. Fixed-scope phases bill as milestone invoices when each phase closes, and ongoing work bills as a recurring sprint retainer raised on the same day each cycle. Both sit against the project, so you can see at a glance when delivery has run ahead of billing.',
    },
    {
      q: 'How do we stop a shifting roadmap from eating our margin?',
      a: 'Write the change process into the signed scope, then actually use it: log each new requirement against the client with a price and an approval state. A founder changing direction is normal and often correct — what costs you money is absorbing those changes without a record, because by the time anyone notices, the trail needed to charge for them doesn’t exist.',
    },
    {
      q: 'Can founders and stakeholders follow progress themselves?',
      a: 'Each client gets a branded portal showing phase status, what’s in flight, what’s waiting on them, and their invoices. It is deliberately readable by non-engineers, which is the point — it replaces the weekly summary your most expensive person was writing.',
    },
  ],
  related: [
    { href: '/for/software-agencies', label: 'For Software Agencies', desc: 'Custom software shops of every stack.' },
    { href: '/for/app-development-agencies', label: 'For App Development Agencies', desc: 'Mobile builds, phases and change control.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'Stakeholder-readable progress without a status call.' },
    { href: '/blog/software-development-statement-of-work', label: 'Writing a Statement of Work', desc: 'The scope document that settles month-six arguments.' },
  ],
  ctaTitle: 'Run the studio, not just the sprints',
  ctaSubtitle: 'Create a free account and put clients, scopes, phases and billing in one workspace.',
}
