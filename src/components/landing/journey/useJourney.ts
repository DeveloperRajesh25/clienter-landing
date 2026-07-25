'use client'

import { useScroll, useMotionValueEvent, type MotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import { SLOTS, SLOT_STARTS, TOTAL_WEIGHT } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   ONE scroll value drives everything.

   From a single `useScroll` on the track we derive two things:

   • `progress` — the raw MotionValue, handed straight to the ink thread and the
     act cards. Those animate outside React entirely, so a 9000px SVG and five
     full-cover panels can follow the scrollbar without re-rendering anything.

   • `{ slot, scene, beat, … }` — quantised React state. Twenty-one screens
     re-rendering on every scroll frame is how these sections end up feeling
     like a stuck box, so the scenes never see the raw value: they see which one
     is live and which of four beats it is on. State changes ~80 times across
     the whole section instead of a few thousand, and CSS tweens the gaps.
   ────────────────────────────────────────────────────────────────────────── */

/** Where within a slot each beat begins. Beat 3 holds longest — the result is
    the part worth looking at. */
const BEAT_STOPS = [0, 0.14, 0.34, 0.56]


export interface JourneyState {
  /** Live timeline slot. */
  slot: number
  /** Scene on screen right now (during a title card, the one behind it). */
  scene: number
  /** Act the live slot belongs to. */
  act: number
  /** True while an act title card is passing through. */
  intro: boolean
  /** 0 rest · 1 cursor arrived · 2 click fires · 3 settled. */
  beat: number
  progress: MotionValue<number>
}

function resolve(p: number): { slot: number; beat: number } {
  let slot = SLOTS.length - 1
  for (let i = 0; i < SLOTS.length; i += 1) {
    const end = SLOT_STARTS[i] + SLOTS[i].weight / TOTAL_WEIGHT
    if (p < end || i === SLOTS.length - 1) {
      slot = i
      break
    }
  }
  const span = SLOTS[slot].weight / TOTAL_WEIGHT
  const local = span > 0 ? (p - SLOT_STARTS[slot]) / span : 1

  // An act opening is a rest, not a performance: the act's first screen is
  // already up and it simply sits there while the rail marks the chapter. No
  // beats to resolve.
  if (SLOTS[slot].kind === 'intro') return { slot, beat: 0 }

  let beat = 0
  for (let b = BEAT_STOPS.length - 1; b >= 0; b -= 1) {
    if (local >= BEAT_STOPS[b]) {
      beat = b
      break
    }
  }
  return { slot, beat }
}

export function useJourney(ref: RefObject<HTMLElement>, reduced: boolean): JourneyState {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [raw, setRaw] = useState({ slot: 0, beat: 0 })
  const last = useRef('0:0')

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = resolve(p)
    const key = `${next.slot}:${next.beat}`
    if (key === last.current) return
    last.current = key
    setRaw(next)
  })

  const slot = SLOTS[raw.slot]
  const intro = slot.kind === 'intro'
  const scene = slot.scene
  // Reduced motion: every scene sits in its finished state, always.
  // During an act opening the screen holds at rest — it plays once the act's
  // first scene proper takes over.
  const beat = reduced ? 3 : intro ? 0 : raw.beat

  return useMemo(
    () => ({ slot: raw.slot, scene, act: slot.act, intro, beat, progress: scrollYProgress }),
    [raw.slot, scene, slot.act, intro, beat, scrollYProgress]
  )
}

/** Tracks `prefers-reduced-motion` live, not just on first paint. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * Which layout is actually in play.
 *
 * Starts as `'ssr'`, where both the pinned desktop track and the stacked mobile
 * list render exactly as the server sent them — no first-paint flash, and every
 * scene's copy is in the HTML for crawlers. After mount it settles to one and
 * the unused half unmounts, so a phone isn't carrying a pinned track it will
 * never show.
 */
export function useLayoutMode(): 'ssr' | 'wide' | 'narrow' {
  const [mode, setMode] = useState<'ssr' | 'wide' | 'narrow'>('ssr')

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => setMode(mq.matches ? 'wide' : 'narrow')
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return mode
}

/** Live `window.innerHeight`, so the pinned window can be capped to the
    screen instead of scaling purely off available width. */
export function useViewportHeight(): number {
  const [h, setH] = useState(0)

  useEffect(() => {
    const sync = () => setH(window.innerHeight)
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  return h
}

/**
 * Mobile scenes replay their beats on entry instead of following the scrollbar:
 * a phone scrolls in flicks, and mapping four beats onto that reads as
 * stuttering. In view once → 0, 1, 2, 3 with the same rhythm as the desktop dwell.
 */
export function useBeatOnView<T extends HTMLElement = HTMLDivElement>(reduced: boolean) {
  const ref = useRef<T | null>(null)
  const [beat, setBeat] = useState(reduced ? 3 : 0)
  /** Mount gate: twenty-one app mocks on a phone is not free, so a scene only
      builds its DOM once it is within a screen of being needed. */
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mount = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setSeen(true)
        mount.disconnect()
      },
      { rootMargin: '600px 0px' }
    )
    mount.observe(el)

    if (reduced) {
      setBeat(3)
      return () => mount.disconnect()
    }

    let timers: ReturnType<typeof setTimeout>[] = []
    const play = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        play.disconnect()
        timers = [
          setTimeout(() => setBeat(1), 420),
          setTimeout(() => setBeat(2), 1280),
          setTimeout(() => setBeat(3), 1900),
        ]
      },
      { threshold: 0.35 }
    )
    play.observe(el)

    return () => {
      mount.disconnect()
      play.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [reduced])

  return { ref, beat, seen }
}

/* ── Typing ────────────────────────────────────────────────────────────────
   The URL bar and any field the cursor fills in. Character by character with a
   touch of jitter, because a perfectly even cadence reads as a marquee rather
   than a person.
   ────────────────────────────────────────────────────────────────────────── */
export function useTyped(text: string, run: boolean, msPerChar = 22) {
  const [shown, setShown] = useState(run ? text : '')

  useEffect(() => {
    if (!run) {
      setShown(text)
      return
    }
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const step = () => {
      i += 1
      setShown(text.slice(0, i))
      if (i < text.length) timer = setTimeout(step, msPerChar + (i % 3) * 8)
    }
    setShown('')
    timer = setTimeout(step, 80)
    return () => clearTimeout(timer)
  }, [text, run, msPerChar])

  return shown
}
