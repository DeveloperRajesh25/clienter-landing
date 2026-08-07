'use client'

import { openConsentPreferences } from '@/lib/consent'

/**
 * Footer control that reopens the consent banner.
 *
 * This exists because DPDP s.6(4) requires withdrawing consent to be as easy as
 * giving it — a banner you can only ever answer once fails that test. Rendered
 * on every page via SiteFooter, so the exit is always one click away.
 */
export function CookiePreferencesButton({ className = '' }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentPreferences} className={className}>
      Cookie preferences
    </button>
  )
}
