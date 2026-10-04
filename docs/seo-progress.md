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

## Phase 3 — Comparisons & alternatives ✅

**Files added:** `src/lib/content/sources.ts`, `src/components/marketing/SourceList.tsx`,
`src/lib/content/alternative/honeybook-alternatives.ts`, `…/bonsai-alternatives.ts`,
`…/dubsado-alternatives.ts`, `docs/needs-verification.md`.
**Files changed:** `compare/_type.ts`, `alternative/_type.ts`, `CompareLanding.tsx`,
`AlternativeLanding.tsx`, `alternative-pages.ts`, `clienter-vs-honeybook.ts` (full rewrite), plus a
globalisation sweep over 23 comparison and alternative configs.

1. **Sources are now a first-class field.** `CompetitorSource { label, url, checked }` on both config
   types, rendered under the comparison table by `<SourceList>` with `rel="nofollow noopener"` (a
   reference, not an endorsement — and no ranking signal to a competitor from a page that competes
   with them). Pages with no sources render nothing and are tracked in `docs/needs-verification.md`.
2. **Five competitor pricing pages read in full** (HoneyBook, Bonsai, Dubsado, Plutio, Moxie) and
   verified prices quoted with their own plan names. Bonsai's and Plutio's own FAQ structured data
   turned out to state their full price lists, which is as primary as a source gets.
3. **"They don't have X" is gone.** Every unverified absence now reads "not listed on their pricing
   page". Previously eight pages asserted "Not built for India/GST" as a fact about the product when
   the evidence only supported a fact about the page.
4. **`asOf` bumped only where a page was actually re-read.** Five pages moved to October 2026; the
   other 23 keep their visibly stale July 2026 date. Bumping a date without re-reading would be worse
   than the stale date.
5. **India reframed as one argument, not the only one.** Eight comparison pages put India in the title
   for a global competitor and argued the whole comparison on GST and rupees, discarding the US/UK/AU/CA
   half of each query. The GST argument stays — it is real and specific — but the lead argument is now
   per-user vs flat pricing, team features, setup cost and currency coverage. India-specific
   competitors (Refrens, Vyapar, Zoho Books, QuickBooks-India) were left alone on purpose.
6. **Three plural "best X alternatives" pages** for HoneyBook, Bonsai and Dubsado. Five real options
   each, Clienter first, with the case for each competitor stated plainly — including, on the Bonsai
   page, the arithmetic showing Bonsai Basic is cheaper than Clienter Pro for one person.

**Not done:** no new singular comparison pages (the brief forbade them). The 23 unverified pages were
not re-dated. `/alternatives/honeybook-alternative-india` keeps its slug: renaming it would need a 301
and "honeybook alternative india" is a genuine query that deserves its own page.

## Phase 4 — Content & AI search ✅

**Files added:** `docs/content-plan.md`, six draft posts under
`src/lib/content/blog/posts/`.
**Files changed:** `blog/_type.ts`, `blog.ts`, `blog/[slug]/page.tsx`, `seo/metadata.ts`,
`seo/routes.ts`, `BlogPostLayout.tsx`, all five published posts.

1. **Draft infrastructure.** A `draft` flag on `BlogPost`. A draft renders at its URL so it can be
   read and reviewed, and is invisible everywhere else: `noindex`, absent from the sitemap, the blog
   index, category and tag archives, RSS and related-posts, with a visible draft banner. Verified in
   the build output: the sitemap lists 5 blog URLs, `rss.xml` and `blog.html` contain no draft slug,
   and a draft page ships `robots: noindex, follow`.
   The design point: keeping finished writing in a branch is how drafts die, so they ship to production
   invisible instead.
2. **Six drafts written** (~2,000–2,600 words each): client onboarding process, preventing scope creep,
   writing a proposal that wins, handling late-paying clients, what is a client portal, agency pricing
   models. Answer-first intros, question-shaped H2s, comparison tables, visible FAQs that are also in
   `FAQPage` schema, a named author, no invented statistics, and each one states plainly what Clienter
   does not do (no time tracking, no payment processing).
3. **All five published posts expanded in place**, each with `updated: '2026-10-04'` so `dateModified`
   and the sitemap `lastmod` are real. The biggest change is the "15 channels" post: each channel had
   one line inside an `<ol>` — a list of names rather than a guide — and now has a paragraph on what it
   is for, how long it takes, and what makes it work, plus a table answering the actual question
   ("which two should I pick") and a section on measuring which channel converts.
4. **`docs/content-plan.md`**: nine clusters mapped to funnel stage and a commercial destination, with
   status and priority per query, a writing order, the AI-citation house style, and the country-page
   decision argued in full.

**Explicitly stated, not hidden:** search volumes are unverified. No keyword tool is available in this
environment and inventing numbers would be worse than having none, so every priority in the plan is a
judgement from query shape and commercial intent. The document says so at the top.

**Not done:** `llms-full.txt` (logged in `docs/needs-owner-input.md`). The three India-specific
published posts were expanded but not duplicated into worldwide siblings — that is in the writing order.

## Phase 5 — Tools, templates & use-case pages ✅

**Files added:** `src/components/tools/ToolQualifier.tsx`.
**Files changed:** `CalculatorTool.tsx` (rewritten), `calculator-specs.ts`, `ToolPage.tsx`,
`src/lib/content/tools.ts`, `src/lib/content/templates.ts`, `src/app/tools/page.tsx`,
`src/app/templates/page.tsx`, `src/app/for/page.tsx`, 10 comparison configs, 4 audience configs.

