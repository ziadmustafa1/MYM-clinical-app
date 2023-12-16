/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Cart = () => {
  return (
    <div className="grid grid-cols-2 mx-10 pt-10" style={{borderBottom: '1px solid #141D21'}}>
      <div>
        <img
          width={50}
          src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reskin/ar_AE/adult/Panadol%20Advance%20455x455.jpg.rendition.455.455.jpg?auto=format"
          alt="logo"
          className="img-cart"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h1>Vitamin B12</h1>
          <p>200 ml</p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
            stroke="#EE4242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
            stroke="#EE4242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.78999C5.99999 22 5.90999 20.78 5.79999 19.21L5.14999 9.14001"
            stroke="#EE4242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.33 16.5H13.66"
            stroke="#EE4242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 12.5H14.5"
            stroke="#EE4242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="hidden md:block"></div>
      <div className="flex justify-between items-center col-span-2 md:col-span-1 pb-3 pt-4">
        <h3>12$</h3>
        <div>
        <div className='flex items-center justify-between overflow-hidden w-40 h-10 border-tertiary-light border-2 border-black-600 rounded-full'>
            <button
                className='flex-1 h-full flex items-center justify-center hover:bg-gray' style={{backgroundColor: "#E4E4E4"}}
            >
                <AiOutlineMinus />
            </button>
            <p className='flex-1 h-full text-center flex items-center justify-center'>
                1
            </p>
            <button
                className='flex-1 h-full flex items-center justify-center text-white' style={{backgroundColor: "#224A46"}}
            >
                <AiOutlinePlus />
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
