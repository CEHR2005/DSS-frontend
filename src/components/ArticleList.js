import React from 'react';
import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
  return (
    <div className="ArticleList">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
