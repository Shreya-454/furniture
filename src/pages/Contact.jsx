import React from "react";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Testimonial from "../components/Testimonials";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Nav from "../components/Nav";

const Contact = () => {
  return (
    <div>
      <div className="bg-[url(./assets/images/header-bg.webp)] bg-cover  bg-center bg-no-repeat min-h-screen">
        <Nav />
        <Header />
      </div>
      <Latest />
      <Testimonial />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
