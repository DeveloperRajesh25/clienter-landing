import {
  FileSignature,
  Repeat,
  FolderKanban,
  ClipboardList,
  ReceiptText,
  Wallet,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const GRAPHIC_DESIGNERS: AudiencePageConfig = {
  slug: 'graphic-designers',
  path: '/for/graphic-designers',
  audience: 'Graphic designers',
  metaTitle: 'Client Management Software for Graphic Designers — Clienter',
  metaDescription:
    'Client management software for graphic designers — track projects, tame revisions, and send GST invoices in one place. Start free, no card needed.',
  keywords: [
    'client management software for graphic designers',
    'graphic designer invoicing',
    'design project management',
    'managing design revisions',
    'client management for designers India',
  ],
  ogTitle: 'Client Management Software for Graphic Designers — Clienter',
  ogDescription:
    'Run every client, project, revision round, and invoice in one calm workspace built for graphic designers. Start free.',
  breadcrumbLabel: 'For Graphic Designers',
  eyebrow: 'For graphic designers',
  h1: 'Client management software for graphic',
  h1Highlight: 'designers',
  subheading:
    'Design work is never quite “done” until someone signs off — and until then it lives in a mess of WhatsApp feedback, Drive links, and unbilled “can you just change…” rounds. Clienter puts every client, project, revision, and invoice in one place so the business stops competing with the creative.',
  intro: {
    heading: 'The software behind the design work',
    body: [
      'Client management software for graphic designers has to solve a very specific problem: the work is visual, subjective, and never truly finished until a client says the word. You can design a logo in an afternoon and then spend two weeks on “can we try it in blue?” and “make the icon slightly bigger, no, smaller.” The design tools you already love — Figma, Illustrator, Photoshop — handle the pixels beautifully. What they do not handle is the client, the scope, the revision count, and the money. That is the gap Clienter fills.',
      'Most designers run that side of the business on a patchwork: the brief buried in email, references dropped in WhatsApp, source files in Drive, feedback scattered across three chats, and an invoice rebuilt in Word every month. It works until it does not — until you deliver a fourth round for free, hand over the editable AI file before the final payment lands, or lose track of what a client actually approved. One scattered system quietly costs you time, money, and the look of a professional studio.',
      'Clienter is India-first, so the money side matches how you actually get paid: invoices and quotations in rupees with GST where you need it, payment tracking that fits UPI and bank transfers, and pricing built for a freelance designer rather than an enterprise. To be clear about what it is — Clienter does not store your large design files or do the designing. It wraps around your creative tools, managing the client relationship, the project timeline, the revision sign-offs, and the payments so your design apps can stay just for design.',
    ],
  },
  pains: {
    heading: 'The part of design nobody warns you about',
    sub: 'The client-side chaos that has nothing to do with your actual craft.',
    items: [
      {
        title: 'Revisions that never end',
        desc: 'One vague “can you just try a few options?” turns into round after round over WhatsApp, with no agreed limit and no record of where you started.',
      },
      {
        title: 'Extra rounds you never get paid for',
        desc: 'The scope quietly grows past what you quoted, but because nothing tracks the rounds, the extra work becomes free work you resent later.',
      },
      {
        title: 'Source files handed over too early',
        desc: 'The client asks for the editable AI or PSD before clearing the final invoice — and without a process, you hand it over and lose your leverage.',
      },
      {
        title: 'Feedback and approvals scattered everywhere',
        desc: 'Sign-off lives in email, a comment thread, and a voice note, so you can never point to the moment a client actually approved a version.',
      },
      {
        title: 'Looking like an amateur next to studios',
        desc: 'You are pitching against agencies with proposals, portals, and process, while your quote is a message and your invoice is a hand-typed PDF.',
      },
    ],
  },
  workflow: {
    heading: 'A design project, brief to final files',
    sub: 'How a typical design job flows through Clienter without the WhatsApp chaos.',
    steps: [
      {
        title: '1. Capture the design enquiry',
        desc: 'A new logo, brand, or social-kit enquiry drops into your pipeline as a lead. You move it through “talking”, “quoted”, and “won” so no promising “maybe” quietly vanishes.',
      },
      {
        title: '2. Lock the scope with a signed proposal',
        desc: 'Send a proposal that spells out the deliverables and exactly how many revision rounds are included, and collect an e-signature before you open a single design file.',
      },
      {
        title: '3. Spin up the project and brief',
        desc: 'Turn the client into a profile and the job into a Kanban project — concepts, revisions, final artwork — with a deadline and budget. An intake form collects the brand, references, and specs up front.',
      },
      {
        title: '4. Track revisions and get real sign-off',
        desc: 'Log each round against the project so you can see when you have passed the included rounds. Anything beyond becomes a billable extra, not a favour, and approval is recorded clearly.',
      },
      {
        title: '5. Invoice, get paid, then hand over',
        desc: 'Raise a GST-ready invoice, log the payment when it lands, and release the source files once it clears. Finish by collecting a verified review to win the next client.',
      },
    ],
  },
  features: {
    heading: 'Everything around the design, in one tool',
    sub: 'The features that replace your inbox-Drive-WhatsApp workaround.',
    items: [
      {
        icon: FileSignature,
        title: 'Proposals with e-signature',
        desc: 'Lock the deliverables and the number of revision rounds in a signed proposal before the work starts.',
      },
      {
        icon: Repeat,
        title: 'Revision & approval tracking',
        desc: 'Log every round against the project so extra “just one more tweak” rounds become billable, not free.',
      },
      {
        icon: FolderKanban,
        title: 'Design project boards',
        desc: 'Kanban boards for concepts, revisions, and final artwork, each with a deadline, budget, and tasks.',
      },
      {
        icon: ClipboardList,
        title: 'Client brief forms',
        desc: 'Send an intake form so clients hand over the brand, references, and specs before you start designing.',
      },
      {
        icon: ReceiptText,
        title: 'GST invoices & quotations',
        desc: 'Branded, GST-ready invoices and quotes in rupees, exported to a clean PDF in under a minute.',
      },
      {
        icon: Wallet,
        title: 'Payments & profit',
        desc: 'Track what is paid, what is due, and your real profit across every design client without a spreadsheet.',
      },
    ],
  },
  compare: {
    heading: 'The scattered design stack vs one workspace',
    sub: 'What changes the day you stop running clients out of chat.',
    old: [
      'Revisions requested endlessly over WhatsApp with no limit',
      'Extra rounds delivered for free because nothing tracked them',
      'Source files handed over before the final payment lands',
      'Feedback and sign-off lost across chat, email, and comments',
      'Invoices retyped in Word, hoping the GST is right',
    ],
    calm: [
      'A signed proposal that fixes the included revision rounds',
      'Every extra round logged against the project and billed',
      'Final files released only after the invoice is paid',
      'Every brief, round, and approval living in one project',
      'GST-ready invoices generated straight from client details',
    ],
  },
  pricing: {
    heading: 'Priced for a designer, not a design department',
    body: [
      'Clienter’s Free plan is genuinely usable for a designer just going solo — up to 5 clients and 10 projects, the full leads and CRM pipeline, proposals, invoicing, and meetings, free forever with no credit card. It is enough to run your first branding and design clients properly instead of from a notes app.',
      'When your roster grows, Pro is a launch-priced ₹199/month (up to 30 clients, 60 projects, and 5 team members) and unlocks the white-label client portal — a branded space where concepts and approvals live instead of your personal WhatsApp, so a solo designer looks every bit as established as a studio. Ultra at ₹799/month removes the limits entirely for when you scale into a small design team. No per-seat enterprise pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Graphic designer FAQs',
  faqs: [
    {
      q: 'What is the best client management software for graphic designers?',
      a: 'The best client management software for graphic designers handles everything around the design — clients, project boards, revision rounds, proposals, and GST invoices — without trying to replace your design apps. Clienter does exactly that in one workspace, starting free, with Pro at a launch price of ₹199/month that unlocks a white-label client portal for reviews and approvals.',
    },
    {
      q: 'How do I stop clients asking for endless design revisions?',
      a: 'Fix the number of revision rounds in a proposal and get it e-signed before you start, so “a few more tweaks” has an agreed boundary. In Clienter you log each round against the project, which makes it obvious when a client has passed the included rounds — turning extra revisions into a billable line rather than free work.',
    },
    {
      q: 'Can I send GST invoices for my design work?',
      a: 'Yes. Clienter lets you add your GSTIN and the client’s, apply CGST/SGST or IGST, and export a branded PDF invoice or quotation in rupees. If you are not registered for GST, you can raise a simple non-GST invoice instead — it works either way, and quotes reuse the client’s saved details so there is no re-typing.',
    },
    {
      q: 'Does Clienter store my design files like Figma or Drive?',
      a: 'No — and that is deliberate. Clienter does not host your large source files or do the designing; keep using Figma, Illustrator, Photoshop, and your file storage for that. Clienter manages the client, the project timeline, the revision sign-offs, the invoices, and the payments around your creative work, so the business side finally has a home.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Kanban boards, deadlines, and budgets for design work.' },
    { href: '/features/invoicing', label: 'Invoicing & Quotations', desc: 'GST-ready invoices and quotes in rupees.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A white-label space for reviews and approvals.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your design business without the revision chaos',
  ctaSubtitle: 'Create your free account and bring your clients, projects, and invoices into one place today.',
}
