import { Routes, Route } from "react-router-dom";
import ProductDeTail from "../pages/ProductDeTail";
import HomePages from "../pages/HomePage";
import React, { useEffect } from "react";
import Login from "../pages/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
