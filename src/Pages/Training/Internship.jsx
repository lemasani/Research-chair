import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import InternData from '../../Data/Interns.json'

export default function Internship() {
  return (  
    <>
        <Container>
            <Row>
              <Col>
                <h2 className='heading underlined'>Internship</h2>
                <p>
                Welcome to the Chair's Internship Program! Each year, we offer six internship opportunities to undergraduate students, providing them with valuable experience at leading NGOs. In 2022-2023, interns from Tanzania worked with Dignity Kwanza, REDESSO, and KINNAPA NGOs. In 2023-2024, interns from Uganda are placed with the International Rescue Committee, Refugee Law Project, and CAFOMI. Additionally, the Chair offers research support to three postgraduate students annually, including postdoctoral, PhD, and Master's students, providing research funds and networking opportunities. In 2022-2023, support was provided to candidates from Kenya, Burundi, and Uganda. Join us in empowering the next generation of scholars and professionals in forced displacement studies!
                </p>
              </Col>
            </Row>
            <Row>
              {InternData.map((category) => (
                <div key={category.category}>
                  <h2 className='underlined text-primary mt-3 mb-4 text-center'>
                    <Link to={`/interns/${category.category}`}>{category.category} {category.year}</Link>
                  </h2>
                </div>
              ))}
            </Row>
        </Container>
        <Footer/>
    </>
  )
}