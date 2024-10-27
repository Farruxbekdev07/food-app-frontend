import { Route, Routes } from "react-router-dom";

import { ADMIN_ROUTES } from "./routes";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <Routes>
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.path} element={item.component} />
        ))}
      </Routes>
    </Container>
  );
}

export default App;
