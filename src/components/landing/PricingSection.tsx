import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/**
 * Pricing — one slab, three columns, hairline-divided.
 *
 * Deliberately *not* three floating cards: a single bordered plate with
 * columns separated by rules reads as a printed rate card rather than a
 * generic SaaS grid. Hierarchy is carried by one warm-tinted column and one
 * accent rule, never by scale or shadow contests. All the ornament lives in
 * `PricingArt` behind the plate, so the plate itself stays quiet.
 *
 * Plan limits + launch pricing mirror the /pricing page so the two never drift.
 */
type Plan = {
  name: string
  price: string
  originalPrice?: string
  period: string
  tagline: string
  features: string[]
  cta: string
  popular: boolean
  launch: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    tagline: 'For getting started',
    features: [
      'Up to 5 clients',
      'Up to 10 projects',
      'Leads & CRM pipeline',
      'Invoice generation',
      'Basic analytics',
    ],
    cta: 'Get started free',
    popular: false,
    launch: false,
  },
  {
    name: 'Pro',
    price: '₹199',
    originalPrice: '₹499',
    period: '/month',
    tagline: 'For growing freelancers',
    features: [
      'Up to 30 clients',
      'Up to 60 projects',
      'Up to 5 team members',
      'White-label client portal',
      'Priority support',
    ],
    cta: 'Start Pro',
    popular: true,
    launch: true,
  },
  {
    name: 'Ultra',
    price: '₹799',
    originalPrice: '₹1,999',
    period: '/month',
    tagline: 'For agencies at scale',
    features: [
      'Unlimited clients',
      'Unlimited projects',
      'Unlimited team members',
      'White-label invoices',
      'Dedicated support',
    ],
    cta: 'Start Ultra',
    popular: false,
    launch: true,
  },
]

// The floor every plan shares — stated once, along the base of the plate,
// instead of repeating four identical bullets in all three columns.
const INCLUDED = [
  'No card required',
  'GST-ready invoices',
  'Cancel anytime',
  'Export your data anytime',
]

/** A drafting-style tick — used to pin the corners of the plate. */
function CornerMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={`absolute h-3 w-3 text-orange-500/45 ${className}`}
    >
      <path d="M6 0.5v11M0.5 6h11" />
    </svg>
  )
}

/**
 * The background art: concentric rings, a dot field, corner arcs and a few
 * hairlines. Line work only — no blobs, no glassmorphism. Everything is
 * hairline-weight and low-opacity so it registers as paper texture at a
 * glance and as drawing when you actually look.
 */
function PricingArt() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Warm light pooling behind the plate — the only soft element here. */}
      <div className="absolute left-1/2 top-1/4 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.09),transparent_70%)] blur-2xl" />

      {/* Top-left: concentric rings, half off-canvas so they read as a
          fragment of something larger rather than a centered logo. */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute -left-32 top-2 h-[300px] w-[300px] text-orange-500/25 sm:-left-24 sm:h-[420px] sm:w-[420px]"
      >
        <circle cx="200" cy="200" r="56" stroke="currentColor" />
        <circle cx="200" cy="200" r="102" stroke="currentColor" strokeDasharray="2 7" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" opacity="0.75" />
        <circle cx="200" cy="200" r="196" stroke="currentColor" opacity="0.45" />
      </svg>

      {/* Top-right: a small dot field, faded at its own edges. */}
      <div
        className="absolute right-[4%] top-20 hidden h-32 w-52 lg:block"
        style={{
          backgroundImage: 'radial-gradient(rgba(206,92,54,0.40) 1.3px, transparent 1.3px)',
          backgroundSize: '18px 18px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 72%)',
        }}
      />

      {/* Bottom-right: quarter arcs sweeping out of the corner. */}
      <svg
        viewBox="0 0 300 300"
        fill="none"
        className="absolute -bottom-10 -right-16 h-[280px] w-[280px] text-terracotta-400/30 sm:h-[360px] sm:w-[360px]"
      >
        <path d="M180 300A120 120 0 0 1 300 180" stroke="currentColor" />
        <path d="M130 300A170 170 0 0 1 300 130" stroke="currentColor" strokeDasharray="2 7" />
        <path d="M80 300A220 220 0 0 1 300 80" stroke="currentColor" opacity="0.7" />
        <path d="M35 300A265 265 0 0 1 300 35" stroke="currentColor" opacity="0.4" />
      </svg>

      {/* Bottom-left: a rhythm of hairlines plus a tilted square outline. */}
      <svg
        viewBox="0 0 240 150"
        fill="none"
        className="absolute -left-6 bottom-16 hidden h-[150px] w-[240px] text-stone-400/45 lg:block"
      >
        <path d="M0 10h150M0 34h112M0 58h74M0 82h44M0 106h22" stroke="currentColor" />
        <rect
          x="168"
          y="46"
          width="44"
          height="44"
          stroke="currentColor"
          transform="rotate(45 190 68)"
          opacity="0.8"
        />
      </svg>

      {/* Two lone ticks, off the plate's axis — asymmetry on purpose. */}
      <CornerMark className="left-[12%] top-[14%] hidden lg:block" />
      <CornerMark className="right-[16%] bottom-[18%] hidden text-terracotta-400/45 lg:block" />
    </div>
  )
}

