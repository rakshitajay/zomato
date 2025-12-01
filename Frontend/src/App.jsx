// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RestaurantPage from "./Pages/RestaurantPage";
import CartPage from "./Pages/CartPage";
import AdminPage from "./Pages/AdminPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin" element={<AdminPage />} />

    </Routes>
  );
}
