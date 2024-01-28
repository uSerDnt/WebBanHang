import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Alert } from "antd";

const AlertShoppe = () => {
  const messages = [
    "Tự tin bước ra thế giới với Shopping Now - Nơi phong cách gặp sự tự tin",
    "Giảm giá khi mua trực tiếp tại cửa hàng hôm nay",
    "Tết tới rồi - sắm quần áo mới thôi nào",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const marqueeTimeout = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 20000);
    return () => clearTimeout(marqueeTimeout);
  }, [currentMessageIndex, messages]);
  return (
    <Alert
      banner
      closeIcon={true}
      showIcon={false}
      message={
        <>
          <Marquee pauseOnHover gradient={false}>
            {messages?.map((message, index) => (
              <span key={index} style={{ marginRight: "20px" }}>
                {index === currentMessageIndex ? message : null}
              </span>
            ))}
          </Marquee>
        </>
      }
    />
  );
};

export default AlertShoppe;
