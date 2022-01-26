import React from "react";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { BetPage } from "./pages/BetPage/BetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/bet" element={<BetPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
