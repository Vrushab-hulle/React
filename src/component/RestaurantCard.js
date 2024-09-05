import React from "react";
import { LOGO_URL } from "../utils/constants";

function RestaurantCard(props) {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={LOGO_URL + cloudinaryImageId}></img>
      <div className="res-card-info">
        <h3>{name}</h3>
        <a
          style={{
            color: "grey",
            fontSize: "14px",
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal", // Change this to 'normal' if you want it to wrap
          }}
        >
          {cuisines.join(",")}
        </a>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
