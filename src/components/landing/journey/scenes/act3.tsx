'use client'

import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  FileImage,
  FileText,
  FolderKanban,
  IndianRupee,
  LayoutGrid,
  MoreHorizontal,
  Package,
  Pencil,
  Plus,
  Repeat,
  Trash2,
  TrendingUp,
  Upload,
  UploadCloud,
  UserPlus,
  Users,
  Video,
  X,
} from 'lucide-react'
import { CLIENT, INVOICE, MEETING, PROJECT, TEAM } from '../data'
import { OTHER_MEETINGS, OTHER_PROJECTS } from '../app/cast'
import { OwnerShell, Page } from '../app/shells'
import {
  Avatar,
  Badge,
  Bar,
  Btn,
  Card,
  Count,
  Eyebrow,
  Field,
  IconBtn,
  KanbanCol,
  PageHead,
  Ring,
  SearchInput,
  Select,
  StatCard,
  StatChip,
  SearchInput as Search2,
  Tabs,
  Tip,
  Toggle,
} from '../app/ui'
import type { SceneProps } from './types'

/* ══════════════════════════════════════════════════════════════════════════
   ACT III — THE WORK
   Seven scenes over one project: created, tracked, paid, staffed, delivered,
   scheduled, and finally seen among everything else on the board.
   ══════════════════════════════════════════════════════════════════════════ */

const TABS = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Payments & Invoices', icon: CreditCard },
  { label: 'Team', icon: Users },
  { label: 'Deliverables & Files', icon: Package },
  { label: 'Tasks', icon: CheckSquare },
  { label: 'More', icon: MoreHorizontal },
]

