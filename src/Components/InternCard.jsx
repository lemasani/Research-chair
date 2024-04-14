


function InternCard({ intern }) {
  

  return (
    <div className="card intern" style={{width: '18em'}}>
      <img src={`/${intern.image}`} alt={intern.name} className="card-img-top cardImage" />
      <div className="card-body">
        <h5 className="card-title text-center text-primary">{intern.name}</h5>
        <p className="card-text"> <strong>Education Level:</strong>{intern.educationLevel}</p>
        <p className="card-text"> <strong>Hosting Organization:</strong>{intern.hostingOrganization}</p>
      </div>
    </div>
  );
}

export default InternCard;