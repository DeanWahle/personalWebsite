import React, { useState } from "react";
import Menu from "./Menu";
import Personal from "./Personal";
import Timeline from "./Timeline";
import ProfileApp from "./ProfileComponent/ProfileApp";
import "./App.css";

const personalItems = [
  {
    title: "Name",
    content:
      "My name is Dean! Yeah My name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! YeahMy name is Dean! Yeah",
  },
  {
    title: "Jobs?",
    content: "I like to code!",
  },
  {
    title: "What else?",
    content: "I make art sometimes!",
  },
];

const App = () => {
  const [menuItem, setMenuItem] = useState("Experience");
  return (
    <div>
      <div className="uiOverride">
        <Menu setMenuItem={setMenuItem} />
      </div>
      {menuItem === "Experience" ? <Timeline /> : console.log("no dice")}
      {menuItem === "Personal" ? (
        // <Personal personalItems={personalItems} />
        <ProfileApp />
      ) : (
        console.log("no dice")
      )}
      {menuItem === "Contact" ? <div>contact</div> : console.log("no dice")}
    </div>
  );
};

export default App;
