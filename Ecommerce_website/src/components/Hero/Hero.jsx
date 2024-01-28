import Image1 from "../../assets/women.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import Slider from "react-slick";
import React from "react";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Giảm tới 50% tất cả trang phục nam",
    description:
      "Thời trang là cách diễn đạt chính mình - Tạo nên phong cách của bạn tại Shopping Now",
  },
  {
    id: 2,
    img: Image2,
    title: "Giảm giá 30% cho tất cả trang phục nữ",
    description:
      "Chọn lựa thông minh, mặc đẹp mỗi ngày - Shopping Now, phong cách không giới hạn.",
  },
  {
    id: 3,
    img: Image3,
    title: "Giảm giá 70% cho tất cả sản phẩm giảm giá",
    description:
      "Shopping Now: Nâng tầm phong cách, dẫn đầu xu hướng mua sắm hiện đại.",
  },
];

const Hero = ({ handleLoginModal }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleLoginModal}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Đặt hàng ngay
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
