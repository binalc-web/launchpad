import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SuperAdminSidebar } from '@/components/sidebar/SuperAdminSidebar'
import { ROUTES } from '@/constants/routes'

function DashboardPage() {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <h1 className="text-2xl font-medium text-[var(--foreground)]">Dashboard</h1>
    </div>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <h1 className="text-2xl font-medium text-[var(--foreground)]">{title}</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full bg-[var(--background)]">
        <SuperAdminSidebar />
        <main className="flex flex-1 flex-col">
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route
              path={ROUTES.CORPORATION_DIRECTORY}
              element={<PlaceholderPage title="Corporation Directory" />}
            />
            <Route
              path={ROUTES.COMPANY_DIRECTORY}
              element={<PlaceholderPage title="Company Directory" />}
            />
            <Route
              path={ROUTES.USER_DIRECTORY}
              element={<PlaceholderPage title="User Directory" />}
            />
            <Route
              path={ROUTES.ROLES_PERMISSIONS}
              element={<PlaceholderPage title="Roles & Permissions" />}
            />
            <Route path={ROUTES.COACHES} element={<PlaceholderPage title="Coaches" />} />
            <Route
              path={ROUTES.BILLING_MANAGEMENT}
              element={<PlaceholderPage title="Billing Management" />}
            />
            <Route
              path={ROUTES.PLANS_PRICING}
              element={<PlaceholderPage title="Plans & Pricing" />}
            />
            <Route path={ROUTES.INVOICES} element={<PlaceholderPage title="Invoices" />} />
            <Route
              path={ROUTES.PROMO_CODE_MANAGEMENT}
              element={<PlaceholderPage title="Promo Code Management" />}
            />
            <Route
              path={ROUTES.QUESTION_BANK}
              element={<PlaceholderPage title="Question Bank" />}
            />
            <Route
              path={ROUTES.LEARNING_LIBRARY}
              element={<PlaceholderPage title="Learning Library" />}
            />
            <Route
              path={ROUTES.SYSTEM_HEALTH}
              element={<PlaceholderPage title="System Health" />}
            />
            <Route
              path={ROUTES.SECURITY_BASELINES}
              element={<PlaceholderPage title="Security Baselines" />}
            />
            <Route path={ROUTES.AUDIT_LOGS} element={<PlaceholderPage title="Audit Logs" />} />
            <Route path={ROUTES.MAINTENANCE} element={<PlaceholderPage title="Maintenance" />} />
            <Route path={ROUTES.REPORTS} element={<PlaceholderPage title="Reports" />} />
            <Route
              path={ROUTES.NOTIFICATIONS}
              element={<PlaceholderPage title="Notifications" />}
            />
            <Route path={ROUTES.SETTINGS} element={<PlaceholderPage title="Settings" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
