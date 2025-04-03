// app.js
import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import Cart from "./Cart";
import "../../index.css";
import UserContext from "../utils/UserContext";
import Signin from "./Comp/Signin";
import Help from "./Comp/Help";
import Offers from "./Comp/Offers";
import ContactUs from "./Comp/ContactUs";


// Lazy loaded pages
const Body = lazy(() => import("./Comp/Body"));
const RestaurantDetails = lazy(() => import("./Comp/ResturantDeatils"));

const Layout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Harshil Tandel");
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <Header />
      <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
        <Outlet />
      </Suspense>
      <Footer />
    </UserContext.Provider>
  );
};

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Body />} />
    <Route path="cart" element={<Cart />} />
    <Route path="restaurant/:id" element={<RestaurantDetails />} />
    <Route path="signin" element={<Signin />} />
    <Route path="help" element={<Help />} />
    <Route path="offers" element={<Offers />} />
    <Route path="contact" element={<ContactUs />} />
  </Route>
</Routes>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
