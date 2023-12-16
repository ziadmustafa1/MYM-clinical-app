/* eslint-disable no-unused-vars */
import React from "react";
import Details from "../../components/OrderDetails/Details";
import NavRouter from "../../components/utily/NavRouter";

const OrderDetails = () => {
  return (
    <div>
      <div>
        <NavRouter text="Details" />
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
};

export default OrderDetails;
