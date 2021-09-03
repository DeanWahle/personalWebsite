import React, { useState } from "react";
import Menu from "./Menu";
import Personal from "./Personal";
import Timeline from "./Timeline";

const personalItems = [
  {
    title: "Name",
    content: "My name is Dean!",
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
      <Menu setMenuItem={setMenuItem} />
      {menuItem === "Experience" ? <Timeline /> : console.log("no dice")}
      {menuItem === "Personal" ? (
        <Personal personalItems={personalItems} />
      ) : (
        console.log("no dice")
      )}
    </div>
  );
};

export default App;
