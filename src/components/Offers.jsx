import React from "react";
import Button from "./Button";

const Offers = () => {
  return (
    <div className="pt-[69px] pb-[55px]">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 w-full px-3 flex justify-center mb-10 lg:mb-0">
            <div className="bg-[url(./assets/images/black-sofa.webp)] bg-cover sm:bg-size bg-center bg-no-repeat pl-[107px] pt-8 pb-[71px] max-w-[642px] w-full" data-aos="zoom-out-up" data-aos-easing="linear"
     data-aos-duration="1500">
              <p className="font-poppins md:text-xl text-lg leading-normal font-normal sm:after:w-[95px] lg:after:w-[80px] after:w-[70px] after:left-[-75px] after:h-[2px] after:bg-black after:absolute relative sm:after:left-[-19%] lg:after:left-[-21%] xl:after:w-[95px]  xl:after:left-[-19%] after:top-[14px] mb-5">Festival Offer</p>
              <p className="md:text-[35px] text-3xl font-poppins font-bold text-[#BD7D41] leading-normal mb-[15px]">Upto 40% Off</p>
              <p className=" font-poppins md:text-lg text-base font-normal leading-normal text-[#000000B2] max-w-[262px] mb-[38px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Button text="ADD TO CART" name="!py-2.5 !px-3" />
            </div>
          </div>
           <div className="lg:w-1/2 w-full px-3 flex justify-center">
            <div className="bg-[url(./assets/images/yellow-sofa.webp)] bg-cover sm:bg-size bg-center bg-no-repeat pl-[107px] pt-8 pb-[71px] max-w-[642px] w-full" data-aos="zoom-out-down" data-aos-easing="linear"
     data-aos-duration="1500">
              <p className="font-poppins md:text-xl text-lg leading-normal font-normal sm:after:w-[95px] lg:after:w-[80px]  after:w-[70px] after:left-[-75px] xl:after:w-[95px] after:h-[2px] after:bg-black after:absolute relative sm:after:left-[-19%] lg:after:left-[-21%] xl:after:left-[-19%] after:top-[14px] mb-5">Festival Offer</p>
              <p className="md:text-[35px] text-3xl font-poppins font-bold text-[#BD7D41] leading-normal mb-[15px]">Upto 40% Off</p>
              <p className=" font-poppins md:text-lg text-base font-normal leading-normal text-[#000000B2] max-w-[262px] mb-[38px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <Button text="ADD TO CART" name="!py-2.5 !px-3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
