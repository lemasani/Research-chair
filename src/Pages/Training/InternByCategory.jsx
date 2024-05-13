import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Components/Footer'
import InternCard from '../../Components/InternCard' // Import the InternCard component
import InternData from '../../Data/Interns.json'

export default function InternsByCategory() {
  const { category } = useParams()
  const interns = InternData.find(cat => cat.category === category)?.interns || 'No Data found'
  console.log('interns',interns);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className='heading underlined'>{category} Interns</h2>
            <Row>
              {interns.map((intern) => (
                 <div className="card intern" style={{width: '18em'}}>
                 <img src={`/${intern.image}`} alt={intern.name} className="card-img-top cardImage" webp/>
                 <div className="card-body">
                   <h5 className="card-title text-center text-primary">{intern.name}</h5>
                   <p className="card-text"> <strong>Education Level:</strong>{intern.educationLevel}</p>
                   <p className="card-text"> <strong>Hosting Organization:</strong>{intern.hostingOrganization}</p>
                 </div>
               </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}