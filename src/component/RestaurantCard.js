import React from "react";
import { LOGO_URL } from "../utils/constants";

function RestaurantCard(props) {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    <div className="flex flex-col justify-around w-[200] h-[350]  m-[12] mt-[20] shadow-md shadow-gray-500 border rounded-md">
      <img className="w-[200] h-[50%]" src={LOGO_URL + cloudinaryImageId}></img>

      <h3 className="font-bold">{name}</h3>
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
      <h4>
        {avgRating} {"⭐"}
      </h4>
      <h4 className="text-green-900">{costForTwo}</h4>
    </div>
  );
}

export default RestaurantCard;
