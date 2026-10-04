# Directory submission kit

**Written:** 4 October 2026.

> **Nothing has been submitted anywhere.** No accounts were created, no forms filled, no listings
> claimed. This is the kit so that submitting is an evening of copy-paste rather than an evening of
> writing. Every submission needs an account and most need a login that can speak for the company, so
> they are all yours to do.

---

## 1. Readiness check — do this before submitting anywhere

A rejected submission is usually a permanent one: most directories do not invite you to try again, and
a few blacklist the domain. So the order matters.

| # | Check | State today | Blocking? |
|---|---|---|---|
| 1 | The product is live and a stranger can sign up unaided | ✅ `app.clienter.co.in/signup`, free plan, no card | — |
| 2 | Pricing is public, current, and matches what you charge | ✅ after Phase 2 — and the unsupportable "was ₹499" claims are gone, which a reviewer **will** check | — |
| 3 | A one-liner, a 50-word and a 150-word description exist | ✅ §3 below | — |
| 4 | Logo in square and wide form, on transparent and solid | ⚠️ only `/public/logo.png` and `clienter logo.png` | **Yes** |
| 5 | 4–6 product screenshots at 1280×800 or larger | ❌ none in the repo | **Yes** |
| 6 | A 30–60 second demo video | ❌ none | No, but it roughly doubles conversion on Product Hunt |
| 7 | Privacy policy, terms, refund policy, security page | ✅ all four live | — |
| 8 | A support email that is monitored | ✅ `support@clienter.co.in` | — |
| 9 | Social profiles that exist and are not empty | ⚠️ four profiles in `SOCIALS`, flagged as "best-guess placeholders" in `site.ts` | **Verify before using** |
| 10 | A postal address, for directories that require one | ❌ none published | **Yes, for some** |
| 11 | Founder bio and headshot | ✅ `/about`, `rajesh-photo.webp` | — |
| 12 | A tracking convention for inbound links | ✅ use `?utm_source=<directory>&utm_medium=directory` | — |

**Four blockers, and three of them are assets rather than decisions:**

1. **Screenshots.** Nothing ships without these. Capture 4–6 at 1280×800 or larger: the dashboard, a
   client profile, the lead pipeline, an invoice, the client portal as the *client* sees it. Use
   realistic but fictional client names — a screenshot with a real client's name in it is a privacy
   incident, and reviewers notice placeholder "Lorem" data too.
2. **Logo variants.** Square (512×512 and 1024×1024), wide/horizontal, transparent PNG and a solid
   fallback, plus an SVG if one exists. Also: **rename `public/clienter logo.png`.** A space in a
   filename breaks a surprising number of upload forms and URL-based logo fetchers.
3. **A postal address.** G2, Capterra and a few others require a verifiable business address. Note
   that `src/lib/site.ts` already carries a TODO saying Razorpay generally wants a business address
   published for live payments, so this is owed twice over.
4. **Confirm the social URLs.** `site.ts` says in a comment that they are best guesses, and they feed
   `Organization.sameAs`. A directory listing pointing at a wrong or empty profile is worse than one
   with no social links at all.

---

## 2. Which directories, and in what order

Ordered by return per hour, not by prestige.

### Tier 1 — do these first (strong links, real traffic, free)

| Directory | What it wants | Notes |
|---|---|---|
| **G2** | Address, screenshots, category, then reviews | The highest-value listing in this category. Claim the page early even if empty; it will rank for "Clienter" and you want to own it. Reviews come later and must be genuine. |
| **Capterra / GetApp / Software Advice** | One Gartner-family submission covers all three | Same address requirement. Good referral traffic for "client management software". |
| **AlternativeTo** | Short description, logo, categories, and honest "alternative to" tags | Directly feeds the "X alternative" intent the Phase 3 pages target. Tag HoneyBook, Bonsai, Dubsado, Plutio, Moxie. |
| **SaaSHub** | Description, logo, pricing, alternatives | Free, dofollow, indexes quickly. |
| **Product Hunt** | Tagline, description, gallery, ideally a video | **Treat as a launch event, not a submission.** Do it on a day you can be present to answer comments for 24 hours. See `launch` planning before scheduling. |

### Tier 2 — worthwhile, low effort

Slant, Crozdesk, SourceForge, Software Suggest (strong in India), Tekpon, StackShare,
Indie Hackers products, BetaList (only if you consider yourself still early — it is framed for
pre-launch), Startup Stash, SaaSworthy.

### Tier 3 — AI and agent directories

Clienter has an AI quote builder, which is a genuine qualifier for these rather than a stretch:
There's An AI For That, Futurepedia, AI Tool Hunt, Toolify. Submit under "AI for proposals and
quoting", not "AI CRM" — the latter is a crowded, generic category and the former describes what the
feature actually does.

### Tier 4 — India-specific

Software Suggest, Techjockey, GoodFirms. Worth doing because India is the largest early market, and
these rank well for Indian commercial queries. Use the India-framed positioning in §3.

### Do not bother

Paid "featured placement" on a directory with no organic traffic; any site that asks for a reciprocal
link; link farms; anything that calls itself a "DA 50 backlink package". A directory with no real
visitors passes no useful signal and some of them are actively toxic.

