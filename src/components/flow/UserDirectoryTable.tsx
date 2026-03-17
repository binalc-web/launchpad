import { Badge } from "@/components/ui";
import { ArrowUpDown, ChevronLeft, ChevronRight, Eye, MoreHorizontal } from "lucide-react";

const USERS = [
  {
    id: "USER-001",
    name: "Jane Smith",
    email: "jane.smith@email.com",
    status: "active" as const,
    corporation: "Acme Corporation",
    corpId: "CORP-001",
    company: "New York HQ",
    region: "North America",
    role: "Platform Authority",
    category: "Corporation Admin",
    categoryVariant: "corp-admin" as const,
    phone: "+1 (212) 555-0199",
    timezone: "EST (Eastern Time)",
    createdOn: "01-15-2025",
  },
  {
    id: "USER-002",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "pending" as const,
    corporation: "Beta Solutions",
    corpId: "CORP-002",
    company: "San Francisco Office",
    region: "North America",
    role: "Corporate Controller",
    category: "Corporation Admin",
    categoryVariant: "corp-admin" as const,
    phone: "+1 (415) 555-0123",
    timezone: "CST (Central Time)",
    createdOn: "02-18-2025",
  },
  {
    id: "USER-003",
    name: "Emily Johnson",
    email: "emily.johnson@email.com",
    status: "active" as const,
    corporation: "Gamma Industries",
    corpId: "CORP-003",
    company: "Berlin Office",
    region: "Europe",
    role: "Operations Steward",
    category: "Company Admin",
    categoryVariant: "company-admin" as const,
    phone: "+1 (312) 555-0145",
    timezone: "EST (Eastern Time)",
    createdOn: "03-02-2025",
  },
  {
    id: "USER-004",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    status: "expired" as const,
    corporation: "Delta Innovations",
    corpId: "CORP-004",
    company: "Tokyo Office",
    region: "Japan",
    role: "Strategic Sponsor",
    category: "Executive/ Leadership",
    categoryVariant: "executive" as const,
    phone: "+1 (213) 555-0167",
    timezone: "EST (Eastern Time)",
    createdOn: "05-12-2025",
  },
  {
    id: "USER-005",
    name: "Sarah Davis",
    email: "sarah.davis@email.com",
    status: "active" as const,
    corporation: "NA",
    corpId: "",
    company: "Sydney Office",
    region: "Australia",
    role: "Success Director",
    category: "Client Success Manager (Manager/ Dept. Head)",
    categoryVariant: "success-category" as const,
    phone: "+1 (408) 555-0189",
    timezone: "MST (Mountain Time)",
    createdOn: "04-15-2025",
  },
  {
    id: "USER-006",
    name: "David Wilson",
    email: "david.wilson@email.com",
    status: "blocked" as const,
    corporation: "NA",
    corpId: "",
    company: "Toronto Office",
    region: "North America",
    role: "Financial Controller",
    category: "Finance & Accounting Manager (Manager/ Dept. Head)",
    categoryVariant: "success-category" as const,
    phone: "+1 (416) 555-0112",
    timezone: "PST (Pacific Time)",
    createdOn: "07-15-2025",
  },
  {
    id: "USER-007",
    name: "Laura Lee",
    email: "laura.lee@email.com",
    status: "expired" as const,
    corporation: "Epsilon Tech",
    corpId: "CORP-005",
    company: "NA",
    region: "",
    role: "Account Executive",
    category: "Sales Person (Gen. User/ Emp. Associate)",
    categoryVariant: "warning-category" as const,
    phone: "+1 (202) 555-0134",
    timezone: "AKST (Alaska Time)",
    createdOn: "06-20-2025",
  },
  {
    id: "USER-008",
    name: "Chris Martin",
    email: "chris.martin@email.com",
    status: "blocked" as const,
    corporation: "NA",
    corpId: "",
    company: "London Office",
    region: "United Kingdom",
    role: "Growth Representative",
    category: "BDR (Gen. User/ Emp. Associate)",
    categoryVariant: "warning-category" as const,
    phone: "+1 (646) 555-0156",
    timezone: "HST (Hawaii Time)",
    createdOn: "08-30-2025",
  },
];

function SortIcon() {
  return (
    <ArrowUpDown
      className="h-4 w-4 shrink-0 opacity-50 text-table-accent"
      aria-hidden
    />
  );
}

/**
 * UserDirectoryTable - Pixel-perfect table from Figma spec.
 * Main Wrapper: 2188×631px, gap 8px
 * Table Wrapper: 2188×577px
 * Header: 61px, cells: 64px, padding 16px
 */
