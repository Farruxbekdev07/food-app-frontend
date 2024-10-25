import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";
import Container from "./components/Container";

import "../index.css";

function App() {
  if (true) {
    return (
      <Container>
        <Routes>
          {ROUTES.map((item) => (
            <Route path={item.path} element={item.component} />
          ))}
        </Routes>
      </Container>
    );
  }
}

export default App;
