import {
  Users,
  FolderKanban,
  ListChecks,
  UserCog,
  ReceiptText,
  RefreshCw,
  FileSignature,
  LayoutDashboard,
  TrendingUp,
  MessageSquare,
  Wallet,
  Layers,
} from 'lucide-react'
import type { SeoLandingConfig } from '@/lib/seo-pages'

/**
 * Niche head term: "CRM for web development agency". Deliberately narrower than
 * /client-management-software — this page argues the vertical case (a CRM that
 * understands website builds) rather than the general one, and should never be
 * rewritten to chase generic CRM traffic.
 */
export const CRM_FOR_WEB_DEVELOPMENT_AGENCY: SeoLandingConfig = {
  path: '/crm-for-web-development-agency',
  metaTitle: 'CRM for Web Development Agencies & Freelancers',
  metaDescription:
    'A CRM built for people who build websites — pipeline, website project boards, launch checklists, milestone invoicing, team roles and client portals in one workspace. Start free.',
  keywords: [
    'CRM for web development agency',
    'web agency CRM',
    'CRM for web developers',
    'web development agency software',
    'agency management software for web agencies',
    'website project CRM',
    'client management for web developers',
    'web design agency CRM',
    'CRM for software agencies',
    'web development client management software',
  ],
  ogTitle: 'CRM for Web Development Agencies — Clienter',
  ogDescription:
    'Pipeline, website projects, launch checklists, milestone invoices, team roles and client portals — one workspace for agencies that build websites.',
  breadcrumbLabel: 'CRM for Web Development Agencies',
  eyebrow: 'CRM for web development agencies',
  h1: 'A CRM that understands website',
  h1Highlight: 'projects',
  subheading:
    'Most CRMs were built for sales teams and stop at the deal. Clienter keeps going — into the build, the launch checklist, the milestone invoice and the client portal. One workspace for agencies and freelancers who build websites and software for a living.',
  intro: {
    heading: 'Why a general CRM doesn’t fit a web agency',
    body: [
      'A conventional CRM models a sales process: a contact, a deal, a stage, a close. That is a complete picture for a company selling a product and a third of the picture for an agency that builds websites. The moment a deal is won, your real work begins — scope, design, build, content, QA, launch — and the CRM has nothing to say about any of it. So the project moves to a second tool, the invoices to a third, and the client’s questions to WhatsApp.',
      'A CRM for a web development agency has to carry the whole lifecycle, because in this business the relationship and the delivery are the same thing. The enquiry becomes a scoped proposal, the proposal becomes a project with a launch checklist, the launch becomes a balance invoice, and the invoice becomes a maintenance retainer. Break that chain across four apps and work falls through every join: milestones completed but unbilled, change requests absorbed, retainers never renewed.',
      'Clienter is built for that chain specifically. It is not a general CRM with a projects tab bolted on — it is a workspace for the people who build and maintain websites and software for clients, where a project always knows its client, its scope, its team and its money.',
    ],
  },
  benefits: {
    heading: 'What changes when it all lives together',
    sub: 'The gains come from the joins, not from any one feature.',
    items: [
      {
        icon: Layers,
        title: 'One record per client',
        desc: 'Their enquiry history, signed proposal, website projects, documents, change requests and every invoice on a single profile.',
      },
      {
        icon: Wallet,
        title: 'Billing that tracks delivery',
        desc: 'Milestone invoices raised the day a stage lands, so cash arrives with the work instead of trailing it by a fortnight.',
      },
      {
        icon: ListChecks,
        title: 'Launches that don’t improvise',
        desc: 'A reusable go-live checklist on every project — redirects, indexing, forms, analytics, backups — so nothing gets missed in production.',
      },
      {
        icon: MessageSquare,
        title: 'Fewer status interruptions',
        desc: 'Clients check their own portal for progress and send what the build is waiting on, which removes most of the update emails your developers write.',
      },
      {
        icon: TrendingUp,
        title: 'Recurring revenue you can see',
        desc: 'Maintenance and care-plan retainers on recurring invoices, with renewal dates tracked instead of remembered.',
      },
      {
        icon: UserCog,
        title: 'A team that doesn’t need a status call',
        desc: 'Role-based access so designers, developers and QA see their work across every build without a daily meeting to reassemble it.',
      },
    ],
  },
  capabilities: {
    heading: 'Everything a web agency runs on',
    sub: 'From the first enquiry to the fifth year of a maintenance plan.',
    items: [
      { icon: LayoutDashboard, title: 'Lead pipeline', desc: 'Enquiries, referrals and RFPs through enquiry, scoping, proposal and won — so the funnel keeps moving while the team builds.' },
      { icon: FileSignature, title: 'Proposals & e-signatures', desc: 'Scope, page count, revision rounds, exclusions and timeline, signed online and attached to the project.' },
      { icon: Users, title: 'Client accounts', desc: 'One profile holding contacts, history, documents, projects and invoices.' },
      { icon: FolderKanban, title: 'Website project boards', desc: 'Design, build, content, QA and launch stages with owners, deadlines and client-side blockers.' },
      { icon: ListChecks, title: 'Launch checklists', desc: 'Repeatable go-live steps per project, improved each time rather than rebuilt from memory.' },
      { icon: ReceiptText, title: 'Milestone & GST invoicing', desc: 'Deposit, stage and balance invoices tied to the work, with outstanding amounts visible per project.' },
      { icon: UserCog, title: 'Team & roles', desc: 'Role-based access for designers, developers and QA across every active build.' },
      { icon: RefreshCw, title: 'Maintenance retainers', desc: 'Recurring invoices and tracked request queues for care-plan and AMC clients after launch.' },
      { icon: MessageSquare, title: 'Client portal', desc: 'A branded space where each client follows progress, sends content and reads their invoices.' },
    ],
  },
  compare: {
    heading: 'A CRM plus three other apps vs one workspace',
    sub: 'The same agency week, run both ways.',
    old: [
      'Deals in a CRM, projects in a board, invoices in an accounting app',
      'Scope agreed in a call and remembered differently in month two',
      'Launch steps that vary with whoever is deploying',
      'Milestones completed but invoiced weeks later',
      'Client updates written by hand by your lead developer',
      'Maintenance retainers renewed when someone remembers',
    ],
    calm: [
      'One record carrying the client, the build and the money',
      'A signed scope attached to the project it governs',
      'One reusable launch checklist the whole team runs',
      'An invoice raised the day the stage is marked done',
      'A portal clients read without asking anyone',
      'Recurring invoices that go out on the renewal date',
    ],
  },
  faqHeading: 'CRM for web development agencies — FAQs',
  faqs: [
    {
      q: 'What is the best CRM for a web development agency?',
      a: 'The one that does not stop at the deal. A web agency needs the pipeline, the signed scope, the project board with its launch checklist, the milestone invoices and the client portal connected on one record, because almost all of the leakage in this business happens at the joins between those things. Clienter is built for exactly that chain and is free to start with 3 clients and 5 projects.',
    },
    {
      q: 'How is this different from HubSpot, Zoho or Pipedrive?',
      a: 'Those are sales CRMs, and good ones. They model contacts, deals and pipelines, then hand delivery to another tool. If you sell websites, the work after the deal is the business — so you would still run projects, launch checklists, milestone invoicing and client communication elsewhere. Clienter covers the whole lifecycle, which suits a build-and-maintain agency rather than a sales team.',
    },
    {
      q: 'Does it replace our project management tool?',
      a: 'For client-facing project management, usually yes — boards, stages, assignees, deadlines and launch checklists, with the advantage that the project sits next to its client, scope and invoices. Engineering issue tracking is a different job and is best kept in GitHub Issues, Linear or Jira alongside it. Most studios run both deliberately.',
    },
    {
      q: 'Can we bill website projects in milestones?',
      a: 'Yes. Raise a deposit against the signed proposal, stage invoices as design and build milestones land, and the balance at go-live, with GST handled for Indian agencies. Each invoice attaches to its project, so completing a stage and billing it happen in the same place rather than on two different days.',
    },
    {
      q: 'Is there a client portal for our clients?',
      a: 'Every client gets a branded portal showing their project’s progress, what the build is waiting on from them, and their invoices. It removes most status emails, and because clients can see that their own outstanding content is holding up their launch, that content tends to arrive considerably sooner.',
    },
    {
      q: 'How much does it cost for an agency?',
      a: 'Free covers 3 clients and 5 projects with every feature enabled. Pro is $19/month (₹199 in India) for 20 clients, 40 projects and 5 team members, and Ultra is $39/month (₹799 in India) for unlimited clients, projects and team members. Nothing is charged per seat, so hiring a developer never changes the bill.',
    },
  ],
  related: [
    { href: '/for/web-development-agencies', label: 'For Web Development Agencies', desc: 'Written for agencies running parallel builds.' },
    { href: '/for/web-developers', label: 'For Web Developers', desc: 'The freelance version of the same workflow.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Boards, stages and launch checklists.' },
    { href: '/blog/project-management-software-for-web-developers', label: 'Choosing your stack', desc: 'An honest comparison for client web work.' },
  ],
  ctaTitle: 'Run the whole build in one place',
  ctaSubtitle: 'Create your free account and bring pipeline, projects, team and billing together today.',
}
