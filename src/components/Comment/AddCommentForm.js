import React, {useState} from 'react';
import {addComment} from "../API";
import {getToken} from "../../AuthContext";

const AddCommentForm = ({articleId, handleCommentAdd}) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(articleId)
        addComment(articleId, content, getToken()).then(newComment =>
            handleCommentAdd(newComment)
        )
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating" style={{}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                          style={{
                              minHeight: "100px"
                          }}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}></textarea>
                <label htmlFor="floatingTextarea">Comment</label>
                <button className="btn btn-primary" type="submit" style={{marginTop: '10px'}}>Submit</button>
            </div>
        </form>
    );
};

export default AddCommentForm;
