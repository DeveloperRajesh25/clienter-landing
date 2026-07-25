'use client'

import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Gift,
  LayoutGrid,
  Package,
  Send,
  Star,
  Target,
  Wallet,
  FileText,
} from 'lucide-react'
import { CLIENT, INVOICE, PROJECT, REFERRAL, REVIEW, STUDIO } from '../data'
import { OTHER_REVIEWS } from '../app/cast'
import { OwnerShell, Page, PortalShell, PublicShell } from '../app/shells'
import {
  Avatar,
  Badge,
  Bar,
  Btn,
  Card,
  Count,
  Eyebrow,
  Field,
  OrgMark,
  Ring,
  Stars,
  Tabs,
  Tip,
} from '../app/ui'
import type { SceneProps } from './types'
import { ProjectOverview } from './act3'

/* ══════════════════════════════════════════════════════════════════════════
   ACT V — THE LOOP
   Completed, reviewed, referred, and published. The referral lands back in the
   pipeline act I opened with, which is the only reason the story is a loop
   rather than a list.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Scene: mark it completed ──────────────────────────────────────────────
   Deliberately the same overview screen act III left off on — the status pill
   is the only thing that changes, so the visitor recognises where they are.
   ────────────────────────────────────────────────────────────────────────── */
export function MarkCompleted({ beat, reduced }: SceneProps) {
  const done = beat >= 2

  return (
    <div className="relative h-full">
      <ProjectOverview
        beat={1}
        reduced={reduced}
        status={done ? 'Completed' : 'Ongoing'}
        statusRing={beat === 1}
      />

      <Tip on={beat === 1} x={330} y={112}>
        Completing the project is what asks {CLIENT.first} for a review. Nothing else does.
      </Tip>

      <div
        className={`absolute bottom-8 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 delay-200 ${
          beat >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-2.5 text-sm font-medium text-espresso-text shadow-lift-4">
          <Star className="h-4 w-4 text-primary-400" fill="currentColor" strokeWidth={0} aria-hidden />
          Review request sent to {CLIENT.name}&apos;s portal
        </span>
      </div>
    </div>
  )
}

/* ── Scene: five stars, from her ── HERO ────────────────────────────────────
   The review is left inside the portal only she can reach. That is what makes
   it verified — not a badge we chose to print.
   ────────────────────────────────────────────────────────────────────────── */
export function PortalReview({ beat }: SceneProps) {
  const rated = beat >= 2
  const submitted = beat >= 3

  return (
    <PortalShell nav="/portal/projects">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-ink-muted">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to projects
      </div>

      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-ink">{PROJECT.name}</h1>
        <Badge tone="blue" icon={CheckCircle2}>
          Completed
        </Badge>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">Timeline</span>
        <span className="text-emerald-600">Delivered 22 Jul 2026 · 24 days early</span>
      </div>
      <Bar value={100} run tone="emerald" className="mt-2" />

      <Tabs
        className="mt-5"
        active="Overview"
        items={[
          { label: 'Overview', icon: LayoutGrid },
          { label: 'Deliverables', icon: Package },
          { label: 'Financials', icon: Wallet },
          { label: 'Files & docs', icon: FileText },
        ]}
      />

      <div className="mt-5">
        <Eyebrow>Your review</Eyebrow>

        {submitted ? (
          <div className="mt-2 animate-fade-in rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <Stars run size="lg" />
              <span className="text-xs text-ink-muted">
                You reviewed this project · {REVIEW.on}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink">“{REVIEW.body}”</p>
            <p className="mt-3 flex items-center gap-2 border-t border-emerald-200/70 pt-3 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Thanks for your feedback!
            </p>
          </div>
        ) : (
          <div className="mt-2 rounded-2xl border border-line bg-surface p-5 shadow-soft">
            <p className="text-sm text-ink-muted">
              How did {STUDIO.name} do on this project? Your rating goes on their public reviews
              page.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Ring on={beat === 1} radius="rounded-xl">
                <Stars run={rated} size="lg" />
              </Ring>
              <span className={`text-sm font-semibold ${rated ? 'text-primary-600' : 'text-ink-faint'}`}>
                {rated ? 'Excellent' : 'Tap to rate'}
              </span>
            </div>

            <div className="mt-4">
              <Field
                area
                value={rated ? REVIEW.body : ''}
                placeholder="Anything you'd like to add? (optional)"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs text-ink-faint">
                Posted as {CLIENT.short} · verified through this portal
              </p>
              <Btn small icon={Send}>
                Submit review
              </Btn>
            </div>
          </div>
        )}
      </div>

      {/* The rest of the page she is looking at — the delivery this review is
          about. Without it the screen trails off into white below the card. */}
      <div className="mt-6">
        <Eyebrow>Progress</Eyebrow>
        <ul className="mt-2 space-y-2">
          {[
            ['Handover pack sent', '22 Jul 2026'],
            ['Homepage build', '18 Jul 2026'],
            ['Style tiles approved', '13 Jul 2026'],
          ].map(([what, when]) => (
            <li
              key={what}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-2.5 shadow-soft"
            >
              <CheckCircle2 className="h-4 w-4 flex-none text-emerald-500" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-sm text-ink">{what}</span>
              <span className="flex-none text-xs text-ink-faint">{when}</span>
            </li>
          ))}
        </ul>
      </div>

      <Tip on={beat === 1} x={200} y={640}>
        Only someone who can sign in here can leave one. That is what &ldquo;verified&rdquo; means.
      </Tip>
    </PortalShell>
  )
}

/* ── Scene: and she sends you Vikram ───────────────────────────────────────── */
export function PortalReferral({ beat }: SceneProps) {
  const sending = beat === 2
  const sent = beat >= 3

  return (
    <PortalShell nav="/portal/referrals">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50">
          <Gift className="h-5 w-5 text-primary-600" aria-hidden />
        </span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">Referrals</h1>
          <p className="mt-0.5 text-sm text-ink-muted">
            Know someone who needs our services? Introduce us.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-line bg-surface p-5 shadow-soft">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Their name" value={sent ? '' : REFERRAL.name} placeholder="Their name" />
          <Field label="Company" value={sent ? '' : REFERRAL.company} placeholder="Company" />
        </div>
        <div className="mt-4">
          <Field label="Email" value={sent ? '' : REFERRAL.email} placeholder="name@company.com" />
        </div>
        <div className="mt-4">
          <Field
            label="What do they need?"
            area
            value={sent ? '' : REFERRAL.note}
            placeholder="A line about what they're looking for"
          />
        </div>
        <div className="mt-4">
          <Ring on={beat === 1} radius="rounded-xl">
            <span className={`btn-primary ${sending ? 'opacity-70' : ''}`}>
              {sending ? 'Sending…' : sent ? 'Send another' : 'Send referral'}
            </span>
          </Ring>
        </div>
      </div>

      <div className="mt-6">
        <Eyebrow>Your referrals</Eyebrow>
        <div
          className={`mt-2 rounded-2xl border bg-surface p-4 shadow-soft transition-all duration-[680ms] ease-[cubic-bezier(0.2,1.06,0.3,1)] ${
            sent ? 'translate-y-0 border-teal-200 opacity-100 ring-1 ring-teal-200/70' : '-translate-y-3 border-line opacity-0'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">
                {REFERRAL.name} · {REFERRAL.company}
              </p>
              <p className="mt-0.5 text-xs text-ink-muted">Introduced {REFERRAL.on}</p>
            </div>
            <Badge tone="teal">Sent</Badge>
          </div>
        </div>

        {/* Where it goes next — the only place act V points back at act I. */}
        <div
          className={`mt-4 flex items-center gap-3 rounded-2xl border border-primary-100 bg-primary-50/60 px-4 py-3 transition-all delay-300 duration-[600ms] ${
            sent ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white">
            <Target className="h-4 w-4 text-primary-600" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary-900">
              {REFERRAL.name} is now a lead in {STUDIO.name}&apos;s pipeline
            </p>
            <p className="mt-0.5 flex items-center gap-2 text-xs text-primary-900/70">
              Tagged <span className="font-semibold">{REFERRAL.sourceLabel}</span> · sitting in New,
              where {CLIENT.name} started
            </p>
          </div>
        </div>
      </div>

      <Tip on={beat === 1} x={470} y={520}>
        Her introduction lands in your Leads board as a tagged referral. Chapter one, new stranger.
      </Tip>
    </PortalShell>
  )
}

/* ── Scene: the public page ── HERO ─────────────────────────────────────────
   The payoff of the whole story: a page you can put in a proposal, where every
   review on it came through a portal only a paying client could reach.
   ────────────────────────────────────────────────────────────────────────── */
export function PublicReviews({ beat }: SceneProps) {
  const run = beat >= 1

  return (
    <PublicShell>
      <div className="text-center">
        <OrgMark
          name={STUDIO.name}
          src={STUDIO.logo}
          className="mx-auto h-14 w-14 rounded-2xl !text-xl"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">{STUDIO.name}</h1>

        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="text-4xl font-bold tabular-nums text-ink">
            <Count to={REVIEW.publicScore} run={run} decimal />
          </span>
          <Stars run={run} size="lg" />
        </div>
        <p className="mt-1.5 text-sm text-ink-muted">{REVIEW.count} reviews</p>

        <span
          className={`mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 transition-all delay-200 duration-500 ${
            run ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
          }`}
        >
          <BadgeCheck className="h-4 w-4" aria-hidden />
          All reviews are left by real clients through a verified project portal
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {/* Hers, first. */}
        <div
          className={`rounded-2xl border border-emerald-200 bg-white p-5 shadow-soft transition-all duration-[640ms] ease-[cubic-bezier(0.2,1.04,0.3,1)] ${
            run ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <p className="text-sm font-bold text-ink">{REVIEW.author}</p>
            <Badge tone="green" icon={BadgeCheck}>
              Verified Project
            </Badge>
            <span className="ml-auto text-xs text-ink-faint">{REVIEW.month}</span>
          </div>
          <div className="mt-2">
            <Stars run={run} />
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-ink">{REVIEW.body}</p>
        </div>

        {OTHER_REVIEWS.map((r, i) => (
          <div
            key={r.who}
            className={`rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-[560ms] ease-out ${
              run ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: run ? `${180 + i * 110}ms` : '0ms' }}
          >
            <div className="flex items-center gap-2.5">
              <p className="text-sm font-bold text-ink">{r.who}</p>
              <Badge tone="green" icon={BadgeCheck}>
                Verified Project
              </Badge>
              <span className="ml-auto text-xs text-ink-faint">{r.when}</span>
            </div>
            <div className="mt-2">
              <Stars run={run} filled={r.stars} />
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{r.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-ink-faint">
        Powered by <span className="font-semibold text-ink-muted">Clienter</span>
      </p>
    </PublicShell>
  )
}
