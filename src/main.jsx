import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import GetItem from "./components/getItem/GetItem";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);
