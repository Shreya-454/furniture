import React from "react";
import Button from "./Button";
const Header = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 md:pt-[150px] pt-10 md:pb-[398px] pb-[200px]">
      <h1
        className="text-white md:text-5xl text-4xl font-poppins font-bold text-center max-w-[908px] mx-auto leading-normal mb-[15px]"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Awesome Design Best Furniture For Your Interior
      </h1>
      <p
        className="text-white font-poppins md:text-xl text-lg leading-normal text-center font-normal "
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus{" "}
      </p>
      <div className="flex justify-center">
        <Button
          text="SHOP NOW"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default Header;
