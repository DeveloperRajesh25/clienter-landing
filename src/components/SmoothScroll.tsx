'use client'

import { useState } from 'react'
import { ReactLenis } from 'lenis/react'

/**
 * Site-wide inertia scrolling (the "locomotive" feel), powered by Lenis in
 * `root` mode: it drives the native window scroll rather than wrapping the
 * page in its own scroll container, so window.scrollY-based effects (e.g.
 * the header's scroll-condense state) and hash anchors keep working as-is.
 *
 * Skips smoothing entirely for prefers-reduced-motion, per WCAG guidance.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  if (reducedMotion) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.5,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
