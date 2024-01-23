import { Routes, Route } from "react-router-dom";
import ProductDeTail from "../pages/ProductDeTail";
import HomePages from "../pages/HomePage";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/product" element={<ProductDeTail />} />
    </Routes>
  );
};

export default AppRoute;
