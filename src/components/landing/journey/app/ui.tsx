'use client'

import type { LucideIcon } from 'lucide-react'
import { ChevronDown, Plus, Search, Star } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

/* ──────────────────────────────────────────────────────────────────────────
   THE PRODUCT'S OWN VOCABULARY

   These are the app's components, rebuilt from the app's own class strings.
   Because the whole stage renders at 1200px and is scaled down as one piece,
   the values here are the real ones — `.card` is `.card`, `.input` is `.input`,
   `text-sm` is 14px. Both codebases share those definitions in globals.css, so
   a change to the product's button style shows up here for free.

   Nothing in this file knows about scroll. Scenes hand these a `beat`.
   ────────────────────────────────────────────────────────────────────────── */

/* ── Buttons ─────────────────────────────────────────────────────────────── */

export function Btn({
  children,
  icon: Icon,
  tone = 'primary',
  className = '',
  small,
}: {
  children?: ReactNode
  icon?: LucideIcon
  tone?: 'primary' | 'secondary' | 'ghost' | 'danger'
  className?: string
  small?: boolean
}) {
  const base = { primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost', danger: 'btn-secondary !text-red-600' }[tone]
  return (
    <span className={`${base} ${small ? '!px-3 !py-2' : ''} ${className}`}>
      {Icon && <Icon className="h-4 w-4" aria-hidden />}
      {children}
    </span>
  )
}

/** Square icon button — the edit/trash affordances beside a page title. */
export function IconBtn({
  icon: Icon,
  tone = 'default',
}: {
  icon: LucideIcon
  tone?: 'default' | 'danger'
}) {
  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm ${
        tone === 'danger' ? 'text-red-500' : 'text-stone-500'
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </span>
  )
}

/* ── Surfaces ────────────────────────────────────────────────────────────── */

export function Card({
  children,
  className = '',
  ring,
}: {
  children: ReactNode
  className?: string
  ring?: 'emerald' | 'orange'
}) {
  const r =
    ring === 'emerald'
      ? '!border-emerald-200 ring-1 ring-emerald-200'
      : ring === 'orange'
        ? '!border-primary-200 ring-1 ring-primary-200'
        : ''
  return <div className={`card ${r} ${className}`}>{children}</div>
}

/** Uppercase micro-caption used above portal sections. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-wider text-ink-faint ${className}`}>
      {children}
    </p>
  )
}

/* ── Badges ──────────────────────────────────────────────────────────────── */

export function Badge({
  children,
  tone = 'gray',
  icon: Icon,
  className = '',
}: {
  children: ReactNode
  tone?: 'gray' | 'green' | 'orange' | 'amber' | 'blue' | 'purple' | 'red' | 'teal' | 'pink'
  icon?: LucideIcon
  className?: string
}) {
  const tint = {
    gray: 'bg-stone-100 text-stone-600',
    green: 'bg-emerald-50 text-emerald-700',
    orange: 'bg-primary-50 text-primary-700',
    amber: 'bg-amber-50 text-amber-700',
    blue: 'bg-blue-50 text-blue-700',
    purple: 'bg-purple-50 text-purple-700',
    red: 'bg-red-50 text-red-700',
    teal: 'bg-teal-50 text-teal-700',
    pink: 'bg-pink-50 text-pink-700',
  }[tone]
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${tint} ${className}`}
    >
      {Icon && <Icon className="h-3 w-3" aria-hidden />}
      {children}
    </span>
  )
}

export function Avatar({
  initials,
  size = 'md',
  tone = 'orange',
  className = '',
}: {
  initials: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  tone?: 'orange' | 'stone'
  className?: string
}) {
  const dims = {
    sm: 'h-7 w-7 text-[11px]',
    md: 'h-9 w-9 text-xs',
    lg: 'h-10 w-10 text-sm',
    xl: 'h-12 w-12 text-base',
  }[size]
  const tint =
    tone === 'orange' ? 'bg-primary-50 text-primary-700' : 'bg-stone-100 text-stone-500'
  return (
    <span
      className={`flex flex-none items-center justify-center rounded-full font-semibold ${dims} ${tint} ${className}`}
      aria-hidden
    >
      {initials}
    </span>
  )
}

/** Org mark — the app's OrgAvatar, in its initials fallback. */
export function OrgMark({ name, className = 'h-9 w-9' }: { name: string; className?: string }) {
  return (
    <span
      className={`flex flex-none items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white ${className}`}
      aria-hidden
    >
      {name[0]}
    </span>
  )
}

/* ── Page furniture ──────────────────────────────────────────────────────── */

/** The Leads/Projects/Meetings page head: tinted icon tile, title, subtitle. */
export function PageHead({
  icon: Icon,
  title,
  sub,
  children,
}: {
  icon?: LucideIcon
  title: string
  sub?: string
  children?: ReactNode
}) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      {Icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50">
          <Icon className="h-5 w-5 text-primary-600" aria-hidden />
        </span>
      )}
      <div className="min-w-0">
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-ink">{title}</h1>
        {sub && <p className="truncate text-xs text-ink-muted">{sub}</p>}
      </div>
      {children}
    </div>
  )
}

/** Header stat chip — StatChip from the app, verbatim. */
export function StatChip({
  icon: Icon,
  label,
  value,
  tone = 'default',
}: {
  icon: LucideIcon
  label: string
  value: string
  tone?: 'default' | 'orange'
}) {
  return (
    <div
      className={`flex min-w-[110px] shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2 shadow-soft ${
        tone === 'orange' ? 'border-primary-200 bg-primary-50/60' : 'border-stone-200/70 bg-white'
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
          tone === 'orange' ? 'bg-white text-primary-500' : 'bg-stone-50 text-stone-400'
        }`}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[11px] leading-none text-stone-400">{label}</p>
        <p className="mt-0.5 truncate text-sm font-semibold tabular-nums text-ink">{value}</p>
      </div>
    </div>
  )
}

export function StatChipDouble({
  icon: Icon,
  a,
  b,
}: {
  icon: LucideIcon
  a: [string, string]
  b: [string, string]
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-stone-200/70 bg-white px-4 py-2 shadow-soft">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-stone-50 text-stone-400">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      {[a, b].map(([label, value], i) => (
        <div key={label} className="flex min-w-0 items-center gap-3">
          {i === 1 && <span className="h-8 w-px shrink-0 bg-stone-200/70" />}
          <div className="min-w-0">
            <p className="truncate text-[11px] leading-none text-stone-400">{label}</p>
            <p className="mt-0.5 truncate text-sm font-semibold tabular-nums text-ink">{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/** The four-up project stat cards: uppercase label, big number, tinted icon. */
export function StatCard({
  label,
  value,
  icon: Icon,
  tone,
}: {
  label: string
  value: ReactNode
  icon: LucideIcon
  tone: 'purple' | 'emerald' | 'blue' | 'orange'
}) {
  const box = {
    purple: 'bg-purple-50 text-purple-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-primary-50 text-primary-600',
  }[tone]
  const text = tone === 'emerald' ? 'text-emerald-600' : 'text-ink'
  return (
    <div className="card !p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-ink-muted">{label}</p>
          <p className={`text-2xl font-semibold tabular-nums ${text}`}>{value}</p>
        </div>
        <span className={`shrink-0 rounded-xl p-3 ${box}`}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>
    </div>
  )
}

/** Underlined tab bar — the project detail / portal project pattern. */
export function Tabs({
  items,
  active,
  className = '',
}: {
  items: { label: string; icon?: LucideIcon }[]
  active: string
  className?: string
}) {
  return (
    <div className={`border-b border-stone-200/70 ${className}`}>
      <div className="-mb-px flex items-center gap-1">
        {items.map(({ label, icon: Icon }) => {
          const on = label === active
          return (
            <span
              key={label}
              className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-medium ${
                on
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-stone-500'
              }`}
            >
              {Icon && <Icon className="h-4 w-4" aria-hidden />}
              {label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

/* ── Forms ───────────────────────────────────────────────────────────────── */

export function Field({
  label,
  value,
  placeholder,
  required,
  helper,
  focus,
  className = '',
  area,
}: {
  label?: string
  value?: string
  placeholder?: string
  required?: boolean
  helper?: string
  /** Renders the focus ring — used while the cursor is filling this in. */
  focus?: boolean
  className?: string
  area?: boolean
}) {
  const filled = !!value
  return (
    <div className={className}>
      {label && (
        <span className="label">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </span>
      )}
      <span
        className={`input flex items-center ${area ? '!h-auto !min-h-[76px] !items-start !py-2.5' : ''} ${
          focus ? '!border-primary-500 ring-2 ring-primary-500/20' : ''
        } ${filled ? '' : 'text-stone-400'}`}
      >
        {value || placeholder}
        {focus && <span className="ml-px inline-block h-4 w-px animate-pulse bg-primary-500" />}
      </span>
      {helper && <p className="mt-1.5 text-xs text-ink-faint">{helper}</p>}
    </div>
  )
}

export function Select({
  label,
  value,
  required,
  helper,
  className = '',
}: {
  label?: string
  value: string
  required?: boolean
  helper?: string
  className?: string
}) {
  return (
    <div className={className}>
      {label && (
        <span className="label">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </span>
      )}
      <span className="input flex items-center justify-between">
        <span className="truncate">{value}</span>
        <ChevronDown className="h-4 w-4 flex-none text-stone-400" aria-hidden />
      </span>
      {helper && <p className="mt-1.5 text-xs text-ink-faint">{helper}</p>}
    </div>
  )
}

export function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <span className="input relative flex items-center !pl-9 text-stone-400">
      <Search className="absolute left-3 h-3.5 w-3.5 text-gray-400" aria-hidden />
      {placeholder}
    </span>
  )
}

