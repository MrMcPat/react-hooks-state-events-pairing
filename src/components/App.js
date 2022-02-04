import React, { useState } from "react";
import Details from "./Details";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import video from "../data/video.js";

function App() {
  const [vidComments, setVidComments] = useState(video.comments);
  const [hideComments, setHideComments] = useState(false);
  const [search, setSearch] = useState("");

  function hideCommentHandler() {
    setHideComments((hideComments) => !hideComments);
  }

  const toggleHide = hideComments ? "hide-comments" : "";

  function handleCommentSubmit(newComment) {
    setVidComments([...vidComments, newComment]);
  }

  function handleDelete(deletedComment) {
    setVidComments(
      vidComments.filter((comment) => {
        return comment.comment !== deletedComment;
      })
    );
  }

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  const searchComments = vidComments.filter((comment) => {
    return comment.user.toLowerCase().includes(search.toLowerCase());
  });

  console.log(searchComments);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <button className="hide-button" onClick={hideCommentHandler}>
        {hideComments ? "Show" : "Hide"} Comments
      </button>
      <br />
      <input
        type="text"
        name="text"
        placeholder="Search user"
        onChange={searchHandler}
      />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      <hr />
      <div className={toggleHide}>
        <h2> Comments</h2>
        {searchComments.map((comment) => {
          return (
            <CommentList
              key={comment.id}
              user={comment.user}
              comment={comment.comment}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
