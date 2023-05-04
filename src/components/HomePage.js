import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  const exampleArticles = [
    {
      id: 1,
      title: 'Заголовок статьи 1',
      imageUrl: 'https://via.placeholder.com/150',
      commentCount: 5
    },
    {
      id: 2,
      title: 'Заголовок статьи 2',
      imageUrl: 'https://via.placeholder.com/150',
      commentCount: 3
    },
    {
      id: 3,
      title: 'Заголовок статьи 3',
      imageUrl: 'https://via.placeholder.com/150',
      commentCount: 8
    },
  ];

  return (
    <Container>
      <Row className="mt-4">
        {exampleArticles.map(article => (
          <Col md={4} key={article.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={article.imageUrl} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  Комментариев: {article.commentCount}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
