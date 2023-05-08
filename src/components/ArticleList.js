import React, {useEffect, useState} from 'react';
import {Card, Col} from "react-bootstrap";
import {getArticles} from "./api";
import ArticleForm from "./ArticleForm";
import ArticleItem from "./ArticleItem";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchArticles = async () => {
    try {
      setLoading(true);
      let data = await getArticles(1, 3); // получаем первые 3 статьи (пример пагинации)
      data = data.$values
      console.log(data)
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
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
  <Col md={4} >
    <Card className="mb-4 Card">
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/421/494/original/upload-icon-vector-illustration.jpg"  />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>New post!</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ArticleForm handleAdd={handleAdd}/>
    </Card>
  </Col>
  {articles.map((article) => (
      <ArticleItem article={article} setArticles={setArticles} handleArticleDelete={handleArticleDelete}/>
  ))}

</>
  );
}

export default ArticleList;
