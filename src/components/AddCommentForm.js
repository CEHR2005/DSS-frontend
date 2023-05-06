import React, { useState } from 'react';
import {addComment} from "./api";
import {getToken} from "../AuthContext";

const AddCommentForm = ({ articleId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(articleId)
        addComment(articleId, content, getToken())
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}></textarea>
                <label htmlFor="floatingTextarea">Comment</label>
                <button className="btn btn-primary" type="submit" style={{ marginTop: '10px' }}>Submit</button>
            </div>
        </form>
    );
};

export default AddCommentForm;
