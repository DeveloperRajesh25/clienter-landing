import { Users, FolderKanban, Wallet, Globe2, Clock, Sparkles } from 'lucide-react'
import type { AlternativePageConfig } from './_type'
import { SOURCES, VERIFIED_2026_10 } from '@/lib/content/sources'

/**
 * PLURAL "best Bonsai alternatives" page. Distinct intent from the singular
 * `/alternatives/bonsai-alternative`, which is the switcher page.
 *
 * The spine of this page is the per-user billing model, because that is the
 * genuine, checkable reason people leave Bonsai rather than a vague "it's
 * expensive". Every price was read from the vendor's own pricing page on
 * 2026-10-04; absences are written as "not listed", never as "they can't".
 */
export const BONSAI_ALTERNATIVES: AlternativePageConfig = {
  slug: 'bonsai-alternatives',
  path: '/alternatives/bonsai-alternatives',
  competitor: 'Bonsai',
  tagline: 'Five real Bonsai alternatives, with the per-user maths worked out.',
  metaTitle: 'Best Bonsai Alternatives in 2026 (5 Compared)',
  metaDescription:
    'Five real Bonsai alternatives compared on price, per-user billing, time tracking and teams. Every price read from the vendor’s own pricing page.',
  keywords: [
    'bonsai alternatives',
    'best bonsai alternatives',
    'hello bonsai alternatives',
    'tools like bonsai',
    'bonsai competitors',
  ],
  ogTitle: 'The best Bonsai alternatives in 2026',
  ogDescription:
    'Bonsai bills per user. Five alternatives compared on price, teams, time tracking and tax — with prices from their own pages.',
  breadcrumbLabel: 'Bonsai Alternatives',
  eyebrow: 'Bonsai alternatives',
  h1: 'The best Bonsai',
  h1Highlight: 'alternatives',
  subheading:
    'Bonsai is a genuinely good all-in-one for one person. The reason people leave is almost always the same: it bills per user, so the price climbs in a straight line as your team grows. Here are five alternatives, with every price read from the vendor’s own pricing page on 4 October 2026.',
  intro: {
    heading: 'Why people look for a Bonsai alternative',
    body: [
      'Bonsai bundles proposals, contracts with e-signature, invoicing, a client CRM, projects and tasks, time tracking, and bookkeeping and tax tooling into one well-made workspace with an excellent template library. For a solo freelancer it is one of the strongest products in the category, and its Basic tier at $15 a month is a fair price for one person.',
      'The reason people start looking is structural rather than a complaint about quality. Bonsai is billed per user, per month. Read from their own pricing page on 4 October 2026: Basic $15, Essentials $25, Premium $39, Elite $59, each per user, with lower annual rates ($9, $19, $29, $49). One person on Essentials is $25. Three people are $75. Five are $125. Nothing about the product got worse — the bill simply scales with headcount, and a lot of freelance businesses quietly become two or three people.',
      'The second reason is the absence of a free tier. Bonsai offers a 7-day trial, which is enough to look around but not enough to run a real project through. If your income is uneven, a tool you can sit on for nothing between projects is worth something concrete.',
      'Five alternatives follow, ours first because this is our site, with the cases where each of the others wins stated plainly. Every pricing page is linked at the foot of this page.',
    ],
  },
  whySwitch: {
    heading: 'The four reasons people leave Bonsai',
    sub: 'None of them is "the product is bad" — it is a good product with a particular shape.',
    items: [
      {
        title: 'Per-user billing',
        desc: 'Three people who all need proposals and invoicing is $75 a month on Essentials. The product did not change; your headcount did.',
      },
      {
        title: 'No free tier',
        desc: 'A 7-day trial, then a paid plan. Long enough to look, not long enough to run a project through and decide properly.',
      },
      {
        title: 'USD only',
        desc: 'Prices are listed in US dollars only, so what you actually pay moves with your exchange rate.',
      },
      {
        title: 'Built around one person',
        desc: 'Team payouts, payroll and per-project assignment of people are not listed on their pricing page.',
      },
    ],
  },
  clienterFit: {
    heading: 'Where Clienter fits in this list',
    sub: 'The same all-in-one idea, billed per workspace instead of per person.',
    items: [
      {
        icon: Wallet,
        title: 'Flat, not per seat',
        desc: '$19 a month on Pro (₹199 in India) with five team members included. The fifth person costs nothing extra.',
      },
      {
        icon: Sparkles,
        title: 'Free forever to start',
        desc: 'The whole product for up to 3 clients and 5 projects, no card and no countdown.',
      },
      {
        icon: Users,
        title: 'Built for a small team',
        desc: 'Teammate logins with permissions, per-project assignment, team payouts, and payroll on Ultra.',
      },
      {
        icon: FolderKanban,
        title: 'Projects with real budgets',
        desc: 'Kanban boards, deadlines, budgets and a live profit view per project.',
      },
      {
        icon: Globe2,
        title: 'About 30 currencies',
        desc: 'A different currency per client, a custom tax rate per line item, and GST-compliant invoices for India.',
      },
      {
        icon: Clock,
        title: 'What it does not do',
        desc: 'No time tracking, no bookkeeping module, no payment processing. If you bill hourly against tracked time, keep a tracker alongside.',
      },
    ],
  },
  otherOptions: {
    heading: 'The five alternatives, compared honestly',
    sub: 'Prices read from each company’s own pricing page on 4 October 2026.',
    items: [
      {
        name: '1. Clienter — best once there is more than one of you',
        desc: 'Leads, AI-assisted quotes, e-signed contracts, projects with budgets, a branded client portal, invoices in ~30 currencies, team payouts and payroll. Free forever, then $19 or $39 a month flat (₹199 / ₹799 in India), five team members on Pro. Honest gaps: no time tracking, no bookkeeping or tax module, no payment processing — Clienter records what clients owe and they pay you directly. Choose it if the per-user bill is what sent you here.',
      },
      {
        name: '2. HoneyBook — best for the booking experience',
        desc: 'The most polished path from enquiry to signed-and-paid, with a deposit taken inside the proposal and mature automation behind it. List prices read on 4 October 2026: Starter $36, Essentials $59, Premium $129 a month ($29 / $49 / $109 annually), free trial, no free plan. The catch outside North America: its built-in payment processing is designed for US and Canadian businesses, so check their page for current country availability. Choose it if you are a US or Canadian creative and booking is the whole job.',
      },
      {
        name: '3. Dubsado — best for custom, hands-off workflows',
        desc: 'The deepest form builder and automation engine in this category. Two plans, Starter and Premier, with a free trial; prices were not rendered in the HTML of their pricing page when we read it, so open the page yourself. The honest trade is setup time — Dubsado pays back the person who configures it properly and frustrates the person who does not. Choose it if you want to engineer the workflow and you will actually finish.',
      },
      {
        name: '4. Plutio — best if you want to shape the tool',
        desc: 'A broad, configurable toolkit: projects, invoices, proposals, contracts, time tracking, forms, scheduling. Core $19 a month capped at 9 active clients, Pro $49 with unlimited clients and up to 30 team contributors, Max $199 with white-labelling and SSO. 7-day trial, no card, no free plan. Note the 9-active-client cap on Core against your own roster, and that Pro counts contributors. Choose it if customisation matters more to you than opinionated defaults.',
      },
      {
        name: '5. Moxie — best like-for-like if you are staying solo',
        desc: 'Formerly Hectic. The closest thing on this list to Bonsai in intent: a comprehensive, well-designed suite for one person, with CRM, proposals, contracts, projects, time tracking and invoicing. Their pricing page listed tiers between roughly $12 and $40 a month with a 14-day trial, though the monthly-versus-annual split was ambiguous in the page HTML — read it before budgeting. Choose it if you want Bonsai’s shape at a possibly lower price and still work alone.',
      },
    ],
  },
  compare: {
    heading: 'Bonsai vs Clienter, where it matters',
    sub: 'Both are all-in-ones. They are priced on opposite principles.',
    old: [
      'Bonsai: billed per user, per month',
      'Three people on Essentials: $75/month',
      '7-day trial, no free-forever plan',
      'Priced in US dollars only',
      'Time tracking, bookkeeping and tax tooling included',
    ],
    calm: [
      'Clienter: billed per workspace, flat',
      'Three people on Pro: $19/month (₹199 in India)',
      'Free forever, no card, no countdown',
      'USD via PayPal, or INR via Razorpay in India',
      'No time tracking or bookkeeping — a real gap, stated plainly',
    ],
  },
  pricing: {
    heading: 'Working out which is cheaper for you',
    body: [
      'This is arithmetic rather than opinion, so do it with your own numbers. Bonsai’s monthly, per-user prices read on 4 October 2026 were $15 Basic, $25 Essentials, $39 Premium and $59 Elite. Clienter is $19 for Pro and $39 for Ultra, flat for the workspace, or ₹199 and ₹799 in India, with a free-forever plan underneath.',
      'One person who needs proposals and invoicing: Bonsai Basic $15 against Clienter Pro $19. Bonsai wins, and we would rather say so than pretend otherwise. Two people: $30 against $19. Three: $75 on Essentials against $19. Five: $125 against $19, and Clienter Pro includes exactly five team members. Beyond five, Clienter Ultra is $39 flat and unlimited.',
      'What Bonsai’s price buys that Clienter’s does not: time tracking, a bookkeeping module, tax tooling, and a much larger template library. If you bill hourly against tracked time, that is not a nice-to-have, it is the job — and Clienter does not replace it. What Clienter’s price buys that Bonsai’s does not: team assignments, payouts, payroll on Ultra, invoicing in about 30 currencies, GST-compliant invoices for India, and a free tier.',
      'Both pricing pages are linked at the foot of this page. Prices change; open the links before you pay.',
    ],
  },
  faqHeading: 'Bonsai alternatives FAQs',
  faqs: [
    {
      q: 'What is the best Bonsai alternative?',
      a: 'It depends on why you are leaving. If it is the per-user bill, a flat-priced workspace like Clienter answers it directly — $19 a month covers five people. If you want Bonsai’s shape but cheaper and are staying solo, Moxie is the closest match. If you want the best booking flow, HoneyBook. If you want deep custom automation, Dubsado. If you want to configure everything, Plutio. Headcount settles most of this.',
    },
    {
      q: 'Is there a free alternative to Bonsai?',
      a: 'Of the five on this page, only Clienter has a free-forever plan: the whole product for up to 3 clients and 5 projects, with no card. HoneyBook, Dubsado, Plutio and Moxie all offer trials rather than free tiers — 7 to 14 days on their own pages. If "free" is a hard requirement rather than a preference, that is a short list.',
    },
    {
      q: 'Does any Bonsai alternative have time tracking?',
      a: 'Plutio and Moxie both list time tracking on their pricing pages, as does Bonsai itself. Clienter does not have time tracking at all, which is a genuine gap if you bill hourly against tracked hours — it tracks project budgets, payments and profit instead. If hourly tracking is central to how you invoice, either keep a separate tracker or choose one of the tools that includes it.',
    },
    {
      q: 'Which Bonsai alternative is best for a small agency?',
      a: 'The question for an agency is how a tool prices people and whether it can pay them. Bonsai and Plutio bill per user or per contributor. HoneyBook does not list team payouts or payroll on its pricing page. Clienter includes five team members on Pro at a flat price, unlimited on Ultra, with per-project assignment, team payouts and payroll on Ultra. That is why it is first on this list rather than because it is ours.',
    },
    {
      q: 'Is Bonsai worth it?',
      a: 'For a solo freelancer, genuinely yes. The templates, contracts, time tracking and tax tooling are mature, and $15 a month on Basic is a reasonable price for one person. The case against it is not quality — it is the per-user bill once you are more than one person, and the lack of a free tier to start on.',
    },
  ],
  related: [
    {
      href: '/compare/clienter-vs-bonsai',
      label: 'Clienter vs Bonsai',
      desc: 'The head-to-head, with the per-user maths.',
    },
    {
      href: '/alternatives/bonsai-alternative',
      label: 'Switching from Bonsai',
      desc: 'What moving across actually involves.',
    },
    {
      href: '/alternatives/honeybook-alternatives',
      label: 'HoneyBook alternatives',
      desc: 'The same exercise for HoneyBook.',
    },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'One price, however many of you there are',
  ctaSubtitle:
    'Start Clienter free — leads, quotes, contracts, projects, portal and invoices in one login. No card.',
  asOf: 'October 2026',
  sources: [
    ...SOURCES.bonsai,
    ...SOURCES.honeybook,
    ...SOURCES.dubsado,
    ...SOURCES.plutio,
    ...SOURCES.moxie,
    {
      label: 'Clienter pricing (this site)',
      url: 'https://clienter.co.in/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
}
