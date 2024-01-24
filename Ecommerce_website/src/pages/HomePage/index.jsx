import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ListProduct from "../../components/ListProduct";
import TopProducts from "./Components/TopProducts";
import Banner from "./Components/Banner";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ListProduct />
      <TopProducts />
      <Banner />
    </div>
  );
};

export default HomePages;
