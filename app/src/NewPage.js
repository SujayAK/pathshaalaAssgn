const NewPage = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          placeholder="Enter your ideas"
          required
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        ></input>
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          placeholder="Text"
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>

        <button className="button"type="submit">Submit Post</button>
      </form>
    </main>
  );
};

export default NewPage;
