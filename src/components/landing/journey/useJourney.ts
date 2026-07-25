'use client'

import { useScroll, useMotionValueEvent, type MotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import { CHAPTERS, STAGE_STARTS, TOTAL_WEIGHT } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   ONE scroll value drives everything.

   There is a single `useScroll` on the track. From it we derive two things:

   • `progress` — the raw MotionValue, handed straight to the ink thread. It
     animates outside React entirely, so a 9000px SVG can follow the scrollbar
     without re-rendering a single component.

   • `{ index, beat }` — quantised React state. Ten stages re-rendering on every
     scroll frame is how these sections end up feeling like a stuck box, so the
     stages never see the raw value: they see which chapter is live and which of
     four beats it is on. State changes ~40 times over the whole section instead
     of a few thousand, and CSS/framer tweens the gaps.
   ────────────────────────────────────────────────────────────────────────── */

export interface JourneyState {
  /** Live chapter, 0-based. */
  index: number
  /** 0 rest · 1 cursor arrived · 2 click fires · 3 settled result. */
  beat: number
  progress: MotionValue<number>
}

/** Where within a stage each beat begins. Beat 3 holds longest — the payoff is
    the part worth looking at. */
const BEAT_STOPS = [0, 0.14, 0.34, 0.56]

function resolve(p: number): { index: number; beat: number } {
  // Clamp into the last chapter once the track is finished, so the closing
  // screen stays put while the resolution beat scrolls up underneath.
  let index = CHAPTERS.length - 1
  for (let i = 0; i < CHAPTERS.length; i += 1) {
    const start = STAGE_STARTS[i]
    const end = start + CHAPTERS[i].weight / TOTAL_WEIGHT
    if (p < end || i === CHAPTERS.length - 1) {
      index = i
      break
    }
  }
  const start = STAGE_STARTS[index]
  const span = CHAPTERS[index].weight / TOTAL_WEIGHT
  const local = span > 0 ? (p - start) / span : 1

  let beat = 0
  for (let b = BEAT_STOPS.length - 1; b >= 0; b -= 1) {
    if (local >= BEAT_STOPS[b]) {
      beat = b
      break
    }
  }
  return { index, beat }
}

export function useJourney(ref: RefObject<HTMLElement>, reduced: boolean): JourneyState {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [state, setState] = useState({ index: 0, beat: reduced ? 3 : 0 })
  const last = useRef('0:0')

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = resolve(p)
    const key = `${next.index}:${next.beat}`
    if (key === last.current) return
    last.current = key
    setState(next)
  })

  // Reduced motion: every stage sits in its finished state, always.
  const value = reduced ? { index: state.index, beat: 3 } : state

  return useMemo(
    () => ({ index: value.index, beat: value.beat, progress: scrollYProgress }),
    [value.index, value.beat, scrollYProgress]
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
 * Mobile stages replay their beats on entry instead of following the scrollbar:
 * a phone scrolls in flicks, and mapping four beats onto that reads as
 * stuttering. In view once → 0,1,2,3 with the same rhythm as the desktop dwell.
 */
export function useBeatOnView<T extends HTMLElement = HTMLDivElement>(reduced: boolean) {
  const ref = useRef<T | null>(null)
  const [beat, setBeat] = useState(reduced ? 3 : 0)
  /** Mount gate: ten app mocks on a phone is not free, so a stage only builds
      its DOM once it is within a screen of being needed. */
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
      { threshold: 0.4 }
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
