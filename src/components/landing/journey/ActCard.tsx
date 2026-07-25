import { ACTS } from './data'

/* ──────────────────────────────────────────────────────────────────────────
   THE ACT MARK

   The desktop journey announces a new chapter on the thread and the rail, never
   over the window — a panel thrown across the screens hid the product for the
   one moment the reader was most curious about it.

   What survives here is the stacked/reduced-motion form: the same words as a
   readable divider between two acts.
   ────────────────────────────────────────────────────────────────────────── */

export function ActDivider({ act, className = '' }: { act: number; className?: string }) {
  const { n, title, line } = ACTS[act]
  return (
    <div className={`rounded-2xl bg-espresso px-5 py-7 text-center ${className}`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange-400">Act {n}</p>
      <h3 className="mt-2.5 font-serif-display text-3xl font-normal italic leading-tight text-espresso-text">
        {title}
      </h3>
      <span className="mx-auto mt-4 block h-px w-12 bg-orange-500/40" />
      <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-espresso-muted">{line}</p>
    </div>
  )
}
