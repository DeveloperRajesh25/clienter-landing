import { Info, AlertTriangle, Lightbulb } from 'lucide-react'

const styles = {
  info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', iconColor: 'text-blue-500' },
  warning: { icon: AlertTriangle, bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', iconColor: 'text-amber-500' },
  tip: { icon: Lightbulb, bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', iconColor: 'text-green-500' },
} as const

export function Callout({ type, children }: { type: 'info' | 'warning' | 'tip'; children: React.ReactNode }) {
  const s = styles[type]
  const Icon = s.icon
  return (
    <div className={`my-6 flex gap-3 rounded-xl border ${s.border} ${s.bg} p-4`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${s.iconColor}`} />
      <div className={`text-sm leading-relaxed ${s.text}`}>{children}</div>
    </div>
  )
}
