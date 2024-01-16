import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Sec2 from "../components/Sec2";

const Shop = () => {
  return (
    <div>
          <Header />
          <Sec2/>
          <Product />
          <Footer />
          <BackToTop/>
    </div>
  );
};

export default Shop;
