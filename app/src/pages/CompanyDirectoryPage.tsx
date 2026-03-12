import { Link } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import { Sidebar } from "@/components/common/Sidebar"
import { Header } from "@/components/common/Header"

export function CompanyDirectoryPage() {
  return (
    <div className="flex min-h-screen w-full bg-[var(--background)]">
      <aside className="shrink-0">
        <div className="fixed left-0 top-0 h-screen">
          <Sidebar />
        </div>
      </aside>
      <main className="flex flex-1 flex-col min-w-0 ml-[280px]">
        <Header breadcrumbItems={[{ label: "Company Directory" }]} />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Company Directory</h1>
          <Link
            to={ROUTES.COMPANY_DETAILS("nyc-hq")}
            className="text-[var(--primary)] hover:underline"
          >
            View New York HQ details →
          </Link>
        </div>
      </main>
    </div>
  )
}
