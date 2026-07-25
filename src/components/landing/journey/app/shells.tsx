'use client'

import {
  Bell,
  Calendar,
  CheckSquare,
  ChevronDown,
  CreditCard,
  FileSignature,
  FolderKanban,
  Gift,
  Home,
  MessageSquare,
  MessagesSquare,
  PanelLeftClose,
  Repeat,
  Settings,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Wallet,
  ClipboardList,
  FileText,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { CLIENT, CLIENTER_LOGO, STUDIO } from '../data'
import { Avatar, OrgMark } from './ui'

/* ──────────────────────────────────────────────────────────────────────────
   THE TWO APPS

   The owner's workspace wears Clienter's mark. The client's portal wears the
   agency's — "Powered by Clienter" is the only platform mark on that side, and
   getting that distinction right is the whole argument of act IV.

   Both rails mount once per scene and never animate; only the screen body
   changes, so nothing pops.
   ────────────────────────────────────────────────────────────────────────── */

type Item = { href: string; label: string; icon: LucideIcon }

/** Order mirrors ownerNavItems in the app: Leads pinned below Dashboard. */
const OWNER_NAV: Item[] = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/leads', label: 'Leads', icon: Target },
  { href: '/clients', label: 'Clients', icon: Users },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/retainers', label: 'Retainers', icon: Repeat },
  { href: '/payments', label: 'Payments', icon: TrendingUp },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
  { href: '/meetings', label: 'Meetings', icon: Calendar },
  { href: '/tasks', label: 'Tasks', icon: CheckSquare },
  { href: '/documents', label: 'Documents', icon: FileSignature },
  { href: '/team', label: 'Team', icon: UserCog },
  { href: '/billing', label: 'Billing', icon: CreditCard },
]

const PORTAL_NAV: Item[] = [
  { href: '/portal', label: 'Home', icon: Home },
  { href: '/portal/projects', label: 'Projects', icon: FolderKanban },
  { href: '/portal/financials', label: 'Financials', icon: Wallet },
  { href: '/portal/messages', label: 'Messages', icon: MessagesSquare },
  { href: '/portal/meetings', label: 'Meetings', icon: Calendar },
  { href: '/portal/requests', label: 'Requests', icon: ClipboardList },
  { href: '/portal/documents', label: 'Documents', icon: FileText },
  { href: '/portal/referrals', label: 'Referrals', icon: Gift },
]

