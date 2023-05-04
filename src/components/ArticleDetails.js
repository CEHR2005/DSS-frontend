import React from 'react';
import CommentList from './CommentList';

function ArticleDetails({ article, comments }) {
  return (
    <div className="ArticleDetails">
      <h1>{article.title}</h1>
      <img src={article.image_url} alt={article.title} />
      <p>{article.body}</p>
      <CommentList comments={comments} />
    </div>
  );
}

export default ArticleDetails;
