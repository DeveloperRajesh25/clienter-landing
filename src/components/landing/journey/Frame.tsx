'use client'

import { Lock } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import type { MotionValue } from 'framer-motion'
import { motion, useTransform } from 'framer-motion'
import { useTyped } from './useJourney'

/* ──────────────────────────────────────────────────────────────────────────
   THE ONE WINDOW

   Mounts once for the whole journey and never unmounts — the traffic lights,
   the URL bar and the viewport box are the same DOM nodes in act I and act V.
   Only the screen inside swaps.

   The screens are laid out on a fixed 1200 × 705 stage and the whole stage is
   CSS-scaled to fit. That is the entire reason these mocks match the product:
   at 1200px the app's own class names are correct — `w-64` really is the
   sidebar, `.card` really is `p-6`, `.input` really is `h-11`, `text-sm` really
   is 14px. Hand-shrinking every value to fit a 700px box is what makes a mock
   drift into looking like a different app.
   ────────────────────────────────────────────────────────────────────────── */

/**
 * 1440 × 846 — a common laptop, and the width the product is actually designed
 * for. It matters that it is 1440 and not something smaller: at 1440 the app's
 * own `lg:` layouts are the ones that apply, the 256px rail takes the same share
 * of the screen it really does, and a kanban column is as wide as a kanban
 * column. Shrink the stage and the columns get narrow, cards start truncating
 * that wouldn't truncate, and the mock quietly stops being the product.
 */
export const STAGE_W = 1440
export const STAGE_H = 846

/** The slice of the stage a viewport shows. */
export interface View {
  x: number
  y: number
  w: number
  h: number
}

export const VIEW_FULL: View = { x: 0, y: 0, w: STAGE_W, h: STAGE_H }

/**
 * Mobile can't show 1440px of app legibly — at 374px wide that is a 3.8× shrink
 * and 14px type lands at 4px. So a phone gets a crop instead of a squeeze:
 * roughly 60% of the content column, positioned per scene so the region where
 * the action happens is the region you see. Same decision a designer makes when
 * they crop a product screenshot for a phone.
 */
export const CROP_DEFAULT: View = { x: 264, y: 0, w: 740, h: 720 }

export function Frame({
  url,
  children,
  reduced,
  view = VIEW_FULL,
  /** 0 → 1 sweep of the navigation bar, fired when an act changes destination. */
  loading,
  className = '',
  /** Caps the whole window (chrome + viewport) to this many px, so a wide
      stage never grows taller than the screen has room for. Omit to scale
      off available width alone, as the mobile crop does. */
  maxHeight,
}: {
  url: string
  children: ReactNode
  reduced: boolean
  view?: View
  loading?: MotionValue<number>
  className?: string
  maxHeight?: number
}) {
  const typed = useTyped(url, !reduced)
  const display = reduced ? url : typed
  const typing = !reduced && display.length < url.length

  const root = useRef<HTMLDivElement>(null)
  const chrome = useRef<HTMLDivElement>(null)
  const box = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)
  const [capWidth, setCapWidth] = useState<number | undefined>(undefined)

  const measure = useCallback(() => {
    const el = box.current
    if (el) setScale(el.clientWidth / view.w)
  }, [view.w])

  // The height cap has to land before the width measure below, or the box
  // still reports its old (uncapped) clientWidth for one frame.
  const measureCap = useCallback(() => {
    if (maxHeight == null) {
      setCapWidth(undefined)
      return
    }
    const chromeH = chrome.current?.getBoundingClientRect().height ?? 0
    const availH = Math.max(0, maxHeight - chromeH)
    setCapWidth((availH * view.w) / view.h)
  }, [maxHeight, view.w, view.h])

  // Before paint, so the stage never flashes at full size and snap back.
  useLayoutEffect(measureCap, [measureCap])
  useLayoutEffect(measure, [measure, capWidth])

  useEffect(() => {
    const el = box.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [measure])

  return (
    <div
      ref={root}
      className={`w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-lift-4 ${className}`}
      style={capWidth ? { width: `${capWidth}px`, maxWidth: '100%' } : undefined}
    >
      {/* Chrome. Warm traffic lights — the first dot is brand-orange, matching
          the product-window vocabulary used elsewhere on the page. */}
      <div
        ref={chrome}
        className="relative flex items-center gap-1.5 border-b border-stone-100 bg-stone-50/70 px-3 py-2.5 sm:px-4"
      >
        <span className="h-2.5 w-2.5 flex-none rounded-full bg-orange-400" />
        <span className="h-2.5 w-2.5 flex-none rounded-full bg-stone-200" />
        <span className="h-2.5 w-2.5 flex-none rounded-full bg-stone-200" />

        <div className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white px-2 py-1 ring-1 ring-stone-200/80">
          <Lock className="h-2.5 w-2.5 flex-none text-emerald-500" aria-hidden />
          <span className="truncate text-[10px] font-medium leading-none text-stone-500">
            {display}
            {typing && (
              <span
                aria-hidden
                className="ml-px inline-block h-2.5 w-px translate-y-[1px] bg-orange-500"
              />
            )}
          </span>
        </div>

        {loading && !reduced && <NavProgress loading={loading} />}
      </div>

      {/* Viewport. Fixed ratio so the mock keeps its proportions at every width;
          the stage is scaled to fill it exactly. */}
      <div
        ref={box}
        className="relative w-full overflow-hidden bg-canvas"
        style={{ aspectRatio: `${view.w} / ${view.h}` }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: STAGE_W,
            height: STAGE_H,
            transform: `scale(${scale}) translate(${-view.x}px, ${-view.y}px)`,
            // Hold the first frame back until the scale is known, or the stage
            // renders at 1200px wide inside a 800px box for one paint.
            visibility: scale ? 'visible' : 'hidden',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * The page-load bar, borrowed from the app's own `#nav-progress`: same orange
 * gradient, same glow, same place. It sweeps when an act moves you somewhere
 * new, which is the most honest possible way to say "you just navigated".
 */
function NavProgress({ loading }: { loading: MotionValue<number> }) {
  const width = useTransform(loading, [0, 0.75, 1], ['0%', '92%', '100%'])
  const opacity = useTransform(loading, [0, 0.04, 0.9, 1], [0, 1, 1, 0])

  return (
    <span aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-[2px]">
      <motion.span
        className="block h-full rounded-r-full bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_10px_rgba(249,115,22,0.7)]"
        style={{ width, opacity }}
      />
    </span>
  )
}
