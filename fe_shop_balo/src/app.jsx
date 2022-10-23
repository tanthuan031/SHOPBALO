import React from 'react';
import AdminRouter from './router/AdminRouter';
import ClientRouter from './router/ClientRouter';
export default function App() {
  const checkLayout = false;
  return (
    <>
      <AdminRouter />
      <ClientRouter />
    </>
  );
}
