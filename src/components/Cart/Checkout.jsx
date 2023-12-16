/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import NavRouter from "../utily/NavRouter";
import Cart from "./Cart";

const Checkout = () => {
  return (
    <div>
      <NavRouter text="Cart" />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <div className="grid grid-cols-2 px-20 py-10">
        <div className="text-xl">Total</div>
        <div className="text-end text-xl">100$</div>
      </div>
      <Link
        to="/"
        className="md:m-2 flex justify-center items-center font-bold pb-20"
      >
        <button className="btn text-center rounded-3xl md:py-3 h-10">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
