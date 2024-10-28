import { Route, Routes } from "react-router-dom";

import { ADMIN_ROUTES } from "./routes";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.path} element={item.component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