export function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-flex h-6 w-11 flex-none items-center rounded-full transition-colors duration-300 ${
        on ? 'bg-primary-600' : 'bg-stone-300'
      }`}
    >
      <span
        className={`absolute h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
          on ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </span>
  )
}

/* ── Kanban ──────────────────────────────────────────────────────────────── */

export function KanbanCol({
  dot,
  title,
  count,
  children,
  addLabel = 'Add lead',
  over,
  className = '',
}: {
  dot: string
  title: string
  count: number
  children?: ReactNode
  addLabel?: string
  over?: boolean
  className?: string
}) {
  return (
    <div
      className={`flex min-h-0 flex-col rounded-2xl border p-3 transition-colors duration-500 ${
        over
          ? 'border-primary-300 bg-primary-50/50 ring-2 ring-primary-300'
          : 'border-stone-200/60 bg-stone-100/60'
      } ${className}`}
    >
      <div className="mb-3 flex shrink-0 items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          <h3 className="text-sm font-semibold text-ink">{title}</h3>
          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-ink-muted shadow-soft">
            {count}
          </span>
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg text-stone-500">
          <Plus className="h-4 w-4" aria-hidden />
        </span>
      </div>
      <div className="min-h-0 flex-1">
        <span className="mb-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-stone-300 py-2 text-xs font-medium text-stone-400">
          <Plus className="h-3.5 w-3.5" aria-hidden />
          {addLabel}
        </span>
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  )
}

