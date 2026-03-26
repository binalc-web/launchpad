import { type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SidebarMenuItemProps {
  icon: LucideIcon
  label: string
  to: string
  badge?: number
}

export function SidebarMenuItem({ icon: Icon, label, to, badge }: SidebarMenuItemProps) {
  return (
    <Link
      to={to}
      className="flex shrink-0 grow-0 w-[240px] h-8 rounded-[6px] flex-row justify-start items-center py-1 px-3 gap-2 box-border hover:bg-[var(--muted)]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2"
      aria-label={label}
    >
      <div className="flex min-w-0 flex-1 flex-row items-center gap-2 box-border">
        <div className="flex shrink-0 w-5 h-5 box-border relative" aria-hidden>
          <Icon className="w-5 h-5 text-[var(--sidebar-text)]" strokeWidth={1.5} />
        </div>
        <span className="min-w-0 flex-1 truncate text-sm text-[var(--sidebar-text)] text-left">
          {label}
        </span>
      </div>
      {badge !== undefined && badge > 0 && (
        <div
          className="flex shrink-0 w-6 h-6 rounded-[8px] bg-[var(--sidebar-badge-bg)] flex-row justify-center items-center py-[3px] px-2 box-border"
          aria-label={`${badge} notifications`}
        >
          <span className="text-xs text-[var(--sidebar-badge-text)] text-center leading-4">
            {badge}
          </span>
        </div>
      )}
    </Link>
  )
}
