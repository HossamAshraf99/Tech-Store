import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../extension/home/home/home";
import MainProduct from "../extension/proudct/main product/MainProduct";
import Contact from "../extension/contact/Contact";
import Card from "../card/Card";
const Root = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  card,
  setCard,
  addToCard,
}) => {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              product={product}
              detail={detail}
              close={close}
              setClose={setClose}
              view={view}
              addToCard={addToCard}
            />
          }
        />
        <Route
          path="/product"
          element={
            <MainProduct
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addToCard={addToCard}
            />
          }
        />
        <Route
          path="/Card List"
          element={<Card card={card} setCard={setCard} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default Root;
