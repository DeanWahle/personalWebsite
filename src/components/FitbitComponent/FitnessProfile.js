function FitnessProfile(props) {
  return (
    <div className="fitProfile">
      <h1 className="fitName">{props.name}</h1>
      <p className="fitBio">{props.bio1}</p>
      <p className="fitBio2">{props.bio2}</p>
      <p className="fitBio3">{props.bio3}</p>
    </div>
  );
}

export default FitnessProfile;
