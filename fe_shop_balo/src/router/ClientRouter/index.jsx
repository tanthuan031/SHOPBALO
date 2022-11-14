import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ClientLayout } from '../../layouts/Client';
import { AboutPage } from '../../pages/Client/AboutPage';
import { CartPage } from '../../pages/Client/CartPage';
import { ProductPage } from '../../pages/Client/ProductPage';
import { ProfilePage } from '../../pages/Client/ProfilePage';
import ProductDetailPage from '../../pages/Client/ProductDetailPage';
import { LoginPage } from '../../pages/Client/AuthPage/Login';
import { RegisterPage } from '../../pages/Client/AuthPage/Register';
import { HomePage } from '../../pages/Client/HomePage';
import { ProtectedRoutesClient } from '../ProtectedRouters/indexClient';

function ClientRouter(props) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<ClientLayout slot={<HomePage key={'a'} />} />} />
      <Route path="/product" element={<ClientLayout slot={<ProductPage key={'1'} />} />} />
      <Route path="/product/:id" element={<ClientLayout slot={<ProductDetailPage key={'1'} />} />} />
      <Route path="/about" element={<ClientLayout slot={<AboutPage key={'a'} />} />} />

      <Route path="/cart" element={<ClientLayout slot={<CartPage key={'a'} />} />} />
      {/* Requỉed login */}
      <Route element={<ProtectedRoutesClient />}>
        <Route path="/my-account" element={<ClientLayout slot={<ProfilePage key={'a'} />} />} />
      </Route>
    </Routes>
  );
}

export default ClientRouter;
