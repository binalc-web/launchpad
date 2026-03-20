"use client";

import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked = false,
      onCheckedChange,
      disabled = false,
      className = "",
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      ref={ref}
      onClick={() => onCheckedChange?.(!checked)}
      className={`relative inline-flex h-[18px] w-[33px] shrink-0 cursor-pointer items-center rounded-full border-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
        checked ? "bg-brand-primary" : "bg-border"
      } ${className}`}
      {...props}
    >
      <span
        className={`pointer-events-none block h-[16px] w-[16px] rounded-full bg-background shadow-sm transition-transform ${
          checked ? "translate-x-[15px]" : "translate-x-[1px]"
        }`}
      />
    </button>
  )
);
Switch.displayName = "Switch";

export { Switch };
