import React from "react";
import Header from "../components/Header";
import Sec3 from "../components/Sec3";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Wooden from "../components/Wooden";

const About = () => {
  return (
    <div>
      <div className="bg-[url(./assets/images/header-bg.webp)] bg-cover  bg-center bg-no-repeat min-h-screen">
        <Nav />
        <Header />
      </div>
      <Sec3 />
      <Wooden />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
