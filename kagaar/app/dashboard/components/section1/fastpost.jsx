import { FaPhotoVideo, FaSmile, FaUserCircle } from "react-icons/fa";

function Fastpost() {
  return (
    <>
      <div className="bg-white px-2 pb-4 pt-2 shadow-md rounded-2xl flex items-start">
        {/* Input Field and Actions */}
        <div className="flex-grow">
          <div className="flex justify-center gap-2">
            <FaUserCircle className="text-gray-500 text-3xl mr-2" />
            {/* Input Field */}
            <textarea
              placeholder="What's happening?"
              className="w-full p-2 border border-gray-300 rounded-2xl resize-none bg-blue-50"
              rows="1"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center">
              <FaPhotoVideo className="mr-2 text-xl" />
              Live video
            </button>
            <button className="flex items-center">
              <FaSmile className="mr-2 text-xl" />
              Photo/Video
            </button>
            <button className="flex items-center">
              <FaSmile className="mr-2 text-xl" />
              Feeling
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fastpost;
