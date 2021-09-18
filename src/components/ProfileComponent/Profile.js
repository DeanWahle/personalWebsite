function Profile(props) {
  return (
    <div className="Profile">
      <h1 className="Name">{props.name}</h1>
      <p className="Bio">{props.bio1}</p>
      <p className="Bio2">{props.bio2}</p>
      <p className="Bio3">{props.bio3}</p>

      <div className="buttons">
        <a
          className={`button ${"workButton"}`}
          href="https://github.com/DeanWahle"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Github
        </a>{" "}
        <a
          className={`button ${"workButton"}`}
          href="https://github.com/DeanWahle"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn
        </a>
      </div>

      {/* <div className="Quote">
        <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
        <div className="byline">&mdash; {props.quote.source}</div>
      </div> */}
    </div>
  );
}

export default Profile;