/** Shared project-detail header: title, status, the four stat cards, the tabs. */
function ProjectHead({
  tab,
  status = 'Ongoing',
  paid = '₹0',
  remaining = PROJECT.budget,
  members = 0,
  run = true,
  statusRing,
}: {
  tab: string
  status?: string
  paid?: string
  remaining?: string
  members?: number
  run?: boolean
  statusRing?: boolean
}) {
  const badge = status === 'Completed' ? 'blue' : status === 'New' ? 'purple' : 'green'
  const statusEl = (
    <Badge tone={badge} icon={status === 'Completed' ? CheckCircle2 : undefined}>
      {status}
    </Badge>
  )

  return (
    <>
      <div className="mb-4 flex shrink-0 items-center gap-2 text-sm font-medium text-ink-muted">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to Projects
      </div>

      <div className="mb-5 flex shrink-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold tracking-tight text-ink">{PROJECT.name}</h1>
          <div className="mt-2 flex items-center gap-3">
            {statusRing ? <Ring on radius="rounded-full">{statusEl}</Ring> : statusEl}
            <span className="flex items-center gap-1 text-sm text-ink-muted">
              Client:{' '}
              <span className="font-medium text-ink">{CLIENT.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Btn tone="secondary" small icon={Trash2} className="!text-red-600">
            Move to Trash
          </Btn>
          <Btn small icon={Pencil}>
            Edit Project
          </Btn>
        </div>
      </div>

      <div className="mb-5 grid shrink-0 grid-cols-4 gap-4">
        <StatCard label="Total Budget" value={PROJECT.budget} icon={IndianRupee} tone="purple" />
        <StatCard
          label="Total Paid"
          value={run && paid !== '₹0' ? <Count to={INVOICE.totalValue} run prefix="₹" /> : paid}
          icon={IndianRupee}
          tone="emerald"
        />
        <StatCard label="Remaining" value={remaining} icon={TrendingUp} tone="blue" />
        <StatCard label="Team Members" value={String(members)} icon={Users} tone="orange" />
      </div>

      <Tabs className="mb-5 shrink-0" active={tab} items={TABS} />
    </>
  )
}

/* ── Scene: create the project ─────────────────────────────────────────────── */
export function ProjectNew({ beat }: SceneProps) {
  const filling = beat >= 1

  return (
    <OwnerShell nav="/projects">
      <Page>
        <div className="mb-4 flex shrink-0 items-center gap-2 text-sm font-medium text-ink-muted">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back
        </div>
        <div className="mb-5 shrink-0">
          <h1 className="text-2xl font-bold tracking-tight text-ink">Create New Project</h1>
          <p className="mt-1 text-sm text-ink-muted">Set up a new project for your client</p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <Card className="!p-6">
            <h2 className="mb-4 text-base font-semibold text-ink">Basic Information</h2>

            <div className="space-y-4">
              <Field label="Project Name" value={filling ? PROJECT.name : ''} placeholder="Brand website" required />

              <div>
                <span className="label">Project Type</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['One-off Project', 'Fixed scope & budget'],
                    ['Monthly Retainer', 'Recurring monthly fee'],
                  ].map(([t, sub]) => {
                    const on = t === PROJECT.type
                    return (
                      <span
                        key={t}
                        className={`rounded-xl border px-4 py-3 transition-colors duration-300 ${
                          on ? 'border-primary-400 bg-primary-50/70' : 'border-stone-200 bg-white'
                        }`}
                      >
                        <span className={`block text-sm font-semibold ${on ? 'text-ink' : 'text-stone-600'}`}>
                          {t}
                        </span>
                        <span className="mt-0.5 block text-xs text-ink-muted">{sub}</span>
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select label="Client" value={CLIENT.name} required />
                <Select label="Status" value="Ongoing" required />
              </div>

              <Field label="Budget (₹)" value={filling ? '1,20,000' : ''} placeholder="0.00" required />

              <div className="grid grid-cols-2 gap-4">
                <Field label="Start Date" value={filling ? PROJECT.start : ''} placeholder="Select date" />
                <Field label="Deadline" value={filling ? PROJECT.deadline : ''} placeholder="Select date" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-stone-100 pt-5">
              <span className="flex items-center gap-2 text-xs text-ink-faint">
                <Plus className="h-3.5 w-3.5" aria-hidden />
                Domain &amp; hosting renewal tracking — optional
              </span>
              <span className="flex items-center gap-3">
                <Btn tone="secondary" small>
                  Cancel
                </Btn>
                <Ring on={beat === 1} radius="rounded-xl">
                  <Btn small icon={Check}>
                    Create Project
                  </Btn>
                </Ring>
              </span>
            </div>
          </Card>
        </div>

        <Tip on={beat === 1} x={200} y={318}>
          One-off or monthly retainer — Clienter bills, tracks and renews each differently.
        </Tip>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: overview & progress ────────────────────────────────────────────
   Act V returns to this exact screen to complete the project, so the status
   controls are props rather than a second copy of the layout — the visitor has
   to recognise it as the same place.
   ────────────────────────────────────────────────────────────────────────── */
export function ProjectOverview({
  beat,
  status = 'Ongoing',
  statusRing,
}: SceneProps & { status?: string; statusRing?: boolean }) {
  const posted = beat >= 1

  return (
    <OwnerShell nav="/projects">
      <Page>
        <ProjectHead
          tab="Overview"
          members={2}
          paid={INVOICE.total}
          remaining={INVOICE.remaining}
          status={status}
          statusRing={statusRing}
        />

        <div className="grid min-h-0 flex-1 grid-cols-5 gap-5">
          <Card className="col-span-3 !p-5">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
                <Activity className="h-5 w-5 text-primary-600" aria-hidden />
                Progress
              </h3>
              <span className="text-xs text-ink-muted">
                {posted ? '3 done · 1 in progress' : '2 done · 1 in progress'}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div
                className={`flex items-start gap-3 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  posted ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-ink">Homepage build</span>
                  <span className="block text-xs text-ink-muted">
                    Hero, pricing and case-study sections are live on staging.
                  </span>
                </span>
                <Badge tone="green" icon={Eye}>
                  Shared
                </Badge>
              </div>

              {[
                ['Style tiles approved', 'Typography and colour signed off by Ananya.'],
                ['Wireframes', 'All eight templates, desktop and mobile.'],
              ].map(([t, d]) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" aria-hidden />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-ink line-through decoration-stone-300">
                      {t}
                    </span>
                    <span className="block text-xs text-ink-muted">{d}</span>
                  </span>
                  <span className="flex flex-none items-center gap-2 text-stone-300">
                    <Eye className="h-4 w-4" aria-hidden />
                    <Trash2 className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 border-t border-stone-100 pt-4">
              <Field placeholder="Title (e.g. Design phase)" />
              <Field placeholder="What's happening now?" area />
              <Btn small icon={Plus}>
                Add update
              </Btn>
            </div>
          </Card>

          <div className="col-span-2 flex min-h-0 flex-col gap-4">
            <div className="rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-orange-50/60 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-ink-muted">Deadline</p>
                <span className="text-xs font-semibold text-primary-600">Set dates</span>
              </div>
              <p className="mt-1 text-lg font-bold text-ink">{PROJECT.deadline}</p>
              <p className="mt-1 text-xs text-ink-muted">21 days left · started {PROJECT.start}</p>
              <Bar value={PROJECT.progress} run className="mt-3" height="h-1.5" />
            </div>

            <Card className="!p-5">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
                  <ClipboardCheck className="h-5 w-5 text-primary-600" aria-hidden />
                  Approvals
                </h3>
                <span className="text-xs font-semibold text-primary-600">Client portal</span>
              </div>
              <div className="mt-3 space-y-2">
                <Field placeholder="What needs sign-off? e.g. Homepage design v2" />
                <Btn tone="secondary" small icon={Plus}>
                  Request approval
                </Btn>
              </div>
              <div
                className={`mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 transition-all duration-500 delay-200 ${
                  posted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <CheckCircle2 className="h-4 w-4 flex-none text-emerald-600" aria-hidden />
                <p className="text-xs font-medium text-emerald-900">
                  Style tiles approved by {CLIENT.first} · 13 Jul
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: get paid ── HERO ────────────────────────────────────────────────
   One recorded figure produces a numbered GST invoice, a downloadable receipt,
   and a balance that updates itself. Everything on screen derives from ₹40,000.
   ────────────────────────────────────────────────────────────────────────── */
export function ProjectPayments({ beat }: SceneProps) {
  const paid = beat >= 2
  const settled = beat >= 3

  return (
    <OwnerShell nav="/projects">
      <Page>
        <ProjectHead
          tab="Payments & Invoices"
          members={2}
          paid={paid ? INVOICE.total : '₹0'}
          remaining={paid ? INVOICE.remaining : PROJECT.budget}
          run={paid}
        />

        {/* The app's own arrangement: payments and team payouts side by side,
            invoices on their own row underneath. */}
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-5">
          {/* Payments */}
          <Card className="flex min-h-0 flex-col !p-5">
            <div className="flex shrink-0 items-center justify-between">
              <h3 className="text-base font-semibold text-ink">Payments</h3>
              <span className="text-right">
                <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-faint">
                  Total received
                </span>
                <span className="block text-sm font-semibold tabular-nums text-emerald-600">
                  {paid ? INVOICE.total : '₹0'}
                </span>
              </span>
            </div>

            {paid ? (
              <div
                className={`mt-4 transition-all duration-[560ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  paid ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xl font-semibold tabular-nums text-ink">
                      {INVOICE.subtotal}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-muted">Advance against the build</p>
                  </div>
                  <span className="text-xs text-ink-faint">{INVOICE.short}</span>
                </div>
                <div className="mt-2.5 flex items-center gap-4 text-xs font-medium">
                  <span className="flex items-center gap-1 text-primary-600">
                    <FileText className="h-3.5 w-3.5" aria-hidden />
                    View Invoice
                  </span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Pencil className="h-3.5 w-3.5" aria-hidden />
                    Edit
                  </span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    Delete
                  </span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    History
                  </span>
                </div>
                <div className="mt-4 border-t border-stone-100 pt-4">
                  <span className="btn-primary w-full">
                    <Plus className="h-4 w-4" aria-hidden />
                    Add Payment
                  </span>
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-3 border-t border-stone-100 pt-4">
                <p className="py-1 text-center text-sm text-ink-muted">No payments recorded yet</p>
                <Field label="Amount (₹)" value="40,000" />
                <Field label="Details" value="Advance against the build" area />
                <div className="flex items-center justify-end gap-3">
                  <Btn tone="secondary" small>
                    Cancel
                  </Btn>
                  <Ring on={beat === 1} radius="rounded-xl">
                    <Btn small>Add Payment</Btn>
                  </Ring>
                </div>
              </div>
            )}
          </Card>

          {/* Team payouts sit here in the app, even when there are none yet. */}
          <Card className="flex min-h-0 flex-col !p-5">
            <h3 className="shrink-0 text-base font-semibold text-ink">Team Member Payments</h3>
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3">
              <p className="text-sm text-ink-muted">No team payments recorded yet.</p>
              <Btn tone="secondary" small icon={Users}>
                Add team payment
              </Btn>
            </div>
          </Card>
        </div>

        {/* The invoice the payment produced. */}
        <Card className="mt-5 shrink-0 !p-5">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
              <FileText className="h-5 w-5 text-blue-600" aria-hidden />
              Invoices
            </h3>
            <span className="flex items-center gap-1 text-sm font-semibold text-primary-600">
              <Plus className="h-4 w-4" aria-hidden />
              New Invoice
            </span>
          </div>

          {paid ? (
            <div
              className={`mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 transition-all duration-[680ms] ease-[cubic-bezier(0.2,1.04,0.3,1)] ${
                paid ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-95 opacity-0'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="flex items-center gap-2.5 text-sm font-semibold tabular-nums text-ink">
                    {INVOICE.number}
                    <span
                      className={`transition-all delay-200 duration-500 ${
                        settled ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                      }`}
                    >
                      <Badge tone="green">{INVOICE.status}</Badge>
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">
                    Issued {INVOICE.issued} · {INVOICE.subtotal} + {INVOICE.gstLabel}{' '}
                    {INVOICE.gst}
                  </p>
                  <div className="mt-2.5 flex items-center gap-4 text-xs font-medium">
                    <span
                      className={`flex items-center gap-1 text-emerald-700 transition-opacity delay-300 duration-500 ${
                        settled ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden />
                      Download PDF
                    </span>
                    <span className="flex items-center gap-1 text-amber-600">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      Mark Due
                    </span>
                    <span className="flex items-center gap-2 text-stone-400">
                      <Pencil className="h-3.5 w-3.5" aria-hidden />
                      <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-lg font-semibold tabular-nums text-ink">{INVOICE.total}</p>
                  <p className="mt-0.5 text-[11px] text-ink-faint">1 item</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="py-6 text-center text-sm text-ink-muted">No invoices yet</p>
          )}
        </Card>

        <Tip on={beat === 1} x={300} y={620}>
          Record the payment — the GST invoice numbers itself and the PDF is ready to send.
        </Tip>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: the team ───────────────────────────────────────────────────────── */
export function ProjectTeam({ beat }: SceneProps) {
  const added = beat >= 2

  return (
    <OwnerShell nav="/projects">
      <Page>
        <ProjectHead
          tab="Team"
          members={added ? 2 : 1}
          paid={INVOICE.total}
          remaining={INVOICE.remaining}
        />

        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <Card className="shrink-0 !p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <EyeOff className="h-5 w-5 text-stone-400" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink">Visible to client</p>
                  <p className="text-xs text-ink-muted">
                    Off — your client cannot see the team roster.
                  </p>
                </div>
              </div>
              <Toggle on={false} />
            </div>
          </Card>

          <Card className="shrink-0 !p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-ink">Team Members</h3>
              <Ring on={beat === 1} radius="rounded-lg">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  <UserPlus className="h-4 w-4" aria-hidden />
                  Add Member
                </span>
              </Ring>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {TEAM.map((m, i) => (
                <div
                  key={m.name}
                  className={`rounded-xl border border-stone-200/70 p-4 transition-all duration-[600ms] ease-[cubic-bezier(0.2,1.04,0.3,1)] ${
                    i === 1 && !added ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Avatar initials={m.initials} size="lg" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink">{m.name}</p>
                      <p className="truncate text-xs text-ink-muted">{m.email}</p>
                    </div>
                    <span className="flex flex-none items-center gap-2 text-stone-300">
                      <Pencil className="h-4 w-4" aria-hidden />
                      <X className="h-4 w-4" aria-hidden />
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-ink-muted">
                      Paid <span className="font-semibold text-emerald-600">{m.paid}</span>
                    </span>
                    <span className="text-ink-muted">of {m.of}</span>
                  </div>
                  <Bar value={m.pct} run tone="emerald" className="mt-1.5" height="h-1.5" />

                  <span className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-50 py-2 text-sm font-semibold text-primary-700">
                    <CreditCard className="h-4 w-4" aria-hidden />
                    Pay {m.name}
                  </span>
                  <p className="mt-2 text-center text-[11px] text-ink-faint">{m.role}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Tip on={beat === 1} x={430} y={392}>
          Assign whoever is building it, and track what you owe each of them against this project.
        </Tip>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: deliverables & files ───────────────────────────────────────────── */
export function ProjectFiles({ beat }: SceneProps) {
  const shipped = beat >= 1

  return (
    <OwnerShell nav="/projects">
      <Page>
        <ProjectHead
          tab="Deliverables & Files"
          members={2}
          paid={INVOICE.total}
          remaining={INVOICE.remaining}
        />

        <div className="grid min-h-0 flex-1 grid-cols-2 items-start gap-5">
          <Card className="!p-5">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
                <Package className="h-5 w-5 text-primary-600" aria-hidden />
                Deliverables
              </h3>
              <span className="text-xs text-ink-muted">3 shipped</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: 'Homepage — final', when: '2 hours ago', shared: true, fresh: true },
                { name: 'Style tiles v2', when: 'yesterday', shared: true },
                { name: 'Wireframe pack', when: '3 days ago', shared: true },
              ].map((d) => (
                <li
                  key={d.name}
                  className={`flex items-center gap-3 rounded-xl border border-stone-200/70 px-3 py-2.5 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    d.fresh && !shipped ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-stone-50">
                    <Package className="h-4 w-4 text-stone-400" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">{d.name}</span>
                    <span className="block text-xs text-ink-faint">{d.when}</span>
                  </span>
                  <Badge tone="green" icon={Eye}>
                    Shared
                  </Badge>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="!p-5">
            <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
              <UploadCloud className="h-5 w-5 text-primary-600" aria-hidden />
              Project Files
            </h3>

            <div className="mt-4 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-stone-300 bg-stone-50/60 py-5">
              <Upload className="h-5 w-5 text-stone-400" aria-hidden />
              <p className="text-xs font-medium text-ink-muted">
                Drop files here, or click to upload
              </p>
              <p className="text-[11px] text-ink-faint">Up to 25 MB each</p>
            </div>

            <ul className="mt-4 space-y-2.5">
              {[
                { name: 'Homepage-v3.fig', size: '18.4 MB', icon: FileImage, fresh: true },
                { name: 'Copy-deck.pdf', size: '640 KB', icon: FileText },
                { name: 'Logo-lockups.zip', size: '7.2 MB', icon: Package },
              ].map((f) => {
                const Icon = f.icon
                return (
                  <li
                    key={f.name}
                    className={`flex items-center gap-3 rounded-xl border border-stone-200/70 px-3 py-2.5 transition-all delay-100 duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      f.fresh && !shipped ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-none text-stone-400" aria-hidden />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                      {f.name}
                    </span>
                    <span className="flex-none text-xs text-ink-faint">{f.size}</span>
                    <Download className="h-4 w-4 flex-none text-stone-300" aria-hidden />
                  </li>
                )
              })}
            </ul>
          </Card>
        </div>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: schedule the kickoff ───────────────────────────────────────────── */
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16]
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const DATES = [12, 13, 14, 15, 16, 17, 18]

export function MeetingNew({ beat }: SceneProps) {
  const booked = beat >= 2

  return (
    <OwnerShell nav="/meetings">
      <Page className="relative">
        <div className="mb-4 flex shrink-0 flex-wrap items-center gap-3">
          <PageHead icon={CalendarDays} title="Meetings" sub="Your schedule in Asia/Kolkata" />
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <span className="flex items-center gap-1 rounded-xl bg-stone-100 p-1">
              {['Agenda', 'Week', 'Month'].map((v) => (
                <span
                  key={v}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
                    v === 'Week' ? 'bg-white text-ink shadow-soft' : 'text-stone-500'
                  }`}
                >
                  {v}
                </span>
              ))}
            </span>
            <Btn small icon={Plus}>
              Schedule
            </Btn>
          </div>
        </div>

        <div className="mb-3 flex shrink-0 items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-ink">12 Jul – 18 Jul 2026</h2>
          <span className="flex items-center gap-2">
            <Btn tone="secondary" small>
              Today
            </Btn>
            <IconBtn icon={ChevronLeft} />
            <IconBtn icon={ChevronRight} />
          </span>
        </div>

        {/* Week grid */}
        <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-stone-200/70 bg-white">
          <div className="grid" style={{ gridTemplateColumns: '56px repeat(7, 1fr)' }}>
            <div className="border-b border-r border-stone-200/70" />
            {DAYS.map((d, i) => (
              <div
                key={d}
                className="border-b border-r border-stone-200/70 py-2 text-center last:border-r-0"
              >
                <p className="text-[11px] font-semibold tracking-wide text-ink-faint">{d}</p>
                <p
                  className={`mx-auto mt-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                    i === 2 ? 'bg-primary-600 text-white' : 'text-ink'
                  }`}
                >
                  {DATES[i]}
                </p>
              </div>
            ))}

            {HOURS.map((h) => (
              <div key={h} className="contents">
                <div className="h-[42px] border-b border-r border-stone-200/70 pr-2 pt-1 text-right text-[10px] text-ink-faint">
                  {h > 12 ? `${h - 12} PM` : h === 12 ? '12 PM' : `${h} AM`}
                </div>
                {DAYS.map((d, di) => {
                  const other = OTHER_MEETINGS.find((m) => m.day === di && m.hour === h)
                  const kickoff = di === 6 && h === 11
                  return (
                    <div
                      key={d}
                      className="relative h-[42px] border-b border-r border-stone-200/70 last:border-r-0"
                    >
                      {other && (
                        <span className="absolute inset-x-1 top-1 truncate rounded-md bg-stone-100 px-1.5 py-1 text-[10px] font-medium text-stone-500">
                          {other.title}
                        </span>
                      )}
                      {kickoff && (
                        <span
                          className={`absolute inset-x-1 top-1 rounded-md bg-primary-600 px-1.5 py-1 text-[10px] font-semibold text-white shadow-ember transition-all duration-[620ms] ease-[cubic-bezier(0.2,1.06,0.3,1)] ${
                            booked ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                          }`}
                        >
                          <span className="block truncate">{MEETING.title}</span>
                          <span className="block truncate font-normal text-white/80">
                            {CLIENT.name}
                          </span>
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <div
          className={`absolute inset-0 z-40 flex items-center justify-center bg-ink/35 transition-all duration-[560ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            booked ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className={`w-[620px] rounded-2xl bg-white p-6 shadow-lift-4 transition-transform duration-[560ms] ${
              booked ? 'scale-95' : 'scale-100'
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight text-ink">Schedule Meeting</h2>
              <X className="h-5 w-5 text-stone-400" aria-hidden />
            </div>

            <div className="space-y-4">
              <Field label="Meeting Title" value={MEETING.title} required />
              <Select label="Client" value={CLIENT.name} />
              <div className="grid grid-cols-3 gap-3">
                <Field label="Date" value={MEETING.date} required />
                <Field label="Time" value={`${MEETING.time} ${MEETING.zone}`} required />
                <Select label="Duration" value={MEETING.duration} />
              </div>
              <Field
                label="Attendees (emails)"
                value={CLIENT.email}
                helper="They'll receive the Google Calendar invite."
              />

              <div className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 px-4 py-3">
                <span className="flex items-center gap-3">
                  <Video className="h-5 w-5 flex-none text-primary-600" aria-hidden />
                  <span>
                    <span className="block text-sm font-semibold text-ink">Add Google Meet</span>
                    <span className="block text-xs text-ink-muted">
                      Generate a Meet link on your Google Calendar
                    </span>
                  </span>
                </span>
                <Toggle on />
              </div>

              <Select label="Remind me" value={MEETING.reminder} />
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <Btn tone="secondary" small>
                Close
              </Btn>
              <Ring on={beat === 1} radius="rounded-xl">
                <Btn small>Schedule Meeting</Btn>
              </Ring>
            </div>
          </div>
        </div>

        <Tip on={beat === 1} x={848} y={752} align="center">
          Sync your meetings with Google Calendar and generate Google Meet links automatically —
          plus a reminder 30 minutes before.
        </Tip>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: the projects board ─────────────────────────────────────────────── */
interface ProjectRow {
  name: string
  client: string
  desc: string
  paid: string
  budget: string
  pct: number
  pending: string
  deadline: string
  members: number
  status: string
}

function ProjectCard({
  name,
  client,
  desc,
  paid,
  budget,
  pct,
  pending,
  deadline,
  members,
  status,
  subject,
}: ProjectRow & { subject?: boolean }) {
  const tone = status === 'Completed' ? 'blue' : status === 'Ongoing' ? 'green' : 'purple'
  return (
    <div className={`card !p-4 ${subject ? '!border-primary-200 ring-1 ring-primary-200' : ''}`}>
      <div className="flex items-start justify-between gap-2">
        <h4 className="min-w-0 truncate text-sm font-semibold text-ink">{name}</h4>
        <Badge tone={tone as 'blue' | 'green' | 'purple'}>{status}</Badge>
      </div>
      <p className="mt-0.5 truncate text-xs text-ink-muted">{client}</p>
      <p className="mt-2 truncate text-xs text-ink-faint">{desc}</p>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-ink-muted">Budget progress</span>
        <span className="font-medium tabular-nums text-ink">
          {paid} / {budget}
        </span>
      </div>
      <Bar value={pct} run tone={pct >= 100 ? 'emerald' : 'orange'} className="mt-1.5" height="h-1.5" />
      {pct < 100 && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-primary-600">
          <TrendingUp className="h-3 w-3" aria-hidden />
          Pending: {pending}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-2.5 text-xs text-ink-faint">
        <span className="flex items-center gap-1">
          <CalendarDays className="h-3 w-3" aria-hidden />
          {deadline}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" aria-hidden />
          {members} member{members === 1 ? '' : 's'}
        </span>
      </div>
    </div>
  )
}

export function ProjectsBoard() {
  const nova = {
    name: PROJECT.name,
    client: CLIENT.name,
    desc: 'Eight templates, copy and build',
    paid: INVOICE.total,
    budget: PROJECT.budget,
    pct: 39,
    pending: INVOICE.remaining,
    deadline: '15/08/2026',
    members: 2,
    status: 'Ongoing',
  } as const

  return (
    <OwnerShell nav="/projects">
      <Page>
        <div className="mb-4 flex shrink-0 flex-wrap items-center gap-3">
          <PageHead
            icon={FolderKanban}
            title="Projects"
            sub="Manage your client projects and budgets"
          />
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <StatChip icon={LayoutGrid} label="Total" value="9" />
            <StatChip icon={TrendingUp} label="Ongoing" value="2" />
            <StatChip icon={IndianRupee} label="Budget" value="₹3,47,000" />
            <StatChip icon={IndianRupee} label="Paid" value="₹2,09,200" />
            <StatChip icon={Repeat} label="Retainers" value="1 · ₹18,000/mo" tone="orange" />
          </div>
        </div>

        <div className="mb-3 flex shrink-0 items-center gap-2">
          <div className="flex-1">
            <Search2 placeholder="Search projects, clients, or descriptions..." />
          </div>
          <Btn small icon={Plus}>
            New
          </Btn>
          <Btn tone="secondary" small icon={Download}>
            CSV
          </Btn>
          <Btn tone="secondary" small icon={Trash2}>
            Trash
          </Btn>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-3 gap-4">
          <KanbanCol dot="bg-purple-400" title="New" count={4} addLabel="Add project">
            <ProjectCard {...OTHER_PROJECTS[0]} />
            <ProjectCard {...OTHER_PROJECTS[2]} />
          </KanbanCol>
          <KanbanCol dot="bg-emerald-400" title="Ongoing" count={2} addLabel="Add project">
            <ProjectCard {...nova} subject />
            <ProjectCard {...OTHER_PROJECTS[1]} />
          </KanbanCol>
          <KanbanCol dot="bg-blue-400" title="Completed" count={3} addLabel="Add project">
            <ProjectCard {...OTHER_PROJECTS[3]} />
          </KanbanCol>
        </div>
      </Page>
    </OwnerShell>
  )
}
