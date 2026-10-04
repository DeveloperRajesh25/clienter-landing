# Clienter SEO audit — October 2026

**Audited:** the `clienter-landing` repo (branch `main`, commit `e7aedda`) and the live site
`https://clienter.co.in`.
**Date of audit:** 2026-10-04.
**Method:** repo read-through; `curl` crawl of all 162 URLs in the live `sitemap.xml`, capturing
`<title>`, `<meta name="description">`, `rel=canonical` and `<h1>` count per URL; JSON-LD read out of
the served HTML (this site renders structured data server-side, so it IS visible to `curl` — see
"JSON-LD" below); `robots.txt` cross-checked against every sitemap URL programmatically.
**Audience the site is being judged against:** agencies of 2–15 people and established freelancers
**worldwide**, with India as the largest early market — not India-only.

---

## 1. Executive summary

The site is in far better technical shape than a site of this age usually is. The previous overhaul
(see `SEO_OVERHAUL_REPORT.md`) left a genuinely good foundation: one canonical host with a
`www → non-www` 301, a registry-driven sitemap that cannot drift from the pages, server-rendered
JSON-LD on every page, 163 URLs with **zero duplicate titles and zero duplicate descriptions**, no
orphan hubs, `next/font` with `display: swap`, security headers, and a consent-gated analytics tag.

What holds it back is not plumbing. It is that **every signal on the site says "India"** while the
product is sold worldwide, and that **the title and description budgets are blown on most pages**.

Top five, by impact ÷ effort:

| # | Finding | Impact | Effort |
|---|---------|--------|--------|
| 1 | Site-wide locale signals are India-locked: `<html lang="en-IN">`, `og:locale en_IN`, hreflang `en-IN`, `Organization.areaServed: "IN"`, `inLanguage: en-IN` | **High** — tells Google the brand serves one country, for exactly the US/UK/AU/CA queries that are the expansion target | Low (5 files) |
| 2 | 127 of 163 titles exceed 60 characters, almost all because of the unconditional `· Clienter` suffix | **High** — truncation eats real keywords on 78% of the site | Low (1 function) |
| 3 | `/pricing` shows INR only, no USD/PayPal plans, and advertises "was ₹499 / was ₹1,999" regular prices | **High** — international visitors see a price they cannot pay; the strikethrough is an unverifiable claim | Medium |
| 4 | 60 descriptions over 155 characters, 16 over 175, one at 333 | Medium | Medium |
| 5 | 14 thin blog archive URLs (11 tags + 3 categories) for 5 posts, all in the sitemap | Medium — the helpful-content signal is site-wide | Low |

**Status:** findings 1, 2, 4, 5 are fixed in Phase 1 of this pass. Finding 3 is Phase 2.

---

## 2. The seven known issues from the 2026-10-04 manual review

Checked each one against the live site. Three are confirmed, three are refuted or stale, one is
partly right.

### 2.1 `/pricing` contradicts the product — **PARTLY REFUTED**

The limits are **not** wrong. The live `/pricing` shows Free = 3 clients / 5 projects and Pro = 20
clients / 40 projects, which is what the comparison pages, the `SoftwareApplication` schema and the
pricing FAQ all say. There is no 5/10 or 30/60 anywhere in the repo. Whatever produced those numbers
in the manual review is not on the site now.

What **is** confirmed:

- The page advertises "was ₹499" and "was ₹1,999" strikethrough prices, plus a "🚀 Launch pricing is
  limited time" line. Nothing in the repo or the product context establishes that ₹499/₹1,999 were
  ever charged, and a permanent "limited time" offer is the exact pattern consumer-protection
  regulators treat as a false reference price.
- The plan cards, the footnote ("All prices in INR") and the structured data are INR-only. The USD
  plans exist in exactly one place: the answer to "How do I pay?" in the FAQ, 400px below the fold.
  An international visitor sees three rupee prices and no way to convert them.
- `og`/Product schema carried `priceCurrency: INR` only, so Google had no USD offer to show a US
  searcher.

### 2.2 Homepage is freelancer-only and India-framed — **PARTLY STALE**

The `<title>` and description have already been globalised: *"Clienter — Client Management Software
for Freelancers & Agencies"* / "…Built for freelancers and agencies everywhere." Those are fine.

Still true:

- **H1 is "Run your freelance business without the chaos."** "Freelance business" excludes the
  primary ICP (agencies of 2–15), and "without the chaos" is a feeling, not the job. Fixed in Phase 2.
- `og:locale` was `en_IN` and `<html lang>` was `en-IN`. Fixed in Phase 1.
- `SITE_TAGLINE` (which feeds the default title, OG card and Twitter card) was the same
  freelancer-only line. Fixed in Phase 1.

