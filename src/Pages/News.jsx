import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsCard from '../Components/NewsCard'
import NewsData from '../Data/NewsData.json'

export default function News() {
  return (
    <>
        <Row>
            <Col>
                <Container>
                <div>
                  <h2 className='fs-2 text-center heading'>News</h2>
                    <div className="news-contanier">
                      {NewsData.map((item, index) => (
                        <NewsCard key={index}
                        id={item.id}
                        news={item.news}
                        date={item.date}
                        place={item.place} />
                      ))}
                    </div>
                </div>
                </Container>
            </Col>
        </Row>
    </>
  )
}
