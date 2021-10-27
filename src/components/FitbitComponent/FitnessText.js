import React, { useState } from "react";
import "./FitnessText.scss";
import FitnessProfile from "./FitnessProfile";
import StepsData from "./StepsData";
import emailjs from "emailjs-com";
emailjs.init("user_1F3AfldofVKrQWsisABGN");

const FitnessText = () => {
  const onClick = () => {
    emailjs.send("service_7uvsivo", "template_mof7uxb");
    setEmailSent(true);
  };
  const [emailSent, setEmailSent] = useState(false);

  const [name, setName] = React.useState("Fitness");
  const [bio1, setBio1] = React.useState(
    "Fitness is a very important part of my life, so on this page I have used the FitBit API to visualize my steps data for the week."
  );
  const [bio2, setBio2] = React.useState(
    "If a day is marked as '0', that means I haven't synched with my device yet. If there is only a spinner and no data, that means my API key has expired, and I need to reset it."
  );
  const [bio3, setBio3] = React.useState(
    "Either way, you can click on the button below to send me an email and let me know that this page is broken. Thanks!"
  );

  return (
    <div>
      <div className="fitApp">
        <div id="wrapperf">
          <FitnessProfile name={name} bio1={bio1} bio2={bio2} bio3={bio3} />
        </div>
      </div>
      <StepsData />
      {emailSent ? (
        <div className="stupid">Email sent!</div>
      ) : (
        <div className="stupid">
          <a
            className={`button ${"workButton"}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onClick()}
          >
            It's broken!
          </a>
        </div>
      )}
    </div>
  );
};
export default FitnessText;

/*
<a
        className={`button ${"workButton"}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onClick()}
      >
        It's broken!
      </a>
      */
