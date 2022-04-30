import "./Timeline.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import BSImage from "../images/BS.png";
import GUImage from "../images/GU.png";
import UberImage from "../images/Uber.png";
import WFImage from "../images/WFIcon.png";
import SMImage from "../images/SM.png";
import GSImage from "../images/gusto.png";

import TimelineElements from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#87BCC0" };
  let schoolIconStyles = { background: "#d4af37" };

  return (
    <div>
      <h1 className="title">Experience & Education</h1>
      <VerticalTimeline>
        {TimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              {element.image === "BS" ? <img src={BSImage} /> : <img></img>}
              {element.image === "GU" ? <img src={GUImage} /> : <img></img>}
              {element.image === "Uber" ? <img src={UberImage} /> : <img></img>}
              {element.image === "WF" ? <img src={WFImage} /> : <img></img>}
              {element.image === "SM" ? <img src={SMImage} /> : <img></img>}
              {element.image === "GS" ? <img src={GSImage} /> : <img></img>}
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.bullet1}</p>
              <p id="description">{element.bullet2}</p>
              <p id="description">{element.bullet3}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
