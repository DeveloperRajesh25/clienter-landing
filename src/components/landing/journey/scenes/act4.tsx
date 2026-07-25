'use client'

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCheck,
  ClipboardList,
  Download,
  FileText,
  FolderKanban,
  LayoutGrid,
  LogIn,
  MessageSquare,
  Package,
  Plus,
  Send,
  Truck,
  Wallet,
} from 'lucide-react'
import { CLIENT, INVOICE, MESSAGES, PROJECT, STUDIO } from '../data'
import { OTHER_THREADS } from '../app/cast'
import { OwnerShell, Page, PortalShell } from '../app/shells'
import {
  Avatar,
  Badge,
  Bar,
  Btn,
  Card,
  Eyebrow,
  Field,
  Ring,
  SearchInput,
  Tabs,
  Tip,
} from '../app/ui'
import type { SceneProps } from './types'

/* ══════════════════════════════════════════════════════════════════════════
   ACT IV — HER SIDE
   The same work, from the other chair. The portal wears the agency's name and
   shows exactly one client's business — which is what makes act V's review
   worth anything.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Scene: the portal login ───────────────────────────────────────────────── */
export function PortalLogin({ beat }: SceneProps) {
  return (
    <div className="flex h-full items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-line bg-surface p-7 shadow-soft-lg">
          <div className="mb-6 text-center">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-soft-md">
              <LogIn className="h-5 w-5" aria-hidden />
            </span>
            <h1 className="text-xl font-bold tracking-tight text-ink">Client portal</h1>
            <p className="mt-1 text-sm text-ink-muted">
              Sign in with the email and password {STUDIO.name} shared with you.
            </p>
          </div>

          <div className="space-y-4">
            <Field label="Email" value={CLIENT.email} />
            <Field label="Password" value="•••••••••••" />
          </div>

          <div className="mt-5">
            <Ring on={beat === 1} radius="rounded-xl" className="w-full">
              <span className="btn-primary w-full">Sign in</span>
            </Ring>
          </div>

          <p className="mt-5 text-center text-xs text-ink-faint">
            Powered by <span className="font-semibold text-ink-muted">Clienter</span>
          </p>
        </div>
      </div>

      <Tip on={beat === 1} x={600} y={600} align="center">
        A password she already has, on your own portal address. Never a magic link.
      </Tip>
    </div>
  )
}

