import { Wand2, Sparkles, Eye, Repeat } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const QUOTATIONS: FeaturePageConfig = {
  slug: 'quotations',
  path: '/features/quotations',
  navLabel: 'AI Quotation Maker',
  navDescription: 'Describe the job and let AI draft a polished, itemised quote',
  icon: Wand2,
  metaTitle: 'AI Quotation Maker — Create Quotes in Seconds',
  metaDescription:
    'How the AI quotation maker works in Clienter: describe the job, let AI draft an itemised quote, edit it, export a PDF, and send a link the client can accept.',
  keywords: [
    'free quotation maker',
    'AI quotation generator',
    'create quotes online',
    'quotation software',
    'proposal maker',
    'quote generator with AI',
  ],
  eyebrow: 'AI Quotation Maker',
  h1: 'Describe the job and get a quote in',
  h1Highlight: 'seconds',
  subheading:
    'Think “Canva for quotes” — tell the AI what the work involves and it drafts a polished, itemised quotation you can edit, turn into a PDF, and send as a link the client opens and accepts.',
  intro: {
    heading: 'What is the AI quotation maker in Clienter?',
    body: [
      'The AI quotation maker is an assistant that writes the first draft of your quote for you. Instead of staring at a blank template, you describe the job in plain words — “a five-page website with hosting and two rounds of revisions” — and the AI breaks it into line items with sensible descriptions and amounts you can adjust. You stay in control; it just does the typing.',
      'Because each quote is connected to the client it belongs to, nothing lives on an island. Edit the draft, export a clean PDF, and send a shareable link the client can open and accept without an account. Once they accept, the quote turns into an invoice in a click — so winning the work and billing for it are the same unbroken flow, not two separate chores.',
    ],
  },
  stepsHeading: 'How to use the AI quotation maker',
  steps: [
    { title: 'Describe the job', desc: 'Tell the AI what the work involves in a sentence or two, and it drafts an itemised quote for you.' },
    { title: 'Edit the draft', desc: 'Tweak line items, rates, and wording until the quote reads exactly the way you want it to.' },
    { title: 'Send a link', desc: 'Share a link the client opens in their browser — or export a branded PDF — with nothing to install.' },
    { title: 'Turn it into an invoice', desc: 'When the client accepts, convert the quote into an invoice in one click, carrying every line across.' },
  ],
  helpsHeading: 'How the AI quotation maker helps you',
  helps: [
    { icon: Sparkles, title: 'Quote while they’re keen', desc: 'A polished quote goes out in minutes, so you reply while the client is still excited instead of days later.' },
    { icon: Wand2, title: 'No blank page', desc: 'Describe the work and the AI drafts the line items — the hardest part of quoting is done for you.' },
    { icon: Eye, title: 'Know what’s accepted', desc: 'See which quotes are opened and accepted, so you follow up on the ones that have gone quiet.' },
    { icon: Repeat, title: 'Accepted means billed', desc: 'An accepted quote becomes an invoice in a click — no re-typing the numbers you already agreed.' },
  ],
  whereHeading: 'Where the quotation maker fits',
  where: [
    { title: 'Freelancers quoting often', desc: 'Sending several quotes a week and tired of rebuilding the same template every single time.' },
    { title: 'Agencies pitching scoped work', desc: 'Breaking projects into line items a client can read, understand, and accept on the spot.' },
    { title: 'Anyone losing deals to delay', desc: 'Watching warm leads cool off because the quote took three days to write and send.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'AI-drafted, itemised quotes from a plain description',
    'Full editing of line items, rates & wording',
    'One-click branded PDF export',
    'Shareable link the client opens and accepts',
    'Quotes linked to each client',
    'Accepted quote converts to an invoice',
  ],
  faqHeading: 'AI quotation maker FAQs',
  faqs: [
    { q: 'How does the AI write my quote?', a: 'You describe the job in plain words and the AI drafts an itemised quote — line items, descriptions, and amounts — that you can edit freely before sending. It writes the first draft; you keep full control of the final wording and prices.' },
    { q: 'Can the client accept the quote online?', a: 'Yes. You send a shareable link the client opens in their browser with no account needed. They can review the quote and accept it, and once accepted you can turn it into an invoice in one click.' },
    { q: 'Is the quotation maker free?', a: 'Yes — the AI quotation maker is free on every plan, including Free. Limits only ever apply to how many you create at higher volume, never to the features themselves.' },
  ],
  ctaTitle: 'Turn a job description into a quote',
  ctaSubtitle: 'Start free and send your first AI-drafted quote in minutes. No credit card required.',
}
