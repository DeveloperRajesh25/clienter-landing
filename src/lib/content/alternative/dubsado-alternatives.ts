import { Zap, FolderKanban, Wallet, Globe2, Users, Sparkles } from 'lucide-react'
import type { AlternativePageConfig } from './_type'
import { SOURCES, VERIFIED_2026_10 } from '@/lib/content/sources'

/**
 * PLURAL "best Dubsado alternatives" page. Distinct intent from the singular
 * `/alternatives/dubsado-alternative`, which is the switcher page.
 *
 * The spine here is setup cost, because that is the specific, widely-reported
 * reason people abandon Dubsado — and because it is a claim about the shape of
 * the product rather than an unverifiable assertion about the company. Prices
 * come from each vendor's own pricing page, read 2026-10-04. Dubsado's own
 * prices were not rendered in the HTML we read, and the page says so.
 */
export const DUBSADO_ALTERNATIVES: AlternativePageConfig = {
  slug: 'dubsado-alternatives',
  path: '/alternatives/dubsado-alternatives',
  competitor: 'Dubsado',
  tagline: 'Five real Dubsado alternatives, sorted by how long they take to set up.',
  metaTitle: 'Best Dubsado Alternatives in 2026 (5 Compared)',
  metaDescription:
    'Five real Dubsado alternatives compared on setup time, price, teams and tax — Clienter, HoneyBook, Bonsai, Plutio and Moxie, with checkable sources.',
  keywords: [
    'dubsado alternatives',
    'best dubsado alternatives',
    'tools like dubsado',
    'dubsado competitors',
    'simpler than dubsado',
  ],
  ogTitle: 'The best Dubsado alternatives in 2026',
  ogDescription:
    'Dubsado is powerful and setup-heavy. Five alternatives compared on how fast you can actually start, plus price, teams and tax.',
  breadcrumbLabel: 'Dubsado Alternatives',
  eyebrow: 'Dubsado alternatives',
  h1: 'The best Dubsado',
  h1Highlight: 'alternatives',
  subheading:
    'Dubsado has the deepest forms and automation in its category. The reason people leave is rarely a missing feature — it is that the tool only pays off once it is fully configured, and a half-built workflow helps nobody. Here are five alternatives, with prices read from each vendor’s own pricing page on 4 October 2026.',
  intro: {
    heading: 'Why people look for a Dubsado alternative',
    body: [
      'Dubsado is a serious piece of software. Its form builder is the best in this category, its workflows can carry a client from enquiry form through contract, questionnaire, invoice and offboarding without you touching anything, and people who have invested the time in it are often evangelical about it. If you want to engineer a hands-off client process, it is the tool to beat.',
      'That strength is also the reason people leave. Dubsado is setup-heavy by design: the value lives in the configuration, so the tool is at its least useful on day one and most useful in month three. Plenty of freelancers and small agencies never reach month three — they half-build a workflow, keep doing the rest by hand, and end up paying for depth they are not using. "Too complicated" is the most common thing said about Dubsado, and it is a fair description of a trade-off rather than a flaw.',
      'The second reason is that there is no free-forever plan: a free trial, then a paid tier. The third, for anyone outside the US, is that its invoicing follows US conventions and GST-compliant invoicing is not listed on its pricing page.',
      'Five alternatives follow, ordered loosely from "usable today" to "worth the configuration". Ours is first because this is our site; where another tool is the better buy, the page says so. Every pricing page is linked at the bottom.',
    ],
  },
  whySwitch: {
    heading: 'The four reasons people leave Dubsado',
    sub: 'Mostly about the cost of setting it up, not the quality of what it does.',
    items: [
      {
        title: 'The configuration cliff',
        desc: 'Dubsado rewards the person who sits down and builds the workflow properly. If that never happens, you are paying for depth you do not use.',
      },
      {
        title: 'Slow to first invoice',
        desc: 'The tools on this list that are usable the same day will get a real invoice out before a Dubsado workflow is finished.',
      },
      {
        title: 'No free tier',
        desc: 'A free trial, then a paid plan. Their pricing page lists two plans, Starter and Premier; the prices were not rendered in the HTML we read.',
      },
      {
        title: 'US-shaped invoicing',
        desc: 'Invoicing follows US conventions, and GST-compliant invoicing is not listed on their pricing page.',
      },
    ],
  },
  clienterFit: {
    heading: 'Where Clienter fits in this list',
    sub: 'Opinionated defaults instead of a workflow builder — usable the same day.',
    items: [
      {
        icon: Sparkles,
        title: 'Working in an afternoon',
        desc: 'Add a client, send a quote, raise an invoice. There is no workflow to design before the tool earns its keep.',
      },
      {
        icon: Zap,
        title: 'Automation where it pays',
        desc: 'Auto-invoiced retainers, payment reminders and lead follow-up prompts — not a visual workflow builder.',
      },
      {
        icon: Wallet,
        title: 'Free forever, then flat',
        desc: 'Free with no card, then $19 or $39 a month (₹199 / ₹799 in India), five team members included on Pro.',
      },
      {
        icon: FolderKanban,
        title: 'Delivery, not just onboarding',
        desc: 'Kanban boards with budgets, assignees and a live profit view per project.',
      },
      {
        icon: Globe2,
        title: 'About 30 currencies',
        desc: 'A different currency per client, a custom tax rate per line item, GST-compliant invoices for India.',
      },
      {
        icon: Users,
        title: 'What it does not do',
        desc: 'Nothing like Dubsado’s form builder, no branching workflows, no time tracking, no payment processing.',
      },
    ],
  },
  otherOptions: {
    heading: 'The five alternatives, compared honestly',
    sub: 'Prices read from each company’s own pricing page on 4 October 2026.',
    items: [
      {
        name: '1. Clienter — best if you want to start today',
        desc: 'Leads, AI-assisted quotes, e-signed contracts, projects with budgets, a branded client portal, invoices in ~30 currencies, team payouts and payroll. Free forever, then $19 or $39 a month flat (₹199 / ₹799 in India). The honest trade against Dubsado: you lose the form builder and branching workflows entirely, and there is no time tracking or payment processing. Choose it if "I never finished setting it up" is why you are reading this page.',
      },
      {
        name: '2. Moxie — best gentler suite for one person',
        desc: 'Formerly Hectic. Comprehensive but far less configuration-hungry than Dubsado: CRM, proposals, contracts, projects, time tracking and invoicing, built around a single freelancer. Their pricing page listed tiers between roughly $12 and $40 a month with a 14-day trial, though the monthly-versus-annual split was ambiguous in the page HTML — read it before budgeting. Choose it if you are solo and want depth without the setup marathon.',
      },
      {
        name: '3. HoneyBook — best polished client experience',
        desc: 'The closest competitor to Dubsado and the one most people compare it against. Less configurable, considerably more polished, and it takes a deposit inside the proposal. List prices read on 4 October 2026: Starter $36, Essentials $59, Premium $129 a month ($29 / $49 / $109 annually), free trial, no free plan. Its built-in payment processing is designed for US and Canadian businesses, so check their page for current country availability. Choose it if the client-facing polish is the point.',
      },
      {
        name: '4. Bonsai — best if you want books and time tracking too',
        desc: 'Proposals, contracts, invoicing, CRM, projects, time tracking, bookkeeping and tax tooling, with an excellent template library. Billed per user, per month: Basic $15, Essentials $25, Premium $39, Elite $59 ($9 / $19 / $29 / $49 annually), 7-day trial, no free plan. Simpler to start than Dubsado; the catch is that the bill scales with headcount. Choose it if you are solo and want hours and books in the same subscription.',
      },
      {
        name: '5. Plutio — best if you still want to build it yourself',
        desc: 'If what you actually liked about Dubsado was the configurability, Plutio is the closest thing here: projects, invoices, proposals, contracts, time tracking, forms and scheduling, all shapeable. Core $19 a month capped at 9 active clients, Pro $49 with unlimited clients and up to 30 team contributors, Max $199 with white-labelling and SSO. 7-day trial, no card, no free plan. Check the 9-active-client cap on Core against your roster. Choose it if you want to build the process, just somewhere else.',
      },
    ],
  },
  compare: {
    heading: 'Dubsado vs Clienter, where it matters',
    sub: 'A workflow engine against an opinionated workspace.',
    old: [
      'Dubsado: deepest forms and branching automation',
      'Setup-heavy — the value is in the configuration',
      'Free trial, no free-forever plan',
      'Invoicing follows US conventions; GST not listed',
      'Team payouts and payroll not listed on their pricing page',
    ],
    calm: [
      'Clienter: no form builder, no branching workflows',
      'Usable the same day — client, quote, invoice',
      'Free forever, no card, no countdown',
      'Invoices in ~30 currencies, GST-compliant for India',
      'Team payouts, and payroll on Ultra',
    ],
  },
  pricing: {
    heading: 'What each one actually costs',
    body: [
      'Dubsado’s pricing page, read on 4 October 2026, listed two plans — Starter and Premier — and a free trial. The figures themselves were not rendered in the HTML we read, so we are not going to print a number we cannot stand behind. Open their page, which is linked below, before you budget.',
      'The others, monthly, from their own pages on the same date. HoneyBook: $36 Starter, $59 Essentials, $129 Premium ($29 / $49 / $109 annually), with promotional rates also showing. Bonsai, per user: $15 Basic, $25 Essentials, $39 Premium, $59 Elite. Plutio: $19 Core (9 active clients), $49 Pro, $199 Max. Moxie: roughly $12 to $40 with an ambiguous monthly/annual split.',
      'Clienter: free forever, then $19 a month for Pro and $39 for Ultra, billed in USD through PayPal — or ₹199 and ₹799 in INR through Razorpay in India. Flat for the workspace, five team members on Pro, unlimited on Ultra.',
      'The real cost of Dubsado is not on its pricing page, though. It is the weekend you spend building workflows, which is either the best investment you make this quarter or a weekend you never get back, depending entirely on whether you finish. That is the number to estimate honestly before you compare subscriptions.',
    ],
  },
  faqHeading: 'Dubsado alternatives FAQs',
  faqs: [
    {
      q: 'What is the best Dubsado alternative?',
      a: 'If you left because setup never finished, pick something opinionated: Clienter is usable the same day, and Moxie is gentler than Dubsado while still comprehensive. If you left because the client-facing side felt dated, HoneyBook is the polished answer. If you actually liked the configurability and just want it elsewhere, Plutio is the closest match. There is no single best — there is a best for the reason you are leaving.',
    },
    {
      q: 'Is there a simpler alternative to Dubsado?',
      a: 'Yes, and it is the main reason this page exists. Clienter has no workflow builder at all: you add a client, send a quote, run the project on a board and raise an invoice, with automation limited to retainer invoicing and payment reminders. That is less powerful than Dubsado by design. Moxie and HoneyBook also sit well short of Dubsado’s configuration depth while offering more polish than either of us.',
    },
    {
      q: 'Is there a free Dubsado alternative?',
      a: 'Of the five here, only Clienter has a free-forever plan — the whole product for up to 3 clients and 5 projects, no card. HoneyBook, Bonsai, Plutio and Moxie all list free trials rather than free tiers, between 7 and 14 days. Dubsado itself offers a trial.',
    },
    {
      q: 'Which Dubsado alternative works for a team?',
      a: 'Check two things: how the tool prices people, and whether it can pay them. Bonsai bills per user and Plutio counts contributors, so both scale with headcount. Clienter includes five team members on Pro at a flat price and is unlimited on Ultra, with per-project assignment, team payouts and payroll on Ultra. Team payouts and payroll are not listed on HoneyBook’s or Dubsado’s pricing pages.',
    },
    {
      q: 'Does any of these do GST invoicing for India?',
      a: 'Of the five, Clienter is the only one that lists GST-compliant invoicing — your GSTIN, the CGST/SGST split, and INR billing through Razorpay. For HoneyBook, Bonsai, Plutio, Moxie and Dubsado, GST invoicing is not listed on their pricing pages as of 4 October 2026, which is a statement about those pages rather than a claim that it is impossible. Clienter supports a custom tax rate per line item for every other country, but no other country-specific VAT or sales-tax formats, so check a sample invoice against your local rules.',
    },
  ],
  related: [
    {
      href: '/compare/clienter-vs-dubsado',
      label: 'Clienter vs Dubsado',
      desc: 'The head-to-head, in more detail.',
    },
    {
      href: '/alternatives/dubsado-alternative',
      label: 'Switching from Dubsado',
      desc: 'What moving across actually involves.',
    },
    {
      href: '/alternatives/honeybook-alternatives',
      label: 'HoneyBook alternatives',
      desc: 'The same exercise for HoneyBook.',
    },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'Set up in an afternoon, not a weekend',
  ctaSubtitle:
    'Start Clienter free — leads, quotes, contracts, projects, portal and invoices in one login. No card.',
  asOf: 'October 2026',
  sources: [
    ...SOURCES.dubsado,
    ...SOURCES.honeybook,
    ...SOURCES.bonsai,
    ...SOURCES.plutio,
    ...SOURCES.moxie,
    {
      label: 'Clienter pricing (this site)',
      url: 'https://clienter.co.in/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
}
