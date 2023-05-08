import React, {useState} from 'react';
import Comment from "./CommentItem";
import AddCommentForm from "./AddCommentForm";
import {Row} from "react-bootstrap";

const CommentList = ({article, commentCountIncrease, commentCountDecrees, users}) => {
    const [comments, setComments] = useState(article.comments.$values);

    const handleCommentDelete = (id) => {
        const filteredItems = comments.filter((item) => item.id !== id);
        setComments(filteredItems);
        commentCountDecrees()
    };
    const handleCommentAdd = (comment) => {
        console.log(comment)
        setComments([...comments, comment]);
        commentCountIncrease()
    };
    return (<Row>
            <AddCommentForm articleId={article.id} handleCommentAdd={handleCommentAdd}/>
            {comments.map((comment) => (
                <Comment comment={comment} handleArticleDelete={handleCommentDelete} users={users}/>
            ))}
        </Row>
    );
};

export default CommentList;
