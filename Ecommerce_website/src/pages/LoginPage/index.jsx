import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const handleLogin = async (values) => {
    try {
      const { username, password, repassword } = values;

      if (login) {
        // Sign in
        await signInWithEmailAndPassword(auth, username, password);
        navigate("/");
        toast.success("Đăng nhập thành công");
      } else {
        // Sign up
        if (password === repassword) {
          await createUserWithEmailAndPassword(auth, username, password);
         window.location.reload();
         setLogin(true);
         toast.success("Đăng ky thành công");
        } else {
          toast.error("lỗi sever");
          window.location.reload();
          // Handle password mismatch error
        }
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);
      // Handle authentication errors (e.g., display error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800">
          {login ? "Login" : "Sign Up"}
        </h2>

        <Form
          form={form}
          name="loginForm"
          onFinish={handleLogin}
          className="mt-8 space-y-6"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password />
          </Form.Item>

          {!login && ( // Show Repassword field only when login is false
            <Form.Item
              label="Repassword"
              name="repassword"
              rules={[
                { required: true, message: "Please re-enter your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match"),
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-primary"
            >
              {login ? "Log in" : "Sign up"}
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="link" onClick={() => setLogin(!login)}>
              {login
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
