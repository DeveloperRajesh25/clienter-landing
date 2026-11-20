import { Globe, Store, Sparkles, Handshake } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const PUBLIC_PROFILE: FeaturePageConfig = {
  slug: 'public-profile',
  path: '/features/public-profile',
  navLabel: 'Public Profile',
  navDescription: 'A free portfolio page and marketplace listing for your business',
  icon: Globe,
  metaTitle: 'Free Public Profile — A Portfolio Page for Your Agency',
  metaDescription:
    'Get a free public profile page for your agency or freelance business — logo, services and verified reviews — plus a listing in the Clienter directory where prospects find you.',
  keywords: [
    'free agency profile page',
    'public portfolio page',
    'freelancer profile',
    'agency directory',
    'public profile for freelancers',
    'agency marketplace listing',
  ],
  eyebrow: 'Public Profile',
  h1: 'A credible web presence you can set up',
  h1Highlight: 'today',
  subheading:
    'A public profile page for your agency or freelance business — your logo, services and verified client reviews — plus a listing in the Clienter directory where prospects can find you.',
  intro: {
    heading: 'What is a public profile in Clienter?',
    body: [
      'Your public profile is a shareable page for your business — your logo, the services you offer, and the verified reviews your finished projects have earned, all on one clean page at your own agency slug. It’s the link you drop in a proposal, a DM, or your Instagram bio when a prospect asks “so who are you?” and you want a real answer, not a half-built website.',
      'That same profile also lists you in the Clienter marketplace directory, where people looking for a freelancer or agency can discover you. So the page does two jobs at once: a professional presence you control, and a place new clients stumble onto you — backed by reviews that are tied to real completed work, which is the proof that actually convinces people to reach out.',
    ],
  },
  stepsHeading: 'How to set up your public profile',
  steps: [
    { title: 'Add your branding', desc: 'Upload your logo and name so the page looks like your business, at your own agency slug.' },
    { title: 'List your services', desc: 'Describe what you do and who you do it for, so a prospect knows in seconds if you’re a fit.' },
    { title: 'Let reviews build it up', desc: 'Verified reviews from completed projects appear on the page as social proof you didn’t have to ask for.' },
    { title: 'Share and get found', desc: 'Send the link anywhere, and get listed in the Clienter directory where prospects search.' },
  ],
  helpsHeading: 'How your public profile helps you',
  helps: [
    { icon: Globe, title: 'A presence without a website', desc: 'A credible page to point prospects to, live in minutes — no domain, designer, or build to wait on.' },
    { icon: Sparkles, title: 'Social proof front and centre', desc: 'Your logo, services, and verified reviews together make a solo freelancer look established.' },
    { icon: Store, title: 'Get discovered in the directory', desc: 'A listing in the Clienter marketplace puts you in front of people already looking to hire.' },
    { icon: Handshake, title: 'One link that closes', desc: 'Drop it in a proposal or bio and prospects see proof you deliver before the first reply.' },
  ],
  whereHeading: 'Where the public profile fits',
  where: [
    { title: 'Freelancers without a site', desc: 'Who need a professional link to share now, not after they finally build a portfolio.' },
    { title: 'New agencies finding clients', desc: 'Wanting to be discoverable and credible while word of mouth is still getting started.' },
    { title: 'Anyone pitching cold', desc: 'Sending proposals and DMs who want one link that proves they’re real and good at the work.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Public profile page at your agency slug',
    'Your logo and business branding',
    'The services you offer, listed clearly',
    'Verified reviews shown as social proof',
    'A listing in the Clienter directory',
    'A single link you can share anywhere',
  ],
  faqHeading: 'Public profile FAQs',
  faqs: [
    { q: 'What’s on my public profile page?', a: 'Your logo and business name, the services you offer, and the verified reviews your completed projects have earned — all on one page at your own agency slug that you can share anywhere.' },
    { q: 'How do prospects find me in the directory?', a: 'Your profile is listed in the Clienter marketplace, where people searching for a freelancer or agency can browse and discover you — so the page attracts new clients, not just the ones you send it to.' },
    { q: 'Is the public profile free?', a: 'Yes — your public profile and directory listing are free on every plan. It’s a credible web presence at no cost, and more shared profiles mean more people discover Clienter.' },
  ],
  ctaTitle: 'Give prospects a page that proves you deliver',
  ctaSubtitle: 'Start free and publish your public profile in minutes. No credit card required.',
}
