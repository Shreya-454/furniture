import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";
import Product from "../components/Product";
import Wooden from "../components/Wooden";
import Latest from "../components/Latest";
import Offers from "../components/Offers";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import BackToTop from "../components/BackToTop";
import Preloader from "../components/Preloader";
const Home = () => {
  return (
        <div className="overflow-hidden">
          <div className="bg-[url(./assets/images/header-bg.webp)] bg-cover  bg-center bg-no-repeat min-h-screen">
            <Nav />
            <Header />
          </div>
          <Sec2 />
          <Sec3 />
          <Product />
          <Wooden />
          <Latest />
          <Offers />
          <Testimonials />
          <Footer />
          <BackToTop />
        </div>
  );
};

export default Home;
