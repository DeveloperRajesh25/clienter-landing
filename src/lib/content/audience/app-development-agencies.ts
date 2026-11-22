import {
  Users,
  FolderKanban,
  ListChecks,
  UserCog,
  ReceiptText,
  FileSignature,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const APP_DEVELOPMENT_AGENCIES: AudiencePageConfig = {
  slug: 'app-development-agencies',
  path: '/for/app-development-agencies',
  audience: 'App development agencies',
  metaTitle: 'App Development Agency CRM & Project Software',
  metaDescription:
    'Run mobile app projects, sprints, change requests and milestone billing in one workspace — with team roles, signed scopes and a client portal. Free to start.',
  keywords: [
    'app development agency CRM',
    'mobile app agency management software',
    'project management for app development agencies',
    'app project milestone billing',
    'client portal for app clients',
    'software development agency CRM',
    'manage app development clients',
    'app agency project tracking',
    'change request management software',
    'mobile development studio software',
  ],
  ogTitle: 'App Development Agency CRM & Project Software — Clienter',
  ogDescription:
    'Mobile app projects, sprints, change requests, milestone invoices and client portals in one workspace built for development studios.',
  breadcrumbLabel: 'For App Development Agencies',
  eyebrow: 'For app development agencies',
  h1: 'Mobile projects, milestones and change requests under',
  h1Highlight: 'control',
  subheading:
    'Long builds, moving scope, a client who wants weekly visibility, and payments that need to track delivery rather than trail it. Clienter runs the business layer around your app projects — pipeline, signed scopes, phase boards, team roles, milestone invoices and a portal per client.',
  intro: {
    heading: 'Long projects need a paper trail, not a group chat',
    body: [
      'App projects run for months, not weeks, and that length changes everything. Decisions made in week two are disputed in week fourteen. The client who approved the flows has been replaced by a new product manager with opinions. Two platforms, an API, a design system and a QA cycle are all in motion, and the only artefact tying them together is often a chat thread nobody can search.',
      'The commercial side is just as exposed. Fixed-price app work dies by change request: a “small” addition each sprint, each one absorbed to keep goodwill, until the margin is gone and the team is tired. The agencies that survive this aren’t tougher negotiators — they simply have a written scope, a logged request trail, and invoices that move with the phases.',
      'Clienter is that layer. Every client carries their app projects, their signed proposal, their documents, their change requests and their invoices on one record. Projects run as phases with assigned developers and QA. Milestone invoices are raised as phases close. And the client portal gives stakeholders somewhere to watch progress that doesn’t cost your lead developer an afternoon writing a status update.',
    ],
  },
  pains: {
    heading: 'What goes wrong on long app builds',
    sub: 'The patterns that turn a profitable project into a grind by month three.',
    items: [
      {
        title: 'Scope that moves one request at a time',
        desc: 'No single change is unreasonable. Twenty of them, unlogged and unbilled, are the difference between a healthy project and a loss you discover at the end.',
      },
      {
        title: 'Decisions nobody can find later',
        desc: '“We agreed offline login was out of scope.” Said in a call in March, disputed in July, with no record either way. Without a written trail, the agency usually eats it.',
      },
      {
        title: 'Stakeholders who want weekly visibility',
        desc: 'The client’s board wants a progress update every Friday, so a senior developer spends half a day a week writing one instead of shipping.',
      },
      {
        title: 'Payments that lag delivery',
        desc: 'You’ve built two phases and billed one. On a six-month project that gap becomes you funding the client’s product — and it only widens if a phase closes while its invoice waits.',
      },
      {
        title: 'Team allocation held in one person’s head',
        desc: 'Who’s on which project next sprint, who’s free, who’s double-booked. A studio of six can run on memory for a while; it stops working exactly when you win the next deal.',
      },
    ],
  },
  workflow: {
    heading: 'An app project, start to handover',
    sub: 'The business layer around your sprints.',
    steps: [
      {
        title: '1. Qualify and scope the opportunity',
        desc: 'Leads carry platform, budget, timeline and decision-maker through the pipeline, so discovery effort goes to deals that are real.',
      },
      {
        title: '2. Sign a scope that can be pointed at',
        desc: 'A proposal naming platforms, features, integrations, revision rounds and explicit exclusions, signed online — the document every later “was this included?” gets answered from.',
      },
      {
        title: '3. Run the build in phases',
        desc: 'Discovery, design, build, QA, UAT and release as stages with assigned developers, deadlines and client-side blockers tracked as real items.',
      },
      {
        title: '4. Log and price change requests',
        desc: 'Every addition is recorded against the client — approved and billed, or declined and out of scope. The trail, not the argument, settles it.',
      },
      {
        title: '5. Bill phases as they close',
        desc: 'Milestone invoices raised on phase completion, with outstanding amounts visible per project so cash tracks delivery rather than trailing months behind it.',
      },
      {
        title: '6. Hand over and support',
        desc: 'Release checklists, credentials and documentation handed over cleanly, then a support or SLA retainer on recurring invoices if the client stays on.',
      },
    ],
  },
  features: {
    heading: 'What a development studio needs around the code',
    sub: 'Your repo and tracker handle engineering. This handles everything else.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'Projects, stakeholders, documents, requests and invoices on one profile.' },
      { icon: FileSignature, title: 'Signed proposals', desc: 'E-signed scopes with exclusions in writing, so month-four disputes have an answer.' },
      { icon: FolderKanban, title: 'Phase boards', desc: 'Discovery to release as stages, with owners, deadlines and client blockers.' },
      { icon: UserCog, title: 'Team & roles', desc: 'Role-based access so developers and QA see their work across every project.' },
      { icon: ListChecks, title: 'Change request log', desc: 'Every addition recorded, priced and approved — or explicitly declined.' },
      { icon: ReceiptText, title: 'Milestone invoicing', desc: 'Phase-linked invoices so payment moves with delivery, not after it.' },
    ],
  },
  compare: {
    heading: 'Chat-driven delivery vs a documented project',
    sub: 'The same six-month build, run two ways.',
    old: [
      'Scope agreed verbally and remembered differently',
      'Change requests absorbed to keep the peace',
      'Weekly status updates written by a senior developer',
      'Invoices raised long after the phase closed',
      'Allocation held in one director’s head',
    ],
    calm: [
      'A signed scope every question is answered from',
      'A logged request trail that prices itself',
      'A portal the client checks without asking anyone',
      'Phase completion and invoice in the same action',
      'One board showing who is on what, and when',
    ],
  },
  pricing: {
    heading: 'Flat pricing, no per-seat tax on growth',
    body: [
      'Free gives you 3 clients and 5 projects with everything switched on — pipeline, proposals, phase boards, change logs, invoicing and client portals. No card, no feature gates, free forever.',
      'A small studio usually runs on Pro at $19/month (₹199 in India): 20 clients, 40 projects, 5 team members, branded portals. A larger shop with several long builds in flight takes Ultra at $39/month (₹799 in India) for unlimited clients, projects and team members. Seats are never billed separately, so growing the team doesn’t grow the invoice.',
    ],
  },
  faqHeading: 'App development agency FAQs',
  faqs: [
    {
      q: 'Does this replace Jira or Linear?',
      a: 'No, and it shouldn’t. Engineering tickets belong in an engineering tool. Clienter runs the layer above: the client relationship, the signed scope, the project phases, the change request trail, the milestone invoices and the client-facing portal. Your developers keep their tracker; the studio stops being coordinated from a spreadsheet.',
    },
    {
      q: 'How do we stop scope creep on fixed-price app projects?',
      a: 'Two habits, both of which the tool exists to support. Sign a scope that names exclusions explicitly, and log every subsequent request against the client with a price and an approval state. When the fourteenth request arrives you’re not relying on memory or goodwill — you have a list, and the conversation becomes a quote rather than an argument.',
    },
    {
      q: 'Can clients follow progress without weekly calls?',
      a: 'Each client gets a branded portal showing phase status, what’s in progress, what’s waiting on them, and their invoices. For most studios this removes the Friday status write-up entirely, and it gives non-technical stakeholders something to look at that isn’t a sprint board they can’t read.',
    },
    {
      q: 'Can we bill a long project in phases?',
      a: 'Yes. Attach invoices to milestones so a deposit, each closing phase and the final release each raise their own invoice. Outstanding amounts sit against the project, which makes it obvious when delivery has run ahead of billing — the most common cash problem on long builds.',
    },
  ],
  related: [
    { href: '/for/software-agencies', label: 'For Software Agencies', desc: 'The same workspace for custom software shops.' },
    { href: '/for/saas-development-agencies', label: 'For SaaS Development Agencies', desc: 'Long builds, retainers and product partnerships.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Phases, owners, deadlines and checklists.' },
    { href: '/blog/how-to-prevent-scope-creep', label: 'How to Prevent Scope Creep', desc: 'The scoping habits that protect a fixed-price build.' },
  ],
  ctaTitle: 'Put the business layer around your builds',
  ctaSubtitle: 'Create a free account and bring clients, scopes, phases and billing into one place.',
}
