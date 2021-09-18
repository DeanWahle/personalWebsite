import React, { useState } from "react";

const Menu = ({ setMenuItem }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("Experience");
  const ExperienceActive = activeMenuItem === "Experience" ? "active" : "";
  const PersonalActive = activeMenuItem === "Personal" ? "active" : "";
  const ContactActive = activeMenuItem === "Fitness" ? "active" : "";

  const setMenus = (item) => {
    setActiveMenuItem(item);
    setMenuItem(item);
  };

  return (
    <React.Fragment>
      <div className="ui three item menu">
        <a
          className={`item ${ExperienceActive}`}
          onClick={() => setMenus("Experience")}
        >
          Experience
        </a>
        <a
          className={`item ${PersonalActive}`}
          onClick={() => setMenus("Personal")}
        >
          About Me
        </a>
        <a
          className={`item ${ContactActive}`}
          onClick={() => setMenus("Fitness")}
        >
          Fitness
        </a>
      </div>
    </React.Fragment>
  );
};

export default Menu;
