import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders App component without errors", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
