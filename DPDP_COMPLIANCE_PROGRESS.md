# DPDP Act Compliance — Public Marketing Site

**Branch:** `compliance/dpdp-public-site` (never pushed to remote — local only)
**Scope:** the public-facing marketing site in this repo (`clienter-landing`) only.
The application at `app.clienter.co.in` lives in a **separate repo** and is out of scope here.
**Started:** 2026-08-02

> ⚠️ **All legal copy produced on this branch is a DRAFT written by an engineer, not a lawyer.**
> Every file listed under "Needs legal sign-off" carries a
> `<!-- LEGAL REVIEW REQUIRED — draft copy, not final -->` marker at the top of its source.
> Do not treat it as authoritative legal text or rely on it for compliance until reviewed.

---

## Audit findings (what was actually on the site before this branch)

Read before changing anything: `src/app/layout.tsx`, `src/app/privacy/page.tsx`,
`src/app/terms/page.tsx`, `src/app/cookies/page.tsx`, `src/app/security/page.tsx`,
`src/components/marketing/SiteFooter.tsx`, `src/components/marketing/PageShell.tsx`,
`src/lib/site.ts`, `src/app/api/waitlist/route.ts`, `src/lib/rate-limit.ts`,
`src/components/marketing/ContactForm.tsx`.

### A1 — Legal pages already existed
`/privacy`, `/terms`, `/cookies`, `/refund`, `/security` were already present and already
separate documents, all rendered through `LegalLayout`. The Privacy Policy already named a
Grievance Officer and referenced the DPDP Act. So this was **not** a greenfield build — it was
a correction-and-completion job.

### A2 — 🔴 The site DID load a non-essential tracker (critical)
`src/app/layout.tsx` loaded **Google Analytics 4 (`G-PGZEEJYGE6`)** unconditionally in `<head>`,
on every page, with no consent gate. GA4 sets `_ga` / `_ga_*` first-party cookies and transmits
IP + page/referrer data to Google.

### A3 — 🔴 The published policies contradicted the code
Directly false statements were live on the site while GA was running:
- `privacy/page.tsx` §6: *"We currently use only strictly necessary cookies"* and *"If we
  introduce analytics in the future…"*
- `cookies/page.tsx` §2/§3: analytics row read *"Not currently used"*; §3 said *"Because we use
  only strictly necessary cookies today, we do not show a cookie consent banner."*

Misdescribing processing is itself a DPDP notice failure, independent of the consent question.

### A4 — Undisclosed third parties
The contact form posts to **Web3Forms** (`https://api.web3forms.com/submit`) — an external
processor receiving name, email, subject and message body. It was named in **no** policy.
The footer also embeds a **Product Hunt** badge image from `api.producthunt.com`, a third-party
request that exposes visitor IP + referrer to Product Hunt on every page load.

### A5 — Vendors named in the goals that are NOT in this repo
Searched the whole tree. **Upstash is not used here** — rate limiting is Supabase-backed
(`src/lib/rate-limit.ts`, table `rate_limit_log`). **Stripe is not used here.** **Google
Calendar/Meet OAuth is not used here.** All three are app-repo concerns. They are still
disclosed in the Privacy Notice because the notice covers the whole Clienter service, but the
specifics are unverified from this repo — see "Open questions".

### A6 — Grievance contact existed but pointed at a personal inbox
`CONTACT.privacy` / `CONTACT.legal` were both `hello@talaganarajesh.in`, with a code comment
noting `clienter.co.in` mailboxes were not yet receiving mail. There was no grievance contact
in the footer at all — only on the policy pages.

### A7 — Fonts are fine
`next/font/google` self-hosts at build time, so there is no runtime request to Google Fonts and
no font-related tracking. No action needed.

---

## Decisions taken (ambiguities resolved without asking)

- **D1 — Rewrote `/privacy` in place instead of adding a second page.** The goal asked for "a
  standalone Privacy Notice page". One already existed at `/privacy`, standalone and separate
  from Terms. Publishing a *second* privacy document would create two conflicting legal texts on
  one domain, split inbound links, and duplicate SEO. The existing page was also factually wrong
  (A3), so leaving it live was the worse option. `/privacy` is now the rewritten, DPDP-complete
  **Privacy Notice**. Every existing link, sitemap entry and canonical URL keeps working.
