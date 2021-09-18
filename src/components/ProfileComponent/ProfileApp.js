import React, { useState } from "react";
import "./ProfileApp.scss";
import Image from "./Image";
import Profile from "./Profile";
import composite from "../../images/ppp2.png";

const ProfileApp = () => {
  const [name, setName] = React.useState("Dean Wahle");
  const [bio1, setBio1] = React.useState(
    "20 year old engineer/developer from Boston. Love to make stuff. Currently studying artifical intelligence, neural networks, and machine learning abroad at DIS Copenhagen."
  );
  const [bio2, setBio2] = React.useState("Cell: +1 (781) 733-1395");
  const [bio3, setBio3] = React.useState("Email: wahldh19@wfu.edu");
  const [quote, setQuote] = React.useState({
    content: "Anything in life worth doing, is worth overdoing.",
    source: "Shane Patton",
  });

  return (
    <div className="App">
      <Image src={composite} />
      <div id="wrapper">
        <Profile name={name} bio1={bio1} bio2={bio2} bio3={bio3} />
      </div>
    </div>
  );
};
export default ProfileApp;
