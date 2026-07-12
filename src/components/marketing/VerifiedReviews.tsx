import Link from 'next/link'
import {
  Star,
  BadgeCheck,
  ShieldCheck,
  Code2,
  Sparkles,
  ArrowRight,
  Lock,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/landing/Reveal'

/**
 * Verified Client Reviews — the flagship trust feature. A Trustpilot-style
 * system that turns completed projects into credible, verified reviews the
 * freelancer can show off (public page + embeddable badge). Reused on the
 * homepage and the "business management software" SEO page.
 *
 * Note: no ratings/counts are hard-coded as real traction — the mock visual is
 * clearly illustrative, and the copy frames reviews as "coming from real
 * clients" until volume builds, per the launch messaging.
 */
const HOW: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Sparkles,
    title: 'Collected automatically',
    desc: 'Mark a project “completed” and your client is invited to review it — right inside the portal they already use. No links to chase, no extra logins.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuinely verified',
    desc: 'Every review is tied to a real client on a real completed project. You can’t edit or delete them — which is exactly what makes them credible.',
  },
  {
    icon: BadgeCheck,
    title: 'A public page, on us',
    desc: 'Get an auto-generated review page at your own agency slug — your logo, your average rating, every verified review. Free on every plan.',
  },
  {
    icon: Code2,
    title: 'An embeddable badge',
    desc: 'Drop one line of code on your own website to show a live, auto-updating star rating. Your reviews, working for you everywhere.',
  },
]

/** Illustrative mock of the public, verified review page. */
function ReviewCard({
  name,
  stars,
  text,
  date,
}: {
  name: string
  stars: number
  text: string
  date: string
}) {
  return (
    <div className="rounded-xl border border-stone-200/80 bg-white p-3.5 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600">
            {name[0]}
          </span>
          <span className="text-sm font-semibold text-gray-800">{name}</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
          <BadgeCheck className="h-3 w-3" /> Verified
        </span>
      </div>
      <div className="mt-2.5 flex gap-0.5 text-orange-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-3.5 w-3.5 ${i < stars ? 'fill-current' : 'text-stone-200'}`} />
        ))}
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{text}</p>
      <p className="mt-2 text-[11px] text-stone-400">{date}</p>
    </div>
  )
}

function ReviewPageMock() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(249,115,22,0.16),transparent_70%)] blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft-lg">
        <div className="flex items-center gap-1.5 border-b border-stone-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          <span className="ml-2 truncate text-[11px] font-medium text-gray-400">
            clienter.co.in/your-studio
          </span>
        </div>

        <div className="p-5 sm:p-6">
          {/* Agency header */}
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-base font-bold text-white shadow-lg shadow-orange-500/25">
              YS
            </span>
            <div>
              <div className="font-display text-base font-bold text-gray-900">Your Studio</div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">4.9</span>
                <span className="text-xs text-stone-400">· verified reviews</span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-4 space-y-2.5">
            <ReviewCard
              name="Ananya R."
              stars={5}
              text="Delivered ahead of schedule and kept us in the loop the whole way. Would hire again in a heartbeat."
              date="Verified Project · Jun 2026"
            />
            <ReviewCard
              name="Vikram T."
              stars={5}
              text="Professional from the first call to the final invoice. Exactly what a growing brand needs."
              date="Verified Project · May 2026"
            />
          </div>

          <p className="mt-3 text-center text-[10px] text-stone-400">Powered by Clienter</p>
        </div>
      </div>

      {/* Floating embeddable badge */}
      <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-stone-200/80 bg-white p-3 shadow-soft-lg sm:block">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-900">4.9</span>
        </div>
        <p className="mt-1 text-[10px] font-medium text-stone-400">Embeddable badge · your site</p>
      </div>
    </div>
  )
}

export function VerifiedReviews({ className = '' }: { className?: string }) {
  return (
    <section className={`relative ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
            <BadgeCheck className="h-3.5 w-3.5" /> New · Built-in trust
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Turn finished projects into{' '}
            <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
              verified reviews
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Social proof is the hardest thing for a freelancer to build — so Clienter builds it for
            you. Real reviews, from real clients, on real completed projects.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="space-y-6">
              {HOW.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900">{title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2 rounded-2xl border border-stone-200/70 bg-white/70 px-4 py-3 text-sm text-gray-600 shadow-soft backdrop-blur">
              <Lock className="h-4 w-4 flex-none text-orange-500" />
              Free on every plan — including Free — because the more agencies embed their badge, the
              more people discover Clienter.
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ReviewPageMock />
          </Reveal>
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            href="/features#verified-client-reviews"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
          >
            See how verified reviews work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
