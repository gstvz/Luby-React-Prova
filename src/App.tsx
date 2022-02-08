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
      <ToastContainer autoClose={500} draggable={false} pauseOnFocusLoss={false} />
    </BrowserRouter>
  );
}

export default App;
