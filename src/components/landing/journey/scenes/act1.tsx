'use client'

import {
  Building2,
  CalendarClock,
  CheckCircle2,
  CheckSquare,
  Download,
  Phone,
  Plus,
  SlidersHorizontal,
  Target,
  Trash2,
  TrendingUp,
  Trophy,
  Upload,
  X,
  XCircle,
} from 'lucide-react'
import { CLIENT, LEAD_STAGES } from '../data'
import { OTHER_LEADS } from '../app/cast'
import { OwnerShell, Page } from '../app/shells'
import {
  Avatar,
  Badge,
  Btn,
  Card,
  Field,
  IconBtn,
  KanbanCol,
  PageHead,
  Ring,
  SearchInput,
  Select,
  StatChip,
  StatChipDouble,
  Tip,
} from '../app/ui'
import type { SceneProps } from './types'

/* ══════════════════════════════════════════════════════════════════════════
   ACT I — THE LEAD
   A stranger becomes a deal you can see. Two scenes: the board she lands on,
   and the drawer that turns her into a client.
   ══════════════════════════════════════════════════════════════════════════ */

/** Board geometry, in stage pixels: four columns across the 1136px content area
    with the app's `gap-4`. The flying card shares this coordinate system, so the
    drag is one transition of `left` rather than a re-parent that can tear. */
const COL_W = 272
const COL_STEP = 288
const CARD_TOP = 92

const WhatsAppIcon = () => (
  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
)

