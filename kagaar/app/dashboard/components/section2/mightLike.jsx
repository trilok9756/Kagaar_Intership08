import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function MightLike() {
  return (
    <>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold text-gray-800">
            You might like
          </div>
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            See all
          </button>
        </div>
        <div className="border-b border-gray-300 mb-2"></div>

        {/* User Suggestion */}
        <div className="flex items-center mb-4">
          <img
            src="https://dummyimage.com/40x40"
            alt="avatar"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">John Doe</div>
            <div className="text-sm text-gray-500">Founder</div>
            <div className="flex items-center mt-2 space-x-6">
              <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-700" />
              <FaTwitter className="text-blue-400 cursor-pointer hover:text-blue-500" />
              <FaLinkedin className="text-blue-700 cursor-pointer hover:text-blue-800" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-4">
          <button className="px-6 py-2  text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300 border-gray-600 border">
            Ignore
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Follow
          </button>
        </div>
      </div>
    </>
  );
}

export default MightLike;
