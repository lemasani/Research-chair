import React from 'react'
import Footer from '../../Components/Footer'
import { Container } from 'react-bootstrap'
import Brochure from './../../assets/Pdfs/Brochure.pdf'

export default function Symposyium() {
  return (
    <>
      <Container>
        <h2 className='heading underlined'>Symposyum and Conferences</h2>
        <p>
        The Research Chair on Forced Displacement at UDSM hosts a series of engaging seminars and symposiums aimed at fostering intellectual discourse and advancing understanding in the field. Our recent seminars have explored topics such as "The Meaning of Epistemological Decolonization and Decoloniality: Tasks of the 21st Century," "Systematic Literature Review on Forced Displacement Data," and "The Dual Imperative of Forced Migration Studies." Additionally, we delve into practical aspects of research and academia with seminars on academic writing, policy dialogue preparation, and outreach strategies. Join us for upcoming seminars where we'll delve into themes like "Refugee Agency," "Media and Acculturation of Refugees," and "Returnees and Food Insecurity in Burundi," among others. Our seminars provide valuable insights and opportunities for collaboration, enabling scholars and practitioners to engage with cutting-edge research and contribute to the advancement of knowledge in forced displacement studies.
        </p>

        <br></br>

        <p>
        The research conducted in the UDSM-RCFD is disseminated through symposium,  conference and publication In the year 2022 the RCFD held a conference on forced displacement. In December 2023 the UDSM-RCFD conducted its first symposium
        </p>
        <a href={Brochure} target="_blank" rel="noopener noreferrer" className='justify-content-center'>
          <button className="btn btn-primary">Brochure</button>
        </a>

      </Container>

      <Footer/>
    </>
  )
}
