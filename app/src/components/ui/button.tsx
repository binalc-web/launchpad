import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const variants = {
      default:
        "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--interactive-hover)]",
      secondary:
        "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--muted)]/80",
      destructive:
        "bg-red-600 text-white hover:bg-red-700",
      outline:
        "border border-[var(--border)] bg-transparent hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
      ghost: "hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
    }
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    }
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
