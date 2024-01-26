import React from "react";
// Make sure to replace 'COVER_IMAGE' and 'path/to/your/image' with your actual image path or import
import loginImg from "../../assets/login.jpg";
import GOOGLE_ICON from "../../assets/google.png"
const colors = {
  primary: "#e06666",
  background: "#f5f5f5",
  disabled: "#d9d9d9",
};

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={loginImg} className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Đăng Nhập</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className=" w-full flex-col">
            <input
              type="email"
              placeholder="Email"
              className=" w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className=" w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password ?
            </p>
          </div>

          <div className="w-full my-4">
            <div className="my-2">
              <button className="w-full text-white font-semibold bg-[#060606] rounded-md p-4 text-center cursor-pointer">
                Log in
              </button>
            </div>
            <div className="my-2">
              <button className="w-full text-[#060606] font-semibold bg-white border border-black rounded-md p-4 text-center cursor-pointer">
                Register
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black/40"></div>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5] px-2">
                or
              </p>
            </div>
            <div className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">      
             <img src={GOOGLE_ICON} className="h-6 mr-2" />
             Sign In With Google
            </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Dont have account
            <span className="text- font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;



