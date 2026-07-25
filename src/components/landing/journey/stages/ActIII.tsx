'use client'

import {
  BadgeCheck,
  Bell,
  CalendarPlus,
  Check,
  CheckCircle2,
  Download,
  Gift,
  LogIn,
  Receipt,
  Send,
  Star,
  Video,
} from 'lucide-react'
import { Avatar, Badge, Caption, Count, NovaChip, Panel, Progress, Spotlight, Tip } from '../primitives'
import { TopBar } from '../Sidebar'
import { CLIENT, INVOICE, MEETING, MESSAGES, PROJECT, REFERRAL, REVIEW, STUDIO } from '../data'
import { Body, Btn, QuietRow, Screen, type StageProps } from './shared'

/* ══════════════════════════════════════════════════════════════════════════
   ACT III — THE RELATIONSHIP
   The client's own view, a meeting, a conversation, and then the close: a
   verified review and a referral that lands back in the pipeline where the
   story started.
   ══════════════════════════════════════════════════════════════════════════ */

/** Left offset that clears the persistent rail. Stage 07 owns its own layout
    because the portal login is genuinely full-bleed. */
const RAIL_PAD = 'pl-[7.75rem] sm:pl-[8.75rem]'

/* ── 07 · Her side of the glass ─────────────────────────────────────────────
   Password sign-in, never a magic link. The login sits on frosted glass rather
   than an opaque sheet, so the client chip can be seen gliding into the portal
   header behind it — the door lifts and it is already in place.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage07({ on, beat, compact }: StageProps) {
  const signedIn = beat >= 2

  return (
    <div className="relative h-full">
      {/* The portal itself — mounted from beat 0, behind the glass. */}
      <div className={`h-full ${compact ? '' : RAIL_PAD}`}>
        <Screen>
          <TopBar title={`Hi ${CLIENT.contact.split(' ')[0]}`}>
            <NovaChip on={on} size="sm" />
          </TopBar>

          <Body className="p-2.5">
            <div className="flex h-full flex-col gap-2">
              <Panel className="flex-none p-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold text-ink">
                      {PROJECT.name}
                    </span>
                    <span className="mt-0.5 block text-[8.5px] text-stone-400">
                      Due {PROJECT.deadline} · {STUDIO.name}
                    </span>
                  </span>
                  <span className="flex-none text-[13px] font-bold tabular-nums text-orange-600">
                    <Count to={PROJECT.progress} run={signedIn} suffix="%" />
                  </span>
                </div>
                <Progress value={PROJECT.progress} run={signedIn} className="mt-1.5" />
              </Panel>

              <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
                <Panel className="p-2">
                  <Caption>Invoices</Caption>
                  <div className="mt-1.5 rounded-lg border border-stone-200/70 px-1.5 py-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-bold tabular-nums text-ink">
                        {INVOICE.number}
                      </span>
                      <Badge tint="bg-emerald-50 text-emerald-700">{INVOICE.status}</Badge>
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold tabular-nums text-ink">
                        {INVOICE.total}
                      </span>
                      <span className="inline-flex items-center gap-0.5 rounded-md bg-stone-100 px-1 py-0.5 text-[8px] font-semibold text-stone-600">
                        <Download className="h-2 w-2" aria-hidden />
                        Receipt
                      </span>
                    </div>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between rounded-lg bg-amber-50/70 px-1.5 py-1">
                    <span className="text-[8.5px] font-medium text-amber-800">Remaining</span>
                    <span className="text-[9px] font-bold tabular-nums text-amber-800">
                      {INVOICE.remaining}
                    </span>
                  </div>
                </Panel>

                <Panel className="p-2">
                  <Caption>Shared with you</Caption>
                  <ul className="mt-1.5 space-y-1">
                    {['Homepage-v3.fig', 'Copy-deck.pdf', 'Logo-lockups.zip'].map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1.5 rounded-md border border-stone-200/60 px-1.5 py-1"
                      >
                        <Receipt className="h-2.5 w-2.5 flex-none text-stone-400" aria-hidden />
                        <span className="truncate text-[9px] font-medium text-stone-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            </div>
          </Body>
        </Screen>
      </div>

      {/* The door. Frosted, not opaque. */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-canvas/90 backdrop-blur-[3px] transition-all duration-[680ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          signedIn ? 'pointer-events-none -translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="w-[58%] rounded-xl border border-stone-200 bg-white p-3 shadow-[0_18px_48px_-18px_rgba(67,36,16,0.3)]">
          <div className="text-center">
            {/* The agency's mark, not ours. That is the whole point. */}
            <span className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-xl bg-orange-600 text-white">
              <LogIn className="h-3 w-3" aria-hidden />
            </span>
            <h5 className="text-[11px] font-bold tracking-tight text-ink">Client portal</h5>
            <p className="mt-0.5 text-[8.5px] leading-snug text-stone-400">
              Sign in with the email and password {STUDIO.name} shared with you.
            </p>
          </div>

          <div className="mt-2 space-y-1.5">
            <label className="block">
              <Caption className="mb-0.5 block">Email</Caption>
              <span className="flex h-6 items-center rounded-lg border border-stone-200 bg-white px-1.5 text-[9px] text-ink">
                {CLIENT.email}
              </span>
            </label>
            <label className="block">
              <Caption className="mb-0.5 block">Password</Caption>
              <span className="flex h-6 items-center gap-[3px] rounded-lg border border-stone-200 bg-white px-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-stone-400" />
                ))}
              </span>
            </label>
          </div>

          <div className="relative mt-2.5">
            <Spotlight on={beat === 1} radius="rounded-md" className="w-full">
              <span className="flex w-full items-center justify-center gap-1 rounded-md bg-orange-600 py-1 text-[9px] font-semibold text-white">
                Sign in
              </span>
            </Spotlight>
          </div>

          <p className="mt-2 text-center text-[7.5px] font-medium text-stone-400">
            Powered by Clienter
          </p>
        </div>

        <Tip on={beat === 1} className="bottom-[13%] left-1/2 -translate-x-1/2">
          A password she already has. No magic links, no app to install.
        </Tip>
      </div>
    </div>
  )
}

