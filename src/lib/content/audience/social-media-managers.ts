import {
  Users,
  FolderKanban,
  UserPlus,
  Eye,
  ReceiptText,
  Wallet,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const SOCIAL_MEDIA_MANAGERS: AudiencePageConfig = {
  slug: 'social-media-managers',
  path: '/for/social-media-managers',
  audience: 'Social media managers',
  metaTitle: 'Client Management for Social Media Managers, Sorted',
  metaDescription:
    'Client management for social media managers — track every account, content approval, and invoice in one place, and get paid on time. Free to start.',
  keywords: [
    'client management for social media managers',
    'social media manager CRM',
    'managing multiple social clients',
    'content approval workflow',
    'social media client management software',
  ],
  ogTitle: 'Client Management for Social Media Managers — Clienter',
  ogDescription:
    'Clients, content approvals and invoices in one calm workspace — out of the DMs and into a system. Start free.',
  breadcrumbLabel: 'For Social Media Managers',
  eyebrow: 'For social media managers',
  h1: 'Client management for social media managers, minus the',
  h1Highlight: 'DM chaos',
  subheading:
    'Lots of small clients, endless approvals, and everything living in DMs. Clienter pulls your clients, content approvals and invoices into one workspace — so nothing gets lost in a group chat.',
  intro: {
    heading: 'Client management for the person juggling everyone’s socials',
    body: [
      'Client management for social media managers is a specific kind of hard: lots of small clients, each wanting content, approvals and answers now, and most of it happening in DMs and WhatsApp threads that are impossible to search a week later. Clienter pulls all of it — the clients, the content approvals, the invoices — out of the group chats and into one calm workspace.',
      'Clienter doesn’t schedule or publish your posts — you’ve already got a scheduler for that. What it fixes is everything around the content: keeping ten clients straight, moving each piece through drafting and sign-off so nothing goes out un-approved, onboarding new brands without a week of back-and-forth, and getting paid on time every single month.',
      'For a social media manager — whether you’re solo or a small pod — the admin scales badly. Five clients is manageable in your head; twelve is chaos. Clienter gives every client a profile, every content piece a place in an approval flow, and every invoice a paper trail — with GST, UPI-friendly payment tracking and pricing built for Indian rates rather than enterprise budgets.',
    ],
  },
  pains: {
    heading: 'Where the DMs stop working',
    sub: 'The admin that piles up the moment you go past a handful of clients.',
    items: [
      {
        title: 'Approvals lost in the DMs',
        desc: 'A caption goes out for sign-off, the client replies in a different thread three days later, and you can’t remember what was approved for whom. Feedback scattered across chats is where content goes to die.',
      },
      {
        title: 'Ten clients, ten little chaoses',
        desc: 'Each brand has its own tone, assets, logins and posting days — and holding all of it in your head means one client always ends up feeling neglected.',
      },
      {
        title: 'Onboarding that takes a week of asking',
        desc: 'Every new client is the same scramble: chasing the logo, the brand colours, the login, the do’s and don’ts — one message at a time.',
      },
      {
        title: 'Getting paid last, if at all',
        desc: 'Small monthly retainers are easy for clients to “forget.” You do the work on time but chase the payment for weeks — and some months you just let it slide.',
      },
      {
        title: 'Looking like a hobby, not a service',
        desc: 'When everything runs through your personal WhatsApp, even great work can feel casual — and casual is the easiest thing in the world to cancel.',
      },
    ],
  },
  workflow: {
    heading: 'A client, from enquiry to paid, in one place',
    sub: 'How a new brand flows through Clienter — without a single lost DM.',
    steps: [
      {
        title: '1. Turn the enquiry into a client',
        desc: 'A new brand slides into your DMs; it enters your CRM pipeline as a lead and moves to won with an e-signable proposal that sets the monthly scope and rate.',
      },
      {
        title: '2. Onboard with a form, not 20 messages',
        desc: 'Send an intake form that collects the logo, brand colours, logins, tone and do’s-and-don’ts in one go — so you start with everything you need instead of chasing it.',
      },
      {
        title: '3. Run content through an approval board',
        desc: 'Set up a project board where each post moves through briefed, drafted, sent for approval, approved and scheduled — so you always know what’s waiting on the client and nothing goes out without sign-off.',
      },
      {
        title: '4. Keep the client in one place',
        desc: 'Share a white-label portal where the client sees what’s coming and what’s approved — instead of ten follow-up messages a week across three chat apps.',
      },
      {
        title: '5. Invoice on the first, get paid on time',
        desc: 'Send a recurring GST invoice, track the payment when it lands, and let reminders chase the stragglers — so you’re not the one always asking.',
      },
    ],
  },
  features: {
    heading: 'Everything around the content, in one tool',
    sub: 'The features that replace a phone full of client group chats.',
    items: [
      { icon: Users, title: 'All your clients in one place', desc: 'A profile per brand with tone, assets, logins, contacts and history — so no client lives only in your head.' },
      { icon: FolderKanban, title: 'Content approval boards', desc: 'Move every post through draft, review and approved on a Kanban board, so nothing is posted before sign-off.' },
      { icon: UserPlus, title: 'Client onboarding forms', desc: 'Collect the logo, colours, logins and brand do’s-and-don’ts with one intake form instead of twenty messages.' },
      { icon: Eye, title: 'White-label client portal', desc: 'A branded portal where clients see what’s planned and approved — under your name, not a group chat.' },
      { icon: ReceiptText, title: 'GST invoices & quotations', desc: 'Recurring, GST-ready invoices that reuse each client’s details and export to PDF in a click.' },
      { icon: Wallet, title: 'Payments, dues & reminders', desc: 'Track who’s paid, who’s due, and your real monthly profit — with reminders that chase for you.' },
    ],
  },
  compare: {
    heading: 'The group-chat life vs one workspace',
    sub: 'What changes when your clients stop living in WhatsApp.',
    old: [
      'Approvals scattered across DMs and impossible to find',
      'Each brand’s assets and logins held in your memory',
      'New clients onboarded one chasing message at a time',
      'Invoices sent late and payments quietly forgotten',
      'A service that runs through your personal WhatsApp',
    ],
    calm: [
      'Every approval tracked on a board, un-approved posts held',
      'A profile per brand with assets, logins and tone',
      'One intake form that collects everything up front',
      'GST invoices on schedule with reminders that chase for you',
      'A white-label portal that looks like a real business',
    ],
  },
  pricing: {
    heading: 'Priced for social media rates, not enterprise ones',
    body: [
      'Start free forever — up to 5 clients and 10 projects with the full CRM pipeline, invoicing and meetings. For a social media manager taking on the first handful of brands, it’s enough to get properly organised before you spend a rupee.',
      'When the roster grows, Pro is a launch-priced ₹199/month (was ₹499; up to 30 clients, 60 projects and 5 team members) and unlocks the white-label client portal that makes you look like the studio you’re becoming. Ultra at ₹799/month (was ₹1,999) goes unlimited for when you’re running a full content pod. No per-seat pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Social media manager FAQs',
  faqs: [
    {
      q: 'What’s the best client management for social media managers?',
      a: 'The best client management for social media managers keeps many small clients, their content approvals and their monthly invoices in one place — instead of scattered across DMs. Clienter does exactly that, with content approval boards, onboarding forms, a white-label client portal and recurring GST invoicing, free to start and Pro from ₹199/month.',
    },
    {
      q: 'Does Clienter schedule or publish my social posts?',
      a: 'No — Clienter isn’t a scheduler and doesn’t publish content. Keep the posting tool you already use. Clienter manages everything around the content: your clients, the approval workflow, onboarding, invoices and the client portal — the admin that eats your week, not the posting itself.',
    },
    {
      q: 'How does the content approval workflow work?',
      a: 'You run each piece of content through a Kanban board — briefed, drafted, sent for approval, approved, scheduled — so at any moment you can see what’s waiting on which client, and nothing moves to scheduled without sign-off. The client can follow along in their portal, which cuts the endless “did you see my caption?” messages.',
    },
    {
      q: 'How do I manage multiple social media clients without dropping one?',
      a: 'Give every client a profile and every task a board, so nothing depends on your memory. Clienter shows all your clients, their content status and their dues in one workspace — so the twelfth client gets the same attention as the first, and you can see at a glance what’s due where this week.',
    },
  ],
  related: [
    { href: '/features/client-management', label: 'Client Management', desc: 'One profile per brand, with assets, history and dues.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'Recurring GST invoices so you’re paid on time.' },
    { href: '/for/digital-marketing-agencies', label: 'For Digital Marketing Agencies', desc: 'Ready to grow into a full agency? The same workspace scales.' },
    { href: '/for/freelancers', label: 'For Freelancers', desc: 'The all-in-one workspace for a solo client business.' },
  ],
  ctaTitle: 'Get every client out of the group chat',
  ctaSubtitle: 'Create your free account and run your clients, content approvals and invoices from one calm workspace.',
}
