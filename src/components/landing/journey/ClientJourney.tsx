'use client'

import Link from 'next/link'
import { LayoutGroup } from 'framer-motion'
import { ArrowRight, MoveRight } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { APP_URL } from '@/lib/site'
import { Reveal } from '@/components/landing/Reveal'
import { SectionLabel } from '@/components/landing/SectionLabel'
import { CHAPTERS, CLIENT, TOTAL_WEIGHT, VH_PER_WEIGHT, type Chapter } from './data'
import { Frame } from './Frame'
import { Cursor, TapRipple } from './Cursor'
import { Sidebar } from './Sidebar'
import { Thread, ThreadMobile } from './Thread'
import { SharedChip } from './primitives'
import { useBeatOnView, useJourney, useReducedMotion } from './useJourney'
import { Stage01, Stage02 } from './stages/ActI'
import { Stage03, Stage04, Stage05, Stage06 } from './stages/ActII'
import { Stage07, Stage08, Stage09, Stage10 } from './stages/ActIII'
import type { StageProps } from './stages/shared'

/* ══════════════════════════════════════════════════════════════════════════
   ONE CLIENT, TEN CHAPTERS.

   Structure, top to bottom:

     · a title beat        — "Meet Nova Studio."
     · the journey         — desktop: one pinned window, ten screens
                             mobile:  ten stacked cards, same screens
     · a resolution beat   — and the ask

   The desktop track is a tall scroll region with a single sticky viewport
   inside it. The browser frame and the app rail inside that viewport mount once
   and never unmount; the ten stage layers cross-fade behind them. That is why
   this reads as one window travelling through a product rather than a scrolling
   list of screenshots.
   ══════════════════════════════════════════════════════════════════════════ */

const STAGES: ((p: StageProps) => JSX.Element)[] = [
  Stage01,
  Stage02,
  Stage03,
  Stage04,
  Stage05,
  Stage06,
  Stage07,
  Stage08,
  Stage09,
  Stage10,
]

/** Which rail item is lit, per chapter. */
const NAV = [
  '/leads',
  '/clients',
  '/clients',
  '/projects',
  '/projects',
  '/payments',
  '/portal',
  '/meetings',
  '/messages',
  '/reviews',
]

/** Chapter 07 is the client's portal, so the rail changes vocabulary. */
const PORTAL_STAGE = 6

/** Chapter 07's login is genuinely full-bleed — it owns its own left offset. */
const FULL_BLEED = new Set([PORTAL_STAGE])

/**
 * Where the cursor goes, as a percentage of the screen body (the area right of
 * the rail). Body-relative rather than frame-relative, because the rail is a
 * fixed pixel width and the frame is fluid — percentages of the frame would
 * drift off the target between 1024px and 1440px.
 */
const TARGETS: { to: { x: number; y: number }; dragTo?: { x: number; y: number } }[] = [
  { to: { x: 61, y: 20 }, dragTo: { x: 86, y: 21 } }, // 01 drag the card to Won
  { to: { x: 81, y: 31 } }, // 02 Convert to client
  { to: { x: 47, y: 40 } }, // 03 Enable portal
  { to: { x: 87, y: 87 } }, // 04 Create project
  { to: { x: 80, y: 15 } }, // 05 Visible to client
  { to: { x: 13, y: 83 } }, // 06 Record payment
  { to: { x: 50, y: 67 } }, // 07 Sign in  (full-bleed: frame-relative)
  { to: { x: 82, y: 10 } }, // 08 Schedule meeting
  { to: { x: 94, y: 91 } }, // 09 Send
  { to: { x: 84, y: 12 } }, // 10 Mark completed
]

const RAIL_PAD = 'pl-[7.75rem] sm:pl-[8.75rem]'

