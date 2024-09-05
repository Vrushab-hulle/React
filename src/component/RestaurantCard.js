import React from "react";
import { LOGO_URL } from "../utils/constants";

function RestaurantCard(props) {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={LOGO_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}

export default RestaurantCard;
