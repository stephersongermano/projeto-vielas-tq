import React from "react";
import "swiper/css";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <Home /> */}
    <Login />
    <Cart />
  </React.StrictMode>
);
