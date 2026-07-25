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

const SPINE =
  'M50 0 C50 58 26 88 30 148 C34 208 68 238 63 298 C58 358 29 388 34 448 ' +
  'C39 508 69 538 64 598 C59 658 28 688 32 748 C36 808 67 838 60 898 ' +
  'C55 946 50 968 50 1000'

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
  // The loop-back begins as the final chapter arrives.
  const loopStart = STAGE_STARTS[9]
  const loop = useTransform(progress, [loopStart + 0.02, 1], [0, 1], { clamp: true })

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

      {/* Sprigs — one per hero moment, blooming as it arrives. Three, total. */}
      {heroes.map(({ c, i }, n) => {
        const top = (STAGE_STARTS[i] + c.weight / TOTAL_WEIGHT / 2) * 100
        return (
          <Sprig
            key={c.n}
            on={activeIndex === i || reduced}
            flip={n === 1}
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
  flip,
  style,
}: {
  on: boolean
  flip?: boolean
  style?: React.CSSProperties
}) {
  return (
    <svg
      className={`absolute h-24 w-16 transition-opacity duration-1000 ${
        flip ? 'right-full -scale-x-100' : 'left-full'
      } ${on ? 'opacity-100' : 'opacity-0'}`}
      style={{ ...style, transform: `${flip ? 'scaleX(-1) ' : ''}translateY(-50%)` }}
      viewBox="0 0 64 96"
      fill="none"
    >
      <g stroke={INK} strokeOpacity={0.3} strokeWidth={1} strokeLinecap="round">
        {/* stem */}
        <path d="M2 82 C14 74 26 58 32 38 C35 27 36 18 35 10" />
        {/* leaves, alternating */}
        <path d="M31 44 C22 42 15 46 12 53 C20 55 27 52 31 44Z" />
        <path d="M33 30 C41 26 47 28 50 34 C43 38 36 36 33 30Z" />
        <path d="M27 58 C20 59 15 64 14 70 C21 70 26 65 27 58Z" />
        <path d="M35 15 C42 11 48 13 50 18 C44 22 37 20 35 15Z" />
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
      className="absolute bottom-0 left-1/2 h-[22rem] w-40 -translate-x-[0.75rem]"
      style={{ opacity: reduced ? one : fadeIn }}
    >
      <svg className="h-full w-full" viewBox="0 0 160 352" fill="none">
        <motion.path
          d="M12 340 C12 322 30 306 58 302 C88 298 108 282 106 258 C104 232 78 220 52 226 C34 230 26 240 26 252"
          stroke={INK}
          strokeOpacity={0.4}
          strokeWidth={1.5}
          strokeLinecap="round"
          style={{ pathLength: reduced ? one : progress }}
        />
        {/* Arrowhead — pointing back the way we came. */}
        <motion.path
          d="M20 236 L26 226 L33 235"
          stroke={INK}
          strokeOpacity={0.5}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ opacity: reduced ? one : tipIn }}
        />
      </svg>
      <span
        className="absolute left-9 top-[16.5rem] font-serif-display text-[11px] italic text-orange-600/60"
        style={{ writingMode: 'vertical-rl' }}
      >
        back to 01
      </span>
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