### 2.3 India-framed titles and copy on non-India pages — **CONFIRMED**

Counted on the live site:

- 8 of 24 `/compare/*` pages put India in the title for a **global** competitor:
  `clienter-vs-bonsai` ("Freelancer Suite for India"), `-honeybook` ("Which Suite for India?"),
  `-dubsado` ("Best for Indian Freelancers"), `-plutio`, `-moxie`, `-quickbooks`, plus
  `-zoho-books` and `-harvest` in the body.
- 5 of 9 `/alternatives/*` pages do the same (`honeybook-alternative-india`,
  `dubsado-alternative`, `bonsai-alternative`, `trello-alternative-for-freelancers`,
  `hubspot-alternative-for-freelancers`).
- `/tools` subtitle ends "…and built for India."
- `/how-it-works`, `/about` and `/demo` descriptions said "Indian freelancers".
- The 15 tool pages and 8 templates are India-first by construction (₹ only, GST/TDS calculators,
  "(India)" in the title). Several of those are genuinely India-specific products (GST calculator,
  TDS calculator) and should stay that way; the generic ones (rate, project cost, profit margin,
  retainer, timesheet, invoice number) should not be.

Legitimately India-specific and to be left alone: `/for/indian-freelancers`,
`/compare/clienter-vs-refrens`, `-vyapar`, `-zoho-books`, `/tools/gst-*`, `/tools/tds-calculator`,
`/blog/freelance-invoice-format-india`, `/blog/how-to-get-freelance-clients-in-india`.

### 2.4 Thin blog — **CONFIRMED**

5 posts, ~1,100–1,500 words each. 11 tag archives and 3 category archives, i.e. **14 of the
sitemap's 162 URLs are archives of 5 articles**; most list one or two posts and carry no copy of
their own beyond a one-line description. `how-to-get-freelance-clients-in-india` promises "15 proven
channels" and gives most of them two sentences, which is the shape of a listicle that loses to any
competitor who actually explains one channel properly.

### 2.5 Comparison pages cite no sources and are stale-dated — **CONFIRMED**

All 24 `/compare/*` and all 9 `/alternatives/*` configs carry `asOf: 'July 2026'`, rendered as
"Competitor details are our fair reading as of July 2026 and can change." There is no `sources` field
in `ComparePageConfig` or `AlternativePageConfig` at all, so no page links to a competitor's own
pricing or feature page. The content itself is honest (qualitative pricing language, no invented
competitor prices, pros **and** cons for both sides) — the gap is verifiability, not fairness.

### 2.6 JSON-LD could not be verified — **RESOLVED, it is correct**

This site renders JSON-LD server-side as inline `<script type="application/ld+json">`, so it is in
the HTML `curl` receives (the usual "fetchers can't see schema" caveat applies to CMS plugins that
inject it with JavaScript — not here). Read off the live HTML:

| URL | Nodes found |
|---|---|
| `/` | Organization, WebSite (+SearchAction), SoftwareApplication (3 Offers), FAQPage (6 Q) |
| `/pricing` | …+ Product/AggregateOffer, BreadcrumbList, FAQPage (9 Q), **SoftwareApplication twice** |
| `/compare/clienter-vs-bonsai` | …+ BreadcrumbList (3), FAQPage (4) |
| `/blog/freelance-invoice-format-india` | …+ Article (Person author, WebPage mainEntity), BreadcrumbList, FAQPage |

One real defect: `/pricing` emitted `SoftwareApplication` **twice** (root layout + page). Every
`FAQPage` checked corresponds to an FAQ that is genuinely visible on the page. No `aggregateRating`
is fabricated anywhere. Fixed in Phase 1.

### 2.7 `robots.txt` prefix rules block landing URLs — **REFUTED**

Cross-checked all 20 `Disallow` prefixes against all 162 sitemap URLs programmatically: **0
collisions.** The near-misses are near-misses only — `/projects` does not match
`/project-management-crm`, `/clients` does not match `/client-management-software`, `/team` does not
match `/templates`, `/tasks` matches nothing.

One residual risk worth recording, which belongs to the app, not this repo: the `fallback` rewrite in
`next.config.js` serves `clienter.co.in/<slug>` from the app, so a business whose slug begins
`team…`, `settings…`, `projects…` or `clients…` would be blocked by these prefixes. Logged in
`docs/needs-owner-input.md`.

---

## 3. Crawlability and indexation

