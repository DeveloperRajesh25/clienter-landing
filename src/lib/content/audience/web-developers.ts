import {
  Users,
  FolderKanban,
  FileSignature,
  ReceiptText,
  Repeat,
  Wallet,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const WEB_DEVELOPERS: AudiencePageConfig = {
  slug: 'web-developers',
  path: '/for/web-developers',
  audience: 'Web developers',
  metaTitle: 'CRM for Freelance Web Developers, Clients & Invoices',
  metaDescription:
    'A CRM for freelance web developers: keep clients, projects, feedback, and GST invoices in one place so scope creep stops and you get paid. Start free today.',
  keywords: [
    'CRM for freelance web developers',
    'freelance web developer client management',
    'web developer project management',
    'invoicing for web developers',
    'web developer CRM India',
  ],
  ogTitle: 'CRM for Freelance Web Developers — Clienter',
  ogDescription:
    'Clients, build stages, revision rounds, and GST invoices in one workspace built for freelance web developers. Start free.',
  breadcrumbLabel: 'For Web Developers',
  eyebrow: 'For web developers',
  h1: 'A CRM for freelance web developers, from first brief to final',
  h1Highlight: 'invoice',
  subheading:
    'You were hired to build websites, not to chase revision feedback across five WhatsApp threads or hunt down the final payment before you hand over the login. Clienter keeps every client, project, and invoice in one place so the code is the only hard part.',
  intro: {
    heading: 'Software that runs the business around the build',
    body: [
      'Freelance web development is never just the development. For every hour in your editor there’s another spent scoping the job, sending staging links, collecting feedback, quoting the ‘small extra’, raising an invoice, and reminding a client that the site is ready the moment they clear the balance. A CRM for freelance web developers exists to hold all of that — the client relationship and the money around the code — so it stops living in your inbox, your WhatsApp, and your head.',
      'Most developers cobble this together: a Trello board for one client, a Google Doc of scope for another, a Word invoice template, and a mental note about who still owes what. It works until you’re running four builds at once and a client asks ‘did we agree that change was included?’ — and you have no single place to check. Clienter replaces the scattered stack with one workspace where every client profile, project board, proposal, and invoice is connected.',
      'It’s built for how Indian devs actually get paid, too — GST-ready invoices in rupees, payment tracking that matches UPI and bank transfers, and pricing that fits a freelance income instead of an enterprise procurement team. Whether you build in WordPress, Webflow, or a custom stack, the admin around the work is the same — and this is where it goes.',
    ],
  },
  pains: {
    heading: 'The work that isn’t the work',
    sub: 'Everything around the build that quietly eats your margin and your evenings.',
    items: [
      {
        title: '‘Just one more change’',
        desc: 'The build was signed off, then came ten ‘tiny’ tweaks that were never quoted. With no agreed scope on record, saying no feels awkward and saying yes eats your margin.',
      },
      {
        title: 'Feedback scattered across channels',
        desc: 'The client’s revisions arrive as WhatsApp voice notes, email screenshots, and ‘the header looks off’ texts. You piece the list together yourself and inevitably miss one.',
      },
      {
        title: 'Chasing the final payment',
        desc: 'The site is ready but the balance isn’t paid, so you’re stuck holding the launch hostage over follow-up messages instead of a system that tracks who owes what.',
      },
      {
        title: 'Retainers and hosting never billed',
        desc: 'Maintenance, hosting renewals, and monthly care plans are easy money — until you forget to invoice them because nothing is tracking the recurring work.',
      },
      {
        title: 'Every project at a different stage',
        desc: 'One site is in discovery, one in dev, one waiting on client content, one in QA. Without a board across all of them, something always stalls without you noticing.',
      },
    ],
  },
  workflow: {
    heading: 'A build, start to finish, in one place',
    sub: 'How a typical web project flows through Clienter.',
    steps: [
      {
        title: '1. Log the enquiry as a lead',
        desc: 'A ‘can you build us a site?’ message becomes a lead in your pipeline. Track it through discovery, quoted, and won so warm enquiries never go cold in your inbox.',
      },
      {
        title: '2. Send a proposal with clear scope',
        desc: 'Turn the brief into a proposal that spells out exactly what’s included and what counts as extra, then collect an e-signature — so ‘one more change’ has an agreed line to point back to.',
      },
      {
        title: '3. Build on a project board',
        desc: 'Won work becomes a project with a Kanban board, deadline, and budget. Move tasks from design to dev to QA to launch, and keep client feedback attached to the project instead of lost in chat.',
      },
      {
        title: '4. Bill milestones and retainers',
        desc: 'Raise a GST invoice for the deposit, the balance on launch, and a recurring one for hosting or maintenance. Payment status sits next to the project so you know before you hand over credentials.',
      },
      {
        title: '5. Turn launch into the next lead',
        desc: 'Collect a verified review when the site goes live, and keep the client on file for the redesign, the new feature, or the referral that comes next.',
      },
    ],
  },
  features: {
    heading: 'The whole client side of your dev work',
    sub: 'The features that replace your board-and-WhatsApp-and-Word stack.',
    items: [
      { icon: Users, title: 'Client profiles', desc: 'Every client’s brief, contacts, files, and full history in one tidy profile.' },
      { icon: FolderKanban, title: 'Project boards', desc: 'Kanban boards with deadlines and budgets to track each build from discovery to launch.' },
      { icon: FileSignature, title: 'Proposals & scope', desc: 'E-signed proposals that pin down what’s included — your defence against scope creep.' },
      { icon: ReceiptText, title: 'GST invoices', desc: 'Deposit, balance, and recurring invoices in rupees with GST, exported as clean PDFs.' },
      { icon: Repeat, title: 'Retainers', desc: 'Recurring projects for hosting, maintenance, and care plans so nothing is billed late.' },
      { icon: Wallet, title: 'Payments & profit', desc: 'See what’s paid, what’s outstanding, and your real profit per project at a glance.' },
    ],
  },
  compare: {
    heading: 'The scattered dev stack vs one workspace',
    sub: 'What changes when the admin around your builds lives in one place.',
    old: [
      'Scope agreed verbally, then argued over later',
      'Revision feedback spread across WhatsApp and email',
      'Final payment chased with awkward reminder texts',
      'Hosting and maintenance forgotten at invoice time',
      'Four builds tracked in four different tools',
    ],
    calm: [
      'Scope e-signed up front and easy to point back to',
      'Feedback and tasks attached to the right project',
      'Outstanding balances tracked with automatic reminders',
      'Recurring retainers invoiced on schedule, every time',
      'Every build on one board, from discovery to launch',
    ],
  },
  pricing: {
    heading: 'Priced for a solo dev, not a procurement team',
    body: [
      'Clienter’s Free plan runs your first builds properly — up to 5 clients and 10 projects, the full lead pipeline, proposals, GST invoicing, and meetings, free forever with no card required. For a developer taking on their first few paying clients, it replaces the spreadsheet without costing a rupee.',
      'When you’re juggling more work, Pro is a launch-priced ₹199/month (up to 30 clients, 60 projects, and 5 team members) and unlocks the white-label client portal — handy when you bring in a designer or a second dev. Ultra at ₹799/month removes the limits entirely for a growing studio. No per-seat pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Web developer FAQs',
  faqs: [
    {
      q: 'What is the best CRM for freelance web developers?',
      a: 'The best CRM for freelance web developers does more than store contacts — it ties each client to their project board, proposal, invoices, and payment status so nothing about a build lives in a separate app. Clienter combines client management, project boards, e-signed proposals, and GST invoicing in one workspace, starting free with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'How do I stop scope creep on web projects?',
      a: 'The fix is putting scope in writing before the work starts and having something to point back to when the “small extra” requests arrive. Clienter’s proposals let you list exactly what’s included and collect an e-signature, so anything beyond it is a clear, chargeable change rather than an awkward conversation.',
    },
    {
      q: 'Can I send GST invoices for web development work?',
      a: 'Yes. Add your GSTIN and the client’s, apply CGST/SGST or IGST, and export a branded PDF — for deposits, launch balances, or recurring hosting and maintenance. If you aren’t GST-registered, you can raise a simple non-GST invoice instead.',
    },
    {
      q: 'How does invoicing for web developers work with retainers?',
      a: 'Recurring work like hosting, maintenance, and monthly care plans can be set up as retainer projects so the invoice goes out on schedule instead of whenever you remember. Payment status sits next to the project, so you always know which clients are current before you renew or hand over access.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Kanban boards, deadlines, and budgets for every build.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'GST invoices, quotations, and payment tracking.' },
    { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'The lead-and-client pipeline, explained in depth.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Build the sites, not the spreadsheets',
  ctaSubtitle: 'Create your free account and bring every client, project, and invoice into one place today.',
}
