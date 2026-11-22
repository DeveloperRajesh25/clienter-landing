import {
  MessageSquare,
  FolderKanban,
  ListChecks,
  ReceiptText,
  ShieldCheck,
  Clock,
  FileSignature,
  LayoutDashboard,
  Users,
  BadgeCheck,
  Zap,
  Layers,
} from 'lucide-react'
import type { SeoLandingConfig } from '@/lib/seo-pages'

/**
 * Niche commercial term: a client portal specifically for website and software
 * clients — i.e. the people a web studio hands a build to. Kept distinct from
 * /features/client-portal, which describes the feature inside the product; this
 * page argues the use case for web agencies and their non-technical clients.
 */
export const CLIENT_PORTAL_FOR_WEB_DESIGN_CLIENTS: SeoLandingConfig = {
  path: '/client-portal-for-web-design-clients',
  metaTitle: 'Client Portal for Web Design & Development Clients',
  metaDescription:
    'Give every website client a branded portal showing project progress, what you’re waiting on, approvals and invoices — and stop writing status updates. Free to start.',
  keywords: [
    'client portal for web design clients',
    'client portal for web developers',
    'website project client portal',
    'branded client portal software',
    'client portal for agencies',
    'web design client dashboard',
    'project portal for clients',
    'client portal with invoices',
    'web development client portal',
    'free client portal software',
  ],
  ogTitle: 'Client Portal for Web Design & Development Clients — Clienter',
  ogDescription:
    'A branded portal where website clients follow progress, send what the build is waiting on, approve work and read invoices — without emailing your developers.',
  breadcrumbLabel: 'Client Portal for Web Design Clients',
  eyebrow: 'Client portal for website clients',
  h1: 'Stop writing status updates. Give clients a',
  h1Highlight: 'portal',
  subheading:
    'Non-technical clients cannot read your issue tracker and should not be in your Slack. A branded portal gives each website client one place to see where their build is, send what you’re waiting on, approve work and read their invoices — so “any update?” stops arriving on a Friday evening.',
  intro: {
    heading: 'Why website clients ask for updates',
    body: [
      'They are not being difficult. A client who commissioned a website has spent a meaningful amount of money on something they cannot see being made, cannot evaluate while it is in progress, and have no way to check on. Silence in that situation feels like risk, so they do the only thing available: they message you. Then you stop building, reconstruct the status from three places, and write a paragraph that reassures them for about a week.',
      'The cost is larger than the interruption. Status requests pull your most expensive people out of deep work, they cluster at the worst moments, and they make projects feel slower to the client than they actually are — because the only evidence of progress they ever receive is whatever you happened to write that day.',
      'A client portal replaces all of that with a page the client can open themselves. Their project, its current stage, what is in progress, what it is waiting on from them, what they have approved, and what they owe. The update is always there, always current, and costs nobody anything to produce.',
    ],
  },
  benefits: {
    heading: 'What a portal actually changes',
    sub: 'Less interruption for you, more confidence for them, and a record for both.',
    items: [
      {
        icon: Clock,
        title: 'Status questions mostly stop',
        desc: 'The answer is always available, so the Friday “any update?” message largely disappears from your week.',
      },
      {
        icon: Zap,
        title: 'Client content arrives sooner',
        desc: 'When a client can see that their own missing copy is the thing holding their launch, it stops being an abstraction and starts arriving.',
      },
      {
        icon: ShieldCheck,
        title: 'Delays land with their real owner',
        desc: 'Outstanding items are listed with the date you asked, so a stalled fortnight is visibly theirs rather than ambiguously yours.',
      },
      {
        icon: BadgeCheck,
        title: 'You look like a bigger operation',
        desc: 'A branded portal does more for how a solo developer is perceived than any amount of portfolio polish.',
      },
      {
        icon: ReceiptText,
        title: 'Invoices get seen and paid',
        desc: 'Clients read their invoices in the same place they check progress, rather than finding them in a month-old email thread.',
      },
      {
        icon: Layers,
        title: 'One record of what was agreed',
        desc: 'Approvals, requests and shared files with dates attached — the trail that settles a question in month three.',
      },
    ],
  },
  capabilities: {
    heading: 'What your clients see',
    sub: 'Readable by a restaurant owner, not just a developer.',
    items: [
      { icon: FolderKanban, title: 'Project progress', desc: 'Their build’s current stage and what is in flight, in plain language rather than ticket IDs.' },
      { icon: ListChecks, title: 'What you’re waiting on', desc: 'Outstanding content, assets, access and decisions, each with the date it was requested.' },
      { icon: FileSignature, title: 'Approvals', desc: 'Designs and stages signed off with a date, so “we agreed this in September” is a fact rather than a claim.' },
      { icon: MessageSquare, title: 'Requests in one queue', desc: 'Clients raise changes and questions where you will see them, instead of across WhatsApp, email and a call.' },
      { icon: ReceiptText, title: 'Invoices & payment status', desc: 'What has been raised, what is paid and what is due, without an email thread.' },
      { icon: Users, title: 'Their own files and documents', desc: 'The proposal, the contract, the handover pack and shared assets in one place.' },
      { icon: LayoutDashboard, title: 'Your branding', desc: 'A portal that carries your name and look, not a generic tool’s.' },
      { icon: ShieldCheck, title: 'Scoped access', desc: 'Each client sees only their own work — never another client’s project, files or figures.' },
    ],
  },
  compare: {
    heading: 'Email and WhatsApp vs a portal',
    sub: 'The same project, from the client’s side and yours.',
    old: [
      '“Any update?” arriving on a Friday evening',
      'Status reconstructed by hand from three places',
      'Outstanding client content mentioned once at kickoff',
      'Approvals buried in a mail thread, undated',
      'Change requests scattered across four channels',
      'Invoices lost under a month of other email',
    ],
    calm: [
      'Progress visible to the client whenever they look',
      'A status that updates itself as the project moves',
      'Outstanding items listed with the date you asked',
      'Dated approvals attached to the project',
      'One request queue, logged against the client',
      'Invoices read in the same place as the progress',
    ],
  },
  faqHeading: 'Client portal FAQs',
  faqs: [
    {
      q: 'What is a client portal for a web design project?',
      a: 'A private, branded page where a website client can see their project’s current stage, what the build is waiting on from them, what they have approved, their shared files and their invoices. It replaces the status updates you would otherwise write by hand, and gives the client a way to check on their investment without interrupting the people building it.',
    },
    {
      q: 'Do clients actually use a portal?',
      a: 'They use it most for the two things they care about: whether their project is moving, and what they owe. Adoption is far higher when the portal is introduced at kickoff as the place their project lives, and when it genuinely holds something useful — outstanding items, approvals and invoices rather than a progress bar.',
    },
    {
      q: 'Can I use a portal instead of a WhatsApp group with the client?',
      a: 'For project work, yes, and it is worth the small amount of early friction. Chat makes every message feel urgent, keeps no searchable record of what was agreed, and mixes requests with conversation. A portal gives requests a queue and approvals a date. Keep chat for genuinely quick conversation if the client prefers it — just make sure anything that changes the project ends up in the portal.',
    },
    {
      q: 'Does each client have separate access?',
      a: 'Yes. Each client sees only their own projects, files, approvals and invoices. Nothing of another client’s work, figures or documents is ever visible, and access is per client rather than shared.',
    },
    {
      q: 'Is the client portal free?',
      a: 'The portal is included on every plan, including the free one. Free covers 3 clients and 5 projects; Pro at $19/month (₹199 in India) covers 20 clients and 40 projects with your own branding on the portal, and Ultra at $39/month (₹799 in India) removes the limits. Nothing about the portal is paywalled — only usage scales.',
    },
    {
      q: 'Will a portal really reduce how much clients chase me?',
      a: 'Substantially, for a specific reason: most chasing is caused by uncertainty rather than impatience. When the answer is permanently available and visibly current, the reason to ask disappears. The larger effect, though, is on client content — seeing their own outstanding items listed with a date typically gets material sent weeks earlier than reminders do.',
    },
  ],
  related: [
    { href: '/features/client-portal', label: 'Client Portal feature', desc: 'How the portal works inside Clienter.' },
    { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'Portals across a studio’s whole client list.' },
    { href: '/blog/what-is-a-client-portal', label: 'What is a client portal?', desc: 'A fuller guide to the idea.' },
    { href: '/blog/how-to-collect-content-from-website-clients', label: 'Getting content from clients', desc: 'The problem a portal solves best.' },
  ],
  ctaTitle: 'Give every client their own portal',
  ctaSubtitle: 'Create your free account and stop writing status updates by hand.',
}
