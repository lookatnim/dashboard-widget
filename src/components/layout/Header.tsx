import React from "react";
import { Bell, Search } from "lucide-react";
import viteLogo from "../../assets/react.svg";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
  return (
    <header className="w-full flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow-md rounded-xl ">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src={viteLogo}
          className="text-black bg-gray-200 p-2 rounded-full"
          alt="Vite logo"
        />
        <span className="font-bold text-lg">Tharindu Nimesh</span>
      </div>

      {/* Navigation Section */}
      <nav className="flex space-x-8">
      <div className="flex space-x-6">
        <Link
          to="/"
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive("/") ? "bg-gray-600 text-white" : "text-gray-400"
          } hover:bg-gray-400 hover:text-black`}
        >
          Widget
        </Link>
        <Link
          to="/about"
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive("/about") ? "bg-gray-600 text-white" : "text-gray-400"
          } hover:bg-gray-400 hover:text-black`}
        >
          About
        </Link>
      </div>
      </nav>

      {/* Icons and Profile Section */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <button className="text-gray-500 hover:text-white" aria-label="Search">
          <Search />
        </button>
        {/* Notification Icon */}
        <button
          className="text-gray-500 hover:text-white relative"
          aria-label="Notifications"
        >
          <Bell />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        </button>
        {/* Profile Picture */}
        <img
          src="./src/assets/profileAvatar.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;
