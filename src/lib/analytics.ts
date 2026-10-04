/**
 * Marketing-site event tracking.
 *
 * THE RULE THIS FILE EXISTS TO ENFORCE: nothing is sent unless the visitor has
 * actively opted in. GA4 is loaded only by `ConsentManager`, and only after
 * consent, so `window.gtag` simply does not exist for a visitor who has refused
 * or has not yet chosen. `track()` therefore checks for it and returns — it never
 * queues, never retries, and never writes anything to storage of its own. A
 * refused visitor leaves no trace, which is the point.
 *
 * `readConsent()` returning null means "has not chosen", which is a refusal
 * under the DPDP framing in lib/consent.ts, not a maybe. We check it as well as
 * checking for gtag, so a stale tag from a previous session cannot receive an
 * event after consent is withdrawn.
 *
 * WHAT WE DO NOT SEND. No email addresses, no form contents, no figures typed
 * into a calculator, no free-text. Event parameters are limited to the small
 * closed vocabularies below, because an analytics payload is a place personal
 * data leaks into by accident.
 *
 * NOT WIRED UP YET. Nothing in the components calls this file. It is the agreed
 * event vocabulary and a safe transport; wiring it to the CTAs is a deliberate
 * next step so the owner can review the scheme first. See
 * docs/analytics-plan.md.
 */
import { readConsent } from '@/lib/consent'

/** The complete set of events. Adding one means adding it here first. */
export type AnalyticsEvent =
  /** A primary call-to-action was clicked. Fires alongside, not instead of, navigation. */
  | 'cta_click'
  /** A visitor interacted with a free tool — once per tool per page view. */
  | 'tool_use'
  /** A click on a link to app.clienter.co.in/signup. The conversion on this site. */
  | 'signup_click'
  /** The qualifying question under a tool was answered. */
  | 'qualifier_answer'
  /** A competitor source link was opened — tells us whether sources are read. */
  | 'source_link_click'
  /** A template was copied or downloaded. */
  | 'template_copy'

/**
 * Event parameters. Every value is a constrained identifier, never free text and
 * never anything a visitor typed.
 */
export type AnalyticsParams = {
  /** The page type the event happened on — same vocabulary as CtaMedium. */
  page_type?: string
  /** The page's own path, e.g. '/compare/clienter-vs-bonsai'. */
  page_path?: string
  /** Where on the page: 'hero' | 'pricing-card' | 'page-bottom' | 'nav' | 'tool'. */
  placement?: string
  /** For tool_use and template_copy: the tool or template slug. */
  item?: string
  /** For qualifier_answer: the client-count band, e.g. '3-9'. Never a raw number. */
  band?: string
  /** For cta_click: the plan a pricing button belongs to. */
  plan?: 'free' | 'pro' | 'ultra'
}

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void

/**
 * Send an event, if and only if the visitor has consented and the tag is loaded.
 * Safe to call from anywhere, including during SSR (it no-ops).
 */
export function track(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (typeof window === 'undefined') return

  // Belt and braces: the tag should not exist without consent, but a withdrawn
  // consent leaves the already-loaded script in the page until navigation.
  if (readConsent()?.analytics !== 'granted') return

  const gtag = (window as typeof window & { gtag?: Gtag }).gtag
  if (typeof gtag !== 'function') return

  // Strip undefined so GA4 does not receive empty parameters.
  const payload: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') payload[k] = v
  }

  try {
    gtag('event', event, payload)
  } catch {
    // Analytics must never break a page. A failed measurement is not an error
    // worth showing anyone.
  }
}
