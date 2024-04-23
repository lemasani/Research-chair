import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <>

    <footer className="bg-primary text-white text-center text-lg-start">
    <div className="container">
   
    <section className="mt-5">
      <div className="row text-center d-flex justify-content-center pt-5">
       
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-white">About us</a>
          </h6>
        </div>
        
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-white">Training</a>
          </h6>
        </div>
       
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-white">Research</a>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-white">Collaboration</a>
          </h6>
        </div>

        
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-white">News</a>
          </h6>
        </div>
       
      </div>
     
    </section>
   

    <hr className="my-5" />

    
    <section className="mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <p>
          Strengthening knowledge, evidence use and leadership in the global south on forced displacement
          </p>
        </div>
      </div>
    </section>
    
   
    <section className="text-center mb-5">
      <a href="https://twitter.com/UDSMRCFD" className="text-white me-4">
        <i className="bi bi-twitter-x"></i>
      </a>
    </section>
    
  </div>
 
  <div
       className="text-center p-3 copyright"
       style={
          {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            fontSize: '0.8rem'
          }
        
       }
       >
    &copy; {new Date().getFullYear()}
   
  </div>
  </footer>
  </>
  );
}