function NavRow({ item, on, badge }: { item: Item; on: boolean; badge?: number }) {
  const Icon = item.icon
  return (
    <li>
      <span
        className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
          on ? 'bg-primary-50 text-primary-700' : 'text-stone-600'
        }`}
      >
        {on && (
          <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-primary-600" />
        )}
        <Icon className={`h-5 w-5 ${on ? 'text-primary-600' : 'text-stone-400'}`} aria-hidden />
        <span className="flex-1">{item.label}</span>
        {badge ? (
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-600 px-1.5 text-[11px] font-semibold text-white">
            {badge}
          </span>
        ) : null}
      </span>
    </li>
  )
}

/** The owner workspace: fixed 256px rail, warm white, Clienter's own mark. */
export function OwnerShell({
  nav,
  children,
  unread = 0,
}: {
  nav: string | null
  children: ReactNode
  unread?: number
}) {
  return (
    <div className="flex h-full bg-canvas">
      <aside className="flex w-64 flex-none flex-col border-r border-stone-200/70 bg-white">
        <div className="flex h-16 items-center justify-between px-5">
          <span className="flex items-center gap-2.5">
            <OrgMark
              name="Clienter"
              src={CLIENTER_LOGO}
              className="h-8 w-8 rounded-lg !ring-0"
            />
            <span className="text-lg font-bold tracking-tight text-ink">Clienter</span>
          </span>
          <Bell className="h-5 w-5 text-stone-400" aria-hidden />
        </div>

        <div className="px-3 pb-3">
          <span className="flex items-center gap-2.5 rounded-xl border border-stone-200/70 bg-stone-50 px-3 py-2.5">
            <OrgMark name={STUDIO.name} src={STUDIO.logo} className="h-8 w-8 rounded-lg" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-ink">{STUDIO.name}</span>
              <span className="mt-0.5 inline-flex rounded-full bg-purple-50 px-1.5 py-0.5 text-[10px] font-medium text-purple-700">
                Owner
              </span>
            </span>
          </span>
        </div>

        <nav className="min-h-0 flex-1 overflow-hidden px-3" aria-hidden>
          <ul className="space-y-1">
            {OWNER_NAV.map((item) => (
              <NavRow
                key={item.href}
                item={item}
                on={item.href === nav}
                badge={item.href === '/messages' ? unread : 0}
              />
            ))}
          </ul>
        </nav>

        <div className="border-t border-stone-200/70 p-3">
          <span className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-stone-600">
            <Settings className="h-5 w-5 text-stone-400" aria-hidden />
            Settings
          </span>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">{children}</div>
    </div>
  )
}

/** Standard padded page body for owner screens. */
export function Page({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`flex min-h-0 flex-1 flex-col px-6 py-5 ${className}`}>{children}</div>
}

/**
 * The client portal. Same shape as the owner app, different owner: the agency's
 * name at the top, and Clienter reduced to a footnote at the bottom.
 */
export function PortalShell({
  nav,
  children,
  wide,
  flush,
}: {
  nav: string | null
  children: ReactNode
  /** Messages fills the frame instead of sitting in the centred column. */
  wide?: boolean
  flush?: boolean
}) {
  return (
    <div className="flex h-full bg-canvas">
      <aside className="flex w-64 flex-none flex-col border-r border-line bg-white">
        <div className="flex h-16 items-center gap-3 px-5">
          <OrgMark name={STUDIO.name} src={STUDIO.logo} className="h-9 w-9 rounded-xl" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-ink">{STUDIO.name}</span>
            <span className="block text-xs text-ink-muted">Client portal</span>
          </span>
        </div>

        <nav className="min-h-0 flex-1 overflow-hidden px-3 pt-2" aria-hidden>
          <ul className="space-y-1">
            {PORTAL_NAV.map((item) => (
              <NavRow key={item.href} item={item} on={item.href === nav} />
            ))}
          </ul>
        </nav>

        <div className="space-y-2 border-t border-line p-3">
          <span className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-stone-600">
            <PanelLeftClose className="h-5 w-5 text-stone-400" aria-hidden />
            Collapse
          </span>
          <p className="px-3 text-xs text-ink-faint">
            Powered by <span className="font-semibold text-ink-muted">Clienter</span>
          </p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-14 flex-none items-center gap-2 border-b border-line bg-surface/90 px-5 backdrop-blur">
          <p className="truncate text-sm text-ink-muted">
            Welcome, <span className="font-semibold text-ink">{CLIENT.contact}</span>
          </p>
          <span className="ml-auto flex items-center gap-2">
            <Bell className="h-5 w-5 text-stone-400" aria-hidden />
            <Avatar initials={CLIENT.contact[0]} size="sm" className="!bg-primary-600 !text-white" />
            <ChevronDown className="h-4 w-4 text-stone-400" aria-hidden />
          </span>
        </header>

        <main
          className={
            flush
              ? 'flex min-h-0 flex-1 flex-col'
              : `mx-auto w-full min-h-0 flex-1 px-10 py-6 ${wide ? '' : 'max-w-5xl'}`
          }
        >
          {children}
        </main>
      </div>
    </div>
  )
}

/** The public reviews page — no app chrome at all, just the agency and the proof. */
export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full overflow-hidden bg-[#F8F8F7] px-6 py-10">
      <div className="mx-auto max-w-2xl">{children}</div>
    </div>
  )
}
