import { Col, Container, Row } from 'react-bootstrap';
import newsData from './../Data/NewsData.json'
import { useParams } from 'react-router-dom';

export default function NewsDetail() {
  const { id } = useParams();

  // Find the news item using the id
  const newsItem = newsData.find(item => item.id === parseInt(id));
  if (!newsItem) {
    return <div>News item not found</div>; // or some other fallback UI
  }

  return (
    <>
        <Container>
        <div className='mt-4'>
                <h2 className='underlined fs-4'>{newsItem.news}</h2>
                <span className='fst-italic'>{newsItem.date} - {newsItem.place}</span>
                <Row>
                  <Col xs={12} md={12} lg={6}>
                    <p>{newsItem.content}</p>

                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <img src={newsItem.image} alt="News Image" />

                  </Col>
                </Row>

        </div>
        </Container>
    </>
  );
}