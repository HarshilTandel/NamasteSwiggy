import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock, FaRupeeSign } from "react-icons/fa";
import MenuShimmer from "./MenuShimmer";
import RestaurantCategory from "./ResturantCategory";

const RestaurantDetails = () => {
  const { id } = useParams(); // Extract `id` from the URL
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.94680&lng=72.92570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurantList =
        data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const selectedRestaurant = restaurantList.find(
        (restaurant) => restaurant.info.id === id
      );
      setRestaurant(selectedRestaurant?.info || null);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
      setLoading(false); // Set loading to false even on error
    }
  };

  if (loading) {
    return <MenuShimmer />;
  }

  if (!restaurant) {
    return <p className="text-center mt-10">Restaurant not found.</p>;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwo,
    cuisines,
    locality,
    sla,
    cloudinaryImageId,
  } = restaurant;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      {/* Restaurant Details Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        {cloudinaryImageId && (
          <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md bg-gray-100">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
              alt={name}
              className="w-full h-full object-cover transition-transform transform hover:scale-110"
            />
          </div>
        )}

        {/* Details Section */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{name}</h1>

          {/* Ratings and Cost */}
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="text-lg font-bold">{avgRatingString}</span>
              <span className="text-sm text-gray-500">
                ({totalRatingsString || "No ratings"})
              </span>
            </div>
            <div className="flex items-center gap-1 text-lg font-medium text-gray-700">
           
              <span>{costForTwo}</span>
            </div>
          </div>

          {/* Cuisines */}
          <p className="text-orange-500 font-medium text-sm mb-4">
            {cuisines.join(", ")}
          </p>

          {/* Location */}
          <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
            <FaMapMarkerAlt />
            <span>{locality}</span>
          </div>

          {/* Delivery Time */}
          <div className="flex items-center text-gray-500 text-sm gap-2">
            <FaClock />
            <span>{sla.slaString}</span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-8 border-gray-200" />

      {/* Restaurant Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">

        </h2>
        <RestaurantCategory restaurantId={id} />
      </div>
    </div>
  );
};

export default RestaurantDetails;
