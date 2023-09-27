import React, { Fragment } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./mainproduct.css";

const ProductBoxDetails = ({ detail, close, setClose }) => {
  return (
    <Fragment>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img_box">
                    <img src={curElm.img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      {" "}
                      A Screen Everyone Will Love: Wether your family is
                      streaming or video chatting with friends tablet A8...{" "}
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </div>
      ) : null}
    </Fragment>
  );
};

export default ProductBoxDetails;
