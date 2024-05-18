import {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import Footer from '../../Components/Footer'
import Seminars from '../../Data/Seminar.json';

export default function Seminar() {
  
  const [selectedEntries, setSelectedEntries] = useState([]);

  const handleSectionClick = (entries) => {
    setSelectedEntries(entries);
  }

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
            <Col xs={12} md={12} lg={4}>
            {Seminars.seminars.map((seminar, index) => (
              <div key={index} className='section-title' onClick={() => handleSectionClick(seminar.entries)}>
                <h3 className='fs-5 text-underline'>{seminar.section_title}</h3>
                <span>Click to view Seminar</span>
              </div>
            ))}

            </Col>

            {selectedEntries.length > 0 && (
              <Col xs={12} md={12} lg={8}>
                <div className='table-container'>
                  <table>
                    <thead>
                      <tr>
                        {/* <th className='tablecell serial-number'>Serial Number</th> */}
                        <th className='tablecell'>Date and Time</th>
                        <th className='tablecell'>Topic</th>
                        <th className='tablecell'>Presenter</th>
                        <th className='tablecell'>Chair</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEntries.map((entry, index) => (
                        <tr key={index}>
                          {/* <td className='tablecell'>{entry.serial_number}</td> */}
                          <td className='tablecell'>{entry.date_and_time}</td>
                          <td className='tablecell'>{entry.topic}</td>
                          <td className='tablecell'>{entry.presenter}</td>
                          <td className='tablecell'>{entry.chair}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
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
