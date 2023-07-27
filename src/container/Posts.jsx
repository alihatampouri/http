import axios from "axios";
import Post from "../components/Post";
import { useEffect, useState } from "react";

const Posts = ({ onSelectPost }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respone) => setPosts(respone.data.slice(5, 11)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="grid grid-cols-3 gap-4 my-4">
      {posts ? (
        posts.map((p) => (
          <Post
            key={p.id}
            title={p.title}
            body={p.body}
            user={p.userId}
            onClick={() => onSelectPost(p.id)}
          />
        ))
      ) : (
        <div className="animate-pulse text-gray-400">loading...</div>
      )}
    </section>
  );
};

export default Posts;
