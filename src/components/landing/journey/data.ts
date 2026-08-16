/**
 * The Nova Studio story — one client, five acts.
 *
 * Every number, name and date on screen comes from here. If a value appears in
 * two scenes it is read from the same constant, so the story can never
 * contradict itself. Nothing here is real: it is the sample data a freelancer
 * would see, dressed as one coherent month of work.
 */

export const STUDIO = {
  name: 'Webcros',
  owner: 'Rajesh',
  initials: 'W',
  logo: '/webcros-logo.jpg',
} as const

/** Clienter's own mark, as it sits in the owner app's rail. */
export const CLIENTER_LOGO = '/logo.png'

export const CLIENT = {
  name: 'Nova Studio',
  contact: 'Ananya Rao',
  first: 'Ananya',
  short: 'Ananya R.',
  phone: '+91 98211 04477',
  email: 'ananya@novastudio.in',
  sourceLabel: 'Instagram',
  /** Mirrors SOURCE_BADGE.instagram in the app. */
  sourceBadge: 'bg-pink-50 text-pink-700',
  initials: 'NS',
  created: '8 Jul 2026',
  won: '11 Jul 2026',
  converted: '12 Jul 2026',
  value: '₹1,20,000',
} as const

export const PROJECT = {
  name: 'Brand Website Revamp',
  slug: 'brand-website-revamp',
  type: 'One-off Project',
  budget: '₹1,20,000',
  created: '12 Jul 2026',
  start: '12 Jul 2026',
  deadline: '15 Aug 2026',
  progress: 65,
} as const

export const TEAM = [
  {
    name: 'Arjun M.',
    email: 'arjun@webcros.in',
    role: 'Developer',
    initials: 'A',
    paid: '₹9,000',
    of: '₹18,000',
    pct: 50,
  },
  {
    name: 'Priya S.',
    email: 'priya@webcros.in',
    role: 'Designer',
    initials: 'P',
    paid: '₹6,000',
    of: '₹15,000',
    pct: 40,
  },
] as const

export const INVOICE = {
  number: 'INV-2026-058',
  paidOn: '14 Jul 2026',
  issued: '14/07/2026',
  short: '14/07',
  subtotal: '₹40,000',
  gstLabel: 'GST 18%',
  gst: '₹7,200',
  total: '₹47,200',
  totalValue: 47200,
  status: 'Paid',
  remaining: '₹80,000',
} as const

export const MEETING = {
  title: 'Kickoff call',
  day: '18',
  month: 'Jul',
  date: '18 Jul 2026',
  time: '11:00 AM',
  zone: 'IST',
  duration: '1 hour',
  reminder: '30 minutes before',
} as const

export const MESSAGES = [
  { from: 'client', body: 'Hi Rajesh, loving the first drafts! Quick change on the hero?', time: '10:42 am' },
  { from: 'owner', body: 'On it — sending an updated version today.', time: '10:44 am' },
] as const

export const REVIEW = {
  author: CLIENT.short,
  rating: 5,
  body: 'Delivered ahead of schedule and kept us in the loop the whole way. Would hire again.',
  on: '22 Jul 2026',
  month: 'July 2026',
  publicScore: 4.9,
  count: 12,
} as const

export const REFERRAL = {
  name: 'Vikram T.',
  company: 'Tandem Coffee',
  email: 'vikram@tandemcoffee.in',
  note: 'They need a new site before their second outlet opens.',
  sourceLabel: 'Portal Referral',
  /** Mirrors SOURCE_BADGE.portal_referral in the app. */
  sourceBadge: 'bg-teal-50 text-teal-700',
  value: '₹65,000',
  on: '24 Jul 2026',
} as const

/** The app's seeded lead stages, with the colours it seeds them with. */
export const LEAD_STAGES = [
  { name: 'New', dot: 'bg-blue-400', count: 12 },
  { name: 'Contacted', dot: 'bg-purple-400', count: 6 },
  { name: 'Qualified', dot: 'bg-amber-400', count: 3 },
  { name: 'Won', dot: 'bg-emerald-400', count: 5 },
] as const

/* ══════════════════════════════════════════════════════════════════════════
   THE TIMELINE

   Five acts. Each act opens with a rest — the window holds still on the act's
   first screen while the thread marks the chapter — then plays its scenes one at
   a time as you scroll. A scene never advances on its own.

   `weight` is scroll dwell. Scenes that perform an action (a cursor travels and
   clicks something) get more room than scenes that simply reveal a result, and
   the three hero moments get the most.
   ══════════════════════════════════════════════════════════════════════════ */

