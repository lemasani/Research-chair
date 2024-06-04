import generalPartners from './../../assets/Partners/partners.jpg'
import Footer from './../../Components/Footer'

//images
import irri from './../../assets/Partners/IRRI.png'
import refugeeLaw from './../../assets/Partners/refugee law.png'
import kck from './../../assets/Partners/kck.png'
import cafomi from './../../assets/Partners/cafomi.png'
import eac from './../../assets/Partners/EaC.png'

export default function Partners() {
    return (
        <>
            <h2 className='heading'>Partners</h2>


            <div className="container">
                <div className="image-wrapper">
                    <figure>
                        <img src={generalPartners} alt="Partners" />
                        <figcaption>Partners</figcaption>
                    </figure>
                </div>

                <div className="info-container">
                    <p>The network regularly hosts conferences, workshops, and seminars to encourage knowledge exchange and joint initiatives. Recently the Chair, visited Uganda—a country that currently hosts the largest number of refugees in East Africa. Uganda&apos;s unique approach promotes self-sufficiency among refugees, despite the challenges posed by the overwhelming number of asylum seekers. The country&apos;s abundant food resources, akin to Tanzania&apos;s Kigoma region, benefit both locals and refugees.</p>

                    <p>These efforts underscore the Chair&apos;s commitment to building strong, collaborative links within the Global South to address critical issues related to displacement and refugee management.</p>
                </div>

                <div className="shareholders">
                    <h3 className='text-bold text-blue-600'>Shareholders</h3>
                    <ul className='flex gap-5'>
                        <li><a href="http://refugee-rights.org/"><img src={irri} alt="" /></a></li>
                        <li><a href="https://refugeelawproject.org/"><img src={refugeeLaw} alt="" /></a></li>
                        <li><a href="https://www.kituochakatiba.org/"><img src={kck} alt="" /></a></li>
                        <li><a href="https://www.cafomi.org/"><img src={cafomi} alt="" /></a></li>
                        <li><a href="https://www.eac.int/"><img src={eac} alt="" /></a></li>
                    </ul>

                    <p>
                    These efforts underscore the Chair&apos;s commitment to building strong, collaborative links within the Global South to address critical issues related to displacement and refugee management, ultimately striving for sustainable solutions and improved outcomes for affected communities.
                    </p>
                </div>

            </div>

            <Footer />
        </>
    )
}
