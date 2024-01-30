import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ListProduct from "../../components/ListProduct";
import TopProducts from "./Components/TopProducts";
import Banner from "./Components/Banner";
import Subscribe from "./Components/Subscribe";
import Testimonials from "./Components/Testimonials";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
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
const HomePages = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const dispatch = useDispatch();
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };
  useEffect(() => {
    dispatch(actions.ListProductActions.ListProduct(ProductsData));
  }, []);
  return (
    <div>
      {/* <Navbar handleLoginModal={handleLoginModal} /> */}
      <Hero handleLoginModal={handleLoginModal} />
      <ListProduct ProductsData={ProductsData} />
      <TopProducts />
      <Banner />
      <Subscribe />
      {/* <ListProduct /> */}
      <Testimonials />
      {/* <Footer /> */}
      <LoginModal
        handleLoginModal={handleLoginModal}
        openLoginModal={openLoginModal}
      />
    </div>
  );
};

export default HomePages;