export interface Act {
  n: string
  title: string
  line: string
  /** Dwell for the act's opening rest — deliberately long, so a chapter turn
      reads as a stop rather than one more scroll tick. */
  weight: number
}

export interface Scene {
  id: string
  act: number
  /** Path typed into the URL bar. */
  url: string
  /** Sidebar item to light, or null for screens with no app rail. */
  nav: string | null
  chrome: 'owner' | 'portal' | 'public'
  /** Rail heading for this scene. */
  title: string
  /** One line of story, not a feature description. */
  line: string
  /** Plain-language payoff on the highlighted control. */
  tip?: string
  /** Where the cursor goes, in stage pixels. Absent = no cursor, just a reveal. */
  cursor?: { x: number; y: number; dragTo?: { x: number; y: number } }
  weight: number
  hero?: boolean
  /** Mobile crop override, in stage pixels. Boards and three-pane screens need
      the window pointed somewhere other than the default content column. */
  crop?: { x: number; y?: number; w: number; h?: number }
}

export const ACTS: Act[] = [
  {
    n: 'I',
    title: 'The lead',
    line: 'A stranger messages you on Instagram. She lands in a pipeline, not an inbox.',
    weight: 1.15,
  },
  {
    n: 'II',
    title: 'The client',
    line: 'One click turns the won lead into a client — with a front door of her own.',
    weight: 1.15,
  },
  {
    n: 'III',
    title: 'The work',
    line: 'A project, a team, an invoice, a meeting. Everything in the same place.',
    weight: 1.15,
  },
  {
    n: 'IV',
    title: 'Her side',
    line: 'The portal, from where Ananya sits. Your name on it, not ours.',
    weight: 1.15,
  },
  {
    n: 'V',
    title: 'The loop',
    line: 'Completed, reviewed, referred. And then it starts again.',
    weight: 1.15,
  },
]

