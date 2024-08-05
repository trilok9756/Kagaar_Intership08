import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const PostFooter = () => (
  <div>
    <div className="mt-2 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img
          src="https://dummyimage.com/40x40"
          alt="avatar1"
          className="h-8 w-8 rounded-full border border-white"
        />
        <img
          src="https://dummyimage.com/40x40"
          alt="avatar2"
          className="h-8 w-8 rounded-full border border-white"
        />
        <img
          src="https://dummyimage.com/40x40"
          alt="avatar3"
          className="h-8 w-8 rounded-full border border-white"
        />
        <div className="text-gray-500 text-sm">+9</div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
          3 comments
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
          17 share
        </button>
      </div>
    </div>
    <div className="text-gray-500 border-b border-gray-300 w-full mt-2"></div>
    <div className="flex items-center justify-between mt-2">
      <button className="flex items-center gap-2 text-gray-500 hover:text-red-500">
        <FaHeart className="text-xl" />
        <span>Like</span>
      </button>
      <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
        <FaComment className="text-xl" />
        <span>Comment</span>
      </button>
      <button className="flex items-center gap-2 text-gray-500 hover:text-green-500">
        <FaShare className="text-xl" />
        <span>Share</span>
      </button>
    </div>
    <div className="text-gray-500 border-b border-gray-300 w-full mt-2"></div>
  </div>
);

export default PostFooter;
