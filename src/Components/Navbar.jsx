import React, {useState} from 'react';
import NavbarHeader from './NavbarHeader';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
    
  return (
    <>
        <NavbarHeader/>
        <Navbar expand="lg" className="navbar bg-primary d-flex justify-content-center">
        <Container className='d-flex flex-row justify-content-end'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Nav.Link className='nav-item' href="/Home">Home</Nav.Link>
            <Nav.Link className='nav-item' href="/About">About us</Nav.Link>
            <NavDropdown className='nav-dropdown' title="Research" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About research</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fieldworks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Working papers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Publications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Outreach
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Symposyium and conferences
               </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='nav-dropdown' title="Training" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Seminars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Internship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Research support</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='nav-dropdown' title="Policy Dialogues" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">First National Policy Dialogue</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Second National Policy Dialogue
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  className='nav-dropdown' title="links & Collaboration" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">IDRC's Research Chairs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Network of Academic Scholars
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Partners</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav-item' href="#link">News</Nav.Link>
            <Nav.Link className='nav-item' href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavbar;
