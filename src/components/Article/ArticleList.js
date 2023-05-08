import React, {useEffect, useState} from 'react';
import {Col} from "react-bootstrap";
import {getArticles, getUsers} from "../API";
import ArticleForm from "./ArticleForm";
import ArticleItem from "./ArticleItem";

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState({});
    const fetchArticles = async () => {
        try {
            setLoading(true);
            let articles_data = await getArticles();
            articles_data = articles_data.$values
            console.log(articles_data)
            setArticles(articles_data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };
    const fetchUsers = async () => {
        try {
            setLoading(true);
            let users_data = await getUsers();
            const output = {};

            users_data["$values"].forEach(item => {
                output[item.id] = item.username;
            });
            setUsers(output);
            console.log(output)
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    useEffect(() => {
        fetchArticles();
        fetchUsers()
    }, []);

    const handleArticleDelete = (id) => {
        const filteredItems = articles.filter((item) => item.id !== id);
        setArticles(filteredItems);
    };
    const handleAdd = () => {
        fetchArticles()
    }
    if (loading) {
        return <div>Loading articles...</div>;
    }
    return (
        <>
            <Col md={4}>
                <ArticleForm handleAdd={handleAdd}/>
            </Col>
            {articles.map((article) => (
                <ArticleItem article={article} setArticles={setArticles} handleArticleDelete={handleArticleDelete}
                             users={users} key={article.id}/>
            ))}

        </>
    );
}

export default ArticleList;
