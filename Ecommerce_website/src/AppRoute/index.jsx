import { Routes, Route } from "react-router-dom";
import ProductDeTail from "../pages/ProductDeTail";
import HomePages from "../pages/HomePage";
import React from "react";
import Login from "../pages/LoginPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/product" element={<ProductDeTail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoute;
