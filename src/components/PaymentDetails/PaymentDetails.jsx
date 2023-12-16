/* eslint-disable no-unused-vars */
import { Input } from "@material-tailwind/react";
import React from "react";
import { FaCcVisa } from "react-icons/fa";

const PaymentDetails = () => {
  return (
    <div>
      <div className="md:mx-10 mx-5">
        <div>
          <div className="mt-4">
            <div className="relative">
              <div className="md:m-2 absolute inset-y-0 w-40 end-5 top-0 flex justify-center items-center pointer-events-nonetext-xl font-bold text-neutral-500">
                <button className="btn text-center rounded-3xl md:py-3 h-10">
                  Apply
                </button>
              </div>
              <input
                placeholder="discount coupon"
                type="text"
                name="search"
                id="search"
                aria-describedby="helper-text-explanation"
                className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 rounded-lg"
                style={{ border: "1px solid #cbcbcb" }}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
          </div>
          <div
            className="grid grid-cols-2 m-5"
            style={{ borderBottom: "1px solid #A19E9E" }}
          >
            <div className="py-2">Subtotal</div>
            <div className="text-end py-2">100$</div>
            <div className="py-2">Delivery</div>
            <div className="text-end py-3">10$</div>
          </div>
          <div className="grid grid-cols-2 m-5">
            <div className="py-2">total</div>
            <div className="text-end py-2">110$</div>
            <div className="py-2 flex justify-start items-center">
              <input
                placeholder="discount coupon"
                type="radio"
                name="search"
                id="search"
                aria-describedby="helper-text-explanation"
                className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 rounded-lg"
                style={{ border: "1px solid #cbcbcb" }}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
              <img
                width={150}
                src="https://web.vodafone.com.eg/documents/31803/10216111/Economic-Cash.png/d6c0c593-3488-5c6a-f953-53204d175316?t=1661951360032"
              />
            </div>
            <div className="text-end py-2 flex justify-start items-center text-indigo-600 text-3xl">
              <input
                placeholder="discount coupon"
                type="radio"
                name="search"
                id="search"
                aria-describedby="helper-text-explanation"
                className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 rounded-lg"
                style={{ border: "1px solid #cbcbcb" }}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
              <FaCcVisa />
            </div>
          </div>
          <div className="grid grid-cols-2 m-5">
            <div className="py-2 col-span-2 my-5">
              <div className="flex  flex-col items-start gap-6 shadow-md">
                <h1 className=" px-5">enter your card number</h1>
                <Input size="md" label="card number" />
              </div>
            </div>
            <div className="flex  flex-col items-start gap-6 mr-5 shadow-2xl" >
            <h1 className=" px-5">expiry date</h1>
                <Input size="md" label="MM/YY" />
              </div>
              <div className="flex  flex-col items-start gap-6 shadow-2xl">
              <h1 className=" px-5">CVV</h1>
                <Input size="md" label="123" />
              </div>
          </div>
        </div>
      </div>
      <div className="md:m-2 flex justify-center items-center font-bold pb-20">
                <button className="btn text-center rounded-3xl md:py-3 h-10">
                Pay
                </button>
              </div>
    </div>
  );
};

export default PaymentDetails;
