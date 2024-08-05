import React from "react";

function Friends({ friends }) {
  return (
    <div className="p-4">
      <div className="bg-white p-4 shadow-md rounded-lg mt-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold text-gray-800">Frineds</div>
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            See all
          </button>
        </div>
        <div className="border-b border-gray-300 mb-2"></div>

        {/* Map over the friends data */}
        {friends.map((friend, index) => (
          <div key={index} className="flex items-center mb-4">
            <img
              src={friend.image}
              alt="friend"
              className="h-12 w-12 rounded-full border border-gray-300"
            />
            <div className="ml-4 flex-grow">
              <div className="font-semibold text-gray-800">{friend.name}</div>
              {friend.details && (
                <div className="text-sm text-gray-500">{friend.details}</div>
              )}
            </div>
            {friend.time && (
              <div className="text-gray-500 ml-auto">{friend.time}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
