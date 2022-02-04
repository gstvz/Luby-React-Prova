import React from "react";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
