import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

/**
 * Reusable closing call-to-action block (dark, gradient blobs) used at the
 * bottom of marketing sub-pages. Points to the home waitlist section.
 */
export function CtaSection({
  title = 'Get early access to Clienter',
  subtitle = 'Join the waitlist and get 1 month of Pro free when we launch. No credit card required.',
  badge = 'Free for the first 100 users',
}: {
  title?: string
  subtitle?: string
  badge?: string
}) {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gray-900 px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-20">
        <div className="absolute inset-0 -z-0 bg-grid-faint opacity-[0.07]" />
        <div className="absolute -left-16 -top-16 h-64 w-64 animate-blob rounded-full bg-orange-500/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 animate-blob rounded-full bg-amber-500/20 blur-3xl [animation-delay:3s]" />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-orange-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4" /> {badge}
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#waitlist"
              className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 sm:w-auto"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
