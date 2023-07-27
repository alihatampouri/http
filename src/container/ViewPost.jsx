import axios from "axios";
import { useEffect, useState } from "react";

const ViewPost = ({ postId, onDelete }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null);
    axios
      .get(`http://localhost/api/posts/${postId}/`)
      .then((respone) => setPost(respone.data))
      .catch((error) => console.log(error));
  }, [postId]);

  const onDeleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete(post.id);
    }
  };

  return (
    <section className="border rounded-md p-4">
      {post ? (
        <>
          <div className="flex justify-between">
            <h1 className="font-bold">{post.title}</h1>
            <button
              className="text-xs bg-red-400/10 text-red-600 hover:bg-red-400/20 px-2 rounded transition-all"
              onClick={onDeleteHandler}
            >
              Delete
            </button>
          </div>
          <p className="mt-4 mb-1 text-sm text-justify">{post.content}</p>
          <span className="text-gray-400 text-xs capitalize">
            {post.fullname} - {post.created_at}
          </span>
        </>
      ) : (
        <div className="animate-pulse text-gray-400">loading...</div>
      )}
    </section>
  );
};

export default ViewPost;
