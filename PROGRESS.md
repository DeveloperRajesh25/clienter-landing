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

## Status

- [x] Foundation: data, primitives, frame, cursor, thread, scroll driver
- [x] Act I heroes — stage 2 (won lead flies into Clients)
- [x] Act II hero — stage 6 (payment → GST invoice → receipt)
- [x] Act III hero — stage 10 (5★ review + referral loops back)
- [x] Connective beats — stages 1, 3, 4, 5, 7, 8, 9
- [x] Mobile stacked sequence
- [x] Reduced motion + a11y pass
- [x] Wired into page.tsx, dead code removed, type-check + lint + build green
