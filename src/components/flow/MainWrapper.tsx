import { Button, Input } from "@/components/ui";
import { Search, Upload, UserPlus, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Main Wrapper - User Directory main content area.
 * Pixel-perfect implementation from Figma spec.
 * Container: 1160×964px, flex column, gap 0
 */
export function MainWrapper() {
  return (
    <div
      className="flex h-[964px] w-[1160px] max-w-full shrink-0 grow-0 flex-col items-start justify-start gap-0 overflow-hidden rounded-lg bg-background"
      data-name="Main Wrapper"
      data-node-id="591-1525451"
      role="main"
      aria-label="User directory"
    >
      {/* Header: 1160×64 */}
      <header
        className="flex h-16 w-full shrink-0 items-center justify-between border-b border-border px-6"
        data-name="Header"
        role="banner"
      >
        <span className="text-base font-medium text-foreground">User Directory</span>
      </header>

      {/* AIO Wrapper: flex-1, contains inner header + table */}
      <div
        className="flex min-h-0 flex-1 flex-col items-start justify-start gap-0 overflow-hidden"
        data-name="AIO Wrapper"
      >
        {/* Inner Header: title, tabs, btns */}
        <div
          className="flex w-full shrink-0 flex-col gap-6 border-b border-border p-6"
          data-name="Inner Header"
        >
          {/* Title + Sub */}
          <div className="flex flex-col gap-1" data-name="Title + Sub">
            <h1 className="text-2xl font-semibold text-foreground">Users</h1>
            <p className="text-sm text-muted-foreground">
              Manage your team members and their permissions
            </p>
          </div>

          {/* Tabs + Btns row */}
          <div
            className="flex w-full flex-row flex-wrap items-center justify-between gap-4"
            data-name="Tabs + Btns"
          >
            {/* Tabs */}
            <div
              className="flex flex-row items-center gap-0 border-b border-border"
              data-name="Tabs"
              role="tablist"
              aria-label="User tabs"
            >
              <button
                type="button"
                className="border-b-2 border-primary px-4 py-2 text-sm font-medium text-foreground"
                role="tab"
                aria-selected="true"
              >
                All Users
              </button>
              <button
                type="button"
                className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                role="tab"
                aria-selected="false"
              >
                Pending
              </button>
              <button
                type="button"
                className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                role="tab"
                aria-selected="false"
              >
                Archived
              </button>
            </div>

            {/* Btns */}
            <div className="flex flex-row items-center gap-2" data-name="Btns">
              <Button variant="outline" size="md" className="gap-2">
                <Upload className="h-4 w-4" aria-hidden />
                Bulk Upload
              </Button>
              <Button variant="default" size="md" className="gap-2">
                <UserPlus className="h-4 w-4" aria-hidden />
                Invite User
              </Button>
            </div>
          </div>
        </div>

        {/* Table Wrapper */}
        <div
          className="flex min-h-0 flex-1 flex-col gap-4 overflow-auto p-6"
          data-name="Table Wrapper"
        >
          {/* Search + Filters */}
          <div
            className="flex w-full flex-row flex-wrap items-center justify-between gap-4"
            data-name="Search + Filters"
          >
            <div className="relative w-full max-w-sm">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                type="search"
                placeholder="Search users..."
                className="pl-9"
                aria-label="Search users"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>
          </div>

          {/* Table */}
          <div
            className="min-w-0 flex-1 overflow-x-auto rounded-lg border border-border"
            data-name="Table"
            role="region"
            aria-label="Users table"
          >
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="h-10 px-4 text-left font-medium text-foreground">Name</th>
                  <th className="h-10 px-4 text-left font-medium text-foreground">Email</th>
                  <th className="h-10 px-4 text-left font-medium text-foreground">Role</th>
                  <th className="h-10 px-4 text-left font-medium text-foreground">Status</th>
                  <th className="h-10 px-4 text-left font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                  { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
                  { name: "Bob Wilson", email: "bob@example.com", role: "Viewer", status: "Pending" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-b-0 hover:bg-muted/30"
                  >
                    <td className="h-12 px-4 font-medium text-foreground">{row.name}</td>
                    <td className="h-12 px-4 text-muted-foreground">{row.email}</td>
                    <td className="h-12 px-4 text-muted-foreground">{row.role}</td>
                    <td className="h-12 px-4">
                      <span
                        className={
                          row.status === "Active"
                            ? "text-success"
                            : "text-muted-foreground"
                        }
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="h-12 px-4">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            className="flex w-full flex-row items-center justify-between gap-4"
            data-name="Pagination"
            role="navigation"
            aria-label="Table pagination"
          >
            <p className="text-sm text-muted-foreground">Showing 1–3 of 3 users</p>
            <div className="flex flex-row items-center gap-1">
              <Button variant="outline" size="sm" disabled aria-label="Previous page">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="px-2 text-sm text-foreground">1</span>
              <Button variant="outline" size="sm" disabled aria-label="Next page">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
