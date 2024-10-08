import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "./constants";

const useBody = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [fliterListofRestaurant, setFliterListofRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurantCardDetails();
  }, []);

  const fetchRestaurantCardDetails = async () => {
    const data = await fetch(RESTAURANTS_URL);

    const response = await data.json();

    setListOfRestaurant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFliterListofRestaurant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return [listofRestaurant, fliterListofRestaurant, setFliterListofRestaurant];
};

export default useBody;
