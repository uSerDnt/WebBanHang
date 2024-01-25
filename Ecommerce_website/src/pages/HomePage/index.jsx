import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ListProduct from "../../components/ListProduct";
import TopProducts from "./Components/TopProducts";
import Banner from "./Components/Banner";
import Subscribe from "./Components/Subscribe";
import Testimonials from "./Components/Testimonials";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";

const HomePages = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  return (
    <div>
      <Navbar handleLoginModal={handleLoginModal} />
      <Hero handleLoginModal={handleLoginModal} />
      <ListProduct />
      <TopProducts />
      <Banner />
      <Subscribe />
      <ListProduct />
      <Testimonials />
      <Footer />
      <LoginModal
        handleLoginModal={handleLoginModal}
        openLoginModal={openLoginModal}
      />
    </div>
  );
};

export default HomePages;
