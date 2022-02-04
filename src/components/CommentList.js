import React, { useState } from "react";

function CommentList({ user, comment, onDelete }) {
  function handleClick() {
    onDelete(comment);
  }

  return (
    <div>
      <strong>{user}</strong>
      <p>{comment}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default CommentList;
