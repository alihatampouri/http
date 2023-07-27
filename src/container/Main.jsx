import { useEffect, useState } from "react";
import Posts from "./Posts";
import ViewPost from "./ViewPost";
import AddPost from "./AddPost";
import axios from "axios";

const Main = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => getPosts(), []);

  const getPosts = () => {
    axios
      .get("http://localhost/api/posts/")
      .then((respone) => setPosts(respone.data))
      .catch((error) => console.log(error));
  };

  const deletePostHandler = (id) => {
    axios
      .delete(`http://localhost/api/posts/${id}/`)
      .then((response) => {
          getPosts();
          setSelectedPost(null);
          alert("Post Deleted.");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto px-10 py-4">
      <AddPost onAdd={getPosts} />
      <Posts posts={posts} onSelectPost={(id) => setSelectedPost(id)} />
      {selectedPost ? (
        <ViewPost postId={selectedPost} onDelete={deletePostHandler} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
