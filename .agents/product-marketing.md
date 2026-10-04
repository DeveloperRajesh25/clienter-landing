# Product Marketing Context

**Document version:** v3
**Last updated:** 2026-10-04
**Place this file at:** `.agents/product-marketing.md` in the clienter-landing repo (and the Clienter app repo if used there)

> Clienter is a GLOBAL product. India is the largest early user base and a strength (GST invoicing, INR pricing), but it is one market among several, not the positioning.
> Usage notes for every skill: (1) no customer quotes, testimonials, ratings or usage metrics have been collected yet, so never invent any; (2) statements about competitors are positioning hypotheses: verify each one against the competitor's own pages and date it before publishing.

## Product Overview
**One-liner:** Clienter is the all-in-one workspace for freelancers and agencies anywhere: leads, quotes, contracts, projects, client portal, invoices and payment tracking in one login.
**What it does:** Agencies capture leads, send AI-assisted quotations and e-signed contracts, run projects on kanban boards, share progress through a branded client portal, and track what clients owe and have paid with invoices, payment reminders, proof-of-payment review and auto-invoiced retainers. It also handles team payouts, payroll and a cash forecast. Works in about 30 currencies, with a separate currency per client. Clienter records and tracks client payments; clients pay the agency directly (bank transfer, UPI and so on), not through Clienter.
**Product category:** Client management software and agency management software for freelancers and small agencies. Search phrases the site already targets: "client management software", "CRM for freelancers", "project management CRM", "business management software".
**Product type:** Multi-tenant SaaS (web app, installable PWA, Android app)
**Business model:** Freemium with three plans: Free, Pro and Ultra. India: ₹0 / ₹199 / ₹799 per month, billed in INR through Razorpay. International: $19 (Pro) and $39 (Ultra) per month, billed in USD through PayPal. Billing region is chosen at first checkout. The Free plan is free forever with no credit card required. Exact plan limits come from the app's `plans.ts`, never from copy written here.

## Target Audience
**Target companies:** Agencies of 2-15 people and established freelancers with 5+ clients and 10+ projects, anywhere in the world. Early base is India; expansion targets are the US, UK, Australia and Canada.
**Decision-makers:** The owner/founder (also the daily user).
**Primary use case:** Replace the patchwork of chat apps, spreadsheets, a PM tool, an invoicing tool and a CRM with one place that runs the whole client lifecycle.
**Jobs to be done:**
- Win work: capture leads, follow up, send a professional quote and contract fast
- Look professional to clients: branded portal, polished invoices, e-signatures, verified reviews
- Get paid on time and know where the money stands: reminders, retainers, forecast
**Use cases:**
- Web, design or marketing agency running retainers and one-off projects
- Freelancer with several clients who wants a client-facing portal
- Agency owner paying a small team per project or monthly salary

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Agency owner (user + buyer) | Cash flow, looking credible, time | Work scattered across tools; chasing payments | One system from lead to paid invoice |
| Established freelancer | Winning and keeping clients | Looks less professional than agencies | Branded portal, quotes, contracts |
| Teammate | Clear tasks and earnings | Unclear assignments, payment disputes | Assigned boards, own earnings and payslips |
| The agency's client (influencer, never buys) | Visibility, easy approvals | Not knowing project status | Portal with progress, approvals, chat |

## Problems & Pain Points
**Core problem:** Running an agency across chat apps, spreadsheets and several disconnected tools.
**Why alternatives fall short:**
- Freelancer suites (HoneyBook, Bonsai, Dubsado and similar) bundle the lifecycle, but most are priced in USD and designed around US workflows
- Generic PM tools (Trello, Notion, Asana, ClickUp) don't handle quotes, contracts, invoices or a client portal
- Spreadsheets break at 5+ clients and can't be shared with a client
**What it costs them:** Late payments, lost leads, hours of admin, unprofessional impression.
**Emotional tension:** Feeling disorganised in front of clients; fear of dropping a lead or missing a payment.

## Competitive Landscape
**Direct:** Freelancer and agency suites (HoneyBook, Bonsai, Dubsado, Plutio, Moxie); CRMs used by agencies (HubSpot, Zoho CRM, Pipedrive); regional billing-led tools (Refrens and Vyapar in India; Zoho Books, QuickBooks and FreshBooks elsewhere)
**Secondary:** Notion/Trello/ClickUp plus a separate invoicing tool
**Indirect:** Chat apps + spreadsheets + cloud drive; a part-time assistant

