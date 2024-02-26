import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
const SendEmail = () => {
  const [success, setSuccess] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await fetch("https://formspree.io/f/xnqedrbp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Failed to send form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending form data:", error.message);
    }
  };

  return (
    <>
      {success && (
        <Alert
          message="Success"
          description="Your message has been sent successfully!"
          type="success"
          showIcon
          closable
          onClose={() => setSuccess(false)}
          style={{ marginBottom: 16 }}
        />
      )}

      <div>
        <Form
          name="contactForm"
          onFinish={onFinish}
          layout="vertical"
          className="w-[100%] h-7 "
          method="POST"
        >
          <Form.Item
            label="Tên của bạn"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SendEmail;
