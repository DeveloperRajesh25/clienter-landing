/**
 * Primary sources for competitor claims.
 *
 * A comparison page is a public claim about another company, so everything
 * factual on it has to be checkable. These are the competitors' OWN pages —
 * pricing pages, docs, help centres — never a third-party roundup, a review site
 * or our own summary of them.
 *
 * Rules that go with this file:
 *  - "Not listed on their pricing page" is what we write when a page is silent.
 *    An absence is only stated as an absence when their docs confirm it.
 *  - `checked` is the date the link was actually opened, not the date the page
 *    shipped. If it has not been re-opened, it does not get a new date.
 *  - Anything that could not be verified goes in `docs/needs-verification.md`.
 */

export type CompetitorSource = {
  /** What the link is, e.g. "HoneyBook pricing page". */
  label: string
  url: string
  /** ISO date the link was last opened and read. */
  checked: string
}

/** The date the October 2026 verification pass read these pages. */
export const VERIFIED_2026_10 = '2026-10-04'

/**
 * Sources read during the October 2026 pass, keyed by competitor. Reuse these
 * rather than retyping a URL, so a moved pricing page is fixed in one place.
 */
export const SOURCES: Record<string, CompetitorSource[]> = {
  honeybook: [
    {
      label: 'HoneyBook pricing page',
      url: 'https://www.honeybook.com/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
  bonsai: [
    {
      label: 'Bonsai pricing page',
      url: 'https://www.hellobonsai.com/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
  dubsado: [
    {
      label: 'Dubsado pricing page',
      url: 'https://www.dubsado.com/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
  plutio: [
    {
      label: 'Plutio pricing page',
      url: 'https://www.plutio.com/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
  moxie: [
    {
      label: 'Moxie pricing page',
      url: 'https://www.withmoxie.com/pricing',
      checked: VERIFIED_2026_10,
    },
  ],
  hubspot: [
    {
      label: 'HubSpot CRM pricing page',
      url: 'https://www.hubspot.com/pricing/crm',
      checked: VERIFIED_2026_10,
    },
  ],
}
