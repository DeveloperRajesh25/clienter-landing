import {
  ReceiptText,
  Wallet,
  KanbanSquare,
  Users,
  Handshake,
  PieChart,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const INDIAN_FREELANCERS: AudiencePageConfig = {
  slug: 'indian-freelancers',
  path: '/for/indian-freelancers',
  audience: 'Indian freelancers',
  metaTitle: 'Freelance Software India: GST Invoicing & UPI Ready',
  metaDescription:
    'The freelance software for India that handles it all — clients, GST invoices, and UPI and bank payments in rupees. Built for Indian freelancers. Start free.',
  keywords: [
    'freelance software India',
    'best software for freelancers in India',
    'GST invoicing for freelancers',
    'UPI payments for freelancers',
    'managing clients in India',
  ],
  ogTitle: 'Freelance Software for India — Clienter',
  ogDescription:
    'Clients, GST invoices, UPI payments, and profit in one workspace built for Indian freelancers. Start free.',
  breadcrumbLabel: 'For Indian Freelancers',
  eyebrow: 'For Indian freelancers',
  h1: 'Freelance software for India that handles GST, UPI, and',
  h1Highlight: 'getting paid',
  subheading:
    'Most freelance tools were built for dollar pricing and no GST. Clienter is built in India for Indian freelancers — GST invoices, UPI and bank payments, TDS, and rupee pricing — so you run a professional business whether your client is in Bengaluru or Brooklyn.',
  intro: {
    heading: 'Freelance software made for how India actually works',
    body: [
      'The Indian freelance market has exploded. Designers, developers, writers, marketers, and video editors are serving clients on Upwork and Fiverr, Indian startups paying in rupees, and agencies abroad paying in dollars — often all at once. But most of the software freelancers reach for was built for somewhere else: dollar-first pricing, no concept of GST, and no idea what UPI or TDS even are. So Indian freelancers end up bending foreign tools around local realities, or falling back on a Word invoice and a spreadsheet.',
      'Freelance software for India has to speak the local reality fluently — GST invoices with your GSTIN and CGST/SGST or IGST, payments that actually arrive by UPI and bank transfer, the TDS a client deducts before paying you, and rupee pricing that fits a freelance income rather than an enterprise budget. Clienter is built in India, by Webcros in Odisha, for exactly this. It is the operating system for a freelance business that happens to be run from India and serve clients anywhere.',
      'It brings clients, projects, GST-ready invoices, and payments into one workspace so nothing lives only in your inbox or a chat thread. Whether your next client is a startup in Bengaluru or an agency in Brooklyn, you look like a real business and you stay on top of the money.',
    ],
  },
  pains: {
    heading: 'The parts of freelancing in India nobody prepares you for',
    sub: 'The tax, the chasing, and the looking-professional problems that come with the territory here.',
    items: [
      {
        title: 'GST that nobody explained',
        desc: 'When to register, whether to charge it, CGST/SGST versus IGST, what an export-of-services invoice even looks like — the rules are real, but no freelancer signs up for a tax course first.',
      },
      {
        title: 'Payments you spend weeks chasing',
        desc: 'Indian clients are famous for “next week”. Without a system tracking every invoice and due date, you quietly become an unpaid collections department for your own business.',
      },
      {
        title: 'Looking small to clients abroad',
        desc: 'A foreign client comparing you to an agency sees one freelancer emailing a PDF. Without a portal and a process, you leave both trust and money on the table.',
      },
      {
        title: 'TDS that makes your numbers not add up',
        desc: 'A client deducts 10% TDS and pays the rest. If you don’t record it, the invoice looks unpaid, your books look wrong, and nothing reconciles with your Form 26AS at year-end.',
      },
      {
        title: 'Rupee income you can’t actually see',
        desc: 'Money lands over UPI, expenses go out, platform fees get skimmed, and at tax time your real profit is a guess assembled from a folder of screenshots.',
      },
    ],
  },
  workflow: {
    heading: 'A client, from lead to paid, the Indian way',
    sub: 'Here’s how a freelance job flows through Clienter when you’re working from India.',
    steps: [
      {
        title: '1. Bring every client into one place',
        desc: 'Upwork clients, Fiverr buyers, Indian companies, and foreign agencies all get one profile — so your business stops being scattered across five platforms and a dozen chats.',
      },
      {
        title: '2. Track leads from talking to won',
        desc: 'Referrals and enquiries move through a CRM pipeline — “talking”, “quoted”, “won” — so a promising “maybe next month” never quietly disappears on you.',
      },
      {
        title: '3. Raise a GST-ready invoice in rupees',
        desc: 'Add your GSTIN and the client’s, apply CGST/SGST or IGST, or send a clean non-GST invoice — branded, in rupees, exported as a tidy PDF in under a minute.',
      },
      {
        title: '4. Match the payment to reality',
        desc: 'Log the UPI or bank transfer when it lands, record any TDS the client deducted, and watch dues update — so your outstanding is always accurate, not optimistic.',
      },
      {
        title: '5. See your real rupee profit',
        desc: 'With income, expenses, and TDS in one dashboard, you know your actual profit through the year — instead of scrambling to reconstruct it the week before filing.',
      },
    ],
  },
  features: {
    heading: 'Built for the Indian freelance business',
    sub: 'The features that replace your Word-invoice-and-screenshots stack.',
    items: [
      { icon: ReceiptText, title: 'GST invoices & quotations', desc: 'GSTIN, CGST/SGST or IGST, rupee invoices and quotes, exported as a clean PDF in one click.' },
      { icon: Wallet, title: 'UPI, bank & TDS tracking', desc: 'Record UPI and bank payments, note the TDS a client deducted, and keep every due accurate.' },
      { icon: KanbanSquare, title: 'Lead & CRM pipeline', desc: 'One pipeline for referrals, platform enquiries, and direct clients — nothing slips.' },
      { icon: Users, title: 'Client profiles', desc: 'Every client, Indian or overseas, in one profile with full history, files, and notes.' },
      { icon: Handshake, title: 'White-label client portal', desc: 'A branded portal that makes you look established to clients anywhere in the world.' },
      { icon: PieChart, title: 'Live profit dashboard', desc: 'Your real rupee profit after expenses, fees, and TDS — ready when tax season arrives.' },
    ],
  },
  compare: {
    heading: 'The scattered freelance stack vs one Indian workspace',
    sub: 'What changes the day the whole business stops living across five apps.',
    old: [
      'Clients spread across Upwork, Fiverr, email, and WhatsApp',
      'Invoices built in Word without a clear GST format',
      'Payments chased whenever you happen to remember',
      'TDS ignored until your income won’t reconcile',
      'Rupee profit guessed at from a folder of screenshots',
    ],
    calm: [
      'Every client, platform or direct, in one profile',
      'GST-ready rupee invoices generated in under a minute',
      'Dues tracked with reminders so you get paid on time',
      'TDS recorded per invoice, so the numbers add up',
      'Live rupee profit on one dashboard, ready for tax time',
    ],
  },
  pricing: {
    heading: 'Rupee pricing that fits a freelance income',
    body: [
      'No dollar subscription that stings a little more at every renewal. Clienter’s Free plan is free forever, priced in rupees — up to 5 clients and 10 projects, the full CRM pipeline, GST invoicing, and meetings — enough to run your first clients properly without paying a paisa or entering a card.',
      'When you outgrow it, Pro is a launch-priced ₹199/month (was ₹499) — up to 30 clients, 60 projects, and 5 team members — and it unlocks the white-label client portal that quietly impresses clients abroad. Ultra at ₹799/month (was ₹1,999) removes the limits for a busy freelancer or small studio. It’s priced for an Indian freelance income, not an enterprise budget.',
    ],
  },
  faqHeading: 'Indian freelancer FAQs',
  faqs: [
    {
      q: 'Do I need GST to send invoices as a freelancer in India?',
      a: 'Not always. GST registration generally applies once your turnover crosses the threshold (commonly ₹20 lakh for services, and lower in some special-category states), and the rules differ when you export services abroad — so it’s worth confirming with your CA. Either way, Clienter handles both: add your GSTIN and apply CGST/SGST or IGST when you’re registered, or raise a clean non-GST invoice when you’re not.',
    },
    {
      q: 'How do I track UPI and bank payments from clients?',
      a: 'Clienter lets you record each payment against its invoice as it arrives by UPI or bank transfer, mark invoices paid or part-paid, and see outstanding dues at a glance — with reminders so you chase less and get paid sooner. Your money picture always matches what has actually landed in your account.',
    },
    {
      q: 'What is the best software for freelancers in India?',
      a: 'The best Indian freelance software handles the whole business in rupees — clients, projects, GST invoices, UPI and bank payments, and the TDS clients deduct — at a price that fits a freelance income. Clienter combines all of that in one workspace, starting free with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'Does Clienter handle the TDS that clients deduct?',
      a: 'Many Indian clients deduct TDS (for example under section 194J) before paying you. Clienter lets you record the amount actually received and the TDS withheld against each invoice, so your dues reconcile and your rupee income stays accurate. Your CA still files the return — but your books already match reality.',
    },
  ],
  related: [
    { href: '/for/freelancers', label: 'For Freelancers', desc: 'The all-in-one freelance business workspace, in depth.' },
    { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'The lead-and-client pipeline side, in depth.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'GST-ready rupee invoices with CGST/SGST/IGST.' },
    { href: '/pricing', label: 'Pricing', desc: 'Rupee pricing — free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your freelance business without the chaos',
  ctaSubtitle: 'Create your free account and bring your clients, GST invoices, and payments into one place today.',
}
