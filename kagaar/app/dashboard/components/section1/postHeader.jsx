import { FaUserCircle, FaEllipsisH } from "react-icons/fa";

const PostHeader = () => (
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center gap-6">
      <FaUserCircle className="text-gray-500 text-3xl" />
      <div>
        <div>Name here</div>
        <div className="text-sm text-gray-500">Name here</div>
      </div>
    </div>
    <FaEllipsisH className="text-gray-500 text-xl" />
  </div>
);

export default PostHeader;
