import React from "react";
import LOGO_URL from "../../utils/constant"; // Assuming you have this logo

const Signin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <img src={LOGO_URL} alt="Swiggy Logo" className="w-20 mx-auto mb-4" />
        
        <h1 className="text-4xl font-extrabold text-orange-500 mb-2">Welcome Back!</h1>
        <p className="text-gray-600 mb-6">Login to explore delicious food near you 🍔🍕</p>

        <ul className="text-left text-sm text-gray-700 mb-6 space-y-2 pl-4 list-disc">
          <li>Track your live orders</li>
          <li>Get personalized restaurant recommendations</li>
          <li>Access exclusive offers and discounts</li>
        </ul>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out">
          Sign In with Mobile
        </button>

        <p className="text-xs text-gray-400 mt-6">By continuing, you agree to our Terms & Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Signin;
