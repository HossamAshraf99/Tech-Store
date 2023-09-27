import React, { Fragment } from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img/logo.svg" alt="logo"></img>
            </div>
            <div className="detail">
              <p>
                We are a team of passionate people who love to create beautiful
                and useful products
                <div className="icon">
                  <li>
                    <BiLogoFacebookSquare />
                  </li>
                  <li>
                    <AiOutlineInstagram />
                  </li>
                  <li>
                    <AiOutlineTwitter />
                  </li>
                  <li>
                    <BiLogoYoutube />
                  </li>
                </div>
              </p>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Card</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contect</li>
              <li>Terma & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
