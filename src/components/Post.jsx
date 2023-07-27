const Post = ({ title, body, user, onClick }) => {
  return (
    <div
      className="border rounded-md p-4 text-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-bold">{title}</h3>
      <p className="mt-4 mb-1 text-sm">{body.substr(0, 100) + "..."}</p>
      <span className="text-gray-400 text-xs">author</span>
    </div>
  );
};

export default Post;