## Differentiation
**Key differentiators:**
- Whole lifecycle in one place: lead, quote, contract, project, portal, invoice, payroll
- Works across borders: about 30 currencies, per-client currency, PayPal (USD) and Razorpay (INR) billing. Invoices carry a custom tax rate per line item in any currency, with GST-compliant invoicing for India. No country-specific VAT or sales-tax formats beyond that, so never claim them.
- AI quote builder that learns the agency's own rates and writes a full quotation from a requirements document
- Client portal, public business page and agencies marketplace with verified client reviews
- Core tools (CRM, quotes, contracts, projects, client portal, invoicing, AI quotes, Google Calendar) are on every plan including Free. Payroll, white-label branding, lead integrations and a custom domain are Ultra only.
**Why customers choose us:** One workspace instead of many, a Free plan that covers the whole workflow, and pricing that starts free and stays low (Pro from $19 per month).

## Objections
| Objection | Response |
|-----------|----------|
| "I already use Notion or Trello plus a spreadsheet" | Those can't send a quote or an e-signed contract, issue an invoice, or give your client a portal. Clienter does it all in one place. |
| "The Free plan is too small to try with my real clients" | Free is free forever with no card; upgrade only when you outgrow it. Pro starts at $19 per month. |
| "Is my client data safe?" | Row-level data isolation per agency, an encrypted credentials vault, privacy-law consent flows and weekly backups. |
| "Will my clients bother logging in?" | The portal is optional; documents and forms work with just a link. |
| "Do you support my country's tax and currency?" | About 30 currencies, a separate currency per client, a custom tax rate per line item, and GST invoices for India. No country-specific VAT or sales-tax formats. |
| "Does Clienter collect payments from my clients?" | No. It tracks invoices, reminders and proof of payment; your clients pay you directly. |

**Anti-persona:** Beginner freelancers with 0-2 clients; enterprises needing SSO and procurement.

## Switching Dynamics
**Push:** Missed follow-ups, payment chasing, scattered files, unprofessional-looking invoices
**Pull:** One login, branded portal, auto-reminders, a usable Free plan
**Habit:** Chat apps and spreadsheets "work well enough"
**Anxiety:** Migrating existing clients and projects; clients refusing a new login; data safety

## Customer Language
**How they describe the problem / us:** No verbatim customer language has been collected yet. Write plain, concrete copy and do not present invented phrases as customer quotes.
**Words to use:** clients, projects, quotation or proposal, invoice, portal, retainer
**Words to avoid:** "CRM" alone (too generic), "India-only" or "India-first" framing, "all-in-one" without proof, "every feature on every plan", any claim that Clienter processes client payments
**Glossary:**
| Term | Meaning |
|------|---------|
| Portal | Branded client-facing area |
| Retainer | Monthly-billed project with auto-invoice |

## Brand Voice
**Tone:** Direct, honest, practical, founder-led. The site's existing comparison pages say "no spin"; keep that.
**Style:** Plain language, concrete examples, admit limitations
**Personality:** Practical, builder-minded, no-fluff

## Proof Points
**Metrics:** Launched July 2026 after about 200 beta users and a waitlist of about 800. The public marketplace lists over 1,000 businesses (most with incomplete profiles). No other usage numbers are available, so don't cite any.
**Customers:** None cleared to be named.
**Testimonials:** None available. Do not write any.
**Value themes:**
| Theme | Proof |
|-------|-------|
| Whole lifecycle | Lead, quote, contract, project, portal, invoice (shipped) |
| Works across borders | Multi-currency, PayPal and Razorpay billing (shipped) |
| Professional to clients | Portal, e-signature certificate, verified reviews (shipped) |

## Goals
**Business goal:** Grow active users and paid conversions globally.
**Conversion action:** Sign up free, then create a first client and send a first quote or invoice (activation), then upgrade.
**Current metrics:** Internal observation: most signups never create a single client record. No rates are published; don't state any.

## Changelog
*Newest first.*
- v3 (2026-10-04) — Removed all open placeholders. Corrected "every feature on every plan" (Payroll, white-label, lead integrations and custom domain are Ultra only). Added that Clienter tracks but does not collect client payments, and that only a custom tax rate (plus GST for India) is supported for non-India invoices. Removed the unconfirmed time-limited trial idea. Marked proof points as none available.
- v2 (2026-10-04) — Corrected from India-first to global positioning; added US/UK/AU/CA expansion targets and PayPal international pricing.
- v1 (2026-10-03) — Initial draft from the Clienter handbook.