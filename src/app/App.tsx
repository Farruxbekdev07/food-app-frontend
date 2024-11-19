import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";
import Layout from "./components/Layout";
import { UserRole } from "./types/enums";
import { useAppSelector } from "./hooks/redux";

function App() {
  const userRole = useAppSelector((state) => state.auth?.role) as UserRole;

  return (
    <Layout>
      <Routes>
        {ROUTES[userRole || "user"].map((item) => (
          <Route path={item.path} element={item.component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
