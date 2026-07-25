/**
 * The Nova Studio story — one client, ten chapters.
 *
 * Every number, name and date on screen comes from here. If a value appears in
 * two stages it is read from the same constant, so the story can never
 * contradict itself. Nothing in this file is real: it is the sample data a
 * freelancer would see, dressed as one coherent month of work.
 */

export const STUDIO = {
  name: 'Webcros',
  owner: 'Rajesh',
  initials: 'W',
} as const

export const CLIENT = {
  name: 'Nova Studio',
  contact: 'Ananya Rao',
  short: 'Ananya R.',
  phone: '+91 98211 04477',
  email: 'ananya@novastudio.in',
  source: 'instagram',
  sourceLabel: 'Instagram',
  /** Matches the app's SOURCE_BADGE map. */
  sourceBadge: 'bg-pink-50 text-pink-700',
  initials: 'NS',
  created: '8 Jul 2026',
  won: '11 Jul 2026',
  converted: '12 Jul 2026',
  value: '₹1,20,000',
} as const

export const PROJECT = {
  name: 'Brand Website Revamp',
  type: 'Freelance',
  budget: '₹1,20,000',
  created: '12 Jul 2026',
  deadline: '15 Aug 2026',
  progress: 65,
} as const

export const TEAM = [
  { name: 'Arjun M.', role: 'Developer', initials: 'AM', tint: 'bg-sky-100 text-sky-700' },
  { name: 'Priya S.', role: 'Designer', initials: 'PS', tint: 'bg-violet-100 text-violet-700' },
] as const

export const INVOICE = {
  number: 'INV-2026-058',
  paidOn: '14 Jul 2026',
  subtotal: '₹40,000',
  gstLabel: 'GST 18%',
  gst: '₹7,200',
  total: '₹47,200',
  totalValue: 47200,
  status: 'PAID',
  remaining: '₹80,000',
} as const

export const MEETING = {
  title: 'Kickoff call',
  date: '18 Jul 2026',
  time: '11:00 AM IST',
  platform: 'Google Meet',
  reminder: '30 min before',
} as const

export const MESSAGES = [
  {
    from: 'client' as const,
    body: 'Hi Rajesh, loving the first drafts! Quick change on the hero?',
    time: '10:42 AM',
    ago: 'yesterday',
  },
  {
    from: 'owner' as const,
    body: 'On it — sending an updated version today.',
    time: '10:44 AM',
    ago: 'yesterday',
  },
] as const

export const REVIEW = {
  author: CLIENT.short,
  rating: 5,
  body: 'Delivered ahead of schedule and kept us in the loop the whole way. Would hire again.',
  month: 'Jul 2026',
  publicScore: '4.9',
  reviewCount: 12,
} as const

export const REFERRAL = {
  name: 'Vikram T.',
  company: 'Tandem Coffee',
  initials: 'VT',
  sourceLabel: 'Portal Referral',
  /** Matches the app's SOURCE_BADGE.portal_referral. */
  sourceBadge: 'bg-teal-50 text-teal-700',
  value: '₹65,000',
} as const

/** The pipeline columns are the app's seeded lead stages, in order. */
export const LEAD_STAGES = [
  { name: 'New', dot: 'bg-blue-500' },
  { name: 'Contacted', dot: 'bg-purple-500' },
  { name: 'Qualified', dot: 'bg-amber-500' },
  { name: 'Proposal Sent', dot: 'bg-orange-500' },
  { name: 'Won', dot: 'bg-emerald-500' },
] as const

// ── Chapters ────────────────────────────────────────────────────────────────
// `weight` is scroll dwell. The three hero moments (2, 6, 10) get noticeably
// more room; connective beats move fast so the section breathes instead of
// metronoming through ten identical panels.

export interface Chapter {
  n: string
  /** Section-level chapter title. */
  title: string
  /** One line of story, not a feature description. */
  line: string
  /** The plain-language payoff, shown on the highlighted control. */
  tip: string
  url: string
  weight: number
  hero?: boolean
  act: 'I' | 'II' | 'III'
}

