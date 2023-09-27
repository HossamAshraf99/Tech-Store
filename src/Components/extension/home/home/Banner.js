import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "./banner.css";

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2023</h3>
            <p>
              <BsCurrencyDollar />
              986
            </p>
            <Link to="/product">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/slider-img.png" alt="sliderimg"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
