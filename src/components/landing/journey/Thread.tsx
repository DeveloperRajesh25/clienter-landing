'use client'

import { motion, useMotionValue, useTransform, type MotionValue } from 'framer-motion'
import { CHAPTERS, STAGE_STARTS, TOTAL_WEIGHT } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   THE THREAD — the section's only decoration.

   One continuous ink line runs the whole height of the journey. It is the
   scroll-progress indicator and the visual spine at the same time: a faint
   guide path is always there, and the inked path draws over it via
   stroke-dashoffset as you scroll. At the end it ties itself into a hairpin and
   heads back up — the referral closing the loop.

   Deliberately the only ornament in the section. Three sparse line-art sprigs
   bloom at the three hero moments and nothing else competes with it. Everything
   is brand-tinted and sits at 10–18% opacity, behind the content.

   The long path is drawn into a stretched viewBox (preserveAspectRatio="none")
   with vector-effect="non-scaling-stroke", so a ~9000px-tall line keeps a
   hairline weight instead of ballooning. The loop-back and the sprigs get their
   own un-stretched SVGs so their curves stay true.
   ────────────────────────────────────────────────────────────────────────── */

/**
 * The spine. Wide swings on purpose: the viewBox is stretched to ~9000px tall,
 * so anything gentler flattens into a ruled line and stops reading as drawn by
 * hand. The wobble is asymmetric — each bend overshoots slightly differently —
 * for the same reason.
 */
const SPINE =
  'M50 0 C50 42 16 64 21 106 C26 148 82 170 76 212 C70 254 14 274 19 316 ' +
  'C24 358 84 380 78 422 C72 464 15 486 21 528 C27 570 86 592 79 634 ' +
  'C72 676 16 698 22 740 C28 782 85 804 77 846 C70 888 44 942 50 1000'

/** Ink colour: brand orange, warmed and kept far below the content. */
const INK = 'rgb(234 88 12)'

export function Thread({
  progress,
  activeIndex,
  reduced,
}: {
  progress: MotionValue<number>
  activeIndex: number
  reduced: boolean
}) {
  /**
   * The loop-back is timed to the referral, not to the chapter.
   *
   * The panel is pinned while the thread scrolls behind it, so a mark anchored
   * to the track is only on screen for part of a chapter's dwell. 0.93→1.0 is
   * the window that lines up with chapter 10 reaching beat 3 — the exact moment
   * Vikram's card drops into the pipeline. The knot and the card land together.
   */
  const loop = useTransform(progress, [0.93, 0.995], [0, 1], { clamp: true })

  const heroes = CHAPTERS.map((c, i) => ({ c, i })).filter(({ c }) => c.hero)

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-14 lg:block"
    >
      {/* The spine */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Always-there guide — the path the ink will take. */}
        <path
          d={SPINE}
          stroke={INK}
          strokeOpacity={0.11}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* The ink, following the scroll. */}
        <motion.path
          d={SPINE}
          stroke={INK}
          strokeOpacity={0.42}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduced ? 1 : progress }}
        />
      </svg>

      {/* Chapter nodes — small ticks that light as their chapter arrives, so
          the line reads as a measured journey rather than a squiggle. */}
      {CHAPTERS.map((c, i) => {
        const top = (STAGE_STARTS[i] + c.weight / TOTAL_WEIGHT / 2) * 100
        const reached = activeIndex >= i
        return (
          <span
            key={c.n}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${top}%` }}
          >
            <span
              className={`block rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                c.hero ? 'h-2 w-2' : 'h-1.5 w-1.5'
              } ${
                reached
                  ? 'bg-orange-500/70 ring-[3px] ring-orange-500/15'
                  : 'bg-orange-500/20 ring-0'
              }`}
            />
          </span>
        )
      })}

      {/* Sprigs bloom at the hero moments, growing outward into the page margin
          and never inward over the chapter copy — decoration you have to read
          around isn't decoration. The final hero is deliberately skipped: the
          loop-back knot is that chapter's flourish, and two ornaments in the
          same few inches of gutter is exactly the clutter the brief rules out. */}
      {heroes.slice(0, 2).map(({ c, i }, n) => {
        const top = (STAGE_STARTS[i] + c.weight / TOTAL_WEIGHT / 2) * 100
        return (
          <Sprig
            key={c.n}
            on={activeIndex === i || reduced}
            variant={n}
            style={{ top: `${top}%` }}
          />
        )
      })}

      {/* The loop back to chapter one. */}
      <LoopBack progress={loop} reduced={reduced} />
    </div>
  )
}

/**
 * A thin line-art sprig. Grows out of the thread and holds — it does not
 * pulse, wave, or repeat.
 */
function Sprig({
  on,
  variant,
  style,
}: {
  on: boolean
  /** 0 · 1 · 2 — same drawing, different tilt, so the three don't read as clones. */
  variant: number
  style?: React.CSSProperties
}) {
  const tilt = [-8, 6, -3][variant] ?? 0
  return (
    <svg
      className={`absolute right-full h-20 w-11 transition-opacity duration-1000 ease-out ${
        on ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        ...style,
        transform: `translateY(-50%) scaleX(-1) rotate(${tilt}deg)`,
        transformOrigin: 'bottom right',
      }}
      viewBox="0 0 44 80"
      fill="none"
    >
      <g stroke={INK} strokeOpacity={0.32} strokeWidth={1} strokeLinecap="round">
        {/* stem */}
        <path d="M2 74 C11 66 20 50 25 32 C27 23 28 15 27 8" />
        {/* leaves, alternating up the stem */}
        <path d="M23 38 C16 36 11 40 9 46 C15 48 20 45 23 38Z" />
        <path d="M25 26 C32 22 37 24 39 29 C33 33 27 31 25 26Z" />
        <path d="M20 50 C14 51 10 55 9 60 C15 60 19 56 20 50Z" />
        <path d="M27 13 C33 9 38 11 40 15 C35 19 29 17 27 13Z" />
      </g>
    </svg>
  )
}

