import { Users, FolderKanban, ReceiptText, Globe2, Wallet, Sparkles } from 'lucide-react'
import type { AlternativePageConfig } from './_type'
import { SOURCES, VERIFIED_2026_10 } from '@/lib/content/sources'

/**
 * PLURAL "best HoneyBook alternatives" page — the research-stage query, which is
 * a different intent from the existing singular `/alternatives/honeybook-alternative-india`
 * (that one stays India-specific; "honeybook alternative india" is a real query
 * and it is the only page that should answer it).
 *
 * Evidence discipline: every price here was read off the named company's own
 * pricing page on 2026-10-04 and is listed with that company's own plan names.
 * Where a price was not rendered in the page HTML we say so rather than guess,
 * and where a feature is simply absent from a pricing page we write "not listed"
 * rather than "they do not have it". Unverified items are in
 * docs/needs-verification.md.
 */
export const HONEYBOOK_ALTERNATIVES: AlternativePageConfig = {
  slug: 'honeybook-alternatives',
  path: '/alternatives/honeybook-alternatives',
  competitor: 'HoneyBook',
  tagline: 'Five real HoneyBook alternatives compared, with prices from their own pages.',
  metaTitle: 'Best HoneyBook Alternatives in 2026 (5 Compared)',
  metaDescription:
    'Five real HoneyBook alternatives compared on price, team billing and tax — Clienter, Dubsado, Bonsai, Plutio and Moxie. Prices from their own pages.',
  keywords: [
    'honeybook alternatives',
    'best honeybook alternatives',
    'tools like honeybook',
    'honeybook competitors',
    'honeybook alternative free',
  ],
  ogTitle: 'The best HoneyBook alternatives in 2026',
  ogDescription:
    'Five genuine HoneyBook alternatives, compared on price, per-user billing, teams and tax — with every price read from the vendor’s own pricing page.',
  breadcrumbLabel: 'HoneyBook Alternatives',
  eyebrow: 'HoneyBook alternatives',
  h1: 'The best HoneyBook',
  h1Highlight: 'alternatives',
  subheading:
    'HoneyBook is very good at what it does. People still leave it for three concrete reasons: there is no free plan, its built-in payments are designed for the US and Canada, and list pricing starts at $36 a month. Here are five real alternatives, with prices read from each company’s own pricing page on 4 October 2026.',
  intro: {
    heading: 'Why people look for a HoneyBook alternative',
    body: [
      'HoneyBook is one of the best client-flow tools on the market for creatives. A branded enquiry form, a beautiful proposal, a contract signed in the same window, a deposit taken on the spot, and automations that move all of it along without you. If that is the job you need doing and you are in the US or Canada, HoneyBook is likely to stay the right answer, and this page is not going to pretend otherwise.',
      'The three reasons people go looking anyway are specific rather than vague. First, there is no free-forever plan: a trial, then a paid tier, which is uncomfortable if your income is lumpy. Second, the built-in payment processing — a large part of what the subscription buys — is designed for US and Canadian businesses, so if you bill from London, Sydney, Toronto’s neighbour or Bengaluru you may be paying for a feature you cannot fully use. Third, list pricing read on 4 October 2026 started at $36 a month and reached $129, which is a lot if you are using half the product.',
      'What follows is five tools that genuinely overlap with HoneyBook, starting with ours because this is our site — but with the cases where each of the others is the better buy stated plainly. Every price was read from the vendor’s own pricing page on the date above, and every page is linked at the bottom so you can check it yourself.',
    ],
  },
  whySwitch: {
    heading: 'The four things that send people looking',
    sub: 'All four are about fit rather than quality — HoneyBook is a good product.',
    items: [
      {
        title: 'No free plan',
        desc: 'HoneyBook offers a free trial, not a free tier. If your months are uneven, a tool you can sit on for free between projects is worth real money.',
      },
      {
        title: 'Payments are North America-shaped',
        desc: 'The built-in processing is designed for US and Canadian businesses. Outside that, check their pricing page for current availability before you commit — it is linked below.',
      },
      {
        title: 'The price of the parts you use',
        desc: 'List prices read on 4 October 2026: Starter $36, Essentials $59, Premium $129 a month. Fair for the full product; expensive if the payment half does not apply to you.',
      },
      {
        title: 'Lighter after the booking',
        desc: 'HoneyBook is strongest from enquiry to signed job. Project boards, team assignments, payouts and payroll are not listed on its pricing page.',
      },
    ],
  },
  clienterFit: {
    heading: 'Where Clienter fits in this list',
    sub: 'A flat-priced workspace that keeps going after the job is won.',
    items: [
      {
        icon: Sparkles,
        title: 'A free plan, forever',
        desc: 'The whole product for up to 3 clients and 5 projects, no card, no countdown. Upgrade only when you outgrow it.',
      },
      {
        icon: Wallet,
        title: 'One flat price',
        desc: '$19 a month on Pro, or ₹199 in India, including five team members. Adding the fifth person does not change the bill.',
      },
      {
        icon: FolderKanban,
        title: 'The half after the booking',
        desc: 'Kanban boards with budgets and assignees, team payouts, payroll on Ultra, and a cash forecast.',
      },
      {
        icon: Globe2,
        title: 'About 30 currencies',
        desc: 'A different currency per client, a custom tax rate per line item, and GST-compliant invoices for India.',
      },
      {
        icon: ReceiptText,
        title: 'Invoices that chase themselves',
        desc: 'Reminders, part-payments, proof-of-payment review and auto-invoiced retainers.',
      },
      {
        icon: Users,
        title: 'A portal on every plan',
        desc: 'Branded with your name and logo, and on your own domain if you are on Ultra.',
      },
    ],
  },
  otherOptions: {
    heading: 'The five alternatives, compared honestly',
    sub: 'Prices read from each company’s own pricing page on 4 October 2026.',
    items: [
      {
        name: '1. Clienter — best if there are a few of you',
        desc: 'Leads, AI-assisted quotes, e-signed contracts, projects, a branded portal, invoices in ~30 currencies, team payouts and payroll. Free forever, then $19 or $39 a month flat (₹199 / ₹799 in India), with five team members included on Pro. Honest limits: no payment processing — it tracks what clients owe and they pay you directly — no time tracking, and far fewer templates than HoneyBook. Choose it if you run several clients at once or have anyone working with you.',
      },
      {
        name: '2. Dubsado — best for deep, custom workflows',
        desc: 'The strongest form builder and the deepest automation in this category, and the closest thing to HoneyBook in spirit. Two plans, Starter and Premier, with a free trial; the prices were not rendered in the HTML of their pricing page when we read it, so check the page itself. The honest trade is setup time: Dubsado rewards people who will sit down and configure it, and punishes people who will not. Choose it if you want to engineer a hands-off client workflow and you enjoy that kind of work.',
      },
      {
        name: '3. Bonsai — best for a solo freelancer who wants everything',
        desc: 'Proposals, contracts, invoicing, CRM, projects, time tracking, plus bookkeeping and tax tooling, with an excellent template library. Billed per user, per month: Basic $15, Essentials $25, Premium $39, Elite $59 ($9/$19/$29/$49 billed annually), 7-day trial, no free plan. The per-user model is the catch — three people on Essentials is $75 a month. Choose it if you work alone and want time tracking and books in the same subscription.',
      },
      {
        name: '4. Plutio — best if you want to customise everything',
        desc: 'A broad, highly configurable toolkit: projects, invoices, proposals, contracts, time tracking, forms and scheduling. Core $19 a month (capped at 9 active clients), Pro $49 (unlimited clients, up to 30 team contributors), Max $199 (unlimited plus white-labelling and SSO). 7-day trial, no card, no free plan. The 9-active-client cap on Core is the number to check against your own roster. Choose it if you want to shape the tool around your process rather than the other way round.',
      },
      {
        name: '5. Moxie — best for a solo freelancer who wants simple',
        desc: 'Formerly Hectic. A comprehensive, well-designed suite built squarely around one person: CRM, proposals, contracts, projects, time tracking and invoicing. Their pricing page listed tiers between roughly $12 and $40 a month with a 14-day free trial; the monthly-versus-annual split was ambiguous in the page HTML, so read it yourself before budgeting. Choose it if you are solo, want a gentler learning curve than Dubsado, and do not need team features.',
      },
    ],
  },
  compare: {
    heading: 'HoneyBook vs the alternatives, at a glance',
    sub: 'The differences that actually change a decision.',
    old: [
      'HoneyBook: no free plan, trial only',
      'Payments built in — designed for US and Canada',
      'List pricing from $36 to $129 a month',
      'Strongest from enquiry to signed, lighter after',
      'Team payouts and payroll not listed on their pricing page',
    ],
    calm: [
      'Clienter: free forever, no card, no countdown',
      'No payment processing — you get paid directly, we track it',
      'One flat $19 or $39 a month (₹199 / ₹799 in India)',
      'Covers delivery too: boards, budgets, assignees, payouts',
      'Payroll and your own portal domain on Ultra',
    ],
  },
  pricing: {
    heading: 'What each one actually costs',
    body: [
      'Read from each company’s own pricing page on 4 October 2026, monthly billing unless noted. HoneyBook: $36 Starter, $59 Essentials, $129 Premium ($29 / $49 / $109 annually); promotional rates were also showing when we read it. Bonsai, per user: $15 Basic, $25 Essentials, $39 Premium, $59 Elite ($9 / $19 / $29 / $49 annually). Plutio: $19 Core, $49 Pro, $199 Max. Moxie: tiers between roughly $12 and $40, with the monthly/annual split unclear in the page HTML. Dubsado: two plans, Starter and Premier, with prices not rendered in the HTML we read.',
      'Clienter: free forever, then $19 a month for Pro and $39 for Ultra, billed in USD through PayPal — or ₹199 and ₹799 a month in INR through Razorpay if you are in India. Your billing region is set at first checkout. Pro includes five team members at that flat price; Ultra is unlimited.',
      'The structural point worth more than any individual figure: Bonsai and Plutio bill per user or per contributor, HoneyBook and Clienter do not. If you are one person, the cheapest row here is Bonsai Basic at $15. If there are four of you who all need proposals and invoicing, the arithmetic reverses hard. Count your seats before you compare anything else.',
      'Every price above can change the day after we read it. Each company’s pricing page is linked at the foot of this page — if you are about to pay for something, open the link.',
    ],
  },
  faqHeading: 'HoneyBook alternatives FAQs',
  faqs: [
    {
      q: 'What is the best HoneyBook alternative?',
      a: 'There is no single answer, because the five tools here are built for different shapes of business. If you have a team or several live projects, a flat-priced workspace like Clienter fits best. If you want the deepest custom automation, Dubsado. If you are solo and want time tracking and bookkeeping included, Bonsai. If you want to configure everything yourself, Plutio. If you are solo and want simple, Moxie. The one question that settles most of it is how many people need access.',
    },
    {
      q: 'Is there a free HoneyBook alternative?',
      a: 'Of the five here, Clienter is the only one with a free-forever plan: the whole product for up to 3 clients and 5 projects, no card. Dubsado, Bonsai, Plutio and Moxie all offer free trials rather than free tiers, ranging from 7 to 14 days as listed on their own pages. If a genuinely free starting point matters, that narrows the list quickly.',
    },
    {
      q: 'Which HoneyBook alternative works outside the US?',
      a: 'All five are usable outside the US, but what differs is money. HoneyBook’s built-in payment processing is designed for US and Canadian businesses, and Bonsai, Plutio and Moxie list prices only in US dollars. Clienter bills in USD through PayPal worldwide or INR through Razorpay in India, and invoices your clients in about 30 currencies with a different one per client. For Indian invoicing specifically, Clienter is the only one of the five that lists GST-compliant invoicing.',
    },
    {
      q: 'Which is cheapest?',
      a: 'It depends on headcount, and the answer flips. For one person, Bonsai Basic at $15 a month was the cheapest paid plan we found, with Clienter Pro at $19 next. For three or more people, Clienter Pro at $19 flat is cheaper than any per-user plan here — three on Bonsai Essentials is $75. And Clienter’s free plan costs nothing at all, indefinitely, which none of the others offer.',
    },
    {
      q: 'Can I move my data out of HoneyBook?',
      a: 'Yes, and you should check this before committing anywhere. Export your contacts, projects and invoices from HoneyBook, then recreate the clients you are actively working with and the enquiries still open in whichever tool you pick. Most client-services businesses carry a handful of live jobs at a time, so this is usually an afternoon rather than a migration project. The one thing that does not transfer anywhere is payment history held by a processor.',
    },
  ],
  related: [
    {
      href: '/compare/clienter-vs-honeybook',
      label: 'Clienter vs HoneyBook',
      desc: 'The head-to-head, in more detail.',
    },
    {
      href: '/alternatives/honeybook-alternative-india',
      label: 'HoneyBook alternative for India',
      desc: 'GST, INR billing and UPI, specifically.',
    },
    {
      href: '/alternatives/dubsado-alternatives',
      label: 'Dubsado alternatives',
      desc: 'The same exercise for Dubsado.',
    },
    { href: '/pricing', label: 'Clienter pricing', desc: 'Free forever, or Pro from $19/month.' },
  ],
  ctaTitle: 'Try the one with a free plan first',
  ctaSubtitle:
    'Start Clienter free — leads, quotes, contracts, projects, portal and invoices in one login. No card.',
  asOf: 'October 2026',
  sources: [
    ...SOURCES.honeybook,
    ...SOURCES.dubsado,
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
