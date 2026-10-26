import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
            {isLast ? (
              <span className="font-medium text-gray-900">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-orange-600">
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
