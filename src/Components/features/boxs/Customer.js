import React, { Fragment } from "react";
import { BiHeadphone } from "react-icons/bi";

const Customer = () => {
  return (
    <Fragment>
      {" "}
      <div className="box">
        <div className="icon">
          <BiHeadphone />
        </div>
        <div className="detail">
          <h3>Customer Support</h3>
          <p>Every Time Call Support</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Customer;
