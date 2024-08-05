const PostImage = ({ src }) => (
  <div className="mt-2">
    <img src={src} alt="post" className="h-64 w-full object-cover rounded-xl" />
  </div>
);

export default PostImage;
