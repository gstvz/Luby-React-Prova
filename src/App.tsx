import React from "react";
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from "@styles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
