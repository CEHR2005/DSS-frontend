import React from 'react';
import {Row} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import {getToken} from "../AuthContext";
import {deleteComment} from "./api";
import { IoTrashBinOutline } from "react-icons/io5";
const Comment = ({ comment, handleArticleDelete}) => {
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
        <Row className="comment">
            <h5>{comment.User}</h5>
            <p>{comment.text}</p>
            {isAuthor && (
                <IoTrashBinOutline  onClick={handleDeleteWithConfirmation} />
            )}
        </Row>
    );
};

export default Comment;
