'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Cookie, X } from 'lucide-react'
import { ANALYTICS } from '@/lib/site'
import {
  CHANGE_EVENT,
  OPEN_EVENT,
  clearAnalyticsCookies,
  readConsent,
  writeConsent,
  type ConsentRecord,
} from '@/lib/consent'

/**
 * ConsentManager — the site's single gate for non-essential trackers.
 *
 * Two responsibilities, deliberately in one component so they can never drift
 * out of sync: it asks for consent, and it is the ONLY thing that loads Google
 * Analytics. If `analytics` is not explicitly `granted`, no GA script tag is
 * rendered at all — nothing is requested from Google, and no `_ga` cookie can
 * be set. "No choice yet" is treated as a refusal, not as permission.
 *
 * Mounted once in the root layout, so it covers every page on the site.
 */
export function ConsentManager() {
  const [consent, setConsent] = useState<ConsentRecord | null>(null)
  const [open, setOpen] = useState(false)
  // Nothing renders on the first paint: the server has no idea what this
  // visitor chose, so rendering the banner during SSR would flash it at people
  // who already answered. We read localStorage after mount instead.
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    setConsent(stored)
    setOpen(stored === null)
    setReady(true)

    const onChange = (e: Event) => setConsent((e as CustomEvent<ConsentRecord>).detail)
    const onOpen = () => setOpen(true)
    window.addEventListener(CHANGE_EVENT, onChange)
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange)
      window.removeEventListener(OPEN_EVENT, onOpen)
    }
  }, [])

  const accept = useCallback(() => {
    writeConsent('granted')
    setOpen(false)
  }, [])

  const decline = useCallback(() => {
    const had = readConsent()?.analytics === 'granted'
    writeConsent('denied')
    setOpen(false)
    // Withdrawal has to actually take effect, not just stop future loads: GA is
    // already running in this tab, so tell it storage is denied, bin the
    // cookies it set, and reload into a clean, tag-free page.
    if (had) {
      const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
      w.gtag?.('consent', 'update', { analytics_storage: 'denied' })
      clearAnalyticsCookies()
      window.location.reload()
    }
  }, [])

  const granted = consent?.analytics === 'granted'

  return (
    <>
      {/* The ONLY place GA4 is loaded. Consent Mode v2 defaults are pushed onto
          dataLayer in the same inline script that runs before the remote
          loader, so even this post-consent tag starts from denied and is then
          granted for analytics storage alone — ad storage and ad
          personalisation are never granted, because we don't advertise on it. */}
      {granted && (
        <>
          <Script id="ga-consent-bootstrap" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
gtag('consent','update',{analytics_storage:'granted'});
gtag('js', new Date());
gtag('config','${ANALYTICS.ga4Id}',{anonymize_ip:true});`}
          </Script>
          <Script
            id="ga-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4Id}`}
          />
        </>
      )}

      {ready && open && <ConsentBanner onAccept={accept} onDecline={decline} />}
    </>
  )
}

function ConsentBanner({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-body"
      className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line/80 bg-white/95 shadow-[0_18px_50px_-12px_rgba(24,16,8,0.28)] backdrop-blur-md">
        <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
            <Cookie className="h-5 w-5" aria-hidden />
          </div>

          <div className="min-w-0 flex-1">
            <h2 id="consent-title" className="font-display text-base font-bold text-gray-900">
              A quick word about analytics
            </h2>
            <p id="consent-body" className="mt-2 text-sm leading-relaxed text-gray-600">
              We use strictly necessary cookies to make this site work — those are always on. We
              would also like to use Google Analytics to understand which pages are useful.{' '}
              <strong className="font-semibold text-gray-800">That one is off unless you turn
              it on</strong>, and you can change your mind any time from the footer. We never use
              advertising or cross-site tracking cookies.{' '}
              <Link href="/cookies" className="font-semibold text-orange-600 underline underline-offset-2 hover:text-orange-700">
                Cookie Policy
              </Link>{' '}
              ·{' '}
              <Link href="/privacy" className="font-semibold text-orange-600 underline underline-offset-2 hover:text-orange-700">
                Privacy Notice
              </Link>
            </p>

            {/* Equal visual weight on both buttons, and "Decline" comes first:
                consent isn't free if refusing is the harder path. */}
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={onDecline}
                className="focus-ember w-full rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-stone-50 sm:w-auto"
              >
                Decline analytics
              </button>
              <button
                type="button"
                onClick={onAccept}
                className="focus-ember w-full rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 sm:w-auto"
              >
                Allow analytics
              </button>
            </div>
          </div>

          {/* Dismissing without choosing is a refusal, not a deferral — closing
              records "denied" so nothing loads either way. */}
          <button
            type="button"
            onClick={onDecline}
            aria-label="Close and decline analytics"
            className="focus-ember absolute right-4 top-4 rounded-full p-1.5 text-stone-400 transition-colors hover:bg-stone-100 hover:text-gray-700 sm:static sm:right-auto sm:top-auto"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
