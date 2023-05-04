import React, { useState } from 'react';

function AddCommentForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Comment:</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddCommentForm;
