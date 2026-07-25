# The Nova Studio Journey — build log

Branch: `feat/nova-studio-journey` (never pushed — app is in production)

## What this replaces

`<section id="features">` in [src/app/page.tsx](src/app/page.tsx) — the
"Your entire agency, beautifully organized" head plus the three `FeatureSplit`
rows. The anchor `id="features"` and `scroll-mt-24` are preserved.

## Shape

Five acts, twenty-one scenes, in one pinned browser window.

| Act | Scenes |
| --- | --- |
| **I · The lead** | leads board (drag to Won) · lead drawer (convert) |
| **II · The client** | convert form · client page (enable portal) · invite sent |
| **III · The work** | new project · overview & progress · payments → GST invoice · team & payouts · deliverables & files · schedule the kickoff · projects board |
| **IV · Her side** | portal login · portal home · portal project · portal messages · owner messages |
| **V · The loop** | mark completed · 5★ review · referral → lead · public reviews page |

Each act opens with a **title card** that slides up through the window, holds
while the screen behind it swaps, and leaves through the top — with the browser
chrome running its page-load bar and the URL retyping at the same moment. Three
cues, one message: you just went somewhere new. Sub-scenes only ever advance on
scroll; nothing plays on its own.

## Decisions logged

1. **framer-motion added** (`^11.18.2`), for one `useScroll` source, the act
   cards and the ink thread — all of which animate outside React. The section is
   code-split via `next/dynamic` (SSR kept on, so all the copy ships in the HTML):
   framer lands in its own chunk and the homepage's First Load JS is 190 kB.
2. **Screens render on a fixed 1440 × 846 stage, CSS-scaled to fit the window.**
   This is the single decision that makes the mocks match the product. At 1440 the
   app's own class names are correct — `w-64` really is the sidebar, `.card` really
   is `p-6`, `.input` really is `h-11`, `text-sm` really is 14px — so the screens
   are built from the same strings the app uses (both codebases define `.card`,
   `.btn-primary`, `.input`, `.badge` in globals.css). Hand-shrinking every value
   to fit a 700px box is what makes a mock drift into looking like a different app.
   The trade: a transformed ancestor rules out framer's shared-layout FLIP, so the
   persistent client chip was dropped. Fidelity is worth more than the chip.
3. **The mobile frame crops rather than shrinks.** 1440px of app at 374px wide is a
   3.8× reduction — 14px type lands at 4px. So a phone gets ~60% of the content
   column, positioned per scene (`Scene.crop`) so the region where the action
   happens is the region you see. Boards and the three-pane messages screen point
   the window somewhere other than the default.
4. **Scroll drives quantised beats, not raw values.** One listener maps progress to
   `{slot, scene, beat}`; twenty-one screens never see the raw scroll value. State
   changes ~80 times across the section instead of thousands, and CSS tweens the gaps.
5. **The pinned window is top-aligned, not centred.** Centring a 537px window in a
   screen-height sticky box parks it ~150px down, and that slack *was* the gap under
   the title copy. Top-aligning cut it from 222px to 156px.
6. **Act V returns to act III's overview screen by prop, not by a second copy.**
   `ProjectOverview` takes `status`/`statusRing`, so completing the project visibly
   happens on the screen the visitor already knows.
7. **Card spacers are invisible copies of the card**, never measured heights — a
   hardcoded height drifts the moment a line rewraps and the travelling lead card
   lands on its neighbour.

## Known, accepted

- framer-motion logs a dev-only warning that the scroll container is
  `position: static`. It fires for any `useScroll({ target })` against the document
  scroller and is compiled out of production. The fix would be `position: relative`
  on `<html>` site-wide; not worth it for a dev log.

## Status — complete

- [x] Five acts, twenty-one scenes, act title cards + nav-progress + URL retype
- [x] Every screen rebuilt against the real app's markup at true 1440px width
- [x] Cursor targets in stage pixels; one action per scene, verified on screen
- [x] Mobile: stacked cards, per-scene crops, act dividers, tap ripples
- [x] Reduced motion — every scene renders settled, no cursor, no cards
- [x] Verified in a real browser at 1440 / 390 across all five acts
- [x] No console errors from the section; type-check, lint and build green
