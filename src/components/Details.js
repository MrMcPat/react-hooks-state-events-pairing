import React, { useState } from "react";

function Details({ title, views, createdAt, upvotes, downvotes }) {
  const [likeCount, setLikeCount] = useState(upvotes);
  const [dislikeCount, setDislikeCount] = useState(downvotes);

  function likeHandler() {
    setLikeCount(likeCount + 1);
  }

  function dislikeHandler() {
    setDislikeCount(dislikeCount + 1);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <button onClick={likeHandler}>{likeCount} 👍</button>
      <button onClick={dislikeHandler}>{dislikeCount} 👎</button>
    </div>
  );
}

export default Details;