/**
 * The referral. The thread turns back on itself and heads up toward chapter
 * one, with the only piece of copy the decoration is allowed.
 */
function LoopBack({ progress, reduced }: { progress: MotionValue<number>; reduced: boolean }) {
  const fadeIn = useTransform(progress, [0, 0.12], [0, 1], { clamp: true })
  const tipIn = useTransform(progress, [0.78, 1], [0, 1], { clamp: true })
  const one = useMotionValue(1)

  return (
    <motion.div
      // Confined to the gutter on purpose. A wider knot reads better in
      // isolation but crosses into the chapter copy, and the thread scrolls
      // while the copy stays pinned — so at some scroll position it would
      // always be sitting on a word.
      className="absolute left-0 top-[92%] h-[26rem] w-14"
      style={{ opacity: reduced ? one : fadeIn }}
    >
      <svg className="h-full w-full" viewBox="0 0 56 416" fill="none">
        {/* The knot: the line peels off the spine, swings out, and turns back up. */}
        <motion.path
          d="M26 410 C26 386 34 364 43 344 C51 324 51 300 42 286 C31 268 16 272 12 290 C9 304 12 318 17 328"
          stroke={INK}
          strokeOpacity={0.42}
          strokeWidth={1.5}
          strokeLinecap="round"
          style={{ pathLength: reduced ? one : progress }}
        />
        {/* Arrowhead — pointing back the way we came. */}
        <motion.path
          d="M11 338 L17 326 L24 333"
          stroke={INK}
          strokeOpacity={0.55}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ opacity: reduced ? one : tipIn }}
        />
      </svg>
      <motion.span
        className="absolute left-0 top-[20.5rem] whitespace-nowrap font-serif-display text-[10px] italic text-orange-600/55"
        style={{ writingMode: 'vertical-rl', opacity: reduced ? one : tipIn }}
      >
        back to 01
      </motion.span>
    </motion.div>
  )
}

/**
 * Mobile's thread: the same spine, straightened into a single hairline that the
 * stacked stage cards hang off. Static — a scroll-linked draw on a phone costs
 * more than it says.
 */
export function ThreadMobile() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-8 left-[1.125rem] top-8 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/25 to-orange-500/0 lg:hidden"
    />
  )
}
