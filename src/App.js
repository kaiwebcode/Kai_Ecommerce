import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import ScrollTop from "./components/ScrollTop";
import Choose from "./components/Choose";
import Products from "./components/Products";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Recommend from "./components/Recommend";
import scrollreveal from "scrollreveal";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimation = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
      nav,.home,.services-container,categories-container,.recommend-container,.choose-us-container,.products-container,.promo-container,footer 
      `,
        {
          interval: 500,
        }
      );
    };
    registerAnimation();
  });
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (
    <div className="app" data-theme={theme}>
      <ScrollTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Services />
      <Categories />
      <Recommend />
      <Choose />
      <Products />
      <Promo />
      <Footer />
    </div>
  );
}