export function UserDirectoryTable() {
  return (
    <div
      className="flex w-[2188px] max-w-full shrink-0 flex-col gap-2"
      data-name="Main Wrapper"
      data-node-id="591-1525730"
      role="region"
      aria-label="User directory table"
    >
      {/* Table Wrapper: 2188×577 */}
      <div
        className="flex h-[577px] w-[2188px] max-w-full shrink-0 flex-row overflow-x-auto"
        data-name="Table Wrapper"
        data-node-id="591-1525731"
      >
        <div className="min-w-[2188px] overflow-x-auto overflow-y-hidden">
          <table className="w-[2188px] border-collapse text-left" role="table">
            <thead>
              <tr>
                <th className="h-[61px] w-[120px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    User ID
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[220px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    User Name
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[130px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Status
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[202px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Corporation
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[211px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Company
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[213px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Role Name
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[405px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Category
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[199px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Work Phone No.
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[218px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Time Zone
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[180px] shrink-0 bg-table-header px-4 pt-5 text-sm font-medium text-table-text">
                  <span className="flex items-center gap-1">
                    Created On
                    <SortIcon />
                  </span>
                </th>
                <th className="h-[61px] w-[90px] shrink-0 bg-table-header px-4 py-5 text-sm font-medium text-table-text">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((user) => (
                <tr key={user.id} className="bg-background">
                  <td className="h-16 w-[120px] border-b border-table-row-border px-4 pt-[22px] text-sm text-foreground">
                    {user.id}
                  </td>
                  <td className="h-16 w-[220px] border-b border-table-row-border px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-foreground">{user.name}</span>
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </td>
                  <td className="h-16 w-[130px] border-b border-table-row-border px-4 py-5">
                    <Badge variant={user.status}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="h-16 w-[202px] border-b border-table-row-border px-4 py-3">
                    {user.corpId ? (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-foreground">
                          {user.corporation}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {user.corpId}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-foreground">
                        {user.corporation}
                      </span>
                    )}
                  </td>
                  <td className="h-16 w-[211px] border-b border-table-row-border px-4 py-3">
                    {user.region ? (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-foreground">
                          {user.company}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {user.region}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-foreground">
                        {user.company}
                      </span>
                    )}
                  </td>
                  <td className="h-16 w-[213px] border-b border-table-row-border px-4 pt-[22px] text-sm text-foreground">
                    {user.role}
                  </td>
                  <td className="h-16 w-[405px] border-b border-table-row-border px-4 py-5">
                    <Badge variant={user.categoryVariant}>{user.category}</Badge>
                  </td>
                  <td className="h-16 w-[199px] border-b border-table-row-border px-4 pt-[22px] text-sm text-foreground">
                    {user.phone}
                  </td>
                  <td className="h-16 w-[218px] border-b border-table-row-border px-4 pt-[22px] text-sm text-foreground">
                    {user.timezone}
                  </td>
                  <td className="h-16 w-[180px] border-b border-table-row-border px-4 pt-[22px] text-sm text-foreground">
                    {user.createdOn}
                  </td>
                  <td className="h-16 w-[90px] border-b border-table-row-border px-4 py-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90"
                        aria-label="View user"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-muted/30"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination: 46px height, gap 4 */}
      <div
        className="flex w-[2188px] max-w-full shrink-0 flex-col gap-1"
        data-name="Main Wrapper"
        data-node-id="591-1525884"
      >
        {/* Scrollbar: 6px */}
        <div
          className="h-1.5 w-full max-w-[648px] rounded-full bg-table-scrollbar"
          data-name="Scrollbar"
          aria-hidden
        />
        {/* Pagination */}
        <div
          className="flex h-9 w-full items-center justify-between"
          data-name="Pagination"
          data-node-id="591-1525886"
          role="navigation"
          aria-label="Table pagination"
        >
          <span className="text-sm text-table-pagination-text">
            Showing 8 of 16 results
          </span>
          <div className="flex items-center gap-2" data-name="Options Wrapper">
            <button
              type="button"
              className="flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm text-table-text hover:opacity-90"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-3.5 w-3.5 shrink-0" />
              <span className="text-sm">Previous</span>
            </button>
            <button
              type="button"
              className="flex h-9 min-w-[34px] items-center justify-center rounded-lg border border-table-row-border bg-primary px-4 text-sm text-table-text"
              aria-current="page"
            >
              1
            </button>
            <button
              type="button"
              className="flex h-9 min-w-[34px] items-center justify-center rounded-lg bg-primary px-4 text-sm text-table-text hover:opacity-90"
            >
              2
            </button>
            <button
              type="button"
              className="flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm text-table-text hover:opacity-90"
              aria-label="Next page"
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
