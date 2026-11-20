import { FileSignature, Send, PenLine, Handshake, FileCheck } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const CONTRACTS: FeaturePageConfig = {
  slug: 'contracts',
  path: '/features/contracts',
  navLabel: 'Contracts & E-Signatures',
  navDescription: 'Send contracts for e-signature and store signed copies by client',
  icon: FileSignature,
  metaTitle: 'Free Contract Management & E-Signatures',
  metaDescription:
    'How contract management works in Clienter: create a contract, send it for e-signature via a link, and store signed copies against the client — no printing or scanning.',
  keywords: [
    'free contract management',
    'e-signature software',
    'contract software for freelancers',
    'digital contract signing',
    'send contracts for signature',
    'agency contracts',
  ],
  eyebrow: 'Contracts & E-Signatures',
  h1: 'Get contracts signed without the',
  h1Highlight: 'paperwork',
  subheading:
    'Create a contract, send it for e-signature as a shareable link, and keep every signed copy filed against the client — so your clients sign digitally and you skip the print-sign-scan ritual entirely.',
  intro: {
    heading: 'What is contract management in Clienter?',
    body: [
      'Contract management lets you create a contract, send it for signature, and keep the signed document — all in one place. Your client signs digitally, either from the client portal they already use or from a shareable link you send, so there’s nothing to print, scan, or post back and forth. The agreement is done the same day instead of waiting on a courier.',
      'Every signed copy is stored against the client it belongs to, so opening that client shows the contract alongside their projects, quotes, and invoices. When a question comes up about what you agreed, the signed document is right there — not buried in an email thread or a folder on someone’s laptop. The paper trail builds itself as you work.',
    ],
  },
  stepsHeading: 'How to use contract management',
  steps: [
    { title: 'Create the contract', desc: 'Draft your agreement and attach it to the client it’s for, ready to send for signature.' },
    { title: 'Send for signature', desc: 'Share a signing link — or surface it in the client’s portal — so they can sign from any device.' },
    { title: 'Client signs digitally', desc: 'Your client signs online in their browser, with no printing, scanning, or app to download.' },
    { title: 'Keep the signed copy', desc: 'The signed document is stored against the client automatically, so it’s always easy to find.' },
  ],
  helpsHeading: 'How contract management helps you',
  helps: [
    { icon: Send, title: 'Signed the same day', desc: 'A signing link beats print-sign-scan, so agreements close in hours instead of dragging for a week.' },
    { icon: PenLine, title: 'Sign from anywhere', desc: 'Clients sign on a phone or laptop in their browser — no account, no app, no friction.' },
    { icon: FileCheck, title: 'Nothing goes missing', desc: 'Every signed copy is filed against the client, so you can pull up what you agreed in seconds.' },
    { icon: Handshake, title: 'Look professional', desc: 'A clean digital signing flow makes a solo freelancer feel as buttoned-up as a full agency.' },
  ],
  whereHeading: 'Where contract management fits',
  where: [
    { title: 'Freelancers who skip contracts', desc: 'Avoiding agreements because printing and scanning feels like more hassle than the job is worth.' },
    { title: 'Agencies onboarding clients', desc: 'Needing a signed scope or SOW before work starts, without slowing the kickoff down.' },
    { title: 'Document-heavy relationships', desc: 'Ongoing clients with NDAs, renewals, and amendments that all need a clear signed record.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Create contracts for any client',
    'Send for e-signature via a shareable link',
    'Signing from the client portal',
    'Digital signing — no printing or scanning',
    'Signed copies stored against the client',
    'Full history alongside projects & invoices',
  ],
  faqHeading: 'Contract management FAQs',
  faqs: [
    { q: 'How do clients sign the contract?', a: 'Digitally. You send a shareable signing link, or surface the contract in the client portal they already use, and they sign in their browser from any device — no printing, scanning, or app to install.' },
    { q: 'Where are signed contracts stored?', a: 'Every signed copy is filed automatically against the client it belongs to, so it sits alongside their projects, quotes, and invoices. When you need to check what you agreed, the document is one click away.' },
    { q: 'Is contract management free?', a: 'Yes — creating contracts and sending them for e-signature is free on every plan, including Free. Limits only ever apply to volume as you scale, never to the features themselves.' },
  ],
  ctaTitle: 'Get your next contract signed today',
  ctaSubtitle: 'Start free and send a contract for e-signature in minutes. No credit card required.',
}
