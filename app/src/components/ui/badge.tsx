import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-xs font-medium";
    const variants = {
      default: "bg-brand-primary text-white",
      secondary: "bg-brand-secondary text-white",
      outline: "border border-border bg-background text-foreground",
      success: "bg-success text-white",
    };
    return (
      <div
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