export function ClientJourney() {
  const reduced = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const { index, beat, progress } = useJourney(trackRef, reduced)
  const chapter = CHAPTERS[index]

  /** Total scroll length: sum of the per-chapter dwell, plus one screen for the
      final chapter to sit still in. Heroes are worth ~1.7× a connective beat. */
  const trackHeight = `${Math.round(TOTAL_WEIGHT * VH_PER_WEIGHT) + 100}vh`

  return (
    <section id="features" className="relative scroll-mt-24">
      {/* ── The title beat ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-32 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel icon={MoveRight}>One client, end to end</SectionLabel>
          </Reveal>
          <Reveal variant="mask" delay={90}>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-display-sm lg:text-display">
              Meet{' '}
              <span className="text-gradient-brand font-serif-display text-[1.12em] font-normal italic">
                {CLIENT.name}
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 max-w-measure text-lg leading-relaxed text-gray-600">
              A cold Instagram message on {CLIENT.created}. A five-star review and a referral
              before the month is out. Every step below is a real screen, in order — one client,
              start to finish.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── The journey · desktop ──────────────────────────────────────── */}
      {/* Note on accessibility: the track itself is NOT aria-hidden. The chapter
          rail is a real ordered list holding all ten chapters, so a screen
          reader gets the whole story in order even though only one chapter is
          visible at a time. Only the window — a mock with three layers mounted —
          is marked decorative. */}
      <div ref={trackRef} className="relative hidden lg:block" style={{ height: trackHeight }}>
        <div className="mx-auto h-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-full pl-14">
            <Thread progress={progress} activeIndex={index} reduced={reduced} />

            <div className="sticky top-0 flex h-screen items-center pb-10 pt-20">
              <div className="flex w-full items-center gap-8">
                <ChapterRail index={index} />

                <div className="min-w-0 flex-1" aria-hidden>
                  {/* LayoutGroup scopes the shared-element animations (the
                      client chip, the rail accent) to this one window. */}
                  <LayoutGroup id="clienter-journey">
                    <Frame url={chapter.url} reduced={reduced}>
                      {/* The rail. Mounted once, behind the stage layers. */}
                      <div className="absolute inset-y-0 left-0 z-0">
                        <div className="relative h-full">
                          <div
                            className={`absolute inset-0 transition-opacity duration-500 ${
                              index === PORTAL_STAGE ? 'opacity-0' : 'opacity-100'
                            }`}
                          >
                            <Sidebar
                              variant="owner"
                              active={NAV[index] ?? '/dashboard'}
                              unread={index >= 8 ? 1 : 0}
                            />
                          </div>
                          <div
                            className={`absolute inset-0 transition-opacity duration-500 ${
                              index === PORTAL_STAGE ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <Sidebar variant="portal" active="/portal" />
                          </div>
                        </div>
                      </div>

                      {/* The ten screens. Only the live one and its immediate
                          neighbours are mounted, and layers cross-fade with
                          opacity alone — a transform here would distort the
                          measurement the chip's FLIP depends on. */}
                      {STAGES.map((Stage, i) => {
                        const near = Math.abs(i - index) <= 1
                        if (!near) return null
                        const live = i === index
                        return (
                          <div
                            key={i}
                            className={`absolute inset-0 z-10 transition-opacity duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                              live ? 'opacity-100' : 'pointer-events-none opacity-0'
                            }`}
                          >
                            <div className={`h-full ${FULL_BLEED.has(i) ? '' : RAIL_PAD}`}>
                              <Stage
                                on={live}
                                beat={live ? beat : i < index ? 3 : 0}
                                reduced={reduced}
                              />
                            </div>
                          </div>
                        )
                      })}

                      {/* The hand. One per journey, positioned in the same
                          coordinate space the stage laid its controls out in. */}
                      <div
                        className={`pointer-events-none absolute inset-0 z-40 ${
                          FULL_BLEED.has(index) ? '' : RAIL_PAD
                        }`}
                      >
                        <div className="relative h-full w-full">
                          <Cursor
                            beat={beat}
                            to={TARGETS[index].to}
                            dragTo={TARGETS[index].dragTo}
                            reduced={reduced}
                          />
                        </div>
                      </div>
                    </Frame>
                  </LayoutGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The journey · mobile ───────────────────────────────────────── */}
      <div className="relative lg:hidden">
        <ThreadMobile />
        <ol className="space-y-12 py-4 sm:space-y-16">
          {CHAPTERS.map((c, i) => (
            <MobileChapter key={c.n} chapter={c} index={i} reduced={reduced} />
          ))}
        </ol>
      </div>

      {/* ── The resolution beat ────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="relative">
          <div className="rule-warm" />
          <div className="grid items-end gap-8 pt-12 sm:grid-cols-12 sm:gap-12">
            <Reveal className="sm:col-span-7">
              <p className="font-serif-display text-2xl italic leading-snug text-orange-700/80 sm:text-3xl">
                Thirty-seven days. One client. Not one spreadsheet.
              </p>
              <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[2rem]">
                And that was one client. Run your whole business this way.
              </h3>
            </Reveal>

            <Reveal delay={120} className="sm:col-span-5 sm:justify-self-end">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`${APP_URL}/signup`}
                  className="focus-ember group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-ember transition-all duration-300 hover:bg-orange-700 hover:shadow-ember-lg"
                >
                  Start free
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/features"
                  className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-orange-600 transition-colors hover:text-orange-700"
                >
                  Explore all features
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-200 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-50">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── The chapter rail ──────────────────────────────────────────────────────
   All ten chapters live in the DOM as a real ordered list, so the story is
   readable by a screen reader and indexable in order; only the live one is
   visible. The number is set in the hero's accent serif, italic, because that
   is the page's established voice for a chapter mark.
   ────────────────────────────────────────────────────────────────────────── */
function ChapterRail({ index }: { index: number }) {
  return (
    <div className="relative h-[19rem] w-[12.5rem] flex-none xl:w-[14rem]">
      <ol>
        {CHAPTERS.map((c, i) => {
          const live = i === index
          return (
            <li
              key={c.n}
              className={`absolute inset-x-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                live
                  ? 'translate-y-[-50%] opacity-100'
                  : i < index
                    ? 'pointer-events-none translate-y-[-70%] opacity-0'
                    : 'pointer-events-none translate-y-[-30%] opacity-0'
              }`}
            >
              <span className="flex items-baseline gap-2">
                <span className="font-serif-display text-4xl italic leading-none text-orange-600/85">
                  {c.n}
                </span>
                <span className="h-px flex-1 bg-line" />
                <span className="font-serif-display text-[11px] italic text-stone-400">
                  Act {c.act}
                </span>
              </span>

              <h3 className="mt-4 font-display text-xl font-extrabold leading-tight tracking-tight text-gray-900">
                {c.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">{c.line}</p>
            </li>
          )
        })}
      </ol>

      {/* Position in the story — a hairline, not a scrollbar. */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2">
        <span className="font-display text-[10px] font-bold tabular-nums tracking-[0.14em] text-stone-400">
          {CHAPTERS[index].n} / 10
        </span>
        <span className="relative h-px flex-1 overflow-hidden bg-line">
          <span
            className="absolute inset-y-0 left-0 bg-orange-500 transition-[width] duration-500 ease-out"
            style={{ width: `${((index + 1) / CHAPTERS.length) * 100}%` }}
          />
        </span>
      </div>
    </div>
  )
}

/* ── Mobile ────────────────────────────────────────────────────────────────
   Not a degraded desktop: a stacked editorial sequence where each chapter is a
   card that plays its beat once as it arrives. No pinning, no fake cursor — a
   tap ripple on the control instead, because a pointer on a touch device is a
   lie about how the product is used.
   ────────────────────────────────────────────────────────────────────────── */

/** The width every stage was laid out against, minus the rail mobile drops. */
const DESIGN_WIDTH = 476

function MobileChapter({
  chapter,
  index,
  reduced,
}: {
  chapter: Chapter
  index: number
  reduced: boolean
}) {
  const { ref, beat, seen } = useBeatOnView<HTMLLIElement>(reduced)
  const Stage = STAGES[index]

  return (
    <li ref={ref} className="relative">
      <div className="pl-12 pr-4">
        {/* The node on the thread. */}
        <span
          aria-hidden
          className={`absolute left-[0.875rem] top-1.5 h-2.5 w-2.5 rounded-full transition-all duration-700 ${
            seen ? 'bg-orange-500/80 ring-4 ring-orange-500/12' : 'bg-orange-500/25'
          }`}
        />
        <span className="flex items-baseline gap-2">
          <span className="font-serif-display text-2xl italic leading-none text-orange-600/85">
            {chapter.n}
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-serif-display text-[10px] italic text-stone-400">
            Act {chapter.act}
          </span>
        </span>
        <h3 className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-gray-900">
          {chapter.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{chapter.line}</p>
      </div>

      <div className="mt-4 px-2" aria-hidden>
        <SharedChip.Provider value={false}>
          <ScaledFrame url={chapter.url} reduced={reduced}>
            {seen ? (
              <>
                <Stage on beat={beat} reduced={reduced} compact />
                {!reduced && <TapRipple on={beat >= 2} />}
              </>
            ) : (
              <span className="block h-full w-full bg-canvas" />
            )}
          </ScaledFrame>
        </SharedChip.Provider>
      </div>
    </li>
  )
}

/**
 * Renders the frame at its design width and scales it to fit.
 *
 * A phone is ~360px wide; these screens were composed at 476. Reflowing them
 * would mean ten bespoke mobile layouts, and squeezing them would break the
 * grids. Scaling keeps the composition exactly as designed — the same choice a
 * product screenshot makes.
 */
function ScaledFrame({
  url,
  reduced,
  children,
}: {
  url: string
  reduced: boolean
  children: React.ReactNode
}) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number | undefined>()

  const measure = () => {
    const o = outer.current
    const i = inner.current
    if (!o || !i) return
    const next = Math.min(1, o.clientWidth / DESIGN_WIDTH)
    setScale(next)
    setHeight(i.offsetHeight * next)
  }

  // Before paint, so the card never renders at full width and snap back.
  useLayoutEffect(measure, [])

  useEffect(() => {
    const o = outer.current
    if (!o || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(measure)
    ro.observe(o)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={outer} style={{ height }} className="overflow-hidden">
      <div
        ref={inner}
        style={{ width: DESIGN_WIDTH, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        <Frame url={url} reduced={reduced}>
          {children}
        </Frame>
      </div>
    </div>
  )
}
