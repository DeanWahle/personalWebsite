import React, { useState } from "react";
import "./ProfileApp.scss";
import Image from "./Image";
import Profile from "./Profile";
import composite from "../../images/pic6.png";

const ProfileApp = () => {
  const [name, setName] = React.useState("Dean Wahle");
  const [bio1, setBio1] = React.useState(
    "21 year old engineer/developer from Boston. I love to make stuff! Currently finishing my senior year as a CS major at Wake Forest. Previous SWE intern at Gusto."
  );
  const [bio2, setBio2] = React.useState("Cell: +1 (781) 733-1395");
  const [bio3, setBio3] = React.useState("Email: wahldh19@wfu.edu");
  const [bio4, setBio4] = React.useState("Recent Achievements:");

  const [quote, setQuote] = React.useState({
    content: "Anything in life worth doing, is worth overdoing.",
    source: "Shane Patton",
  });

  return (
    <div className="App">
      <Image src={composite} />
      <div id="wrapper">
        <Profile name={name} bio1={bio1} bio2={bio2} bio3={bio3} bio4={bio4} />
      </div>
    </div>
  );
};
export default ProfileApp;
