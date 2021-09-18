import React, { useState } from "react";
import "./ProfileApp.scss";
import Image from "./Image";
import Profile from "./Profile";
import composite from "../../images/ppp2.png";
import Fitbit from "../FitbitComponent/Fitbit";

const ProfileApp = () => {
  const [name, setName] = React.useState("Dean Wahle");
  const [bio, setBio] = React.useState(
    "26 year old Designer / Developer living in Stockholm. Originally from Oxford, England. Love to make stuff."
  );
  const [quote, setQuote] = React.useState({
    content: "Anything in life worth doing, is worth overdoing.",
    source: "Shane Patton",
  });

  return (
    <div className="App">
      <Image src={composite} />
      <div id="wrapper">
        <Fitbit />
        <Profile name={name} bio={bio} quote={quote} />
      </div>
    </div>
  );
};
export default ProfileApp;
