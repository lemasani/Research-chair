import React from 'react'
import Carousel from '../Components/Carousel'
import {  Col, Container, Row } from 'react-bootstrap'
import NewsCard from '../Components/NewsCard'
import NewsData from '../Data/NewsData.json'
import ProgramCardRendered from '../Components/ProgramCardRendered'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Carousel/>
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

        <Row className='mt-4'>
            <h2 className='heading'>Programs under the Reseach chair of forced displacement</h2>
          <ProgramCardRendered/>
        </Row>

       
    </Container>
    <Footer/>
    </>
  )
}
