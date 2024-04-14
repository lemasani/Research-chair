import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Components/Footer'
import InternCard from '../../Components/InternCard'
import InternData from '../../Data/Interns.json'

export default function Internship() {
  return (
    <>
        <Container>
            {/* <h2 className='heading underlined'>Internship</h2>
            <Row>
                <Col>
                    <p>
                    The Chair offered 6 internship to undergraduate student each year. In the year 2022-2023 6 interns from Tanzania worked with Dignity Kwanza, REDESSO, and KINNAPA NGOs for three months.
                    </p>
                </Col>
                <Col>
                  <figure>
                    <img src="" alt="Tanzanian interns" />
                    <figcaption>Tanzanian interns from Dignity kwanza, REDESSO  and KINNAPA</figcaption>
                  </figure>
                </Col>
            </Row> */}

            <div>
              <h1>Interns</h1>
              {InternData.map((category) => (
                <div key={category.category}>
                  <h2 className='underlined text-primary mt-3 mb-4 text-center'>{category.category} {category.year} </h2>
                  <div className="internCard">
                  {category.interns.map((intern) => (
                    <InternCard key={intern.id} intern={intern} />
                  ))}

                  </div>
                </div>
              ))}
            </div>

            <img src="assets/Interns/bahati john.png" alt="" />
        </Container>

        <Footer/>
    </>
  )
}
