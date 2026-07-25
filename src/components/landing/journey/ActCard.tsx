'use client'

import { motion, useTransform, type MotionValue } from 'framer-motion'
import { ACTS, INTRO_SLOTS, slotRange } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   THE ACT CARD

   The signal that a new chapter of the product has started, not another beat of
   the last one. A full-cover panel slides up through the window, holds while the
   screen behind it swaps, then leaves through the top — a title card, the way a
   film marks a scene change.

   Two supporting cues fire with it: the browser chrome runs its page-load bar
   (see NavProgress in Frame.tsx), and the URL bar retypes. All three say the
   same thing — you just went somewhere new — which is why one act change never
   reads as an animation for its own sake.

   Driven straight off the raw scroll MotionValue: five panels, no React state,
   nothing re-renders as they pass.
   ────────────────────────────────────────────────────────────────────────── */

export function ActCards({
  progress,
  reduced,
}: {
  progress: MotionValue<number>
  reduced: boolean
}) {
  if (reduced) return null
  return (
    <>
      {INTRO_SLOTS.map((slot, a) => (
        <Card key={a} act={a} slot={slot} progress={progress} />
      ))}
    </>
  )
}

function Card({
  act,
  slot,
  progress,
}: {
  act: number
  slot: number
  progress: MotionValue<number>
}) {
  const [start, end] = slotRange(slot)
  const t = useTransform(progress, [start, end], [0, 1], { clamp: true })

  // Up into place, hold while the screen behind changes, out through the top.
  const y = useTransform(t, [0, 0.16, 0.6, 0.8], ['101%', '0%', '0%', '-101%'])
  // Only paint at all inside its own window, so four dormant panels cost nothing.
  const opacity = useTransform(t, [0, 0.001, 0.82, 0.83], [0, 1, 1, 0])
  // Content lags the panel slightly — the card arrives, then it speaks.
  const inner = useTransform(t, [0.08, 0.24, 0.58, 0.7], [0, 1, 1, 0])
  const lift = useTransform(t, [0.08, 0.26], [14, 0])

  const { n, title, line } = ACTS[act]

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 z-30 flex items-center justify-center bg-espresso px-16"
      style={{ y, opacity }}
    >
      {/* A hairline sweep and one warm bloom, so the panel reads as a lit
          surface rather than a black rectangle dropped on the page. */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(234,88,12,0.16),transparent_70%)]" />
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <motion.div className="relative max-w-2xl text-center" style={{ opacity: inner, y: lift }}>
        <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-orange-400">
          Act {n}
        </p>
        <h3 className="mt-4 font-serif-display text-5xl font-normal italic leading-tight text-espresso-text">
          {title}
        </h3>
        <span className="mx-auto mt-6 block h-px w-16 bg-orange-500/40" />
        <p className="mt-6 text-base leading-relaxed text-espresso-muted">{line}</p>
      </motion.div>
    </motion.div>
  )
}

/**
 * Static stand-in for the stacked mobile sequence and for reduced motion: the
 * same words, as a readable divider rather than a panel that moves.
 */
export function ActDivider({ act, className = '' }: { act: number; className?: string }) {
  const { n, title, line } = ACTS[act]
  return (
    <div className={`rounded-2xl bg-espresso px-5 py-7 text-center ${className}`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange-400">Act {n}</p>
      <h3 className="mt-2.5 font-serif-display text-3xl font-normal italic leading-tight text-espresso-text">
        {title}
      </h3>
      <span className="mx-auto mt-4 block h-px w-12 bg-orange-500/40" />
      <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-espresso-muted">{line}</p>
    </div>
  )
}
