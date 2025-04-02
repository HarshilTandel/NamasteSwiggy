import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./ResturantCard";
import WhatsOnMind from "./WhatsOnMind";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantsAndBanners();
  }, []);

  const fetchRestaurantsAndBanners = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.94680&lng=72.92570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(data);

      const restaurantList =
        data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="mb-6">
        <h2>
          <WhatsOnMind />
        </h2>
      </div>

      {/* Restaurant Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Top restaurant chains in Navsari
        </h2>

        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                <RestaurantCard data={restaurant.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
