# The Nova Studio Journey — build log

Branch: `feat/nova-studio-journey` (never pushed — app is in production)

## What this replaces

`<section id="features">` in [src/app/page.tsx](src/app/page.tsx) — the
"Your entire agency, beautifully organized" head plus the three
`FeatureSplit` rows (Client Management / Smart Invoicing / Project Tracking).
The anchor `id="features"` and `scroll-mt-24` are preserved so the header nav
link keeps working.

## Decisions logged

1. **framer-motion added** (`^11.18.2`). The spec requires shared-layout/FLIP for
   the persistent Nova Studio chip and a single scroll-progress source. Hand-rolling
   FLIP across 10 stages is fragile; `layoutId` + `useScroll` is the right tool.
   Cost is mitigated by `next/dynamic` code-splitting the section (SSR kept on so
   the chapter copy still ships in the HTML for SEO).
2. **The orphaned "04 / 05 / 06" supporting-feature index was dropped**, not kept.
   Its numbering continued from the three deleted FeatureSplits, and three
   equal-weight cards immediately after the story's resolution beat is exactly the
   generic-SaaS rhythm the brief forbids. Those features still live in full on
   `/features`, and the "Explore all features" link into that page is kept.
3. **Stage transitions cross-fade with opacity only — no transform on the layer.**
   A transformed ancestor distorts framer-motion's FLIP measurement, which would
   make the shared chip glide to the wrong place. Inner content blocks still
   translate/scale freely; only the chip's ancestor chain stays untransformed.
4. **Stage animation is driven by quantised "beats", not raw scroll.** A continuous
   scroll value re-rendering 10 React trees is a jank machine. One scroll listener
   maps progress to `{ stage, beat }` (4 beats per stage) and CSS/framer tween
   between beats. The ink thread reads the raw motion value directly, so it stays
   smooth without re-rendering anything.
5. **The sidebar/frame chrome never unmount** — they live outside the stage layers,
   so there is nothing to pop in. Only the screen body swaps.
6. **The referral loop closes in-panel.** The ink thread branches back upward at
   stage 10, and the panel itself shows the new lead dropping into the same Leads
   board from stage 1 — so the loop is literal, not just decorative.

## Beat grammar (all 10 stages share it)

| beat | meaning                                                       |
| ---- | ------------------------------------------------------------- |
| 0    | screen at rest — the "before" state                           |
| 1    | cursor has arrived at the one key control; ring + tooltip up  |
| 2    | click ripple → the stage's signature animation fires          |
| 3    | settled "after" state, cursor gone                            |

## Decisions logged (second pass, after looking at it in a browser)

7. **The frame's aspect ratio differs by breakpoint** (`RATIO_WIDE` 16:9.4 desktop,
   `RATIO_TALL` 16:13.6 mobile). Mobile drops the app rail and scales the mock to
   stay legible, which costs ~25% of the width but not one pixel of the absolute
   type sizes. Keeping the wide ratio cropped the bottom off every screen — the
   invoice total, the last rows of every list. A squarer box gives the vertical
   room back.
8. **The desktop track collapses to `h-0 overflow-hidden` below `lg`, not
   `display: none`**, and its contents unmount once JS confirms a narrow
   viewport. A hidden element has no `offsetParent`, so framer-motion cannot
   compute a scroll offset against it; and leaving the rail visible-to-AT inside a
   clipped box meant a screen reader read the ten chapters twice. First paint
   still renders both halves so there is no flash and all ten chapters ship in the
   SSR HTML.
9. **The loop-back knot is timed to 0.93→1.0 of the track, not to chapter 10.**
   The panel is pinned while the thread scrolls behind it, so a mark anchored to
   the track is only ever on screen for part of a chapter. That window is where
   chapter 10 hits beat 3 — the knot and Vikram's referral card land together.
10. **Card spacers are invisible copies of the card, never measured heights.** The
    travelling lead card leaves a gap behind it; a hardcoded `h-[4.6rem]` drifted
    the moment a line rewrapped and the flying card sat on its neighbour.
11. **No confirmation toast on chapter 06.** The invoice number, GST line, PAID
    badge and receipt chip already say it, and a banner across the sheet covered
    the ₹47,200 total — which is the whole point of the stage.

## Known, accepted

- framer-motion logs a dev-only warning that the scroll container is
  `position: static`. It fires for any `useScroll({ target })` against the
  document scroller and is compiled out of production. The fix would be
  `position: relative` on `<html>` site-wide; not worth it for a dev log.

## Status — complete

- [x] Foundation: data, primitives, frame, cursor, thread, scroll driver
- [x] Act I hero — chapter 02 (won lead morphs into a client row)
- [x] Act II hero — chapter 06 (payment → GST invoice sheet → receipt PDF)
- [x] Act III hero — chapter 10 (5★ verified review + referral loops back)
- [x] Connective beats — chapters 1, 3, 4, 5, 7, 8, 9
- [x] Mobile stacked sequence, beats replayed on entry, tap ripples
- [x] Reduced motion (every chapter renders settled, no cursor) + a11y pass
- [x] Verified in a real browser at 1440 / 1024 / 390 across all ten chapters
- [x] Wired into page.tsx, dead code removed, type-check + lint + build green
- [x] framer-motion confirmed code-split into its own chunk — the homepage's
      First Load JS moved 179 kB → 180 kB
