import React, { useState } from "react";

const Menu = ({ menuItems }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("Experience");
  const ExperienceActive = activeMenuItem === "Experience" ? "active" : "";
  const PersonalActive = activeMenuItem === "Personal" ? "active" : "";
  const ContactActive = activeMenuItem === "Contact" ? "active" : "";
  return (
    <div>
      <div className="ui three item menu">
        <a
          className={`item ${ExperienceActive}`}
          onClick={() => setActiveMenuItem("Experience")}
        >
          Experience
        </a>
        <a
          className={`item ${PersonalActive}`}
          onClick={() => setActiveMenuItem("Personal")}
        >
          Personal
        </a>
        <a
          className={`item ${ContactActive}`}
          onClick={() => setActiveMenuItem("Contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
