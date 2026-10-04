# Competitor claims — verification log

**Verification pass:** 4 October 2026.
**Method:** read-only fetch of each competitor's own public pricing page. No accounts were created and
no product was trialled, so nothing below is a hands-on finding — every claim is a claim about what a
vendor's own page said on that date.

**The rule this file exists to enforce:** a pricing page that does not mention a feature is evidence
about the page, not about the product. Anywhere that distinction mattered, the site now says
"not listed on their pricing page (as of …)" rather than "they don't have it". That phrasing is
deliberate, not hedging, and should not be "tightened up" by a later copy pass.

---

## 1. Verified — safe to state, with the date

| Vendor | Claim | Source | Read |
|---|---|---|---|
| Bonsai | Billed **per user**, per month: Basic $15, Essentials $25, Premium $39, Elite $59 ($9/$19/$29/$49 billed annually) | Their pricing page + its own FAQ structured data | 2026-10-04 |
| Bonsai | 7-day free trial; **no** free-forever plan | Same page, FAQ block | 2026-10-04 |
| HoneyBook | List prices: Starter $36/mo ($29 annual), Essentials $59 ($49), Premium $129 ($109) | Their pricing page's own price configuration | 2026-10-04 |
| HoneyBook | Free trial; **no** free-forever plan | Same page | 2026-10-04 |
| Plutio | Core $19/mo (cap: **9 active clients**), Pro $49 (unlimited clients, up to 30 team contributors), Max $199 (unlimited + white-label + SSO) | Their pricing page's FAQ structured data | 2026-10-04 |
| Plutio | 7-day trial, no card required; **no** free plan. Billing via Stripe and PayPal | Same page | 2026-10-04 |
| Dubsado | Two plans named **Starter** and **Premier**; a free trial exists | Their pricing page | 2026-10-04 |
| Moxie | 14-day free trial | Their pricing page title and copy | 2026-10-04 |

---

## 2. Could not verify — softened or left out

| # | Item | What we did | What a human should do |
|---|---|---|---|
| 1 | **Dubsado's actual prices.** The figures are not rendered in the HTML of their pricing page; they load client-side. | The site names the two plans and says plainly that the prices were not in the HTML we read. No number is printed. | Open their pricing page in a browser and fill in the two figures. Three pages reference them. |
| 2 | **Moxie's tier prices.** The page rendered two sets of figures — roughly $10/$20/$32 and $12/$25/$40 — without labelling which was monthly and which annual. | The site says "tiers listed between roughly $12 and $40 a month" and tells the reader to check the split themselves. | Confirm the monthly/annual split in a browser and state the three monthly prices. |
| 3 | **HoneyBook promotional pricing.** Their page carried a second, lower set of figures ($50.15 and $109.65 monthly) alongside the list prices. | The site quotes the list prices and says promotional rates were also showing. | Decide whether to track the promo or keep quoting list. List is more stable. |
| 4 | **HoneyBook payment availability by country.** Widely understood to be US and Canada, but their pricing page does not enumerate countries. | The site says payments are "designed for US and Canadian businesses" and tells the reader to check their page for current availability. | Find the help-centre page that lists supported countries and cite that instead. |
| 5 | **GST invoicing at HoneyBook, Bonsai, Dubsado, Plutio, Moxie.** Absent from all five pricing pages. | Every instance now reads "GST-compliant invoicing is not listed on their pricing page". Previously several pages asserted "not built for India/GST" as fact. | If you want to upgrade any of these to a confirmed absence, cite that vendor's own docs or help centre. Otherwise leave as-is. |
| 6 | **Team payouts / payroll at HoneyBook, Dubsado, Bonsai.** Absent from their pricing pages. | Stated as "not listed on their pricing page". | Same as above. |
| 7 | **QuickBooks withdrawal from India.** `SEO_OVERHAUL_REPORT.md` records this as the one specific competitor fact used, with a "verify current status" caveat. Not re-verified in this pass. | Left exactly as it was, caveat intact. | Re-verify against an Intuit announcement before the claim is leaned on harder. |
| 8 | **Every other competitor on the site.** 19 of the 24 `/compare/*` pages and 7 of the 12 `/alternatives/*` pages were not re-verified. | Their `asOf` still reads **July 2026** and they carry **no** `sources`. The stale date is left visible on purpose. | Work through them in search-volume order, adding a `sources` entry and bumping `asOf` only for pages actually re-read. |

---

## 3. Pages updated in this pass

`asOf: 'October 2026'` **and** a `sources` block — these were genuinely re-verified:

- `/compare/clienter-vs-honeybook` (rewritten in full)
- `/compare/clienter-vs-bonsai`
- `/compare/clienter-vs-dubsado`
- `/compare/clienter-vs-plutio`
- `/compare/clienter-vs-moxie`
- `/alternatives/honeybook-alternatives` (new)
- `/alternatives/bonsai-alternatives` (new)
- `/alternatives/dubsado-alternatives` (new)

Reframed for a worldwide reader but **not** re-verified, so `asOf` stays July 2026 and no `sources`
block was added: the 17 other `/compare/*` pages and 6 other `/alternatives/*` pages whose competitor
is a global product. Bumping a date without re-reading the page would be the exact dishonesty this
file exists to prevent.

Deliberately left India-framed, because the competitor or the query is India-specific:
`/compare/clienter-vs-refrens`, `/compare/clienter-vs-vyapar`, `/compare/clienter-vs-zoho-books`,
`/compare/clienter-vs-quickbooks`, `/alternatives/quickbooks-alternative-india`,
`/alternatives/honeybook-alternative-india`, `/for/indian-freelancers`.

---

## 4. Claims about our own product that were removed

Not competitor claims, but the same discipline applies, and these were the worse offence because they
were ours to get right:

- **"was ₹499" / "was ₹1,999"** reference prices, in 49 content files plus the pricing page, the
  homepage, the FAQ and the `SoftwareApplication` schema. Nothing in the repo or the product context
  establishes that either figure was ever charged. Removed everywhere.
- **"Launch pricing is limited time. Lock in your rate today."** displayed permanently. Removed.
- **"Every plan includes the whole product"** as an unqualified phrase, in places where it sat next to
  features that are Ultra-only. The pricing page's version was already correctly qualified; the
  phrasing elsewhere was tightened.
- **"GST-ready"** → **"GST-compliant"** throughout. "Ready" is vague enough to be read as a promise
  about an outcome rather than a description of a format.
