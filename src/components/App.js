import React from "react";
import Menu from "./Menu";
import Personal from "./Personal";

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

const menuItems = [
  {
    title: "Experience",
  },
  {
    title: "Personal",
  },
  {
    title: "Contact",
  },
];

const App = () => {
  return (
    <div>
      <Menu menuItems={menuItems} />
      <Personal personalItems={personalItems} />
    </div>
  );
};

export default App;