export const CHAPTERS: Chapter[] = [
  {
    n: '01',
    title: 'The first message',
    line: 'Ananya finds you on Instagram. She lands in your pipeline — not somewhere in your inbox.',
    tip: 'Your own stages. Every lead tagged with where it came from.',
    url: 'clienter.co.in/leads',
    weight: 1.05,
    act: 'I',
  },
  {
    n: '02',
    title: 'Stranger becomes client',
    line: 'You mark the deal won. Nova Studio moves itself into Clients — contact, value and history intact.',
    tip: 'One click converts a won lead. Nothing gets retyped.',
    url: 'clienter.co.in/clients',
    weight: 1.55,
    hero: true,
    act: 'I',
  },
  {
    n: '03',
    title: 'Her own front door',
    line: 'You switch on a portal that carries your name, not ours — built for this one client.',
    tip: 'White-label, per client. She never sees another client’s work.',
    url: 'clienter.co.in/clients/nova-studio',
    weight: 0.85,
    act: 'II',
  },
  {
    n: '04',
    title: 'The work begins',
    line: 'A budget, a deadline, and the two people who’ll actually build it.',
    tip: 'Freelance or retainer — set the shape of the work up front.',
    url: 'clienter.co.in/projects/new',
    weight: 0.95,
    act: 'II',
  },
  {
    n: '05',
    title: 'Sixty-five percent',
    line: 'Tasks move, files land, progress climbs — and you choose exactly what she can see.',
    tip: 'Flip one toggle to share progress. Keep the rest internal.',
    url: 'clienter.co.in/projects/brand-website-revamp',
    weight: 1.05,
    act: 'II',
  },
  {
    n: '06',
    title: 'The advance lands',
    line: 'You record ₹40,000. A GST invoice writes itself, and the receipt is already a PDF.',
    tip: 'Record a payment — the tax invoice and receipt generate themselves.',
    url: 'clienter.co.in/payments',
    weight: 1.6,
    hero: true,
    act: 'II',
  },
  {
    n: '07',
    title: 'Her side of the glass',
    line: 'Ananya signs in with a password and sees her projects, her invoices, her files. Only hers.',
    tip: 'Password sign-in. No app to install, nothing to explain.',
    url: 'portal.clienter.co.in/nova-studio',
    weight: 1.0,
    act: 'III',
  },
  {
    n: '08',
    title: 'A room to meet in',
    line: 'The kickoff call gets a Google Meet link and a reminder that fires before either of you forgets.',
    tip: 'Meet link generated, reminder 30 minutes ahead.',
    url: 'clienter.co.in/meetings',
    weight: 0.85,
    act: 'III',
  },
  {
    n: '09',
    title: 'Still talking',
    line: 'One thread per client — the whole conversation in the same place as the work.',
    tip: 'Live messaging with your client. No more WhatsApp archaeology.',
    url: 'clienter.co.in/messages',
    weight: 1.0,
    act: 'III',
  },
  {
    n: '10',
    title: 'The loop closes',
    line: 'The project completes. Five stars, verified. Then Ananya sends you Vikram — and it starts again.',
    tip: 'Verified reviews become a public badge. Referrals arrive as leads.',
    url: 'clienter.co.in/reviews',
    weight: 1.7,
    hero: true,
    act: 'III',
  },
]

export const TOTAL_WEIGHT = CHAPTERS.reduce((sum, c) => sum + c.weight, 0)

/** Scroll height, in vh, granted to each stage — hero moments dwell longer. */
export const VH_PER_WEIGHT = 84

/** Cumulative start offset (0–1 of the track) for each stage. */
export const STAGE_STARTS = CHAPTERS.reduce<number[]>((acc, c, i) => {
  acc.push((acc[i - 1] ?? 0) + (i === 0 ? 0 : CHAPTERS[i - 1].weight / TOTAL_WEIGHT))
  return acc
}, [])
