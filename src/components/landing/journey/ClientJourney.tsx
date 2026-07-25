'use client'

import Link from 'next/link'
import { useTransform } from 'framer-motion'
import { ArrowRight, MoveRight } from 'lucide-react'
import { useRef } from 'react'
import { APP_URL } from '@/lib/site'
import { Reveal } from '@/components/landing/Reveal'
import { SectionLabel } from '@/components/landing/SectionLabel'
import { ACTS, CLIENT, SCENES, SLOTS, TOTAL_WEIGHT, VH_PER_WEIGHT, slotRange } from './data'
import { CROP_DEFAULT, Frame } from './Frame'
import { ActDivider } from './ActCard'
import { Cursor, TapRipple } from './Cursor'
import { Thread, ThreadMobile } from './Thread'
import { useBeatOnView, useJourney, useLayoutMode, useReducedMotion, useViewportHeight } from './useJourney'
import { LeadDrawer, LeadsBoard } from './scenes/act1'
import { ClientPage, ConvertForm, PortalInvited } from './scenes/act2'
import {
  MeetingNew,
  ProjectFiles,
  ProjectNew,
  ProjectOverview,
  ProjectPayments,
  ProjectTeam,
  ProjectsBoard,
} from './scenes/act3'
import { OwnerMessages, PortalHome, PortalLogin, PortalMessages, PortalProject } from './scenes/act4'
import { MarkCompleted, PortalReferral, PortalReview, PublicReviews } from './scenes/act5'
import type { SceneProps } from './scenes/types'

/* ══════════════════════════════════════════════════════════════════════════
   ONE CLIENT, FIVE ACTS.

     · a title beat        — "Meet Nova Studio."
     · the journey         — desktop: one pinned window, five acts of screens
                             mobile:  the same screens, stacked
     · a resolution beat   — and the ask

   The desktop track is a tall scroll region with a single sticky viewport inside
   it. The browser frame mounts once and never unmounts; the screens cross-fade
   behind it, and nothing is ever thrown over the window — when the story moves
   to a new act, the window simply holds still and the chapter turn happens on
   the thread and the rail beside it. That is why this reads as one window
   travelling through an app rather than a scrolling list of screenshots.
   ══════════════════════════════════════════════════════════════════════════ */

/** Scene id → component. Adding a scene is one entry here and one in data.ts. */
const SCREENS: Record<string, (p: SceneProps) => JSX.Element> = {
  'leads-board': LeadsBoard,
  'lead-drawer': LeadDrawer,
  'convert-form': ConvertForm,
  'client-page': ClientPage,
  'portal-invited': PortalInvited,
  'project-new': ProjectNew,
  'project-overview': ProjectOverview,
  'project-payments': ProjectPayments,
  'project-team': ProjectTeam,
  'project-files': ProjectFiles,
  'meeting-new': MeetingNew,
  'projects-board': ProjectsBoard,
  'portal-login': PortalLogin,
  'portal-home': PortalHome,
  'portal-project': PortalProject,
  'portal-messages': PortalMessages,
  'owner-messages': OwnerMessages,
  'mark-completed': MarkCompleted,
  'portal-review': PortalReview,
  'portal-referral': PortalReferral,
  'public-reviews': PublicReviews,
}

/** The sticky box's own top/bottom padding, in px — kept in sync with the
    `pt-[...]`/`pb-*` classes below so the window's height cap matches what's
    actually left over once the floating header is cleared. */
const STICKY_PT = 112
const STICKY_PB = 32

