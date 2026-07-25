'use client'

/**
 * The hand.
 *
 * One cursor, one job per stage: come in from off-frame, travel to the single
 * control that matters, press it, leave. It does not wander, hover things it
 * isn't going to click, or stay on screen once the point is made — a pointer
 * that lingers stops reading as a demonstration and starts reading as a mascot.
 *
 * Position is expressed in percentages of the frame viewport so it lands on the
 * right control at any width, and travel uses an ease-out bezier with a long
 * tail (fast departure, soft arrival) rather than a linear tween.
 */
export function Cursor({
  beat,
  from,
  to,
  dragTo,
  reduced,
}: {
  beat: number
  /** Entry point, % of the screen body. Defaults to just off the bottom edge. */
  from?: { x: number; y: number }
  /** The control it presses, % of the screen body. */
  to: { x: number; y: number }
  /**
   * For the one stage that is a drag rather than a click (chapter 01, pulling
   * the lead into Won): where the pointer ends up while still held down.
   */
  dragTo?: { x: number; y: number }
  reduced: boolean
}) {
  if (reduced) return null

  const start = from ?? { x: to.x + 18, y: 112 }
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
      className="pointer-events-none absolute z-40 transition-[left,top,opacity] ease-[cubic-bezier(0.22,1,0.28,1)]"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        opacity: visible ? 1 : 0,
        // Match the card's own 820ms glide when this is a drag, so the pointer
        // and the thing it is holding move as one object.
        transitionDuration: !travelling ? '260ms' : holding && dragTo ? '820ms' : '760ms',
      }}
    >
      {/* Click ripple — a single soft ring, no confetti. */}
      <span
        className={`absolute -left-1 -top-1 h-8 w-8 rounded-full bg-orange-500/25 transition-all duration-500 ease-out ${
          pressing ? 'scale-100 opacity-0' : 'scale-0 opacity-70'
        }`}
      />
      <span
        className={`absolute -left-0.5 -top-0.5 h-6 w-6 rounded-full ring-2 ring-orange-500/60 transition-all duration-[600ms] ease-out ${
          pressing ? 'scale-[1.9] opacity-0' : 'scale-50 opacity-0'
        }`}
      />
      {/* The pointer itself. Drawn, not an emoji. */}
      <svg
        viewBox="0 0 24 24"
        className={`relative h-[19px] w-[19px] drop-shadow-[0_2px_4px_rgba(67,36,16,0.35)] transition-transform duration-150 ${
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
 * Mobile's stand-in for the cursor: a tap ripple on the same control. A fake
 * pointer on a touch device is a lie about how the product is used.
 */
export function TapRipple({ on, className = '' }: { on: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-30 flex items-center justify-center ${className}`}
    >
      <span
        className={`h-10 w-10 rounded-full bg-orange-500/20 ring-2 ring-orange-500/40 transition-all duration-[700ms] ease-out ${
          on ? 'scale-[2.4] opacity-0' : 'scale-0 opacity-80'
        }`}
      />
    </span>
  )
}
