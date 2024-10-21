import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  if (true) {
    return (
      <Routes>
        {ROUTES.map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
    );
  }

  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default App;
