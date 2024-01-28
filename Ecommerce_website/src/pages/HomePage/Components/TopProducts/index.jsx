import React from "react";
import Img1 from "../../../../assets/shirt.png";
import Img2 from "../../../../assets/shirt.png";
import Img3 from "../../../../assets/shirt3.png";
import { StarFilled } from "@ant-design/icons";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Mặc giản dị",
    description:
      "Trang phục là bản ngôn của cá nhân, mỗi đường may là câu chuyện về đẹp và duyên dáng.",
  },
  {
    id: 2,
    img: Img2,
    title: "Áo sơ mi in",
    description:
      "Áo quần không chỉ che phủ, mà còn là nghệ thuật diễn đạt tâm hồn.",
  },
  {
    id: 3,
    img: Img3,
    title: "Áo sơ mi nữ",
    description:
      "Mỗi chiếc áo, mỗi đôi giày là dấu ấn độc đáo, tô điểm phong cách riêng.",
  },
];
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Sản phẩm tốt nhất dành cho bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Sản phẩm top trending ở đây
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Shop Shopping Now luôn cung cấp những sản phẩm thời trang hot nhất. Hãy lựa
            chọn theo phong cách của bạn
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <StarFilled className="text-yellow-500" />
                  <StarFilled className="text-yellow-500" />
                  <StarFilled className="text-yellow-500" />
                  <StarFilled className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
