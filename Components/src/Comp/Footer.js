import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LOGO_URL from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-10 border-t">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 sm:grid-cols-2 gap-8">

        {/* Swiggy Logo & App Links */}
        <div className="md:col-span-1">
          <img src={LOGO_URL} alt="Swiggy Logo" className="w-24 mb-4" />
          <div className="flex flex-col gap-3">
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="w-36"
              />
            </a>
            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-36"
              />
            </a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">About</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Team</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy One</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-orange-500">Partner with us</a></li>
            <li><a href="#" className="hover:text-orange-500">Ride with us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Connect</h3>
          <div className="flex gap-4 text-xl mb-4">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4 px-4">
        © {new Date().getFullYear()} Swiggy Clone. Built with ❤️ by Harshil Tandel
      </div>
    </footer>
  );
};

export default Footer;
