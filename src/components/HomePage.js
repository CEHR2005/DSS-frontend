import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { getArticles } from './api';
import CommentModal from "./CommentModal";
import ArticleForm from "./ArticleForm";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        let data = await getArticles(1, 3); // получаем первые 3 статьи (пример пагинации)
        data = data.$values
        let allData = await getArticles(); // получаем все статьи
        allData = allData.$values
        setAllArticles(allData);
        console.log(data)
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  return (
      <Container>
        <ArticleForm/>

        <Row className="mt-4">
          {articles.map((article) => (
              <Col md={4} key={article.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={article.imageUrl} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>Комментариев: {article.commentCount}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {allArticles.map((article) => (
                  <ListGroupItem key={article.id}>
                    <h4>{article.title}</h4>
                    <p>Комментариев: {article.commentCount}</p>
                    <CommentModal article={article} />

                  </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
  );
};

export default HomePage;
