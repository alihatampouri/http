import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ViewPost = ({ postId, onDelete }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null);
    axios
      .get(`/posts/${postId}/`)
      .then((respone) => setPost(respone.data))
      .catch((error) => console.log(error));
  }, [postId]);

  const onDeleteHandler = () => {
    MySwal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "Are you sure you want to delete this post?",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(post.id);
      }
    });
  };

  return (
    <section className="border border-sky-600 rounded-md p-4">
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
