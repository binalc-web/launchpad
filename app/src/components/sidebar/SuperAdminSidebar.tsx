import {
  LayoutGrid,
  Building,
  MapPin,
  Users,
  Shield,
  GraduationCap,
  CreditCard,
  ClipboardCheck,
  ReceiptText,
  Tag,
  FileQuestion,
  BookOpen,
  Activity,
  Lock,
  FileSpreadsheet,
  Wrench,
  BarChart,
  Bell,
  Settings,
} from "lucide-react";
import { BSPBlueprintLogo } from "./BSPBlueprintLogo";
import { SidebarGroupLabel } from "./SidebarGroupLabel";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { ROUTES } from "@/const/routes";

export function SuperAdminSidebar() {
  return (
    <aside
      data-node-id="591-1530736"
      data-name="Super Admin Sidebar"
      className="flex shrink-0 w-[280px] min-h-screen border-r border-[var(--sidebar-border)] bg-background box-border flex flex-col justify-start items-start p-0 gap-0"
      role="navigation"
      aria-label="Super Admin navigation"
    >
      {/* Logo Wrapper */}
      <div className="flex shrink-0 w-[280px] h-[60px] border-b border-[var(--sidebar-border)] box-border flex flex-row justify-between items-center">
        <div className="w-full h-full min-w-0 min-h-0 px-4">
          <BSPBlueprintLogo />
        </div>
      </div>

      {/* Main Wrapper */}
      <div className="flex flex-1 min-h-0 w-[280px] box-border flex flex-row justify-start items-start pt-4 pr-2 pb-4 pl-4 gap-2.5 overflow-hidden">
        {/* Options Wrapper - scrollable */}
        <div className="flex shrink-0 grow-0 w-[240px] min-h-0 flex flex-col justify-start items-start p-0 gap-2 overflow-y-auto">
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenuItem
            icon={LayoutGrid}
            label="Dashboard"
            to={ROUTES.DASHBOARD}
          />

          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarMenuItem
            icon={Building}
            label="Corporation Directory"
            to={ROUTES.CORPORATION_DIRECTORY}
          />
          <SidebarMenuItem
            icon={MapPin}
            label="Company Directory"
            to={ROUTES.COMPANY_DIRECTORY}
          />

          <SidebarGroupLabel>Users & Access</SidebarGroupLabel>
          <SidebarMenuItem
            icon={Users}
            label="User Directory"
            to={ROUTES.USER_DIRECTORY}
          />
          <SidebarMenuItem
            icon={Shield}
            label="Roles & Permissions"
            to={ROUTES.ROLES_PERMISSIONS}
          />
          <SidebarMenuItem
            icon={GraduationCap}
            label="Coaches"
            to={ROUTES.COACHES}
          />

          <SidebarGroupLabel>Finance</SidebarGroupLabel>
          <SidebarMenuItem
            icon={CreditCard}
            label="Billing Management"
            to={ROUTES.BILLING_MANAGEMENT}
          />
          <SidebarMenuItem
            icon={ClipboardCheck}
            label="Plans & Pricing"
            to={ROUTES.PLANS_PRICING}
          />
          <SidebarMenuItem
            icon={ReceiptText}
            label="Invoices"
            to={ROUTES.INVOICES}
          />
          <SidebarMenuItem
            icon={Tag}
            label="Promo Code Management"
            to={ROUTES.PROMO_CODE_MANAGEMENT}
          />

          <SidebarGroupLabel>Assessments</SidebarGroupLabel>
          <SidebarMenuItem
            icon={FileQuestion}
            label="Question Bank"
            to={ROUTES.QUESTION_BANK}
          />

          <SidebarGroupLabel>BSPU</SidebarGroupLabel>
          <SidebarMenuItem
            icon={BookOpen}
            label="Learning Library"
            to={ROUTES.LEARNING_LIBRARY}
          />

          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarMenuItem
            icon={Activity}
            label="System Health"
            to={ROUTES.SYSTEM_HEALTH}
          />
          <SidebarMenuItem
            icon={Lock}
            label="Security Baselines"
            to={ROUTES.SECURITY_BASELINES}
          />
          <SidebarMenuItem
            icon={FileSpreadsheet}
            label="Maintenance"
            to={ROUTES.MAINTENANCE}
          />

          <SidebarGroupLabel>Insights</SidebarGroupLabel>
          <SidebarMenuItem
            icon={BarChart}
            label="Reports"
            to={ROUTES.REPORTS}
          />
          <SidebarMenuItem
            icon={Bell}
            label="Notifications"
            to={ROUTES.NOTIFICATIONS}
            badge={1}
          />

          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarMenuItem
            icon={Settings}
            label="Settings"
            to={ROUTES.SETTINGS}
          />
        </div>

        {/* Scrollbar track */}
        <div
          className="flex shrink-0 w-1.5 flex-1 min-h-0 bg-[var(--sidebar-scrollbar)] rounded-full box-border self-stretch"
          aria-hidden
        />
      </div>
    </aside>
  );
}
