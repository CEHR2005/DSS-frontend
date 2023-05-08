import {Button, Card, Col, Container, Modal} from "react-bootstrap";
import {IoChatboxOutline, IoTrashBinOutline} from "react-icons/io5";
import CommentList from "../Comment/CommentList";
import {useState} from "react";
import {getToken} from "../../AuthContext";
import jwt_decode from "jwt-decode";
import {deleteArticle} from "../API";

function ArticleItem({article, handleArticleDelete, users}) {
    const [show, setShow] = useState(false);
    const [commentCount, setCommentCount] = useState(article.comments.$values.length);
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
    const commentCountIncrease = () => {
        setCommentCount(commentCount + 1)
    }
    const commentCountDecrees = () => {
        setCommentCount(commentCount - 1)
    }
    return (
        <>
            <Col md={4} key={article.id}>
                <Card className="mb-4 Card" onClick={handleShow}>
                    <Card.Img variant="top" src={article.imageUrl} onError={({currentTarget}) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "";
                    }}/>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}>{article.title}</Card.Title>
                        <Card.Text>{article.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <IoChatboxOutline/> {commentCount}
                    </Card.Footer>
                </Card>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{article.body}</Modal.Body>
                <Modal.Footer>
                    <Container>
                        <CommentList article={article} commentCountIncrease={commentCountIncrease}
                                     commentCountDecrees={commentCountDecrees} users={users}/>
                        {isAuthor && (
                            <Button variant="danger" onClick={handleDelete}>
                                <IoTrashBinOutline/> Удалить статью
                            </Button>
                        )}
                    </Container>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ArticleItem;
