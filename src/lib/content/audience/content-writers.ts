import {
  FolderKanban,
  Repeat,
  ClipboardList,
  FileSignature,
  ReceiptText,
  Wallet,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const CONTENT_WRITERS: AudiencePageConfig = {
  slug: 'content-writers',
  path: '/for/content-writers',
  audience: 'Content writers',
  metaTitle: 'Freelance Writer Client Management Software — Clienter',
  metaDescription:
    'Freelance writer client management made simple — track pitches, pieces, deadlines, and invoices in one workspace built for India. Start free today.',
  keywords: [
    'freelance writer client management',
    'content writer invoicing',
    'managing writing clients',
    'freelance writing business',
    'writer client management software India',
  ],
  ogTitle: 'Freelance Writer Client Management — Clienter',
  ogDescription:
    'Keep every writing client, brief, deadline, and invoice in one calm workspace. Built for freelance content writers. Start free.',
  breadcrumbLabel: 'For Content Writers',
  eyebrow: 'For content writers',
  h1: 'Freelance writer client management in one calm',
  h1Highlight: 'workspace',
  subheading:
    'Writing freelance is rarely one big deliverable — it is a dozen small pieces due across five clients, each with its own brief, deadline, and payment. Clienter keeps every client, piece, and invoice straight so nothing gets written twice and nothing goes unbilled.',
  intro: {
    heading: 'The system a busy writer actually needs',
    body: [
      'Freelance writer client management is a different beast from most freelancing. Instead of one large project, you are juggling many small ones at once — a blog post here, three product descriptions there, a newsletter due Friday, a landing page in revisions — spread across several clients who all think they are your only one. The writing itself lives in Google Docs; the problem is everything around it. Which piece is due when? Who approved which draft? Who still owes you for last month? Clienter gives you one place to hold all of it.',
      'Most writers stitch this together from a to-do app, a spreadsheet of rates, an inbox full of drafts waiting on feedback, and their own memory. It holds up until a piece slips, a client “forgets” to approve for three weeks, or you realise you invoiced for four articles but delivered six. The admin of running a freelance writing business quietly eats the hours you meant to spend writing — and the money you meant to earn.',
      'Clienter is built for the Indian reality of that business: invoices and quotations in rupees with GST where you need it, retainers for your regular content clients, and payment tracking that fits how UPI and bank transfers actually arrive. It does not write for you or replace your docs — it manages the clients, the pieces, the approvals, and the money around the writing, so the business side stops living in your head.',
    ],
  },
  pains: {
    heading: 'The admin that steals your writing hours',
    sub: 'The client-side juggling that has nothing to do with the words.',
    items: [
      {
        title: 'Too many small pieces to track',
        desc: 'A dozen live pieces across five clients — each at a different stage — tracked across sticky notes, chats, and memory until one quietly slips past its deadline.',
      },
      {
        title: 'Word count and scope that keep creeping',
        desc: 'An 800-word brief becomes 1,500 words with “a bit more research” and two extra rounds — all for the original rate, because nothing pinned the scope down.',
      },
      {
        title: 'Drafts stuck waiting on approval',
        desc: 'You send a piece and it sits in an inbox for weeks. Without a clear record, chasing sign-off feels awkward and the payment that follows it keeps sliding.',
      },
      {
        title: 'Retainers re-invoiced by hand every month',
        desc: 'Your regular content clients need the same invoice on the same date monthly, and rebuilding it each time is dull, error-prone work you keep forgetting.',
      },
      {
        title: 'No clear picture of who has paid',
        desc: 'With many small invoices going out, it is genuinely hard to know which pieces were paid, which are pending, and what you actually earned this month.',
      },
    ],
  },
  workflow: {
    heading: 'A writing gig, pitch to payment',
    sub: 'How the pieces flow through Clienter without living in your inbox.',
    steps: [
      {
        title: '1. Capture the enquiry as a lead',
        desc: 'A pitch reply or inbound enquiry lands in your pipeline. You track it through “talking”, “quoted”, and “won” so warm leads never go cold in a forgotten thread.',
      },
      {
        title: '2. Onboard and pin the scope',
        desc: 'An intake form captures the tone, audience, keywords, and word count up front, and a proposal with e-signature fixes the rate and how many edits are included.',
      },
      {
        title: '3. Track every piece on a board',
        desc: 'Each article becomes a card on a project board that moves from brief to draft to review to approved to published — so you always know what is where.',
      },
      {
        title: '4. Manage revisions and approvals',
        desc: 'Log edit rounds and sign-off against each piece. Extra rounds beyond the agreed scope, or a killed piece, are recorded so they can be billed rather than absorbed.',
      },
      {
        title: '5. Invoice, per piece or on retainer',
        desc: 'Raise a GST-ready invoice for a single article or set up a monthly retainer that bills on repeat, then track the payment and collect a verified review.',
      },
    ],
  },
  features: {
    heading: 'Every client and piece, in one place',
    sub: 'The features that replace your spreadsheet-and-inbox stack.',
    items: [
      {
        icon: FolderKanban,
        title: 'Piece tracking boards',
        desc: 'Every article as a card — brief, draft, review, approved, published — so nothing due next week slips your mind.',
      },
      {
        icon: Repeat,
        title: 'Retainer projects',
        desc: 'Set up monthly content retainers for your regular clients and bill them on repeat without rebuilding the invoice.',
      },
      {
        icon: ClipboardList,
        title: 'Writer brief forms',
        desc: 'An intake form captures tone, audience, keywords, and word count before you write a single line.',
      },
      {
        icon: FileSignature,
        title: 'Proposals with e-signature',
        desc: 'Fix the rate, the word count, and the number of edits in a signed proposal so scope stops creeping.',
      },
      {
        icon: ReceiptText,
        title: 'GST invoices & quotations',
        desc: 'Branded, GST-ready invoices in rupees, per piece or per month, exported to PDF in a minute.',
      },
      {
        icon: Wallet,
        title: 'Payments & profit',
        desc: 'See which pieces are paid, which are outstanding, and what you really earned this month.',
      },
    ],
  },
  compare: {
    heading: 'Scattered writing admin vs one workspace',
    sub: 'What changes when the pieces stop living in your head.',
    old: [
      'A dozen pieces tracked across sticky notes and chat',
      'Scope creeping from 800 to 1,500 words for the same fee',
      'Drafts lost in an inbox, waiting weeks on approval',
      'Retainer clients invoiced by hand every single month',
      'No idea which of last month’s pieces were actually paid',
    ],
    calm: [
      'Every piece on one board with its brief and status',
      'Rate, word count, and edits fixed in a signed proposal',
      'Approvals tracked against each piece in one place',
      'Retainers set up once and invoiced on repeat',
      'Paid, pending, and overdue visible on a dashboard',
    ],
  },
  pricing: {
    heading: 'Priced for a writer, not a content agency',
    body: [
      'Clienter’s Free plan suits a writer just building a client base — up to 5 clients and 10 projects, the full leads and CRM pipeline, proposals, invoicing, and meetings, free forever with no credit card. A handy trick when you write many small pieces: group one client’s articles under a single project and give each piece its own task, so the free limits stretch further while you get organised.',
      'When you are writing for more clients than that, Pro is a launch-priced ₹199/month (up to 30 clients, 60 projects, and 5 team members) and unlocks the white-label client portal, plus room for retainers with several regular publications. Ultra at ₹799/month removes the limits entirely for a full-time writing business or a small content team. No per-seat enterprise pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Content writer FAQs',
  faqs: [
    {
      q: 'What is the best tool for freelance writer client management?',
      a: 'The best tool for freelance writer client management keeps your many small pieces, clients, deadlines, and invoices in one place rather than scattered across docs and chats. Clienter does that with piece-tracking boards, retainers, proposals, and GST invoices in one workspace — starting free, with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'How do I manage multiple writing clients at once?',
      a: 'Give each client their own profile and track their pieces on a board that moves from brief to draft to review to approved to published, so you always know what is due and for whom. Clienter also keeps every client’s rate, brief, and payment history in one place, so managing five writing clients feels like managing one.',
    },
    {
      q: 'Can I invoice per article or per month as a content writer?',
      a: 'Both. Clienter lets you raise a GST-ready invoice for a single piece, or set up a monthly retainer for a regular client that bills on repeat. Invoices are in rupees, can include your GSTIN and CGST/SGST or IGST, and export to a clean branded PDF — so content writer invoicing stops being a monthly chore.',
    },
    {
      q: 'How do I stop scope creep on writing projects?',
      a: 'Pin the scope before you start: a proposal with e-signature that fixes the word count, the rate, and the number of edits included. When a client asks for a much longer piece or a third round of changes, Clienter has it logged against the project, so the extra work becomes a billable line rather than free labour.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Track every piece from brief to published.' },
    { href: '/features/invoicing', label: 'Invoicing & Quotations', desc: 'Per-piece and monthly retainer invoicing.' },
    { href: '/for/freelancers', label: 'For Freelancers', desc: 'Run the whole freelance business in one place.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your writing business without losing a piece',
  ctaSubtitle: 'Create your free account and bring every client, deadline, and invoice into one place today.',
}
