import React from 'react';
import ExpandableCard from './ProgramCard';

function ProgramCardRendered() {
  const cardData = [
    {
        title: 'Research',
        content: 'The Research Chair on Forced Displacement at the University of Dar es Salaam conducts groundbreaking research focusing on East Africa. Our investigations encompass refugee management, humanitarian aid, and family dynamics, shedding light on hidden aspects of resilience and social networks. We advocate for practical solutions and mainstreaming displacement issues into government plans.'
    },
    {
        title: 'Training',    
        content: 'UDSMs Research Chair on Forced Displacement offers training for young scholars to comprehend and address forced displacement complexities. Participants explore refugee management, humanitarian aid, family dynamics, and socio-economic impacts. Through rigorous research and collaboration, scholars gain insights to meaningfully contribute, empowering them to address urgent challenges within displaced populations.'
    },
    {
        title: 'Policy Dialogue',
        content: 'UDSMs Research Chair on Forced Displacement organizes national and regional policy dialogues, fostering critical discussions on pressing displacement issues. These platforms bring together stakeholders to exchange insights, share best practices, and develop informed policies promoting the rights of displaced individuals. Join us in shaping policy agendas prioritizing their needs and rights.'
    }
  ];

  return (
    <div className='programs'>
      {cardData.map((card, index) => (
        <ExpandableCard key={index} {...card} />
      ))}
    </div>
  );
}

export default ProgramCardRendered;