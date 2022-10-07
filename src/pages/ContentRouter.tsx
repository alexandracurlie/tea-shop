import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from './CatalogPage';
import { CartPage } from './CartPage';

export const ContentRouter = () => (
  <Routes>
    <Route path={"/"} element={<CatalogPage />} />
    <Route path={"/cart"} element={<CartPage />} />
  </Routes>
)
