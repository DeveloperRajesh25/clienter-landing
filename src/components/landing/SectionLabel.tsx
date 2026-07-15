import { type LucideIcon } from 'lucide-react'

/**
 * Section eyebrow. Deliberately not the rounded pill chip every SaaS page
 * uses: a lit ember dot, a hairline rule that grows out of it, then tracked
 * micro-caps. The rule anchors the label to the edge of the column, which is
 * what makes the offset/asymmetric sections read as intentional.
 */
export function SectionLabel({
  children,
  icon: Icon,
  tone = 'light',
  className = '',
}: {
  children: React.ReactNode
  icon?: LucideIcon
  /** `dark` inverts the rule + label for espresso surfaces. */
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="relative flex h-1.5 w-1.5 flex-none">
        <span className="absolute inset-0 rounded-full bg-orange-500" />
        <span
          className={`absolute -inset-1 rounded-full ${dark ? 'bg-orange-500/25' : 'bg-orange-500/20'}`}
        />
      </span>
      <span
        aria-hidden
        className={`h-px w-6 flex-none bg-gradient-to-r ${
          dark ? 'from-orange-500/60 to-orange-500/0' : 'from-orange-500/70 to-orange-500/0'
        }`}
      />
      {Icon && <Icon className={`h-3.5 w-3.5 flex-none ${dark ? 'text-orange-400' : 'text-orange-500'}`} />}
      <span
        className={`text-[11px] font-bold uppercase leading-none tracking-[0.22em] ${
          dark ? 'text-orange-300' : 'text-orange-600'
        }`}
      >
        {children}
      </span>
    </span>
  )
}
