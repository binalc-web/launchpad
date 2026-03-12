import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Building2,
  Building,
  Settings,
  Users,
  Shield,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ROUTES } from "@/constants/routes"

interface SidebarItem {
  label: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  badge?: string
}

const sidebarGroups: { label: string; items: SidebarItem[] }[] = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: ROUTES.DASHBOARD },
      {
        label: "Corporation Directory",
        icon: Building2,
        href: ROUTES.CORPORATION_DIRECTORY,
      },
      {
        label: "Company Directory",
        icon: Building,
        href: ROUTES.COMPANY_DIRECTORY,
        badge: "3",
      },
    ],
  },
  {
    label: "Administration",
    items: [{ label: "Configuration", icon: Settings, href: "/configuration" }],
  },
  {
    label: "Users & Access",
    items: [
      { label: "User Management", icon: Users, href: "/users" },
      { label: "Roles & Permissions", icon: Shield, href: "/roles" },
    ],
  },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside
      className="flex h-[900px] w-[280px] shrink-0 flex-col border-r border-[var(--sidebar-border)] bg-[var(--sidebar-bg)]"
      data-node-id="591-1530494"
    >
      {/* Logo Wrapper */}
      <div
        className="flex h-16 items-center px-6 border-b border-[var(--border)]"
        data-node-id="I591-1530494;2033-5490"
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[var(--primary)] flex items-center justify-center">
            <Building className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-[var(--foreground)]">
            Launchpad
          </span>
        </div>
      </div>

      {/* Main Wrapper - Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-6" data-node-id="I591-1530494;2064-3769">
          {sidebarGroups.map((group) => (
            <div key={group.label} data-node-id="I591-1530494;2033-5499">
              <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                {group.label}
              </p>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname.startsWith(item.href)
                  return (
                    <Link
                      key={item.label}
                      to={item.href ?? "#"}
                      className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-[var(--interactive-muted)] text-[var(--primary)] font-medium"
                          : "text-[var(--sidebar-foreground)] hover:bg-[var(--muted)] hover:text-[var(--sidebar-foreground-active)]"
                      }`}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  )
}
