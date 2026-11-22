import {
  Users,
  FolderKanban,
  ListChecks,
  ShieldCheck,
  ReceiptText,
  RefreshCw,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const WORDPRESS_DEVELOPERS: AudiencePageConfig = {
  slug: 'wordpress-developers',
  path: '/for/wordpress-developers',
  audience: 'WordPress developers',
  metaTitle: 'CRM & Project Software for WordPress Developers',
  metaDescription:
    'Run WordPress builds, care plans and clients in one place — pipeline, project boards, launch checklists, maintenance retainers, invoices and a client portal. Free to start.',
  keywords: [
    'CRM for WordPress developers',
    'WordPress agency management software',
    'project management for WordPress developers',
    'WordPress maintenance plan software',
    'client portal for WordPress clients',
    'WordPress freelancer CRM',
    'manage WordPress clients',
    'WordPress care plan billing',
    'website maintenance retainer software',
    'WordPress project tracking',
  ],
  ogTitle: 'CRM & Project Software for WordPress Developers — Clienter',
  ogDescription:
    'Builds, care plans, hosting renewals and clients in one workspace — with launch checklists, recurring retainer invoices and a client portal.',
  breadcrumbLabel: 'For WordPress Developers',
  eyebrow: 'For WordPress developers',
  h1: 'Every WordPress build and care plan, finally in',
  h1Highlight: 'one place',
  subheading:
    'Four sites in build, nine on maintenance, a dozen logins in a password manager, and renewals you only remember when something expires. Clienter holds the business around your WordPress work — leads, projects, launch checklists, recurring care-plan invoices, and a portal each client can actually use.',
  intro: {
    heading: 'The part of WordPress work that isn’t WordPress',
    body: [
      'The build itself is the easy half. You know your stack — the theme or the block editor, ACF, the plugins you trust, the staging routine you’ve refined over years. What eats the week is everything wrapped around it: the client who hasn’t sent copy, the quote you meant to follow up on, the care plan you’ve been renewing by memory, and the four separate places you’d have to open to tell someone what you’ve actually been paid this month.',
      'WordPress work also has a shape most client tools don’t understand. Projects are short and overlapping. Scope expands one plugin at a time. And the real business isn’t the build at all — it’s the long tail after launch: updates, backups, security checks, hosting renewals, and the “can you just change…” requests that arrive by WhatsApp and never make it onto an invoice.',
      'Clienter is built for that shape. Every client carries their sites, their project history, their care plan, and their invoices on one profile. Builds run on boards with reusable launch checklists. Maintenance clients sit on recurring invoices that raise themselves. And the small requests land somewhere you can see them, so the work you do for free is a choice rather than an accident.',
    ],
  },
  pains: {
    heading: 'Where WordPress work leaks time and money',
    sub: 'The patterns almost every developer running more than three client sites recognises.',
    items: [
      {
        title: 'Care plans billed from memory',
        desc: 'Nine sites on maintenance, each renewing on its own date. One slips a month, then two, and by the quarter’s end you’ve done the work and never raised the invoice.',
      },
      {
        title: 'The build is done; the content isn’t',
        desc: 'You finished the theme three weeks ago. The site still isn’t live because nobody sent the About page. The delay looks like yours, and the balance payment waits with it.',
      },
      {
        title: '“Can you just change…” that never gets billed',
        desc: 'A menu tweak, a plugin conflict, a new form field. Individually free, collectively a day a month. Untracked requests are the single biggest unpaid line in WordPress freelancing.',
      },
      {
        title: 'Launch steps you redo from scratch each time',
        desc: 'Redirects mapped, search engines un-blocked, caching configured, SSL verified, forms tested, staging removed. Every go-live is the same list, and it lives in your head.',
      },
      {
        title: 'Renewals and logins scattered everywhere',
        desc: 'Domain here, hosting there, licences on a third invoice, credentials in a vault. When a client asks what they pay for annually, you have to go and find out.',
      },
      {
        title: 'No view of what the retainers actually earn',
        desc: 'You know the project fees. The recurring revenue — the part that makes the business stable — is spread across months and apps, so you’ve never seen it as one number.',
      },
    ],
  },
  workflow: {
    heading: 'A WordPress client, from enquiry to a renewing care plan',
    sub: 'The full arc, with the admin collapsed into the places you were already working.',
    steps: [
      {
        title: '1. The enquiry lands in a pipeline',
        desc: 'Form submissions, referrals and directory leads become cards you move through enquiry, scoped, quoted and won — so a maybe never dissolves into an unanswered email.',
      },
      {
        title: '2. Scope the site, take a deposit',
        desc: 'Send a proposal that fixes page count, plugin scope, revision rounds and timeline, collect the signature, and raise the deposit invoice before the first commit.',
      },
      {
        title: '3. Build against a board, not a memory',
        desc: 'Design, build, content, QA. Flag what’s blocked on the client so a stalled week is visibly their turn, not a silent gap in your schedule.',
      },
      {
        title: '4. Launch from a checklist that repeats',
        desc: 'Run the same go-live steps you always run — redirects, indexing, caching, forms, analytics, backups — then mark the milestone and raise the balance invoice the day it goes live.',
      },
      {
        title: '5. Roll straight onto a care plan',
        desc: 'Put the client on a monthly or annual maintenance retainer with recurring invoices, log every fix request against their site, and let them follow it in their own portal.',
      },
    ],
  },
  features: {
    heading: 'What WordPress developers run on',
    sub: 'The pieces that connect the build, the client and the recurring revenue.',
    items: [
      { icon: Users, title: 'One profile per client', desc: 'Their sites, projects, care plan, documents and full invoice history on a single page.' },
      { icon: FolderKanban, title: 'Build boards', desc: 'Design, build, content, QA and launch stages for every site, with blockers made visible.' },
      { icon: ListChecks, title: 'Reusable launch checklists', desc: 'The same go-live steps every time, so nothing gets missed in production at 11pm.' },
      { icon: RefreshCw, title: 'Care-plan retainers', desc: 'Recurring monthly or annual invoices that raise themselves on the renewal date.' },
      { icon: ReceiptText, title: 'Deposit & balance invoicing', desc: 'GST-ready invoices tied to milestones, with outstanding amounts visible per client.' },
      { icon: ShieldCheck, title: 'Client portal', desc: 'A branded space where clients see progress, send content and read invoices without emailing you.' },
    ],
  },
  compare: {
    heading: 'A drawer full of tools vs one workspace',
    sub: 'What changes when the business around the builds stops being manual.',
    old: [
      'Care plans renewed whenever you happen to remember',
      'Launch steps rebuilt from memory on every go-live',
      'Small change requests absorbed silently and unbilled',
      'Project status answered by scrolling WhatsApp',
      'Recurring revenue you can feel but can’t see',
    ],
    calm: [
      'Retainer invoices that raise themselves on schedule',
      'One checklist you reuse and improve on every site',
      'Every request logged against the client who asked',
      'A board that answers “where is it?” in one screen',
      'Monthly recurring revenue as a number on a dashboard',
    ],
  },
  pricing: {
    heading: 'Free while you’re small, cheap when you’re not',
    body: [
      'The Free plan covers 3 clients and 5 projects with the whole product — pipeline, proposals, launch checklists, invoicing and the client portal. Nothing is paywalled behind a tier; only the usage limits move. It’s free forever, and no card is needed to start.',
      'A working WordPress freelancer usually fits Pro at $19/month (₹199 in India): up to 20 clients, 40 projects, 5 team members, and a branded portal for every client. A studio running many builds alongside twenty care plans takes Ultra at $39/month (₹799 in India) for unlimited clients, projects and team members. Since there’s no per-seat pricing, bringing in a second developer doesn’t change the bill.',
    ],
  },
  faqHeading: 'WordPress developer FAQs',
  faqs: [
    {
      q: 'What’s the best CRM for a WordPress developer?',
      a: 'The useful one is whichever holds builds and care plans in the same place as clients and invoices. A sales CRM stops at contacts; a project tool ignores the money. Clienter covers the whole arc — pipeline, project boards with launch checklists, milestone invoicing, recurring care-plan retainers, and a client portal — and is free to start with 3 clients and 5 projects.',
    },
    {
      q: 'Can I manage WordPress maintenance plans and recurring billing?',
      a: 'Yes. Put each maintenance client on a recurring monthly or annual invoice that raises itself on the renewal date, log fix requests against their site so you can see what the plan actually costs you to deliver, and track which retainers are paid, pending or overdue from one view.',
    },
    {
      q: 'How do I stop unbilled “can you just change this” requests?',
      a: 'Give them a home. When every small request is logged against the client rather than sitting in a chat thread, you can see at renewal exactly how many hours the plan absorbed — which turns “I think I’m underpricing this” into evidence you can quote from, and lets you bill out-of-scope work without an argument.',
    },
    {
      q: 'Does it replace my project management tool?',
      a: 'For client work, usually yes. Clienter’s boards carry the stages, deadlines, assignees and launch checklists most WordPress builds need, with the advantage that the project sits next to the client, the proposal and the invoices instead of in a separate app you have to cross-reference.',
    },
    {
      q: 'Can clients see their own site’s progress?',
      a: 'Each client gets a branded portal showing their project status, what the build is waiting on from them, and their invoices. Most of the status emails you write today simply stop being necessary, and content arrives sooner because the client can see it’s the thing holding their launch.',
    },
  ],
  related: [
    { href: '/for/website-maintenance-agencies', label: 'For Website Maintenance Agencies', desc: 'Care plans, AMCs and recurring revenue at scale.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Boards, stages, launch checklists and deadlines.' },
    { href: '/blog/wordpress-maintenance-plan-pricing', label: 'WordPress Maintenance Plan Pricing', desc: 'What to charge for a care plan, and what to put in it.' },
    { href: '/for/web-developers', label: 'For Web Developers', desc: 'The same workspace for freelance developers of any stack.' },
  ],
  ctaTitle: 'Put your builds and care plans in one place',
  ctaSubtitle: 'Create a free account and bring every WordPress client, project and renewal together today.',
}
