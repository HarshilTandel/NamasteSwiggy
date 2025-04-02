import React from "react";
import { FaStar, FaClock, FaTag } from "react-icons/fa";
import Shimmer from "./Shimmer";

const RestaurantCard = ({ data }) => {
  if (!data) {
    return <Shimmer />;
  }

  const {
    name,
    cloudinaryImageId,
    locality,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    aggregatedDiscountInfoV3,
  } = data;

  // Construct the image URL using the provided base URL
  const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto flex flex-col justify-between"
      style={{ width: "18rem", height: "28rem" }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow justify-between">
        {/* Top Content */}
        <div>
          {/* Restaurant Name */}
          <h3 className="text-lg font-bold text-gray-800 text-center truncate mb-2">{name}</h3>

          {/* Locality */}
          <div className="text-gray-500 text-sm text-center mb-2 truncate">
            {locality}
          </div>

          {/* Cost for Two */}
          <div className="text-gray-500 text-sm text-center mb-2 truncate">
            {costForTwo}
          </div>

          {/* Cuisines */}
          <div className="flex flex-wrap justify-center text-sm text-gray-600 mb-3 space-x-2">
            {cuisines.map((cuisine, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full truncate">{cuisine}</span>
            ))}
          </div>

          {/* Ratings and Delivery Time */}
          <div className="flex justify-between items-center text-sm mb-3">
            <div className="flex items-center text-yellow-500 font-semibold">
              <FaStar className="mr-1" />
              <span>{avgRatingString}</span>
            </div>
            <div className="flex items-center text-gray-700 font-semibold">
              <FaClock className="mr-1" />
              <span>{sla.slaString}</span>
            </div>
          </div>

          {/* Discount */}
          {aggregatedDiscountInfoV3 && (
            <div className="flex items-center justify-center text-red-500 text-sm font-semibold mb-2 truncate">
              <FaTag className="mr-1" />
              <span>{aggregatedDiscountInfoV3.header}</span>
            </div>
          )}
        </div>

        {/* Order Now Button */}
        <div className="mt-auto">
          <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg mt-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