function PlanColumn({ plan, index }: { plan: Plan; index: number }) {
  return (
    <Reveal delay={index * 110} className="relative">
      <div
        className={`relative flex h-full flex-col px-7 py-10 sm:px-8 ${
          plan.popular ? 'bg-gradient-to-b from-orange-50 via-orange-50/25 to-transparent' : ''
        }`}
      >
        {/* The single loud element in the whole section: one accent rule
            across the top of the recommended column. */}
        {plan.popular && (
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange-400/0 via-orange-500 to-orange-400/0"
          />
        )}

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[11px] font-bold tracking-[0.18em] text-stone-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-lg font-bold tracking-tight text-gray-900">
              {plan.name}
            </h3>
          </div>
          {plan.popular && (
            <span className="mt-0.5 rounded-full border border-orange-500/30 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-orange-600 shadow-soft">
              Most popular
            </span>
          )}
        </div>

        <p className="mt-2.5 text-sm text-gray-500">{plan.tagline}</p>

        {/* Fixed height so the three prices sit on one baseline across the
            plate — peers should read as peers. */}
        <div className="mt-8 flex min-h-[5.25rem] flex-col justify-end">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[3.25rem] font-bold leading-none tracking-[-0.04em] text-gray-900 tabular-nums">
              {plan.price}
            </span>
            <span className="text-sm font-medium text-gray-400">{plan.period}</span>
          </div>

          {/* The offer stated typographically — a struck old price and a
              tracked micro-cap — instead of another coloured chip. */}
          <div className="mt-4 flex h-4 items-center gap-2.5 text-[12px] leading-none">
            {plan.originalPrice ? (
              <>
                <span className="relative font-medium text-stone-400 tabular-nums">
                  {plan.originalPrice}
                  <span
                    aria-hidden
                    className="absolute inset-x-[-2px] top-1/2 h-px -rotate-[7deg] bg-stone-400/90"
                  />
                </span>
                <span aria-hidden className="h-3 w-px bg-stone-300/80" />
                <span className="font-bold uppercase tracking-[0.16em] text-orange-600">
                  Launch offer
                </span>
              </>
            ) : (
              <span className="font-medium uppercase tracking-[0.16em] text-stone-400">
                Free forever
              </span>
            )}
          </div>
        </div>

        <div aria-hidden className="mt-8 h-px bg-stone-200/80" />

        <ul className="mt-7 flex-1 space-y-3.5">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-[15px] leading-snug text-gray-600">
              <Check
                className={`mt-[3px] h-3.5 w-3.5 flex-none ${
                  plan.popular ? 'text-orange-500' : 'text-orange-500/70'
                }`}
                strokeWidth={3}
              />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <a
          href={`${APP_URL}/signup`}
          className={`press focus-ember group/cta mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_12px_30px_-12px_rgba(234,88,12,0.85)] hover:brightness-105'
              : 'border border-stone-300 bg-white text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white'
          }`}
        >
          {plan.cta}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
        </a>
      </div>
    </Reveal>
  )
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-32"
    >
      <PricingArt />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Centered here on purpose: three peers radiating from one plate is
            the rare place symmetry is the honest layout. */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel className="justify-center">Pricing</SectionLabel>
          </Reveal>
          <Reveal variant="mask" delay={90}>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-display-sm lg:text-display">
              Simple,{' '}
              <span className="text-gradient-brand font-serif-display text-[1.12em] font-normal italic">
                honest
              </span>{' '}
              pricing
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-5 max-w-measure text-lg leading-relaxed text-gray-600">
              Start free. Upgrade only when you’re ready. No hidden fees, ever.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 sm:mt-16">
          {/* Ticks pinning the plate's corners — a drafting detail that makes
              the plate feel placed rather than dropped. */}
          <CornerMark className="-left-1.5 -top-1.5 hidden sm:block" />
          <CornerMark className="-right-1.5 -top-1.5 hidden sm:block" />
          <CornerMark className="-bottom-1.5 -left-1.5 hidden sm:block" />
          <CornerMark className="-bottom-1.5 -right-1.5 hidden sm:block" />

          <div className="overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/80 shadow-lift-3 backdrop-blur-sm sm:rounded-[2rem]">
            <div className="grid grid-cols-1 divide-y divide-stone-200/80 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {PLANS.map((plan, i) => (
                <PlanColumn key={plan.name} plan={plan} index={i} />
              ))}
            </div>

            {/* The shared floor, said once along the base. */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-stone-200/80 bg-[#FFFBF7] px-6 py-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
                Every plan includes
              </span>
              {INCLUDED.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-[13px] text-gray-600">
                  <span aria-hidden className="h-1 w-1 flex-none rounded-full bg-orange-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-9 flex flex-col items-center gap-4 text-center">
          <p className="text-[13px] text-gray-500">All prices in INR, billed monthly.</p>
          <Link
            href="/pricing"
            className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-gray-500 transition-colors hover:text-orange-600"
          >
            Compare plans in detail
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
