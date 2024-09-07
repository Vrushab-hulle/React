import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body(props) {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [fliterListofRestaurant, setFliterListofRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  // first time reload
  useEffect(() => {
    fetchData();
  }, []);

  //to fetch the restaurant details from swiggy api
  const fetchData = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7829951&lng=74.27661859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await resData.json();

    setListOfRestaurant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFliterListofRestaurant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // function to filter top rated restaurants
  const filterTopRestaurant = () => {
    const filterData = listofRestaurant.filter((restaurant) => {
      return restaurant?.info.avgRating > 4;
    });
    console.log(filterData);

    setFliterListofRestaurant(filterData);
  };

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

        <button className="filter-btn" onClick={filterTopRestaurant}>
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
