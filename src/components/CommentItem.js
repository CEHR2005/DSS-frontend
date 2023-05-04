import React from 'react';

function CommentItem({ comment }) {
  return (
    <div className="CommentItem">
      <p>{comment.author}: {comment.text}</p>
    </div>
  );
}

export default CommentItem;
