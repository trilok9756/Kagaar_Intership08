import React from "react";
import logo from "./../images/logo.jpeg";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

function Navbar({displayName}) {
  return (
    <nav className="flex items-center justify-between p-2">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={50} height={50} />
        <div className="text-xl font-bold text-black ">Kagaar</div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow ml-20">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center gap-5 mr-10">
        <div>reel</div>
        <div>reel</div>
        <div>reel</div>
      </div>
      {/* Name */}
      <div className="hidden md:flex items-center mr-3">
        <span className="text-gray-700 font-semibold">{displayName}</span>
      </div>

      {/* Avatar */}
      <div className="flex items-center">
        <FaUserCircle size={30} className="text-gray-700 text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
