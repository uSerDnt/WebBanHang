import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../../FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import FACEBOOK_ICON from "../../assets/facebook.jpg";
import loginImg from "../../assets/login.jpg";
import GOOGLE_ICON from "../../assets/google.png";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
const colors = {
  primary: "#e06666",
  background: "#f5f5f5",
  disabled: "#d9d9d9",
};

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();

  const handleAuth = async (values) => {
    const { email, password, confirmPassword } = values;
    try {
      if (isRegistering) {
        if (password !== confirmPassword) {
          toast.error("The two passwords do not match!");
          return;
        }
        const users = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = {
          uid: users.user.uid,
          email: users.user.email,
          time: Timestamp.now(),
        };
        const userRef = collection(firestore, "users");
        await addDoc(userRef, user);
        toast.success("Registration successful!");
        setIsRegistering(false);
      } else {
        const users = await signInWithEmailAndPassword(auth, email, password);
        const user = {
          uid: users.user.uid,
          email: users.user.email,
          time: Timestamp.now(),
        };
        dispatch(actions.AuthActions.CurrentUser(user));
        const userRef = collection(firestore, "users");
        await addDoc(userRef, user);
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      toast.error(
        `Failed to ${isRegistering ? "register" : "login"}: ${error.message}`
      );
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
      toast.success("Google Sign-In Successful");
    } catch (error) {
      toast.error(`Google Sign-In Error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-white px-10 py-10 rounded-xl border border-black/40">
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-bold mb-2">
              {isRegistering ? "Đăng ký" : "Đăng nhập"}
            </h3>
            <p className="text-base mb-2">
              {isRegistering
                ? " Chào mừng trở lại! Vui lòng đăng ký"
                : " Chào mừng trở lại! Vui lòng đăng nhập"}
            </p>
          </div>
          <Form form={form} onFinish={handleAuth} layout="vertical">
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập email!" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Vui lòng nhập Email"
                className="py-3"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                className="py-3"
              />
            </Form.Item>

            {isRegistering && (
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Vui lòng nhập lại mật khẩu!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Xác nhận lại mật khẩu"
                  className="py-3"
                />
              </Form.Item>
            )}

            {!isRegistering && (
              <Form.Item>
                <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                <a className="float-right">Quên mật khẩu?</a>
              </Form.Item>
            )}

            <div className="flex flex-col items-center justify-center">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="default"
                  className="h-10 w-56 text-[#060606] my font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                >
                  {isRegistering ? "Đăng ký" : "Đăng nhập"}
                </Button>
              </Form.Item>

              {!isRegistering && (
                <Form.Item>
                  <Button
                    onClick={handleGoogleSignIn}
                    className="h-10 w-56 text-[#060606] my font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                  >
                    <img src={GOOGLE_ICON} alt="Google" className="h-6 mr-2" />
                    Đăng nhập bằng Google
                  </Button>
                </Form.Item>
              )}
              {!isRegistering && (
                <Form.Item>
                  <Button
                    onClick={handleGoogleSignIn}
                    className="h-10 w-56 text-[#060606] my font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer "
                  >
                    <img
                      src={FACEBOOK_ICON}
                      alt="Google"
                      className="h-6 mr-2"
                    />
                    Đăng nhập bằng Facebook
                  </Button>
                </Form.Item>
              )}

              <Form.Item>
                <Button
                  type="link"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="justify-start"
                >
                  {isRegistering
                    ? "Bạn đã có tài khoản? Đăng Nhập"
                    : "Bạn chưa có tài khoản? Đăng Ký"}
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Login;
