import React, { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import reslist from "../utils/mockData";

function Body(props) {
  const [restaurntList, setRestaurntList] = useState(reslist);
  const btnClick = () => {
    const filterRestaurant = restaurntList.filter((res) => {
      return res.avgRating > 4.3;
    });
    setRestaurntList(filterRestaurant);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={btnClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurntList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
