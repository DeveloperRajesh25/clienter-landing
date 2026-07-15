'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Render as a different element (default: div). */
  as?: ElementType
  /** Stagger delay in ms — handy for grids/lists. */
  delay?: number
  /**
   * `rise` (default) fades + slides up. `mask` wipes the content in from
   * below with no movement — reserved for editorial headlines, where a
   * sliding block of large type reads as cheap. `wipeX` draws left-to-right,
   * for connective rules and spines.
   */
  variant?: 'rise' | 'mask' | 'wipeX'
  className?: string
}

const VARIANT_CLASS: Record<NonNullable<RevealProps['variant']>, string> = {
  rise: 'reveal',
  mask: 'reveal-mask',
  wipeX: 'reveal-wipe-x',
}

/**
 * Fades + slides its children into view the first time they enter the
 * viewport. Pairs with the `.reveal` / `.is-visible` styles in globals.css and
 * degrades gracefully when `prefers-reduced-motion` is set.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  variant = 'rise',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`${VARIANT_CLASS[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
