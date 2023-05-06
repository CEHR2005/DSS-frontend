import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './ArticleForm.css';
import {addArticle} from "./api";
import {getToken} from "../AuthContext";

function ArticleForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let content_send = {
            Title: title,
            Body: content,
            Image: image
        }
        addArticle(content_send, getToken()).then(r => {
            console.log(r)
        })
        setTitle('');
        setContent('');
        setImage('');
        handleClose();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Create Article</Button>
                </Modal.Footer>
            </Modal>
            <Button variant="primary" onClick={handleShow}>Add Article</Button>

        </>
    );
}

export default ArticleForm;
