import { useState } from "react";
import Posts from "./Posts";
import ViewPost from "./ViewPost";
import AddPost from "./AddPost";
import axios from "axios";

const Main = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const selectPostHandler = (id) => {
    setSelectedPost(id);
  };

  const deletePostHandler = (id) => {
    axios
      .delete(`http://localhost/api/posts/${id}/`)
      .then((response) => alert("Post Deleted."))
      .catch((error) => console.log(error));
    setSelectedPost(null);
  };

  return (
    <div className="container mx-auto px-10 py-4">
      <AddPost />
      <Posts onSelectPost={selectPostHandler} />
      {selectedPost ? (
        <ViewPost postId={selectedPost} onDelete={deletePostHandler} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
