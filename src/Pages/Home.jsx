import Carousel from '../Components/Carousel'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Carousel/>
    <Container>
        {/* <Row>
         <div>
          <h2 className='fs-2 text-center heading'>News</h2>
          <div className="news-contanier">
            {NewsData.map((item, index) => (
              <NewsCard key={index}
              id={item.id}
              news={item.news}
              date={item.date}
              place={item.place} />
            ))}
          </div>
         </div>
        </Row> */}

        <Row className='mt-4'>
            <h2 className='heading'>Reseach chair of forced displacement</h2>
          <p className='text-center text-balance'>
            UDSM has proposed to institute a research chair that will work across five East African countries-
            Tanzania, Kenya, Uganda, Rwanda, and Burundi. The research will focus on those that are forcibly
            displaced due to conflicts and war, those that are forcibly displaced due to climate change and disaster,
            and those that are displaced due to development or conservation initiatives. This includes a focus on
            social and legal protection for women and children, and other vulnerable groups in the displaced
            populations, as well as a focus on host communities, relocated, and resettled populations across these East
            African countries. The university will use a feminist, decolonial approach, to enable displaced populations
            to define the research agenda and outreach, making it demand-driven and action oriented.
          </p>
        </Row>

       
    </Container>
    <Footer/>
    </>
  )
}
