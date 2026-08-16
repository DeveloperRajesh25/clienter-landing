import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import {
  FileText,
  Check,
  X,
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Lock,
  Download,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Sheet,
  MessageCircle,
  StickyNote,
  Mail,
  CalendarDays,
  Wallet,
  Clock,
  type LucideIcon,
} from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { HeroGrid } from '@/components/landing/HeroGrid'
import { HeroScroll } from '@/components/landing/HeroScroll'
import { SpotlightButton } from '@/components/landing/SpotlightButton'
import { DashboardShowcase } from '@/components/landing/DashboardShowcase'
import { Reveal } from '@/components/landing/Reveal'
import { Marquee } from '@/components/landing/Marquee'
import { Faq } from '@/components/landing/Faq'
import { Parallax } from '@/components/landing/Parallax'
import { Magnetic } from '@/components/landing/Magnetic'
import { SectionLabel } from '@/components/landing/SectionLabel'
import { PricingSection } from '@/components/landing/PricingSection'
import { JsonLd } from '@/components/marketing/JsonLd'
import { DataSecurity } from '@/components/marketing/DataSecurity'
import { VerifiedReviews } from '@/components/marketing/VerifiedReviews'
import { pageMetadata, FOUNDER, SOCIALS } from '@/lib/site'
import { faqSchema } from '@/lib/structured-data'
import { HOME_FAQS } from '@/lib/faq-data'

/**
 * The Nova Studio journey — the `#features` section. Split out of the main
 * bundle because it's the only thing on the page that needs framer-motion, and
 * it sits well below the fold. SSR is deliberately left on: the ten chapters of
 * story copy are the section's real content and belong in the HTML.
 */
const ClientJourney = dynamic(
  () => import('@/components/landing/journey/ClientJourney').then((m) => m.ClientJourney),
  { loading: () => <div className="h-[60vh]" /> }
)

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Clienter — Client Management Software for Freelancers & Agencies',
    description:
      'Clienter brings clients, projects, invoices, payments, meetings, and your team into one beautiful workspace. Built for freelancers and agencies everywhere. Start free — no credit card required.',
    path: '/',
    keywords: [
      'client management software',
      'freelancer CRM',
      'invoice software for freelancers',
      'agency management software',
      'GST invoice generator',
      'freelance business management',
    ],
  }),
  // Home uses an absolute title so the brand template suffix isn't appended.
  title: { absolute: 'Clienter — Client Management Software for Freelancers & Agencies' },
}

// The scattered stack Clienter replaces — generic categories, no brand names.
// Rendered as two counter-sliding marquee rows under the stats band.
const REPLACES = [
  { icon: Sheet, label: 'Spreadsheets' },
  { icon: FileText, label: 'Word invoices' },
  { icon: MessageCircle, label: 'WhatsApp threads' },
  { icon: StickyNote, label: 'Sticky notes' },
  { icon: Mail, label: 'Email chains' },
  { icon: CalendarDays, label: 'Calendar apps' },
  { icon: Wallet, label: 'Payment trackers' },
  { icon: Clock, label: 'Reminder alarms' },
]

// The "before" (chaos) vs "after" (Clienter) contrast.
const CHAOS = [
  'Client details scattered across WhatsApp and email',
  'Invoices copied from a Word template every month',
  'Project status living only in your head',
  'No clear picture of what you earned or who owes you',
  'Juggling 5–6 different apps that don’t talk to each other',
]
const CALM = [
  'Every client, project, and invoice in one organized place',
  'Professional GST-ready invoices in under a minute',
  'A clean Kanban board that shows exactly where work stands',
  'Live revenue analytics — no spreadsheets, no guessing',
  'One calm workspace built for how you actually work',
]

// Hand-tuned scatter for the "old way" stack. Fixed (never random) so the
// server and client render byte-identical markup — and so the disarray is
// art-directed rather than accidental. Each entry: [rotate deg, indent px].
const CHAOS_SCATTER: [number, number][] = [
  [-1.4, 0],
  [1.2, 22],
  [-0.6, 8],
  [1.7, 30],
  [-1.1, 14],
]

const TRUST = [
  { icon: Lock, label: 'Encrypted in transit' },
  { icon: ShieldCheck, label: 'Per-account data isolation' },
  { icon: Download, label: 'Export anytime — no lock-in' },
  { icon: Check, label: 'No card required to start' },
]

