import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Trang chủ",
    link: "/#",
    icon: "",
  },
  {
    title: "Facebook",
    link: "/#about",
    icon: <FaFacebook />,
  },
  {
    title: "Zalo",
    link: "/#contact",
    icon: <SiZalo />,
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopping Now
            </h1>
            <p>
              Tự tin bước ra thế giới với Shopping Now - Nơi phong cách gặp sự
              tự tin.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Liên kết quan trọng
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-3"></div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <MdEmail />
                  <p>trong.doanngoc2023@gmail.com</p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+84335764560</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow style={{ width: 40 }} />
                  <p>
                    250/15 Nguyễn Thượng Hiền, Phường 5, Phú Nhuận, Thành phố Hồ
                    Chí Minh Chỉ đường
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
