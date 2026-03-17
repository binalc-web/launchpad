import { type ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "success"
  | "active"
  | "pending"
  | "expired"
  | "blocked"
  | "corp-admin"
  | "company-admin"
  | "executive"
  | "success-category"
  | "warning-category";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseClasses =
    "inline-flex flex-row items-center justify-center rounded-lg py-[3px] px-2 gap-1.5 text-xs";
  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-muted text-foreground",
    success: "bg-success text-success-foreground",
    active: "bg-badge-active-bg text-badge-active-text",
    pending: "bg-badge-pending-bg text-badge-pending-text",
    expired: "bg-badge-expired-bg text-badge-expired-text",
    blocked: "bg-badge-blocked-bg text-badge-blocked-text",
    "corp-admin": "bg-badge-corp-admin-bg text-badge-corp-admin-text",
    "company-admin": "bg-badge-company-admin-bg text-badge-company-admin-text",
    executive: "bg-badge-executive-bg text-badge-executive-text",
    "success-category": "bg-badge-success-bg text-badge-success-text",
    "warning-category": "bg-badge-warning-bg text-badge-warning-text",
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
