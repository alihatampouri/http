import { useState } from "react";
import Posts from "./Posts";
import ViewPost from "./ViewPost";
import AddPost from "./AddPost";

const Main = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const selectPostHandler = (id) => {
    setSelectedPost(id);
  };

  return (
    <div className="container mx-auto px-10 py-4">
      <AddPost />
      <Posts onSelectPost={selectPostHandler} />
      {selectedPost ? <ViewPost postId={selectedPost} /> : ""}
    </div>
  );
};

export default Main;
