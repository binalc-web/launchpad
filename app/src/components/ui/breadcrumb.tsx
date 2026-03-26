import * as React from "react"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className = "", items, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] ${className}`}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 shrink-0 text-[var(--muted-foreground)]" />
          )}
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--foreground)] font-medium">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
)
Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }
