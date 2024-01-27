import React from "react";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log("currentUser", currentUser);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
