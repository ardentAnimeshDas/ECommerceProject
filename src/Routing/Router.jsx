import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomepageNavbar from './HomepageNavbar';
import CartPage from './CartPage';
import HomePage from './HomePage';
import CheckoutPage from './CheckoutPage';
import LoginPage from './LoginPage';

const Router = () => {
  return (
    <Router>
      <HomepageNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default Router;