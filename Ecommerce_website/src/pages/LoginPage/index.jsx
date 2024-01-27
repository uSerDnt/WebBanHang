import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../FirebaseConfig';
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
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import FACEBOOK_ICON from "../../assets/facebook.jpg";

const colors = {
  primary: "#e06666",
  background: "#f5f5f5",
  disabled: "#d9d9d9",
};


const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = async (values) => {
    const { email, password, confirmPassword } = values;
    try {
      if (isRegistering) {
        if (password !== confirmPassword) {
          toast.error("The two passwords do not match!");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Registration successful!');
        setIsRegistering(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login successful!');
        navigate('/');
      }
    } catch (error) {
      toast.error(`Failed to ${isRegistering ? 'register' : 'login'}: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
      toast.success('Google Sign-In Successful');
    } catch (error) {
      toast.error(`Google Sign-In Error: ${error.message}`);
    }
  };

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
            <h3 className="text-3xl font-semibold mb-2">{isRegistering ? 'Đăng Ký' : 'Đăng Nhập'}</h3>
            <p className="text-base mb-2">
            Chào mừng trở lại! Vui lòng nhập thông tin của bạn.
            </p>
          </div>
          <Form form={form} onFinish={handleAuth} layout="vertical">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          {isRegistering && (
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          )}

          {!isRegistering && (
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="float-right">Forgot password?</a>
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="default"  className="h-full w-full text-[#060606] my font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer hover:bg-primary">
              {isRegistering ? 'Register' : 'Login'}
            </Button>
          </Form.Item>

          {!isRegistering && (
            <Form.Item>
              <Button onClick={handleGoogleSignIn} className="h-full w-full text-[#060606] my font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                <img src={GOOGLE_ICON} alt="Google" className="h-6 mr-2" />
                Đăng nhập bằng Google
              </Button>
            </Form.Item>
          )}
          {!isRegistering && (
            <Form.Item>
              <Button onClick={handleGoogleSignIn} className="h-full w-full text-[#060606] my font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                <img src={FACEBOOK_ICON} alt="Google" className="h-6 mr-2" />
                Đăng nhập bằng Google
              </Button>
            </Form.Item>
          )}

          <Form.Item>
            <Button type="link" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Bạn đã có tài khoản? Đăng Nhập' : "Bạn chưa có tài khoản? Đăng Ký"}
            </Button>
          </Form.Item>
        </Form>
          </div>

       
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Login;


// import loginImg from "../../assets/login.jpg";
// import GOOGLE_ICON from "../../assets/google.png";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../../FirebaseConfig";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Form, Input, Checkbox, Button } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// const colors = {
//   primary: "#e06666",
//   background: "#f5f5f5",
//   disabled: "#d9d9d9",
// };

// const Login = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();
//   const [login, setLogin] = useState(true);

//   const handleLogin = async (values) => {
//     try {
//       const { username, password, repassword } = values;

//       if (login) {
//         // Sign in
//         await signInWithEmailAndPassword(auth, username, password);
//         navigate("/");
//         toast.success("Đăng nhập thành công");
//       } else {
//         // Sign up
//         if (password === repassword) {
//           await createUserWithEmailAndPassword(auth, username, password);
//           window.location.reload();
//           toast.success("Đăng ky thành công");
//         } else {
//           toast.error("lỗi sever");
//           window.location.reload();
//           // Handle password mismatch error
//         }
//       }
//     } catch (error) {
//       console.error("Authentication Error:", error.message);
//       // Handle authentication errors (e.g., display error message)
//     }
//   };
//   const handleLoginGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);

//       // Access the user information from the result
//       const user = result.user;
//       navigate("/");
//       // You can use the user information as needed
//       toast.success("Google Sign-In Successful", user);
//     } catch (error) {
//       toast.error("Google Sign-In Error:", error.message);
//       // Handle Google Sign-In errors (e.g., display an error message)
//     }
//   };
//   return (
//     <div className="w-full h-screen flex items-start">
//       <div className="relative w-1/2 h-full flex flex-col">
//         <div className="absolute top-[20%] left-[10%] flex flex-col">
//           <h1 className="text-4xl text-white font-bold my-4">
//             Turn Your Ideas into reality
//           </h1>
//           <p className="text-xl text-white font-normal">
//             Start for free and get attractive offers from the community
//           </p>
//         </div>
//         <img src={loginImg} className="w-full h-full object-cover" />
//       </div>

//       <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
//         <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
//           Interactive Brand
//         </h1>

//         <div className="w-full flex flex-col max-w-[500px]">
//           <div className="w-full flex flex-col mb-2">
//             <h3 className="text-3xl font-semibold mb-2">Đăng nhập</h3>
//             <p className="text-base mb-2">
//               Welcome Back! Please enter your details.
//             </p>
//           </div>

//           <Form
//             name="loginForm"
//             onFinish={handleLogin}
//             className="w-full"
//             initialValues={{ remember: true }}
//           >
//             <Form.Item
//               name="username"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your username!",
//                 },
//               ]}
//             >
//               <Input
//                 prefix={<UserOutlined className="site-form-item-icon" />}
//                 placeholder="Username"
//               />
//             </Form.Item>

//             <Form.Item
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your password!",
//                 },
//               ]}
//             >
//               <Input
//                 prefix={<LockOutlined className="site-form-item-icon" />}
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Item>

//             <Form.Item>
//               <div className="w-full flex items-center justify-between">
//                 <Form.Item name="remember" valuePropName="checked" noStyle>
//                   <Checkbox>Remember me for 30 days</Checkbox>
//                 </Form.Item>
//                 <a className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
//                   Forgot Password?
//                 </a>
//               </div>
//             </Form.Item>

//             <Form.Item>
//               <div className="w-full my-[-20px]">
//                 <Button
//                   type="default"
//                   htmlType="submit"
//                   className="h-full w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer hover:bg-primary"
//                 >
//                   Log in
//                 </Button>
//                 <Button
//                   type="default"
//                   className="h-full w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white"
//                 >
//                   Register
//                 </Button>
//               </div>
//             </Form.Item>
//           </Form>
//           <div className="w-full flex items-center justify-center relative py-2">
//             <div className="w-full h-[1px] bg-black/40"></div>
//             <p className="text-lg absolute text-black/80 bg-[#f5f5f5] px-2">
//               or
//             </p>
//           </div>
//           <Button
//             type="default"
//             onClick={handleLoginGoogle}
//             className="h-full w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
//           >
//             <img src={GOOGLE_ICON} className="h-6 mr-2" />
//             Sign In With Google
//           </Button>
//         </div>

//         <div className="w-full flex items-center justify-center">
//           <p className="text-sm font-normal text-[#060606]">
//             Dont have account
//             <span className="text- font-semibold underline underline-offset-2 cursor-pointer">
//               Sign up for free
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { Input, Button, Form } from "antd";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../../FirebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const Login = () => {
//   const [form] = Form.useForm(); //tui khong biet
//   const navigate = useNavigate();
//   const [login, setLogin] = useState(true);

//   const handleLogin = async (values) => {
//     try {
//       const { username, password, repassword } = values;
//       if (login) {
//         // Sign in
//         await signInWithEmailAndPassword(auth, username, password);
//         navigate("/");
//         toast.success("Đăng nhập thành công");
//       } else {
//         // Sign up
//         if (password === repassword) {
//           await createUserWithEmailAndPassword(auth, username, password);
//           window.location.reload();
//           toast.success("Đăng ky thành công");
//         } else {
//           toast.error("lỗi sever");
//           window.location.reload();
//           // Handle password mismatch error
//         }
//       }
//     } catch (error) {
//       console.error("Authentication Error:", error.message);
//       // Handle authentication errors (e.g., display error message)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-extrabold text-gray-800">
//           {login ? "Login" : "Sign Up"}
//         </h2>

//         <Form
//           form={form}
//           name="loginForm"
//           onFinish={handleLogin}
//           className="mt-8 space-y-6"
//         >
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: "Please enter your username" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Please enter your password" }]}
//           >
//             <Input.Password />
//           </Form.Item>

//           {!login && ( // Show Repassword field only when login is false
//             <Form.Item
//               label="Repassword"
//               name="repassword"
//               rules={[
//                 { required: true, message: "Please re-enter your password" },
//                 ({ getFieldValue }) => ({
//                   validator(_, value) {
//                     if (!value || getFieldValue("password") === value) {
//                       return Promise.resolve();
//                     }
//                     return Promise.reject(
//                       new Error("The two passwords do not match"),
//                     );
//                   },
//                 }),
//               ]}
//             >
//               <Input.Password />
//             </Form.Item>
//           )}

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="w-full bg-primary"
//             >
//               {login ? "Log in" : "Sign up"}
//             </Button>
//           </Form.Item>

//           <Form.Item>
//             <Button type="link" onClick={() => setLogin(!login)}>
//               {login
//                 ? "Don't have an account? Sign up"
//                 : "Already have an account? Log in"}
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Login;
