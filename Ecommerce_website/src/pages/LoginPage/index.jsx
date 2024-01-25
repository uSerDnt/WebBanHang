import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleLogin = (values) => {
    if (values) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800">Login</h2>

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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-primary"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
