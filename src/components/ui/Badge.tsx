import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseClasses =
    "inline-flex flex-row items-center justify-start gap-4 rounded-[32px] py-2 px-6";
  const variantClasses = {
    default: "bg-muted text-foreground",
    success: "bg-success text-success-foreground",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      role="status"
    >
      {children}
    </span>
  );
}
