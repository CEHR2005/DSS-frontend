import React from 'react';
import { Link } from 'react-router-dom';

function ArticleItem({ article }) {
  return (
    <div className="ArticleItem">
      <h2>
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h2>
      <img src={article.image_url} alt={article.title} />
      <p>Комментариев: {article.comment_count}</p>
    </div>
  );
}

export default ArticleItem;
