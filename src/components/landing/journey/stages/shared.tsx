'use client'

import type { ReactNode } from 'react'
import { Badge, Bar, Caption } from '../primitives'

/**
 * Every stage takes exactly this. Nothing knows about scroll position — a stage
 * is a pure function of "am I live" and "which of four beats".
 */
export interface StageProps {
  /** True for the one live chapter. Only the live stage owns the shared chip. */
  on: boolean
  /** 0 rest · 1 cursor arrived · 2 click fires · 3 settled. */
  beat: number
  reduced: boolean
  /**
   * True in the mobile stacked sequence, where the app rail is dropped to buy
   * back width. Only the full-bleed stage (07, the portal) needs to know.
   */
  compact?: boolean
}

/** The screen body that sits to the right of the persistent rail. */
export function Screen({ children }: { children: ReactNode }) {
  return <div className="flex h-full flex-col">{children}</div>
}

/** Scrollable-looking body area. */
export function Body({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`relative min-h-0 flex-1 overflow-hidden ${className}`}>{children}</div>
}

/** A primary action, at mock scale. Mirrors `.btn-primary`. */
export function Btn({
  children,
  tone = 'primary',
  className = '',
}: {
  children: ReactNode
  tone?: 'primary' | 'secondary'
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-1.5 py-[3px] text-[9px] font-semibold ${
        tone === 'primary'
          ? 'bg-orange-600 text-white shadow-[0_1px_2px_rgba(234,88,12,0.4)]'
          : 'border border-stone-200 bg-white text-stone-600'
      } ${className}`}
    >
      {children}
    </span>
  )
}

/** A stat tile — the app's `.stat-card`, shrunk. */
export function Stat({
  label,
  value,
  tint = 'text-ink',
}: {
  label: string
  value: ReactNode
  tint?: string
}) {
  return (
    <div className="rounded-lg border border-stone-200/70 bg-white px-2 py-1.5">
      <Caption>{label}</Caption>
      <div className={`mt-0.5 text-[13px] font-bold leading-none tabular-nums ${tint}`}>{value}</div>
    </div>
  )
}

/**
 * Background rows. Deliberately real-looking-but-quiet: named people from the
 * same made-up city so the board doesn't read as lorem ipsum, but muted enough
 * that Nova Studio is unmistakably the subject.
 */
export const OTHER_LEADS = [
  { name: 'Meera K.', company: 'Loomcraft', value: '₹45,000', source: 'Website', tint: 'bg-amber-50 text-amber-700' },
  { name: 'Dev P.', company: 'Saffron Foods', value: '₹80,000', source: 'Referral', tint: 'bg-emerald-50 text-emerald-700' },
  { name: 'Ritu B.', company: 'Kalpa Interiors', value: '₹32,000', source: 'Ads', tint: 'bg-violet-50 text-violet-700' },
  { name: 'Imran S.', company: 'Northline Cargo', value: '₹1,10,000', source: 'Cold Call', tint: 'bg-sky-50 text-sky-700' },
  { name: 'Farah N.', company: 'Anchor Dental', value: '₹58,000', source: 'Other', tint: 'bg-stone-100 text-stone-600' },
] as const

/** A quiet lead card for the columns Nova Studio isn't in. */
export function QuietLead({ i }: { i: number }) {
  const lead = OTHER_LEADS[i % OTHER_LEADS.length]
  return (
    <div className="rounded-lg border border-stone-200/70 bg-white p-1.5 shadow-[0_1px_2px_rgba(67,36,16,0.04)]">
      <div className="flex items-start justify-between gap-1">
        <span className="truncate text-[10px] font-semibold leading-tight text-stone-700">
          {lead.name}
        </span>
        <span className="flex-none text-[9px] font-semibold tabular-nums text-stone-500">
          {lead.value}
        </span>
      </div>
      <span className="mt-0.5 block truncate text-[9px] leading-tight text-stone-400">
        {lead.company}
      </span>
      <div className="mt-1 border-t border-stone-100 pt-1">
        <Badge tint={lead.tint}>{lead.source}</Badge>
      </div>
    </div>
  )
}

/** A muted client/list row for the rows that aren't the subject. */
export function QuietRow({ name, right }: { name: string; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-stone-200/60 bg-white px-2 py-1.5">
      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-stone-100 text-[9px] font-semibold text-stone-400">
        {name[0]}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[10px] font-semibold text-stone-600">{name}</span>
        <Bar w="3.5rem" className="mt-1" />
      </span>
      {right}
    </div>
  )
}

/** Four equal board columns, addressed by index so a flying card can share the
    exact same coordinate system. */
export const COL_PCT = 25

export function BoardColumn({
  index,
  title,
  dot,
  count,
  children,
  highlight = false,
}: {
  index: number
  title: string
  dot: string
  count: number
  children?: ReactNode
  highlight?: boolean
}) {
  return (
    <div className="absolute bottom-0 top-0 px-[3px]" style={{ left: `${index * COL_PCT}%`, width: `${COL_PCT}%` }}>
      <div
        className={`flex h-full flex-col rounded-lg border p-1 transition-colors duration-500 ${
          highlight ? 'border-emerald-300 bg-emerald-50/50' : 'border-stone-200/60 bg-stone-100/50'
        }`}
      >
        <div className="flex flex-none items-center gap-1 px-0.5 pb-1">
          <span className={`h-1 w-1 flex-none rounded-full ${dot}`} />
          <span className="truncate text-[8px] font-bold uppercase tracking-[0.1em] text-stone-500">
            {title}
          </span>
          <span className="ml-auto text-[8px] font-semibold text-stone-400">{count}</span>
        </div>
        <div className="min-h-0 flex-1 space-y-1">{children}</div>
      </div>
    </div>
  )
}
