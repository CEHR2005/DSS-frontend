import {Container, Row} from 'react-bootstrap';
import './HomePage.css';
import ArticleList from "./Article/ArticleList";

const HomePage = () => {
    return (
        <Container>
            <Row className="mt-4">
                <ArticleList/>
            </Row>
        </Container>
    );
};

export default HomePage;