**The audit, measured rather than asserted** (script: `.seo-tmp/audit.cjs`, re-runnable):

| Section | Pages | Config prose | Long strings reused across pages |
|---|---|---|---|
| `/for/*` | 13 | ~17,700 words (1,180–1,480 each) | **2 → 0** after this phase |
| Tools | 15 | ~4,600 words | 0 |
| Templates | 8 | ~3,500 words | 0 |
| `/compare/*` | 24 | ~29,850 words | **6 → 3** (the 3 left are short factual bullets) |

So the uniqueness worry was largely unfounded — the `/for` pages are genuinely written per audience
at ~1,300 words each, and the tools and templates share nothing. The real duplication was on the
comparison pages: one CTA subtitle appeared verbatim on 7, one pricing paragraph on 6 more, and one on
3. Those are the pages a visitor is most likely to open two of, so the template showed. All ten now
carry a line that is true of the specific comparison.

**What changed functionally:**

1. **Currency-aware calculators.** Four generic calculators (rate, project cost, profit margin,
   retainer) were hardcoded in ₹, which made general tools look Indian and gave a visitor in London
   no reason to trust the output. They now offer 9 currencies, remember the choice per browser
   (wrapped in try/catch — `localStorage` throws in a private window), and say plainly that changing
   currency relabels rather than converts. **Nothing applies an exchange rate**: a calculator silently
   using yesterday's rate would be worse than one that did nothing.
   The GST and TDS calculators are untouched — they compute an Indian tax, so ₹ is the subject rather
   than the framing. The project cost calculator gained a tax field where the visitor types their own
   rate, because Clienter supports a custom rate per line item and GST for India, and nothing else —
   assuming a VAT rate would imply a capability the product does not have.
2. **Generic tools de-Indianised.** "(India)" out of 4 titles, ₹ out of 3 more, and the `/tools` hub
   subtitle no longer ends "built for India" — it now says which tools are India-specific and that the
   rest work anywhere.
3. **Templates made portable.** The contract, NDA, SOW, proposal, retainer and quotation templates
   hardcoded "governed by the laws of India" and ₹ amounts. Both are now bracketed placeholders like
   every other field, which is also better for Indian users: a governing-law clause should be a
   decision, not a default. `invoice-template-india` stays India-specific — a GST invoice layout is
   genuinely a local format.
4. **One qualifying question** under every tool page: "How many active clients do you have right now?"
   with four bands, each giving a different and honest recommendation — the 1–2 band says a
   spreadsheet is probably fine and points at the free templates instead of the signup. The answer
   never leaves the browser; it shapes the copy and appends the band to the UTM campaign so we can see
   which segment each tool attracts.

**Explicitly not done:** no data transfer from any tool into the app, as instructed — the tools remain
entirely client-side. No country pages; the decision is argued in `docs/content-plan.md`.

## Phase 6 — Measurement & launch prep ✅

**Files added:** `src/lib/analytics.ts`, `docs/analytics-plan.md`,
`docs/search-console-checklist.md`, `docs/directory-kit.md`.

1. **A consent-safe event layer.** `track()` checks *both* that `readConsent()?.analytics ===
   'granted'` and that `window.gtag` exists before sending. Nothing is queued, retried or stored for
   later, so a visitor who refuses leaves no trace. The double check matters because withdrawing
   consent leaves the already-loaded script in the page until navigation.
   Six events in a closed vocabulary: `signup_click`, `cta_click`, `tool_use`, `qualifier_answer`,
   `source_link_click`, `template_copy`. Every parameter is a constrained identifier — nothing a
   visitor typed is ever a parameter value, because an analytics payload is where personal data leaks
   by accident.
2. **Deliberately not wired up.** `analytics.ts` is not called from any component yet. Renaming an
   event after collection starts splits the history, so the vocabulary should be reviewed before it is
   scattered across twenty files. `docs/analytics-plan.md` §3 lists the five call sites and the one
   rule: fire and forget, never in the path of the user's action.
3. **UTM handoff documented**, including the four things that must be true in the **app** repo for it
   to work — chiefly that `/signup` must not strip the query string on its first redirect, which is
   the most common way attribution silently fails. All four are in `docs/needs-owner-input.md`.
4. **`docs/search-console-checklist.md`**: one-time setup (domain property, both sitemaps, Bing
   import, the verification-token slot that already exists in `layout.tsx`), validation steps, a
   five-minute weekly routine, the baseline readings to capture **before** deploying, and a table of
   what to watch per change with the expected direction. It states plainly that de-Indianising eight
   comparison titles may cost India impressions before it gains anything elsewhere, so a week-two dip
   is not mistaken for a broken deploy.
5. **`docs/directory-kit.md`**: a 12-point readiness check that found **four blockers** (no product
   screenshots, no logo variants, no published postal address, and social URLs that `site.ts` itself
   flags as best guesses), four tiers of directory ordered by return per hour, ready-to-paste copy at
   three lengths, positioning variants per directory type, the required-facts list, and a UTM
   convention.

**Nothing was submitted anywhere, and no account was created**, as instructed. The sitemap is **152
URLs** after this branch, down from 162 — the 14 thin archives left and 3 plural alternatives pages
and a handful of other additions arrived.
