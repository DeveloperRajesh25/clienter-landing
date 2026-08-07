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
      className="fixed bottom-0 left-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5"
    >
      <div className="max-w-sm overflow-hidden rounded-2xl border border-line/80 bg-white/95 shadow-[0_18px_50px_-12px_rgba(24,16,8,0.28)] backdrop-blur-md">
        <div className="relative flex gap-4 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
            <Cookie className="h-4 w-4" aria-hidden />
          </div>

          <div className="min-w-0 flex-1">
            <h2 id="consent-title" className="text-sm font-bold text-gray-900">
              A quick word about analytics
            </h2>
            <p id="consent-body" className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-600">
              We use strictly necessary cookies to make this site work. We'd also like to use Google Analytics to understand which pages are useful.{' '}
              <Link href="/cookies" className="font-semibold text-orange-600 hover:text-orange-700">
                Cookie Policy
              </Link>{' '}
              ·{' '}
              <Link href="/privacy" className="font-semibold text-orange-600 hover:text-orange-700">
                Privacy Notice
              </Link>
            </p>

            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={onDecline}
                className="focus-ember rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-stone-50"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={onAccept}
                className="focus-ember rounded-full bg-gray-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Allow
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onDecline}
            aria-label="Close and decline analytics"
            className="focus-ember shrink-0 rounded-full p-1 text-stone-400 transition-colors hover:bg-stone-100 hover:text-gray-700"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
