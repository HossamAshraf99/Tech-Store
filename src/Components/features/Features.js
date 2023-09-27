import React, { Fragment } from "react";
import FreeShipping from "./boxs/FreeShipping";
import Refund from "./boxs/Refund";
import Discount from "./boxs/Discount";
import Customer from "./boxs/Customer";
import "./features.css";

const Features = () => {
  return (
    <Fragment>
      <div className="features">
        <div className="container">
          <FreeShipping />
          <Refund />
          <Discount />
          <Customer />
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default Features;
