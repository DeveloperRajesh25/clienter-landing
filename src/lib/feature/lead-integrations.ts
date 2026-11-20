import { Plug, Zap, Target, RefreshCw } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const LEAD_INTEGRATIONS: FeaturePageConfig = {
  slug: 'lead-integrations',
  path: '/features/lead-integrations',
  navLabel: 'Lead Integrations',
  navDescription: 'Auto-import leads from Meta, Google Ads, IndiaMART & webhooks',
  icon: Plug,
  metaTitle: 'Lead Integrations — Auto-Import Leads from Meta & Google',
  metaDescription:
    'Connect Meta Lead Ads, Google Ads, IndiaMART and custom webhooks so every new lead lands in your Clienter pipeline automatically — no CSV exports, no copy-paste.',
  keywords: [
    'lead integrations',
    'Meta lead ads integration',
    'Google ads leads',
    'IndiaMART integration',
    'auto import leads',
    'webhook leads',
  ],
  eyebrow: 'Lead Integrations',
  h1: 'Connect your ad channels and let leads flow',
  h1Highlight: 'in',
  subheading:
    'Link Meta Lead Ads, Google Ads, IndiaMART and custom webhooks so a new enquiry becomes a pipeline card the moment it comes in — with its source already tagged.',
  intro: {
    heading: 'What are lead integrations in Clienter?',
    body: [
      'Lead integrations are the connections between the places your enquiries come from and your Clienter pipeline. Plug in Meta Lead Ads, Google Ads, your IndiaMART inbox, or any tool that can fire a webhook, and each new lead arrives as a card in your pipeline on its own — no downloading a CSV, no pasting rows into a sheet at midnight.',
      'Because every incoming lead lands in the same pipeline you already work, nothing sits waiting in a channel you forgot to check. The source is recorded on each card, so you can see which campaign actually sends you clients — and you reach a fresh lead while it’s still warm, not an hour after the notification scrolled past.',
    ],
  },
  stepsHeading: 'How to use lead integrations',
  steps: [
    { title: 'Pick a source', desc: 'Choose Meta Lead Ads, Google Ads, IndiaMART, or a custom webhook from your integrations settings.' },
    { title: 'Connect it once', desc: 'Authorise the account or paste in the webhook URL — a one-time setup that keeps running after.' },
    { title: 'Map the fields', desc: 'Match name, phone, email, and message to your lead fields so every card arrives complete.' },
    { title: 'Work the pipeline', desc: 'New leads appear as cards with their source tagged — drag them through your stages as normal.' },
  ],
  helpsHeading: 'How lead integrations help you',
  helps: [
    { icon: Zap, title: 'Reach leads while they’re warm', desc: 'A lead lands in your pipeline the second it’s submitted — you follow up before a competitor does.' },
    { icon: RefreshCw, title: 'No more CSV shuffling', desc: 'Stop exporting from ad platforms and re-importing by hand — the flow runs without you.' },
    { icon: Target, title: 'Know what each channel earns', desc: 'Source tagging on every card shows which campaigns bring real clients, not just clicks.' },
    { icon: Plug, title: 'Connect anything that fires a webhook', desc: 'A custom webhook catches leads from your own site, chatbot, or any tool the presets don’t cover.' },
  ],
  whereHeading: 'Where lead integrations fit',
  where: [
    { title: 'Agencies running paid ads', desc: 'Spending on Meta and Google and tired of leads going cold between the platform and a reply.' },
    { title: 'IndiaMART sellers', desc: 'Getting enquiries all day that need to land in one place instead of a busy marketplace inbox.' },
    { title: 'Site & chatbot owners', desc: 'Capturing leads from their own forms who want them routed straight into the sales pipeline.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Meta Lead Ads connection',
    'Google Ads lead import',
    'IndiaMART enquiry sync',
    'Custom webhooks for any source',
    'Source tagged on every lead',
    'Leads land straight in your pipeline',
  ],
  faqHeading: 'Lead integrations FAQs',
  faqs: [
    { q: 'Which lead sources can I connect?', a: 'Meta Lead Ads, Google Ads, and IndiaMART have ready-made connections, and a custom webhook lets you pull leads from your own website, chatbot, or any tool that can post data — so most sources are covered.' },
    { q: 'Do new leads really arrive automatically?', a: 'Yes. Once a source is connected, each new enquiry becomes a card in your pipeline on its own, with its source tagged — there’s no exporting, importing, or copy-paste once setup is done.' },
    { q: 'Is this included on every plan?', a: 'Yes — lead integrations are free on every plan. Limits only ever apply to how many leads you track at once, never to connecting your sources.' },
  ],
  ctaTitle: 'Stop losing leads between the ad and the reply',
  ctaSubtitle: 'Start free and connect your first lead source in minutes. No credit card required.',
}