export const SCENES: Scene[] = [
  // ── ACT I ────────────────────────────────────────────────────────────────
  {
    id: 'leads-board',
    act: 0,
    url: 'clienter.co.in/leads',
    nav: '/leads',
    chrome: 'owner',
    title: 'She lands in the pipeline',
    line: 'Ananya messages you on Instagram. You add her once, tag where she came from, and drag her along as the deal moves.',
    tip: 'Your own stages. Drag a deal across as it moves.',
    cursor: { x: 992, y: 292, dragTo: { x: 1280, y: 286 } },
    weight: 1.0,
    crop: { x: 840, y: 126, w: 600, h: 600 },
  },
  {
    id: 'lead-drawer',
    act: 0,
    url: 'clienter.co.in/leads',
    nav: '/leads',
    chrome: 'owner',
    title: 'Won, with everything attached',
    line: 'Her details, her stage, her whole activity log — sitting in one drawer, ready to become a client.',
    tip: 'Nothing to retype. Convert straight from the lead.',
    cursor: { x: 1266, y: 68 },
    weight: 0.9,
    crop: { x: 500, y: 0, w: 720, h: 720 },
  },

  // ── ACT II ───────────────────────────────────────────────────────────────
  {
    id: 'convert-form',
    act: 1,
    url: 'clienter.co.in/clients/new?from=lead',
    nav: '/clients',
    chrome: 'owner',
    title: 'Stranger becomes client',
    line: 'The form arrives prefilled from the lead. Set the currency and save — the lead is marked won on the way through.',
    tip: 'Prefilled from the lead. Just pick a currency.',
    cursor: { x: 1094, y: 648 },
    weight: 0.85,
  },
  {
    id: 'client-page',
    act: 1,
    url: 'clienter.co.in/clients/nova-studio',
    nav: '/clients',
    chrome: 'owner',
    title: 'A front door of her own',
    line: 'Switch on a portal that carries your name, not ours, and Clienter emails her a temporary password.',
    tip: 'White-label, per client. Password sign-in, no magic links.',
    cursor: { x: 1266, y: 522 },
    weight: 0.95,
  },
  {
    id: 'portal-invited',
    act: 1,
    url: 'clienter.co.in/clients/nova-studio',
    nav: '/clients',
    chrome: 'owner',
    title: 'Invite sent',
    line: 'Her sign-in is live at your own portal address. She picks her own password the first time she opens it.',
    weight: 0.72,
  },

  // ── ACT III ──────────────────────────────────────────────────────────────
  {
    id: 'project-new',
    act: 2,
    url: 'clienter.co.in/projects/new',
    nav: '/projects',
    chrome: 'owner',
    title: 'The work begins',
    line: 'One-off or monthly retainer, a budget, a deadline. The shape of the job, set once.',
    tip: 'One-off or retainer — Clienter bills each differently.',
    cursor: { x: 1142, y: 668 },
    weight: 0.9,
  },
  {
    id: 'project-overview',
    act: 2,
    url: 'clienter.co.in/projects/brand-website-revamp',
    nav: '/projects',
    chrome: 'owner',
    title: 'Progress she can see',
    line: 'Post an update and it appears in her portal. Ask for sign-off and she can approve it there too.',
    weight: 0.82,
  },
  {
    id: 'project-payments',
    act: 2,
    url: 'clienter.co.in/projects/brand-website-revamp',
    nav: '/projects',
    chrome: 'owner',
    title: 'The advance lands',
    line: 'Record ₹40,000. A GST invoice numbers itself, the PDF is ready, and the balance updates on its own.',
    tip: 'Record the payment — the GST invoice writes itself.',
    cursor: { x: 884, y: 630 },
    weight: 1.15,
    hero: true,
  },
  {
    id: 'project-team',
    act: 2,
    url: 'clienter.co.in/projects/brand-website-revamp',
    nav: '/projects',
    chrome: 'owner',
    title: 'Who is building it',
    line: 'Arjun and Priya get assigned, and what you owe each of them is tracked against the same project.',
    tip: 'Track what you owe your team, project by project.',
    cursor: { x: 1328, y: 424 },
    weight: 0.9,
  },
  {
    id: 'project-files',
    act: 2,
    url: 'clienter.co.in/projects/brand-website-revamp',
    nav: '/projects',
    chrome: 'owner',
    title: 'Deliverables, shipped',
    line: 'Files land here, and the ones you mark shared show up in her portal to download.',
    weight: 0.75,
  },
  {
    id: 'meeting-new',
    act: 2,
    url: 'clienter.co.in/meetings',
    nav: '/meetings',
    chrome: 'owner',
    title: 'A room to meet in',
    line: 'The kickoff call syncs to Google Calendar and gets a Google Meet link generated automatically, plus a reminder before either of you forgets.',
    tip: 'Google Calendar sync and an automatic Google Meet link.',
    cursor: { x: 1048, y: 674 },
    weight: 0.9,
  },
  {
    id: 'projects-board',
    act: 2,
    url: 'clienter.co.in/projects',
    nav: '/projects',
    chrome: 'owner',
    title: 'The whole studio, one board',
    line: 'Every project across every client, with budget and what is still pending on each.',
    weight: 0.8,
    crop: { x: 560, y: 126, w: 620, h: 620 },
  },

  // ── ACT IV ───────────────────────────────────────────────────────────────
  {
    id: 'portal-login',
    act: 3,
    url: 'portal.clienter.co.in/nova-studio',
    nav: null,
    chrome: 'portal',
    title: 'Her side of the glass',
    line: 'She signs in with the email and password you sent. No app to install, nothing to explain.',
    tip: 'A password she already has. Never a magic link.',
    cursor: { x: 720, y: 566 },
    weight: 0.8,
  },
  {
    id: 'portal-home',
    act: 3,
    url: 'portal.clienter.co.in/nova-studio',
    nav: '/portal',
    chrome: 'portal',
    title: 'Everything, and only hers',
    line: 'What is running, what is owed, what needs her. One client, one portal — she never sees another.',
    weight: 0.92,
  },
  {
    id: 'portal-project',
    act: 3,
    url: 'portal.clienter.co.in/projects/brand-website-revamp',
    nav: '/portal/projects',
    chrome: 'portal',
    title: 'The work, from her chair',
    line: 'Timeline, budget, the files you shared and the invoice you sent — no email thread required.',
    weight: 0.82,
  },
  {
    id: 'portal-messages',
    act: 3,
    url: 'portal.clienter.co.in/messages',
    nav: '/portal/messages',
    chrome: 'portal',
    title: 'She just types',
    line: 'One thread per client, live. No WhatsApp archaeology, no lost context.',
    tip: 'Live messaging, in the same place as the work.',
    cursor: { x: 1392, y: 812 },
    weight: 0.9,
    crop: { x: 256, y: 60, w: 700, h: 700 },
  },
  {
    id: 'owner-messages',
    act: 3,
    url: 'clienter.co.in/messages',
    nav: '/messages',
    chrome: 'owner',
    title: 'And you answer',
    line: 'Your side of the same thread, next to every other client conversation.',
    weight: 0.85,
    crop: { x: 556, y: 0, w: 660, h: 700 },
  },

  // ── ACT V ────────────────────────────────────────────────────────────────
  {
    id: 'mark-completed',
    act: 4,
    url: 'clienter.co.in/projects/brand-website-revamp',
    nav: '/projects',
    chrome: 'owner',
    title: 'Delivered',
    line: 'You move it to completed. That is what asks her for a review.',
    tip: 'Completing a project invites the review.',
    cursor: { x: 326, y: 106 },
    weight: 0.78,
  },
  {
    id: 'portal-review',
    act: 4,
    url: 'portal.clienter.co.in/projects/brand-website-revamp',
    nav: '/portal/projects',
    chrome: 'portal',
    title: 'Five stars, from her',
    line: 'She rates it in her own portal. Because only she can reach it, the review is verified by definition.',
    tip: 'Only a real client can leave one. That is the point.',
    cursor: { x: 512, y: 344 },
    weight: 1.05,
    hero: true,
  },
  {
    id: 'portal-referral',
    act: 4,
    url: 'portal.clienter.co.in/referrals',
    nav: '/portal/referrals',
    chrome: 'portal',
    title: 'And she sends you Vikram',
    line: 'She introduces someone who needs the same work. He arrives in your pipeline as a lead.',
    tip: 'Referrals drop straight into Leads, tagged as referrals.',
    cursor: { x: 448, y: 404 },
    weight: 0.95,
  },
  {
    id: 'public-reviews',
    act: 4,
    url: 'clienter.co.in/r/webcros',
    nav: null,
    chrome: 'public',
    title: 'Proof, on a page you can send',
    line: 'Every review on it came through a client portal. That is a claim nobody else on a proposal can make.',
    weight: 1.0,
    hero: true,
  },
]

