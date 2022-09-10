// Check login authentication

import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
export function ProtectedRoutes() {
  const isAuthenticate = true; //checkLogin();
  return isAuthenticate ? <Outlet /> : <Navigate to="/login" />;
}
