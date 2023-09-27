import React, { Fragment } from "react";
import Productbox from "./Productbox";
import ProductDetails from "./ProductDetails";
import ProductBoxDetails from "./ProductBoxDetails";
import "./mainproduct.css";
const MainProduct = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addToCard,
}) => {
  // Mange State From App => root => to here
  // Filter Handeler
  const filtterproduct = (product) => {
    const update = ProductDetails.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  // All Product Button Handeler
  const allProducts = () => {
    setProduct(ProductDetails);
  };

  return (
    <Fragment>
      <ProductBoxDetails detail={detail} close={close} setClose={setClose} />
      <div className="mainproduct">
        <h3># Products</h3>
        <p> Home - products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li onClick={() => allProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <Productbox
            product={product}
            detail={detail}
            view={view}
            addToCard={addToCard}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default MainProduct;
