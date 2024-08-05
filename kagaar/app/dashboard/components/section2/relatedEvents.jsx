import { BsThreeDots } from "react-icons/bs";

function RelatedEvents({ events }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg font-semibold text-gray-800">
          Related Events
        </div>
        <button className="font-medium">
          <BsThreeDots />
        </button>
      </div>
      <div className="border-b border-gray-300 mb-2"></div>
      {/* Map over events and render each one */}
      {events.map((event, index) => (
        <div key={index}>
          <div className="flex items-center mb-4">
            <img
              src={event.image}
              alt="event"
              className="h-12 w-12 rounded-full border border-gray-300"
            />
            <div className="ml-4">
              <div className="font-semibold text-gray-800 ">{event.name}</div>
              <div className="text-sm text-gray-500">{event.dateTime}</div>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="mt-2 flex items-center justify-between pb-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                {event.seenCount}
              </button>
            </div>
            <div className="flex items-center gap-1">
              {event.avatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt={`avatar${idx + 1}`}
                  className="h-8 w-8 rounded-full border border-white"
                />
              ))}
              <div className="text-gray-500 text-sm">
                +{event.additionalAvatars}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedEvents;
