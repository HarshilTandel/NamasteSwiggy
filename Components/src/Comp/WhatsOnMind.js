import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WhatsOnMind = () => {
  const [images, setImages] = useState([]);
  const scrollRef = useRef(null);

  const dishAPI = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.94680&lng=72.92570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const imageCards =
        data.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
      setImages(imageCards);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    dishAPI();
  }, []);

  const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto bg-white py-6">
      {/* Header with Arrows */}
      <div className="flex justify-between items-center px-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-900">What's on your mind?</h2>

        <div className="flex space-x-2">
          <button
            className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={scrollLeft}
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <button
            className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={scrollRight}
          >
            <FaArrowRight className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Scrollable Container: Shows Only 6 Dishes at a Time */}
      <div
        ref={scrollRef}
        className="flex space-x-6 px-6 py-4 overflow-hidden"
        style={{
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        {images.slice(0, 12).map((image) => (
          <div key={image.id} className="flex flex-col items-center min-w-[128px]">
            <img
              src={`${baseUrl}${image.imageId}`}
              alt={image.accessibility?.altText || "Dish"}
              className="w-[8rem] h-[10rem] object-contain"
              style={{
                background: "none", // Removes any background
              }}
            />
                      </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsOnMind