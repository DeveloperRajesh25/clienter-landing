import { ExternalLink } from 'lucide-react'
import type { CompetitorSource } from '@/lib/content/sources'

/**
 * The sources behind a page's competitor claims.
 *
 * Renders nothing when a page has no sources yet — those pages are tracked in
 * docs/needs-verification.md rather than papered over with a vague citation.
 *
 * `rel="nofollow"` is deliberate: these are references, not endorsements, and we
 * do not want to pass ranking signal to a competitor from a page that competes
 * with them. `noopener` because they open in a new tab.
 */
export function SourceList({ sources }: { sources?: CompetitorSource[] }) {
  if (!sources?.length) return null

  return (
    <div className="mt-6 rounded-2xl border border-stone-200/70 bg-white/60 p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400">
        Sources
      </p>
      <ul className="mt-3 space-y-2">
        {sources.map((s) => (
          <li key={s.url} className="text-sm text-gray-600">
            <a
              href={s.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-gray-800 underline decoration-stone-300 underline-offset-2 hover:text-orange-700 hover:decoration-orange-400"
            >
              {s.label}
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-stone-400">
              {' '}
              — read{' '}
              <time dateTime={s.checked}>
                {new Date(`${s.checked}T00:00:00Z`).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
