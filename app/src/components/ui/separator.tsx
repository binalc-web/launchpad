import * as React from "react";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={`h-px w-full bg-border ${className}`}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
