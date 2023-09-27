import React, { Fragment } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const Refund = () => {
  return (
    <Fragment>
      {" "}
      <div className="box">
        <div className="icon">
          <BsCurrencyDollar />
        </div>
        <div className="detail">
          <h3>Return & Refund</h3>
          <p>Money Back Gaurenty</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Refund;
