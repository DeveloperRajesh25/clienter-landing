'use client'

import {
  CalendarDays,
  Check,
  Download,
  Eye,
  FileText,
  Globe,
  Image as ImageIcon,
  Mail,
  Phone,
  Plus,
  Receipt,
  Sparkles,
  Wallet,
} from 'lucide-react'
import {
  Avatar,
  Badge,
  Caption,
  Count,
  NovaChip,
  Panel,
  Progress,
  Spotlight,
  Tip,
  TypedField,
} from '../primitives'
import { TopBar } from '../Sidebar'
import { CLIENT, INVOICE, PROJECT, STUDIO, TEAM } from '../data'
import { Body, Btn, Screen, Stat, type StageProps } from './shared'

/* ══════════════════════════════════════════════════════════════════════════
   ACT II — THE WORK
   Portal on, project up, work running, money in. Three quick connective beats
   and then the second hero: one recorded payment produces a GST invoice and a
   receipt without anyone typing an invoice number.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── 03 · Her own front door ────────────────────────────────────────────────
   Everything here exists so one control can be flipped: the portal switch. The
   white-label point is made by the URL that appears, not by a claim.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage03({ on, beat }: StageProps) {
  const enabled = beat >= 2

  return (
    <Screen>
      <TopBar title="Client">
        <Badge tint="bg-emerald-50 text-emerald-700">Active</Badge>
      </TopBar>

      <Body className="p-2.5">
        <div className="flex h-full flex-col gap-2">
          {/* Profile head — the chip arrives here from the Clients row. */}
          <div className="flex flex-none items-center gap-2">
            <NovaChip on={on} size="lg" subtitle={`Client since ${CLIENT.converted}`} tone="plain" />
            <span className="ml-auto flex flex-none items-center gap-1">
              <Spotlight on={beat >= 3} radius="rounded-md">
                <Btn>
                  <Plus className="h-2.5 w-2.5" aria-hidden />
                  New project
                </Btn>
              </Spotlight>
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-5 gap-2">
            {/* Contact — real values, carried over from the lead. */}
            <Panel className="col-span-2 flex flex-col p-2">
              <Caption>Contact</Caption>
              <ul className="mt-1.5 flex-none space-y-1.5">
                <li className="flex items-center gap-1.5 text-[9.5px] text-stone-600">
                  <Mail className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
                  <span className="truncate">{CLIENT.email}</span>
                </li>
                <li className="flex items-center gap-1.5 text-[9.5px] text-stone-600">
                  <Phone className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
                  {CLIENT.phone}
                </li>
                <li className="flex items-center gap-1.5 text-[9.5px] text-stone-600">
                  <Sparkles className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
                  Came from {CLIENT.sourceLabel}
                </li>
              </ul>

              {/* The "nothing gets retyped" claim, evidenced. Every row here
                  happened in an earlier chapter — the profile remembers. */}
              <div className="mt-2 min-h-0 flex-1 border-t border-stone-100 pt-1.5">
                <Caption>History</Caption>
                <ol className="mt-1.5 space-y-1.5">
                  {[
                    { when: 'Today', what: 'Client portal enabled', live: true },
                    { when: CLIENT.converted, what: 'Converted from lead' },
                    { when: CLIENT.won, what: 'Deal marked won' },
                    { when: CLIENT.created, what: `Lead created · ${CLIENT.sourceLabel}` },
                  ].map((row) => (
                    <li key={row.what} className="flex items-start gap-1.5">
                      <span
                        className={`mt-1 h-1 w-1 flex-none rounded-full ${
                          row.live ? 'bg-orange-500' : 'bg-stone-300'
                        }`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[9px] font-medium leading-tight text-stone-600">
                          {row.what}
                        </span>
                        <span className="block text-[8px] leading-tight text-stone-400">
                          {row.when}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Panel>

            {/* The control this chapter is about. */}
            <Panel className="col-span-3 flex flex-col p-2">
              <div className="flex flex-none items-center gap-1.5">
                <Globe className="h-3 w-3 text-orange-600" aria-hidden />
                <span className="text-[10.5px] font-bold text-ink">Client Portal</span>
                {enabled && (
                  <Badge tint="bg-emerald-50 text-emerald-700" className="ml-auto">
                    <Check className="h-2.5 w-2.5" aria-hidden />
                    Live
                  </Badge>
                )}
              </div>

              <p className="mt-1 flex-none text-[9.5px] leading-snug text-stone-500">
                A private space for {CLIENT.name} — your name on it, not ours.
              </p>

              <div className="relative mt-2 flex-none">
                {enabled ? (
                  <div className="animate-fade-in space-y-1.5">
                    <div className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-stone-50 px-1.5 py-1">
                      <Globe className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
                      <span className="truncate text-[9px] font-medium text-stone-600">
                        portal.clienter.co.in/nova-studio
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge tint="bg-orange-50 text-orange-700">Password sign-in</Badge>
                      <Badge tint="bg-stone-100 text-stone-600">{STUDIO.name} branding</Badge>
                    </div>
                  </div>
                ) : (
                  <Spotlight on={beat === 1} radius="rounded-md">
                    <Btn>
                      <Globe className="h-2.5 w-2.5" aria-hidden />
                      Enable portal
                    </Btn>
                  </Spotlight>
                )}
              </div>

              {/* The callout, not a claim: this portal belongs to one client. */}
              <div
                className={`mt-auto flex items-start gap-1.5 rounded-lg bg-orange-50/70 p-1.5 transition-opacity duration-700 ${
                  enabled ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Eye className="mt-px h-2.5 w-2.5 flex-none text-orange-600" aria-hidden />
                <p className="text-[9px] leading-snug text-orange-900/80">
                  Per client, not per workspace. {CLIENT.contact} can never see another
                  client&apos;s work.
                </p>
              </div>
            </Panel>
          </div>

          <Tip on={beat === 1} className="right-[3%] top-[38%]">
            White-label, per client. Switch it on for the people who need it.
          </Tip>
        </div>
      </Body>
    </Screen>
  )
}

/* ── 04 · The work begins ───────────────────────────────────────────────────
   The drawer fills itself in. Fields typing is the cheapest honest signal that
   this is a form a person uses, not a diagram of a form.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage04({ on, beat, reduced }: StageProps) {
  const filling = beat >= 1
  const created = beat >= 2
  const type = PROJECT.type

  return (
    <Screen>
      <TopBar title="New project">
        <NovaChip on={on} size="sm" />
      </TopBar>

      <Body>
        {/* The drawer. Open on arrival — the URL already says /projects/new. */}
        <div
          className={`absolute inset-0 flex flex-col gap-2 p-2.5 transition-all duration-[620ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            created ? '-translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="grid flex-none grid-cols-2 gap-2">
            <TypedField
              label="Project name"
              value={PROJECT.name}
              run={filling && !reduced}
              className="col-span-2"
            />
            <TypedField label="Budget" value={PROJECT.budget} run={filling && !reduced} mono />
            <TypedField label="Deadline" value={PROJECT.deadline} run={filling && !reduced} mono />
          </div>

          <div className="flex-none">
            <Caption className="mb-1 block">Project type</Caption>
            <div className="inline-flex rounded-lg border border-stone-200 bg-white p-px">
              {['Freelance', 'Retainer'].map((t) => (
                <span
                  key={t}
                  className={`rounded-[7px] px-2 py-[3px] text-[9.5px] font-semibold transition-colors duration-300 ${
                    t === type && filling ? 'bg-orange-600 text-white' : 'text-stone-500'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-none">
            <Caption className="mb-1 block">Assigned</Caption>
            <div className="flex items-center gap-1.5">
              {TEAM.map((m, i) => (
                <span
                  key={m.name}
                  className={`flex items-center gap-1 rounded-full border border-stone-200 bg-white py-px pl-px pr-1.5 transition-all duration-500 ${
                    filling ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                  }`}
                  style={{ transitionDelay: filling ? `${520 + i * 160}ms` : '0ms' }}
                >
                  <Avatar initials={m.initials} tint={m.tint} size="xs" />
                  <span className="text-[9px] font-semibold text-stone-600">{m.name}</span>
                  <span className="text-[8px] text-stone-400">{m.role}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-none items-center justify-end gap-1.5 border-t border-stone-100 pt-2">
            <Btn tone="secondary">Cancel</Btn>
            <Spotlight on={beat === 1} radius="rounded-md">
              <Btn>Create project</Btn>
            </Spotlight>
          </div>
        </div>

        {/* What the drawer leaves behind: the new project at the top of a real
            project list, not a lone card floating in an empty screen. */}
        <div
          className={`absolute inset-0 flex flex-col gap-2 p-2.5 transition-all duration-[620ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            created ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <Panel className="flex-none p-2.5" ring>
            <div className="flex items-start gap-2">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <FileText className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h5 className="truncate text-[12px] font-bold tracking-tight text-ink">
                  {PROJECT.name}
                </h5>
                <div className="mt-1 flex flex-wrap items-center gap-1">
                  <Badge tint="bg-orange-50 text-orange-700">{PROJECT.type}</Badge>
                  <Badge tint="bg-stone-100 text-stone-600">
                    <CalendarDays className="h-2.5 w-2.5" aria-hidden />
                    Due {PROJECT.deadline}
                  </Badge>
                  <Badge tint="bg-stone-100 text-stone-600">{PROJECT.budget}</Badge>
                </div>
              </div>
              {/* Side by side rather than an overlapping stack: at this scale the
                  overlap just reads as one clipped avatar. */}
              <span className="flex flex-none items-center gap-1">
                {TEAM.map((m) => (
                  <Avatar key={m.name} initials={m.initials} tint={m.tint} size="xs" />
                ))}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 border-t border-stone-100 pt-2 text-[9px] text-stone-400">
              <Check className="h-2.5 w-2.5 text-emerald-500" aria-hidden />
              Created {PROJECT.created} · {CLIENT.name}
            </div>
          </Panel>

          <div className="min-h-0 flex-1">
            <Caption className="mb-1 block">Everything else on the go</Caption>
            <div className="space-y-1">
              {[
                { name: 'Menu photography', client: 'Saffron Foods', pct: 40 },
                { name: 'Catalogue redesign', client: 'Loomcraft', pct: 80 },
                { name: 'Showroom microsite', client: 'Kalpa Interiors', pct: 15 },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 rounded-lg border border-stone-200/60 bg-white px-2 py-1.5"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[10px] font-semibold text-stone-600">
                      {p.name}
                    </span>
                    <span className="block truncate text-[8px] text-stone-400">{p.client}</span>
                  </span>
                  <span className="flex w-16 flex-none items-center gap-1.5">
                    <Progress value={p.pct} run className="flex-1" height="h-1" />
                    <span className="text-[8px] font-semibold tabular-nums text-stone-400">
                      {p.pct}%
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Tip on={beat === 1} className="bottom-[16%] right-[4%]">
          Freelance or retainer — the shape of the work, set once.
        </Tip>
      </Body>
    </Screen>
  )
}

/* ── 05 · Sixty-five percent ────────────────────────────────────────────────
   Progress climbs and one toggle decides what the client sees. Two things
   moving, not five.
   ────────────────────────────────────────────────────────────────────────── */
const TASKS = [
  { col: 'To do', items: ['Copy for pricing page'], dot: 'bg-stone-400' },
  { col: 'In progress', items: ['Homepage build', 'Case study layout'], dot: 'bg-orange-500' },
  { col: 'Completed', items: ['Wireframes', 'Brand direction', 'Style tiles'], dot: 'bg-emerald-500' },
]

export function Stage05({ on, beat }: StageProps) {
  const shared = beat >= 2

  return (
    <Screen>
      <TopBar title={PROJECT.name}>
        <NovaChip on={on} size="sm" />
      </TopBar>

      {/* Tabs, exactly as the app orders them. */}
      <div className="flex flex-none items-center gap-0.5 border-b border-stone-200/70 bg-white px-2.5">
        {['Overview', 'Payments & Invoices', 'Team', 'Deliverables & Files', 'Tasks'].map((t, i) => (
          <span
            key={t}
            className={`-mb-px whitespace-nowrap border-b-2 px-1.5 py-1.5 text-[9px] font-semibold ${
              i === 0 ? 'border-orange-600 text-orange-700' : 'border-transparent text-stone-400'
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <Body className="p-2.5">
        <div className="flex h-full flex-col gap-2">
          {/* Progress + the visibility control. */}
          <Panel className="flex-none p-2">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-baseline gap-1.5">
                <Caption>Progress</Caption>
                <span className="text-[15px] font-bold leading-none tabular-nums text-ink">
                  <Count to={PROJECT.progress} run={beat >= 2} suffix="%" />
                </span>
              </span>

              <Spotlight on={beat === 1} radius="rounded-full">
                <span className="flex items-center gap-1.5 rounded-full bg-stone-50 py-0.5 pl-1.5 pr-2 ring-1 ring-stone-200">
                  <span
                    className={`relative h-2.5 w-4 rounded-full transition-colors duration-[400ms] ${
                      shared ? 'bg-emerald-500' : 'bg-stone-300'
                    }`}
                  >
                    <span
                      className={`absolute top-px h-2 w-2 rounded-full bg-white shadow-sm transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
                        shared ? 'left-[9px]' : 'left-px'
                      }`}
                    />
                  </span>
                  <span
                    className={`text-[9px] font-semibold transition-colors duration-[400ms] ${
                      shared ? 'text-emerald-700' : 'text-stone-500'
                    }`}
                  >
                    Visible to client
                  </span>
                </span>
              </Spotlight>
            </div>
            <Progress value={PROJECT.progress} run={beat >= 2} className="mt-1.5" />
          </Panel>

          <div className="grid min-h-0 flex-1 grid-cols-5 gap-2">
            {/* Tasks board */}
            <div className="col-span-3 grid grid-cols-3 gap-1.5">
              {TASKS.map((c) => (
                <div key={c.col} className="rounded-lg border border-stone-200/60 bg-stone-100/50 p-1">
                  <div className="flex items-center gap-1 px-0.5 pb-1">
                    <span className={`h-1 w-1 rounded-full ${c.dot}`} />
                    <span className="truncate text-[8px] font-bold uppercase tracking-[0.08em] text-stone-500">
                      {c.col}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {c.items.map((t) => (
                      <div
                        key={t}
                        className="rounded-md border border-stone-200/70 bg-white px-1 py-1 text-[8.5px] font-medium leading-tight text-stone-600"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <Panel className="col-span-2 p-2">
              <div className="flex items-center justify-between">
                <Caption>Deliverables</Caption>
                {shared && (
                  <Badge tint="bg-emerald-50 text-emerald-700" className="animate-fade-in">
                    <Eye className="h-2.5 w-2.5" aria-hidden />
                    Shared
                  </Badge>
                )}
              </div>
              <ul className="mt-1.5 space-y-1">
                {[
                  { icon: ImageIcon, name: 'Homepage-v3.fig', meta: '2h ago' },
                  { icon: FileText, name: 'Copy-deck.pdf', meta: 'yesterday' },
                  { icon: ImageIcon, name: 'Logo-lockups.zip', meta: '3d ago' },
                ].map(({ icon: Icon, name, meta }) => (
                  <li
                    key={name}
                    className="flex items-center gap-1.5 rounded-md border border-stone-200/60 px-1.5 py-1"
                  >
                    <Icon className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
                    <span className="truncate text-[9px] font-medium text-stone-600">{name}</span>
                    <span className="ml-auto flex-none text-[8px] text-stone-400">{meta}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          <Tip on={beat === 1} className="right-[4%] top-[19%]">
            One toggle shares progress. Everything else stays internal.
          </Tip>
        </div>
      </Body>
    </Screen>
  )
}

/* ── 06 · The advance lands ── HERO ─────────────────────────────────────────
   The payoff of the whole act. A recorded payment produces a numbered GST
   invoice and a downloadable receipt, and the numbers on the left move to match.
   Everything on screen is derived from one figure: ₹40,000.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage06({ on, beat }: StageProps) {
  const recorded = beat >= 2
  const settled = beat >= 3

  return (
    <Screen>
      <TopBar title="Payments">
        <NovaChip on={on} size="sm" />
      </TopBar>

      <Body className="p-2.5">
        <div className="grid h-full grid-cols-5 gap-2">
          {/* Ledger */}
          <div className="col-span-2 flex min-h-0 flex-col gap-1.5">
            <div className="grid flex-none grid-cols-2 gap-1.5">
              <Stat label="Budget" value={PROJECT.budget} />
              <Stat
                label="Received"
                value={
                  recorded ? (
                    <Count to={INVOICE.totalValue} run={recorded} prefix="₹" />
                  ) : (
                    '₹0'
                  )
                }
                tint={recorded ? 'text-emerald-600' : 'text-stone-400'}
              />
            </div>

            <Panel className="flex-none p-2">
              <div className="flex items-center justify-between">
                <Caption>Pending</Caption>
                <span className="text-[10px] font-bold tabular-nums text-amber-600">
                  {recorded ? INVOICE.remaining : PROJECT.budget}
                </span>
              </div>
              <Progress value={recorded ? 39 : 0} run={recorded} className="mt-1.5" height="h-1" />
            </Panel>

            {/* The payment row that didn't exist a beat ago. */}
            <Panel
              className={`flex-none p-2 transition-all duration-[560ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                recorded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
              ring
            >
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <Wallet className="h-2.5 w-2.5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold leading-tight text-ink">
                    {INVOICE.subtotal} advance
                  </span>
                  <span className="block text-[8px] leading-tight text-stone-400">
                    {INVOICE.paidOn}
                  </span>
                </span>
                <Badge tint="bg-emerald-50 text-emerald-700" className="ml-auto">
                  {INVOICE.status}
                </Badge>
              </div>
            </Panel>

            {/* Everything already banked on this client, so the ledger doesn't
                stop dead under the new row. */}
            <Panel className="min-h-0 flex-1 p-2">
              <Caption>Earlier payments</Caption>
              <ul className="mt-1.5 space-y-1">
                {[
                  { label: 'Kalpa Interiors', meta: '2 Jul 2026', value: '₹18,000' },
                  { label: 'Loomcraft', meta: '28 Jun 2026', value: '₹22,500' },
                  { label: 'Saffron Foods', meta: '19 Jun 2026', value: '₹40,000' },
                  { label: 'Northline Cargo', meta: '11 Jun 2026', value: '₹55,000' },
                ].map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center gap-1.5 rounded-md border border-stone-200/60 px-1.5 py-1"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[9px] font-semibold text-stone-600">
                        {p.label}
                      </span>
                      <span className="block text-[8px] text-stone-400">{p.meta}</span>
                    </span>
                    <span className="flex-none text-[9px] font-semibold tabular-nums text-stone-500">
                      {p.value}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>

            {!recorded && (
              <div className="relative flex-none">
                <Spotlight on={beat === 1} radius="rounded-md">
                  <Btn>
                    <Plus className="h-2.5 w-2.5" aria-hidden />
                    Record payment
                  </Btn>
                </Spotlight>
              </div>
            )}
          </div>

          {/* The document. Paper, not a panel — a perforated header, a bill-to
              block, line items, and a tilt, so it reads as a tax invoice that
              was generated rather than a card that says "invoice". */}
          <div className="relative col-span-3">
            {/* Empty state, before. */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-stone-200 transition-opacity duration-500 ${
                recorded ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Receipt className="h-5 w-5 text-stone-300" aria-hidden />
              <p className="text-[9px] font-medium text-stone-400">No invoices yet</p>
            </div>

            {/* The invoice, generated. */}
            <div
              className={`absolute inset-x-2 bottom-8 top-0 transition-all duration-[760ms] ease-[cubic-bezier(0.2,1.02,0.3,1)] ${
                recorded
                  ? 'translate-y-0 rotate-[-0.7deg] opacity-100'
                  : 'translate-y-4 rotate-0 opacity-0'
              }`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_18px_40px_-16px_rgba(67,36,16,0.28)]">
                <div className="flex flex-none items-center justify-between border-b border-dashed border-stone-200 bg-stone-50/70 px-2.5 py-1.5">
                  <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-stone-400">
                    Tax Invoice
                  </span>
                  <span className="text-[9px] font-bold text-orange-600">{STUDIO.name}</span>
                </div>

                <div className="flex min-h-0 flex-1 flex-col px-2.5 py-2">
                  <div className="flex flex-none items-start justify-between gap-2">
                    <span className="min-w-0">
                      <Caption>Billed to</Caption>
                      <span className="mt-0.5 block truncate text-[10px] font-bold text-ink">
                        {CLIENT.name}
                      </span>
                      <span className="block truncate text-[8px] text-stone-400">
                        {CLIENT.contact} · {CLIENT.email}
                      </span>
                    </span>
                    <span className="flex-none text-right">
                      <span className="block text-[10px] font-bold tabular-nums text-ink">
                        {INVOICE.number}
                      </span>
                      <span className="mt-0.5 block text-[8px] text-stone-400">
                        {INVOICE.paidOn}
                      </span>
                      <span
                        className={`mt-1 block transition-all duration-500 delay-300 ${
                          settled ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                        }`}
                      >
                        <Badge tint="bg-emerald-50 text-emerald-700">{INVOICE.status}</Badge>
                      </span>
                    </span>
                  </div>

                  {/* Line items */}
                  <div className="mt-2 flex-none border-t border-stone-100 pt-1.5">
                    <div className="flex items-baseline justify-between pb-1">
                      <Caption>Description</Caption>
                      <Caption>Amount</Caption>
                    </div>
                    <div className="space-y-1">
                      <Row label={`${PROJECT.name} — advance`} value={INVOICE.subtotal} />
                    </div>
                    <p className="mt-1 text-[8px] leading-snug text-stone-400">
                      Advance against a {PROJECT.budget} {PROJECT.type.toLowerCase()} engagement,
                      due {PROJECT.deadline}.
                    </p>
                  </div>

                  {/* Terms — the middle of a real invoice isn't empty. */}
                  <div className="mt-2 flex-none rounded-md bg-stone-50 px-1.5 py-1">
                    <Caption>Terms</Caption>
                    <p className="mt-0.5 text-[8px] leading-snug text-stone-500">
                      Balance invoiced on delivery. GST charged at 18% as per Indian tax rules.
                    </p>
                  </div>

                  {/* Totals block, pushed to the foot of the sheet. */}
                  <div className="mt-auto flex-none pt-2">
                    <div className="space-y-1 border-t border-stone-100 pt-1.5">
                      <Row label="Subtotal" value={INVOICE.subtotal} muted />
                      <Row label={INVOICE.gstLabel} value={INVOICE.gst} muted />
                    </div>
                    <div className="mt-1.5 flex items-baseline justify-between border-t border-dashed border-stone-300 pt-1.5">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-stone-400">
                        Total
                      </span>
                      <span className="text-[15px] font-bold tabular-nums text-ink">
                        {INVOICE.total}
                      </span>
                    </div>
                    <p className="mt-1 text-[7.5px] leading-snug text-stone-400">
                      Payment received {INVOICE.paidOn}. {INVOICE.remaining} remaining on this
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The receipt, landing on the sheet's bottom corner a beat later.
                Kept clear of the total — that number is the point of the stage. */}
            <div
              className={`absolute bottom-0 right-0 w-[74%] transition-all duration-[620ms] delay-[220ms] ease-[cubic-bezier(0.2,1.06,0.3,1)] ${
                settled
                  ? 'translate-y-0 rotate-[1.8deg] opacity-100'
                  : 'translate-y-6 rotate-0 opacity-0'
              }`}
            >
              <div className="rounded-lg border border-stone-200 bg-white px-2 py-1.5 shadow-[0_16px_34px_-12px_rgba(67,36,16,0.34)]">
                <div className="flex items-center gap-1.5">
                  <Receipt className="h-3 w-3 flex-none text-orange-600" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[9px] font-bold leading-tight text-ink">
                      Receipt · {INVOICE.total}
                    </span>
                    <span className="block truncate text-[8px] leading-tight text-stone-400">
                      {INVOICE.number} · {INVOICE.paidOn}
                    </span>
                  </span>
                  <span className="ml-auto flex flex-none items-center gap-0.5 rounded-md bg-stone-100 px-1 py-0.5 text-[8px] font-semibold text-stone-600">
                    <Download className="h-2 w-2" aria-hidden />
                    PDF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No confirmation toast here on purpose: the invoice number, the GST
            line, the PAID badge and the receipt chip already say everything a
            toast would, and a banner across the sheet would cover the total. */}
        <Tip on={beat === 1} className="bottom-[8%] left-[3%]">
          Record the payment — the GST invoice and receipt write themselves.
        </Tip>
      </Body>
    </Screen>
  )
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span
        className={`truncate text-[9px] ${muted ? 'text-stone-400' : 'font-medium text-stone-600'}`}
      >
        {label}
      </span>
      <span
        className={`flex-none text-[9.5px] tabular-nums ${
          muted ? 'text-stone-400' : 'font-semibold text-ink'
        }`}
      >
        {value}
      </span>
    </div>
  )
}
