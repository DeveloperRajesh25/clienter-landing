import {
  Target,
  FileSignature,
  Repeat,
  FolderKanban,
  ReceiptText,
  Handshake,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const CONSULTANTS: AudiencePageConfig = {
  slug: 'consultants',
  path: '/for/consultants',
  audience: 'Consultants',
  metaTitle: 'Consultant Client Management Software (Free to Start)',
  metaDescription:
    'Run your consulting practice in one place — proposals, retainers, engagements, and invoices. Consultant client management software for India. Start free.',
  keywords: [
    'consultant client management software',
    'consulting CRM',
    'managing consulting engagements',
    'retainer consulting',
    'software for consultants',
  ],
  ogTitle: 'Consultant Client Management Software — Clienter',
  ogDescription:
    'Proposals, retainers, engagements, and invoices in one calm workspace built for consultants. Start free.',
  breadcrumbLabel: 'For Consultants',
  eyebrow: 'For consultants',
  h1: 'Consultant client management software that runs the whole',
  h1Highlight: 'engagement',
  subheading:
    'Consulting is the expertise you sell and the practice you have to run around it — a pipeline of prospects, proposals to win, retainers to bill, and several engagements at once. Clienter brings all of it into one place so nothing about a client lives only in your inbox.',
  intro: {
    heading: 'The back office your consulting practice never had',
    body: [
      'As a consultant you sell judgement, but you run a business — and it’s a surprisingly operational one. There’s a pipeline of prospects with long, patient sales cycles; proposals and statements of work to write and win; retainers and project fees to bill on time; and three or four engagements running in parallel, each at a different phase. Most independent consultants track all of this across a CRM they half-use, their inbox, and a folder of Word documents — and things fall between the cracks exactly where money and credibility live.',
      'Consultant client management software brings the whole engagement lifecycle into one place — from the first conversation to the signed proposal to the monthly retainer invoice — so nothing about a client survives only in your email. Instead of rebuilding a proposal from an old file and billing retainers from memory, you get a single workspace where prospects, scope, engagements, and invoices stay connected. Clienter is built for exactly that.',
      'For independent consultants and boutique firms in India it fits the local reality too: GST-ready invoices for retainers and phases, payment tracking that matches how UPI and bank transfers actually arrive, and pricing that suits a practice rather than an enterprise procurement budget.',
    ],
  },
  pains: {
    heading: 'What actually eats a consultant’s week',
    sub: 'The practice around the advice — where deals are won, margin is lost, and credibility is decided.',
    items: [
      {
        title: 'Proposals that decide the deal',
        desc: 'Winning consulting work rests on a sharp proposal or SOW. Rebuilding one from an old Word file for every pitch is slow, inconsistent, and quietly looks it to the client.',
      },
      {
        title: 'Scope creep that eats your margin',
        desc: '“Just one more thing” compounds until you’re delivering twice the engagement for the same fee — with nothing written down to point back to when you push back.',
      },
      {
        title: 'Retainers you bill from memory',
        desc: 'Recurring retainers are your best revenue, but tracking who’s on which retainer, from when, and whether this month’s invoice actually went out is easy to get wrong.',
      },
      {
        title: 'Several engagements, no single view',
        desc: 'Four clients in flight, each at a different phase, and no one place that shows status, deliverables, and what’s owed — so every status update starts with a scramble.',
      },
      {
        title: 'Looking like a firm, solo',
        desc: 'You pitch against name-brand consultancies with portals and process. A lone consultant on email and a PDF can look smaller than the quality of the work deserves.',
      },
    ],
  },
  workflow: {
    heading: 'An engagement, from first call to renewal, in one place',
    sub: 'Here’s how a consulting engagement flows through Clienter.',
    steps: [
      {
        title: '1. Qualify the prospect',
        desc: 'A referral or inbound enquiry enters your pipeline. Move it through “discovery”, “proposal”, and “won” so long sales cycles stay visible instead of going cold in your inbox.',
      },
      {
        title: '2. Win it with a signed proposal',
        desc: 'Send a proposal or SOW with e-signature that spells out scope, phases, and fees. The sign-off becomes the reference point you hold up when scope starts to drift.',
      },
      {
        title: '3. Set up the engagement',
        desc: 'The prospect becomes a client and the engagement a project with phases, milestones, deadlines, and tasks — one place for everything you’re on the hook to deliver.',
      },
      {
        title: '4. Bill by phase or on retainer',
        desc: 'Raise GST-ready invoices per milestone, or run a recurring monthly retainer. Log payments and expenses so profit per engagement is always current, not a year-end estimate.',
      },
      {
        title: '5. Prove the value, keep the client',
        desc: 'Capture a verified review at the close of an engagement and give the client a branded portal throughout — the credibility that renews retainers and earns referrals.',
      },
    ],
  },
  features: {
    heading: 'Every part of the practice, in one tool',
    sub: 'The features that replace your CRM-plus-inbox-plus-Word-folder stack.',
    items: [
      { icon: Target, title: 'Prospect pipeline', desc: 'Track long consulting sales cycles from discovery to won, so no warm lead goes cold.' },
      { icon: FileSignature, title: 'Proposals & SOWs', desc: 'Send scope-defining proposals with e-signature that anchor the engagement.' },
      { icon: Repeat, title: 'Retainer engagements', desc: 'Set up recurring retainer projects and bill them on schedule, every month.' },
      { icon: FolderKanban, title: 'Engagements & phases', desc: 'A board per engagement with phases, milestones, deadlines, and tasks.' },
      { icon: ReceiptText, title: 'Phase & retainer invoices', desc: 'GST-ready invoices by milestone or by month, reusing the client’s details.' },
      { icon: Handshake, title: 'White-label client portal', desc: 'A branded portal that makes a solo practice look like an established firm.' },
    ],
  },
  compare: {
    heading: 'A folder of Word docs vs one practice system',
    sub: 'What changes when the whole engagement stops living in your inbox.',
    old: [
      'Proposals rebuilt from an old file for every pitch',
      'Scope agreed in email and forgotten by delivery',
      'Retainers invoiced from memory each month',
      'Engagement status scattered across inbox and drive',
      'A pitch that looks like one person with a PDF',
    ],
    calm: [
      'Reusable proposals with e-signature and clear scope',
      'Signed scope you can point back to on every change',
      'Retainers tracked and billed on schedule',
      'Every engagement’s status and dues in one view',
      'A branded portal that reads like an established firm',
    ],
  },
  pricing: {
    heading: 'Priced for a practice, not a partnership',
    body: [
      'Clienter’s Free plan is genuinely usable for an independent consultant — up to 5 clients and 10 projects, the full prospect pipeline, proposals, invoicing, and meetings, free forever with no credit card. It’s enough to run your first few engagements properly instead of from a folder of documents.',
      'When the practice grows, Pro is a launch-priced ₹199/month (was ₹499) — up to 30 clients, 60 projects, and 5 team members — and it unlocks the white-label client portal that gives a solo consultant a firm’s polish. Ultra at ₹799/month (was ₹1,999) removes the limits for a growing boutique. No per-seat enterprise pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Consultant FAQs',
  faqs: [
    {
      q: 'What is the best client management software for consultants?',
      a: 'The best consultant client management software fits how consulting actually works — a prospect pipeline, proposals with e-signature, retainer and milestone billing, and several engagements in one view. Clienter combines all of that in one workspace, starting free and with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'Can I manage retainer clients and recurring billing?',
      a: 'Yes. Set up retainer projects for ongoing clients and raise a GST-ready invoice each month, tracking what’s billed and paid so no retainer slips. Fixed-scope work bills the same way by milestone or phase, so both sides of a consulting practice live in one place.',
    },
    {
      q: 'How do I stop scope creep on consulting engagements?',
      a: 'Start from a signed proposal or SOW that defines scope and phases, then run the work as a project with milestones and tasks. When a client asks for more, you have a documented baseline to point back to — and you can quote the extra cleanly instead of absorbing it.',
    },
    {
      q: 'Can I look professional to bigger clients as a solo consultant?',
      a: 'Yes. Clienter’s white-label client portal, branded proposals with e-signature, and verified reviews give an independent consultant the polish of a larger firm — so you compete on credibility and process, not just on expertise.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Run engagements with phases, milestones, and tasks.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'Retainer and milestone invoices, GST-ready.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A white-label portal that gives a solo practice a firm’s polish.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your consulting practice without the chaos',
  ctaSubtitle: 'Create your free account and bring your prospects, engagements, and retainers into one place today.',
}
