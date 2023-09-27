import React, { Fragment } from "react";
// import Homeproduct from "../home/Homeproduct";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./stylePro.css";

const Product = ({ product, view, addToCard }) => {
  return (
    <Fragment>
      <div className="product">
        <h2>Top Product</h2>

        <div className="container">
          {product.map((curElm) => {
            return (
              <div className="box">
                <div className="img_box">
                  <img src={curElm.img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li onClick={() => addToCard(curElm)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <BsEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>{curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
