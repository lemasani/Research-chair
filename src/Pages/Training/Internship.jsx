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

            <Row>
              <Col>
                <h2 className='heading underlined'>Internship</h2>
                <p>
                Welcome to the Chair's Internship Program! Each year, we offer six internship opportunities to undergraduate students, providing them with valuable experience at leading NGOs. In 2022-2023, interns from Tanzania worked with Dignity Kwanza, REDESSO, and KINNAPA NGOs. In 2023-2024, interns from Uganda are placed with the International Rescue Committee, Refugee Law Project, and CAFOMI. Additionally, the Chair offers research support to three postgraduate students annually, including postdoctoral, PhD, and Master's students, providing research funds and networking opportunities. In 2022-2023, support was provided to candidates from Kenya, Burundi, and Uganda. Join us in empowering the next generation of scholars and professionals in forced displacement studies!
                </p>
              </Col>
            </Row>

            <Row>
            <div>
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

            </Row>

            \
        </Container>

        <Footer/>
    </>
  )
}
