//import { AiFillGithub } from "react-icons/AiFillGithub";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Icons.css";
function Profile(props) {
  return (
    <div className="Profile">
      <h1 className="Name">{props.name}</h1>
      <div className="buttons">
        <a
          className={`button ${"workButton"}`}
          href="https://github.com/DeanWahle"
          target="_blank"
          rel="noopener noreferrer"
          icon="AiFillGithub"
        >
          View Github <FaGithub className="CustomIcon" />
        </a>{" "}
        <a
          className={`button ${"workButton"}`}
          href="https://www.linkedin.com/in/dean-wahle"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn <FaLinkedin className="CustomIcon" />
        </a>
      </div>
      <p className="Bio">{props.bio1}</p>
      <p className="Bio3">{props.bio4}</p>
      
      <p className="Bio4">- Wake Hacks - 2nd Place Winner (2022)
      <br/>
      - Wake Forest Computer Science Entrepreneur Fellowship - Winner
        (2021-2022)</p>
    
  

      <p className="Bio3">{props.bio2}</p>
      <p className="Bio3">{props.bio3}</p>
      
    </div>
  );
}

export default Profile;
