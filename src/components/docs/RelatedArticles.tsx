import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function RelatedArticles({
  title = 'Related',
  links,
}: {
  title?: string
  links: { title: string; href: string }[]
}) {
  if (links.length === 0) return null
  return (
    <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-orange-600"
            >
              <ArrowRight className="h-3.5 w-3.5 text-gray-400 transition-colors group-hover:text-orange-500" />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
