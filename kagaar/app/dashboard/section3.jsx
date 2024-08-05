import React from "react";
import Friends from "./components/section3/friends";
import { GoDotFill } from "react-icons/go";
function Section3() {
  const friendsData = [
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: "2 min",
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: (
        <>
          <GoDotFill color="#228B22" />
        </>
      ),
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: "2 min",
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: (
        <>
          <GoDotFill color="#228B22" />
        </>
      ),
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: "2 min",
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: (
        <>
          <GoDotFill color="#228B22" />
        </>
      ),
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: "2 min",
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "John Doe",
      time: (
        <>
          <GoDotFill color="#228B22" />
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="p-4">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Avatars and Names in a single row */}
        <div className="flex space-x-4">
          <div className="text-center">
            <img
              src="https://dummyimage.com/80x80"
              alt="Avatar 1"
              className="mx-auto h-14 w-14 rounded-full border border-gray-300"
            />
            <div className="mt-2 text-sm text-gray-700">Name 1</div>
          </div>
          <div className="text-center">
            <img
              src="https://dummyimage.com/80x80"
              alt="Avatar 2"
              className="mx-auto h-14 w-14 rounded-full border border-gray-300"
            />
            <div className="mt-2 text-sm text-gray-700">Name 2</div>
          </div>
          <div className="text-center">
            <img
              src="https://dummyimage.com/80x80"
              alt="Avatar 3"
              className="mx-auto h-14 w-14 rounded-full border border-gray-300"
            />
            <div className="mt-2 text-sm text-gray-700">Name 3</div>
          </div>
          <div className="text-center">
            <img
              src="https://dummyimage.com/80x80"
              alt="Avatar 4"
              className="mx-auto h-14 w-14 rounded-full border border-gray-300"
            />
            <div className="mt-2 text-sm text-gray-700">Name 4</div>
          </div>
        </div>
      </div>
      <Friends friends={friendsData} />
    </div>
  );
}

export default Section3;
