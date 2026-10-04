# Measurement plan

**Written:** 4 October 2026.
**Scope:** the marketing site at `clienter.co.in`. The app at `app.clienter.co.in` is a separate repo
and out of scope; where this plan needs something from the app it says so and sends it to
`docs/needs-owner-input.md`.

---

## 1. The consent constraint, first

Everything below is subject to one rule, and the rule is not negotiable because the Privacy Notice and
the Cookie Policy both state it: **no non-essential tracking fires before the visitor opts in.**

How that is enforced today, and must keep being enforced:

- GA4 (`G-PGZEEJYGE6`) is loaded **only** by `ConsentManager`, and only after an opt-in. It is not in
  the root layout, and there is a comment in `layout.tsx` saying not to put it back.
- Consent Mode v2 defaults (`analytics_storage: 'denied'`, plus the three ad signals) are pushed onto
  `dataLayer` in the same inline script that runs before the remote tag.
- `readConsent()` returning `null` — "has not chosen" — is treated as a refusal. There is no implied
  consent.
- Withdrawal is as easy as granting: the footer reopens the banner, and withdrawing clears the `_ga`
  cookies.

`src/lib/analytics.ts` adds a `track()` function that checks **both** that consent is granted and that
`window.gtag` exists before sending anything. A visitor who refuses leaves no trace: nothing is
queued, nothing is retried, nothing is stored locally for later.

**Do not add any other tag** — no Meta pixel, no LinkedIn insight tag, no Hotjar, no server-side
proxy — without putting it through the same consent gate and updating `/cookies`, which lists every
cookie and storage key by name.

---

## 2. The three events that matter

Keep the list short. A long event list is an unread event list.

| Event | Fires when | Parameters | Why we want it |
|---|---|---|---|
| `signup_click` | A link to `app.clienter.co.in/signup` is clicked | `page_type`, `page_path`, `placement`, `plan?` | **The conversion on this site.** The site's whole job is to produce these. |
| `cta_click` | Any primary CTA is clicked, including ones that do not go to signup | `page_type`, `page_path`, `placement` | Distinguishes "nobody clicked" from "they clicked something else" |
| `tool_use` | A visitor changes an input on a calculator or generates a document — **once per tool per page view** | `item` (tool slug), `page_path` | Separates a tool that is used from a tool that is merely landed on |

Three more are defined in `analytics.ts` because they answer specific questions already raised in this
overhaul, and each is cheap:

| Event | Question it answers |
|---|---|
| `qualifier_answer` | Which client-count band do the free tools actually attract? Decides whether tools are a sales channel or a brand channel. |
| `source_link_click` | Does anyone open the competitor sources we added in Phase 3? If nobody does, they are for trust rather than traffic — worth knowing. |
| `template_copy` | Which templates get used, as opposed to ranked for. |

**Parameter discipline.** Every parameter is a constrained identifier from a closed vocabulary. No
email addresses, no form contents, no numbers typed into a calculator, no free text. The
`qualifier_answer` band is `'3-9'`, never the client count itself. An analytics payload is the most
common place personal data leaks by accident, so the rule is that nothing a visitor typed is ever a
parameter value.

**Deliberately not tracked:** scroll depth (noise), time on page (GA4's engagement metric already
covers it), mouse movement or session recording (disproportionate for a marketing site, and it would
need its own consent category and a Cookie Policy entry).

---

## 3. Wiring it up — the remaining step

`src/lib/analytics.ts` exists, is consent-safe, and **is not called from anywhere yet.** That is
deliberate: the event vocabulary should be reviewed before it is scattered across twenty components,
because renaming an event after data collection starts splits the history.

When it is approved, the wiring is small:

1. `CtaSection`, `SpotlightButton` and the pricing buttons get an `onClick` that calls
   `track('signup_click', …)`. Use `onClick`, not a navigation interceptor — the link must keep working
   if the event fails, and a blocked tag must not block a click.
2. `CalculatorTool` and `DocGeneratorTool` fire `tool_use` once, on the first input change, with a
   `useRef` guard so typing does not produce forty events.
3. `ToolQualifier` fires `qualifier_answer` with the band.
4. `SourceList` fires `source_link_click`.
5. `CopyButton` fires `template_copy`.

One rule for all of them: **the event must never be in the path of the user's action.** Fire and
forget, inside the existing `try/catch`.

