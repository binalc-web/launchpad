import * as React from "react"

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }
>(({ className = "", orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={`shrink-0 bg-[var(--border)] ${
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px"
    } ${className}`}
    {...props}
  />
))
Separator.displayName = "Separator"

export { Separator }
