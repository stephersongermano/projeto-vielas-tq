import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import { AppRoutes } from "./routes/app.routes";
import Navbar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/footer/Footer";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
