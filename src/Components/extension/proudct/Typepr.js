import React, { Fragment } from "react";
import Mobile from "./boxs/Mobile";
import Headphone from "./boxs/Headphone";
import Cpu from "./boxs/Cpu";
import Smartwatch from "./boxs/Smartwatch";
import Style from "./product.modules.css";

const Typepr = () => {
  return (
    <Fragment>
      <div className="product-type" style={Style.product}>
        <div className="container">
          <Mobile />
          <Smartwatch />
          <Headphone />
          <Cpu />
        </div>
      </div>
    </Fragment>
  );
};

export default Typepr;
