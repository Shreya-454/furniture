import React from "react";
import Slider from "react-slick";
import sliderimg1 from "../assets/images/sliderimg1.webp";
import sliderimg2 from "../assets/images/sliderimg2.webp";
import sliderimg3 from "../assets/images/sliderimg3.webp";
import Button from "./Button";
const data = [
  {
    img: sliderimg1,
  },
  {
    img: sliderimg2,
  },
  {
    img: sliderimg3,
  },
  {
    img: sliderimg1,
  },
  {
    img: sliderimg2,
  },
  {
    img: sliderimg3,
  },
];
const Latest = () => {
  const slidercard = data.map((data,s) => (
    <div
      className="ma x-w-[42 2px] bg-white px-[23px] pt-[18px] pb-[53px] hover:shadow-[6px_13px_38px_0px_#0000001F]
 duration-300"
      data-aos="zoom-in-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      key={s}
    >
      <img src={data.img} alt="sofa" className="mb-[19px] w-full" />
      <div className="flex justify-between items-center mb-4">
        <p className=" font-poppins md:text-xl text-lg text-center font-medium leading-normal">
          Single Sofa
        </p>
        <div className="flex gap-[3px]">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
              fill="#FFD135"
            />
          </svg>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
              fill="#FFD135"
            />
          </svg>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
              fill="#FFD135"
            />
          </svg>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
              fill="#FFD135"
            />
          </svg>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
              fill="#FFD135"
            />
          </svg>
        </div>
      </div>
      <p className="text-[#000000B2] font-poppins text-lg font-normal leading-normal mb-4">
        Lorem ipsum dolor{" "}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-[2.87px]">
          <p className="md:text-[28.67px] text-2xl text-center font-poppins font-semibold leading-normal">
            ₹
          </p>
          <p className="md:text-[28.67px] text-2xl text-center font-poppins font-semibold leading-normal">
            1200.00
          </p>
        </div>
        <Button text="ADD TO CART" name="!py-2.5 !px-3 !mt-0" />
      </div>
    </div>
  ));
  const btn = React.useRef(null);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sm:pt-[110px] pt-16 relative pb-[69px]">
      <button
        className="md:w-[99px] md:h-[99px] w-[50px] h-[50px] rounded-full bg-white hover:bg-black duration-300  absolute 2xl:bottom-[30%] bottom-0 group  2xl:left-[9%] left-[10%] flex justify-center items-center shadow-[2px_7px_16px_0px_#00000014]
"
        onClick={() => btn?.current?.slickPrev()}
      >
        <span>
          <svg
            width="32"
            height="10"
            className="md:w-[42px] md:h-[10px] "
            viewBox="0 0 42 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z"
              fill="black"
              className="group-hover:fill-white duration-300"
            />
          </svg>
        </span>
      </button>
      <button
        className="md:w-[99px] md:h-[99px] w-[50px] h-[50px] shadow-[2px_7px_16px_0px_#00000014]
 rounded-full bg-white absolute 2xl:bottom-[30%] hover:bg-black group 2xl:right-[9%] bottom-0 right-[10%] flex justify-center items-center duration-300"
        onClick={() => btn?.current?.slickNext()}
      >
        <span>
          <svg
            width="32"
            className="md:w-[42px] md:h-[16px]"
            height="10"
            viewBox="0 0 42 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"
              fill="black"
              className="group-hover:fill-white duration-300"
            />
          </svg>
        </span>
      </button>
      <div className="max-w-[1320px] mx-auto px-3">
        <div
          className="flex items-center gap-[9px] mb-[19px] justify-center lg:justify-normal"
          data-aos="fade-right"
        >
          <div className="max-w-[95px] w-full border border-black border-soid"></div>
          <p
            className=" font-poppins md:text-xl text-lg text-center leading-normal font-normal text-[#BD7D41] text-nowrap"
            data-aos="fade-right"
          >
            Shopping Store
          </p>
        </div>
        <h2
          className="font-poppins text-[#243040] font-bold md:text-[35px] text-3xl leading-normal lg:mb-[66px] mb-5 text-center lg:text-start
        "
        >
          Latest Deal
        </h2>
        <div className="flex justify-center flex-col">
          <Slider ref={btn} {...settings}>
            {slidercard}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Latest;
