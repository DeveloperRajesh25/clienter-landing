import {
  Users,
  ShieldCheck,
  KanbanSquare,
  LayoutDashboard,
  FileSignature,
  ReceiptText,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const WEB_DESIGN_AGENCIES: AudiencePageConfig = {
  slug: 'web-design-agencies',
  path: '/for/web-design-agencies',
  audience: 'Web design agencies',
  metaTitle: 'CRM for Web Design Agencies — Team & Client Portal',
  metaDescription:
    'A CRM for web design agencies that runs your designers, projects, and client approvals in one place, with a white-label client portal. Start free today.',
  keywords: [
    'CRM for web design agencies',
    'web design agency management software',
    'client portal for web design agency',
    'agency project management',
    'web design agency CRM India',
  ],
  ogTitle: 'CRM for Web Design Agencies — Clienter',
  ogDescription:
    'Run your team, projects, client approvals, and a white-label portal in one workspace built for web design agencies. Start free.',
  breadcrumbLabel: 'For Web Design Agencies',
  eyebrow: 'For web design agencies',
  h1: 'The CRM for web design agencies that runs the whole',
  h1Highlight: 'studio',
  subheading:
    'Two designers, six live projects, and a client asking “is my homepage ready?” for the third time today. Clienter gives your agency one workspace for the team, the work, and every client — with a portal that carries your brand, not a tool’s.',
  intro: {
    heading: 'One workspace for the studio, the team, and the client',
    body: [
      'A CRM for web design agencies has a harder job than a solo tool: it has to keep a team of designers, a pipeline of new business, and a roster of clients all moving without anyone stepping on each other. As soon as you go from freelancer to studio, the bottleneck stops being the design and becomes the coordination — who’s working on what, which mockups are waiting on client sign-off, and what you promised in the pitch three weeks ago.',
      'Most growing agencies try to run this on a mix of tools never meant to work together — a project board here, a shared drive there, a spreadsheet of clients, and a group chat where approvals get lost. The result is status-update meetings, duplicated work, and clients who feel out of the loop. Web design agency management software replaces that with one connected system: every client account, project board, proposal, invoice, and team member in the same place.',
      'It’s built for Indian studios too — GST invoices in rupees, UPI and bank-transfer tracking, role-based access so juniors see only their projects, and a white-label client portal that shows your agency’s brand instead of ours. Your clients experience a polished studio; you get one calm back office.',
    ],
  },
  pains: {
    heading: 'What breaks when a studio grows',
    sub: 'The coordination problems that appear the moment you’re more than one person.',
    items: [
      {
        title: 'Nobody knows who’s on what',
        desc: 'With several designers across several projects, capacity is a guess. Two people quietly work the same task while another client’s deadline slips because no one owned it.',
      },
      {
        title: 'Approvals disappear into chat',
        desc: 'You send mockups for sign-off and the feedback trickles back as scattered messages. Days later you’re still unsure whether the client actually approved the homepage.',
      },
      {
        title: 'Clients feel out of the loop',
        desc: 'Without a place to see progress, clients ping you for updates constantly — and every ‘quick status?’ pulls a designer out of the work to answer it.',
      },
      {
        title: 'The tools don’t carry your brand',
        desc: 'You pitched a premium studio, then shared a link that clearly belongs to some third-party app. The experience quietly undercuts the price you charge.',
      },
      {
        title: 'New business competes with delivery',
        desc: 'While the team delivers current projects, fresh leads sit un-chased in an inbox — so the pipeline runs dry the moment you finish the current batch.',
      },
    ],
  },
  workflow: {
    heading: 'A project through the studio, in one place',
    sub: 'How a web design engagement flows through Clienter, from lead to sign-off.',
    steps: [
      {
        title: '1. Track new business in a pipeline',
        desc: 'Every enquiry and referral enters a shared lead pipeline, moving through qualified, proposal sent, and won — so new business keeps flowing while the team delivers.',
      },
      {
        title: '2. Win it with a branded proposal',
        desc: 'Send a proposal that reflects your studio, scope the project clearly, and collect an e-signature — no chasing a printed contract or a separate signing tool.',
      },
      {
        title: '3. Set up the project and assign the team',
        desc: 'Spin up a project board, then assign designers with role-based access so each person sees their work and the owner sees everything across every account.',
      },
      {
        title: '4. Share progress in the client portal',
        desc: 'Clients follow their project, review deliverables, and approve work in a white-label portal — replacing the endless ‘any update?’ messages with a place they can check themselves.',
      },
      {
        title: '5. Invoice, get paid, collect the review',
        desc: 'Raise GST invoices against milestones, track what’s outstanding, and gather a verified review when the site ships — proof for the next pitch.',
      },
    ],
  },
  features: {
    heading: 'Everything a studio runs on, connected',
    sub: 'The features that replace your board, drive, spreadsheet, and group chat.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'One profile per client with every project, contact, file, and invoice in one place.' },
      { icon: ShieldCheck, title: 'Team & roles', desc: 'Owner, admin, and team access so designers see their work and you see all of it.' },
      { icon: KanbanSquare, title: 'Project boards', desc: 'Kanban boards with deadlines and budgets to keep every studio project on track.' },
      { icon: LayoutDashboard, title: 'White-label portal', desc: 'A branded client portal where clients track progress and approve work — under your name.' },
      { icon: FileSignature, title: 'Proposals & sign-off', desc: 'On-brand proposals with e-signature so scope and approvals are settled up front.' },
      { icon: ReceiptText, title: 'Invoices & payments', desc: 'GST invoices against milestones with outstanding balances tracked automatically.' },
    ],
  },
  compare: {
    heading: 'A pile of apps vs one studio workspace',
    sub: 'What changes when the whole agency runs in one place.',
    old: [
      'Designer workloads tracked in someone’s head',
      'Approvals lost in email and group chat',
      'Clients kept updated by constant back-and-forth',
      'A pitch link that belongs to a third-party tool',
      'Leads left un-chased while the team delivers',
    ],
    calm: [
      'Every designer’s workload visible on shared boards',
      'Sign-off captured in the client portal, on record',
      'Clients self-serve progress in their own portal',
      'A white-label portal that carries your brand',
      'A shared pipeline that keeps new business moving',
    ],
  },
  pricing: {
    heading: 'Pricing that scales with the studio, not per seat',
    body: [
      'Start on the Free plan while you’re small — up to 5 clients and 10 projects with the full pipeline, proposals, invoicing, and meetings, free forever. It’s enough to prove the system before you commit.',
      'As the studio grows, Pro at a launch price of ₹199/month covers up to 30 clients, 60 projects, and 5 team members, and unlocks the white-label client portal your agency’s clients will actually see. Ultra at ₹799/month lifts every limit — unlimited clients, projects, and team members — for a busy agency running many accounts at once. There’s no per-seat enterprise pricing and no annual lock-in, so adding a designer never triggers a painful upgrade.',
    ],
  },
  faqHeading: 'Web design agency FAQs',
  faqs: [
    {
      q: 'What is the best CRM for web design agencies?',
      a: 'The best CRM for web design agencies keeps three things moving at once — new business, delivery across a team, and the client relationship — without a stack of disconnected apps. Clienter brings your lead pipeline, project boards, role-based team access, proposals, invoicing, and a white-label client portal into one workspace, free to start and ₹199/month on Pro.',
    },
    {
      q: 'Does Clienter give clients a portal for our web design agency?',
      a: 'Yes. Every paid plan includes a white-label client portal where your clients track project progress, review deliverables, and approve work under your agency’s brand rather than ours. It replaces the steady stream of ‘any update?’ messages and makes a small studio feel like an established one.',
    },
    {
      q: 'How do we manage multiple designers on client projects?',
      a: 'Clienter’s team management gives each designer role-based access, so they see the projects assigned to them while the owner and admins see everything across every account. Kanban boards with deadlines and budgets make capacity visible, so no task is doubled up and no deadline quietly slips.',
    },
    {
      q: 'Can we handle proposals and GST invoicing in one place?',
      a: 'Yes. Send on-brand proposals with e-signature to close the deal, then raise GST-ready invoices against project milestones — all tied to the same client account. You can track outstanding balances and payments without exporting anything to a separate accounting tool.',
    },
  ],
  related: [
    { href: '/features/client-portal', label: 'Client Portal', desc: 'The white-label portal your clients log in to.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Kanban boards, deadlines, and budgets for the team.' },
    { href: '/features/crm-lead-pipeline', label: 'CRM & Lead Pipeline', desc: 'Keep new business moving while you deliver.' },
    { href: '/for/software-agencies', label: 'For Software Agencies', desc: 'The same, tuned for longer software builds.' },
  ],
  ctaTitle: 'Give your studio one calm back office',
  ctaSubtitle: 'Create your free account and bring your team, projects, and clients into one branded workspace today.',
}
