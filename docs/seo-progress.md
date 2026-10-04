# SEO overhaul — progress log

Branch: `seo/overhaul` (local only, never pushed). One commit per phase so each can be
reverted on its own. **If you resume this work, read this file first.**

| Phase | Status | Commit |
|---|---|---|
| 0 — Understand & audit | ✅ done | `phase 0` |
| 1 — Technical foundation | ✅ done | `phase 1` |
| 2 — Pricing & positioning | pending | |
| 3 — Comparisons & alternatives | pending | |
| 4 — Content & AI search | pending | |
| 5 — Tools, templates, use cases | pending | |
| 6 — Measurement & launch prep | pending | |

---

## Phase 0 — Understand & audit ✅

**Files added:** `docs/seo-audit-2026-10.md`, `docs/seo-progress.md`.

Mapped the stack (Next.js 14 App Router, all content routes SSG from typed config files, one
metadata builder in `lib/site.ts` re-exported as `buildMetadata`, registry-driven sitemap in
`lib/seo/routes.ts`, server-rendered JSON-LD from `lib/structured-data.ts`, consent-gated GA4).
Read the five prior reports. Crawled all 162 live sitemap URLs for title/description/canonical/H1
and cross-checked `robots.txt` against every one of them.

Of the seven "known issues": **confirmed** 3 (India framing), 4 (thin blog + archives), 5 (no
sources, stale dates); **refuted** 7 (no robots collision at all) and the limits half of 1;
**resolved** 6 (JSON-LD is server-rendered and correct, bar one duplicate node); **partly stale** 2
(title/description already global, H1 and locale signals were not).

**Nothing skipped.** No GSC or field-CWV access, so index coverage and real Core Web Vitals are
deferred to `docs/search-console-checklist.md` rather than guessed at.

## Phase 1 — Technical foundation ✅

**Files changed:** `src/lib/site.ts`, `src/lib/seo/config.ts`, `src/lib/seo/routes.ts`,
`src/app/layout.tsx`, `src/lib/structured-data.ts`, `src/app/pricing/page.tsx`,
`src/app/llms.txt/route.ts`, `src/app/blog/tag/[tag]/page.tsx`,
`src/app/blog/category/[category]/page.tsx`, `src/app/blog/[slug]/page.tsx`,
`src/lib/content/blog/_type.ts`, `src/components/marketing/InvoicePreview.tsx`,
`src/lib/feature-pages.ts`, `src/lib/seo-pages.ts`, 5 blog post configs, 2 audience configs,
`src/lib/content/glossary/terms-crm.ts`, 10 static page files (description rewrites).
**Files added:** `src/lib/pricing.ts`.

See `docs/seo-changelog.md` for the full list with how to verify each one.

**Skipped, deliberately:** 37 meta descriptions in the 156–165 character band. Google renders to
roughly 160, so the loss is at most a word, and rewriting 37 live descriptions for 1–10 characters
carries more risk than it removes. Everything over 165 was rewritten (23 pages).

**Not done because it needs a decision:** `llms-full.txt`. `/llms.txt` already exists and was
globalised; a full-text bundle is a bigger build and is logged in `docs/needs-owner-input.md`.

`npm run type-check`, `npm run lint` and `npm run build` all green.
