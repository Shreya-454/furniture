import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import custmer1 from "../assets/images/testimonial1.webp";
import custmer2 from "../assets/images/testimonial2.webp";
import custmer3 from "../assets/images/testimonial3.webp";
import custmer4 from "../assets/images/testimonial4.webp";
import custmer5 from "../assets/images/testimonial5.webp";
import custmer6 from "../assets/images/testimonial6.webp";
import custmer7 from "../assets/images/testimonial7.webp";
const Testimonial = () => {
  var settings = {
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div>
      <div className="max-w-[1341px] px-3 mx-auto pt-[55px] md:pb-[109px] mb-[55px]">
        <span className="flex items-center gap-2 justify-center lg:justify-normal">
          <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
          <p className="text-[#BD7D41] font-poppins text-lg sm:text-xl text-center font-normal leading-normal">
            Customer Says
          </p>
        </span>
        <h2 className="text-[#243040]   font-poppins text-2xl  sm:text-[35px] leading-normal font-bold pt-3 sm:pt-6 text-center lg:text-start">
          Testimonial
        </h2>
        <div
          className="pt-[50px]"
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Slider
            {...settings}
            centerMode={true}
            asNavFor={nav2}
            slidesToShow={7}
            touchMove={true}
            arrows={false}
            ref={(slider1) => setNav1(slider1)}
          >
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer1}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[264px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer2}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[164px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer3}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[148px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer4}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[260px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer5}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[258px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer6}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[193px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer7}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[181px] "
              />
            </div>
            <div className=" !flex justify-center  items-center text-center mx-auto">
              <img
                src={custmer5}
                alt="custumer"
                className="flex w-full justify-center items-center max-w-[258px] "
              />
            </div>
          </Slider>
          <Slider
            {...settings}
            centerMode={true}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            swipeToSlide={true}
            fade={true}
            arrows={false}
            dots={false}
          >
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Teacher
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Professor
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Teacher
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Professor
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                  Treepi Shoty
                </h3>
                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                  Developer
                </p>
                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
