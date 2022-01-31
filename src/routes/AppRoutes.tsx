import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../shared/types";
import { AuthPage } from "../pages/AuthPage/AuthPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { BetPage } from "../pages/BetPage/BetPage";

export const AppRoutes = () => {
  const isAuthenticated = useSelector((state: UserState) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />} />
      <Route path="auth/*" element={!isAuthenticated ? <AuthPage /> : <Navigate to="/" />} />
      <Route path="bet" element={isAuthenticated ? <BetPage /> : <Navigate to="/auth" />} />      
  </Routes>
  );
};