export function ClientJourney() {
  const reduced = useReducedMotion()
  const mode = useLayoutMode()
  const trackRef = useRef<HTMLDivElement>(null)
  const { slot, scene, act, intro, beat, progress } = useJourney(trackRef, reduced)
  const live = SCENES[scene]
  const viewportH = useViewportHeight()
  const frameMaxHeight = viewportH ? viewportH - STICKY_PT - STICKY_PB : undefined

  /** Total scroll length: the sum of per-slot dwell, plus one screen for the
      final scene to sit still in. */
  const trackHeight = `${Math.round(TOTAL_WEIGHT * VH_PER_WEIGHT) + 100}vh`

  /** The chrome's page-load bar runs while the act card is over the window. */
  const introRange = intro ? slotRange(slot) : null
  const loading = useTransform(
    progress,
    introRange ? [introRange[0] + 0.002, introRange[1] * 0.999] : [0, 1],
    introRange ? [0, 1] : [0, 0],
    { clamp: true }
  )

  return (
    <section id="features" className="relative scroll-mt-24">
      {/* ── The title beat ───────────────────────────────────────────────
          Almost no bottom padding: the pinned window centres itself in its own
          screen-height sticky box, which already puts ~120px of air under this
          copy. Adding more on top of that reads as a hole in the page. */}
      <div className="mx-auto max-w-6xl px-4 pb-1 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel icon={MoveRight}>One client, end to end</SectionLabel>
          </Reveal>
          <Reveal variant="mask" delay={90}>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-display-sm lg:text-display">
              Meet{' '}
              <span className="text-gradient-brand font-serif-display text-[1.12em] font-normal italic">
                {CLIENT.name}
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 max-w-measure text-lg leading-relaxed text-gray-600">
              A cold Instagram message on {CLIENT.created}. A five-star review and a referral before
              the month is out. Five acts, every one a real screen — one client, start to finish.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── The journey · desktop ──────────────────────────────────────── */}
      {/* The track is NOT aria-hidden: the rail is a real ordered list of every
          act and scene, so a screen reader gets the whole story in order even
          though one screen shows at a time. Only the window is decorative. */}
      <div
        ref={trackRef}
        className="relative h-0 overflow-hidden lg:h-[var(--journey-track)] lg:overflow-visible"
        style={{ '--journey-track': trackHeight } as React.CSSProperties}
      >
        {/* Dropped entirely on a phone once we know it's a phone: a clipped-but-
            present copy would still be read aloud alongside the stacked version
            below, and would have the device building a mock nobody can see. */}
        {mode !== 'narrow' && (
          <div className="mx-auto h-full max-w-6xl px-4 sm:px-6 lg:max-w-[78rem] lg:px-8 xl:max-w-[92rem] 2xl:max-w-[104rem]">
            <div className="relative h-full">
              {/* Centred, not top-aligned: the window is now height-capped to
                  fit under the floating header with room to spare, so
                  centring it in the sticky box is what uses the screen
                  instead of leaving air under the title. `pt` still clears
                  the header — see STICKY_PT above. */}
              <div className="sticky top-0 flex h-screen items-center pb-8 pt-[7rem]">
                <div className="flex w-full items-center gap-7">
                  <Thread scene={scene} act={act} intro={intro} />
                  <Rail slot={slot} scene={scene} act={act} intro={intro} />

                  <div className="flex min-w-0 flex-1 justify-center" aria-hidden>
                    <Frame
                      url={live.url}
                      reduced={reduced}
                      loading={loading}
                      maxHeight={frameMaxHeight}
                    >
                      {/* Only the live screen and its neighbours are mounted, and
                          layers cross-fade with opacity alone. */}
                      {SCENES.map((s, i) => {
                        if (Math.abs(i - scene) > 1) return null
                        const Screen = SCREENS[s.id]
                        const on = i === scene
                        return (
                          <div
                            key={s.id}
                            className={`absolute inset-0 transition-opacity duration-[460ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                              on ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <Screen beat={on ? beat : i < scene ? 3 : 0} reduced={reduced} />
                          </div>
                        )
                      })}

                      {/* The hand, in the stage's own coordinates. */}
                      {live.cursor && !intro && (
                        <Cursor
                          beat={beat}
                          to={live.cursor}
                          dragTo={live.cursor.dragTo}
                          reduced={reduced}
                        />
                      )}
                    </Frame>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── The journey · mobile ───────────────────────────────────────── */}
      {mode !== 'wide' && (
        <div className="relative lg:hidden">
          <ThreadMobile />
          <ol className="py-4">
            {SCENES.map((s, i) => (
              <li key={s.id}>
                {/* An act divider precedes the first scene of each act, so the
                    five chapters are as legible stacked as they are pinned. */}
                {(i === 0 || SCENES[i - 1].act !== s.act) && (
                  <div className="px-4 pb-8 pl-12 pt-10 first:pt-2">
                    <ActDivider act={s.act} />
                  </div>
                )}
                <MobileScene index={i} reduced={reduced} />
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ── The resolution beat ────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="relative">
          <div className="rule-warm" />
          <div className="grid items-end gap-8 pt-12 sm:grid-cols-12 sm:gap-12">
            <Reveal className="sm:col-span-7">
              {/* 8 July to the end of the month — the span the opening beat
                  promises, counted out. Not a rounded-up "one month". */}
              <p className="font-serif-display text-2xl italic leading-snug text-orange-700/80 sm:text-3xl">
                Twenty-three days. One client. Not one spreadsheet.
              </p>
              <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[2rem]">
                And that was one client. Run your whole business this way.
              </h3>
            </Reveal>

            <Reveal delay={120} className="sm:col-span-5 sm:justify-self-end">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`${APP_URL}/signup`}
                  className="focus-ember group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-ember transition-all duration-300 hover:bg-orange-700 hover:shadow-ember-lg"
                >
                  Start free
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/features"
                  className="focus-ember group inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.14em] text-orange-600 transition-colors hover:text-orange-700"
                >
                  Explore all features
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-200 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-50">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── The rail ──────────────────────────────────────────────────────────────
   Every act and every scene lives in the DOM as a real ordered list, so the
   story is readable by a screen reader and indexable in order; only the live
   one is visible. The act numeral is set in the hero's accent serif because
   that is this page's established voice for a chapter mark.
   ────────────────────────────────────────────────────────────────────────── */
function Rail({
  slot,
  scene,
  act,
  intro,
}: {
  slot: number
  scene: number
  act: number
  intro: boolean
}) {
  const sceneCount = SCENES.filter((s) => s.act === act).length
  const sceneNo = SCENES.slice(0, scene + 1).filter((s) => s.act === act).length

  return (
    <div className="relative h-[17.5rem] w-[11.5rem] flex-none xl:w-[13rem]">
      <div className="absolute inset-x-0 top-0 flex items-baseline gap-2">
        <span className="font-serif-display text-3xl italic leading-none text-orange-600/85">
          Act {ACTS[act].n}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <ol className="absolute inset-x-0 top-14">
        {SCENES.map((s, i) => {
          const live = i === scene && !intro
          return (
            <li
              key={s.id}
              className={`absolute inset-x-0 top-0 transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                live
                  ? 'translate-y-0 opacity-100'
                  : i < scene
                    ? 'pointer-events-none -translate-y-3 opacity-0'
                    : 'pointer-events-none translate-y-3 opacity-0'
              }`}
            >
              <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-gray-600">{s.line}</p>
            </li>
          )
        })}

        {/* The chapter turn. No panel over the screen any more — the act
            announces itself here, on the rail, beside the thread's lit node. */}
        <li
          className={`absolute inset-x-0 top-0 transition-all duration-[450ms] ${
            intro ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-700 ring-1 ring-orange-200/70">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_2px_rgba(234,88,12,0.55)]" />
            New chapter
          </span>
          <h3 className="mt-3 font-serif-display text-2xl font-normal italic leading-tight text-gray-900">
            {ACTS[act].title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-gray-600">{ACTS[act].line}</p>
        </li>
      </ol>

      {/* Position in the story — a hairline, not a scrollbar. */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2">
        <span className="font-display text-[10px] font-bold tabular-nums tracking-[0.14em] text-stone-400">
          {intro ? `ACT ${ACTS[act].n}` : `${sceneNo} / ${sceneCount}`}
        </span>
        <span className="relative h-px flex-1 overflow-hidden bg-line">
          <span
            className="absolute inset-y-0 left-0 bg-orange-500 transition-[width] duration-500 ease-out"
            style={{ width: `${((slot + 1) / SLOTS.length) * 100}%` }}
          />
        </span>
      </div>
    </div>
  )
}

/* ── Mobile ────────────────────────────────────────────────────────────────
   Not a degraded desktop: a stacked editorial sequence where each scene plays
   its beat once as it arrives. No pinning and no fake cursor — a tap ripple
   instead, because a pointer on a touch device is a lie about how the product
   is used. The frame crops past the app rail so the content is still legible
   after scaling down.
   ────────────────────────────────────────────────────────────────────────── */
function MobileScene({ index, reduced }: { index: number; reduced: boolean }) {
  const { ref, beat, seen } = useBeatOnView<HTMLDivElement>(reduced)
  const s = SCENES[index]
  const Screen = SCREENS[s.id]
  const sceneNo = SCENES.slice(0, index + 1).filter((x) => x.act === s.act).length

  return (
    <div ref={ref} className="relative pb-12">
      <div className="pl-12 pr-4">
        <span
          aria-hidden
          className={`absolute left-[0.875rem] top-1.5 h-2.5 w-2.5 rounded-full transition-all duration-700 ${
            seen ? 'bg-orange-500/80 ring-4 ring-orange-500/12' : 'bg-orange-500/25'
          }`}
        />
        <span className="flex items-baseline gap-2">
          <span className="font-serif-display text-lg italic leading-none text-orange-600/85">
            {ACTS[s.act].n}.{sceneNo}
          </span>
          <span className="h-px flex-1 bg-line" />
        </span>
        <h3 className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-gray-900">
          {s.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.line}</p>
      </div>

      <div className="mt-4 px-3" aria-hidden>
        <Frame
          url={s.url}
          reduced={reduced}
          view={{
            x: s.crop?.x ?? CROP_DEFAULT.x,
            y: s.crop?.y ?? CROP_DEFAULT.y,
            w: s.crop?.w ?? CROP_DEFAULT.w,
            h: s.crop?.h ?? CROP_DEFAULT.h,
          }}
        >
          {seen ? (
            <>
              <Screen beat={beat} reduced={reduced} />
              {s.cursor && !reduced && <TapRipple on={beat >= 2} />}
            </>
          ) : (
            <span className="block h-full w-full bg-canvas" />
          )}
        </Frame>
      </div>
    </div>
  )
}
