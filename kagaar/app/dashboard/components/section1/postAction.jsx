import { FaUserCircle, FaRegSmile } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

const PostActions = () => (
  <div className="flex-grow mt-3 pb-2">
    <div className="flex items-center gap-4 relative">
      <FaUserCircle className="text-gray-500 text-3xl" />
      <textarea
        placeholder="What's happening? "
        className="w-full p-2 border border-gray-300 bg-blue-50 rounded-2xl resize-none"
        rows="1"
      ></textarea>
      <div className="flex items-center gap-2 ml-2 absolute right-14">
        <FaRegSmile className="text-gray-500 text-xl cursor-pointer hover:text-yellow-500" />
        <MdGif className="text-gray-500 text-xl cursor-pointer hover:text-purple-500" />
        <RiGalleryFill className="text-gray-500 text-xl cursor-pointer hover:text-purple-500" />
      </div>
      <div className="bg-blue-200 p-2 rounded-md">
        <IoSend className="text-blue-600 text-xl cursor-pointer hover:text-green-500" />
      </div>
    </div>
  </div>
);

export default PostActions;
