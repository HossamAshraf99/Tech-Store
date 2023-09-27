import React, { Fragment, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Components/module/root";
import Nav from "./Components/nav/Nav";
import Footer from "./Components/footer/Footer";
import ProductDetails from "./Components/extension/proudct/main product/ProductDetails";
const App = () => {
  // Product State
  const [product, setProduct] = useState(ProductDetails);

  //  Search Handeler
  const searchbtn = (product) => {
    const change = ProductDetails.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };
  // End Search Handeler

  // Product Box Details  State to View Handeler
  const [detail, setDetail] = useState([]);

  // Product Box Details State to  Close
  const [close, setClose] = useState(false);

  // Product Details
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };
  // End Product Details

  // Card State Card Componend
  const [card, setCard] = useState([]);

  // Function to Handeler Card Componend
  const addToCard = (product) => {
    const exsit = card.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This card has already been added ");
    } else {
      setCard([...card, { ...product, qty: 1 }]);
      alert(`adding product in card`);
    }
    console.log(card);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Root
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          card={card}
          setCard={setCard}
          addToCard={addToCard}
        />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
