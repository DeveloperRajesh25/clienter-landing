'use client'

import { Lock } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTyped } from './primitives'

/**
 * The one window.
 *
 * This component mounts once for the whole journey and never unmounts — the
 * traffic lights, the URL bar and the viewport box are the same DOM nodes at
 * stage 1 and stage 10. Only the screen inside swaps. That is the entire trick
 * behind the section not feeling like a scrolling box of slides.
 *
 * The URL bar types itself out character by character every time the path
 * changes, which is the cheapest possible way to tell the visitor "you just
 * navigated" without moving anything else.
 */
export function Frame({
  url,
  children,
  reduced,
  className = '',
}: {
  url: string
  children: ReactNode
  reduced: boolean
  className?: string
}) {
  const typed = useTyped(url, !reduced)
  const display = reduced ? url : typed
  const typing = !reduced && display.length < url.length

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-lift-4 ${className}`}
    >
      {/* Chrome. Warm traffic lights — the first dot is brand-orange, matching
          the ProductFrame vocabulary already used elsewhere on the page. */}
      <div className="flex items-center gap-1.5 border-b border-stone-100 bg-stone-50/70 px-3 py-2.5 sm:px-4">
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
      </div>

      {/* Viewport. 16:10 so the mock keeps its proportions at every width; the
          stage layers stack absolutely inside. */}
      <div className="relative aspect-[16/10.2] w-full overflow-hidden bg-canvas">{children}</div>
    </div>
  )
}
