import {
  Users,
  FolderKanban,
  LayoutDashboard,
  ReceiptText,
  TrendingUp,
  FileSignature,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const AGENCIES: AudiencePageConfig = {
  slug: 'agencies',
  path: '/for/agencies',
  audience: 'Agencies',
  metaTitle: 'Agency Management Software — Free Agency CRM & Ops',
  metaDescription:
    'Free all-in-one agency management software: CRM, projects, invoicing, client portal, and team in one place. Run every client account from one screen. Start free.',
  keywords: [
    'agency management software',
    'agency CRM',
    'software to manage agency clients',
    'all-in-one agency tool',
    'agency project management',
    'agency client management software',
    'tool to manage agency clients',
    'client management software for agencies',
    'agency operations software',
    'free agency software',
  ],
  ogTitle: 'Agency Management Software — Clienter',
  ogDescription:
    'One free platform to run the whole agency: pipeline, projects, team, invoicing, and a client portal for every account. Start free, no card.',
  breadcrumbLabel: 'For Agencies',
  eyebrow: 'For agencies',
  h1: 'Agency management software that runs every client account from',
  h1Highlight: 'one screen',
  subheading:
    'Design studios, dev shops, marketing teams, SEO and content agencies all live the same reality: too many clients, too many tools, and too many places the truth hides. Clienter brings the pipeline, projects, team, invoices, and client updates together, so you stop stitching the agency back together every morning.',
  intro: {
    heading: 'The home base for the whole agency',
    body: [
      'Agency management software is the system that holds everything your agency promises and delivers. Not the creative work or the code itself, but the layer around it: the leads you’re chasing, the projects in flight, the people assigned to each one, the proposals waiting on a signature, and the invoices that keep the lights on. When those sit in five disconnected apps, running the agency becomes a daily act of reassembly.',
      'The pain is the same whether you build websites, ship software, run ad campaigns, or grow organic traffic. A deal closes in email, the brief lives in a doc, tasks go in one board, billing happens in a spreadsheet, and the client asks for an update you have to go dig up. An agency CRM worth using connects those pieces, so every client account carries its own projects, team, proposals, and payments in one profile you can open in seconds.',
      'Clienter is that home base, and it’s free to run your agency on. Full CRM pipeline, project boards, a branded client portal, GST-ready invoicing, and team roles come standard on every plan, with limits that scale as you grow rather than features locked behind a wall. Below, pick the version tuned to your kind of agency, or start free and shape it around how you already work.',
    ],
  },
  pains: {
    heading: 'What breaks as the client list grows',
    sub: 'The friction every agency hits once a handful of accounts turns into a dozen.',
    items: [
      {
        title: 'The agency lives in too many tabs',
        desc: 'Leads in email, briefs in docs, tasks in a board, money in a sheet. Nobody can answer “how is this client doing?” without opening four apps and guessing at the gaps between them.',
      },
      {
        title: 'Status updates eat the week',
        desc: 'Clients want to know where things stand, so someone spends Friday writing recap emails instead of doing the work the client is paying for.',
      },
      {
        title: 'Invoices go out late or go missing',
        desc: 'A phase wraps, but billing waits on whoever remembers. Retainers slip a cycle, outstanding balances blur together, and cash arrives slower than the work was delivered.',
      },
      {
        title: 'Handoffs drop things',
        desc: 'A strategist scopes it, a designer builds it, an account lead reports on it. With context scattered, details fall through the cracks between those handoffs every time.',
      },
      {
        title: 'New business stalls during busy months',
        desc: 'When the team is buried in delivery, the pipeline stops moving. The project ends and there’s no next deal warmed up, so revenue comes in waves.',
      },
    ],
  },
  workflow: {
    heading: 'A client account, start to finish',
    sub: 'How any agency engagement moves through Clienter, from first enquiry to paid invoice.',
    steps: [
      {
        title: '1. Capture and qualify the lead',
        desc: 'Enquiries, referrals, and inbound forms land in a CRM pipeline you move through stages, so no opportunity sits forgotten in an inbox.',
      },
      {
        title: '2. Send a proposal and win the work',
        desc: 'Turn the deal into a proposal that lays out scope, deliverables, and price, then collect an e-signature, so the engagement starts on something written down.',
      },
      {
        title: '3. Spin up the project and assign the team',
        desc: 'Convert the won deal into a project with a board, milestones, and a deadline, then assign the people on it with role-based access to what they need.',
      },
      {
        title: '4. Invoice as the work lands',
        desc: 'Raise invoices against milestones or set up recurring retainers, and watch paid and outstanding balances per client without leaving the account.',
      },
      {
        title: '5. Keep the client in the loop automatically',
        desc: 'Each client follows progress in their own branded portal, so updates happen on their own instead of becoming another task on your plate.',
      },
    ],
  },
  features: {
    heading: 'Everything an agency runs on, in one tool',
    sub: 'The all-in-one agency tool that connects sales, delivery, team, and billing.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'Every client’s projects, team, proposals, and invoices gathered in a single profile.' },
      { icon: FolderKanban, title: 'Agency project management', desc: 'Boards with milestones, deadlines, and owners to run campaigns, builds, and retainers.' },
      { icon: TrendingUp, title: 'CRM pipeline', desc: 'A visual deal pipeline that keeps new business moving while the team delivers.' },
      { icon: FileSignature, title: 'Proposals & e-sign', desc: 'Scoped proposals clients can approve and sign, so work starts from a clear agreement.' },
      { icon: ReceiptText, title: 'Invoicing & retainers', desc: 'GST-ready invoices tied to milestones and recurring retainers, with balances tracked.' },
      { icon: LayoutDashboard, title: 'Branded client portal', desc: 'A portal where each client sees progress and billing without a single status email.' },
    ],
  },
  compare: {
    heading: 'Five tools and a spreadsheet vs one platform',
    sub: 'What shifts when the whole agency works from a single source of truth.',
    old: [
      'Clients, projects, and billing split across apps',
      'Status updates written by hand every week',
      'Invoices raised whenever someone remembers',
      'Team workload tracked in someone’s head',
      'The pipeline going quiet during delivery crunches',
    ],
    calm: [
      'Every account’s work and money in one profile',
      'Clients self-serving progress in their portal',
      'Invoices tied to milestones and retainers',
      'Clear assignments and roles across accounts',
      'A pipeline that keeps filling while you deliver',
    ],
  },
  pricing: {
    heading: 'Free to run your agency, priced to grow with it',
    body: [
      'Start on the Free plan, forever and without a card. It carries the full CRM pipeline, proposals, project boards, invoicing, and the client portal, with room for up to 3 clients and 5 projects so you can run real accounts while you decide it fits.',
      'As the roster grows, Pro at $19/month (₹199 in India) opens up to 20 clients, 40 projects, and 5 team members, and Ultra at $39/month (₹799 in India) lifts the limits entirely for agencies juggling many accounts at once. Every feature is in every plan; only the volume scales. Adding a teammate or a new client never unlocks a feature you were missing, and there’s no per-seat enterprise tier waiting to surprise you.',
    ],
  },
  faqHeading: 'Agency management software FAQs',
  faqs: [
    {
      q: 'What is the best agency management software?',
      a: 'The best agency management software keeps your clients, projects, team, and billing in one place instead of scattered across apps. Clienter does exactly that, with a CRM pipeline, project boards, proposals, invoicing, and a branded client portal in a single free workspace. It suits design, development, marketing, SEO, and content agencies alike, and you can start free with no card.',
    },
    {
      q: 'What software do agencies use to manage clients?',
      a: 'Agencies typically stitch together a CRM, a project tool, an invoicing app, and a shared drive. Clienter replaces that stack with one platform where each client account holds its own projects, proposals, invoices, and team. That’s why it works as both an agency CRM and a tool to manage agency clients end to end, from first enquiry to final payment.',
    },
    {
      q: 'Is Clienter free for agencies?',
      a: 'Yes. Clienter is free forever with no card required, and the Free plan includes the full feature set: CRM pipeline, projects, proposals, invoicing, and the client portal. Only usage limits scale with paid plans, so a growing agency pays for more clients and projects rather than unlocking features it was missing. Pro and Ultra add headroom as the roster expands.',
    },
    {
      q: 'Does Clienter work for my type of agency?',
      a: 'Yes. Clienter is built for how agencies of every kind operate, so the same account structure fits web design studios, software shops, marketing teams, SEO firms, and content agencies. The workflow of pipeline to proposal to project to invoice is shared across all of them. There are dedicated pages tuned to specific agency types if you want a closer look.',
    },
  ],
  related: [
    { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'The same platform, tuned for design studios.' },
    { href: '/for/digital-marketing-agencies', label: 'For Digital Marketing Agencies', desc: 'Built around campaigns, retainers, and reporting.' },
    { href: '/for/software-agencies', label: 'For Software Agencies', desc: 'Pipeline, sprints, and milestone billing for dev shops.' },
    { href: '/features/crm-lead-pipeline', label: 'CRM & Lead Pipeline', desc: 'Keep new business moving while the team delivers.' },
  ],
  ctaTitle: 'Run the whole agency from one place',
  ctaSubtitle: 'Create your free account and bring clients, projects, team, and billing together today.',
}
