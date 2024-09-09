import React, { useState } from "react";

import RestaurantCard, { FastestDelivery } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

function Body(props) {
  const [searchText, setsearchText] = useState("");

  const [listofRestaurant, fliterListofRestaurant, setFliterListofRestaurant] =
    useBody();

  const FastDelivery = FastestDelivery(RestaurantCard);

  // function to filter top rated restaurants
  const filterTopRestaurant = () => {
    const filterData = listofRestaurant.filter((restaurant) => {
      return restaurant?.info.avgRating > 4;
    });
    console.log(filterData);

    setFliterListofRestaurant(filterData);
  };

  // search any restuarant
  const searchRestauarnt = () => {
    const filterText = listofRestaurant.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFliterListofRestaurant(filterText);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline...Check your internet Connection!!!</h1>
    );
  }

  // for conditional render
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mt-[20]">
      <div className="flex justify-around">
        <div className="search">
          <input
            placeholder="Search Restaurants"
            className="placeholder-gray-500 h-[100%] mr-[20] w-[250] rounded border border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-blue-400 text-white p-[5] rounded"
            onClick={searchRestauarnt}
          >
            Search
          </button>
        </div>

        <button
          className=" border border-black w-[180] rounded bg-orange-400 text"
          onClick={filterTopRestaurant}
        >
          {"🔝"}Top Rated Restaurant
        </button>
      </div>
      {console.log(listofRestaurant)}
      <div className="flex flex-wrap ">
        {fliterListofRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.sla?.deliveryTime < 30 ? (
              <FastDelivery resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
