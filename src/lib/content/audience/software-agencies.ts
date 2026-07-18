import {
  Users,
  FolderKanban,
  Briefcase,
  LayoutDashboard,
  ReceiptText,
  PieChart,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const SOFTWARE_AGENCIES: AudiencePageConfig = {
  slug: 'software-agencies',
  path: '/for/software-agencies',
  audience: 'Software agencies',
  metaTitle: 'Software Agency Management Platform, CRM & Billing',
  metaDescription:
    'The software agency management platform that unifies your sales pipeline, dev projects, team, and milestone billing so builds stay on track. Start free today.',
  keywords: [
    'software agency management platform',
    'software development agency CRM',
    'agency operations software',
    'managing dev projects and clients',
    'software agency CRM India',
  ],
  ogTitle: 'Software Agency Management Platform — Clienter',
  ogDescription:
    'Unify your sales pipeline, dev projects, team allocation, and milestone billing in one operations platform built for software agencies. Start free.',
  breadcrumbLabel: 'For Software Agencies',
  eyebrow: 'For software agencies',
  h1: 'One software agency management platform for sales, delivery, and',
  h1Highlight: 'billing',
  subheading:
    'Multi-month builds, a dev team to allocate, milestone invoices to raise, and new deals to close while you deliver. Clienter runs the whole operation — pipeline, projects, people, and payments — in one place, so nothing about a client build lives in a separate tool.',
  intro: {
    heading: 'The operations layer under your dev work',
    body: [
      'A software agency management platform has to hold everything that isn’t the code — the sales pipeline that feeds the team, the multi-month projects that run across sprints, the people allocated to each build, and the milestone billing that keeps cash flowing. Your engineers already have their tools for the work itself; what usually goes missing is the operations layer around it, where clients, projects, and money are supposed to stay connected but rarely do.',
      'Growing agencies feel this as friction: a deal closes in one tool, the project lives in another, resourcing is a spreadsheet someone updates on Fridays, and the client has no idea where things stand without pulling an engineer into a call. A proper software development agency CRM ties those threads together — every client account linked to its projects, its team, its proposals, and its invoices — so the answer to ‘where are we on this build?’ is one screen, not four.',
      'Clienter is that layer, built for Indian software agencies — GST invoices and milestone billing in rupees, UPI and bank-transfer tracking, role-based access for your team, and a live profit view per project so you know which builds actually make money. It’s agency operations software that sits above your dev stack, not another board your engineers have to babysit.',
    ],
  },
  pains: {
    heading: 'Where long builds and small teams collide',
    sub: 'The friction that grows with every extra client, engineer, and month of runtime.',
    items: [
      {
        title: 'No single view across every build',
        desc: 'One project is mid-sprint, one is in QA, one is blocked on client feedback, one is scoping. Without a view across all of them, a stalled build only surfaces when the client complains.',
      },
      {
        title: 'Resourcing is a guessing game',
        desc: 'You commit to a timeline, then realise your two backend devs are already booked solid. Allocation lives in someone’s head or a stale spreadsheet, so over-commitment is constant.',
      },
      {
        title: 'Milestone billing slips',
        desc: 'Long builds are billed in stages, but with no system tying invoices to milestones, a completed phase goes un-invoiced for weeks and cash flow suffers.',
      },
      {
        title: 'Clients want visibility you can’t easily give',
        desc: 'Non-technical clients don’t want Jira access — they want to know it’s on track. Every status request pulls an engineer away from the actual work to write an update.',
      },
      {
        title: 'Sales stalls while you deliver',
        desc: 'Heads-down on a big build, the team stops feeding the pipeline. The project ends, and there’s no next deal ready — so revenue arrives in lumps instead of a steady line.',
      },
    ],
  },
  workflow: {
    heading: 'A build, from first call to final milestone',
    sub: 'How a software engagement flows through Clienter, end to end.',
    steps: [
      {
        title: '1. Qualify deals in the pipeline',
        desc: 'New enquiries and referrals land in a CRM pipeline and move through discovery, scoping, proposal, and won — so the funnel keeps filling even while the team is deep in delivery.',
      },
      {
        title: '2. Scope it with a proposal or SOW',
        desc: 'Turn the deal into a proposal that spells out scope, milestones, and terms, then collect an e-signature — so the build starts from an agreement, not a verbal ‘sounds good’.',
      },
      {
        title: '3. Plan the build and allocate the team',
        desc: 'Create a project with a board, milestones, deadline, and budget, then assign engineers with role-based access so everyone sees their work and leads see capacity across accounts.',
      },
      {
        title: '4. Bill milestones and retainers',
        desc: 'Raise GST invoices as each milestone lands, and set up retainer projects for ongoing support or AMC, so revenue is tied to delivery instead of chased at random.',
      },
      {
        title: '5. Give clients a portal, watch the profit',
        desc: 'Clients follow progress in a white-label portal instead of pinging engineers, while your dashboard shows paid, outstanding, and real profit on every build.',
      },
    ],
  },
  features: {
    heading: 'The operations stack for a software agency',
    sub: 'The features that connect sales, delivery, and billing above your dev tools.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'Every client linked to their projects, team, proposals, and invoices in one profile.' },
      { icon: FolderKanban, title: 'Sprint & project boards', desc: 'Boards with milestones, deadlines, and budgets to track long builds across sprints.' },
      { icon: Briefcase, title: 'Team & allocation', desc: 'Role-based access and assignments so you can see who’s on what across every account.' },
      { icon: LayoutDashboard, title: 'Client portal', desc: 'A white-label portal that gives clients progress without handing over Jira access.' },
      { icon: ReceiptText, title: 'Milestone invoicing', desc: 'GST invoices tied to milestones and retainers, with outstanding balances tracked.' },
      { icon: PieChart, title: 'Profit dashboard', desc: 'Live paid, outstanding, and net profit per project — see which builds actually pay.' },
    ],
  },
  compare: {
    heading: 'A tool for every step vs one operations platform',
    sub: 'What changes when sales, delivery, and billing share one system.',
    old: [
      'Deals, projects, and billing in separate tools',
      'Team allocation kept in a stale spreadsheet',
      'Milestones completed but invoiced weeks late',
      'Clients chasing engineers for status updates',
      'The pipeline drying up during big builds',
    ],
    calm: [
      'Clients, projects, team, and invoices connected',
      'Live capacity across every account and engineer',
      'Invoices raised the moment a milestone lands',
      'Clients self-serve progress in their own portal',
      'A CRM pipeline that keeps filling while you deliver',
    ],
  },
  pricing: {
    heading: 'Operations software priced without per-seat pain',
    body: [
      'Try it free while you validate the fit — the Free plan covers up to 5 clients and 10 projects with the full CRM pipeline, proposals, invoicing, and meetings, free forever and no card required.',
      'For a working agency, Pro at a launch price of ₹199/month covers up to 30 clients, 60 projects, and 5 team members with the white-label client portal, while Ultra at ₹799/month removes every limit — unlimited clients, projects, and team members — for agencies running many builds at once. Because there’s no per-seat enterprise pricing and no annual lock-in, growing the dev team never means a jump in software cost or a renegotiated contract.',
    ],
  },
  faqHeading: 'Software agency FAQs',
  faqs: [
    {
      q: 'What is a software agency management platform?',
      a: 'A software agency management platform is the operations layer around your dev work — the system that keeps your sales pipeline, client accounts, projects, team allocation, and billing connected instead of scattered across separate tools. Clienter is exactly this: a single workspace for managing dev projects and clients, from the first enquiry to the final milestone invoice, starting free.',
    },
    {
      q: 'Is Clienter a good CRM for a software development agency?',
      a: 'Yes. As a software development agency CRM, Clienter tracks every deal through a Kanban pipeline, converts won deals into projects with milestones and assigned engineers, and ties proposals, invoices, and payments to the same client account — so nothing about a build lives in a disconnected app.',
    },
    {
      q: 'How does milestone billing work for long software projects?',
      a: 'Set milestones on the project and raise a GST invoice as each one is delivered, so revenue tracks the work instead of landing in one lump at the end. Outstanding balances sit next to the project, and you can add retainer projects for ongoing support or AMC that need recurring invoices.',
    },
    {
      q: 'Can clients see project progress without technical tools?',
      a: 'Yes. Non-technical clients get a white-label client portal where they can follow progress, review deliverables, and see what’s billed — no Jira logins, no engineers pulled off work to write status updates. As agency operations software, it keeps clients informed while the team stays focused.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Boards, milestones, deadlines, and budgets for long builds.' },
    { href: '/features/crm-lead-pipeline', label: 'CRM & Lead Pipeline', desc: 'Keep deals flowing while the team delivers.' },
    { href: '/business-management-software', label: 'Business Management Software', desc: 'The all-in-one operations view, in depth.' },
    { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'The same platform, tuned for design studios.' },
  ],
  ctaTitle: 'Run the agency, not the tool sprawl',
  ctaSubtitle: 'Create your free account and bring sales, delivery, team, and billing into one platform today.',
}
