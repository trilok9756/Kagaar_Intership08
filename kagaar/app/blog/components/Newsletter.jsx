import React from "react";
import { FiSearch } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="py-4  mx-auto">
      <button className="w-full py-2 mb-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
        Subscribe to Our Newsletter
      </button>

      <div className="flex items-center mb-4 border-2 border-gray-300 rounded-lg">
        <FiSearch className="ml-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 p-2 outline-none rounded-lg"
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <h3 className="text-lg font-semibold">What We're Reading Today</h3>
        </div>
        <div className="space-y-4">
          {/* Article Items */}
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex items-start">
              <img
                src="https://dummyimage.com/40x40/b8b2b8/000000"
                alt="Author"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">Amit Das</p>
                <p>Your portfolio is stopping you from getting that job</p>
              </div>
            </div>
          ))}
          <a href="#" className="text-green-500 font-semibold hover:underline">
            See the full list
          </a>
        </div>
      </div>

      {/* Recommended Topics */}
      <div>
        <h3 className="mb-2 text-lg font-semibold">Recommended Topic</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Technology",
            "Money",
            "Business",
            "Productivity",
            "Art",
            "Mindfulness",
            "Yada Yada",
          ].map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
