import {
  Briefcase,
  FolderKanban,
  Repeat,
  ReceiptText,
  ShieldCheck,
  Eye,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const DIGITAL_MARKETING_AGENCIES: AudiencePageConfig = {
  slug: 'digital-marketing-agencies',
  path: '/for/digital-marketing-agencies',
  audience: 'Digital marketing agencies',
  metaTitle: 'Agency Management Software for Digital Marketing Teams',
  metaDescription:
    'Agency management software for digital marketing teams — run every client account, retainer, campaign, and GST invoice in one place. Start free, no card.',
  keywords: [
    'agency management software for digital marketing',
    'digital marketing agency CRM',
    'client reporting software for agencies',
    'retainer management for agencies',
    'agency client management software',
  ],
  ogTitle: 'Agency Management Software for Digital Marketing — Clienter',
  ogDescription:
    'Run every client account, retainer, report, and invoice in one workspace built for digital marketing agencies. Start free.',
  breadcrumbLabel: 'For Digital Marketing Agencies',
  eyebrow: 'For digital marketing agencies',
  h1: 'Agency management software for digital marketing that finally',
  h1Highlight: 'adds up',
  subheading:
    'You’ve got the tools to run the campaigns. Clienter runs everything around them — the client accounts, retainers, reporting and invoices — so a growing agency stops depending on one founder’s memory.',
  intro: {
    heading: 'The software that runs the agency, not just the marketing',
    body: [
      'Agency management software for digital marketing isn’t about scheduling posts or bidding on keywords — you already have specialist tools for the campaigns themselves. It’s about everything wrapped around them: the ten client accounts you’re accountable for, the retainers that have to keep renewing, the reports that prove you earned this month’s fee, and the invoices that need to go out on the first. Clienter is the layer that holds all of that together.',
      'Most growing agencies run this on a patchwork — a spreadsheet of clients, a folder of invoice templates, a project tool the clients can’t see, and a founder who’s the only one who knows the full picture. It works right up until you hit eight or ten accounts, and then the cracks show: a retainer lapses un-renewed, a report goes out late, a junior doesn’t realise a client is on thin ice.',
      'Clienter replaces that patchwork with one workspace where every account, campaign, retainer, invoice and payment lives together — and your whole team can see the parts they’re meant to. It’s built for the Indian agency reality too: GST-ready invoices, UPI and bank-transfer payment tracking, and launch pricing that doesn’t punish you per seat.',
    ],
  },
  pains: {
    heading: 'Where a growing agency starts to leak',
    sub: 'The problems that have nothing to do with the campaigns — and everything to do with keeping the agency running.',
    items: [
      {
        title: 'Proving the retainer was worth it',
        desc: 'Every month the client quietly asks the same question: what am I paying you for? If the answer is scattered across five tools, the renewal conversation gets harder than it needs to be.',
      },
      {
        title: 'Ten accounts, one overloaded brain',
        desc: 'Each client has its own scope, deadlines, logins and quirks — and too often the only place they all connect is the founder’s head. Onboarding a new account manager means a week of “let me explain how this client works.”',
      },
      {
        title: 'Reporting that eats the last week of the month',
        desc: 'Pulling together what was delivered, what’s outstanding, and where each account stands turns into days of copy-paste before you can even get on the client call.',
      },
      {
        title: 'Retainers that renew late — or not at all',
        desc: 'A three-month retainer ends and nobody notices until the client goes quiet. Recurring revenue leaks out through the gaps between calendar reminders.',
      },
      {
        title: 'Chasing your own invoices',
        desc: 'You bill on the first, follow up on the tenth, and by the twentieth you’re still not sure who’s paid. The agency that’s brilliant at getting clients results is quietly bad at getting itself paid.',
      },
    ],
  },
  workflow: {
    heading: 'A client account, end to end, in one place',
    sub: 'How a new account actually flows through Clienter — from pitch to paid.',
    steps: [
      {
        title: '1. Win the account',
        desc: 'New business lands in your CRM pipeline as a lead and moves through pitch, proposal and won — with an e-signable proposal so the scope is agreed before any work starts.',
      },
      {
        title: '2. Onboard without the back-and-forth',
        desc: 'The won lead becomes a client account with one profile. An intake form collects brand assets, logins and goals in a single pass, so no account manager has to chase the basics over email.',
      },
      {
        title: '3. Set up the retainer & campaigns',
        desc: 'Spin up a retainer project with the month’s deliverables on a Kanban board — deadlines, budgets and tasks assigned across the team by role.',
      },
      {
        title: '4. Keep the client in the loop',
        desc: 'Give the client a white-label portal where they can see progress, approvals and invoices under your brand — so the monthly “where are we?” answers itself.',
      },
      {
        title: '5. Bill, collect, and prove the value',
        desc: 'Send a GST invoice on schedule, log the payment when it lands, and watch the live dashboard show profit per account — the exact number you need at renewal time.',
      },
    ],
  },
  features: {
    heading: 'Everything around the campaigns, in one tool',
    sub: 'The features that replace the spreadsheet-and-folders stack a growing agency outgrows.',
    items: [
      { icon: Briefcase, title: 'Client accounts, organised', desc: 'One profile per brand you manage, with scope, contacts, files, logins and full history in a single place.' },
      { icon: FolderKanban, title: 'Campaigns on Kanban boards', desc: 'Every deliverable as a card with a deadline, owner and status — so nothing on any account quietly slips.' },
      { icon: Repeat, title: 'Retainer projects', desc: 'Set recurring retainers so monthly scope, billing and renewals are tracked instead of forgotten.' },
      { icon: ReceiptText, title: 'GST invoices & quotations', desc: 'Branded, GST-ready invoices and quotes that reuse each account’s details — export to PDF in a click.' },
      { icon: ShieldCheck, title: 'Team roles & access', desc: 'Owner, admin and team roles so each account manager sees the clients they own — and only those.' },
      { icon: Eye, title: 'White-label client portal', desc: 'A branded portal that shows clients their progress, approvals and invoices — your client reporting, half done for you.' },
    ],
  },
  compare: {
    heading: 'The agency patchwork vs one workspace',
    sub: 'What changes the day the whole agency runs on one system.',
    old: [
      'Client accounts in a spreadsheet only the founder understands',
      'Retainers renewed from memory — when someone remembers',
      'Monthly reporting rebuilt by hand across five tools',
      'Invoices sent late and chased at random',
      'Clients left guessing what was actually delivered',
    ],
    calm: [
      'Every account in one profile the whole team can see',
      'Retainer projects that track scope, billing and renewals',
      'A live dashboard of progress and profit per account',
      'GST invoices on schedule with payments tracked',
      'A white-label portal that shows clients exactly where things stand',
    ],
  },
  pricing: {
    heading: 'Priced for a growing agency, not per seat',
    body: [
      'Start on the Free plan to run your first few accounts properly — up to 5 clients and 10 projects with the full CRM pipeline, invoicing and meetings, free forever. It’s enough to move one or two clients off spreadsheets and feel the difference before you pay anything.',
      'As the roster grows, Pro is a launch-priced ₹199/month (was ₹499; up to 30 clients, 60 projects and 5 team members) and unlocks the white-label client portal your clients will actually see. Ultra at ₹799/month (was ₹1,999) removes the limits for a full agency with unlimited accounts and team. No per-seat enterprise pricing, no annual lock-in — you add accounts and people as you win them.',
    ],
  },
  faqHeading: 'Digital marketing agency FAQs',
  faqs: [
    {
      q: 'What is the best agency management software for digital marketing?',
      a: 'The best agency management software for digital marketing handles the business around the campaigns — client accounts, retainers, deliverables, reporting and GST invoicing — rather than the ad platforms you already use. Clienter brings all of that into one workspace, with a white-label client portal and launch pricing from ₹199/month.',
    },
    {
      q: 'Does Clienter run our ad campaigns or schedule posts?',
      a: 'No — and that’s deliberate. Clienter doesn’t touch your ad accounts or publish content; you keep the specialist tools you love for that. What it manages is everything around the work: the clients, retainer projects, approvals, team assignments, invoices and reporting — so the campaigns aren’t the only thing that’s organised.',
    },
    {
      q: 'How does Clienter help with retainer management for agencies?',
      a: 'You set each client up as a retainer project with recurring scope and billing, so the month’s deliverables, the invoice and the renewal all live in one place instead of a reminder in someone’s calendar. When a retainer is coming to an end it’s visible on your dashboard — not a surprise you discover the day the client goes quiet.',
    },
    {
      q: 'Can clients see their own reports and progress?',
      a: 'Yes. On Pro and above you get a white-label client portal where each client sees their projects, approvals and invoices under your brand — which handles a big part of monthly client reporting for you and makes the retainer feel worth it every time they log in.',
    },
  ],
  related: [
    { href: '/features/client-portal', label: 'Client Portal', desc: 'The white-label portal clients log into — under your brand.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Kanban boards, deadlines and budgets for every campaign.' },
    { href: '/for/seo-agencies', label: 'For SEO Agencies', desc: 'The same workspace, tuned for long-game SEO retainers.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month with the client portal.' },
  ],
  ctaTitle: 'Run the agency, not just the campaigns',
  ctaSubtitle: 'Create your free account and bring every client account, retainer and invoice into one workspace today.',
}
