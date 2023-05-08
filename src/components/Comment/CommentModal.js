import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import AddCommentForm from './AddCommentForm';

const CommentModal = ({article}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isLoggedIn = localStorage.getItem('jwtToken') !== null;

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Добавить комментарий
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{article.body}</p>
                    {isLoggedIn ? (
                        <AddCommentForm articleId={article.id}/>
                    ) : (
                        <p>
                            Чтобы добавить комментарий, пожалуйста, <a href="/login">войдите</a> или{' '}
                            <a href="/register">зарегистрируйтесь</a>.
                        </p>
                    )}
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Закрыть*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
};

export default CommentModal;
