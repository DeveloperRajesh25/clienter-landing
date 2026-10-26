const colors = {
  Free: 'bg-gray-100 text-gray-700',
  Pro: 'bg-orange-100 text-orange-700',
  Ultra: 'bg-purple-100 text-purple-700',
} as const

export function PlanBadge({ plan }: { plan: 'Free' | 'Pro' | 'Ultra' }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${colors[plan]}`}>
      {plan}
    </span>
  )
}
