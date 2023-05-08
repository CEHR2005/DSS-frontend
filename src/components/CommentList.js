import React, {useState} from 'react';
import Comment from "./CommentItem";
import AddCommentForm from "./AddCommentForm";
import {Row} from "react-bootstrap";

const CommentList = ({ article }) => {
    const [comments, setComments] = useState(article.comments.$values);

    const handleCommentDelete = (id) => {
        const filteredItems = comments.filter((item) => item.id !== id);
        setComments(filteredItems);
    };
    const handleCommentAdd = (comment) => {
        console.log(comment)
        setComments([...comments, comment]);
    };
  return (<Row>
          <AddCommentForm articleId={article.id} handleCommentAdd={handleCommentAdd}/>
      {comments.map((comment) => (
              <Comment comment={comment} handleArticleDelete={handleCommentDelete}/>
          ))}
      </Row>
  );
};

export default CommentList;
