import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LOGO_URL from '../../utils/constant';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';

// Import icons
import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart, FaUserAlt, FaQuestionCircle, FaTags, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white shadow-md gap-2 md:gap-0">
      <div className="text-2xl font-bold text-orange-500 flex items-center">
        <img src={LOGO_URL} alt="Logo" className="object-contain w-20 h-10" />
      </div>

      <nav className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm font-medium">
        <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
          <AiFillHome /> Home
        </Link>
        <Link to="/cart" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
          <FaShoppingCart /> Cart({cartItems.length})
        </Link>
        <Link to="/signin" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
          <FaUserAlt /> Sign In
        </Link>
        <Link to="/help" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
          <FaQuestionCircle /> Help
        </Link>
        <Link to="/offers" className="flex items-center gap-1 text-orange-500 font-semibold">
          <FaTags /> Offers
        </Link>
        <Link to="/contact" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
          <FaPhoneAlt /> Contact Us
        </Link>
        <span className="text-gray-700 font-semibold hidden sm:inline">{loggedInUser}</span>
      </nav>
    </header>
  );
};

export default Header;
