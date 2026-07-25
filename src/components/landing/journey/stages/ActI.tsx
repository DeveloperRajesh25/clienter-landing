'use client'

import { Building2, CheckCircle2, Phone, Plus, UserPlus } from 'lucide-react'
import { Badge, Caption, NovaChip, Spotlight, Tip } from '../primitives'
import { TopBar } from '../Sidebar'
import { CLIENT, LEAD_STAGES } from '../data'
import { BoardColumn, Body, Btn, COL_PCT, QuietLead, QuietRow, Screen, type StageProps } from './shared'

/* ══════════════════════════════════════════════════════════════════════════
   ACT I — THE CATCH
   A stranger becomes a client. Two chapters, and the second is a hero: the won
   card physically leaves the pipeline and lands in Clients, so the visitor sees
   the conversion happen rather than reading that it can.
   ══════════════════════════════════════════════════════════════════════════ */

/** The four board columns we show. The board scrolls in the real app, so the
    left edge is cut off — that reads as truthful rather than trimmed. */
const COLS = [
  { ...LEAD_STAGES[1], count: 3 },
  { ...LEAD_STAGES[2], count: 2 },
  { ...LEAD_STAGES[3], count: 2 },
  { ...LEAD_STAGES[4], count: 1 },
]

/** Where the Nova Studio card sits, per beat, in % of the board box. */
const PROPOSAL_COL = 2
const WON_COL = 3

/**
 * The lead card. The company line is the shared Nova Studio chip — the one
 * element that will survive all ten screens.
 */
function LeadCard({
  on,
  convert,
  showTip,
  lifted,
}: {
  on: boolean
  /** Renders the "Convert to client" affordance (chapter 02 only). */
  convert?: boolean
  showTip?: boolean
  lifted?: boolean
}) {
  return (
    <div
      className={`rounded-lg border bg-white p-1.5 transition-shadow duration-500 ${
        lifted
          ? 'border-orange-200 shadow-[0_10px_24px_-6px_rgba(67,36,16,0.22)]'
          : 'border-stone-200/70 shadow-[0_1px_2px_rgba(67,36,16,0.05)]'
      }`}
    >
      <div className="flex items-start justify-between gap-1">
        <span className="truncate text-[10px] font-semibold leading-tight text-ink">
          {CLIENT.contact}
        </span>
        <span className="flex-none text-[9px] font-semibold tabular-nums text-ink">
          {CLIENT.value}
        </span>
      </div>

      <div className="mt-1 flex items-center gap-1">
        <Building2 className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
        <NovaChip on={on} size="sm" />
      </div>

      <div className="mt-1 flex items-center gap-1 text-[9px] text-stone-400">
        <Phone className="h-2.5 w-2.5 flex-none" aria-hidden />
        <span className="truncate">{CLIENT.phone}</span>
      </div>

      <div className="mt-1 flex items-center gap-1 border-t border-stone-100 pt-1">
        <Badge tint={CLIENT.sourceBadge}>{CLIENT.sourceLabel}</Badge>
        {convert ? null : (
          <Badge tint="bg-stone-100 text-stone-500" className="ml-auto">
            {CLIENT.created}
          </Badge>
        )}
      </div>

      {convert && (
        <div className="relative mt-1.5">
          <Spotlight on={!!showTip} radius="rounded-md">
            <Btn>
              <UserPlus className="h-2.5 w-2.5" aria-hidden />
              Convert to client
            </Btn>
          </Spotlight>
        </div>
      )}
    </div>
  )
}

