import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  //function to fetch restaurant menu
  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const response = await data.json();
    console.log(response.data);
    setResInfo(response?.data);
  };
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
  // ?.categories[0];

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