/* ── 08 · A room to meet in ─────────────────────────────────────────────────
   A light, quick beat: one click, one meeting, with the Meet link and the
   reminder that actually fires.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage08({ on, beat }: StageProps) {
  const booked = beat >= 2

  return (
    <Screen>
      <TopBar title="Meetings">
        <NovaChip on={on} size="sm" />
      </TopBar>

      <Body className="p-2.5">
        <div className="flex h-full flex-col gap-2">
          <div className="flex flex-none items-center justify-between">
            <Caption>Upcoming</Caption>
            <Spotlight on={beat === 1} radius="rounded-md">
              <Btn>
                <CalendarPlus className="h-2.5 w-2.5" aria-hidden />
                Schedule meeting
              </Btn>
            </Spotlight>
          </div>

          {/* The new meeting. */}
          <Panel
            className={`flex-none p-2 transition-all duration-[600ms] ease-[cubic-bezier(0.2,1.04,0.3,1)] ${
              booked ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
            ring
          >
            <div className="flex items-start gap-2">
              <span className="flex h-9 w-9 flex-none flex-col items-center justify-center rounded-lg bg-orange-50 leading-none">
                <span className="text-[7px] font-bold uppercase tracking-wider text-orange-500">
                  Jul
                </span>
                <span className="text-[13px] font-bold text-orange-700">18</span>
              </span>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-[11px] font-bold text-ink">
                  {MEETING.title}
                </span>
                <span className="mt-0.5 block text-[8.5px] text-stone-400">
                  {MEETING.time} · with {CLIENT.name}
                </span>
                <div className="mt-1.5 flex flex-wrap items-center gap-1">
                  <Badge tint="bg-sky-50 text-sky-700">
                    <Video className="h-2.5 w-2.5" aria-hidden />
                    {MEETING.platform}
                  </Badge>
                  <Badge
                    tint="bg-amber-50 text-amber-700"
                    className={`transition-all duration-500 delay-300 ${
                      beat >= 3 ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
                    }`}
                  >
                    <Bell className="h-2.5 w-2.5" aria-hidden />
                    Reminder {MEETING.reminder}
                  </Badge>
                </div>
              </div>
              <span className="flex-none rounded-md border border-stone-200 bg-white px-1 py-0.5 text-[8px] font-semibold text-stone-600">
                Join
              </span>
            </div>
          </Panel>

          {/* Everything else on the calendar, quietly. */}
          <div className="min-h-0 flex-1 space-y-1 opacity-70">
            <QuietRow
              name="Loomcraft"
              right={<span className="text-[8px] text-stone-400">21 Jul · 4:00 PM</span>}
            />
            <QuietRow
              name="Saffron Foods"
              right={<span className="text-[8px] text-stone-400">24 Jul · 11:30 AM</span>}
            />
          </div>

          <Tip on={beat === 1} className="right-[4%] top-[16%]">
            A Meet link is generated, and the reminder fires 30 minutes before.
          </Tip>
        </div>
      </Body>
    </Screen>
  )
}

/* ── 09 · Still talking ─────────────────────────────────────────────────────
   One thread per client. The beat that sells it isn't the send — it's the
   typing indicator that appears afterwards, because that only exists if the
   thing is genuinely live.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage09({ on, beat }: StageProps) {
  const sent = beat >= 2
  const typing = beat >= 3

  return (
    <Screen>
      <TopBar title="Messages">
        <NovaChip on={on} size="sm" />
      </TopBar>

      <Body>
        <div className="flex h-full">
          {/* Thread list */}
          <div className="flex w-[36%] flex-none flex-col gap-1 border-r border-stone-200/70 p-1.5">
            <div className="flex items-center gap-1.5 rounded-lg bg-orange-50 px-1.5 py-1.5 ring-1 ring-orange-500/15">
              <Avatar initials={CLIENT.initials} size="xs" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[9.5px] font-bold leading-tight text-ink">
                  {CLIENT.name}
                </span>
                <span className="block truncate text-[8px] leading-tight text-stone-400">
                  {typing ? 'typing…' : MESSAGES[1].body}
                </span>
              </span>
            </div>
            <QuietRow name="Loomcraft" />
            <QuietRow name="Saffron Foods" />
          </div>

          {/* The conversation */}
          <div className="flex min-w-0 flex-1 flex-col bg-stone-50/60">
            <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 p-2">
              <div className="flex justify-center">
                <span className="rounded-full bg-white px-1.5 py-0.5 text-[7.5px] font-medium text-stone-500 shadow-sm ring-1 ring-stone-200/70">
                  {MESSAGES[0].ago}
                </span>
              </div>

              {/* Hers */}
              <div className="flex justify-start">
                <span className="max-w-[78%] rounded-2xl rounded-bl-md bg-white px-2 py-1 text-[9px] leading-snug text-stone-800 shadow-sm ring-1 ring-stone-200/70">
                  {MESSAGES[0].body}
                  <span className="mt-0.5 block text-right text-[7px] leading-none text-stone-400">
                    {MESSAGES[0].time}
                  </span>
                </span>
              </div>

              {/* Yours — arrives on the click. */}
              <div
                className={`flex justify-end transition-all duration-[520ms] ease-[cubic-bezier(0.2,1.06,0.3,1)] ${
                  sent ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
                }`}
              >
                <span className="max-w-[78%] rounded-2xl rounded-br-md bg-orange-600 px-2 py-1 text-[9px] leading-snug text-white shadow-sm">
                  {MESSAGES[1].body}
                  <span className="mt-0.5 flex items-center justify-end gap-0.5 text-[7px] leading-none text-white/70">
                    {MESSAGES[1].time}
                    <Check className="h-2 w-2" aria-hidden />
                  </span>
                </span>
              </div>

              {/* The live tell. */}
              <div
                className={`flex justify-start transition-all duration-[400ms] ${
                  typing ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                }`}
              >
                <span className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-2 py-1.5 shadow-sm ring-1 ring-stone-200/70">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="journey-dot h-1 w-1 rounded-full bg-stone-400"
                      style={{
                        animation: typing ? 'journey-typing 1.2s ease-in-out infinite' : 'none',
                        animationDelay: `${i * 160}ms`,
                      }}
                    />
                  ))}
                  <span className="ml-0.5 text-[7.5px] font-medium text-stone-400">
                    {CLIENT.contact.split(' ')[0]} is typing
                  </span>
                </span>
              </div>
            </div>

            {/* Composer */}
            <div className="flex flex-none items-center gap-1.5 border-t border-stone-200/70 bg-white p-1.5">
              <span className="flex h-6 min-w-0 flex-1 items-center rounded-full border border-stone-300 px-2 text-[9px] text-stone-500">
                {sent ? (
                  <span className="text-stone-300">Message {CLIENT.name}…</span>
                ) : (
                  MESSAGES[1].body
                )}
              </span>
              <Spotlight on={beat === 1} radius="rounded-full">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-orange-600 text-white">
                  <Send className="h-2.5 w-2.5" aria-hidden />
                </span>
              </Spotlight>
            </div>
          </div>
        </div>

        <Tip on={beat === 1} className="bottom-[19%] right-[4%]">
          One thread per client — no more WhatsApp archaeology.
        </Tip>
      </Body>
    </Screen>
  )
}

/* ── 10 · The loop closes ── HERO ───────────────────────────────────────────
   Completion, a verified review, a public badge — and then the referral, which
   is the only stage that shows two screens at once on purpose: the review on
   one side, the Leads pipeline from chapter 01 on the other, with the new lead
   dropping into it. The thread ties back up the gutter at the same moment.
   ────────────────────────────────────────────────────────────────────────── */
export function Stage10({ on, beat }: StageProps) {
  const completed = beat >= 2
  const referred = beat >= 3

  return (
    <Screen>
      <TopBar title="Reviews">
        <NovaChip on={on} size="sm" />
      </TopBar>

      <Body className="p-2.5">
        <div className="flex h-full flex-col gap-2">
          {/* The project, closing out. */}
          <div className="flex flex-none items-center gap-2 rounded-lg border border-stone-200/70 bg-white px-2 py-1.5">
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[10px] font-bold text-ink">{PROJECT.name}</span>
              <span className="block text-[8px] text-stone-400">{CLIENT.name}</span>
            </span>
            {completed ? (
              <Badge tint="bg-emerald-50 text-emerald-700" className="animate-fade-in">
                <CheckCircle2 className="h-2.5 w-2.5" aria-hidden />
                Completed
              </Badge>
            ) : (
              <Spotlight on={beat === 1} radius="rounded-md">
                <Btn>
                  <Check className="h-2.5 w-2.5" aria-hidden />
                  Mark completed
                </Btn>
              </Spotlight>
            )}
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-5 gap-2">
            {/* The review */}
            <div className="col-span-3 flex min-h-0 flex-col gap-2">
              <Panel
                className={`flex-none p-2 transition-all duration-[640ms] ease-[cubic-bezier(0.2,1.04,0.3,1)] ${
                  completed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Stars run={completed} />
                  <Badge tint="bg-emerald-50 text-emerald-700" className="ml-auto">
                    <BadgeCheck className="h-2.5 w-2.5" aria-hidden />
                    Verified
                  </Badge>
                </div>
                <p className="mt-1.5 text-[9.5px] font-medium leading-snug text-stone-700">
                  “{REVIEW.body}”
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 border-t border-stone-100 pt-1.5">
                  <Avatar initials="AR" size="xs" />
                  <span className="text-[8.5px] font-semibold text-stone-600">{REVIEW.author}</span>
                  <span className="text-[8px] text-stone-400">· {REVIEW.month}</span>
                </div>
              </Panel>

              {/* The public badge this earns. */}
              <div
                className={`flex flex-none items-center gap-2 rounded-lg bg-espresso px-2 py-1.5 transition-all duration-[560ms] delay-[260ms] ${
                  completed ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                <span className="flex items-baseline gap-0.5">
                  <span className="font-display text-[15px] font-bold leading-none text-white tabular-nums">
                    <Count to={49} run={completed} duration={900} />
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block text-[8.5px] font-semibold leading-tight text-espresso-text">
                    Public rating on your site
                  </span>
                  <span className="block text-[7.5px] leading-tight text-espresso-muted">
                    {REVIEW.reviewCount} verified reviews
                  </span>
                </span>
                <Star
                  className="ml-auto h-3 w-3 flex-none text-orange-400"
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden
                />
              </div>
            </div>

            {/* The loop: back into the pipeline from chapter 01. */}
            <div className="col-span-2 flex min-h-0 flex-col">
              <div className="flex flex-none items-center gap-1">
                <Gift className="h-2.5 w-2.5 text-orange-600" aria-hidden />
                <Caption>Leads · New</Caption>
              </div>

              <div className="mt-1 min-h-0 flex-1 rounded-lg border border-stone-200/60 bg-stone-100/50 p-1">
                {/* The referral card, dropping in. */}
                <div
                  className={`rounded-lg border bg-white p-1.5 transition-all duration-[700ms] ease-[cubic-bezier(0.2,1.08,0.3,1)] ${
                    referred
                      ? 'translate-y-0 border-teal-200 opacity-100 shadow-[0_8px_18px_-8px_rgba(67,36,16,0.2)] ring-1 ring-teal-200/70'
                      : '-translate-y-4 border-stone-200 opacity-0'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="truncate text-[10px] font-semibold leading-tight text-ink">
                      {REFERRAL.name}
                    </span>
                    <span className="flex-none text-[8.5px] font-semibold tabular-nums text-ink">
                      {REFERRAL.value}
                    </span>
                  </div>
                  <span className="mt-0.5 block truncate text-[8.5px] leading-tight text-stone-400">
                    {REFERRAL.company}
                  </span>
                  <div className="mt-1 border-t border-stone-100 pt-1">
                    <Badge tint={REFERRAL.sourceBadge}>{REFERRAL.sourceLabel}</Badge>
                  </div>
                </div>

                <p
                  className={`mt-1.5 px-0.5 font-serif-display text-[9px] italic leading-snug text-orange-700/70 transition-opacity duration-700 delay-300 ${
                    referred ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {CLIENT.contact.split(' ')[0]} referred him from her portal — so chapter one
                  starts again.
                </p>
              </div>
            </div>
          </div>

          <Tip on={beat === 1} className="left-[3%] top-[15%]">
            Completing the project asks for the review. Verified ones go public.
          </Tip>
        </div>
      </Body>
    </Screen>
  )
}

/** Five stars that fill one at a time. The stagger is the point — all five at
    once reads as an image, not an event. */
function Stars({ run }: { run: boolean }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={`h-3 w-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.5,0.64,1)] ${
            run ? 'scale-100 text-orange-500 opacity-100' : 'scale-50 text-stone-300 opacity-40'
          }`}
          style={{ transitionDelay: run ? `${180 + i * 110}ms` : '0ms' }}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </span>
  )
}

