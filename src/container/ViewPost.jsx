import axios from "axios";
import { useEffect, useState } from "react";

const ViewPost = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null);
    axios
      .get(`http://127.0.0.1/api/posts/${postId}/`)
      .then((respone) => setPost(respone.data))
      .catch((error) => console.log(error));
  }, [postId]);

  return (
    <section className="border rounded-md p-4">
      {post ? (
        <>
          <h1 className="font-bold">{post.title}</h1>
          <p className="mt-4 mb-1 text-sm">{post.content}</p>
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
