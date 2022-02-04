import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CommentForm({ onCommentSubmit }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    onCommentSubmit({
      id: uuid(),
      user,
      comment,
    });
    setUser("");
    setComment("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="user"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
