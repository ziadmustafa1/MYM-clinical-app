/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const CustomerIetm = () => {
  return (
    <div className="grid grid-cols-5 px-5 py-3 mx-5 rounded-lg text-center flex items-center">
      <div className="col-span-2 flex justify-start">
        <div className="w-10 h-10 text-2xl flex items-center">
          <FaUserAlt />
        </div>
        <div>
          <h1>Ahmed Mohamed</h1>
          <p className=" text-gray-400">Ahmed@gmail.com</p>
        </div>
      </div>
      <div className="col-span-1">4 items</div>
      <div className="col-span-1">12,00$ </div>
      <div className="col-span-1">
        <svg
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="26" cy="26.5" r="26" fill="#D3FBD7" />
          <path
            d="M21.9168 34.6673H21.3335C16.6668 34.6673 14.3335 33.5007 14.3335 27.6673V21.834C14.3335 17.1673 16.6668 14.834 21.3335 14.834H30.6668C35.3335 14.834 37.6668 17.1673 37.6668 21.834V27.6673C37.6668 32.334 35.3335 34.6673 30.6668 34.6673H30.0835C29.7218 34.6673 29.3718 34.8423 29.1502 35.134L27.4002 37.4673C26.6302 38.494 25.3702 38.494 24.6002 37.4673L22.8502 35.134C22.6635 34.8773 22.2318 34.6673 21.9168 34.6673Z"
            stroke="#224A46"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.6624 25.3333H30.6729"
            stroke="#224A46"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.9949 25.3333H26.0054"
            stroke="#224A46"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.3269 25.3333H21.3374"
            stroke="#224A46"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="45.5" cy="8" r="6.5" fill="#E63B47" />
        </svg>
      </div>
    </div>
  );
};

export default CustomerIetm;
