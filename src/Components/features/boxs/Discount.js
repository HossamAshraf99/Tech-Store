import React, { Fragment } from "react";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

const Discount = () => {
  return (
    <Fragment>
      {" "}
      <div className="box">
        <div className="icon">
          <HiOutlineReceiptPercent />
        </div>
        <div className="detail">
          <h3>Member Discount</h3>
          <p>On every Order</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Discount;
