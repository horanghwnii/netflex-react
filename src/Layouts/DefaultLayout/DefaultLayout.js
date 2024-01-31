import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

export default function DefaultLayout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
    </div>
  );
}
