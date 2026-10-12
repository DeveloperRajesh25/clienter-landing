import { SITE_URL } from '@/lib/site'

/**
 * Google "Preferred Sources" deeplink — opens Google's source-preferences page
 * with clienter.co.in pre-filled. A signed-in reader ticks the box once and
 * Google then favours our articles for that reader in Top Stories (and in AI
 * Overviews / AI Mode where offered).
 *
 * Deliberately the plain deeplink, NOT Google's JS button
 * (news.google.com/swg/js/v1/publisher.js): that would load a Google script on
 * every page before any consent, which the consent-first rule in
 * lib/analytics.ts forbids, and would need a CSP allowance. A link sends
 * nothing until the visitor clicks it. The cost is one extra tick in Google's
 * UI and no auto-return to this page; Google documents both as optional.
 *
 * Only a domain qualifies (not a /blog subdirectory), hence the bare host.
 * It does not raise rankings for everyone — it only affects readers who opt in.
 */
const HOST = new URL(SITE_URL).host

export const PREFERRED_SOURCE_URL = `https://www.google.com/preferences/source?q=${HOST}`

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
      <path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  )
}

export function PreferredSourceLink({
  dark = false,
  className = '',
}: {
  dark?: boolean
  className?: string
}) {
  return (
    <a
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ember inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
        dark
          ? 'border-white/10 bg-white/[0.04] text-stone-200 hover:border-orange-400/40'
          : 'border-stone-200 bg-white text-gray-800 hover:border-orange-300 hover:shadow-sm'
      } ${className}`}
    >
      <GoogleG className="h-4 w-4" />
      Add Clienter on Google
    </a>
  )
}
