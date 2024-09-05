import React, { useState } from "react";

import { CDN_URl } from "../utils/constants";

function Header(props) {
  const [btnName, setbtnName] = useState("login");

  const btnClick = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
    console.log(btnName);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URl} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
