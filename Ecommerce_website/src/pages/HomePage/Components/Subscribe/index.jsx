import React from "react";
import Banner from "../../../../assets/orange-pattern.jpg";
import SendEmail from "../../../../components/SendMail";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "450px",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Liên hệ với chúng tôi
          </h1>
          <SendEmail />
          {/* <input
            data-aos="fade-up"
            type="text"
            placeholder="Nhập email của bạn"
            className="w-full p-3 text-black"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
