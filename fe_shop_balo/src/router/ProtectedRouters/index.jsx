// Check login authentication

import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { checkLogin } from '../../adapter/auth';
// import { checkLogin } from '../../api/Auth';
import { isLoginSelector } from '../../redux/selectors/auth/auth.reducer';

export function ProtectedRoutes(props) {
  const isAuthenticate = checkLogin();
  console.log('pr', isAuthenticate);
  return isAuthenticate ? <Outlet /> : <Navigate to="admin/login" />;
}
