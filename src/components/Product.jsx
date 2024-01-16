import React from "react";
import sofa1 from "../assets/images/sofa1.webp";
import sofa2 from "../assets/images/sofa2.webp";
import sofa3 from "../assets/images/sofa3.webp";
import sofa4 from "../assets/images/sofa4.webp";
import sofa5 from "../assets/images/sofa5.webp";
import sofa6 from "../assets/images/sofa6.webp";
import Button from "./Button";
const cardimg = [
  {
    img: sofa1,
    id: 7,
  },
  {
    img: sofa2,
    id: 8,
  },
  {
    img: sofa3,
    id: 9,
  },
  {
    img: sofa4,
    id: 10,
  },
  {
    img: sofa5,
    id: 11,
  },
  {
    img: sofa6,
    id: 12,
  },
];
const Product = () => {
  const cards = cardimg.map((cardimg) => (
    <div className="xl:w-1/3 md:w-1/2 w-full flex justify-center px-3 mb-[42px]" key={cardimg.id}>
      <div
        className="max-w-[422px] bg-white px-[23px] pt-[18px] pb-[53px] hover:shadow-[6px_13px_38px_0px_#0000001F] duration-300"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={cardimg.img} alt="sofa" className="mb-[19px]" />
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
          <Button text=" ADD TO CART" name="!py-2.5 !px-3 !mt-0" />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="lg:pt-[135px] pt-20 lg:pb-[165px] pb-20">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className=" sm:flex justify-between items-center lg:mb-[97px] md:mt-20 mb-10">
          <div data-aos="fade-up-right">
            <div className="flex items-center gap-[9px] justify-center sm:justify-normal">
              <div className="max-w-[95px] w-full border border-black border-soid"></div>
              <p className=" font-poppins md:text-xl text-lg text-center leading-normal font-normal text-[#BD7D41] text-nowrap">
                Shopping Store
              </p>
            </div>
            <h2 className="font-poppins  md:text-[35px] text-3xl leading-normal font-bold text-center sm:text-start">
              Our Products
            </h2>
          </div>
          <div
            className="flex justify-center sm:justify-normal mt-5 sm:mt-0"
            data-aos="fade-up-left"
          >
            <Button text="VIEW ALL PRODUCT" name="!mt-0" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3">{cards}</div>
      </div>
    </div>
  );
};

export default Product;
