import axios from "axios";
import { useEffect, useState } from "react";

const ViewPost = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((respone) => setPost(respone.data))
      .catch((error) => console.log(error));
  }, [postId]);

  return (
    <section className="border rounded-md p-4">
      {post ? (
        <>
          <h1 className="font-bold">{post.title}</h1>
          <p className="mt-4 mb-1 text-sm">{post.body}</p>
          <span className="text-gray-400 text-xs">author</span>
        </>
      ) : (
        <div className="animate-pulse text-gray-400">loading...</div>
      )}
    </section>
  );
};

export default ViewPost;
