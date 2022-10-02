// @flow
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../layouts/Admin';
import { CategoryPage } from '../../pages/Admin/CategoryPage';
import { DashBoardPage } from '../../pages/Admin/DashBoardPage';
import { LoginPage } from '../../pages/Admin/LoginPage';
import { ProductPage } from '../../pages/Admin/ProductPage';
import ReviewPage from '../../pages/Admin/ReviewPage';
import { StaffPage } from '../../pages/Admin/StaffPage';
import { ProtectedRoutes } from '../ProtectedRouters';
import PromotionPage from './../../pages/Admin/PromotionPage';
export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin/register" element={<div>Register</div>} />
      <Route element={<ProtectedRoutes isAuthenticate={true} /* isAuthenticated}*/ />}>
        <Route path="/admin/" element={<AdminLayout slot={<DashBoardPage key={'a'} />} />} />
        <Route path="/admin/product" element={<AdminLayout slot={<ProductPage key={'1'} />} />} />
        <Route path="/admin/category" element={<AdminLayout slot={<CategoryPage key={'a'} />} />} />
        <Route path="/admin/promotion" element={<AdminLayout slot={<PromotionPage key={'a'} />} />} />
        <Route path="/admin/order" element={<AdminLayout slot={<DashBoardPage key={'a'} />} />} />
        <Route path="/admin/staff" element={<AdminLayout slot={<StaffPage key={'a'} />} />} />
        <Route path="/admin/customer" element={<AdminLayout slot={<DashBoardPage key={'a'} />} />} />
        <Route path="/admin/review" element={<AdminLayout slot={<ReviewPage key={'a'} />} />} />
        <Route path="/admin/decentralization" element={<AdminLayout slot={<DashBoardPage key={'a'} />} />} />
      </Route>
    </Routes>
  );
}
