"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa"; // Added FaBars for the collapse icon
import { IoDocumentTextOutline } from "react-icons/io5";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Render a fallback while the component is mounting to avoid mismatches
  if (!isMounted) {
    return <div className="w-20 h-screen bg-gray-100" />;
  }

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-white`}
    >
      <ul className="mt-4 ml-2">
        <li
          onClick={toggleSidebar}
          className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md"
        >
          <FaBars className="mr-3" />
          {isOpen && <span>Close</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaHome className="mr-3" />
          {isOpen && <span>Feed</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaUser className="mr-3" />
          {isOpen && <span>My Community</span>}
        </li>
        <Link
          href={"/blog"}
          className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md"
        >
          <IoDocumentTextOutline className="mr-3" />
          {isOpen && <span>Blog</span>}
        </Link>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaCog className="mr-3" />
          {isOpen && <span>Notification</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaCog className="mr-3" />
          {isOpen && <span>Explore</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaCog className="mr-3" />
          {isOpen && <span>Profile</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaCog className="mr-3" />
          {isOpen && <span>Settings</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer rounded-md">
          <FaSignOutAlt className="mr-3" />
          {isOpen && <span>Logout</span>}
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
