import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CompanyDirectoryPage } from "@/pages/CompanyDirectoryPage"
import { CompanyDetailsPage } from "@/pages/CompanyDetailsPage"
import { ROUTES } from "@/constants/routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.COMPANY_DIRECTORY} element={<CompanyDirectoryPage />} />
        <Route path={ROUTES.COMPANY_DETAILS(":id")} element={<CompanyDetailsPage />} />
        <Route path="/" element={<CompanyDirectoryPage />} />
        <Route path="*" element={<CompanyDirectoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
