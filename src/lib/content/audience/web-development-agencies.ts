import {
  Users,
  FolderKanban,
  ListChecks,
  UserCog,
  ReceiptText,
  RefreshCw,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const WEB_DEVELOPMENT_AGENCIES: AudiencePageConfig = {
  slug: 'web-development-agencies',
  path: '/for/web-development-agencies',
  audience: 'Web development agencies',
  metaTitle: 'Web Development Agency CRM & Project Software',
  metaDescription:
    'The free, all-in-one CRM for web agencies — pipeline, website projects, team, milestone invoicing, and a client portal for every build in one place. Start free.',
  keywords: [
    'web development agency CRM',
    'project management for web agencies',
    'web agency management software',
    'manage website projects and clients',
    'web dev agency software',
    'client portal for web agency',
    'website project management software',
    'CRM for web development agency',
    'web agency project tracking',
    'milestone invoicing for web agencies',
  ],
  ogTitle: 'Web Development Agency CRM & Project Software — Clienter',
  ogDescription:
    'Run every website build in one place — pipeline, projects, team, milestone invoices, and a client portal. Free, all-in-one software for web development agencies.',
  breadcrumbLabel: 'For Web Development Agencies',
  eyebrow: 'For web development agencies',
  h1: 'One place to run every website build, from first enquiry to',
  h1Highlight: 'launch',
  subheading:
    'Five sites in progress, a designer and two developers to keep busy, client content that never arrives on time, and launch checklists you don’t want to get wrong. Clienter holds the whole agency — pipeline, website projects, the team, milestone invoices, and a portal for every client — so no build lives in a separate tool.',
  intro: {
    heading: 'The system around your website builds',
    body: [
      'A web development agency runs several website projects at once, each moving through design, build, QA, and launch on its own timeline. The code and the design files have their tools, but the layer around them — which client is waiting on content, which build is ready for QA, which milestone deposit is still unpaid — usually lives in a mess of spreadsheets, chat threads, and someone’s memory. That gap is where launches slip.',
      'The friction grows with the team. A deal gets agreed over email, the project brief sits in a doc, the deposit invoice goes out from an accounting app, and the client asks for a status update that pulls your lead developer off a build to write one. Multiply that across a WordPress site, a Shopify store, a Webflow rebuild, and a custom web app all running in parallel, and your two-to-fifteen-person agency spends more time coordinating the work than doing it.',
      'Clienter is the system around those builds, made for Indian web agencies — GST invoices and milestone deposits in rupees, UPI and bank-transfer tracking, role-based access for designers and developers, and a client portal that shows progress without anyone writing an update. Every website project links to its client, its team, its launch checklist, and its invoices, so the answer to ‘where’s that site at?’ is one screen.',
    ],
  },
  pains: {
    heading: 'Where parallel website projects strain a small team',
    sub: 'The friction that shows up once you’re running more than two builds with more than one person.',
    items: [
      {
        title: 'Five sites in progress, no single board',
        desc: 'One build is in design, one is waiting on client copy, one is in QA, one is ready to launch. Without a view across all of them, a stalled project only surfaces when the client chases you.',
      },
      {
        title: 'Client content is the real deadline',
        desc: 'The build is done but the client still hasn’t sent product photos, copy, or logins. The project sits half-finished for weeks, and the delay quietly becomes your problem at launch.',
      },
      {
        title: 'Launch steps live in someone’s head',
        desc: 'Redirects, forms tested, analytics added, SSL checked, staging torn down. Miss one on a go-live and you’re fixing it in production while the client watches — a checklist nobody owns.',
      },
      {
        title: 'Deposits and milestones get chased late',
        desc: 'You bill a deposit up front and the balance on launch, but with invoices in a separate app, a finished milestone goes un-billed and you’re financing the client’s project out of your own cash.',
      },
      {
        title: 'Maintenance retainers quietly leak',
        desc: 'After launch, the AMC and care-plan clients blur together. Recurring invoices get forgotten, small fix requests go untracked, and the steady retainer revenue you built never fully shows up.',
      },
    ],
  },
  workflow: {
    heading: 'A website project, from enquiry to live and maintained',
    sub: 'How one build moves through Clienter while four others run alongside it.',
    steps: [
      {
        title: '1. Capture and qualify the enquiry',
        desc: 'New leads from your contact form, referrals, and directories land in a CRM pipeline and move through enquiry, scoping, proposal, and won — so the funnel keeps filling even while the team is heads-down building.',
      },
      {
        title: '2. Scope the site and take a deposit',
        desc: 'Turn the deal into a proposal that fixes the pages, scope, and timeline, collect an e-signature, and raise the deposit invoice — so the build starts from an agreement and paid work, not a verbal yes.',
      },
      {
        title: '3. Run design, build, and QA on a board',
        desc: 'Create a project with stages and a launch checklist, assign the designer and developers with role-based access, and track what’s blocked on client content so nothing stalls silently.',
      },
      {
        title: '4. Launch, then bill the balance',
        desc: 'Work the checklist to go-live, mark the milestone done, and raise the balance GST invoice — revenue tied to the launch instead of chased a month later.',
      },
      {
        title: '5. Move the client onto a retainer',
        desc: 'Set up a maintenance or AMC retainer with recurring invoices, keep fix requests on the project, and let the client watch progress in their own portal instead of emailing your team.',
      },
    ],
  },
  features: {
    heading: 'What a web agency actually runs on',
    sub: 'The features that connect your pipeline, your builds, your team, and your billing.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'Every client linked to their website projects, team, proposals, and invoices in one profile.' },
      { icon: FolderKanban, title: 'Website project boards', desc: 'Boards with design, build, QA, and launch stages to track every site through to go-live.' },
      { icon: ListChecks, title: 'Launch checklists', desc: 'Repeatable go-live steps on each project so redirects, forms, and analytics never get missed.' },
      { icon: UserCog, title: 'Team & roles', desc: 'Role-based access for designers and developers, so everyone sees their work across every build.' },
      { icon: ReceiptText, title: 'Milestone invoicing', desc: 'GST deposit and balance invoices tied to milestones, with outstanding amounts tracked per project.' },
      { icon: RefreshCw, title: 'Maintenance retainers', desc: 'Recurring invoices and tracked fix requests for AMC and care-plan clients after launch.' },
    ],
  },
  compare: {
    heading: 'A tool for every stage vs one agency workspace',
    sub: 'What changes when your pipeline, builds, team, and billing share one system.',
    old: [
      'Website projects scattered across spreadsheets and chat',
      'Launch steps remembered differently by each developer',
      'Client content delays nobody is formally tracking',
      'Deposit and balance invoices chased from a separate app',
      'Maintenance retainers that quietly go un-billed',
    ],
    calm: [
      'Every build on one board with its stage and status',
      'A reusable launch checklist on each project',
      'Content blockers visible on the project, not buried in email',
      'Milestone invoices raised the moment a stage lands',
      'Recurring retainer invoices that run on their own',
    ],
  },
  pricing: {
    heading: 'Everything free, limits that grow with the agency',
    body: [
      'Start free while you move your first builds in — the Free plan covers up to 3 clients and 5 projects with the full CRM pipeline, proposals, launch checklists, invoicing, and client portal, free forever and no card required. Every feature is included; only the usage limits scale.',
      'For a working agency, Pro at $19/month (₹199 in India) covers up to 20 clients, 40 projects, and 5 team members with a branded portal for every client, while Ultra at $39/month (₹799 in India) removes the limits — unlimited clients, projects, and team members — for a shop running many sites and retainers at once. Because nothing is paywalled and there’s no per-seat charge, adding a developer or taking on a tenth project never changes what the software costs.',
    ],
  },
  faqHeading: 'Web development agency FAQs',
  faqs: [
    {
      q: 'What is the best CRM for a web development agency?',
      a: 'A web development agency CRM should hold your pipeline, your website projects, your team, and your billing in one place rather than scattered apps. Clienter does exactly that — new enquiries move through a Kanban pipeline, won deals become projects with launch checklists and assigned developers, and every invoice ties to the same client account. It’s free to start.',
    },
    {
      q: 'How does Clienter handle project management for web agencies?',
      a: 'Each website build gets a board with design, build, QA, and launch stages, a reusable launch checklist, a deadline, and a budget. You assign designers and developers with role-based access, flag what’s blocked on client content, and see every project’s status at once — so a stalled site surfaces before the client has to chase it.',
    },
    {
      q: 'Can I bill website projects in milestones and deposits?',
      a: 'Yes. Raise a GST deposit invoice when a project is agreed and a balance invoice when the site goes live, so revenue tracks the work instead of landing in one lump. Outstanding amounts sit next to each project, and you can set up recurring retainer invoices for maintenance and AMC clients after launch.',
    },
    {
      q: 'Does each client get their own portal?',
      a: 'Yes. Every client gets a branded portal where they can follow their website’s progress, see what’s billed, and send what the build is waiting on — no developer pulled off work to write a status update. It keeps non-technical clients informed while your small team stays focused on the build.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Boards, stages, launch checklists, and deadlines for every build.' },
    { href: '/features/crm-lead-pipeline', label: 'CRM & Lead Pipeline', desc: 'Keep enquiries flowing while the team ships sites.' },
    { href: '/features/retainer-management', label: 'Retainer Management', desc: 'Recurring invoices for maintenance and AMC clients.' },
    { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'The same workspace, tuned for design studios.' },
  ],
  ctaTitle: 'Run every website build from one place',
  ctaSubtitle: 'Create your free account and bring your pipeline, projects, team, and billing together today.',
}
