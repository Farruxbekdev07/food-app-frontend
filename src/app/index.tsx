import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";
import Layout from "./components/Layout";

import "../index.css";

function App() {
  if (true) {
    return (
      <Layout>
        <Routes>
          {ROUTES.map((item) => (
            <Route path={item.path} element={item.component} />
          ))}
        </Routes>
      </Layout>
    );
  }
}

export default App;