/* ── Attention ───────────────────────────────────────────────────────────────
   One ring, one tooltip, per scene. The ring breathes once on arrival and then
   holds — it is a pointer, not an animation.
   ────────────────────────────────────────────────────────────────────────── */

export function Ring({
  on,
  children,
  radius = 'rounded-xl',
  className = '',
}: {
  on: boolean
  children: ReactNode
  radius?: string
  className?: string
}) {
  return (
    <span className={`relative inline-flex ${className}`}>
      {children}
      <span
        aria-hidden
        className={`pointer-events-none absolute -inset-2 ${radius} ring-2 ring-primary-500/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          on ? 'scale-100 opacity-100' : 'scale-[1.05] opacity-0'
        }`}
      />
    </span>
  )
}

/** Plain-language payoff, pinned in stage coordinates. */
export function Tip({
  on,
  children,
  x,
  y,
  align = 'left',
}: {
  on: boolean
  children: ReactNode
  x: number
  y: number
  align?: 'left' | 'right' | 'center'
}) {
  const shift =
    align === 'right' ? 'translate(-100%, 0)' : align === 'center' ? 'translate(-50%, 0)' : 'none'
  return (
    <span
      className={`pointer-events-none absolute z-40 max-w-[19rem] rounded-xl bg-espresso px-3.5 py-2.5 text-[13px] font-medium leading-snug text-espresso-text shadow-lift-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        on ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ left: x, top: y, transform: `${shift} translateY(${on ? 0 : -6}px)` }}
    >
      {children}
    </span>
  )
}

/* ── Numbers that move ───────────────────────────────────────────────────── */

/** Counts up with an ease-out rather than a linear tick. */
function useCountUp(target: number, run: boolean, duration = 1000) {
  const [value, setValue] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    if (!run) {
      setValue(0)
      return
    }
    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const t = Math.min(1, (now - start) / duration)
      setValue(target * (1 - Math.pow(1 - t, 3)))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, run, duration])

  return value
}

export function Count({
  to,
  run,
  prefix = '',
  suffix = '',
  /** One decimal place — for the 4.9 public rating. */
  decimal,
}: {
  to: number
  run: boolean
  prefix?: string
  suffix?: string
  decimal?: boolean
}) {
  const v = useCountUp(to, run)
  return (
    <span className="tabular-nums">
      {prefix}
      {decimal ? v.toFixed(1) : Math.round(v).toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

/** Five stars that fill one at a time — all at once reads as an image. */
export function Stars({
  run,
  size = 'md',
  filled = 5,
}: {
  run: boolean
  size?: 'sm' | 'md' | 'lg'
  filled?: number
}) {
  const px = { sm: 'h-3.5 w-3.5', md: 'h-[18px] w-[18px]', lg: 'h-7 w-7' }[size]
  return (
    <span className="inline-flex flex-none items-center gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => {
        const on = run && i <= filled
        return (
          <Star
            key={i}
            className={`${px} transition-all duration-300 ease-[cubic-bezier(0.34,1.5,0.64,1)] ${
              on ? 'scale-100 text-primary-500' : 'scale-[0.7] text-stone-300'
            }`}
            style={{ transitionDelay: run ? `${140 + i * 90}ms` : '0ms' }}
            fill="currentColor"
            strokeWidth={0}
          />
        )
      })}
    </span>
  )
}

export function Bar({
  value,
  run,
  tone = 'orange',
  className = '',
  height = 'h-2',
}: {
  value: number
  run: boolean
  tone?: 'orange' | 'emerald' | 'red'
  className?: string
  height?: string
}) {
  const fill = {
    orange: 'bg-gradient-to-r from-primary-500 to-amber-400',
    emerald: 'bg-emerald-500',
    red: 'bg-red-500',
  }[tone]
  return (
    <span className={`block ${height} w-full overflow-hidden rounded-full bg-stone-200 ${className}`}>
      <span
        className={`block ${height} rounded-full ${fill} transition-[width] duration-[1100ms] ease-[cubic-bezier(0.34,1.4,0.64,1)]`}
        style={{ width: run ? `${Math.min(100, value)}%` : '0%' }}
      />
    </span>
  )
}
