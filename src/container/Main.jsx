import { useState } from "react";
import Posts from "./Posts";
import ViewPost from "./ViewPost";

const Main = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const selectPostHandler = (id) => {
    setSelectedPost(id);
  };

  return (
    <div className="container mx-auto px-10">
      <Posts onSelectPost={selectPostHandler} />
      {selectedPost ? <ViewPost postId={selectedPost} /> : ""}
    </div>
  );
};

export default Main;
