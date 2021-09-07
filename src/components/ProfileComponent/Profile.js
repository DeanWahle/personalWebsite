import react from "react";
function Profile(props) {
  return (
    <div className="Profile">
      <h1 className="Name">{props.name}</h1>
      <p className="Bio">{props.bio}</p>
      <div className="Quote">
        <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
        <div className="byline">&mdash; {props.quote.source}</div>
      </div>
    </div>
  );
}

export default Profile;
