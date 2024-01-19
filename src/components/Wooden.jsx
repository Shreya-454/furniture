import React from "react";
import greysofa from "../assets/images/grey-sofa.webp";
import Button from "./Button";
const Wooden = () => {
  return (
    <div className="bg-[#2D39490A] sm:py-16 py-12 relative z-[1]">
      <div className="max-w-[741px] w-full h-full bg-[#243040] absolute max-h-[270px] z-[-1] lg:bottom-[-15%] bottom-0 right-0"></div>
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3">
          <div
            className="lg:w-5/12 w-full px-3 mb-10 lg:mb-0"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-[9px] justify-center lg:justify-normal">
              <div className="w-[16%] border border-black border-solid "></div>
              <p className="md:text-xl text-lg text-center text-[#BD7D41] font-poppins">
                Shopping Store
              </p>
            </div>
            <h2 className="font-poppins text-[35px] font-bold leading-normal text-center lg:text-start">
              Wooden Sofa Starts <br /> From{" "}
              <span className="md:text-[33.05px] text-3xl font-semibold">
                ₹ 1200.00
              </span>
            </h2>
            <div className="flex justify-center lg:justify-normal">
              <Button text="SHOP NOW" name="!mt-2 sm:!mt-[10]"/>
            </div>
          </div>
          <div
            className="lg:w-7/12 w-full flex justify-center px-3"
            data-aos="fade-left"
          >
            <img src={greysofa} alt="sofa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wooden;
