import React from "react";
import { FaTags, FaUtensils, FaWallet } from "react-icons/fa";

const Offers = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-2">Exciting Offers Just for You!</h1>
      <p className="text-center text-gray-600 mb-10">Save more every time you order 😋</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Offer Card 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">
          <FaTags className="text-3xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Flat ₹100 Off</h2>
          <p className="text-sm text-gray-600 mb-2">Get flat ₹100 off on orders above ₹399 using code <strong>NAMASTE100</strong>.</p>
          <p className="text-xs text-gray-400">Valid once per user • T&C Apply</p>
        </div>

        {/* Offer Card 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">
          <FaUtensils className="text-3xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Free Delivery</h2>
          <p className="text-sm text-gray-600 mb-2">Enjoy free delivery on your first 3 orders above ₹149.</p>
          <p className="text-xs text-gray-400">Valid for new users • T&C Apply</p>
        </div>

        {/* Offer Card 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">
          <FaWallet className="text-3xl text-orange-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">20% Cashback</h2>
          <p className="text-sm text-gray-600 mb-2">Pay with Swiggy Wallet and get 20% cashback up to ₹50.</p>
          <p className="text-xs text-gray-400">Min. order ₹249 • T&C Apply</p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
