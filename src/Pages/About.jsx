import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// images importing
import members from '../assets/members.png'
import chair from '../assets/chair.jpg'
// footer 
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
     <Container className='mt-4'>
        <Row className='about'>
          <Col md={12} lg={6}>
            <h2 className='heading underlined'>About us</h2>
            <p className='text-justify'>The University of Dar Es Salaam Research Chair on Forced Displacement (UDSM-RCFD) was established in July 2022, commencing its operations in December of the same year. This initiative is part of a five-year project funded by the International Development Research Centre of Canada (IDRC) entitled <span>Strengthening knowledge, evidence use and leadership in the global south on forced displacement</span> Housed within the Department of Geography, RCFD comprises 32 dedicated members drawn from diverse academic disciplines, including Geography, Law, Development Studies, Sociology, Political Sciences, Business, Food Science, and Agriculture across East Africa. Our multidisciplinary team is committed to addressing the complex challenges of forced displacement and related issues through rigorous research, evidence-based policymaking, and leadership development. At UDSM-RCFD, we strive to generate knowledge, promote evidence-based solutions, and foster collaboration to support displaced populations and contribute to sustainable development in the region. </p>
          </Col>
          <Col md={12} lg={6}>
            <figure className='mt-4'>
              <img src={members} alt="members" width="100%" />
              <figcaption>A picture of some of the core members of UDSM’s Research Chair on Forced Displacement</figcaption>
            </figure>
          </Col>
        </Row>
        <Row>
          <h2 className='underlined text-left fs-3 mt-4 mb-4' 
          style={{color: '#1D67AF'}}>Objectives</h2>
          <Col lg={12} md={12}>
            <h3 className='heading-sm'>Main Objectives</h3>
            <p className='text-justify'>The main objective of the Research Chair on Forced Displacement is “To support timely, innovative research in forced displacement settings in East Africa, by bringing local knowledge and practice to influence policy processes at national, regional, and global levels through promoting policy dialogues and public debates on forced displacement that amplify Southern voices of the forcibly displaced communities.”</p>
          </Col>
          <Col lg={12} md={12}>
            <h3 className='heading-sm'>Specific Objectives</h3>
            <ul>
            <li>Generate context-informed and multidisciplinary knowledge on forced displacement that is led by researchers in the region and guided by the priorities of displaced populations, with a focus on livelihood security, social and legal protection for conflict-displaced refugees and those internally displaced by climate, conservation, or large-scale development events.</li>
            <li>Inform policy-making processes on forced displacement at national and regional levels through policy outreach and strategic collaboration with civil society organizations.</li>
            <li>Enhance policy debates on forced displacement globally and increase the intellectual presence of the region in these global debates, through concerted activities at the University of Dar es Salaam (UDSM) and engagement with IDRC funded chairs in other regions.</li>
            <li>Institutionalize the study of displacement at UDSM through increased cross-faculty collaboration, mentoring of early career scholars, and development of a Masters-level curriculum in the Department of Geography on forced displacement.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <h2 className='underlined text-left fs-3 mt-4 mb-4' 
          style={{color: '#1D67AF'}}>Remarks from chair</h2>
          <div className="wrapper"></div>
          <Col lg={6} md={12}>
            <p className='text-justify'>At the UDSM-Research Chair on Forced Displacement, we're not just conducting research; we're pioneering a new approach. Our mission is to break free from conventional thinking, champion equality, and actively engage with the communities most affected by displacement.
            
            
             Operating in the heart of Eastern Africa, where conflicts, climate issues, and development changes are reshaping lives, we started our programs from July 2022 to June 2023. Thanks to the invaluable support of IDRC Canada, the IDRC regional office in Kenya, and the University of Dar Es Salaam, we turned our dreams into tangible actions.
            

            Our team comprises 32 passionate individuals from five East African countries, united in our commitment to finding impactful solutions. We firmly believe that the voices of those directly impacted by displacement should guide our efforts.

            As we enter our second year, we're excited to share our progress with you. Through fieldwork and research, we're delving into nine projects, uncovering insights that resonate globally. From the Global Refugee Forum in Geneva to local community dialogues, our work is making waves.</p>
          </Col>
          <Col lg={6} md={12}>
            <figure>
              <img src={chair} alt="chair"  width="100%"/>
              <h6 class="card-title text-center text-primary fs-4"> <span>Prof. </span>Opportuna Kweka</h6>
              <figcaption className='fs-5'>Chair</figcaption>
            </figure>
          </Col>  
        </Row>
      </Container>

      <Footer/>
    </>
  )
}
