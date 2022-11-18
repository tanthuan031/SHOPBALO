import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../layouts/Admin';
import { CategoryPage } from '../../pages/Admin/CategoryPage';
import { DashBoardPage } from '../../pages/Admin/DashBoardPage';
import { LoginPage } from '../../pages/Admin/LoginPage';
import { ProductPage } from '../../pages/Admin/ProductPage';
import OrderPage from '../../pages/Admin/Order';
import ReviewPage from '../../pages/Admin/ReviewPage';
import { StaffPage } from '../../pages/Admin/StaffPage';
import { ProtectedRoutes } from '../ProtectedRouters';
import PromotionPage from './../../pages/Admin/PromotionPage';
import { CustomerPage } from '../../pages/Admin/CustomerPage';
// import { checkLogin, handleGetInformation } from '../../api/Auth';
import { setIsLogin, setUser } from '../../redux/reducer/auth/auth.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginSelector } from '../../redux/selectors/auth/auth.reducer';
import { checkLogin, handleGetMe } from '../../adapter/auth';
import { deleteCookie, getCookies } from '../../api/Admin/Auth';

import SliderPage from '../../pages/Admin/SliderPage';
export default function AdminRouter() {
  const dispatch = useDispatch();
  const isAuthenticate = useSelector(isLoginSelector);
  useEffect(() => {
    handleGetMe().then((result) => {
      if (result === 401) {
        const token = getCookies('token');
        dispatch(setIsLogin(false));
        if (token) {
          deleteCookie('token');
        }
      } else {
        dispatch(setIsLogin(true));
        dispatch(setUser(result));
      }
    });
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin/register" element={<div>Register</div>} />
      <Route element={<ProtectedRoutes isAuthenticate={isAuthenticate} />}>
        <Route path="/admin/" element={<AdminLayout slot={<DashBoardPage key={'a'} />} />} />
        <Route path="/admin/product" element={<AdminLayout slot={<ProductPage key={'1'} />} />} />
        <Route path="/admin/category" element={<AdminLayout slot={<CategoryPage key={'a'} />} />} />
        <Route path="/admin/promotion" element={<AdminLayout slot={<PromotionPage key={'a'} />} />} />
        <Route path="/admin/order" element={<AdminLayout slot={<OrderPage key={'a'} />} />} />
        <Route path="/admin/staff" element={<AdminLayout slot={<StaffPage key={'a'} />} />} />
        <Route path="/admin/customer" element={<AdminLayout slot={<CustomerPage key={'a'} />} />} />
        <Route path="/admin/review" element={<AdminLayout slot={<ReviewPage key={'a'} />} />} />
        <Route path="/admin/decentralization" element={<AdminLayout slot={<DashBoardPage key={'a'} />} />} />
        <Route path="/admin/slider" element={<AdminLayout slot={<SliderPage key={'a'} />} />} />
      </Route>
    </Routes>
  );
}
