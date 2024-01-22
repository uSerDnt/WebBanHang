import React, { useEffect, useState } from "react";

const Button = ({ dem, tang, giam, user }) => {
  const callApi = () => {
    console.log("re-render11111");
  };
  const callApi2 = () => {
    console.log("re-render222222");
  };
  const [count2, setCount2] = useState(0);
  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };
  // Hàm tăng giá trị của count

  // useEffect(() => {
  //   callApi();
  // }); // khong depen...

  // useEffect(() => {
  //   callApi();
  // }, []); // dependencies la mang []

  // useEffect(() => {
  //   callApi();
  // }, [dem]); // dependencies co gia tri

  return (
    <div className="flex justify-center bg-yellow-400 ">
      <p>count: {dem}</p>

      <button className="bg-red-400 mx-6" onClick={tang}>
        Tăng
      </button>
      <button className="bg-blue-400" onClick={giam}>
        Giảm
      </button>
      <p>
        {user.ten}, {user.tuoi}, {user.gioitinh}
      </p>
    </div>
  );
};

export default Button;
