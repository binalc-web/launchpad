import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { FlowCoverPage } from "@/components/flow/FlowCoverPage";
import { UserDirectoryPage } from "@/components/flow/UserDirectoryPage";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Routes>
        <Route path={ROUTES.HOME} element={<FlowCoverPage />} />
        <Route path={ROUTES.FLOW_COVER} element={<FlowCoverPage />} />
        <Route path={ROUTES.USER_DIRECTORY} element={<UserDirectoryPage />} />
      </Routes>
    </main>
  );
}

export default App;
