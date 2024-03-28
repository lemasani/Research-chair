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
          <p>The UDSM-RCFD Research Chair aims at conducting a demand drive, action oriented, gender transformative research which has impact on policy in four areas of displacement in East Africa base on the causes. These are</p>
          <ul className='text-justify'>
            <li>
            Refugees and internally displaced person (IDPS) from conflicts;
            </li>
            <li>Climate-disaster induced displaced (drought and floods);</li>
            <li>Relocated or resettled population with little or unfair compensation to let for conservation or a development project;</li>
            <li>Victims of trafficking and smuggling and other related population such as asylum seekers; mixed migrants and indigenous population and
            The policy researches</li>
            <li>Global policies and practices research</li>
            <li>ollaboration with other Chairs funded by the IDRC in order to bring a global south voice into the displacement fora.</li>
          </ul>
          <p>
          Between July-December 2023 members conducted fieldwork and results were communicated in a symposium with government and non-governmental organization working on forced displacement in the country. The title of the research is “Inclusive Policies: Resilient Livelihood, Socio-Ecological and Legal Protection of the Displaced were conducted with Congolese and Burundians in Kigoma and urban Dar es Salaam, relocated Maasai pastoralists in Tanga and victims of floods in Dar es Salam and Sukuma nomadic pastoralists migrants in Kigoma due to droughts.
          </p>
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
