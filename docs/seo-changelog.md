# SEO overhaul — changelog

**Branch:** `seo/overhaul` (local only, never pushed, `main` untouched).
**Date:** 4 October 2026.
**Scale:** 230 files changed, ~27,400 insertions. Build, lint and type-check green at every phase.
**Sitemap:** 162 URLs → **152** (14 thin archives removed, 3 plural alternatives pages and a handful
of others added). The drop is intentional.

One commit per phase so each can be reverted on its own:

| Commit | Phase |
|---|---|
| `1aac709` | 0 — audit (`docs/seo-audit-2026-10.md`) |
| `bc40693` | 1 — technical foundation |
| `c73fccf` | 2 — pricing and positioning |
| `a0b0879` | 3 — comparisons and alternatives |
| `16c2961` | 4 — content and AI search |
| `5d07d3f` | 5 — tools, templates, use cases |
| `7209efc` | 6 — measurement and launch prep |

> **One wart in the history, stated up front.** The phase-2 commit also contains the 100 vendored
> files under `.claude/skills/`, `.agents/product-marketing.md` and `skills-lock.json`. Those were
> untracked in the working tree when this branch started — they are the installed marketing skills,
> not part of phase 2 — and a `git add -A` swept them in. To revert phase 2 alone without deleting the
> skills:
> ```
> git revert -n c73fccf
> git checkout c73fccf -- .claude .agents skills-lock.json
> git commit
> ```
> I left the history as it is rather than rewriting five commits, because several files
> (`docs/seo-progress.md` among them) are touched by more than one phase and a reconstruction would
> have collapsed those into whichever phase re-staged them — which would have damaged per-phase
> revertability more than this does.

---

## Phase 1 — Technical foundation

### 1.1 Locale signals: India-locked → global

**Why.** The product is sold worldwide with India as the largest early market, but every machine-
readable signal on the site said the brand serves one country. For the US/UK/AU/CA queries that are
the stated expansion target, that is a signal actively working against you.

| File | Before | After |
|---|---|---|
| `src/app/layout.tsx` | `<html lang="en-IN">` | `<html lang="en">` |
| `src/app/layout.tsx`, `src/lib/site.ts` | `og:locale: en_IN` | `en_US` |
| `src/lib/site.ts` | hreflang `en-IN` + `x-default` | `en` + `x-default` |
| `src/lib/seo/config.ts` | `SITE_LOCALE='en_IN'`, `SITE_LANG='en-IN'` | `'en_US'`, `'en'` |
| `src/lib/structured-data.ts` | `Organization.areaServed: 'IN'` | `'Worldwide'` |
| `src/lib/structured-data.ts` | `inLanguage: 'en-IN'` (WebSite + Article) | `'en'` |
| `src/lib/structured-data.ts` | `availableLanguage: ['English','Hindi']` | `['English']` |
| `src/lib/site.ts` | `SITE_TAGLINE` = "Run your freelance business without the chaos" | "The all-in-one workspace for agencies and freelancers" |

There are no locale variants, so there was no hreflang reciprocity problem to fix. `en-IN` is a valid
code — it was simply the wrong claim.

**Verify:** `curl -s https://clienter.co.in/ | grep -o 'lang="[^"]*"'` → `lang="en"`; same for
`og:locale`. Rich Results Test on `/` shows `areaServed: Worldwide`.

### 1.2 Title length: an architectural fix, not 127 rewrites

**Why.** 127 of 163 titles exceeded 60 characters. Only **3** were long on their own — the cause was
the root layout applying `%s · Clienter` unconditionally, adding 11 characters to every page. The
suffix was then the part Google truncated, so the site was paying 11 characters for nothing on 78% of
its pages.

**What changed.** `brandedTitle()` in `src/lib/site.ts` appends the brand only when the result still
fits 60 characters; `pageMetadata` returns `title: { absolute: … }` so the layout template cannot
append it twice. Three titles that were long unaided were shortened
(`/crm-for-freelancers`, two blog posts), and two `/for` titles that hand-wrote "— Clienter" into the
title (so the brand appeared twice) were cleaned up. Blog posts gained an optional `metaTitle` so an
H1 can stay conversational while the `<title>` fits.

