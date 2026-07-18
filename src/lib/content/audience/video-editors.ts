import {
  FileSignature,
  CreditCard,
  FolderKanban,
  Repeat,
  ReceiptText,
  CalendarClock,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const VIDEO_EDITORS: AudiencePageConfig = {
  slug: 'video-editors',
  path: '/for/video-editors',
  audience: 'Video editors',
  metaTitle: 'Client Management for Video Editors (Free to Start)',
  metaDescription:
    'Client management for video editors — track projects, revision rounds, milestone payments, and GST invoices in one place. Start free, no card needed.',
  keywords: [
    'client management for video editors',
    'video editing invoicing',
    'managing video projects',
    'video editor freelance business',
    'video editor client management India',
  ],
  ogTitle: 'Client Management for Video Editors — Clienter',
  ogDescription:
    'Run every client, project timeline, revision round, and milestone invoice in one workspace built for video editors. Start free.',
  breadcrumbLabel: 'For Video Editors',
  eyebrow: 'For video editors',
  h1: 'Client management for video editors, from brief to',
  h1Highlight: 'final cut',
  subheading:
    'Editing is heavy in every sense — big files, long timelines, and revision cycles that run for weeks. Clienter runs the client, the schedule, the sign-offs, and the milestone payments around your edit, while your footage stays in the drive and review tool where it belongs.',
  intro: {
    heading: 'The workspace behind the edit',
    body: [
      'Client management for video editors has to keep pace with a workflow that is demanding at every stage: large files, multi-week timelines, and revision cycles that can reach version fourteen before a client is happy. You are not just cutting footage — you are managing feedback rounds, milestone payments, and clients who want “just one more version” or a fresh vertical cut for reels after they already signed off. Your editing tools handle the craft. Clienter handles everything around it.',
      'Most editors run that side of the business on memory and messages: the brief in an email, feedback in WhatsApp voice notes, the payment plan “agreed” verbally, and deliverables handed over before the final transfer clears. It holds together until it does not — until you deliver the finished film before full payment, throw in three extra formats for free, or lose track of who paid which milestone on a two-month project. That is time and money leaking out of a business that should be profitable.',
      'To be clear about what Clienter is: it is not a place to upload footage and it is not a Frame.io-style review player. Keep your files in Drive or your review tool and keep editing in Premiere, DaVinci, or Final Cut. Clienter wraps around them, managing the client, the project timeline, the revision sign-offs, and the money — with invoices in rupees and GST where you need it, milestone billing that fits how big edits get paid, and pricing built for a freelance editor, not a post house.',
    ],
  },
  pains: {
    heading: 'The part of editing that drains the profit',
    sub: 'The client-side load that has nothing to do with the timeline in your NLE.',
    items: [
      {
        title: 'Revision cycles that run to version fourteen',
        desc: '“Can we try a different track, re-cut the intro, tighten the middle?” Endless rounds pile up with no agreed limit and no record of where the brief started.',
      },
      {
        title: 'Extra formats and cuts given away free',
        desc: 'A 16:9 master turns into vertical reels, shorts, and a square cut for ads — real extra work that slips in unbilled because nothing tracked the scope.',
      },
      {
        title: 'Milestone payments tracked in your head',
        desc: 'Long projects need money up front and along the way, but 50% deposits and part-payments live in memory until you genuinely cannot recall who paid what.',
      },
      {
        title: 'Final files handed over before payment clears',
        desc: 'The client wants the deliverable now and the transfer “is coming”. Without a process, you release the finished cut and lose all leverage on the balance.',
      },
      {
        title: 'Month-long projects with no visible timeline',
        desc: 'A client goes quiet for two weeks mid-edit, deadlines drift, and you have no shared view of where the project actually stands or what is owed.',
      },
    ],
  },
  workflow: {
    heading: 'A video project, brief to delivery',
    sub: 'How a long edit flows through Clienter without living in voice notes.',
    steps: [
      {
        title: '1. Capture the brief as a lead',
        desc: 'A new edit enquiry lands in your pipeline. You track it through “talking”, “quoted”, and “won” so a promising project never gets lost between messages.',
      },
      {
        title: '2. Sign off the scope and payment plan',
        desc: 'A proposal with e-signature spells out the deliverables, the formats, how many revision rounds are included, and the milestone schedule — like 50% upfront before you import a frame.',
      },
      {
        title: '3. Build the project timeline',
        desc: 'Turn it into a Kanban project with milestones — assembly, rough cut, revisions, final — each with a deadline and budget, so both sides can see exactly where the edit stands.',
      },
      {
        title: '4. Track revisions and extra cuts',
        desc: 'Log every re-cut and each extra format against the project. Rounds beyond the agreed count, and that surprise vertical reel, become billable lines rather than free work.',
      },
      {
        title: '5. Bill milestones, then deliver',
        desc: 'Raise a GST-ready invoice at each milestone, track partial payments to the rupee, and release the final files once the balance clears — then collect a verified review.',
      },
    ],
  },
  features: {
    heading: 'Everything around the edit, in one tool',
    sub: 'The features that replace your inbox, chat, and mental math.',
    items: [
      {
        icon: FileSignature,
        title: 'Proposals with e-signature',
        desc: 'Lock the deliverables, formats, revision count, and milestone payment schedule in a signed proposal before you start.',
      },
      {
        icon: CreditCard,
        title: 'Milestone payments',
        desc: 'Take 50% upfront, bill by milestone, and track every partial payment and outstanding balance to the rupee.',
      },
      {
        icon: FolderKanban,
        title: 'Video project boards',
        desc: 'Kanban milestones — assembly, rough cut, revisions, final — each with a deadline and budget you can share.',
      },
      {
        icon: Repeat,
        title: 'Revision & version tracking',
        desc: 'Log every re-cut and extra format so version fourteen and that vertical reel actually get billed.',
      },
      {
        icon: ReceiptText,
        title: 'GST invoices & quotations',
        desc: 'Branded, GST-ready invoices and quotes in rupees, raised at each milestone and exported to PDF.',
      },
      {
        icon: CalendarClock,
        title: 'Meetings & review calls',
        desc: 'Google Calendar sync and auto Meet links for feedback calls, with reminders so nothing stalls.',
      },
    ],
  },
  compare: {
    heading: 'The scattered edit workflow vs one workspace',
    sub: 'What changes when the business stops living in voice notes.',
    old: [
      'Version fourteen delivered before a rupee of final payment',
      'Extra formats and re-cuts thrown in for free',
      'Milestone deposits and part-payments tracked in your head',
      'A month-long edit with no timeline anyone can see',
      'Invoices typed up in Word at the very end, if at all',
    ],
    calm: [
      'Final files released only when the invoice is paid',
      'Every re-cut and extra format logged and billed',
      '50% upfront and milestones tracked to the rupee',
      'A shared project board with milestones and deadlines',
      'GST invoices raised at each milestone in a click',
    ],
  },
  pricing: {
    heading: 'Priced for an editor, not a post house',
    body: [
      'Clienter’s Free plan works well for an editor with a handful of clients — up to 5 clients and 10 projects, the full leads and CRM pipeline, proposals, invoicing, and meetings, free forever with no credit card. A big edit fits neatly as one project with milestones as tasks, so even long jobs sit comfortably within the free limits while you get organised.',
      'As you take on more clients, Pro is a launch-priced ₹199/month (up to 30 clients, 60 projects, and 5 team members) and unlocks the white-label client portal — a branded space where clients see project status and approvals instead of chasing you on WhatsApp. It also fits editors working with a small team of assistants or colourists. Ultra at ₹799/month removes the limits entirely for a growing studio. Remember, your footage still lives in your own storage — Clienter runs the business around it.',
    ],
  },
  faqHeading: 'Video editor FAQs',
  faqs: [
    {
      q: 'What is the best client management for video editors?',
      a: 'The best client management for video editors handles the long, payment-heavy side of the work — proposals, project timelines, revision rounds, milestone invoices, and payment tracking — without pretending to store your footage. Clienter does exactly that in one workspace, starting free, with Pro at a launch price of ₹199/month that unlocks a white-label client portal.',
    },
    {
      q: 'How do I handle milestone payments for video projects?',
      a: 'Agree the schedule up front in a signed proposal — for example 50% before you start and the balance on delivery — then raise a GST-ready invoice at each milestone. Clienter tracks every partial payment and the outstanding balance to the rupee, so managing video projects that run for weeks never leaves you guessing who has paid what.',
    },
    {
      q: 'Can I invoice for video editing with GST?',
      a: 'Yes. Clienter lets you add your GSTIN and the client’s, apply CGST/SGST or IGST, and export a branded PDF invoice in rupees — per milestone or for the whole edit. If you are not registered for GST, a simple non-GST invoice works too, so video editing invoicing stays clean either way.',
    },
    {
      q: 'Does Clienter store my video files or replace Frame.io?',
      a: 'No. Clienter does not host your large footage and it is not a review-and-approve video player — keep using Drive, your review tool, and your editor for those. Clienter manages the client, the project timeline, the revision sign-offs, the milestone invoices, and the payments around the edit, which is the part your editing tools were never built to handle.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Project boards with milestones and deadlines.' },
    { href: '/features/invoicing', label: 'Invoicing & Quotations', desc: 'Milestone and GST-ready invoicing in rupees.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A white-label space for status and approvals.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your editing business from brief to final payment',
  ctaSubtitle: 'Create your free account and bring your clients, projects, and milestone invoices into one place today.',
}
