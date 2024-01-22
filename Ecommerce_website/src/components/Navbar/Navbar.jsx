// import React from "react";
import Logo from "../../assets/logo.png";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Typography, Input } from "antd";
import DarkMode from "./Darkmode";

const Navbar = () => {
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
            <div className="group relative hidden sm:block">
              <Input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary hover:border-primary "
              />
              <SearchOutlined className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <Button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
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
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
