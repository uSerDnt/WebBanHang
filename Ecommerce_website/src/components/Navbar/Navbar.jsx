// import React from "react";
import Logo from "../../assets/logo.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Button, Typography, Input } from "antd";
import DarkMode from "./DarkMode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
const Menu = [
  {
    id: 122,
    name: "Trang chủ",
    link: "/#",
  },
  {
    id: 333,
    name: "Được đánh giá cao nhất",
    link: "/#services",
  },
  {
    id: 7,
    name: "Quần áo trẻ em",
    link: "/#",
  },
  {
    id: 4,
    name: "Trang phục nam ",
    link: "/#",
  },
  {
    id: 749649,
    name: "điện tử",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Sản phẩm thịnh hành",
    link: "/#",
  },
  {
    id: 2,
    name: "Bán chạy nhất",
    link: "/#",
  },
  {
    id: 3,
    name: "Được đánh giá cao nhất",
    link: "/#",
  },
];
const LoginLinks = [
  {
    id: 1,
    name: "Đăng nhập",
    link: "/login",
  },
  {
    id: 2,
    name: "Đăng ký",
    link: "/#",
  },
  // {
  //   id: 3,
  //   name: "Đăng xuất",
  //   link: "/#",
  // },
];

const Navbar = ({ handleLoginModal }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
  }, []);
  console.log("user", user);
  const handleClick = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-20">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopify
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <Input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary hover:border-primary, dark:border-gray-500 , dark:bg-gray-800 "
                />
                <SearchOutlined className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* order button */}
            <Button
              onClick={handleLoginModal}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <Typography className="group-hover:block hidden transition-all duration-200">
                Order
              </Typography>
              <ShoppingCartOutlined
                className=" text-white drop-shadow-sm cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </Button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
            {/* thong tin user */}
            <div>Hello {user?.email}</div>
          </div>
        </div>
      </div>
      <div>
        <div data-aos="zoom-in" className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Sản phẩm thịnh hành
                <span>
                  <CaretDownOutlined className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Login */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Đăng nhập
                <span>
                  <CaretDownOutlined className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {LoginLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <div className="group relative cursor-pointer">
              <Button
                type="link"
                className="text-black dark:text-white font-medium hover:text-black"
                onClick={handleClick}
              >
                Đăng xuất
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
