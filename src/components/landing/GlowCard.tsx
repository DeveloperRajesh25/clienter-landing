'use client'

import { useRef, type MouseEvent, type ReactNode } from 'react'

/**
 * Dark glass card with a cursor-tracked spotlight: a soft radial highlight
 * follows the mouse inside the card and fades in on hover. The border also
 * warms toward the brand orange. Children render inside a relative layer so
 * they always sit above the effect.
 *
 * Pass the border radius via className (e.g. `rounded-2xl`) so callers can
 * match their context; the spotlight clips to it via overflow-hidden.
 */
export function GlowCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group/glow relative h-full overflow-hidden border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 hover:border-orange-500/25 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(249,115,22,0.09), transparent 65%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
