'use client'

import { useEffect, useRef } from 'react'

/**
 * Full-viewport ambient background for the dark landing page.
 *
 * Two soft radial "orbs" chase the cursor at different speeds (lerp), which
 * gives a layered, liquid glow that trails the pointer. On touch devices — or
 * until the mouse first moves — the orbs drift on a slow autonomous path so
 * the background still feels alive. Honors `prefers-reduced-motion` by
 * rendering a static, centered glow instead.
 *
 * Renders fixed behind all content and never intercepts pointer events.
 * Animation is transform-only (GPU-composited) so it stays cheap.
 */
export function CursorGlow() {
  const fastRef = useRef<HTMLDivElement>(null)
  const slowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fastEl = fastRef.current
    const slowEl = slowRef.current
    if (!fastEl || !slowEl) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    // Everything is centered via translate(-50%,-50%) baked into each frame.
    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }

    let tx = window.innerWidth / 2
    let ty = window.innerHeight * 0.35

    if (reduced) {
      place(fastEl, tx, ty)
      place(slowEl, tx, ty)
      return
    }

    let x1 = tx
    let y1 = ty
    let x2 = tx
    let y2 = ty
    let t = 0
    let idle = true
    let raf = 0

    const onMove = (e: PointerEvent) => {
      idle = false
      tx = e.clientX
      ty = e.clientY
    }

    const frame = () => {
      // No fine pointer (touch) or cursor untouched yet → slow lissajous drift.
      if (!finePointer || idle) {
        t += 0.004
        tx = window.innerWidth * (0.5 + 0.32 * Math.sin(t))
        ty = window.innerHeight * (0.38 + 0.22 * Math.cos(t * 0.8))
      }
      // The tight orb follows quickly, the wide wash lags behind — the offset
      // between the two layers is what reads as "liquid".
      x1 += (tx - x1) * 0.09
      y1 += (ty - y1) * 0.09
      x2 += (tx - x2) * 0.03
      y2 += (ty - y2) * 0.03
      place(fastEl, x1, y1)
      place(slowEl, x2, y2)
      raf = requestAnimationFrame(frame)
    }

    if (finePointer) window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Wide, slow amber wash */}
      <div
        ref={slowRef}
        className="absolute left-0 top-0 h-[56rem] w-[56rem] rounded-full opacity-25 will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(251,146,60,0.45) 0%, rgba(251,146,60,0.08) 45%, transparent 70%)',
          filter: 'blur(64px)',
        }}
      />
      {/* Tighter, faster orange core */}
      <div
        ref={fastRef}
        className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full opacity-30 will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(234,88,12,0.12) 50%, transparent 72%)',
          filter: 'blur(48px)',
        }}
      />
    </div>
  )
}
