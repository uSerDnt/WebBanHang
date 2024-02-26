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
import Img1 from "../assets/women.png";
import Img2 from "../assets/women2.jpg";
import Img3 from "../assets/women3.jpg";
import Img4 from "../assets/women4.jpg";
import AllProduct from "../pages/AllProduct";
const ProductsData = [
  {
    id: "123",
    img: Img1,
    title: "Phụ nữ dân tộc",
    rating: 5.0,
    color: "Trắng",
    aosDelay: "0",
  },
  {
    id: "3444",
    img: Img2,
    title: "phụ nữ phương Tây",
    rating: 4.5,
    color: "Đỏ",
    aosDelay: "200",
  },
  {
    id: "2344",
    img: Img3,
    title: "Kính bảo hộ",
    rating: 4.7,
    color: "nâu",
    aosDelay: "400",
  },
  {
    id: "42342",
    img: Img4,
    title: "Áo thun in",
    rating: 4.4,
    color: "Vàng",
    aosDelay: "600",
  },
  {
    id: "234247",
    img: Img2,
    title: "Áo thun thời trang",
    rating: 4.5,
    color: "Hồng",
    aosDelay: "800",
  },
];
const AppRoute = () => {
  const dispatch = useDispatch();
  const getUser = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(actions.AuthActions.CurrentUser(authUser));
    }
  });
  const getProduct = () => {
    dispatch(actions.ListProductActions.ListProduct(ProductsData));
  };

  useEffect(() => {
    getUser();
    getProduct();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/product/:id" element={<ProductDeTail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/allproduct" element={<AllProduct />} />
    </Routes>
  );
};

export default AppRoute;
