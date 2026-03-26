import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "destructive"
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--primary)] text-[var(--primary-foreground)]",
    secondary:
      "bg-[var(--muted)] text-[var(--muted-foreground)]",
    outline: "border border-[var(--border)] bg-transparent",
    success:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    destructive:
      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  }
  return (
    <div
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export { Badge }