const FOUNDER_SOCIALS = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.twitter, label: 'X', Icon: Twitter },
]

/**
 * Editorial section headline. Left-aligned by default — centering every
 * section is the fastest way to make a page feel templated, so `center` is
 * opt-in and used sparingly (only where the content genuinely radiates from
 * the middle, like pricing and the FAQ).
 */
function SectionHead({
  label,
  icon: Icon,
  title,
  sub,
  align = 'left',
  tone = 'light',
  className = '',
}: {
  label?: string
  icon?: LucideIcon
  title: React.ReactNode
  sub?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark' | 'onbrand'
  className?: string
}) {
  const dark = tone === 'dark'
  const onbrand = tone === 'onbrand'
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {label && (
        <Reveal>
          <SectionLabel icon={Icon} tone={tone} className={centered ? 'justify-center' : ''}>
            {label}
          </SectionLabel>
        </Reveal>
      )}
      <Reveal variant="mask" delay={label ? 90 : 0}>
        <h2
          className={`font-display text-3xl font-extrabold tracking-tight sm:text-display-sm lg:text-display ${
            label ? 'mt-6' : ''
          } ${onbrand ? 'text-white' : dark ? 'text-espresso-text' : 'text-gray-900'}`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={180}>
          <p
            className={`mt-5 text-lg leading-relaxed ${centered ? 'mx-auto max-w-measure' : 'max-w-measure'} ${
              onbrand ? 'text-white/85' : dark ? 'text-espresso-muted' : 'text-gray-600'
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/** Sliding pill for the "replaces your stack" marquee band. */
function ToolChip({
  icon: Icon,
  label,
  tone = 'light',
}: {
  icon: LucideIcon
  label: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <span
      className={`mx-1.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
        dark
          ? 'border-white/25 bg-white/12 text-white/80 backdrop-blur-sm'
          : 'border-stone-200/80 bg-white text-gray-500 shadow-soft'
      }`}
    >
      <Icon className={`h-4 w-4 ${dark ? 'text-white/80' : 'text-orange-400'}`} />
      {label}
    </span>
  )
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FFF8F2] font-sans text-stone-800 antialiased selection:bg-orange-500/20 selection:text-orange-900">
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* Static ambient layers: top brand bloom + soft side washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(ellipse_70%_45%_at_50%_-8%,rgba(249,115,22,0.13),transparent_70%)]" />
        <div className="absolute right-0 top-[28rem] h-[34rem] w-[34rem] rounded-full bg-amber-200/20 blur-[130px]" />
        <div className="absolute left-0 top-[80rem] h-[30rem] w-[30rem] rounded-full bg-orange-200/20 blur-[130px]" />
      </div>

      <SiteHeader />

      <main className="relative z-10">
        {/* ───────── Hero ───────── */}
        <section className="relative">
          {/* Interactive 3D grid — pops toward the cursor for a depth effect */}
          <HeroGrid />

          {/* Hero copy — vertically centered in the viewport, transform-pinned +
              zoomed out on scroll (see HeroScroll) so the dashboard below rises
              and stacks on top of it. */}
          <HeroScroll className="relative z-0 mx-auto flex min-h-[100svh] max-w-5xl flex-col px-4 pt-20 pb-10 text-center sm:px-6">
            {/* Main copy group — centered in the space above the trust strip */}
            <div className="flex flex-1 flex-col items-center justify-center">
              <Reveal>
                <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                  Run your freelance business{' '}
                  <br className="hidden lg:block" />
                  without the{' '}
                  <span className="text-gradient-brand animate-gradient-pan font-serif-display text-[1.14em] font-normal italic drop-shadow-[0_2px_20px_rgba(249,115,22,0.25)]">
                    chaos
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
                  Clienter brings your clients, projects, invoices, and team together in one
                  beautiful place, built for freelancers and agencies.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                  {/* Primary — black pill, orange spotlight tracks the cursor on hover */}
                  <SpotlightButton
                    href={`${APP_URL}/signup`}
                    className="w-full px-8 py-[15px] text-base font-semibold sm:w-auto"
                  >
                    Start for free
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </SpotlightButton>

                  {/* Secondary — glass pill, brand glow ring + play chip that fills on hover */}
                  <Link
                    href="/how-it-works"
                    className="press group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-stone-200/90 bg-white/70 px-7 py-[15px] text-base font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-700 hover:shadow-[0_14px_36px_-14px_rgba(249,115,22,0.5)] sm:w-auto"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50 to-amber-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Play className="h-3 w-3 translate-x-[0.5px] fill-current" />
                    </span>
                    <span className="relative">See how it works</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Trust strip — sits in normal flow near the bottom of the hero.
                Uses a plain CSS fade-in (not <Reveal>'s IntersectionObserver)
                so it renders immediately on first paint, never gated behind
                a scroll-triggered visibility check. */}
            <div
              className="animate-fade-in mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm text-gray-500"
              style={{ animationDelay: '320ms' }}
            >
              {TRUST.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-orange-500" />
                  {label}
                </span>
              ))}
            </div>
          </HeroScroll>

          {/* Product preview — an interactive, pixel-faithful replica of the real
              app dashboard, framed as a browser window. Sits above the hero copy
              (z-20) and rises up to stack on top of it as the hero recedes. It's
              scrollable and cursor-reactive, so the very first beat of the page
              lets visitors explore the actual product. */}
          <div className="relative z-20 mx-auto -mt-4 max-w-7xl px-4 sm:mt-0 sm:px-6 lg:px-8">
            <div
              aria-hidden
              className="absolute inset-x-6 -top-10 bottom-10 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_50%_20%,rgba(249,115,22,0.16),transparent_70%)] blur-2xl"
            />
            <Reveal delay={200}>
              <DashboardShowcase />
            </Reveal>
          </div>
        </section>

        {/* ───────── Tool chaos → the Clienter way ─────────
            The page's first dark beat. The scattered stack slides overhead as
            two tilted, dimmed marquees — the "ten tabs" made literal — then
            resolves into the lit, ordered panel on the right. */}
        <section className="grain relative mt-20 overflow-hidden bg-[linear-gradient(172deg,#f4741e_0%,#e4550a_45%,#c9440a_100%)] text-white sm:mt-28">
          {/* Top divider — a soft multi-wave edge (echoing the curved panel
              split on the app login page) so the section flows out of the light
              page instead of meeting it on a hard straight line. Fill = page
              canvas; sits above the aurora wash but below content. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[70px] w-full overflow-hidden leading-[0] sm:h-[112px]"
          >
            <div className="flex h-full w-[200%] animate-wave-x">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#FFF8F2" className="block h-full w-1/2">
                <path d="M0,0 H1440 V52 C1320,78 1200,78 1080,52 C960,26 840,26 720,52 C600,78 480,78 360,52 C240,26 120,26 0,52 Z" />
              </svg>
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#FFF8F2" className="block h-full w-1/2">
                <path d="M0,0 H1440 V52 C1320,78 1200,78 1080,52 C960,26 840,26 720,52 C600,78 480,78 360,52 C240,26 120,26 0,52 Z" />
              </svg>
            </div>
          </div>

          {/* Premium aurora: the section glows in the brand orange (the logo
              colour), lit by soft peach + orange blooms — no coffee-brown. */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -left-24 -top-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,231,206,0.55),transparent_60%)] blur-3xl" />
            <Parallax
              speed={-70}
              className="absolute -top-40 right-[-8%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(255,163,82,0.55),transparent_62%)] blur-3xl"
            >
              <span />
            </Parallax>
            <div className="absolute bottom-[-8rem] right-[8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,241,224,0.40),transparent_62%)] blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent)]" />
          </div>

          <div className="relative z-10 py-20 sm:py-28">
            {/* The clutter, sliding past — tilted off-axis so it never settles. */}
            <div aria-hidden className="relative -mx-6 rotate-[-2.2deg] space-y-3 opacity-90">
              <Marquee speed={40}>
                {REPLACES.map((t) => (
                  <ToolChip key={t.label} icon={t.icon} label={t.label} tone="dark" />
                ))}
              </Marquee>
              <Marquee speed={48} reverse>
                {[...REPLACES].reverse().map((t) => (
                  <ToolChip key={t.label} icon={t.icon} label={t.label} tone="dark" />
                ))}
              </Marquee>
            </div>

            <div className="mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-5">
                  <SectionHead
                    tone="onbrand"
                    label="One app instead of ten tabs"
                    title={
                      <>
                        Freelancing is hard enough. Your tools shouldn’t make it{' '}
                        <span className="font-serif-display text-[1.12em] font-normal italic text-orange-50 [text-shadow:0_2px_18px_rgba(0,0,0,0.15)]">
                          harder
                        </span>
                        .
                      </>
                    }
                    sub="Most freelancers run their business across a dozen disconnected apps. Here’s what changes the day you switch."
                  />
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
                    {/* Old way — the stack literally doesn't line up. */}
                    <div>
                      <div className="flex items-center gap-2.5 pb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white/80 ring-1 ring-inset ring-white/25">
                          <X className="h-3 w-3" strokeWidth={3} />
                        </span>
                        The old way
                      </div>
                      <ul className="space-y-3">
                        {CHAOS.map((chaos, i) => (
                          <Reveal key={chaos} delay={i * 70} as="li">
                            <div
                              className="flex gap-3 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-[14px] leading-snug text-white/85 backdrop-blur-sm"
                              style={{
                                transform: `rotate(${CHAOS_SCATTER[i][0]}deg)`,
                                marginLeft: `${CHAOS_SCATTER[i][1]}px`,
                              }}
                            >
                              <X className="mt-0.5 h-3.5 w-3.5 flex-none text-white/55" />
                              <span>{chaos}</span>
                            </div>
                          </Reveal>
                        ))}
                      </ul>
                    </div>

                    {/* The Clienter way — same content, finally at rest. The
                        label sits outside the panel so it shares a baseline
                        with "The old way" opposite. */}
                    <div className="relative">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(255,240,224,0.30),transparent_70%)] blur-xl"
                      />
                      <div className="flex items-center gap-2.5 pb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-inset ring-white/35">
                          <Sparkles className="h-3 w-3" />
                        </span>
                        The Clienter way
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-[#FFF8F2] px-4 py-1 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.55)] sm:px-5">
                        <ul className="divide-y divide-stone-200/80">
                          {CALM.map((calm, i) => (
                            <Reveal key={calm} delay={i * 70} as="li">
                              <div className="flex gap-3 py-3 text-[14px] font-medium leading-snug text-stone-800">
                                <Check
                                  className="mt-0.5 h-3.5 w-3.5 flex-none text-orange-600"
                                  strokeWidth={3}
                                />
                                <span>{calm}</span>
                              </div>
                            </Reveal>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom divider — the mirror multi-wave edge, easing back out into
              the light section below so it closes as softly as it opened. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[70px] w-full overflow-hidden leading-[0] sm:h-[112px]"
          >
            <div className="flex h-full w-[200%] animate-wave-x-reverse">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#FFF8F2" className="block h-full w-1/2">
                <path d="M0,120 H1440 V68 C1320,42 1200,42 1080,68 C960,94 840,94 720,68 C600,42 480,42 360,68 C240,94 120,94 0,68 Z" />
              </svg>
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#FFF8F2" className="block h-full w-1/2">
                <path d="M0,120 H1440 V68 C1320,42 1200,42 1080,68 C960,94 840,94 720,68 C600,42 480,42 360,68 C240,94 120,94 0,68 Z" />
              </svg>
            </div>
          </div>
        </section>

        {/* ───────── One client, end to end (the Nova Studio journey) ─────────
            Replaces the old three-card feature showcase. Code-split because it
            ships framer-motion; SSR stays on so the ten chapters of copy are in
            the HTML for crawlers. */}
        <ClientJourney />

        {/* ───────── Verified Client Reviews (flagship trust feature) ───────── */}
        <VerifiedReviews />

        {/* ───────── Pricing (self-contained: plan data lives with it) ───────── */}
        <PricingSection />

        {/* ───────── Data privacy / security ───────── */}
        <DataSecurity variant="editorial" />

        {/* ───────── Founder (editorial pull-quote) ─────────
            Asymmetric: the quote runs wide on the left, attribution sits in a
            narrow rail on the right, hung off a hairline. */}
        <section className="relative py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rule-warm" />
            <div className="grid gap-10 pt-16 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <Reveal>
                  <SectionLabel>From the founder</SectionLabel>
                </Reveal>
                <Reveal variant="mask" delay={100}>
                  <blockquote className="relative mt-7">
                    {/* Oversized open-quote, set as a background mark rather
                        than a floating decoration. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-2 -top-14 select-none font-serif-display text-[9rem] leading-none text-orange-500/10 sm:-left-8 sm:text-[13rem]"
                    >
                      &rdquo;
                    </span>
                    <p className="relative font-display text-[1.6rem] font-bold leading-[1.3] tracking-[-0.02em] text-gray-900 sm:text-[2.35rem] sm:leading-[1.24]">
                      I’m building Clienter for the same people I make content for — freelancers and
                      agency owners who want to grow without{' '}
                      <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                        drowning in tools
                      </span>
                      . This is the app I wished I had.
                    </p>
                  </blockquote>
                </Reveal>
              </div>

              <Reveal delay={200} className="lg:col-span-4">
                <div className="flex items-start gap-5 lg:h-full lg:flex-col lg:justify-center lg:border-l lg:border-line/70 lg:pl-10">
                  <div className="relative flex-none">
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.28),transparent_70%)] blur-md"
                    />
                    <Image
                      src={FOUNDER.photo}
                      alt={FOUNDER.name}
                      width={144}
                      height={144}
                      className="relative h-20 w-20 rounded-full object-cover shadow-lift-2 ring-1 ring-orange-500/20 sm:h-24 sm:w-24"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-gray-900">
                      {FOUNDER.name}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-500">{FOUNDER.role}</p>

                    <div className="mt-4 flex items-center gap-1.5">
                      {FOUNDER_SOCIALS.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${FOUNDER.name} on ${label}`}
                          className="focus-ember flex h-8 w-8 items-center justify-center rounded-full text-stone-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600"
                        >
                          <Icon className="h-[15px] w-[15px]" />
                        </a>
                      ))}
                    </div>

                    <Link
                      href="/about"
                      className="focus-ember group mt-5 inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                    >
                      Read the full story
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="scroll-mt-24 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHead
              align="center"
              title="Frequently asked questions"
              sub="Everything you need to know before you get started."
            />
            <Reveal className="mt-14">
              <Faq variant="editorial" />
            </Reveal>
            <Reveal className="mt-10 text-center">
              <Link
                href="/faq"
                className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-gray-500 transition-colors hover:text-orange-600"
              >
                See all FAQs
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Final CTA ─────────
            The page lands dark: espresso, grain, and a single ember bloom
            rising behind the type. Warmer and more confident than a flat
            orange gradient panel. */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <div className="grain relative overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-20 text-center shadow-lift-4 sm:px-12 sm:py-28">
              <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                {/* Ember rising from the base, behind the headline: a hot core
                    at the foot of the panel fading up into amber at the crown. */}
                <div className="absolute inset-x-0 bottom-[-18%] h-[34rem] bg-[radial-gradient(ellipse_55%_55%_at_50%_100%,rgba(234,88,12,0.70),transparent_72%)]" />
                <div className="absolute inset-x-0 bottom-[-6%] h-[18rem] bg-[radial-gradient(ellipse_32%_60%_at_50%_100%,rgba(251,146,60,0.45),transparent_70%)]" />
                <div className="absolute inset-x-0 top-[-20%] h-[26rem] bg-[radial-gradient(ellipse_45%_60%_at_50%_0%,rgba(245,158,11,0.20),transparent_70%)]" />
                <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,black,transparent_80%)]" />
              </div>

              <div className="relative z-10">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-espresso-text backdrop-blur">
                    <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                    Free plan — no credit card
                  </span>
                </Reveal>
                <Reveal variant="mask" delay={100}>
                  <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-display-lg">
                    Start running your business the{' '}
                    <span className="text-gradient-ember font-serif-display text-[1.14em] font-normal italic">
                      calm
                    </span>{' '}
                    way
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mx-auto mt-6 max-w-measure text-lg leading-relaxed text-espresso-muted">
                    Create your free account and set up your first client in minutes. No credit card
                    required.
                  </p>
                </Reveal>
                <Reveal delay={280}>
                  <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Magnetic strength={7} className="w-full sm:w-auto">
                      <a
                        href={`${APP_URL}/signup`}
                        className="press focus-ember-dark group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-ember transition-all hover:brightness-110 sm:w-auto"
                      >
                        Create free account
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </Magnetic>
                    <Magnetic strength={5} className="w-full sm:w-auto">
                      <a
                        href={`${APP_URL}/login`}
                        className="press focus-ember-dark inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-espresso-text transition-colors hover:border-white/40 hover:bg-white/[0.06] sm:w-auto"
                      >
                        Sign in
                      </a>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  )
}
