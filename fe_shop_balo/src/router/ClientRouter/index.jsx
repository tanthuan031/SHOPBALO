import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ClientLayout } from '../../layouts/Client';
import { AboutPage } from '../../pages/Client/AboutPage';
import { CartPage } from '../../pages/Client/CartPage';
import { ProductPage } from '../../pages/Client/ProductPage';
import { ProfilePage } from '../../pages/Client/ProfilePage';
import ProductDetailPage from '../../pages/Client/ProductDetailPage';

function ClientRouter(props) {
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<div>Register</div>} /> */}
      {/* <Route element={<ProtectedRoutes isAuthenticate={isAuthenticate} />}> */}
      {/* <Route path="/" element={<ClientLayout slot={<HomePage key={'a'} />} />} />*/}
      <Route path="/product" element={<ClientLayout slot={<ProductPage key={'1'} />} />} />
      <Route path="/product/:id" element={<ClientLayout slot={<ProductDetailPage key={'1'} />} />} />
      <Route path="/about" element={<ClientLayout slot={<AboutPage key={'a'} />} />} />
      <Route path="/profile" element={<ClientLayout slot={<ProfilePage key={'a'} />} />} />
      <Route path="/cart" element={<ClientLayout slot={<CartPage key={'a'} />} />} />

      {/* </Route> */}
    </Routes>
  );
}

export default ClientRouter;
