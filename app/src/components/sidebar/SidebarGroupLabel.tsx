interface SidebarGroupLabelProps {
  children: React.ReactNode;
}

export function SidebarGroupLabel({ children }: SidebarGroupLabelProps) {
  return (
    <div
      className="flex shrink-0 grow-0 w-[240px] h-[30px] flex-row justify-start items-center py-[7px] px-3 gap-2 box-border"
      role="presentation"
    >
      <span className="flex shrink-0 grow-0 w-[216px] h-4 text-xs text-[var(--sidebar-label)] text-left">
        {children}
      </span>
    </div>
  );
}
