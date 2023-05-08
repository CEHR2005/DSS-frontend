import {Card, Col} from "react-bootstrap";
import {IoChatboxOutline} from "react-icons/io5";
import ArticleModal from "./ArticleModal";

function ArticleItem({ article, setArticles, handleArticleDelete }) {
  return (
      <Col md={4} key={article.id}>
          <Card className="mb-4 Card">
              <Card.Img variant="top" src={article.imageUrl}   onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src="";
              }}/>
              <Card.Body>
                  <Card.Title style={{ textAlign: 'center' }}>{article.title}</Card.Title>
                  <Card.Text><IoChatboxOutline /> {article.comments.$values.length}</Card.Text>
              </Card.Body>
              <ArticleModal article={article}  setArticle={setArticles} handleArticleDelete={handleArticleDelete} />
          </Card>
      </Col>
  );
}

export default ArticleItem;
