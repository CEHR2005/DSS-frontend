import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7184', // замените на ваш базовый URL
});
export const register = async (username, password) => {
    try {
        const response = await api.post('/api/Auth/register', {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
export const getArticles = async (page, limit) => {
    try {
        const response = await api.get('/api/Articles', {
            params: { page, limit },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting articles:', error);
        throw error;
    }
};

export const getComments = async (articleId) => {
    try {
        const response = await api.get(`/api/Articles/${articleId}/Comments`);
        return response.data;
    } catch (error) {
        console.error('Error getting comments:', error);
        throw error;
    }
};

export const addComment = async (articleId, content, token) => {
    try {
        const response = await api.post(
            `/api/articles/${articleId}/Comments`,
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
        const response = await api.post(
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
        await api.delete(`/api/articles/${articleId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
};
