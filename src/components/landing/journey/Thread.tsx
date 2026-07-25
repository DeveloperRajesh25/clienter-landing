'use client'

import { motion, useMotionValue, useTransform, type MotionValue } from 'framer-motion'
import { ACTS, INTRO_SLOTS, SLOTS, SLOT_STARTS, TOTAL_WEIGHT, slotRange } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   THE THREAD — the section's only decoration.

   One continuous ink line runs the whole height of the journey. It is the
   scroll-progress indicator and the visual spine at the same time: a faint
   guide path is always there, and the inked path draws over it as you scroll.
   At the end it ties itself into a knot and heads back up — the referral
   closing the loop.

   Act boundaries get a larger node, so the line itself marks the five chapters
   rather than twenty-one indistinguishable ticks.

   The long path is drawn into a stretched viewBox (preserveAspectRatio="none")
   with vector-effect="non-scaling-stroke", so a ~9000px-tall line keeps a
   hairline weight instead of ballooning. The loop-back gets its own un-stretched
   SVG so its curve stays true.
   ────────────────────────────────────────────────────────────────────────── */

/**
 * The spine. Wide swings on purpose: the viewBox is stretched to thousands of
 * pixels tall, so anything gentler flattens into a ruled line and stops reading
 * as drawn by hand. Each bend overshoots slightly differently, for the same reason.
 */
const SPINE =
  'M50 0 C50 42 16 64 21 106 C26 148 82 170 76 212 C70 254 14 274 19 316 ' +
  'C24 358 84 380 78 422 C72 464 15 486 21 528 C27 570 86 592 79 634 ' +
  'C72 676 16 698 22 740 C28 782 85 804 77 846 C70 888 44 942 50 1000'

const INK = 'rgb(234 88 12)'

export function Thread({
  progress,
  slot,
  reduced,
}: {
  progress: MotionValue<number>
  slot: number
  reduced: boolean
}) {
  const loop = useTransform(progress, [0.955, 0.998], [0, 1], { clamp: true })

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-12 lg:block"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={SPINE}
          stroke={INK}
          strokeOpacity={0.1}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
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

      {/* Nodes. Act openings are ringed; scenes inside an act are small ticks. */}
      {SLOTS.map((s, i) => {
        const top = (SLOT_STARTS[i] + s.weight / TOTAL_WEIGHT / 2) * 100
        const reached = slot >= i
        const isAct = s.kind === 'intro'
        return (
          <span
            key={i}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${top}%` }}
          >
            <span
              className={`block rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isAct ? 'h-2.5 w-2.5' : 'h-1.5 w-1.5'
              } ${
                reached
                  ? isAct
                    ? 'bg-orange-500 ring-4 ring-orange-500/15'
                    : 'bg-orange-500/60'
                  : 'bg-orange-500/20'
              }`}
            />
          </span>
        )
      })}

      {/* Roman numerals beside each act node — the spine reads as five chapters. */}
      {INTRO_SLOTS.map((s, a) => {
        const top = (SLOT_STARTS[s] + SLOTS[s].weight / TOTAL_WEIGHT / 2) * 100
        return (
          <span
            key={a}
            className={`absolute right-full mr-1 -translate-y-1/2 whitespace-nowrap font-serif-display text-[11px] italic transition-colors duration-700 ${
              slot >= s ? 'text-orange-600/70' : 'text-orange-600/25'
            }`}
            style={{ top: `${top}%` }}
          >
            {ACTS[a].n}
          </span>
        )
      })}

      <LoopBack progress={loop} reduced={reduced} />
    </div>
  )
}

/**
 * The referral. The thread turns back on itself and heads up toward act I.
 *
 * Timed to the very end of the track and confined to the gutter: the panel is
 * pinned while the thread scrolls behind it, so anything wider would sooner or
 * later be sitting on a word of the chapter copy.
 */
function LoopBack({ progress, reduced }: { progress: MotionValue<number>; reduced: boolean }) {
  const fadeIn = useTransform(progress, [0, 0.12], [0, 1], { clamp: true })
  const tipIn = useTransform(progress, [0.78, 1], [0, 1], { clamp: true })
  const one = useMotionValue(1)

  return (
    <motion.div
      className="absolute left-0 top-[93%] h-[26rem] w-12"
      style={{ opacity: reduced ? one : fadeIn }}
    >
      <svg className="h-full w-full" viewBox="0 0 48 416" fill="none">
        <motion.path
          d="M23 410 C23 386 31 364 39 344 C46 324 45 300 36 286 C26 268 13 272 10 290 C8 304 11 318 15 328"
          stroke={INK}
          strokeOpacity={0.42}
          strokeWidth={1.5}
          strokeLinecap="round"
          style={{ pathLength: reduced ? one : progress }}
        />
        <motion.path
          d="M9 338 L15 326 L22 333"
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
        back to act I
      </motion.span>
    </motion.div>
  )
}

/**
 * Mobile's thread: the same spine, straightened into a single hairline that the
 * stacked cards hang off. Static — a scroll-linked draw on a phone costs more
 * than it says.
 */
export function ThreadMobile() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-10 left-[1.125rem] top-10 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/25 to-orange-500/0 lg:hidden"
    />
  )
}
