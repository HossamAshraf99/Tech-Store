import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Style from "./home.modules.css";
import Typepr from "../../proudct/Typepr";
import Features from "../../../features/Features";
import Proudct from "../../proudct/Product";
import Banner from "./Banner";
import ProductBoxDetails from "../../proudct/main product/ProductBoxDetails";
const Home = ({ product, detail, close, setClose, view, addToCard }) => {
  return (
    <Fragment>
      <ProductBoxDetails detail={detail} close={close} setClose={setClose} />
      <div className="top-banner" style={Style.top}>
        <div className="container" style={Style.container}>
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/slider-img.png" alt="sliderimg" />
          </div>
        </div>
      </div>
      <Typepr />
      <Features />
      <Proudct product={product} view={view} addToCard={addToCard} />
      <Banner />
    </Fragment>
  );
};

export default Home;
