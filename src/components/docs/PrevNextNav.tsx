import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavLink {
  title: string
  href: string
}

export function PrevNextNav({ prev, next }: { prev?: NavLink; next?: NavLink }) {
  if (!prev && !next) return null
  return (
    <nav className="mt-12 flex items-stretch gap-4 border-t border-gray-200 pt-8">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-orange-300 hover:bg-orange-50/50"
        >
          <ChevronLeft className="h-4 w-4 text-gray-400 transition-colors group-hover:text-orange-500" />
          <div className="text-left">
            <div className="text-xs text-gray-500">Previous</div>
            <div className="text-sm font-medium text-gray-900 group-hover:text-orange-700">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-1 items-center justify-end gap-2 rounded-xl border border-gray-200 bg-white p-4 text-right transition-colors hover:border-orange-300 hover:bg-orange-50/50"
        >
          <div>
            <div className="text-xs text-gray-500">Next</div>
            <div className="text-sm font-medium text-gray-900 group-hover:text-orange-700">{next.title}</div>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-orange-500" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  )
}