/* ── Timeline assembly ─────────────────────────────────────────────────────
   Flattened to a list of slots: an act's title card, then its scenes. One
   scroll-progress value indexes straight into this.
   ────────────────────────────────────────────────────────────────────────── */

export type Slot =
  | { kind: 'intro'; act: number; scene: number; weight: number }
  | { kind: 'scene'; act: number; scene: number; weight: number }

export const SLOTS: Slot[] = ACTS.flatMap((act, a) => {
  const first = SCENES.findIndex((s) => s.act === a)
  const own = SCENES.filter((s) => s.act === a)
  return [
    { kind: 'intro' as const, act: a, scene: first, weight: act.weight },
    ...own.map((s) => ({
      kind: 'scene' as const,
      act: a,
      scene: SCENES.indexOf(s),
      weight: s.weight,
    })),
  ]
})

export const TOTAL_WEIGHT = SLOTS.reduce((sum, s) => sum + s.weight, 0)

/** Scroll height, in vh, granted per unit of weight. */
export const VH_PER_WEIGHT = 60

/** Cumulative start offset (0–1 of the track) for each slot. */
export const SLOT_STARTS = SLOTS.reduce<number[]>((acc, _, i) => {
  acc.push((acc[i - 1] ?? 0) + (i === 0 ? 0 : SLOTS[i - 1].weight / TOTAL_WEIGHT))
  return acc
}, [])

/** Start/end track fraction for a slot — used by the act cards and the thread. */
export function slotRange(i: number): [number, number] {
  return [SLOT_STARTS[i], SLOT_STARTS[i] + SLOTS[i].weight / TOTAL_WEIGHT]
}

/** Index of each act's title-card slot. */
export const INTRO_SLOTS = SLOTS.reduce<number[]>((acc, s, i) => {
  if (s.kind === 'intro') acc.push(i)
  return acc
}, [])

/** The scene shown behind an act card before the swap — the previous act's last. */
export function outgoingScene(slot: number): number {
  for (let i = slot - 1; i >= 0; i -= 1) {
    if (SLOTS[i].kind === 'scene') return SLOTS[i].scene
  }
  return SLOTS[slot].scene
}
