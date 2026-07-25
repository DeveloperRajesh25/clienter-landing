'use client'

/**
 * The hand.
 *
 * One cursor, one job per scene: come in from off-frame, travel to the single
 * control that matters, press it, leave. It does not wander, hover things it
 * isn't going to click, or stay on screen once the point is made — a pointer
 * that lingers stops reading as a demonstration and starts reading as a mascot.
 *
 * Coordinates are stage pixels, so a target is just "where that button is on a
 * 1200 × 705 screen". It lives inside the scaled stage, so it shrinks with the
 * rest of the mock exactly as a real cursor would.
 */
export function Cursor({
  beat,
  to,
  dragTo,
  reduced,
}: {
  beat: number
  to: { x: number; y: number }
  /** For the one scene that is a drag rather than a click. */
  dragTo?: { x: number; y: number }
  reduced: boolean
}) {
  if (reduced) return null

  const start = { x: to.x + 40, y: 780 }
  const travelling = beat >= 1
  const pos = beat >= 2 && dragTo ? dragTo : travelling ? to : start
  // Gone by the settle beat — the result should be the only thing on screen.
  const visible = beat >= 1 && beat <= 2
  const holding = beat === 2
  // A drag has no click burst: the button goes down and stays down.
  const pressing = holding && !dragTo

  return (
    <span
      aria-hidden
      className="pointer-events-none absolute z-50 transition-[left,top,opacity] ease-[cubic-bezier(0.22,1,0.28,1)]"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        // Match the card's own 820ms glide when this is a drag, so the pointer
        // and the thing it is holding move as one object.
        transitionDuration: !travelling ? '260ms' : holding && dragTo ? '820ms' : '720ms',
      }}
    >
      {/* Click ripple — a single soft ring, no confetti. */}
      <span
        className={`absolute -left-3 -top-3 h-14 w-14 rounded-full bg-primary-500/25 transition-all duration-500 ease-out ${
          pressing ? 'scale-100 opacity-0' : 'scale-0 opacity-70'
        }`}
      />
      <span
        className={`absolute -left-1.5 -top-1.5 h-11 w-11 rounded-full ring-2 ring-primary-500/60 transition-all duration-[600ms] ease-out ${
          pressing ? 'scale-[1.8] opacity-0' : 'scale-50 opacity-0'
        }`}
      />
      {/* The pointer itself. Drawn, not an emoji. */}
      <svg
        viewBox="0 0 24 24"
        className={`relative h-8 w-8 drop-shadow-[0_2px_5px_rgba(67,36,16,0.4)] transition-transform duration-150 ${
          holding ? 'scale-[0.86]' : 'scale-100'
        }`}
      >
        <path
          d="M5.5 2.2 19 12.4l-5.9.5 3.1 6.6-2.7 1.3-3.1-6.6-4 4.3z"
          fill="#1C1917"
          stroke="#FFF8F2"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

/**
 * Mobile's stand-in: a tap ripple on the control itself. A fake pointer on a
 * touch device is a lie about how the product is used.
 */
export function TapRipple({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center"
    >
      <span
        className={`h-20 w-20 rounded-full bg-primary-500/15 ring-2 ring-primary-500/35 transition-all duration-[700ms] ease-out ${
          on ? 'scale-[2.4] opacity-0' : 'scale-0 opacity-80'
        }`}
      />
    </span>
  )
}
