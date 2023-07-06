import { Link, useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";

const EditPost = ({
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);    

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Title:</label>
            <input
              id="EditTitle"
              placeholder="Edit your ideas"
              required
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            ></input>
            <label htmlFor="EditBody">Post:</label>
            <textarea
              id="EditBody"
              type="text"
              value={editBody}
              required
              
              placeholder="Text"
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>

            <button type="submit" onClick={() => handleEdit(post.id)}>
              Post
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2 class="text-4xl font-extrabold dark:text-white">Post not found </h2>
          <p>Well..No Worries</p>
          <Link to="/">Visit our Homepage to create a new one!!</Link>
        </>
      )}
    </main>
  );
};

export default EditPost;