/* ── Scene: the portal home ────────────────────────────────────────────────── */
function PortalStat({
  value,
  label,
  sub,
  icon: Icon,
  highlight,
}: {
  value: string
  label: string
  sub?: string
  icon: typeof Wallet
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border bg-surface p-4 shadow-soft ${
        highlight ? 'border-primary-300' : 'border-line'
      }`}
    >
      <span
        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${
          highlight ? 'bg-primary-50 text-primary-600' : 'bg-stone-50 text-stone-400'
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <p className="text-xl font-bold tabular-nums text-ink">{value}</p>
      <p className="mt-0.5 text-xs text-ink-muted">{label}</p>
      {sub && <p className="mt-0.5 text-[11px] text-ink-faint">{sub}</p>}
    </div>
  )
}

export function PortalHome({ beat }: SceneProps) {
  const run = beat >= 1

  return (
    <PortalShell nav="/portal">
      <h1 className="text-2xl font-bold tracking-tight text-ink">
        Welcome back, {CLIENT.first}
      </h1>
      <p className="mt-1 text-sm text-ink-muted">Here&apos;s where things stand today.</p>

      <div className="mt-5 grid grid-cols-4 gap-4">
        <PortalStat value="1" label="Active projects" icon={FolderKanban} />
        <PortalStat
          value={INVOICE.remaining}
          label="Outstanding"
          sub="1 invoice"
          icon={Wallet}
          highlight
        />
        <PortalStat value="0" label="Awaiting you" icon={ClipboardList} />
        <PortalStat value="0" label="Unread messages" icon={MessageSquare} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Eyebrow>Active projects</Eyebrow>
        <span className="flex items-center gap-1 text-xs font-semibold text-primary-600">
          View all
          <ArrowUpRight className="h-3 w-3" aria-hidden />
        </span>
      </div>

      <div className="mt-2 rounded-2xl border border-line bg-surface p-4 shadow-soft">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-sm font-semibold text-ink">{PROJECT.name}</p>
          <Badge tone="green">Ongoing</Badge>
        </div>
        <Bar value={PROJECT.progress} run={run} className="mt-3" height="h-1.5" />
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-ink-muted">
            Start {PROJECT.start} · Due {PROJECT.deadline}
          </span>
          <span className="font-semibold text-emerald-600">On track</span>
        </div>
      </div>

      <div className="mt-6">
        <Eyebrow>Your delivery</Eyebrow>
        <div className="mt-2 rounded-2xl border border-line bg-surface p-4 shadow-soft">
          <p className="text-sm text-ink-muted">Total invested to date</p>
          <p className="mt-1 text-3xl font-bold tabular-nums text-ink">{INVOICE.total}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <PortalStat value="1" label="Active projects" icon={FolderKanban} />
        <PortalStat value="3" label="Deliverables shipped" icon={Truck} />
        <PortalStat value="< 1h" label="Typical reply time" icon={MessageSquare} />
      </div>
    </PortalShell>
  )
}

/* ── Scene: the project, from her chair ────────────────────────────────────── */
export function PortalProject({ beat }: SceneProps) {
  const run = beat >= 1

  return (
    <PortalShell nav="/portal/projects">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-ink-muted">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to projects
      </div>

      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-ink">{PROJECT.name}</h1>
        <Badge tone="green">Ongoing</Badge>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">Timeline</span>
        <span className="text-ink-muted">Due {PROJECT.deadline}</span>
      </div>
      <Bar value={PROJECT.progress} run={run} className="mt-2" />
      <p className="mt-2 text-xs text-ink-muted">
        Start {PROJECT.start} · {PROJECT.progress}% complete
      </p>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {[
          ['Budget', PROJECT.budget, 'text-ink'],
          ['Paid', INVOICE.total, 'text-emerald-600'],
          ['Balance', INVOICE.remaining, 'text-primary-600'],
        ].map(([label, value, tone]) => (
          <div
            key={label}
            className="rounded-2xl border border-line bg-surface p-4 text-center shadow-soft"
          >
            <p className={`text-xl font-bold tabular-nums ${tone}`}>{value}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{label}</p>
          </div>
        ))}
      </div>

      <Tabs
        className="mt-5"
        active="Deliverables"
        items={[
          { label: 'Overview', icon: LayoutGrid },
          { label: 'Deliverables', icon: Package },
          { label: 'Financials', icon: Wallet },
          { label: 'Files & docs', icon: FileText },
        ]}
      />

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-line bg-surface p-4 shadow-soft">
          <Eyebrow>Shared with you</Eyebrow>
          <ul className="mt-3 space-y-2">
            {['Homepage — final', 'Style tiles v2', 'Wireframe pack'].map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 rounded-xl border border-line px-3 py-2"
              >
                <Package className="h-4 w-4 flex-none text-stone-400" aria-hidden />
                <span className="min-w-0 flex-1 truncate text-sm text-ink">{f}</span>
                <Download className="h-4 w-4 flex-none text-stone-300" aria-hidden />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-4 shadow-soft">
          <Eyebrow>Invoices</Eyebrow>
          <div className="mt-3 rounded-xl border border-line px-3 py-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold tabular-nums text-ink">{INVOICE.number}</span>
              <Badge tone="green">{INVOICE.status}</Badge>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="text-sm font-bold tabular-nums text-ink">{INVOICE.total}</span>
              <span className="flex items-center gap-1 text-xs font-medium text-primary-600">
                <Download className="h-3.5 w-3.5" aria-hidden />
                Receipt
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-xl bg-amber-50 px-3 py-2">
            <span className="text-xs font-medium text-amber-900">Balance remaining</span>
            <span className="text-xs font-bold tabular-nums text-amber-900">
              {INVOICE.remaining}
            </span>
          </div>
        </div>
      </div>
    </PortalShell>
  )
}

/* ── Scene: she types ──────────────────────────────────────────────────────── */
export function PortalMessages({ beat }: SceneProps) {
  const sent = beat >= 2
  const typing = beat >= 3

  return (
    <PortalShell nav="/portal/messages" flush>
      <div className="flex h-full flex-col">
        <div className="flex flex-none items-center gap-3 border-b border-line px-6 py-3.5">
          <Avatar initials={STUDIO.initials} size="md" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">{STUDIO.name}</p>
            <p className="flex items-center gap-1.5 text-xs text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live
            </p>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 bg-stone-50/60 px-6 py-5">
          <div className="flex justify-center">
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-stone-500 shadow-sm ring-1 ring-stone-200/70">
              Today
            </span>
          </div>

          <div className="flex justify-start">
            <span className="max-w-[70%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-sm leading-snug text-stone-800 shadow-sm ring-1 ring-stone-200/70">
              The homepage is on staging whenever you want a look.
              <span className="mt-1 block text-right text-[10px] leading-none text-stone-400">
                9:20 am
              </span>
            </span>
          </div>

          {/* Hers — arrives on the click. */}
          <div
            className={`flex justify-end transition-all duration-[520ms] ease-[cubic-bezier(0.2,1.06,0.3,1)] ${
              sent ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-95 opacity-0'
            }`}
          >
            <span className="max-w-[70%] rounded-2xl rounded-br-md bg-primary-600 px-3.5 py-2 text-sm leading-snug text-white shadow-sm">
              {MESSAGES[0].body}
              <span className="mt-1 flex items-center justify-end gap-1 text-[10px] leading-none text-white/75">
                {MESSAGES[0].time}
                <Check className="h-3 w-3" aria-hidden />
              </span>
            </span>
          </div>

          {/* The live tell. */}
          <div
            className={`flex justify-start transition-all duration-[400ms] ${
              typing ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
            }`}
          >
            <span className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-stone-200/70">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="journey-dot h-1.5 w-1.5 rounded-full bg-stone-400"
                  style={{
                    animation: typing
                      ? `journey-typing 1.2s ease-in-out ${i * 160}ms infinite`
                      : 'none',
                  }}
                />
              ))}
              <span className="ml-1 text-[11px] font-medium text-stone-400">
                {STUDIO.owner} is typing
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-none items-center gap-3 border-t border-line bg-surface px-6 py-3">
          <span
            className={`flex h-11 min-w-0 flex-1 items-center rounded-full border border-stone-300 px-4 text-sm ${
              sent ? 'text-stone-400' : 'text-ink'
            }`}
          >
            {sent ? `Message ${STUDIO.name}…` : MESSAGES[0].body}
          </span>
          <Ring on={beat === 1} radius="rounded-full">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-600 text-white">
              <Send className="h-4 w-4" aria-hidden />
            </span>
          </Ring>
        </div>
      </div>

      <Tip on={beat === 1} x={-360} y={-190} align="right">
        One live thread per client, sitting in the same place as the work.
      </Tip>
    </PortalShell>
  )
}

/* ── Scene: and you answer ─────────────────────────────────────────────────── */
export function OwnerMessages({ beat }: SceneProps) {
  const replied = beat >= 1

  return (
    <OwnerShell nav="/messages" unread={replied ? 0 : 1}>
      <div className="flex h-full">
        {/* Thread list */}
        <div className="flex w-[300px] flex-none flex-col border-r border-stone-200/70 bg-white">
          <div className="flex items-center justify-between px-5 py-4">
            <h1 className="text-lg font-bold tracking-tight text-ink">Messages</h1>
            <span className="flex items-center gap-1 text-sm font-semibold text-primary-600">
              <Plus className="h-4 w-4" aria-hidden />
              New
            </span>
          </div>
          <div className="px-4 pb-3">
            <SearchInput placeholder="Search conversations" />
          </div>
          <div className="min-h-0 flex-1 space-y-1 px-3">
            <div className="flex items-center gap-3 rounded-xl bg-primary-50 px-3 py-2.5">
              <Avatar initials={CLIENT.initials} size="md" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink">{CLIENT.name}</span>
                <span className="block truncate text-xs text-ink-muted">
                  {replied ? MESSAGES[1].body : MESSAGES[0].body}
                </span>
              </span>
              <span className="flex-none text-[11px] text-ink-faint">Today</span>
            </div>
            {OTHER_THREADS.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-xl px-3 py-2.5">
                <Avatar initials={t.initials} size="md" tone="stone" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-stone-600">
                    {t.name}
                  </span>
                  <span className="block truncate text-xs text-ink-faint">{t.preview}</span>
                </span>
                <span className="flex-none text-[11px] text-ink-faint">{t.when}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversation */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-none items-center gap-3 border-b border-stone-200/70 bg-white px-6 py-3.5">
            <Avatar initials={CLIENT.initials} size="md" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{CLIENT.contact}</p>
              <p className="flex items-center gap-1.5 text-xs text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </p>
            </div>
            <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-primary-600">
              View client
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 bg-stone-50/60 px-6 py-5">
            <div className="flex justify-end">
              <span className="max-w-[70%] rounded-2xl rounded-br-md bg-primary-600 px-3.5 py-2 text-sm leading-snug text-white shadow-sm">
                The homepage is on staging whenever you want a look.
                <span className="mt-1 flex items-center justify-end gap-1 text-[10px] leading-none text-white/75">
                  9:20 am
                  <CheckCheck className="h-3 w-3" aria-hidden />
                </span>
              </span>
            </div>

            <div className="flex justify-start">
              <span className="max-w-[70%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-sm leading-snug text-stone-800 shadow-sm ring-1 ring-stone-200/70">
                {MESSAGES[0].body}
                <span className="mt-1 block text-right text-[10px] leading-none text-stone-400">
                  {MESSAGES[0].time}
                </span>
              </span>
            </div>

            <div
              className={`flex justify-end transition-all duration-[520ms] ease-[cubic-bezier(0.2,1.06,0.3,1)] ${
                replied ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-95 opacity-0'
              }`}
            >
              <span className="max-w-[70%] rounded-2xl rounded-br-md bg-primary-600 px-3.5 py-2 text-sm leading-snug text-white shadow-sm">
                {MESSAGES[1].body}
                <span className="mt-1 flex items-center justify-end gap-1 text-[10px] leading-none text-white/75">
                  {MESSAGES[1].time}
                  <CheckCheck className="h-3 w-3" aria-hidden />
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-none items-center gap-3 border-t border-stone-200/70 bg-white px-6 py-3">
            <span className="flex h-11 min-w-0 flex-1 items-center rounded-full border border-stone-300 px-4 text-sm text-stone-400">
              Write a message…
            </span>
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-600 text-white">
              <Send className="h-4 w-4" aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </OwnerShell>
  )
}
