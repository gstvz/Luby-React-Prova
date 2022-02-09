import React from "react";
import { GlobalStyle } from "@styles";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "@routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer
        autoClose={1000}
        draggable={false}
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  );
}

export default App;
