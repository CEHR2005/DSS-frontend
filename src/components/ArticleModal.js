import {Modal, Button, Container} from 'react-bootstrap';
import {useState} from "react";
import {getToken} from "../AuthContext";
import jwt_decode from "jwt-decode";
import {deleteArticle} from "./api";
import {IoTrashBinOutline} from "react-icons/io5";
import CommentList from "./CommentList";

const ArticleModal = ({ article, handleArticleDelete}) => {
    const [show, setShow] = useState(false);
    const token = getToken();
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    let isAuthor = String(userId) === String(article.userId);
    const handleDelete = async () => {
        try {
            if (window.confirm('Вы уверены, что хотите удалить это сообщение?')) {
                await deleteArticle(article.id, token);
                handleArticleDelete(article.id)
            }

        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{article.body}</Modal.Body>
                <Modal.Footer>
                    <Container>

                        <CommentList article={article} />
                        {isAuthor && (
                            <Button variant="danger" onClick={handleDelete}>
                                <IoTrashBinOutline /> Удалить статью
                            </Button>
                        )}
                    </Container>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ArticleModal;
