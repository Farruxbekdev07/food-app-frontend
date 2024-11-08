import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";
import { RouteType } from "./routes/types";
import Layout from "./components/Layout";
import { UserRole } from "./types/enums";
import { useAppSelector } from "./hooks/redux";

function App() {
  const token = useAppSelector((state) => state.auth?.token);
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";

  const routes = userRole ? ROUTES[userRole || "user"] : [];

  if (token) {
    return (
      <Layout>
        <Routes>
          {routes.map((item: RouteType) => (
            <Route path={item.path} element={item.component} />
          ))}
        </Routes>
      </Layout>
    );
  }

  return (
    <Layout>
      <Routes>
        {ROUTES.user.map((item: RouteType) => (
          <Route path={item.path} element={item.component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
