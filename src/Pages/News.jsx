import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsCard from '../Components/NewsCard'
import NewsData from '../Data/NewsData.json'
import Newsletter2 from './../assets/Pdfs/2nd newsletter.pdf'
import Footer from '../Components/Footer'

export default function News() {
  return (
    <>
      <Container>

        <Row>
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
                
        </Row>
        <Row>
          <div className="Newsletter">
            <h2 className='heading'>Newsletter</h2>
            <Row>
              <Col xs={5}  md={6}  lg={4} className='mt-3 mb-3 d-flex flex-column'>
                <span>1st Newsletter</span>
                <a href={Newsletter2} target="_blank" rel="noopener noreferrer" className='justify-content-center'>
                  <button className="btn btn-primary">click to open</button>
                </a>
              </Col>
              <Col xs={5}  md={6}  lg={4} className='mt-3 mb-3 d-flex flex-column'>
                <span>2nd Newsletter</span>
                <a href={Newsletter2} target="_blank" rel="noopener noreferrer" className='justify-content-center'>
                  <button className="btn btn-primary">Click to open</button>
                </a>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>

      <Footer/>
    </>
  )
}