/* ── 01 · The first message ─────────────────────────────────────────────────
   The lead exists, in a stage, with a source. The one action: drag it to Won.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage01({ on, beat }: StageProps) {
  const dragging = beat === 2
  const won = beat >= 2
  const col = won ? WON_COL : PROPOSAL_COL

  return (
    <Screen>
      <TopBar title="Leads">
        <Badge tint="bg-stone-100 text-stone-600">8 open</Badge>
        <Btn>
          <Plus className="h-2.5 w-2.5" aria-hidden />
          New lead
        </Btn>
      </TopBar>

      <Body className="p-2">
        <div className="relative h-full">
          {COLS.map((c, i) => (
            <BoardColumn
              key={c.name}
              index={i}
              title={c.name}
              dot={c.dot}
              count={i === PROPOSAL_COL ? (won ? 1 : 2) : i === WON_COL ? (won ? 2 : 1) : c.count}
              highlight={won && i === WON_COL}
            >
              {/* Nova Studio's slot is left to the flying card below. */}
              {i === PROPOSAL_COL && !won && <span className="block h-[4.6rem]" />}
              {i === WON_COL && won && <span className="block h-[4.6rem]" />}
              {i !== WON_COL && <QuietLead i={i} />}
              {i === 0 && <QuietLead i={3} />}
              {i === WON_COL && !won && <QuietLead i={1} />}
              {i === WON_COL && won && <QuietLead i={1} />}
            </BoardColumn>
          ))}

          {/* The subject. Absolutely placed in the columns' own coordinate
              system, so the drag is a single transition of `left` — not a
              re-parenting animation that can tear. */}
          <div
            className="absolute px-[3px] transition-[left,top,transform] duration-[820ms] ease-[cubic-bezier(0.32,1.02,0.28,1)]"
            style={{
              left: `${col * COL_PCT}%`,
              width: `${COL_PCT}%`,
              top: '1.3rem',
              transform: dragging ? 'rotate(1.6deg) scale(1.03)' : 'rotate(0) scale(1)',
              zIndex: 20,
            }}
          >
            <LeadCard on={on} lifted={dragging} />
          </div>

          {/* Left edge fade — the board keeps going. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-canvas to-transparent"
          />

          <Tip on={beat === 1} className="left-[36%] top-[63%]">
            Your own stages, and every lead tagged with where it came from.
          </Tip>
        </div>
      </Body>
    </Screen>
  )
}

/* ── 02 · Stranger becomes client ── HERO ───────────────────────────────────
   Beat 0 is pixel-identical to chapter 01's final state, so the cross-fade
   between the two chapters is invisible and the story simply continues. Then
   the card leaves the board and becomes a row in Clients — same element, new
   shape. That morph is the bridge, and it is deliberately literal.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage02({ on, beat }: StageProps) {
  const converted = beat >= 2

  return (
    <Screen>
      <TopBar title={converted ? 'Clients' : 'Leads'}>
        <Badge tint={converted ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-600'}>
          {converted ? '4 active' : '8 open'}
        </Badge>
        <Btn>
          <Plus className="h-2.5 w-2.5" aria-hidden />
          {converted ? 'New client' : 'New lead'}
        </Btn>
      </TopBar>

      <Body className="p-2">
        <div className="relative h-full">
          {/* Pane A — the pipeline, receding. */}
          <div
            className={`absolute inset-0 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              converted ? '-translate-x-6 opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            {COLS.map((c, i) => (
              <BoardColumn
                key={c.name}
                index={i}
                title={c.name}
                dot={c.dot}
                count={i === WON_COL ? 2 : c.count}
                highlight={i === WON_COL}
              >
                {i === WON_COL ? (
                  <>
                    <span className="block h-[6.2rem]" />
                    <QuietLead i={1} />
                  </>
                ) : (
                  <QuietLead i={i} />
                )}
              </BoardColumn>
            ))}
          </div>

          {/* Pane B — Clients, arriving. */}
          <div
            className={`absolute inset-0 transition-all duration-[700ms] delay-[120ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              converted ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
            }`}
          >
            <div className="flex h-full flex-col gap-1">
              <div className="flex flex-none items-center justify-between px-0.5">
                <Caption>All clients</Caption>
                <Caption>Value</Caption>
              </div>
              {/* Nova Studio's landing slot. */}
              <span className="block h-[2.85rem] flex-none" />
              <QuietRow
                name="Loomcraft"
                right={<span className="text-[9px] font-semibold tabular-nums text-stone-500">₹45,000</span>}
              />
              <QuietRow
                name="Saffron Foods"
                right={<span className="text-[9px] font-semibold tabular-nums text-stone-500">₹80,000</span>}
              />
              <QuietRow
                name="Kalpa Interiors"
                right={<span className="text-[9px] font-semibold tabular-nums text-stone-500">₹32,000</span>}
              />
            </div>
          </div>

          {/* The bridge. One element; its box, not its identity, changes. */}
          <div
            className="absolute transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.06,0.3,1)]"
            style={
              converted
                ? { left: '0%', width: '100%', top: '1.05rem', zIndex: 25 }
                : { left: `${WON_COL * COL_PCT}%`, width: `${COL_PCT}%`, top: '1.3rem', zIndex: 25 }
            }
          >
            <div className="px-[3px]">
              {converted ? <NewClientRow on={on} /> : <LeadCard on={on} convert showTip={beat === 1} />}
            </div>
          </div>

          <Tip on={beat === 1} className="right-2 top-[52%]">
            One click converts a won lead. Nothing gets retyped.
          </Tip>

          {/* The receipt of the action — arrives after the row lands. */}
          <div
            className={`absolute bottom-1 left-1/2 -translate-x-1/2 transition-all duration-500 ${
              beat >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-espresso px-2 py-1 text-[9px] font-medium text-espresso-text shadow-lift-3">
              <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" aria-hidden />
              Converted from lead · full history kept
            </span>
          </div>
        </div>
      </Body>
    </Screen>
  )
}

/** What the card becomes: a client row, with the chip still inside it. */
function NewClientRow({ on }: { on: boolean }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-2 py-1.5 shadow-[0_8px_20px_-8px_rgba(67,36,16,0.2)] ring-1 ring-emerald-200/70">
      <NovaChip on={on} size="md" subtitle={`Client since ${CLIENT.converted}`} />
      <span className="ml-auto flex flex-none items-center gap-1.5">
        <Badge tint="bg-emerald-50 text-emerald-700">
          <CheckCircle2 className="h-2.5 w-2.5" aria-hidden />
          Active
        </Badge>
        <span className="text-[10px] font-bold tabular-nums text-ink">{CLIENT.value}</span>
      </span>
    </div>
  )
}
