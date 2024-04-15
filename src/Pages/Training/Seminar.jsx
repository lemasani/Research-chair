import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../../Components/Footer'

export default function Seminar() {
  return (
    <>
        <Container>
          <Row>
            <h2 className='underlined heading'>Seminar</h2>

            <p>
            Welcome to the Forced Displacement Studies (FDS) seminar series. Here , we're committed to fostering knowledge exchange on this critical issue. Our monthly seminars provide a platform for members and scholars to share their expertise and engage in discussions about forced displacement.
            </p>

            <br />
            
            <p>Throughout the year, we host a range of seminars featuring presentations by leading researchers, practitioners, and policymakers. Past seminars (2022-2023) covered diverse topics such as research methodologies, data analysis, policy and advocacy, the impact of forced displacement, and even scholarly development.</p>
          </Row>


          <Row>
            <h5>Upcoming Seminars in 2024</h5> 
            <p>We're excited to announce our upcoming seminar schedule for 2024! Here's a glimpse of some of the thought-provoking presentations you can expect:</p>

            <ul>
              <li>Climate Change Policies and Displacement Nexus (January 9th)</li>
              <li>The East African Community's Approach to Forced Displacement (February 13th)</li>
              <li>Social and Legal Rights of Refugees (March 12th & April 9th)</li>
              <li>The Impact of Forced Displacement on Children (May 14th)</li>
              <li>Inclusion of Refugees in Development Plans (August 13th)</li>
              <li>Acculturation and Social Network Analysis (October 8th & November 12th)</li>
              <li>Analysis of Planned Relocation Policies (December 10th)</li>
                
            </ul>
          </Row>

          <Row>
            <h5>Workshops</h5>
            <p> we're also offering a series of workshops designed to equip you with valuable skills. These workshops will cover proposal presentation, data analysis, and writing. Stay tuned for further details
            
            </p>

            <br />

            <p>We invite you to join us for these informative and engaging sessions.  Check back frequently for updates on upcoming seminars and workshops!</p>
          </Row>
        </Container>

        <Footer/>

    </>
  )
}
