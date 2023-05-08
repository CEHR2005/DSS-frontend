import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import {getToken} from "../../AuthContext";
import {deleteComment} from "../API";

const Comment = ({comment, handleArticleDelete, users}) => {
    const handleDeleteWithConfirmation = async () => {
        try {
            if (window.confirm('Вы уверены, что хотите удалить это сообщение?')) {
                await deleteComment(comment.id, token);
                handleArticleDelete(comment.id)
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
        }

    };
    const token = getToken()
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    let isAuthor = String(userId) === String(comment.userId);

    return (
        <Row className="comment" key={comment.id}>
            <Col xs={12} md={8}>
                <h5>{users[`${comment.userId}`]}</h5>
                <p>{comment.text}</p>
            </Col>
            <Col xs={6} md={4}>
                {isAuthor && (
                    <Button variant={"danger"} onClick={handleDeleteWithConfirmation} size={"sm"}>Delete
                        comment</Button>
                )}
            </Col>


        </Row>
    );
};

export default Comment;
