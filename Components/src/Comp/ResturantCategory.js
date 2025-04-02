import React, { useEffect, useState } from "react";
import { FaStar, FaTag, FaUtensils, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantCategory = ({ restaurantId }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [subExpanded, setSubExpanded] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.94680&lng=72.92570&restaurantId=${restaurantId}`;
        const response = await fetch(url);
        const result = await response.json();

        const regularCards =
          result?.data?.cards?.find(
            (card) => card?.groupedCard?.cardGroupMap?.REGULAR
          )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const menuCategories = regularCards
          .map((card) => ({
            title: card?.card?.card?.title || "Unknown Category",
            items: card?.card?.card?.itemCards?.map((item) => item.card.info) || [],
            subcategories: card?.card?.card?.categories?.map((sub) => ({
              title: sub.title,
              items: sub.itemCards?.map((item) => item.card.info) || [],
            })) || [],
          }))
          .filter((category) => category.title !== "Unknown Category");

        setCategories(menuCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  const toggleAccordion = (index) => setExpanded(expanded === index ? null : index);
  const toggleSubAccordion = (categoryIndex, subIndex) =>
    setSubExpanded((prev) => ({
      ...prev,
      [`${categoryIndex}-${subIndex}`]: !prev[`${categoryIndex}-${subIndex}`],
    }));

  // **✅ Ensure correct item object is dispatched**
  const handleAddItem = (item) => {
    dispatch(addItem(item)); // Pass the correct item object to Redux

  };

  if (loading) return <p className="text-center mt-10">Loading categories...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Menu Categories <FaUtensils className="inline ml-2 text-orange-500" />
      </h2>

      <div className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="rounded-lg overflow-hidden shadow-lg">
            {/* Category Header */}
            <button
              className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold flex justify-between items-center"
              onClick={() => toggleAccordion(categoryIndex)}
            >
              <span className="text-lg flex items-center gap-2">
                <FaTag /> {category.title}
              </span>
              <span className="text-xl">
                {expanded === categoryIndex ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </button>

            {/* Category Items */}
            {expanded === categoryIndex && (
              <div className="p-6 bg-gray-50">
                {/* **✅ Subcategories Section** */}
                {category.subcategories.length > 0 &&
                  category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      {/* Subcategory Header */}
                      <button
                        className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-medium flex justify-between items-center rounded-md"
                        onClick={() => toggleSubAccordion(categoryIndex, subIndex)}
                      >
                        <span>{sub.title}</span>
                        <span className="text-lg">
                          {subExpanded[`${categoryIndex}-${subIndex}`] ? (
                            <FaChevronDown />
                          ) : (
                            <FaChevronRight />
                          )}
                        </span>
                      </button>

                      {/* **✅ Subcategory Items with "Add+" Button** */}
                      {subExpanded[`${categoryIndex}-${subIndex}`] &&
                        sub.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex gap-4 items-center"
                          >
                            {/* Image with "Add+" Button Overlay */}
                            <div className="relative">
                              <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120,c_fill/${item.imageId}`}
                                alt={item.name}
                                className="h-24 w-24 rounded-lg object-cover shadow"
                              />
                              <button
                                onClick={() => handleAddItem(item)}
                                className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-md shadow-lg"
                              >
                                Add +
                              </button>
                            </div>

                            {/* Item Details */}
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.description || "No description"}</p>
                              <div className="flex items-center text-sm text-green-500">
                                <FaStar className="mr-1" />
                                {item.ratings?.aggregatedRating?.rating || "N/A"}
                              </div>
                              <p className="text-sm text-gray-500">₹{item.price / 100} for two</p>
                            </div>
                          </li>
                        ))}
                    </div>
                  ))}

                {/* **✅ Main Category Items with "Add+" Button** */}
                {category.items.length > 0 &&
                  category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex gap-4 items-center"
                    >
                      {/* Image with "Add+" Button Overlay */}
                      <div className="relative">
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120,c_fill/${item.imageId}`}
                          alt={item.name}
                          className="h-24 w-24 rounded-lg object-cover shadow"
                        />
                        <button
                          onClick={() => handleAddItem(item)}
                          className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-md shadow-lg"
                        >
                          Add +
                        </button>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description || "No description"}</p>
                        <div className="flex items-center text-sm text-green-500">
                          <FaStar className="mr-1" />
                          {item.ratings?.aggregatedRating?.rating || "N/A"}
                        </div>
                        <p className="text-sm text-gray-500">₹{item.price / 100} for two</p>
                      </div>
                    </li>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
