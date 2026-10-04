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

## Phase 2 — Pricing & positioning ✅

**Files added:** `src/lib/pricing.ts` (Phase 1), `src/lib/cta.ts`.
**Files changed:** `src/app/pricing/page.tsx`, `src/components/landing/PricingSection.tsx`,
`src/app/page.tsx`, `src/lib/faq-data.ts`, `src/components/marketing/CtaSection.tsx`, the five
content templates (`AlternativeLanding`, `AudienceLanding`, `CompareLanding`, `FeatureLanding`,
`SeoLanding`), `ToolPage`, `TemplatePage`, `GlossaryTermPage`, `BlogPostLayout`, `SiteHeader`,
`ClientJourney`, `src/app/demo|download|features/page.tsx`, plus a 49-file copy sweep across
`src/lib/content/**`.

1. **Reference prices removed everywhere.** "was ₹499 / was ₹1,999", "launch-priced", "🚀 Launch
   Offer" and "Launch pricing is limited time" appeared in 49 content files, the pricing page, the
   homepage slab, the schema and the FAQ. All gone. Only the real current prices are shown.
2. **Both billing currencies, everywhere.** USD leads (most of the audience is outside India) with
   the actual INR price beneath, stated as a second price list rather than a conversion. Both are in
   the server HTML, so neither needs JavaScript and both are indexable — no currency toggle, which
   would have hidden one of them from crawlers and risked a wrong-currency flash.
3. **Pricing FAQ** now answers: which currency am I billed in, how is my billing region decided and
   can I change it, which currencies can I invoice *my* clients in, does Clienter collect my
   clients' payments (no — it records and tracks them), cancellation, refunds.
4. **Homepage H1** → "Run every client from first enquiry to final payment". Three variants and the
   reasoning are in `docs/seo-changelog.md`. No A/B test, because there is no event tracking in place
   yet (Phase 6 defines it).
5. **One primary CTA** (`PRIMARY_CTA = "Start free"`) replacing "Get started", "Get started free",
   "Create free account", "Try Clienter free", "Start for free" and "Try it yourself — create a free
   account". Plan-specific buttons on `/pricing` keep "Start Pro" / "Start Ultra" deliberately —
   those are plan selections, not the generic CTA.
6. **UTMs on every signup link** via `signupUrl(medium, campaign)`:
   `utm_source=site&utm_medium=<page type>&utm_campaign=<slug>`. 17 bare links became 0.

**Not done, and why:** plan limits and feature gating are untouched. The prompt's PLAN DATA block
still said `<<PASTE …>>`, so there was no source of truth to reconcile against and changing a limit
on a guess is worse than leaving it. Every discrepancy I could find is listed in
`docs/needs-owner-input.md`. The USD figures used ($19/$39) are the ones stated in the brief and
already published in the live pricing FAQ, so showing them is not a new claim.
