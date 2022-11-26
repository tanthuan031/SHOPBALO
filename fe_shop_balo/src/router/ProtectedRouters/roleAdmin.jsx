// Check login authentication

import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { checkLogin } from '../../adapter/auth';
import NotFoundData from '../../components/commons/Layouts/NotFoundData';
import { getUserSelector } from '../../redux/selectors';
// import { checkLogin } from '../../api/Auth';

export function RoleAdminRoutes(props) {
  const user = useSelector(getUserSelector);
  return props.userRole === user.role_id ? <Outlet /> : <NotFoundData />;
}
