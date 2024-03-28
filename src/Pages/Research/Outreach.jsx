import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Outreach1 from './../../assets/outreach1.png'
import Outreach2 from './../../assets/outreach2.png'
import Footer from '../../Components/Footer'

export default function Outreach() {
  return (
    <>
      <Container>
        <h2 className='heading underlined'>Outreach</h2>

        <Row>
          <Col  xs={12} md={12}  lg={12}>
            <p>
            In addition the research the Research Chair conducts outreach, In the year 2022-
            2023 , the outreach were conducted in the rural with the refugees and the host
            communities; in the urban with the refugees and the host communities on social cohesion;
            in Kiteto with Maasai nomadic pastoralists on land use rights.
            </p>
          </Col>

          <Col xs={12} md={12} lg={12}>
            <Row>
            <Col xs={12} md={12} lg={12}>
                <figure>
                  <img src={Outreach1} alt="outreach at kigogo" width="100%"/>
                  <figcaption>Outreach at kigogo</figcaption>
                </figure>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <figure>
                  <img src={Outreach2} alt="outreach kigoma"  width="100%" />
                  <figcaption>Outreach at kigoma</figcaption>
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer/>
    </>
  )
}
