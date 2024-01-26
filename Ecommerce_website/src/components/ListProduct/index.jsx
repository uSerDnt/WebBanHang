import React, { useEffect } from "react";
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Phụ nữ dân tộc",
    rating: 5.0,
    color: "Trắng",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "phụ nữ phương Tây",
    rating: 4.5,
    color: "Đỏ",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Kính bảo hộ",
    rating: 4.7,
    color: "nâu",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Áo thun in",
    rating: 4.4,
    color: "Vàng",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Áo thun thời trang",
    rating: 4.5,
    color: "Hồng",
    aosDelay: "800",
  },
];

const ListProduct = () => {
  const navigate = useNavigate();
  const handleProductDetail = () => {
    navigate("/product");
  };
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          Sản phẩm bán chạy nhất dành cho bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Các sản phẩm
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Thấu hiểu phong cách cá nhân tại [Shopoify] - Đẳng cấp và Sáng tạo.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <button onClick={handleProductDetail}>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                </button>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    {/* <FaStar className="text-yellow-400" /> */}
                    <StarFilled className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            Xem Tất Cả
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
