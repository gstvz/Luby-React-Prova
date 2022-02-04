import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "@types";
import { AuthPage, HomePage, BetPage } from "@pages";
import { userActions } from "@store";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  dispatch(userActions.getUser());
  const isAuthenticated = useSelector(
    (state: UserState) => state.user.isAuthenticated
  );

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />}
      />
      <Route
        path="auth/*"
        element={!isAuthenticated ? <AuthPage /> : <Navigate to="/" />}
      />
      <Route
        path="bet"
        element={isAuthenticated ? <BetPage /> : <Navigate to="/auth" />}
      />
    </Routes>
  );
};
