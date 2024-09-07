import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

function Body(props) {
  // const [listofRestaurant, setListOfRestaurant] = useState([]);
  // const [fliterListofRestaurant, setFliterListofRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  // first time reload
  // useEffect(() => {
  //   fetchData();
  // }, []);

  //to fetch the restaurant details from swiggy api
  // const fetchData = async () => {
  //   const resData = await fetch(
  //     );
  //   const response = await resData.json();

  //   setListOfRestaurant(
  //     response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //   setFliterListofRestaurant(
  //     response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // };

  const [listofRestaurant, fliterListofRestaurant, topRestuarant] = useBody();

  // function to filter top rated restaurants
  // const filterTopRestaurant = () => {
  //   const filterData = listofRestaurant.filter((restaurant) => {
  //     return restaurant?.info.avgRating > 4;
  //   });
  //   console.log(filterData);

  //   setFliterListofRestaurant(filterData);
  // };

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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filterText = listofRestaurant.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFliterListofRestaurant(filterText);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          //  onClick={filterTopRestaurant}
        >
          Top Rated Restaurant
        </button>
      </div>
      {console.log(listofRestaurant)}
      <div className="res-container">
        {fliterListofRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
