import React from "react";
import MightLike from "./components/section2/mightLike";
import RelatedEvents from "./components/section2/relatedEvents";

function Section2() {
  // Example data for RelatedEvents
  const events = [
    {
      image: "https://dummyimage.com/40x40",
      name: "Event Name 1",
      dateTime: "Date and Time 1",
      seenCount: "Seen 8",
      avatars: [
        "https://dummyimage.com/40x40",
        "https://dummyimage.com/40x40",
        "https://dummyimage.com/40x40",
      ],
      additionalAvatars: 9,
    },
    {
      image: "https://dummyimage.com/40x40",
      name: "Event Name 2",
      dateTime: "Date and Time 2",
      seenCount: "Seen 15",
      avatars: [
        "https://dummyimage.com/40x40",
        "https://dummyimage.com/40x40",
        "https://dummyimage.com/40x40",
      ],
      additionalAvatars: 5,
    },
    // Add more events as needed
  ];

  return (
    <>
      <MightLike />
      <RelatedEvents events={events} />
      <div className="bg-white p-4 shadow-md rounded-lg mt-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold text-gray-800">Birthdays</div>
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            See all
          </button>
        </div>
        <div className="border-b border-gray-300 mb-2"></div>

        <div className="flex items-center mb-4">
          <img
            src={events[0].image}
            alt="event"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">hekrejwj</div>
            <div className="text-sm text-gray-500">hekrejwj</div>
          </div>
        </div>
        <div className="border-b border-gray-300 mb-2"></div>
        <div className="flex items-center mb-4">
          <img
            src={events[0].image}
            alt="event"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">hekrejwj</div>
            <div className="text-sm text-gray-500">hekrejwj</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={events[0].image}
            alt="event"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">hekrejwj</div>
            <div className="text-sm text-gray-500">hekrejwj</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={events[0].image}
            alt="event"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">hekrejwj</div>
            <div className="text-sm text-gray-500">hekrejwj</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={events[0].image}
            alt="event"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">hekrejwj</div>
            <div className="text-sm text-gray-500">hekrejwj</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
