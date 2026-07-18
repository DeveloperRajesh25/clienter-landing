import {
  CalendarClock,
  KanbanSquare,
  ReceiptText,
  Wallet,
  Eye,
  Star,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const PHOTOGRAPHERS: AudiencePageConfig = {
  slug: 'photographers',
  path: '/for/photographers',
  audience: 'Photographers',
  metaTitle: 'Photography Client Management Software (Free to Start)',
  metaDescription:
    'Run your whole photography business in one place — bookings, shoots, galleries, and payments. Photography client management software for India. Start free.',
  keywords: [
    'photography client management software',
    'photographer CRM',
    'wedding photography business',
    'managing photo shoots and bookings',
    'photography booking software',
  ],
  ogTitle: 'Photography Client Management Software — Clienter',
  ogDescription:
    'Bookings, shoots, advances, and delivery in one calm workspace built for photographers. Start free.',
  breadcrumbLabel: 'For Photographers',
  eyebrow: 'For photographers',
  h1: 'Photography client management software that runs every',
  h1Highlight: 'booking',
  subheading:
    'Photography is 20% the shoot and 80% everything around it — enquiries, dates, advances, deliverables, and the balance payment. Clienter puts all of it in one place so the admin stops eating the hours you’d rather spend behind the camera.',
  intro: {
    heading: 'Software built around your bookings, not just your photos',
    body: [
      'Every working photographer runs two businesses at once: the craft you were hired for, and the operation around it. That operation is relentless — enquiries pouring in over Instagram and WhatsApp, dates to hold and confirm, a booking advance here and a balance due on delivery there, shoot-day logistics, an editing backlog, revisions, and clients asking “where are my photos?” Most photographers hold this together with a paper diary, a chat folder, and their own memory — and in a business where a clashed date is a disaster, memory is not a system.',
      'Photography client management software replaces that with one place where the whole booking lifecycle lives and stays connected — every enquiry, shoot, quotation, advance, and delivery tied to the client it belongs to. Instead of a diary for dates, DMs for enquiries, and a spreadsheet for who has paid what, you get a single workspace that runs the business side so you can concentrate on the pictures. Clienter is built for exactly this.',
      'It fits the Indian photography reality too: booking advances collected over UPI, GST-ready invoices on your packages, the feast-and-famine cashflow of wedding season versus the quiet months, and pricing in rupees that makes sense for a studio of one rather than an enterprise.',
    ],
  },
  pains: {
    heading: 'The admin behind every shoot',
    sub: 'The work that has nothing to do with the camera but decides whether the business survives.',
    items: [
      {
        title: 'Enquiries you lose in the DMs',
        desc: 'In peak season the enquiries flood in over Instagram and WhatsApp, some go quiet, and a date you could have booked slips away because nothing was following up.',
      },
      {
        title: 'Double-booked or forgotten dates',
        desc: 'A diary and your memory don’t scale across a full season. In this business a clashed date or a forgotten shoot isn’t a slip — it’s a reputation problem.',
      },
      {
        title: 'Advances and balances you lose track of',
        desc: 'A booking advance on one shoot, a balance due on delivery for another — across fifteen bookings it’s genuinely hard to know who owes what and when.',
      },
      {
        title: 'Deliverables that drag and clients that chase',
        desc: 'The edit backlog grows, revisions pile up, and there’s no single place a client can check status — so your phone fills with “are they ready yet?” messages.',
      },
      {
        title: 'Feast-or-famine cashflow',
        desc: 'Wedding season booms and the off-season is quiet. Without real numbers you can’t see the whole year’s picture, so you can’t price or plan for the lean months.',
      },
    ],
  },
  workflow: {
    heading: 'A shoot, from enquiry to album, in one place',
    sub: 'Here’s how a typical booking flows through Clienter.',
    steps: [
      {
        title: '1. Capture every enquiry',
        desc: 'A date enquiry from Instagram, a referral, or a wedding-fair lead drops straight into your pipeline. Track it through “enquired”, “date held”, and “booked” so nothing quietly goes cold.',
      },
      {
        title: '2. Book the shoot and take the advance',
        desc: 'When they confirm, the lead becomes a client and the shoot becomes a project with its date, package, and deliverables. Send a quotation and collect the booking advance.',
      },
      {
        title: '3. Run the shoot day',
        desc: 'Pre-shoot consults sync to Google Calendar with auto Meet links, and the project holds the shot list, deadline, and budget — second shooter, travel, album, and prints all in one view.',
      },
      {
        title: '4. Deliver and collect the balance',
        desc: 'Share progress and delivery status through the white-label client portal, then raise the GST-ready balance invoice and mark it paid the moment it lands over UPI or bank transfer.',
      },
      {
        title: '5. Turn the album into your next booking',
        desc: 'Finish the shoot and Clienter gathers a verified review from the couple you can show the next enquiry — the referral engine every photography business actually runs on.',
      },
    ],
  },
  features: {
    heading: 'Everything around the shoot, in one tool',
    sub: 'The features that replace your diary-and-DMs stack.',
    items: [
      { icon: CalendarClock, title: 'Bookings & calendar', desc: 'Shoots and consults on a synced calendar with Google Calendar sync and auto Meet links — no double-bookings.' },
      { icon: KanbanSquare, title: 'Enquiry pipeline', desc: 'Every date enquiry in one visual pipeline, from first DM through held to booked.' },
      { icon: ReceiptText, title: 'Advances & invoices', desc: 'Booking-advance and balance invoices, GST-ready, with one-click PDF export.' },
      { icon: Wallet, title: 'Payments & profit', desc: 'Track advances, balances, and expenses so you can see profit across the whole season.' },
      { icon: Eye, title: 'Client portal', desc: 'A branded space where clients track their booking, sign, and follow delivery status.' },
      { icon: Star, title: 'Verified reviews', desc: 'Turn happy couples into credible five-star proof that wins the next booking.' },
    ],
  },
  compare: {
    heading: 'The diary-and-DMs way vs one booking system',
    sub: 'What changes the day the whole business stops living in your head.',
    old: [
      'Enquiries lost across Instagram DMs and WhatsApp',
      'Dates tracked in a paper diary you hope you updated',
      'Advances and balances remembered shoot by shoot',
      '“Where are my photos?” messages with no status to point to',
      'The season’s profit guessed at from a pile of UPI screenshots',
    ],
    calm: [
      'Every enquiry in one pipeline with follow-up reminders',
      'Shoots, consults, and dates on a synced calendar',
      'Advance and balance tracked automatically per booking',
      'A portal where clients see delivery status themselves',
      'Live profit across the whole season on one dashboard',
    ],
  },
  pricing: {
    heading: 'Priced for a studio of one (or a small team)',
    body: [
      'Clienter’s Free plan is genuinely usable for a photographer starting out — up to 5 clients and 10 projects, the full enquiry pipeline, invoicing, and meetings, free forever with no credit card. It’s enough to run your first season’s bookings properly instead of from a diary.',
      'When the calendar fills up, Pro is a launch-priced ₹199/month (was ₹499) — up to 30 clients, 60 projects, and 5 team members for your second shooter, editor, and coordinator — and it unlocks the white-label client portal. Ultra at ₹799/month (was ₹1,999) removes the limits entirely for a busy studio. No per-seat enterprise pricing, no annual lock-in.',
    ],
  },
  faqHeading: 'Photographer FAQs',
  faqs: [
    {
      q: 'What is the best client management software for photographers?',
      a: 'The best photography client management software handles the whole booking lifecycle — enquiries, dates, booking advances, deliverables, and balance payments — in one place, at a price a studio can afford. Clienter does all of that, starting free and with Pro at a launch price of ₹199/month.',
    },
    {
      q: 'Can I take booking advances and balance payments separately?',
      a: 'Yes. Raise a quotation and a booking-advance invoice when a client confirms, then a balance invoice on delivery, and track what’s paid and what’s outstanding for each shoot on your dashboard. Every invoice is GST-ready if you’re registered, or plain if you’re not.',
    },
    {
      q: 'How do I manage wedding photography bookings and dates?',
      a: 'Keep every enquiry in one pipeline, convert confirmed dates into shoot projects, and sync consults to Google Calendar so you never double-book. Each shoot carries its package, deliverables, deadline, budget, and payments in a single profile — so the whole booking lives in one place.',
    },
    {
      q: 'Can clients follow their booking and delivery status?',
      a: 'Clienter’s white-label client portal gives each client a branded space to track their booking, sign proposals, and follow delivery status — so the “are they ready yet?” messages stop. You still deliver the final gallery however you like, while status and paperwork stay in one professional place.',
    },
  ],
  related: [
    { href: '/features/crm-lead-pipeline', label: 'Lead & CRM Pipeline', desc: 'Turn shoot enquiries into booked dates without losing any.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'Booking advances and balance invoices, GST-ready.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded space where clients track their booking and delivery.' },
    { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
  ],
  ctaTitle: 'Run your photography business without the chaos',
  ctaSubtitle: 'Create your free account and bring your bookings, shoots, and payments into one place today.',
}