---

## 3. The copy, ready to paste

All of it true as of 4 October 2026. **Do not add a review count, a user count, a rating or an award
to any of these.** No usage metrics are cleared for publication, and a directory listing is exactly
where an invented number gets noticed.

### Tagline — under 60 characters

- `The all-in-one workspace for agencies and freelancers` (53)
- `Run every client from first enquiry to final payment` (51)
- `Leads, quotes, projects, invoices — in one login` (48)

### One-liner — under 140 characters

> Clienter is the all-in-one workspace for agencies and freelancers: leads, quotes, e-signed
> contracts, projects, a client portal and invoicing in one login.

### 50-word description

> Clienter is an all-in-one workspace for agencies and established freelancers. Capture leads, send
> AI-assisted quotes and e-signed contracts, run projects on Kanban boards, give each client a
> branded portal, and invoice in about 30 currencies with payment tracking and reminders. Free
> forever plan, then $19 a month.

### 150-word description

> Clienter is the all-in-one workspace for agencies of 2–15 people and established freelancers,
> replacing the usual patchwork of a chat app, a spreadsheet, a project tool and a separate
> invoicing app.
>
> It covers the whole client lifecycle in one login: capture and follow up leads on a visual
> pipeline, send AI-assisted quotations and contracts the client signs with an e-signature, run
> projects on Kanban boards with budgets and team assignments, give each client a branded portal for
> progress, files and approvals, and invoice in about 30 currencies with payment reminders, retainer
> auto-invoicing and proof-of-payment review. Ultra adds team payroll, white-label branding, a custom
> portal domain and lead integrations.
>
> Clienter records and tracks what clients owe and have paid; clients pay you directly rather than
> through Clienter. GST-compliant invoicing is included for India, with a custom tax rate per line
> item everywhere else.
>
> Free forever, no card. Pro $19/month, Ultra $39/month ($199 and $799 in INR in India).

### Positioning variants by directory type

A directory listing is read by someone browsing a category, so lead with the thing that category
cares about.

| Directory type | Lead with | Avoid |
|---|---|---|
| **Review platforms** (G2, Capterra) | Category fit and the feature table — these are evaluation-stage buyers | Founder story; nobody is reading it there |
| **Alternative directories** (AlternativeTo, SaaSHub) | What it replaces, and the flat price versus per-user | Overclaiming parity with the incumbent; these audiences check |
| **Launch platforms** (Product Hunt, Indie Hackers) | The founder story and the specific problem — "I built this because I was running my own agency out of four apps" | Feature lists; they read as a press release |
| **AI directories** | The AI quote builder specifically: it learns your own rates and writes a full quotation from a requirements document | Describing the whole product as "AI-powered". It is not, and that framing is a liability |
| **India-specific** (Techjockey, Software Suggest) | GST-compliant invoicing, INR billing via Razorpay, UPI details on invoices, TDS awareness | Hiding the global positioning — "built in India, used worldwide" is both true and stronger |
| **Free-tool and generator lists** | The 15 free tools and 8 templates individually, not the product | Submitting the product where a tool is wanted |

### Categories to pick, where offered

Primary: **Client management software** / **CRM**. Secondary: project management, invoicing, proposal
software, agency management, client portal. Avoid "accounting" — Clienter is not a ledger and a
reviewer will mark it down for the mismatch.

### Required facts, in one place

- **Founded / launched:** July 2026
- **Operator:** Talagana Rajesh, sole proprietor (no registered company yet — some directories ask)
- **Pricing:** Free forever; Pro $19/mo; Ultra $39/mo. India: ₹0 / ₹199 / ₹799 via Razorpay
- **Free plan:** yes, free forever, no credit card. **Not** a trial
- **Platforms:** web app, installable PWA, Android app. **No iOS app** — do not tick that box
- **Support:** `support@clienter.co.in`
- **Languages:** English
- **Deployment:** cloud / SaaS only
- **Integrations:** Google Calendar and Meet; Meta, Google Ads, IndiaMART and webhooks for leads
  (Ultra); Razorpay and PayPal for our own billing
- **Security:** row-level data isolation per account, encryption in transit, encrypted credentials
  vault, weekly backups, full data export. See `/security`

---

## 4. Tracking what the submissions do

Append UTMs to the website link in every listing that allows a custom URL:

```
https://clienter.co.in/?utm_source=g2&utm_medium=directory&utm_campaign=listing
```

`utm_medium=directory` for all of them, `utm_source` the directory's name in lowercase. That makes one
GA4 row per directory and answers "was this worth the evening" after a month.

Keep a spreadsheet with: directory, date submitted, status, listing URL, whether the link is dofollow,
and login location. The last column matters more than it sounds — in a year somebody will need to
update a price on a listing nobody remembers creating.

---

## 5. Before you submit, two sanity checks

1. **Open the listing copy next to `/pricing`** and confirm every number matches. A reviewer who finds
   a stale price edits your listing or rejects it, and inconsistent pricing across directories is a
   trust problem that outlasts the link.
2. **Re-read §1.** Submitting with placeholder screenshots or a broken logo URL to the top-tier
   directories is the one mistake here that is hard to undo.
