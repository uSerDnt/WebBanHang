import React, { useEffect, useState } from "react";
import AppRoute from "./AppRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { ConfigProvider } from "antd";
import AlertShoppe from "./components/AlertShoppe";
import ScrollToTop from "react-scroll-to-top";
import MessengerCustomerChat from "react-messenger-customer-chat";
import FaceBookMsg from "./components/FacebookMsg";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };
  return (
    <Provider store={store}>
      <ConfigProvider>
        <ScrollToTop smooth top="20" width="40" />
        <Navbar handleLoginModal={handleLoginModal} />
        <AlertShoppe />
        <AppRoute />;
        <ToastContainer />
        <Footer />
        <FaceBookMsg />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
