import React, { useEffect } from "react";
import AppRoute from "./AppRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";

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
  return (
    <Provider store={store}>
      <div>
        <AppRoute />;
        <ToastContainer />
      </div>
    </Provider>
  );
};

export default App;
