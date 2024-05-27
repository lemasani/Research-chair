import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Kigogo1 from '../../assets/kigogo1.png'
import Kigogo2 from '../../assets/kigogo2.png'
import Footer from '../../Components/Footer'


export default function AboutResearch() {
  return (
    <>
     <Container>
      <h2 className='heading underlined'>About Research</h2>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <p>There is an increasingly number of refugees and internally displaced persons (IDPs).
            Most of the refugees are protracted in camps or in host communities with inadequate
            support and less option for resettlement. The increase in the number of IDPs is also
            from climate change, disaster, conservation and development in addition to those in
            conflict countries. While IDPs are not known and  have received less
            or little in the policy realm, hence lack representation. The two types of displacement
            share vulnerability, loss of livelihood, and may have been adapting in different or same
            way. 
            </p>

            <p>This proposed research takes a holistic approach to addressing issues of displacement from conflicts, climate, development investments and trafficking. Both the refugees and the displaced persons from other forces have similar experience of
            loss of livelihood, may be facing a lack of or inadequate access to social and legal
            protection, and economic exclusion in their areas of new settlements and for some of
            them, different adaptation strategies may have led to resilience.</p>

            <p>The rationale of the proposed research rests on the fact that there are many protracted
            refugees and increasing number of internally displaced persons in the region, with little
            on no prospects for the durable solutions. While the durable solutions seem to be not
            applicable in some cases. This study aims at broadening our understanding of the
            displaced in terms of their livelihood, social and legal protection needs, and more
            importantly how they themselves become the agents of their own change. The
            broadening of the concept of forced displaced to include all forms will allow researchers
            to focus on exploring adaptation strategies that can lead to resilience.</p>
        </Col>
        <Row>
        <Col xs={12} md={12} lg={6}>
          <figure>
            <img src={Kigogo1} alt="focus kigogo" width="100%" />
          </figure>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <figure>
            <img src={Kigogo2} alt="focus kigogo" width="100%" />
          </figure>

        </Col>
        <figcaption>Focus group at kigogo</figcaption>
        </Row>
      </Row>
     </Container>

     <Footer/>
    </>
  )
}