- **D2 — The draft marker is a source comment, not a user-visible banner.** The site is live and
  commercially trading; stamping "DRAFT — not legal advice" across a public policy page would
  undermine user trust and arguably weaken the notice. The marker is
  `<!-- LEGAL REVIEW REQUIRED — draft copy, not final -->` at the top of each source file, plus
  this ledger. Flip this decision if you'd rather it be visible.
- **D3 — Consent banner defaults to declining, and GA is not loaded at all until opt-in.** No
  pre-ticked boxes, no "by continuing you agree", no cookie-wall. Reject is a real button with
  equal visual weight to Accept, per DPDP's free-and-informed-consent standard. GA4 is removed
  from `<head>` entirely; the script is injected client-side only after explicit acceptance.
- **D4 — Google Consent Mode v2 set to `denied` before anything loads.** Belt and braces: even
  once the tag exists, `ad_storage` / `analytics_storage` / `ad_user_data` /
  `ad_personalization` stay denied until consent, and only `analytics_storage` is ever granted.
  Ad signals are never granted at all — Clienter does not advertise on this data.
- **D5 — Consent choice stored in `localStorage`, not a cookie.** Storing the record of consent
  in a cookie would itself be a cookie set before consent. `localStorage` under
  `clienter.consent.v1` is strictly necessary (it exists solely to honour the user's choice) and
  is never transmitted.
- **D6 — Withdrawal must be as easy as giving consent.** A "Cookie preferences" button sits in
  the footer legal bar on every page and reopens the banner. This is a DPDP §6(4) requirement,
  not a nicety.
- **D7 — Used `privacy@clienter.co.in` as the goal specified**, replacing the personal-inbox
  address for privacy/grievance contact. ⚠️ **This mailbox does not exist yet** — see Blockers.
- **D8 — Kept the Product Hunt badge, disclosed it rather than gating it.** It is a marketing
  badge, not a tracker; it sets no cookie in our context. It is now named in the Cookie Policy
  under third-party requests so the disclosure is honest. If you'd rather not leak visitor IPs
  to Product Hunt at all, self-host the badge SVG in `/public` — a one-line change.
- **D9 — Terms of Service DO live in this repo** (`src/app/terms/page.tsx`), so the
  data-protection clause was added here. Nothing to hand off for Terms.

---

## Work log

| # | Item | Status |
|---|------|--------|
| 0 | Branch `compliance/dpdp-public-site` created; ledger opened | ✅ done |
| 1 | Audit of footer, shell, layout, existing legal pages, API routes | ✅ done |
| 2 | Grievance contact + `privacy@clienter.co.in` in `src/lib/site.ts` | ✅ done |
| 3 | Rewrite `/privacy` as full DPDP Privacy Notice | ✅ done |
| 4 | Consent banner + consent-gated GA4 | ✅ done |
| 5 | Footer: Privacy Notice link + grievance contact + cookie preferences | ✅ done |
| 6 | Cookie Policy corrected to match reality | ✅ done |
| 7 | Data-protection clause in Terms | ✅ done |
| 8 | Typecheck + build verification | ✅ done |

---

---

## What was actually built

### 1. `/privacy` — rewritten as a full Privacy Notice (`src/app/privacy/page.tsx`)
Complete rewrite, plain language, 13 sections. Adds over the old version:
- **Fiduciary/Processor split** (§2) — spelled out that when a customer stores *their* client's
  details, the customer is the Data Fiduciary and we are the Processor, with a plain-English
  explanation of where to take a request.
- **A what/why/where table** (§3) — every data item, its specific purpose, and whether it is
  collected by the site or the app. Includes IP address, server logs, and Calendar tokens.
- **A complete third-party table** (§5) — Supabase, Vercel, Razorpay, **Stripe** (international),
  Resend, **Web3Forms**, Google (split into Calendar vs Analytics), **Upstash**, and
  **Product Hunt**. Web3Forms and Product Hunt were previously undisclosed entirely.
- **A retention table with real numbers** (§7) — 90 days post-deletion, 8 years for tax records,
  24 months for support mail, 14 months for analytics, ~24h for rate-limit logs. The old version
  said only "a reasonable period."
- **All five DPDP rights plus grievance redressal** (§8), each with how to exercise it, an
  acknowledgement SLA (72h) and resolution SLA (30 days), the identity-verification step, the Data
  Principal's own duties, and escalation to the Data Protection Board of India.
- **Honest cookie section** (§6) replacing the false "strictly necessary only" claim.
- Metadata title/description updated; canonical URL, sitemap entry and every inbound link unchanged.

### 2. Grievance / data-protection contact (`src/lib/site.ts`, `SiteFooter.tsx`)
- `CONTACT.privacy` and `CONTACT.legal` now `privacy@clienter.co.in` (was a personal inbox).
- `LEGAL.grievanceOfficer.title` widened to "Grievance Officer & Data Protection Contact".
- New **data-protection bar in the site footer**, above the copyright line: the named person, the
  role, the mailto link, plus Privacy Notice / Cookies / Cookie preferences. Because `SiteFooter`
  is used by both `PageShell` and the landing page, this is on **every page of the site**.

### 3. Consent banner + consent-gated analytics — the site was NOT tracker-free
- `src/lib/consent.ts` — consent state. Denied-by-default, versioned key, `localStorage` (not a
  cookie), change/open events, and a GA-cookie cleaner for withdrawal.
- `src/components/marketing/ConsentManager.tsx` — the banner **and** the only loader of GA4. If
  consent is not `granted`, no script tag is rendered, so nothing is requested from Google.
  Decline and Accept have equal visual weight, Decline is listed first, and closing the banner
  records a refusal. Withdrawal tells Google to stop, clears `_ga*` cookies, and reloads.
- `src/components/marketing/CookiePreferencesButton.tsx` — reopens the banner; in the footer of
  every page and inline in §4 of the Cookie Policy.
- `src/app/layout.tsx` — GA removed from `<head>`; `<ConsentManager />` mounted in `<body>`, with
  a comment explaining why a tag must never go back in the head.
- Google **Consent Mode v2** defaults to denied for all four signals; only `analytics_storage` is
  ever granted. `ad_storage` / `ad_user_data` / `ad_personalization` are never granted.
  `anonymize_ip` on.

### 4. `/cookies` — corrected to match reality (`src/app/cookies/page.tsx`)
Removed both false claims. Added `_ga`/`_ga_*` and `clienter.consent.v1` to the inventory table,
an explanation of how to change or withdraw the choice with an inline button, and disclosure of the
Product Hunt image request.

### 5. `/terms` — data-protection clause added (`src/app/terms/page.tsx`)
New **§6A Data protection**: the Fiduciary/Processor split, the customer's own obligations as
Fiduciary, breach notification to the customer, deletion/return on termination, and sub-processor
authorisation. §9 updated to name the full vendor list.

### Verification run
- `npx tsc --noEmit` — clean.
- `npx next build` — succeeds, all routes prerender.
- `grep googletagmanager` across prerendered HTML — **0 matches**, confirming no GA request is
  made before consent. (The URL string appears in the layout client chunk, which is expected —
  it is inside the component that runs only after opt-in.)
- `next start` smoke test — grievance email, Privacy Notice link and Cookie preferences button all
  present in the footer of a sampled page; `/privacy` renders as "Privacy Notice".

---

## ⚠️ Needs legal sign-off

Every file below carries `<!-- LEGAL REVIEW REQUIRED — draft copy, not final -->` in its source
header. **None of this is lawyer-reviewed.** Priority order:

1. **`src/app/privacy/page.tsx`** — the whole notice. Pay particular attention to:
   - §2, the Fiduciary/Processor characterisation — this determines who is liable for customer-
     entered client data and is the single highest-stakes claim on the page.
   - §7, the retention periods. **I chose these numbers**; they are reasonable defaults, not
     verified against the app's actual deletion jobs or against your accountant's advice on the
     8-year tax retention.
   - §8, the 72-hour / 30-day SLAs. **I chose these too.** They are commitments you must actually
     be able to meet — the Act's implementing rules may set different periods.
   - §5, the international-transfer paragraph.
2. **`src/app/terms/page.tsx` §6A** — the processor clause and breach-notification wording. In most
   SaaS this is a separate Data Processing Addendum, not a Terms clause; a lawyer may want it split
   out into its own document.
3. **`src/app/cookies/page.tsx`** — the consent mechanism's legal adequacy, and the claim that
   `clienter.consent.v1` is strictly necessary.

Also worth a lawyer's view: whether a sole proprietor at your scale triggers any Significant Data
Fiduciary obligations (I have assumed **not** — no DPO appointment, no audit, no DPIA).

---

## 🚧 Blockers — must be resolved before this branch ships

Both of the original blockers below are now **resolved** (2026-08-05, owner-directed):

1. ~~`privacy@clienter.co.in` does not exist yet.~~ **Resolved.** The owner confirmed
   `support@clienter.co.in` is live and monitored. Every occurrence of `privacy@clienter.co.in` —
   `CONTACT.privacy`, `CONTACT.legal` in `src/lib/site.ts`, and everywhere those constants are
   consumed (footer data-protection bar, Privacy Notice §1/§8/§11/§13, Cookie Policy §8, Terms
   §18) — is now `support@clienter.co.in`. All of these render through the shared `CONTACT` /
   `LEGAL.grievanceOfficer` constants, so this was a two-line change in `site.ts`; there were no
   hardcoded literals elsewhere to chase down (verified with a repo-wide grep). The
   "mailboxes aren't receiving mail" TODO comment in `site.ts` was rewritten to note
   `support@clienter.co.in` as the live exception, rather than removed outright — `general` and
   `support` in `CONTACT` still point at the founder's personal inbox, so the caveat is still true
   for those.
2. ~~`LEGAL.effectiveDate` is still `26 June 2026`.~~ **Resolved.** Set to `5 August 2025`
   (owner-directed), matching the existing "D Month YYYY" format used across all policy pages.

No new blockers introduced by this change. `npx tsc --noEmit` clean; no other file references the
old address or date (verified by grep).

---

## ❓ Open questions — things I could not determine from this repo

1. **Upstash and Stripe are not used anywhere in this repo.** I searched the full tree. Rate
   limiting here is Supabase-backed (`src/lib/rate-limit.ts`); there is no Stripe code. I disclosed
   both in the Privacy Notice because the goal named them and the notice covers the whole service,
   but **the descriptions are inferred, not verified.** Confirm against the app repo — particularly
   what Upstash keys actually contain (I wrote "short-lived technical keys derived from IP address
   or account ID") and whether Stripe is live for international customers yet. If either is not in
   use, remove the row rather than leaving an inaccurate disclosure.
2. **Google Calendar/Meet token handling** is described from the old policy's claims (AES-256-GCM
   at rest), not from code in this repo. Re-verify in the app repo.
3. **The 90-day account deletion window** in §7 is a promise about app behaviour. Does a deletion
   job actually exist and run in that window? If not, either build it or change the number.
4. **The waitlist.** `src/app/api/waitlist/route.ts` and the `waitlist` Supabase table still exist
   and still accept signups, while marketing has retired the waitlist and the product is live. The
   Privacy Notice §7 says remaining entries "are being cleared" — **make that true**, or reword it.
   Decide whether the route should be removed entirely.
5. **Whether the app repo needs the same treatment.** This branch covers the marketing site only.
   The app at `app.clienter.co.in` collects far more personal data and needs its own consent
   handling, in-product rights flows (export, delete, nominate), and the same notice.
6. **No postal address is published anywhere.** Pre-existing `TODO(owner)` in `src/lib/site.ts`
   notes Razorpay usually requires one for live payments, and a grievance contact is more credible
   with one. Not addressed here — out of scope for DPDP, but adjacent.

---

## Resuming this work

Branch: `compliance/dpdp-public-site`. Nothing has been pushed. `git log main..HEAD` shows the
single commit. To continue: clear the two blockers above, then work the open questions in order —
(1) and (4) are the ones that could leave a *false* statement published, so do those first.
