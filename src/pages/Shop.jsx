import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Sec2 from "../components/Sec2";
import Nav from "../components/Nav";

const Shop = () => {
  return (
    <div>
      <div className="bg-[url(./assets/images/header-bg.webp)] bg-cover  bg-center bg-no-repeat min-h-screen">
        <Nav />
      </div>
      <Sec2 />
      <Product />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Shop;
