'use client'

import { ACTS, SCENES } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   THE THREAD — the section's only decoration, and its table of contents.

   It does NOT scroll. The rail lives inside the same sticky box as the window,
   so the spine stays put while the story moves through it. Five big nodes, one
   per act, sit at fixed heights; the node for the act you are in is the loud
   one and it does not hand over until that whole act — every scene in it — is
   behind you. Under the live node its scenes unfold as small ticks, so you can
   always see where you are inside the chapter as well as which chapter it is.

   Everything is drawn segment by segment (a connector above every dot) rather
   than as one line with a measured fill, so no layout measuring is needed and
   the expanding act can never desynchronise from its rail.
   ────────────────────────────────────────────────────────────────────────── */

export function Thread({ scene, act, intro }: { scene: number; act: number; intro: boolean }) {
  return (
    <div
      aria-hidden
      className="relative hidden w-14 flex-none select-none flex-col items-center pl-2 lg:flex"
    >
      {ACTS.map((a, i) => {
        const own = SCENES.map((s, si) => ({ s, si })).filter(({ s }) => s.act === i)
        const current = i === act
        const done = i < act
        const reached = i <= act

        return (
          <div key={a.n} className="flex w-full flex-col items-center">
            {/* The spine between acts. */}
            {i > 0 && (
              <span
                className={`w-px transition-colors duration-500 ${
                  reached ? 'bg-orange-500/45' : 'bg-orange-500/12'
                } h-7`}
              />
            )}

            {/* The act node — the big mark. It stays lit for the whole act. */}
            <span className="relative flex h-5 items-center justify-center">
              <span
                className={`absolute right-full mr-2.5 whitespace-nowrap font-serif-display italic leading-none transition-all duration-500 ${
                  current
                    ? 'text-[15px] text-orange-600'
                    : done
                      ? 'text-[11px] text-orange-600/55'
                      : 'text-[11px] text-orange-600/25'
                }`}
              >
                {a.n}
              </span>

              {current && intro && (
                <span className="absolute h-5 w-5 animate-ping rounded-full bg-orange-500/30" />
              )}

              <span
                className={`block rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  current
                    ? 'h-3.5 w-3.5 bg-orange-500 ring-4 ring-orange-500/18 shadow-[0_0_18px_4px_rgba(234,88,12,0.30)]'
                    : done
                      ? 'h-2 w-2 bg-orange-500/60'
                      : 'h-2 w-2 bg-orange-500/20'
                }`}
              />
            </span>

            {/* The act's scenes — only the live chapter opens up. */}
            <div
              className={`grid w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                current ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="flex flex-col items-center overflow-hidden">
                {own.map(({ si }) => {
                  const passed = si < scene || (si === scene && !intro)
                  const live = si === scene && !intro
                  return (
                    <span key={si} className="flex flex-col items-center">
                      <span
                        className={`h-3.5 w-px transition-colors duration-500 ${
                          passed ? 'bg-orange-500/40' : 'bg-orange-500/12'
                        }`}
                      />
                      <span
                        className={`block rounded-full transition-all duration-500 ${
                          live
                            ? 'h-2 w-2 bg-orange-500 ring-[3px] ring-orange-500/15'
                            : passed
                              ? 'h-1.5 w-1.5 bg-orange-500/55'
                              : 'h-1.5 w-1.5 bg-orange-500/18'
                        }`}
                      />
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Mobile's thread: the same spine as a single hairline that the stacked cards
 * hang off. Static — a scroll-linked draw on a phone costs more than it says.
 */
export function ThreadMobile() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-10 left-[1.125rem] top-10 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/25 to-orange-500/0 lg:hidden"
    />
  )
}