**Verify:** re-run the crawl in `.seo-tmp/` or spot-check — no rendered title should exceed 60
characters, and `/for/graphic-designers` should no longer say "Clienter · Clienter".

### 1.3 Meta descriptions

60 of 162 were over 155 characters, 16 over 175, `/features` at **333**. Rewrote all **23** over 165,
which also removed India-only framing from `/how-it-works`, `/about`, `/demo` and the six
`/features/*` pages (whose descriptions all ended in the same filler clause, "Learn how to use it and
how it helps").

**Deliberately not changed:** the 37 in the 156–165 band. Google renders to roughly 160, so the loss
is a word at most, and rewriting 37 live descriptions for 1–10 characters carries more risk than it
removes.

### 1.4 Sitemap and thin pages

- **Removed** the 11 tag and 3 category archives. 14 of 162 URLs were archives of 5 posts, most
  listing one or two and carrying no copy of their own. They are now `noindex, follow` in their route
  files and stay internally linked, so crawlers still reach the posts through them and the link equity
  still flows. Revisit when a category holds ~8 posts.
- **`lastmod`** was hardcoded `2026-07-18` for every non-post URL. Now `2026-10-04`, with a comment
  explaining that it is bumped by hand so that `new Date()` does not stamp every page as changed on
  every deploy.

**Verify:** `curl -s https://clienter.co.in/sitemap.xml | grep -c '<loc>'` → 152, and no
`/blog/tag/` or `/blog/category/` entries.

### 1.5 Structured data

- **`/pricing` emitted `SoftwareApplication` twice** (root layout + page). Removed from the page.
- **Offers now carry both currencies the product is actually sold in.** `SoftwareApplication.offers`
  and `pricingProductSchema` previously had `priceCurrency: INR` only, so Google had no USD offer to
  show a US searcher. Now USD (PayPal) and INR (Razorpay, with `eligibleRegion: India`), driven from
  the new `src/lib/pricing.ts`. `pricingProductSchema` returns two `AggregateOffer` nodes because one
  node can only carry one currency.
- **Removed** `"Launch offer (was ₹499)"` from the Offer descriptions.
- `aggregateRating` still deliberately absent — there are no real reviews, and a fabricated rating is
  both a guidelines violation and a lie.

**Verify:** Rich Results Test on `/pricing` — one `SoftwareApplication`, one `Product` with two
`AggregateOffer` nodes.

### 1.6 One H1 per page

`/invoice` shipped **three**. The invoice *preview* used `<h1>INVOICE</h1>` as a document wordmark and
the preview renders twice (screen + print copy), so the page's real H1 competed with two decorative
ones. Now an `aria-hidden` `<p>` with identical styling.

**Verify:** `curl -s https://clienter.co.in/invoice | grep -c '<h1'` → 1.

### 1.7 `/llms.txt`

Rewritten for a worldwide product: both billing regions with real prices, the ~30 currencies and the
custom tax rate per line item, the Ultra-only features named, and an explicit statement that Clienter
**records and tracks** client payments rather than collecting them.

---

## Phase 2 — Pricing and positioning

### 2.1 The reference price, removed everywhere

**Why.** "was ₹499" and "was ₹1,999" appeared in **49 content files** plus the pricing page, the
homepage slab, the FAQ and the `SoftwareApplication` schema, alongside a permanently-displayed
"🚀 Launch pricing is limited time. Lock in your rate today." Nothing in the repo or the product
context establishes that either figure was ever charged, and a permanent limited-time discount is the
exact pattern consumer-protection regulators treat as a false reference price. It is also the first
thing a directory reviewer or a competitor checks.

All of it is gone. Only the real current prices remain. Four sweep scripts were needed because the
phrase had ten grammatical variants.

### 2.2 Both currencies, server-rendered

New `src/lib/pricing.ts` is the single place a price is written down (previously the same three prices
were hardcoded in three files and had already drifted). `/pricing` and the homepage slab now lead with
USD and show the real INR price beneath, described as a second price list rather than a conversion.

**Both are in the server HTML.** No currency toggle — a toggle would have hidden one currency from
crawlers and risked a flash of the wrong one. The trade-off is a slightly busier card; the gain is
that a crawler, a visitor with JS off and an AI answer engine all see both prices.

**Limits and feature gating are untouched.** The prompt's `PLAN DATA` block still read
`<<PASTE …>>`, so there was no source of truth to reconcile against, and changing a limit on a guess
is worse than leaving it. Every discrepancy found is in `docs/needs-owner-input.md`. The USD figures
used ($19/$39) are the ones stated in the brief and already published in the live pricing FAQ, so
displaying them is not a new claim.

### 2.3 Pricing FAQ

Replaced two thin answers with six that cover what an international buyer actually needs: which
currency am I billed in, how is my billing region decided and can I change it, which currencies can I
invoice *my* clients in, does Clienter collect my clients' payments (no), cancellation, refunds.

### 2.4 Homepage H1 — the three variants and the reasoning

The brief asked for all three on the record.

| | Variant | Chars | Assessment |
|---|---|---|---|
| **A ✅** | **Run every client from first enquiry to final payment** | 51 | **Chosen.** Names the job rather than a feeling. Spans the whole lifecycle, which is the actual differentiator against both PM tools and invoicing tools. Excludes nobody: an agency of nine and a freelancer with eight clients both do this. "Client", "enquiry" and "payment" are the words the audience uses. |
| B | One workspace for your whole client business | 44 | Shorter and reads well, but "whole client business" is abstract — it asserts breadth without demonstrating it, and "workspace" is a category word every competitor also uses. |
| C | Everything your agency runs on, in one login | 44 | Strongest for agencies and the wrong trade: it writes off established freelancers, who are half the ICP, in its second word. That is the mistake the old H1 made in the other direction. |

The old H1, "Run your freelance business without the chaos", failed twice: "freelance" excluded the
primary ICP in its third word, and "without the chaos" describes a feeling rather than the job.

**No A/B test was run,** because there is no event tracking in place to read one. Phase 6 defines the
events; test after they are wired and have collected a baseline.

Title and description also rewritten: `Client Management Software for Agencies & Freelancers` (58
chars), agencies first.

### 2.5 One CTA, and UTMs on all of it

Six different wordings — "Get started", "Get started free", "Create free account", "Try Clienter
free", "Start for free", "Try it yourself — create a free account" — collapsed to one
(`PRIMARY_CTA = 'Start free'`). Plan buttons on `/pricing` keep "Start Pro" / "Start Ultra"
deliberately: those are plan selections, not the generic CTA.

**17 bare signup links → 0.** All now go through `signupUrl(medium, campaign)` in `src/lib/cta.ts`:
`utm_source=site&utm_medium=<page type>&utm_campaign=<slug>`. See `docs/analytics-plan.md` §4 for the
scheme and for what the **app** must do to preserve it.

**Verify:** `grep -rn "APP_URL}/signup" src` → no matches.

---

## Phase 3 — Comparisons and alternatives

### 3.1 Sources, as a first-class field

**Why.** These pages make public claims about other companies and had none of the apparatus for it:
no `sources` field existed on either config type, so not one of 33 pages linked to a competitor's own
page, and all 33 carried the same `asOf: 'July 2026'`.

Added `CompetitorSource { label, url, checked }` (`src/lib/content/sources.ts`) and `<SourceList>`,
rendered under the comparison table with `rel="nofollow noopener noreferrer"` — a reference, not an
endorsement, and no ranking signal passed to a competitor from a page that competes with them.

### 3.2 Five competitor pricing pages actually read

| Competitor | Verified, 2026-10-04 |
|---|---|
| **Bonsai** | **Per user**: Basic $15, Essentials $25, Premium $39, Elite $59/mo ($9/$19/$29/$49 annual). 7-day trial, no free plan. |
| **HoneyBook** | Starter $36, Essentials $59, Premium $129/mo ($29/$49/$109 annual). Trial, no free plan. Promo rates also showing. |
| **Plutio** | Core $19/mo (**9 active clients**), Pro $49, Max $199. 7-day trial, no card, no free plan. |
| **Dubsado** | Two plans, Starter and Premier, with a trial. **Prices load client-side and were not in the HTML** — no number printed. |
| **Moxie** | 14-day trial; tiers between roughly $12 and $40 with an ambiguous monthly/annual split — stated as a range, with a note. |

Bonsai's and Plutio's pricing pages publish their full price lists inside their own FAQ structured
data, which is about as primary as a source gets.

### 3.3 "They don't have X" → "not listed on their pricing page"

Eight pages asserted "Not built for India/GST" as a fact about the product when the evidence supported
only a fact about the pricing page. Every unverified absence was rewritten. `asOf` moved to October
2026 on the **five** pages genuinely re-read and nowhere else — the other 23 keep a visibly stale date
rather than a freshened one nobody earned. Everything unverifiable is in `docs/needs-verification.md`.

### 3.4 India as one argument, not the only one

Eight comparison pages for **global** competitors had India in the title and argued the entire
comparison on GST and rupee pricing, discarding the US/UK/AU/CA half of each query — the half most
likely to be evaluating those products at all. Reframed: the lead arguments are now per-user vs flat
pricing, team features, setup cost and currency coverage, with GST kept where it is a real
differentiator.

`clienter-vs-honeybook` was rewritten in full. `clienter-vs-bonsai` was rebuilt around the per-user
arithmetic. Dubsado, Plutio and Moxie were reframed and sourced. A further 17 pages had their
India-only boilerplate globalised.

**Deliberately left India-framed:** Refrens, Vyapar, Zoho Books, QuickBooks-India,
`/alternatives/quickbooks-alternative-india`, `/alternatives/honeybook-alternative-india`,
`/for/indian-freelancers`.

### 3.5 Three plural "best X alternatives" pages

`/alternatives/honeybook-alternatives`, `/alternatives/bonsai-alternatives`,
`/alternatives/dubsado-alternatives`. Five real options each, Clienter first, with the case for each
competitor stated plainly — the Bonsai page does the arithmetic showing Bonsai Basic ($15) is cheaper
than Clienter Pro ($19) for a single user, and the HoneyBook page says outright that HoneyBook is the
better buy for a US creative whose whole job is the booking flow.

No new **singular** comparison pages, per the brief.
`/alternatives/honeybook-alternative-india` kept its slug: renaming would need a 301 and "honeybook
alternative india" is a genuine query deserving its own page.

### 3.6 Near-duplicate copy on commercial pages

Found by measurement, not impression (`.seo-tmp/audit.cjs`): one CTA subtitle appeared verbatim on 7
comparison pages, one pricing paragraph on 6 more, one on 3. Those are exactly the pages a buyer opens
two of, so the template was visible to the reader who mattered. All ten now carry a line true of their
own comparison.

---

## Phase 4 — Content and AI search

### 4.1 Draft infrastructure

A `draft` flag on `BlogPost`. A draft renders at its URL so it can be reviewed, and is invisible
everywhere else: `noindex`, absent from the sitemap, the blog index, category and tag archives, RSS
and related-posts, with an amber banner on the page.

**Verified against the build output, not assumed:** the built sitemap lists 5 blog URLs, `rss.xml` and
`blog.html` contain no draft slug, and a draft page ships `robots: noindex, follow`.

### 4.2 Six drafts, ~2,000–2,600 words each

`client-onboarding-process`, `how-to-prevent-scope-creep`, `how-to-write-a-proposal-that-wins`,
`how-to-handle-late-paying-clients`, `what-is-a-client-portal`, `agency-pricing-models`.

Answer-first intros, question-shaped H2s, comparison tables, visible FAQs that are also in `FAQPage`
schema, a named author, **no invented statistics**. Each states plainly what Clienter does not do — no
time tracking, no payment processing — because a page that concedes something is more credible about
everything else. The late-payment post deliberately refuses to give debt-recovery advice, which varies
by jurisdiction, and says to take local advice instead.

### 4.3 All five published posts expanded in place

Each gained an `updated: '2026-10-04'`, so `dateModified` and the sitemap `lastmod` stop being
fiction. The worst was `how-to-get-freelance-clients-in-india`, which gave each of its "15 proven
channels" a single line inside an `<ol>` — a list of names rather than a guide. Each channel now has a
paragraph on what it is for, how long it takes to pay off, and what makes it work or fail, plus a
table answering the reader's real question ("which two should I pick") and a section on measuring
which channel converts.

### 4.4 `docs/content-plan.md`

Nine clusters mapped to funnel stage and a commercial destination, with per-query status and priority,
a writing order, the AI-citation house style, and the country-page decision argued in full.
**Search volumes are marked unverified at the top** — no keyword tool is available here, and invented
numbers would be worse than none.

---

## Phase 5 — Tools, templates, use-case pages

### 5.1 The audit, measured

| Section | Pages | Config prose | Long strings reused across pages |
|---|---|---|---|
| `/for/*` | 13 | ~17,700 words (1,180–1,480 each) | 2 → **0** |
| Tools | 15 | ~4,600 | 0 |
| Templates | 8 | ~3,500 | 0 |
| `/compare/*` | 24 | ~29,850 | 6 → **3** (short factual bullets) |

The templated-duplication worry was largely unfounded: the `/for` pages are genuinely written per
audience. The real duplication was on the comparison pages (§3.6).

### 5.2 Currency-aware calculators

Four general-purpose calculators (rate, project cost, profit margin, retainer) were hardcoded in ₹,
which made universal tools look Indian and gave a visitor in London no reason to trust the output.
They now offer 9 currencies and remember the choice per browser (every `localStorage` access wrapped —
it throws in a private window with site data blocked).

**Changing currency relabels; it does not convert, and the UI says so.** A calculator silently
applying yesterday's exchange rate would be worse than one that did nothing.

The GST and TDS calculators are untouched: they compute an Indian tax, so ₹ is the subject rather than
the framing. The project cost calculator gained a tax field whose **rate the visitor types** — Clienter
supports a custom rate per line item plus GST for India and nothing else, so assuming a VAT rate would
imply a capability the product does not have.

### 5.3 Generic tools and templates made portable

"(India)" out of 4 tool titles and 3 template titles; ₹ out of the generic tools' copy; the `/tools`
hub subtitle no longer ends "built for India" and instead says which tools are India-specific.

The contract, NDA, SOW, proposal, retainer and quotation templates hardcoded "governed by the laws of
India" and ₹ amounts. Both are now bracketed placeholders like every other field — which is better for
Indian users too, since a governing-law clause should be a decision rather than a default.
`invoice-template-india` keeps its framing: a GST invoice layout genuinely is a local format.

### 5.4 One qualifying question

Under every tool page: "How many active clients do you have right now?", four bands, four different
answers. The **1–2 band says a spreadsheet is probably fine** and points at the free templates rather
than the signup — pitching software to someone it would not help is the fastest way to lose them as a
future customer.

The answer never leaves the browser. It shapes the copy and appends the band to the UTM campaign
(`tools-retainer-calculator-clients-3-9`), so we learn which segment each tool attracts without
collecting anything. **No tool transfers data into the app**, as instructed.

---

## Phase 6 — Measurement and launch prep

`src/lib/analytics.ts`: `track()` sends only when `readConsent()?.analytics === 'granted'` **and**
`window.gtag` exists. Both checks, because withdrawing consent leaves the loaded script in the page
until navigation. Nothing is queued, retried or stored for later.

Six events in a closed vocabulary (`signup_click`, `cta_click`, `tool_use`, `qualifier_answer`,
`source_link_click`, `template_copy`), with parameters restricted to constrained identifiers —
nothing a visitor typed is ever a parameter value.

**Deliberately not wired to any component yet:** renaming an event after collection starts splits the
history, so the vocabulary should be reviewed first. `docs/analytics-plan.md` §3 names the five call
sites.

Also: `docs/analytics-plan.md` (including the app-side requirements for UTM survival),
`docs/search-console-checklist.md` (setup, validation, weekly routine, baseline to capture **before**
deploying), `docs/directory-kit.md` (readiness check — **4 blockers found** — four tiers, copy at
three lengths, positioning per directory type). **Nothing was submitted and no account was created.**

---

## How to verify the whole thing, in ten minutes

```bash
npm run type-check && npm run lint && npm run build     # all green

# Titles: none over 60 characters
grep -c '<loc>' .next/server/app/sitemap.xml.body        # 152
grep -o '/blog/tag' .next/server/app/sitemap.xml.body    # no output
grep -o 'name="robots" content="[^"]*"' \
  .next/server/app/blog/agency-pricing-models.html       # noindex, follow
grep -c 'agency-pricing-models' .next/server/app/rss.xml.body   # 0
grep -rn 'APP_URL}/signup' src                           # no output — all UTM'd
grep -rniE '(was ₹499|was ₹1,999|launch offer)' src/lib src/app \
  | grep -v '^\s*\*'                                     # only explanatory comments
node .seo-tmp/audit.cjs                                  # duplication report
```

After deploying, work through `docs/search-console-checklist.md` §1.

## Metrics to watch

Full table in `docs/search-console-checklist.md` §3 and `docs/analytics-plan.md` §5. The three that
matter most:

1. **CTR in Search Console → Pages.** 127 titles stopped being truncated; if CTR does not move within
   four weeks, the titles are fine and the *descriptions* are the problem.
2. **Impressions filtered to US, UK, AU, CA.** This is the single reading that tells you whether the
   global repositioning worked. Expect it to move slowly — it is a trust signal, not a switch.
3. **`signup_click` by `utm_medium`.** Once the events are wired, this finally answers which *page
   type* earns signups, which is the question the whole content plan depends on.

**Take the baseline readings before deploying.** Without them none of the above is interpretable.

**And the honest caveat:** de-Indianising eight comparison titles may cost India impressions before it
gains anything elsewhere. That trade was made on purpose for a global audience. If after eight weeks
India has dropped and nothing else has risen, the reversible move is to put India back into the
`metaTitle` of the two or three pages where it genuinely was the stronger market — not to revert the
lot.

**No ranking promises are made anywhere in this document, and none should be.**

---

## Post-deploy verification (4 October 2026)

`main` was fast-forwarded to `e89fc55` and pushed at the owner's request; Vercel deployed in about two
minutes. Verified against the live site, not the build:

| Check | Result |
|---|---|
| `<html lang>` | `en` ✅ |
| `og:locale` | `en_US` ✅ |
| Homepage `<title>` | `Client Management Software for Agencies & Freelancers` (52) ✅ |
| `/pricing` `<title>` | `Pricing — Free Forever, Pro from $19/mo · Clienter` (49) ✅ |
| `₹499` / `₹1,999` / "Launch Offer" anywhere on `/pricing` | 0 ✅ |
| `/pricing` shows both currencies | `$19`, `$39`, `₹199`, `₹799` all present ✅ |
| `Product` schema currencies | 7 × INR **and** 7 × USD ✅ |
| Sitemap | 152 URLs, 0 tag/category archives ✅ |
| Draft post `/blog/agency-pricing-models` | `noindex, follow`; absent from sitemap, RSS and `/blog` ✅ |
| 3 new plural alternatives pages | all 200 ✅ |
| Signup links | all carry `utm_source=site&utm_medium=…&utm_campaign=…` ✅ |
| H1 count | 173 built pages, every one has exactly 1 ✅ |
| Titles over 60 chars | 0 of 173 ✅ |
| `www` → apex redirect | ⚠️ **307 Temporary, not 301/308** — see below |

### The one thing that came back wrong

`https://www.clienter.co.in/pricing` answers **307 Temporary Redirect**, not a permanent one, and the
`x-vercel-id` header shows it is Vercel's edge answering before the application runs — so the
`permanent: true` redirect in `next.config.js` never executes for the `www` host.

**This was pre-existing, not caused by this branch** — but the Phase 0 audit claimed "301, confirmed
live" on the strength of reading the config rather than requesting the host, which was my error. The
audit is corrected at `docs/seo-audit-2026-10.md` §3.1 and the fix (a Vercel dashboard setting, not a
code change) is at `docs/needs-owner-input.md` §1.4.

Practical impact is limited: every page carries a self-referencing `rel="canonical"` pointing at the
apex, and Google honours that, so this is a weaker signal rather than a broken one. It should still be
changed to permanent, because host canonicalisation is precisely what a permanent redirect is for.
