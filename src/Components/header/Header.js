import React from "react";
import { Link } from "react-router-dom";
import Style from "./header.modules.css";
import User from "../auth/User";

const Header = () => {
  return (
    <div className="header" style={Style.header}>
      <div className="container" style={Style.container}>
        <div className="nav" style={Style.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <User />
      </div>
    </div>
  );
};

export default Header;
