import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ROUTES } from "@/constants/routes"
import { Sidebar } from "@/components/common/Sidebar"
import { Header } from "@/components/common/Header"

function DetailRow({
  label,
  value,
}: {
  label: string
  value: string | React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1 py-3 first:pt-0">
      <span className="text-xs font-medium text-[var(--muted-foreground)]">
        {label}
      </span>
      <span className="text-sm text-[var(--foreground)]">{value}</span>
    </div>
  )
}

export function CompanyDetailsPage() {
  const [activeTab, setActiveTab] = useState("basic-info")

  return (
    <div
      className="flex min-h-screen w-full bg-[var(--background)]"
      data-node-id="591-1530493"
    >
      <aside className="shrink-0">
        <div className="fixed left-0 top-0 h-screen">
          <Sidebar />
        </div>
      </aside>

      <main
        className="flex flex-1 flex-col min-w-0 ml-[280px]"
        style={{ maxWidth: "1160px" }}
        data-node-id="591-1530495"
      >
        <Header
          breadcrumbItems={[
            { label: "Company Directory", href: ROUTES.COMPANY_DIRECTORY },
            { label: "New York HQ" },
          ]}
        />

        <div
          className="flex-1 p-6"
          data-node-id="591-1530497"
        >
          {/* Title Section */}
          <div
            className="mb-6 flex flex-col gap-4"
            data-node-id="591-1530498"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link to={ROUTES.COMPANY_DIRECTORY}>
                  <Button variant="ghost" size="icon" aria-label="Back">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex flex-col gap-1" data-node-id="591-1530500">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl font-semibold text-[var(--foreground)]">
                      New York HQ
                    </h1>
                    <Badge variant="success">Active</Badge>
                    <Badge variant="secondary">BSPBlueprint (Monthly)</Badge>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-2"
                data-node-id="591-1530507"
              >
                <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
                <Button>
                  <Pencil className="h-4 w-4" />
                  Edit Company
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div data-node-id="591-1530511">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="h-10">
                  <TabsTrigger value="basic-info">Basic Info.</TabsTrigger>
                  <TabsTrigger value="key-contacts">Key Contacts</TabsTrigger>
                  <TabsTrigger value="plan-seats">Plan & Seats</TabsTrigger>
                  <TabsTrigger value="branding">Branding</TabsTrigger>
                  <TabsTrigger value="configuration">Configuration</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Cards Wrapper */}
          {activeTab === "basic-info" && (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              data-node-id="591-1530512"
            >
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                {/* Company Basics */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>Company Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <DetailRow label="Company ID" value="NYC-HQ-001" />
                    <Separator />
                    <DetailRow label="Status" value="Active" />
                    <Separator />
                    <DetailRow label="Company Legal Name" value="New York Headquarters LLC" />
                    <Separator />
                    <DetailRow label="DBA/Trade Name" value="New York HQ" />
                    <Separator />
                    <DetailRow
                      label="Website URL"
                      value={
                        <a
                          href="https://www.nyhq.example.com"
                          className="text-[var(--primary)] hover:underline"
                        >
                          https://www.nyhq.example.com
                        </a>
                      }
                    />
                    <Separator />
                    <DetailRow label="Company Type" value="Subsidiary" />
                    <Separator />
                    <DetailRow label="Office Type" value="Headquarters" />
                    <Separator />
                    <DetailRow label="Region (Data Residency)" value="US East" />
                    <Separator />
                    <DetailRow label="Industry" value="Technology" />
                    <Separator />
                    <DetailRow label="Company Phone No." value="+1 (212) 555-0100" />
                    <Separator />
                    <DetailRow
                      label="Company Address"
                      value="350 5th Avenue, Suite 3000, New York, NY 10118"
                    />
                  </CardContent>
                </Card>

                {/* Parent Corporation Info */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>Parent Corporation Info.</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <DetailRow
                      label="Parent Corporation Legal Name"
                      value="Global Corp Inc."
                    />
                    <Separator />
                    <DetailRow label="Ownership Type" value="Wholly Owned" />
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {/* Corporate Admin */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>Corporate Admin</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <DetailRow label="Full Name" value="Jane Smith" />
                    <Separator />
                    <DetailRow label="Nickname" value="Jane" />
                    <Separator />
                    <DetailRow label="Job Role" value="Corporate Administrator" />
                    <Separator />
                    <DetailRow
                      label="Email"
                      value={
                        <a
                          href="mailto:jane.smith@globalcorp.com"
                          className="text-[var(--primary)] hover:underline"
                        >
                          jane.smith@globalcorp.com
                        </a>
                      }
                    />
                    <Separator />
                    <DetailRow label="Work Phone No." value="+1 (212) 555-0101" />
                    <Separator />
                    <DetailRow label="Cell Phone No." value="+1 (917) 555-0102" />
                  </CardContent>
                </Card>

                {/* Company Admin */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>Company Admin</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <DetailRow label="Full Name" value="John Doe" />
                    <Separator />
                    <DetailRow label="Nickname" value="John" />
                    <Separator />
                    <DetailRow label="Job Role" value="Company Administrator" />
                    <Separator />
                    <DetailRow
                      label="Email"
                      value={
                        <a
                          href="mailto:john.doe@nyhq.com"
                          className="text-[var(--primary)] hover:underline"
                        >
                          john.doe@nyhq.com
                        </a>
                      }
                    />
                    <Separator />
                    <DetailRow label="Work Phone No." value="+1 (212) 555-0200" />
                    <Separator />
                    <DetailRow label="Cell Phone No." value="+1 (917) 555-0201" />
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab !== "basic-info" && (
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-12 text-center text-[var(--muted-foreground)]">
              {activeTab} content coming soon
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
