import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "products",
      label: "Products",
    },
    {
      key: "signOut",
      label: "Sign Out",
      danger: "true",
    },
  ];

  const onMenuItemClicked = async (menuItem) => {
    if (menuItem.key === "signOut") {
      console.log("logout");
      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  return <Menu items={menuItems} onClick={onMenuItemClicked} />;
};

export default SideMenu;
