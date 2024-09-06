import React, { useState } from "react";

import { CDN_URl } from "../utils/constants";
import { Link } from "react-router-dom";

function Header(props) {
  const [btnName, setbtnName] = useState("login");

  const btnClick = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
    console.log(btnName);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={CDN_URl} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button className="login-btn" onClick={btnClick}>
          {btnName}
        </button>
      </div>
    </div>
  );
}

export default Header;
