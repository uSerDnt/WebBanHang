import { Routes, Route } from "react-router-dom";
import ProductDeTail from "../pages/ProductDeTail";
import HomePages from "../pages/HomePage";
import React, { useEffect } from "react";
import Login from "../pages/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import { auth } from "../../FirebaseConfig";
import ProfilePage from "../pages/ProfilePage";
const AppRoute = () => {
  const dispatch = useDispatch();
  const getUser = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(actions.AuthActions.CurrentUser(authUser));
    }
  });
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/product/:id" element={<ProductDeTail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoute;
