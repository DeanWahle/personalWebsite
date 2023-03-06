import React, { useState } from "react";
import "./ProfileApp.scss";
import Image from "./Image";
import Profile from "./Profile";
import composite from "../../images/pic6.png";

const ProfileApp = () => {
  const [name, setName] = React.useState("Dean Wahle");
  const [bio1, setBio1] = React.useState(
    "Hey! My name is Dean, and I am a senior Computer Science student at Wake Forest University, where I will be completing my Bachelor's degree in May. Last summer, I successfully completed a software engineering internship at Gusto, where I made a significant positive impact on customers and quickly acquired new skills and knowledge. I am a full-stack engineer with the ability to learn new technologies, and philosophies quickly. I am currently seeking new-graduate positions as a software engineer and have experience in web development, data visualization/analytics, open-source contributions, and much more! Please feel free to reach out to me."
  );
  const [bio2, setBio2] = React.useState("Cell: +1 (781) 733-1395");
  const [bio3, setBio3] = React.useState("Email: dhwahle@gmail.com");
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
