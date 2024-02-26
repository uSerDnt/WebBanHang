// import React from "react";
import Logo from "../../assets/logo.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Button, Typography, Input, Image, Modal, Divider } from "antd";
import DarkMode from "./DarkMode";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../FirebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";
import Dummy from "../../assets/dummy.jpeg";
import myContext from "../../context/data/myContext";
const Menu = [
  {
    id: 122,
    name: "Trang chủ",
    link: "/",
  },
  {
    id: 333,
    name: "Sale 50% hôm nay",
    link: "/",
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
    name: "Trang phục nữ",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Thời trang tết",
    link: "/#",
  },
  {
    id: 2,
    name: "Giày - dép",
    link: "/#",
  },
  {
    id: 3,
    name: "Phụ kiện chất",
    link: "/#",
  },
];

const Navbar = ({ handleLoginModal }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClick = async () => {
    signOut(auth)
      .then(() => {
        toast.success("Đăng xuất thành công");
        dispatch(actions.AuthActions.CurrentUser(null));
      })
      .catch((error) => {
        toast.error("Có gì đó sai sai");
      });
  };
  const navigate = useNavigate();
  const handleClickGoToProfilePage = () => {
    navigate("/profile");
  };
  //search
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearch = () => {
    const filteredProducts = product.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-20 min-w-[100%]">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center flex-shrink-0">
          <div className="flex items-center">
            <a
              href="/"
              className="font-semibold text-2xl sm:text-xl flex items-center gap-2"
            >
              <Image
                preview={false}
                width={40}
                src={Logo}
                alt="Logo"
                className="w-10"
              />
              <span className="hidden sm:inline">Shopping now</span>
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-between items-center gap-4 ">
              <div className="relative group hidden sm:block">
                <Input
                  onKeyPress={handleKeyPress}
                  type="text"
                  placeholder="Tìm kiếm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary hover:border-primary, dark:border-gray-500 , dark:bg-gray-800 "
                />
                <SearchOutlined
                  className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                  onClick={handleSearch}
                />
              </div>
              <Modal
                title={
                  <span style={{ fontSize: "30px", fontStyle: "bold" }}>
                    Kết quả tìm kiếm
                  </span>
                }
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
              >
                <ul>
                  {searchResults.map((product) => (
                    <li
                      key={product.id}
                      className="justify-center items-center font-semibold text-xl "
                    >
                      <Link
                        to={`/product/${product.id}`}
                        onClick={
                          (() => setIsModalVisible(false), location.reload)
                        }
                        relative="path"
                        className="flex items-center text-2xl"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          style={{ marginRight: 8, width: 100, height: 100 }}
                        />
                        {product.title}
                      </Link>
                      <Divider />
                    </li>
                  ))}
                </ul>
              </Modal>
            </div>
            {/* order button */}
            <Button
              onClick={handleLoginModal}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 "
            >
              <ShoppingCartOutlined
                className=" text-white drop-shadow-sm cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </Button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* Login */}
            {currentUser ? (
              <>
                {/* thong tin user */}
                <div className="flex items-center">
                  <span className="hidden sm:inline"> Hello</span>
                  <Button
                    type="link"
                    onClick={handleClickGoToProfilePage}
                    className="text-black text-base flex flex-row"
                  >
                    <Image
                      className="rounded-full justify-between min-w-5 min-h-5"
                      height={25}
                      preview={false}
                      src={
                        currentUser?.photoURL ? currentUser?.photoURL : Dummy
                      }
                    />
                    <Typography className="ml-1">
                      {currentUser?.displayName
                        ? currentUser?.displayName
                        : currentUser?.email}
                    </Typography>
                  </Button>
                </div>
                <div className="group relative cursor-pointer hidden sm:inline">
                  <Button
                    type="link"
                    className="text-black dark:text-white font-medium hover:text-black"
                    onClick={handleClick}
                  >
                    Đăng xuất
                  </Button>
                </div>
              </>
            ) : (
              <div className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] py-2 font-semibold text-base"
                  onClick={() => {
                    navigate(`/login`);
                  }}
                >
                  Đăng nhập
                </a>
              </div>
            )}
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
                  className="inline-block px-4 hover:text-primary duration-200 font-semibold"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer">
              <a
                href="#"
                className="flex items-center gap-[2px] py-2 font-semibold hover:text-primary"
              >
                Đại hạ giá chỉ từ 100k
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
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 font-semibold"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
