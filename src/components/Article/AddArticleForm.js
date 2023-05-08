import React, {useState} from 'react';

function AddArticleForm({onSubmit}) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({title, imageUrl, body});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="imageUrl">Image URL:</label>
            <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <label htmlFor="body">Body:</label>
            <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Add Article</button>
        </form>
    )
}

export default AddArticleForm