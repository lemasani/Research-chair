import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DialogueImg1 from './../../assets/members.png'
import Footer from '../../Components/Footer'

export default function FirstDialogue() {
  return (
    <>
        <Container>
            <h2 className='heading underlined'>First National Policy Dialogue</h2>
            <Row>
                <Col  xs={12} md={6}  lg={6}>
                    <p>
                    The first policy dialogues was held in June 2023. The dialogues outline among many issues such as history of refugees, changes in the policy, securitization of migration and the need to revise the refugee policy in Tanzania to make it more inclusive.  
                    </p>
                </Col>

                <Col xs={12} md={6} lg={6}>
                    <figure>
                        <img src={DialogueImg1} alt="1st  dialogue" width= "100%"/>
                        <figcaption>First Policy Dialogue</figcaption>

                    </figure>
                </Col>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}
