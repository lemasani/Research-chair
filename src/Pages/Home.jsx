import React from 'react'
import Carousel from '../Components/Carousel'
import { Card, Col, Container, Row } from 'react-bootstrap'
import NewsCardRendered from '../Components/NewCardRendered'
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
          <NewsCardRendered/>
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
