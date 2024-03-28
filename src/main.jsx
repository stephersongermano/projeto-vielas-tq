import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Footer />
  </React.StrictMode>
);
