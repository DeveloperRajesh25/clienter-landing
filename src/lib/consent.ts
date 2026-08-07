/**
 * Cookie / tracker consent state for the public marketing site.
 *
 * DPDP-shaped rules this module encodes:
 * - Non-essential processing is DENIED until the visitor actively opts in.
 *   `readConsent()` returning `null` (no choice yet) must be treated as a
 *   refusal, never as permission — there is no implied consent.
 * - The record of the choice lives in `localStorage`, NOT a cookie. Writing a
 *   cookie to remember "no cookies" would be self-defeating; localStorage here
 *   is strictly necessary (it exists only to honour the visitor's own choice)
 *   and is never transmitted anywhere.
 * - Withdrawal must be as easy as granting (DPDP s.6(4)), so the footer can
 *   reopen the banner at any time via the `OPEN_EVENT` below.
 *
 * Versioned key: if the categories we ask about ever change materially, bump to
 * `clienter.consent.v2` so previously-collected consent is re-sought rather
 * than silently reused for a purpose the visitor never agreed to.
 */

export const CONSENT_KEY = 'clienter.consent.v1'

/** Fired on `window` whenever the stored choice changes. */
export const CHANGE_EVENT = 'clienter:consent-change'

/** Fired on `window` to reopen the banner (footer "Cookie preferences"). */
export const OPEN_EVENT = 'clienter:consent-open'

export type ConsentValue = 'granted' | 'denied'

export type ConsentRecord = {
  /** Non-essential analytics (Google Analytics 4). */
  analytics: ConsentValue
  /** ISO timestamp of the decision — proof of when consent was given. */
  decidedAt: string
  /** Which version of the ask this answers. */
  version: 1
}

/**
 * The visitor's stored choice, or `null` if they have not chosen yet.
 * Any unreadable/corrupt value is treated as "not chosen" → denied.
 */
export function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>
    if (parsed?.analytics !== 'granted' && parsed?.analytics !== 'denied') return null
    return {
      analytics: parsed.analytics,
      decidedAt: typeof parsed.decidedAt === 'string' ? parsed.decidedAt : new Date().toISOString(),
      version: 1,
    }
  } catch {
    // Private browsing / storage disabled / malformed JSON — fail closed.
    return null
  }
}

/** Persist a decision and notify listeners in this tab. */
export function writeConsent(analytics: ConsentValue): ConsentRecord {
  const record: ConsentRecord = {
    analytics,
    decidedAt: new Date().toISOString(),
    version: 1,
  }
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
  } catch {
    // Storage unavailable: the choice still applies for this page view via the
    // event below, we just can't remember it next time (and will ask again).
  }
  window.dispatchEvent(new CustomEvent<ConsentRecord>(CHANGE_EVENT, { detail: record }))
  return record
}

/**
 * Best-effort removal of the cookies GA4 has already set, used when a visitor
 * withdraws consent. Cookies are host-scoped, so we clear each candidate on the
 * current host and on the registrable-domain form (`.clienter.co.in`) that
 * gtag.js actually writes to.
 */
export function clearAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0]?.trim())
    .filter((n): n is string => !!n && (n === '_ga' || n.startsWith('_ga_') || n === '_gid'))

  const parts = window.location.hostname.split('.')
  // e.g. ["app","clienter","co","in"] → try "app.clienter.co.in", ".clienter.co.in", ...
  const domains = ['', ...parts.map((_, i) => `.${parts.slice(i).join('.')}`)]

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

/** Ask the banner to reopen (wired to the footer's "Cookie preferences"). */
export function openConsentPreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}
