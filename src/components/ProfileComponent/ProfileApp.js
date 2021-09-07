import React, { useState } from "react";
import "./ProfileApp.scss";
import Image from "./Image";
import Profile from "./Profile";
import composite from "../../images/composite.jpg";

const ProfileApp = () => {
  const [name, setName] = React.useState("Dean Wahle");
  const [bio, setBio] = React.useState(
    "26 year old Designer / Developer living in Stockholm. Originally from Oxford, England. Love to make stuff."
  );
  const [quote, setQuote] = React.useState({
    content: "Drop the 'the'. Just Facebook. It's cleaner.",
    source: "The Secret Life of Walter Mitty",
  });

  return (
    <div className="App">
      <Image src={composite} />
      <Profile name={name} bio={bio} quote={quote} />
    </div>
  );
};
export default ProfileApp;
