import React, { useState } from "react";
import Menu from "./Menu";
import Timeline from "./Timeline";
import ProfileApp from "./ProfileComponent/ProfileApp";
import "./App.css";

const App = () => {
  const [menuItem, setMenuItem] = useState("Experience");
  return (
    <div>
      <div className="uiOverride">
        <Menu setMenuItem={setMenuItem} />
      </div>
      {menuItem === "Experience" ? <Timeline /> : console.log()}
      {menuItem === "Personal" ? <ProfileApp /> : console.log()}
      {menuItem === "Contact" ? <div>contact</div> : console.log()}
    </div>
  );
};

export default App;
