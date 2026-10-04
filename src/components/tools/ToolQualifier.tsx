'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { signupUrl } from '@/lib/cta'

/**
 * One qualifying question under a free tool, and a recommendation that changes
 * with the answer.
 *
 * WHY IT EARNS ITS PLACE. A free tool brings a lot of people who will never be
 * customers — students, the curious, someone with one client. Asking the single
 * question that separates them ("how many active clients?") does three things:
 * it gives the visitor a genuinely different and more useful answer, it tells us
 * through the UTM campaign which segment a tool attracts, and it stops us
 * pitching a product to someone it would not help, which is the fastest way to
 * lose a future customer.
 *
 * WHAT IT DOES NOT DO. Nothing is sent anywhere. There is no form submission, no
 * email capture, no transfer of the tool's figures into the app. The answer lives
 * in component state for the length of the visit and shapes which copy and which
 * UTM campaign the visitor sees. Clicking through starts an ordinary signup.
 */

type Band = {
  id: string
  label: string
  /** The honest recommendation for this band — including "not yet". */
  headline: string
  body: string
  /** Null where signing up is genuinely not the right advice yet. */
  cta: string | null
}

const BANDS: Band[] = [
  {
    id: '0-2',
    label: '1–2',
    headline: 'Honestly? A spreadsheet is probably fine for now.',
    body: 'With one or two clients you can hold the whole picture in your head, and software is overhead rather than help. Clienter has a free-forever plan if you want somewhere tidier to keep quotes and invoices, but we would rather you came back when you have five clients and the admin has started to hurt. Our free templates and calculators are more useful to you today.',
    cta: null,
  },
  {
    id: '3-9',
    label: '3–9',
    headline: 'This is where the admin starts costing you real hours.',
    body: 'Around five clients is where most people stop being able to remember who owes what and which project is waiting on whom. The free plan covers 3 clients and 5 projects with the whole product in it — leads, quotes, e-signed contracts, projects, a client portal and invoicing — so you can test it against your actual work before paying anything.',
    cta: 'Start free',
  },
  {
    id: '10-24',
    label: '10–24',
    headline: 'You are past what a spreadsheet can hold.',
    body: 'At this volume the expensive problems are the invisible ones: a lead that never got a second message, an invoice nobody chased, a project whose budget quietly went. Pro covers 20 clients, 40 projects and 5 team members for one flat price, with auto-invoiced retainers and follow-up reminders. Start on the free plan and upgrade when you hit a limit.',
    cta: 'Start free',
  },
  {
    id: '25+',
    label: '25+',
    headline: 'You need unlimited, and probably payroll.',
    body: 'At this size you are running a team as much as a client list. Ultra removes every limit and adds team payroll and payslips, white-label branding, the client portal on your own domain, and lead integrations. Still worth starting on the free plan for an afternoon to see whether the workflow fits before you move anything across.',
    cta: 'Start free',
  },
]

export function ToolQualifier({
  /** The tool's path — becomes the UTM campaign so we can tell tools apart. */
  campaign,
}: {
  campaign: string
}) {
  const [answer, setAnswer] = useState<Band | null>(null)

  return (
    <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-stone-200/70 bg-white/70 p-6 shadow-soft backdrop-blur sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400">
          One question
        </p>
        <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          How many active clients do you have right now?
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Nothing is sent anywhere — it just changes what we would honestly recommend.
        </p>

        <div
          role="group"
          aria-label="Number of active clients"
          className="mt-5 flex flex-wrap gap-2.5"
        >
          {BANDS.map((band) => {
            const selected = answer?.id === band.id
            return (
              <button
                key={band.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setAnswer(selected ? null : band)}
                className={`press rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-stone-300 bg-white text-gray-800 hover:border-gray-900'
                }`}
              >
                {band.label}
              </button>
            )
          })}
        </div>

        {answer && (
          <div className="mt-6 border-t border-stone-200/70 pt-6">
            <p className="font-display text-lg font-bold tracking-tight text-gray-900">
              {answer.headline}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{answer.body}</p>

            {answer.cta ? (
              <a
                href={signupUrl('tool', `${campaign}-clients-${answer.id}`)}
                className="press group mt-5 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
              >
                {answer.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ) : (
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/templates"
                  className="press inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900"
                >
                  Free templates
                </a>
                <a
                  href="/tools"
                  className="press inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900"
                >
                  All free tools
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
