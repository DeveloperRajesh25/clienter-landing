'use client'

import { motion } from 'framer-motion'
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { CLIENT } from './data'

/**
 * Whether the client chip participates in shared-layout animation.
 *
 * True on the pinned desktop journey, where exactly one chip exists and FLIPs
 * between stages. False in the mobile stacked sequence, where all ten stages
 * are on the page at once — ten elements claiming one `layoutId` is a fight
 * framer-motion cannot win, so there the chip is simply drawn in place.
 */
export const SharedChip = createContext(true)

/* ──────────────────────────────────────────────────────────────────────────
   The product's own vocabulary, shrunk.

   Everything here mirrors a real class string from the app (`.card`, `.badge`,
   the sidebar's active accent bar, the WhatsApp-style message bubble) at the
   scale a 16:10 mock needs. Two rules: no value is invented, and nothing here
   knows about scroll — stages hand these components a `beat` and they render.
   ────────────────────────────────────────────────────────────────────────── */

/** Soft status pill. Mirrors `.badge` in the app's globals.css. */
export function Badge({
  children,
  tint = 'bg-stone-100 text-stone-600',
  className = '',
}: {
  children: ReactNode
  tint?: string
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium ${tint} ${className}`}
    >
      {children}
    </span>
  )
}

/** Initials avatar. The app uses primary-100/700 for people, so do we. */
export function Avatar({
  initials,
  tint = 'bg-orange-100 text-orange-700',
  size = 'sm',
  className = '',
}: {
  initials: string
  tint?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}) {
  const dims = {
    xs: 'h-5 w-5 text-[9px]',
    sm: 'h-7 w-7 text-[10px]',
    md: 'h-9 w-9 text-xs',
    lg: 'h-12 w-12 text-sm',
  }[size]
  return (
    <span
      className={`flex flex-none items-center justify-center rounded-full font-semibold ${dims} ${tint} ${className}`}
      aria-hidden
    >
      {initials}
    </span>
  )
}

/** A mock panel. `.card` from the app, at mock scale. */
export function Panel({
  children,
  className = '',
  ring = false,
}: {
  children: ReactNode
  className?: string
  ring?: boolean
}) {
  return (
    <div
      className={`rounded-xl border bg-white shadow-[0_1px_2px_rgba(67,36,16,0.04)] ${
        ring ? 'border-emerald-200 ring-1 ring-emerald-200' : 'border-stone-200/70'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/** Column/section label — the app's uppercase micro-caption. */
export function Caption({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-400 ${className}`}
    >
      {children}
    </span>
  )
}

/* ── The constant ──────────────────────────────────────────────────────────
   The Nova Studio identity chip. One of these exists on screen at any moment;
   when the active stage changes, framer-motion FLIPs it from wherever it was
   to wherever it now belongs. It is the only element that survives all ten
   screens, which is what stops each stage from feeling like a fresh slide.

   `on` must be true for exactly one stage — pre-mounted neighbours render the
   same box with `invisible` so the layout underneath never shifts.
   ────────────────────────────────────────────────────────────────────────── */
export function NovaChip({
  on,
  size = 'sm',
  subtitle,
  className = '',
  tone = 'light',
}: {
  on: boolean
  size?: 'sm' | 'md' | 'lg'
  subtitle?: string
  className?: string
  tone?: 'light' | 'plain'
}) {
  const pad = { sm: 'gap-2 px-2 py-1', md: 'gap-2.5 px-2.5 py-1.5', lg: 'gap-3 px-3 py-2' }[size]
  const avatar = ({ sm: 'xs', md: 'sm', lg: 'md' } as const)[size]
  const nameSize = { sm: 'text-[11px]', md: 'text-xs', lg: 'text-sm' }[size]

  const inner = (
    <>
      <Avatar initials={CLIENT.initials} size={avatar} />
      <span className="min-w-0">
        <span className={`block truncate font-semibold leading-tight text-ink ${nameSize}`}>
          {CLIENT.name}
        </span>
        {subtitle && (
          <span className="mt-0.5 block truncate text-[9px] leading-tight text-stone-400">
            {subtitle}
          </span>
        )}
      </span>
    </>
  )

  const shell = `inline-flex items-center ${pad} rounded-full ${
    tone === 'light' ? 'bg-orange-50/70 ring-1 ring-inset ring-orange-500/15' : ''
  } ${className}`

  const shared = useContext(SharedChip)

  // Stacked (mobile): every stage draws its own chip, no layout animation.
  if (!shared) {
    return <span className={shell}>{inner}</span>
  }

  // Pre-mounted neighbour: hold the space, show nothing. The live stage owns
  // the one real chip, so the FLIP always has exactly one source and target.
  if (!on) {
    return (
      <span className={`${shell} invisible`} aria-hidden>
        {inner}
      </span>
    )
  }

  return (
    <motion.span
      layoutId="nova-identity-chip"
      className={shell}
      transition={{ type: 'spring', stiffness: 320, damping: 34, mass: 0.9 }}
    >
      {inner}
    </motion.span>
  )
}

/* ── Attention ─────────────────────────────────────────────────────────────
   One ring, one tooltip, per stage. The ring breathes once on arrival and then
   holds — it is a pointer, not an animation.
   ────────────────────────────────────────────────────────────────────────── */
export function Spotlight({
  on,
  children,
  className = '',
  radius = 'rounded-xl',
}: {
  on: boolean
  children: ReactNode
  className?: string
  radius?: string
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <span
        aria-hidden
        className={`pointer-events-none absolute -inset-1.5 ${radius} ring-2 ring-orange-500/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          on ? 'scale-100 opacity-100' : 'scale-[1.06] opacity-0'
        }`}
      />
    </span>
  )
}

/** Plain-language payoff. Sits under the highlighted control. */
export function Tip({
  on,
  children,
  side = 'bottom',
  className = '',
}: {
  on: boolean
  children: ReactNode
  side?: 'bottom' | 'top'
  className?: string
}) {
  return (
    <span
      role="note"
      className={`pointer-events-none absolute z-30 max-w-[15rem] rounded-lg bg-espresso px-2.5 py-1.5 text-[10px] font-medium leading-snug text-espresso-text shadow-lift-3 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        on ? 'translate-y-0 opacity-100' : `${side === 'bottom' ? '-translate-y-1' : 'translate-y-1'} opacity-0`
      } ${className}`}
    >
      {children}
      <span
        aria-hidden
        className={`absolute left-4 h-1.5 w-1.5 rotate-45 bg-espresso ${
          side === 'bottom' ? '-top-0.5' : '-bottom-0.5'
        }`}
      />
    </span>
  )
}

/* ── Numbers that move ─────────────────────────────────────────────────────
   Counts ease out rather than ticking linearly, and progress bars overshoot a
   hair before settling — the small tells that separate a real UI from a
   screenshot.
   ────────────────────────────────────────────────────────────────────────── */
function useCountUp(target: number, run: boolean, duration = 1100) {
  const [value, setValue] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    if (!run) {
      setValue(0)
      return
    }
    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic — fast off the mark, lands softly.
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, run, duration])

  return value
}

export function Count({
  to,
  run,
  prefix = '',
  suffix = '',
  duration,
  className = '',
}: {
  to: number
  run: boolean
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const value = useCountUp(to, run, duration)
  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export function Progress({
  value,
  run,
  className = '',
  height = 'h-1.5',
}: {
  value: number
  run: boolean
  className?: string
  height?: string
}) {
  return (
    <span className={`block ${height} w-full overflow-hidden rounded-full bg-stone-200/80 ${className}`}>
      <span
        className={`block ${height} rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-[width] duration-[1100ms] ease-[cubic-bezier(0.34,1.4,0.64,1)]`}
        style={{ width: run ? `${value}%` : '0%' }}
      />
    </span>
  )
}

/* ── Typing ────────────────────────────────────────────────────────────────
   Used by the URL bar and by any field the cursor fills in. Character-by-
   character with a touch of jitter, because a perfectly even cadence reads as
   a marquee rather than a person.
   ────────────────────────────────────────────────────────────────────────── */
export function useTyped(text: string, run: boolean, msPerChar = 26) {
  const [shown, setShown] = useState(run ? text : '')

  useEffect(() => {
    if (!run) {
      setShown('')
      return
    }
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const step = () => {
      i += 1
      setShown(text.slice(0, i))
      if (i < text.length) timer = setTimeout(step, msPerChar + (i % 3) * 9)
    }
    timer = setTimeout(step, 90)
    return () => clearTimeout(timer)
  }, [text, run, msPerChar])

  return shown
}

/** A field being filled in: empty, then typed, then done. */
export function TypedField({
  label,
  value,
  run,
  className = '',
  mono = false,
}: {
  label: string
  value: string
  run: boolean
  className?: string
  mono?: boolean
}) {
  const typed = useTyped(value, run)
  const done = typed.length === value.length
  return (
    <label className={`block ${className}`}>
      <Caption className="mb-1 block">{label}</Caption>
      <span
        className={`flex h-7 items-center rounded-lg border bg-white px-2 text-[11px] transition-colors duration-300 ${
          run && !done
            ? 'border-orange-400 ring-2 ring-orange-500/15'
            : 'border-stone-200 text-ink'
        } ${mono ? 'tabular-nums' : ''}`}
      >
        {typed || <span className="text-stone-300">—</span>}
        {run && !done && <span className="ml-px inline-block h-3 w-px animate-pulse bg-orange-500" />}
      </span>
    </label>
  )
}

/** Two-tone skeleton bar — the app's `.skeleton`, used for out-of-focus rows. */
export function Bar({ w, className = '' }: { w: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-1.5 rounded-full bg-stone-200/90 ${className}`}
      style={{ width: w }}
    />
  )
}
