import React, { useState } from "react";
import Menu from "./Menu";
import Timeline from "./Timeline";
import ProfileApp from "./ProfileComponent/ProfileApp";
import "./App.css";
import Fitbit from "./FitbitComponent/Fitbit";

const App = () => {
  const [menuItem, setMenuItem] = useState("Experience");
  return (
    <div>
      <div className="uiOverride">
        <Menu setMenuItem={setMenuItem} />
      </div>
      {menuItem === "Experience" ? <Timeline /> : console.log()}
      {menuItem === "Personal" ? <ProfileApp /> : console.log()}
      {menuItem === "Fitness" ? <Fitbit /> : console.log()}
    </div>
  );
};

export default App;
