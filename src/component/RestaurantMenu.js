import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  //getting values for restaurant info and other basic info
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    expectationNotifiers,
  } = resInfo?.cards[2]?.card?.card?.info;

  // getting values for the menu of restaurant
  const { categories, itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{areaName}</p>
      <h3>{avgRating + "-" + totalRatingsString}</h3>
      <p>{cuisines.join(",") + " -" + costForTwoMessage}</p>
      <p>{expectationNotifiers[0]?.text}</p>
      <h2>Menu</h2>
      <p>{categories ? categories[0]?.title : itemCards?.title}</p>

      <ul>
        {categories
          ? categories[0].itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}
                {"Rs-" + item?.card?.info?.price / 100}
              </li>
            ))
          : itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}
                {"Rs-" + item?.card?.info?.price / 100}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
