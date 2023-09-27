import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./card.css";

const Card = ({ card, setCard }) => {
  const inQty = (product) => {
    const exsit = card.find((x) => {
      return x.id === product.id;
    });
    setCard(
      card.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty + 1 }
          : curElm;
      })
    );
  };
  const decQty = (product) => {
    const exsit = card.find((x) => {
      return x.id === product.id;
    });
    setCard(
      card.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty - 1 }
          : curElm;
      })
    );
  };
  const removeCard = (product) => {
    const exsit = card.find((x) => {
      return x.id === product.id;
    });
    if (exsit.qty >= 0) {
      setCard(
        card.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };
  const totalPrice = card.reduce(
    (price, item) => price + item.qty * parseInt(item.Price),
    0
  );
  return (
    <Fragment>
      <div className="cardcontainer">
        {card.length === 0 && (
          <div className="emptycard">
            <h2 className="empty">Card is Empty</h2>
            <Link to="/product">Shop Now</Link>
          </div>
        )}
        <div className="contant">
          {card.map((curElm) => {
            return (
              <div className="card-item">
                <div className="img-cardbox">
                  <img src={curElm.img} alt={curElm.id}></img>
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>{curElm.Price}</p>
                    <p>Price: {curElm.Price}</p>
                    <div className="qty">
                      <button className="inqty" onClick={() => inQty(curElm)}>
                        +
                      </button>
                      <input type="text" value={curElm.qty}></input>
                      <button className="decqty" onClick={() => decQty(curElm)}>
                        -
                      </button>
                    </div>
                    <h4 className="subtotal">
                      sub total: ${parseInt(curElm.Price) * curElm.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button
                      className="closebtn"
                      onClick={() => removeCard(curElm)}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {card.length > 0 && (
          <Fragment>
            <h2 classname="totalprice"> {totalPrice} $</h2>
            <button clasname="checkout"> Check out </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Card;
