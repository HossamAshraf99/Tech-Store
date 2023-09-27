import React, { Fragment } from "react";
import { FiTruck } from "react-icons/fi";

const FreeShipping = () => {
  return (
    <Fragment>
      {" "}
      <div className="box">
        <div className="icon">
          <FiTruck />
        </div>
        <div className="detail">
          <h3>Free Shipping</h3>
          <p>Order above 1000$</p>
        </div>
      </div>
    </Fragment>
  );
};

export default FreeShipping;
