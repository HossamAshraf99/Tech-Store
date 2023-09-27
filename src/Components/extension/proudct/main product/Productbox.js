import React, { Fragment } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

import { BsEye } from "react-icons/bs";
import "./productbox.css";
const Productbox = ({ product, view, addToCard }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <div className="productbox">
        <div className="contact">
          {product.map((curElm) => {
            return (
              <Fragment>
                {" "}
                <div className="box">
                  <div className="img_box">
                    <img src={curElm.img} alt={curElm.Title}></img>
                    <div className="icon">
                      {isAuthenticated ? (
                        <li onClick={() => addToCard(curElm)}>
                          <AiOutlineShoppingCart />
                        </li>
                      ) : (
                        <li onClick={() => loginWithRedirect()}>
                          <AiOutlineShoppingCart />
                        </li>
                      )}
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
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Productbox;
