import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-5 p-4">
      <Container>
        <Row className='text-center'>
         
          <Col>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              {/* Add more page links here */}
            </ul>
          </Col>
          <Col>
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com/UDSMRCFD" target='_blank' className="text-white">Twitter</a></li>
              {/* Add more social links here */}
            </ul>
          </Col>
        
        </Row>
        <Row className='text-center mt-2 mb-2'>
        <Col>
            <p>Strengthening knowledge, evidence use and leadership in the global south on forced displacement</p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col className="text-center">&copy; {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
}