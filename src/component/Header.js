import React from "react";

import { CDN_URl } from "../utils/constants";

function Header(props) {
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
      </div>
    </div>
  );
}

export default Header;
