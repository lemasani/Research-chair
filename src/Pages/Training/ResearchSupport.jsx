import Footer from '../../Components/Footer';
import Supported from '../../Data/ResearchSupport.json'

export default function ResearchSupport() {
  
  return (
    <>
      <h2 className="heading underline mb-4">Research Support</h2>
      <div className="container mx-auto px-4">
      <p className="text-balance mb-4">
          UDSM s research chair on Forced Displacement has been supporting scholars from various countries in the East African Community (EAC) in their research and papers. This includes Tanzania, Kenya, Uganda, Rwanda, and Burundi. The research focuses on those who are forcibly displaced due to conflicts and war, climate change and disasters, and development or conservation initiatives. The initiative aims to provide social and legal protection for the affected individuals.
        </p>

        <div className="supported grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Supported.map((item, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg p-4">
              <img src={`/${item.image}`} alt={item.fullName} width="100px" className='self-center'/>
              <h3 className="text-xl text-center font-semibold mb-2">{item.fullName}</h3>
              <p className="text-gray-700"> Nationality: {item.nationality}</p>
              <p className="text-gray-700">Education: {item.educationLevel}</p>
              <p className="text-gray-700">Topic: {item.title}</p>
            </div>
          ))}
        </div>
      </div>


      <Footer/>
    </>
  );
}
