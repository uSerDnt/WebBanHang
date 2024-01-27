import React from "react";
import { useSelector } from "react-redux";
import { Button, Typography, Input, Image } from "antd";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log("currentUser", currentUser);
  return (
    <div>
      <Typography className="text-2xl font-bold">
        Profile{" "}
        {currentUser?.displayName
          ? currentUser?.displayName
          : currentUser?.email}{" "}
        ne````
      </Typography>
    </div>
  );
};

export default ProfilePage;
