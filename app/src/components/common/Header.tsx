import { Bell, User } from "lucide-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

interface HeaderProps {
  breadcrumbItems: { label: string; href?: string }[]
}

export function Header({ breadcrumbItems }: HeaderProps) {
  return (
    <header
      className="flex h-14 items-center justify-between border-b border-[var(--border)] bg-[var(--card)] px-6"
      data-node-id="591-1530496"
    >
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded-md p-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="rounded-md p-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          aria-label="User menu"
        >
          <User className="h-5 w-5" />
        </button>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--muted)]">
          <User className="h-4 w-4 text-[var(--muted-foreground)]" />
        </div>
      </div>
    </header>
  )
}
