import React, { useContext, useState } from "react";

import { CDN_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header(props) {
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  const { loggedInUser } = data;

  // subscribing tot he store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const btnClick = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
    console.log(btnName);
  };
  return (
    <div className="flex justify-between bg-violet-100 border rounded w-full m-0 ">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-[100] " src={CDN_URl} />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex space-x-8 m-[10] ">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold text-red-600">
            <Link to="/cart">{"🛒" + cartItems.length}</Link>
          </li>
          <button onClick={btnClick}>{btnName}</button>

          {btnName == "logout" ? <li>{loggedInUser}</li> : <></>}
        </ul>
      </div>
    </div>
  );
}

export default Header;
