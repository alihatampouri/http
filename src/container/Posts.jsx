import Post from "../components/Post";

const Posts = ({ posts, onSelectPost }) => {
  return (
    <section className="grid md:grid-cols-3 gap-4 my-4">
      {posts ? (
        posts.map((p) => (
          <Post
            key={p.id}
            title={p.title}
            body={p.content}
            user={p.fullname}
            date={p.created_at}
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
