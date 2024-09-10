import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(category);

  return (
    <div className="text-center">
      <h1 className="mt-[15] font-bold text-2xl">{name}</h1>
      <p className="font-semibold italic text-gray-500">
        Location:{" " + areaName}
      </p>
      <p className="font-mono text-green-500">
        Cuisines:
        {" " + cuisines.join(",") + "-" + costForTwoMessage}
      </p>

      {category.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
