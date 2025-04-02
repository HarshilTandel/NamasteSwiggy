import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { FaTrash, FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(true);

  // Calculate Total Price
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0) / 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <FaShoppingCart /> Your Cart ({cartItems.length} items)
        </span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </h2>

      {/* Cart Items List */}
      {isExpanded && (
        <>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">Your cart is empty 🛒</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  {/* Image */}
                  <img
                    src={
                      item.imageId
                        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120,c_fill/${item.imageId}`
                        : "https://via.placeholder.com/120"
                    }
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-300"
                  />

                  {/* Item Details */}
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                    <p className="text-sm text-gray-600">₹{(item.price || 0) / 100}</p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:text-red-600 text-lg transition"
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {/* Cart Total */}
      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">Total:</span>
          <span className="text-xl font-bold text-orange-500">₹{totalPrice.toFixed(2)}</span>
        </div>
      )}

      {/* Clear Cart Button */}
      {cartItems.length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-lg font-bold rounded-md shadow-md transition"
          >
            Clear Cart 🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
