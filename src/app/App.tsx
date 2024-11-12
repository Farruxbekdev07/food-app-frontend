import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";
import Layout from "./components/Layout";

function App() {
  const userRole = "admin";

  return (
    <Layout>
      <Routes>
        {ROUTES[userRole || "admin"].map((item) => (
          <Route path={item.path} element={item.component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
