import axios from 'axios';

const API = axios.create({
    baseURL: 'https://localhost:7184', // замените на ваш базовый URL
});
export const register = async (username, password, ConfirmPassword) => {
    try {
        const response = await API.post('/api/Auth/register', {
            username,
            password,
            ConfirmPassword,
        });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
export const getArticles = async () => {
    try {
        const response = await API.get('/api/Articles', {});
        return response.data;
    } catch (error) {
        console.error('Error getting articles:', error);
        throw error;
    }
};
export const getUsers = async () => {
    try {
        const response = await API.get('/api/Users', {});
        return response.data;
    } catch (error) {
        console.error('Error getting articles:', error);
        throw error;
    }
};
export const getComments = async (articleId) => {
    try {
        const response = await API.get(`/api/Articles/${articleId}/Comments`);
        return response.data;
    } catch (error) {
        console.error('Error getting comments:', error);
        throw error;
    }
};

export const addComment = async (articleId, content, token) => {
    try {
        const response = await API.post(
            `/api/Articles/${articleId}/Comments`,
            {
                Text: content
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};

export const addArticle = async (content, token) => {
    try {
        console.log(content)
        const response = await API.post(
            `/api/Articles/`,
            {
                Title: content.Title,
                ImageUrl: content.Image,
                Body: content.Body
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};

export const deleteArticle = async (articleId, token) => {
    try {
        await API.delete(`/api/articles/${articleId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
};
export const deleteComment = async (commentId, token) => {
    try {
        await API.delete(`/api/Comments/${commentId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
};