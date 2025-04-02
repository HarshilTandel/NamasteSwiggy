import React from "react";

const MenuShimmer = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Restaurant Details Shimmer */}
      <div className="bg-white p-4 rounded-lg shadow-md flex space-x-6 items-center animate-pulse">
        <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>

      {/* Deals Shimmer */}
      <div className="flex space-x-4 animate-pulse">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-24 bg-gray-200 rounded-lg shadow"
          ></div>
        ))}
      </div>

      {/* Menu Header Shimmer */}
      <div className="h-6 bg-gray-200 rounded w-32 animate-pulse mx-auto"></div>

      {/* Filters Shimmer */}
      <div className="flex space-x-4 justify-center mt-4 animate-pulse">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="h-8 w-24 bg-gray-200 rounded-full shadow-sm"
          ></div>
        ))}
      </div>

      {/* Categories Shimmer */}
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {/* Category Title */}
            <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse mb-4"></div>

            {/* Items Placeholder */}
            <ul className="space-y-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm animate-pulse"
                >
                  {/* Left: Text */}
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>

                  {/* Right: Image */}
                  <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