| Check | Result |
|---|---|
| `robots.txt` | Present, `Allow: /`, 20 app/auth prefixes disallowed, both sitemaps declared, `Host` set. No landing URL blocked. |
| `sitemap.xml` | 162 URLs, all on `https://clienter.co.in`, registry-driven from the same configs the pages render from. |
| Second sitemap | `/profiles-sitemap.xml` proxied from the app. Declared in `robots.txt`. Out of scope for this repo. |
| Canonical host | One. `www → non-www` 301 in `next.config.js`. Confirmed live. |
| Canonicals | Self-referencing on every one of the 162 URLs. Zero mismatches. |
| HTTPS | Everywhere. HSTS `max-age=63072000; includeSubDomains; preload`. |
| Trailing slash | Consistent (none). |
| Rendering | Every content route is SSG (`generateStaticParams` + `dynamicParams = false`). Googlebot gets full HTML, no client shell. |
| 404 / 500 | `not-found.tsx`, `error.tsx`, `global-error.tsx` all present with onward links. |
| `lastmod` | **Was `2026-07-18` hardcoded for every non-post URL** while the content had since changed. Fixed in Phase 1. |
| Thin URLs in sitemap | 14 (11 tag + 3 category archives). Fixed in Phase 1 — `noindex,follow` + removed from the sitemap, links kept. |

**Not verifiable from here:** actual index coverage. `SEO_OVERHAUL_REPORT.md` refers to an "18 not
indexed" problem in Search Console; without GSC access I cannot confirm whether that cleared. See
`docs/search-console-checklist.md`.

---

## 4. On-page

### Titles

Crawled all 163 (162 sitemap URLs + home). **Zero duplicates** — genuinely good, and rare.

- **127 exceed 60 characters.** The cause is structural, not editorial: the root layout applied
  `%s · Clienter` unconditionally, adding 11 characters to every page. Most offenders are 61–66
  characters, i.e. the brand suffix alone pushed them over, and the suffix is then the part Google
  truncates — so the site was paying 11 characters for nothing on 78% of its pages.
- Only **3** titles exceeded 60 characters on their own: `/crm-for-freelancers` (64),
  `/blog/how-to-manage-clients-as-a-freelancer-india` (63),
  `/blog/monthly-retainers-vs-project-pricing` (67).
- 2 pages hand-wrote `— Clienter` into the title, so the brand appeared twice
  (`/for/graphic-designers`, `/for/content-writers`).

### Descriptions

**Zero duplicates.** 60 of 162 exceed 155 characters; 16 exceed 175; `/features` was **333**
characters (a 13-item feature list ending "built for Indian freelancers and agencies"). Phase 1
rewrites every one over 165 (23 pages). The 156–165 band (37 pages) is left as-is deliberately —
Google renders to roughly 160 characters, so the loss is a word at most, and rewriting 37 live
descriptions for 1–10 characters is churn with its own risk. Recorded in `docs/seo-changelog.md`.

### Headings

Exactly one `<h1>` on 161 of 163 URLs. One real defect: **`/invoice` ships three `<h1>`s** — the
invoice *preview* used `<h1>INVOICE</h1>` as a document wordmark and the preview renders twice
(screen + print copy), so the page's real H1 competed with two decorative ones. Fixed in Phase 1.

### Internal linking

Hub-and-spoke is already in place and works: a 6-column footer links every hub site-wide, each hub
lists all its children, every content page carries a "Keep exploring" block, and the pre-existing
`/time-converter` is linked from the tools hub so it is not orphaned. No orphan pages found among the
162. Two weaknesses: the glossary (45 terms) is linked from the footer and its own hub but rarely
from the body of a relevant blog post or feature page, and the blog's 5 posts link out to commercial
pages far more than the commercial pages link in to them.

### Images and fonts

- Three `next/font` Google families (Inter, Plus Jakarta Sans, Instrument Serif), all self-hosted
  under `/_next` with `display: swap`. No layout-shift risk from fonts, no third-party font origin.
- `/public` holds only 5 assets. One, `clienter logo.png`, has a **space in the filename**.
- `images: { domains: [] }` — no remote images, so no unsized third-party image risk.
- The homepage hero is a canvas/CSS grid (`HeroGrid`), not an image, so LCP is text. Good for LCP,
  but it is a client component with a cursor interaction, which is where INP risk lives.

### Core Web Vitals

Measured from the build, not from field data (no CrUX access in this environment):

- First Load JS shared by all: **87.7 kB**. Homepage 190 kB including the code-split
  `framer-motion` chunk for the ten-chapter journey section.
- Static assets get `Cache-Control: public, max-age=31536000, immutable`; the APK and `/api/*` are
  correctly excluded.
- LCP: likely fine (text LCP, SSG, edge-cached).
- CLS: no unsized images, fonts swap-loaded, `Reveal` animates opacity/transform only.
- **INP is the one to watch**: `SmoothScroll` (Lenis) wraps the whole app, and the journey section
  maps scroll to 21 quantised scenes. `PROGRESS.md` records the quantisation specifically to avoid
  this, which is the right call, but it is unverified in the field.

