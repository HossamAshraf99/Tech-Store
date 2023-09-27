import React, { Fragment, useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import "./Nav.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Profile from "../auth/Profile";

const Nav = ({ searchbtn }) => {
  // Search State
  const [search, setSearch] = useState();
  // End Handeler
  return (
    <Fragment>
      <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p> FREE Shipping when shopping upto 1000$</p>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src="./img/logo.svg" alt="logo" />
          </div>

          <div className="search-box">
            <input
              type="text"
              value={search}
              placeholder="Search Your Product..."
              autoComplete="off"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <button onClick={() => searchbtn(search)}>Search</button>
          </div>

          <div className="icon">
            <div className="account">
              <Profile />
            </div>

            <div className="second-icon">
              <Link to="/" className="link">
                <AiOutlineHeart />
              </Link>
              <Link to="/Card List" className="link">
                <BiShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </Fragment>
  );
};

export default Nav;
