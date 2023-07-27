import axios from "axios";
import { useState } from "react";

const AddPost = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  const formInit = {
    title: "",
    content: "",
  };

  const [form, setForm] = useState(formInit);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/api/posts/", form)
      .then((response) => {
        if (response.data.success) {
          setShowAddPost(false);
          setForm(formInit);
          alert("Post Added.");
        } else {
          alert(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!showAddPost) {
    return (
      <button
        className="bg-sky-400/10 text-sky-600 hover:bg-sky-400/20 rounded-md px-4 py-1 transition-all"
        onClick={() => setShowAddPost(true)}
      >
        Add Post
      </button>
    );
  }

  return (
    <section className="border rounded-md p-4">
      <form action="post" className="flex gap-4" onSubmit={submitHandler}>
        <div className="w-10/12">
          <input
            name="title"
            type="text"
            placeholder="title"
            className="border rounded px-2 py-1 mb-2 w-full outline-none"
            onChange={changeHandler}
          />
          <textarea
            name="content"
            className="border rounded px-2 py-1 w-full outline-none"
            placeholder="content"
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className="w-2/12">
          <button
            className="bg-green-400/10 hover:bg-green-400/20 text-green-600 rounded-md px-2 py-1 mb-2 w-full transition-all"
            type="submit"
          >
            Add Post
          </button>
          <button
            className="bg-slate-400/10 hover:bg-slate-400/20 text-slate-600 rounded-md px-2 py-1 mb-2 w-full transition-all"
            type="reset"
          >
            Reset
          </button>
          <button
            className="bg-red-400/10 hover:bg-red-400/20 text-red-600 rounded-md px-2 py-1 w-full transition-all"
            type="button"
            onClick={() => setShowAddPost(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPost;