**This needs real measurement, not a code read.** See `docs/search-console-checklist.md`.

### Mobile

Responsive throughout, `viewport` set in the root layout, `check-mobile.js` exists in the repo as a
spot-check harness. No separate mobile URLs. Content parity is total (one DOM).

---

## 5. Content quality and E-E-A-T

**Strong:** a named, photographed founder with four real social profiles wired into
`Organization.sameAs`; `Person` author on every post; dated comparison pages that state their own
limitations ("our fair reading as of…"); honest pros **and cons for Clienter itself** on comparison
pages; a `/security` page that describes real mechanisms; full legal set (privacy, terms, refund,
cookies) with a named grievance officer.

**Weak:**

- **No external citations anywhere.** No comparison page, glossary term or blog post links to a
  primary source. For AI answer engines this is the single biggest gap: a page with no verifiable
  anchor is a page a model has no reason to quote.
- **No proof.** No testimonials, ratings, case studies or usage metrics — correctly, because none
  have been collected. This is a real ceiling on commercial-intent pages and cannot be fixed with
  copy.
- **Blog depth.** 5 posts is not a topical cluster. Three of the five are India-specific.
- **Thin-by-design pages.** 45 glossary terms at 450–600 words are fine individually; as a block they
  are the site's lowest-value third and they outnumber the commercial pages.

---

## 6. Global/international SEO

| Check | Before this pass |
|---|---|
| `<html lang>` | `en-IN` — declares Indian English for a worldwide product |
| `og:locale` | `en_IN` |
| hreflang | `en-IN` + `x-default`, both self-referencing the same URL |
| `Organization.areaServed` | `"IN"` |
| `WebSite.inLanguage` / `Article.inLanguage` | `en-IN` |
| `ContactPoint.availableLanguage` | `["English", "Hindi"]` |
| Locale URL structure | None — single page set. **Correct**, and should stay that way. |

There are no locale variants, so there is no hreflang reciprocity problem to fix — the issue is
purely that the single page set declared itself Indian. `en-IN` is a valid code; it is just the wrong
claim. Plain `en` + `x-default` on a single URL set is the right annotation for one English site sold
in every country.

**Do not create country pages.** Five near-identical `/us`, `/uk`, `/au`, `/ca`, `/in` pages would be
doorway pages with an hreflang cluster bolted on, and the helpful-content signal is site-wide. The
decision and the alternative are written up in `docs/content-plan.md`.

---

## 7. Prioritised action plan

**Critical (indexation and positioning signals) — Phase 1**

1. `<html lang="en">`, `og:locale en_US`, hreflang `en` + `x-default`, `areaServed: Worldwide`,
   `inLanguage: en`. ✅
2. Adaptive brand suffix so no title is pushed past 60 by the template; hand-fix the 3 that were long
   on their own and the 2 with a doubled brand. ✅
3. `noindex,follow` on 14 blog archives, removed from the sitemap, links kept. ✅
4. Real `lastmod`. ✅
5. Remove the duplicate `SoftwareApplication` node on `/pricing`. ✅
6. One `<h1>` on `/invoice`. ✅
7. `SoftwareApplication` and `Product` offers in **both** USD and INR. ✅

**High impact — Phase 2**

8. Rebuild `/pricing`: currency-aware, USD-first with the real INR price beside it, "was ₹499 /
   ₹1,999" removed entirely, billing-region and refund FAQ.
9. Homepage H1, title and description for agencies and established freelancers worldwide.
10. One consistent primary CTA, with UTMs on every link to `app.clienter.co.in/signup`.

**High impact — Phase 3**

11. Reframe the 13 global-competitor comparison and alternative pages for a worldwide reader, keep an
    India/GST section where it earns its place, add a `sources` field with links to each competitor's
    own pricing page, and date each page to the day it was actually verified.
12. Three plural "best X alternatives" pages for the highest-volume competitors.

**Medium — Phases 4–5**

13. Expand the 5 posts into real guides; draft 6 new ones (noindex, unlinked, out of the sitemap).
14. De-India the generic tools; add a currency/tax selector; qualifying question + UTM'd CTA.
15. Cite primary sources in glossary and blog content.

**Quick wins not on the critical path**

16. Rename `clienter logo.png` (space in filename).
17. Add the Google Search Console verification token (`layout.tsx` has the commented slot).
18. Pull the glossary into body copy of relevant posts and feature pages.

**Needs a human / out of scope**

19. Real field Core Web Vitals, and GSC index coverage.
20. `aggregateRating` — only when there are real, verifiable reviews.
21. Everything in `docs/needs-owner-input.md`.