/** The app's LeadKanbanCard. */
function LeadCard({
  name,
  company,
  phone,
  source,
  tone,
  value,
  followUp,
  converted,
  dragging,
  won,
}: {
  name: string
  company: string
  phone: string
  source: string
  tone: 'amber' | 'green' | 'purple' | 'blue' | 'gray' | 'pink' | 'teal'
  value?: string
  followUp?: string
  converted?: boolean
  dragging?: boolean
  won?: boolean
}) {
  return (
    <div
      className={`card !p-4 ${
        converted ? '!border-emerald-200 ring-1 ring-emerald-200' : ''
      } ${dragging ? 'rotate-1 shadow-soft-lg' : ''}`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-semibold text-ink">{name}</h4>
          <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-ink-muted">
            <Building2 className="h-3 w-3 shrink-0 text-stone-400" aria-hidden />
            {company}
          </p>
        </div>
        {value && (
          <span className="whitespace-nowrap text-sm font-semibold tabular-nums text-ink">
            {value}
          </span>
        )}
      </div>

      <p className="mb-2 flex items-center gap-1 text-xs text-ink-muted">
        <Phone className="h-3 w-3 text-stone-400" aria-hidden />
        {phone}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-stone-100 pt-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <Badge tone={tone}>{source}</Badge>
          {won ? (
            <Badge tone="green" icon={CheckCircle2}>
              Won
            </Badge>
          ) : (
            followUp && (
              <Badge tone="gray" icon={CalendarClock}>
                {followUp}
              </Badge>
            )
          )}
        </div>
        {!won && (
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
            <WhatsAppIcon />
            Follow up
          </span>
        )}
      </div>
    </div>
  )
}

/** The invisible stand-in the travelling card leaves behind. Never a measured
    height — a hardcoded one drifts the moment a line rewraps. */
function NovaSlot({ won }: { won?: boolean }) {
  return (
    <div className="invisible" aria-hidden>
      <LeadCard
        name={CLIENT.contact}
        company={CLIENT.name}
        phone={CLIENT.phone}
        source={CLIENT.sourceLabel}
        tone="pink"
        value={CLIENT.value}
        won={won}
      />
    </div>
  )
}

/* ── Scene: the leads board ────────────────────────────────────────────────
   Beat 2 drags Nova Studio from Qualified into Won. Everything else on the
   board is somebody else's deal, so the subject is never in doubt.
   ────────────────────────────────────────────────────────────────────────── */
export function LeadsBoard({ beat }: SceneProps) {
  const dragging = beat === 2
  const won = beat >= 2
  const col = won ? 3 : 2

  return (
    <OwnerShell nav="/leads">
      <Page>
        {/* Header: title, stat chips, actions — the app's own order. */}
        <div className="mb-4 flex shrink-0 flex-wrap items-center gap-3">
          <PageHead icon={Target} title="Leads" sub="Your sales pipeline" />

          <div className="flex flex-1 flex-wrap items-center gap-2">
            <StatChip icon={Target} label="Open" value={won ? '21' : '22'} />
            <StatChip icon={TrendingUp} label="Pipeline" value="₹8,42,000" />
            <StatChipDouble
              icon={Trophy}
              a={['Won / mo', won ? '6' : '5']}
              b={['Win rate', '68%']}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Btn tone="secondary" small icon={CheckSquare}>
              Select
            </Btn>
            <Btn tone="secondary" small icon={Trash2}>
              Trash
            </Btn>
            <Btn tone="secondary" small icon={SlidersHorizontal}>
              Stages
            </Btn>
            <Btn small icon={Plus}>
              Lead
            </Btn>
          </div>
        </div>

        {/* Search + import/export */}
        <div className="mb-3 flex shrink-0 items-center gap-2">
          <div className="flex-1">
            <SearchInput placeholder="Search leads by name, company, email, phone..." />
          </div>
          <Btn tone="secondary" small icon={Upload}>
            Import
          </Btn>
          <Btn tone="secondary" small icon={Download}>
            Export
          </Btn>
        </div>

        {/* Board */}
        <div className="relative min-h-0 flex-1">
          {LEAD_STAGES.map((s, i) => (
            <div
              key={s.name}
              className="absolute bottom-0 top-0"
              style={{ left: i * COL_STEP, width: COL_W }}
            >
              <KanbanCol
                dot={s.dot}
                title={s.name}
                count={i === 2 ? (won ? 2 : 3) : i === 3 ? (won ? 6 : 5) : s.count}
                over={dragging && i === 3}
                className="h-full"
              >
                {i === 2 && !won && <NovaSlot />}
                {i === 3 && won && <NovaSlot won />}
                {i === 0 && (
                  <>
                    <LeadCard {...OTHER_LEADS[0]} tone="amber" />
                    <LeadCard {...OTHER_LEADS[4]} tone="gray" />
                  </>
                )}
                {i === 1 && <LeadCard {...OTHER_LEADS[3]} tone="blue" value="₹1,10,000" />}
                {i === 2 && <LeadCard {...OTHER_LEADS[2]} tone="purple" value="₹32,000" />}
                {i === 3 && <LeadCard {...OTHER_LEADS[1]} tone="green" value="₹80,000" converted won />}
              </KanbanCol>
            </div>
          ))}

          {/* The subject. */}
          <div
            className="absolute transition-[left,top,transform] duration-[820ms] ease-[cubic-bezier(0.32,1.02,0.28,1)]"
            style={{
              left: col * COL_STEP + 12,
              width: COL_W - 24,
              top: CARD_TOP,
              transform: dragging ? 'rotate(1.5deg) scale(1.02)' : 'none',
              zIndex: 20,
            }}
          >
            <LeadCard
              name={CLIENT.contact}
              company={CLIENT.name}
              phone={CLIENT.phone}
              source={CLIENT.sourceLabel}
              tone="pink"
              value={CLIENT.value}
              won={won}
              dragging={dragging}
            />
          </div>
        </div>

        <Tip on={beat === 1} x={700} y={640}>
          Your own stages, and every lead tagged with where it came from. Drag it across as the
          deal moves.
        </Tip>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: the lead drawer ────────────────────────────────────────────────
   Everything the lead accumulated, in one panel, with the one button that
   turns it into a client.
   ────────────────────────────────────────────────────────────────────────── */
export function LeadDrawer({ beat }: SceneProps) {
  return (
    <div className="relative h-full">
      <LeadsBoard beat={3} reduced />

      {/* Backdrop */}
      <div className="absolute inset-0 z-30 bg-ink/35" />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 z-40 flex w-[950px] flex-col bg-canvas shadow-lift-4">
        <div className="flex items-start justify-between gap-4 px-7 pb-4 pt-6">
          <div className="min-w-0">
            <h2 className="truncate text-2xl font-bold tracking-tight text-ink">{CLIENT.name}</h2>
            <span className="mt-1.5 inline-flex">
              <Badge tone="green">Won</Badge>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Btn tone="secondary" small icon={XCircle} className="!text-red-600">
              Mark Lost
            </Btn>
            <Ring on={beat === 1} radius="rounded-xl">
              <Btn small icon={CheckCircle2}>
                Convert to Client
              </Btn>
            </Ring>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl text-stone-400">
              <Trash2 className="h-4 w-4" aria-hidden />
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl text-stone-400">
              <X className="h-5 w-5" aria-hidden />
            </span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-5 gap-5 px-7 pb-6">
          <Card className="col-span-3 !p-5">
            <h3 className="mb-4 text-base font-semibold text-ink">Lead Details</h3>
            <div className="space-y-3">
              <Field label="Contact Name" value={CLIENT.contact} />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Company" value={CLIENT.name} />
                <Field label="Phone" value={CLIENT.phone} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Email" value={CLIENT.email} />
                <Select label="Source" value={CLIENT.sourceLabel} />
              </div>
              <Field label="Estimated Value (₹)" value="1,20,000" />
              <Field
                label="Notes"
                area
                value="Wants the new site live before their September campaign. Two rounds of design agreed."
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Btn small>Save Changes</Btn>
            </div>
          </Card>

          <div className="col-span-2 flex min-h-0 flex-col gap-4">
            <Card className="!p-5">
              <h3 className="mb-4 text-base font-semibold text-ink">Pipeline</h3>
              <div className="space-y-3">
                <Select label="Stage" value="Won" />
                <Select label="Assigned To" value={`${'Rajesh'} (you)`} />
              </div>
              <div className="mt-4 space-y-2 border-t border-stone-100 pt-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">Source</span>
                  <Badge tone="pink">{CLIENT.sourceLabel}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">Created</span>
                  <span className="font-medium text-ink">{CLIENT.created}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">Won</span>
                  <span className="font-medium text-ink">{CLIENT.won}</span>
                </div>
              </div>
            </Card>

            <Card className="min-h-0 flex-1 !p-5">
              <h3 className="mb-3 text-base font-semibold text-ink">Activity</h3>
              <ol className="space-y-3">
                {[
                  ['Stage changed to Won', CLIENT.won],
                  ['Call · sent the proposal, she is in', '10 Jul 2026'],
                  ['Note · found us on Instagram', CLIENT.created],
                ].map(([what, when]) => (
                  <li key={what} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary-400" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm text-ink">{what}</span>
                      <span className="block text-xs text-ink-faint">{when}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>

        <Tip on={beat === 1} x={790} y={112} align="right">
          Her details, her stage and her whole history are already here. Converting keeps every
          bit of it.
        </Tip>
      </div>

      {/* The hand-off to act II, once the click has landed. */}
      <div
        className={`absolute bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
          beat >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-2.5 text-sm font-medium text-espresso-text shadow-lift-4">
          <Avatar initials={CLIENT.initials} size="sm" />
          Opening the client form, prefilled from this lead…
        </span>
      </div>
    </div>
  )
}
