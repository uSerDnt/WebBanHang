import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Typography,
  Input,
  DatePicker,
  Radio,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(
    currentUser?.displayName || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    currentUser?.phoneNumber || ""
  );
  const [address, setAddress] = useState(currentUser?.address || "");
  const [dob, setDob] = useState(currentUser?.dob || null);
  const [gender, setGender] = useState(currentUser?.gender || "");
  const [profileImage, setProfileImage] = useState(
    currentUser?.profileImage || null
  );
  const uploadProps = {
    beforeUpload: (file) => {
      setProfileImage(file);
      return false; // Prevent default upload behavior
    },
  };
  const handleSubmit = () => {};
  return (
    <div className="flex justify-center items-center w-screen">
      {/* Form for updating profile */}
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold pt-4">
          Thông tin {currentUser?.displayName || currentUser?.email}
        </span>
        <Input
          placeholder="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <DatePicker
          placeholder="Date of Birth"
          value={dob}
          onChange={(date) => setDob(date)}
        />
        <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
        <Upload {...uploadProps} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
        </Upload>

        {/* Submit button */}
        <Button type="primary" onClick={handleSubmit} className="bg-primary">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