---

## 4. How UTMs reach the app signup

This is the part that makes `signup_click` worth having, and it depends on something this repo does
not control.

**What this site does.** Every link to the app's signup is built by `signupUrl()` in `src/lib/cta.ts`,
which produces:

```
https://app.clienter.co.in/signup?utm_source=site&utm_medium=<page type>&utm_campaign=<slug>
```

- `utm_source` is always `site`.
- `utm_medium` is the **page type**: `home`, `pricing`, `feature`, `use-case`, `comparison`,
  `alternatives`, `tool`, `template`, `glossary`, `blog`, `nav`, `footer`, `demo`, `download`,
  `seo-landing`.
- `utm_campaign` is the page's own slug, so a single page can be read on its own —
  `compare-clienter-vs-bonsai`, `tools-gst-calculator`, `home-hero`, `pricing-pro`. The tool qualifier
  appends the band: `tools-retainer-calculator-clients-3-9`.

There are **no** bare signup links left; there were 17 before this pass.

**What has to be true on the app side for this to work.** These are app-repo concerns and are listed
in `docs/needs-owner-input.md`:

1. **`/signup` must not strip the query string on its first redirect.** If it bounces through an auth
   route or normalises the URL, the UTMs are gone before anything reads them. This is the single most
   common way attribution silently fails.
2. **The parameters must be captured at first touch and stored against the account**, not read at the
   moment the form is submitted — the visitor may land on `/signup`, wander to the pricing page, and
   come back without the parameters.
3. **Cross-domain measurement.** `clienter.co.in` and `app.clienter.co.in` are different hosts, so GA4
   treats a visit to each as a separate session unless both are in the same property with
   `linker.domains` configured. Without that, every signup looks like direct traffic to the app. If
   the app has its own GA property, the UTMs on the URL are the fallback and they must reach the
   database for the join to be possible at all.
4. **Whatever the app records, it is subject to the same consent regime.** The marketing site is
   careful about this; the chain is only as good as its weakest link.

**What can be measured without any app change:** `signup_click` on this site. That gives
click-through by page type and page, which is most of what a content decision needs. Signup *rate*
needs the app side.

---

## 5. What to watch, and at what cadence

**Weekly** (5 minutes, Search Console): see `docs/search-console-checklist.md`.

**Monthly** (GA4):

| Number | What it tells you | What a bad reading looks like |
|---|---|---|
| `signup_click` by `utm_medium` | Which page *type* earns signups | Tools produce traffic and no clicks → they are a brand channel, price them as one |
| `signup_click` by `utm_campaign` | Which individual pages earn signups | A high-traffic page with no clicks has a CTA or a message problem |
| `signup_click` ÷ sessions, per page type | Click-through rate, comparable across pages | A comparison page below the site average is losing a high-intent visitor |
| `tool_use` ÷ sessions on tool pages | Whether tools are used or just landed on | Low means the page is ranking for the wrong intent |
| `qualifier_answer` band distribution | Who the tools actually attract | Mostly 1–2 means the tools bring the anti-persona |
| Consent opt-in rate | How much of the picture you are seeing at all | Below ~40% means every number above is a sample, not a census — read directions, not absolutes |

That last row matters more than people expect. With consent-gated analytics you are always looking at
a self-selected subset. Use the numbers to compare pages against each other, not to state how many
people did something.

**Quarterly:** re-verify competitor facts (`docs/needs-verification.md`), re-read the top ten pages'
titles and descriptions against what Search Console says they now rank for, and check Core Web Vitals
field data.

---

## 6. Baseline to capture before deploying

Take these readings **before** the branch goes live, or the whole overhaul becomes unmeasurable:

- Search Console: total impressions, clicks and average position, last 28 days, plus the same for the
  ten highest-impression pages.
- Search Console → Pages: indexed vs not-indexed counts, and the reasons given.
- GA4: sessions and the consent opt-in rate for the last 28 days.
- PageSpeed Insights: mobile and desktop for `/`, `/pricing` and one comparison page — field data if
  CrUX has it for this origin, lab data otherwise, noted as which.
- A copy of the current `sitemap.xml` (162 URLs) so the before/after is on record.

Expect titles and descriptions to move position by a few places in either direction for two to three
weeks after a change of this size. Judge it at four weeks, not four days.
