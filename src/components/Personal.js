import React, { useState } from "react";
import composite from "../images/composite.jpg";
import "./Personal.css";

const Personal = ({ personalItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = personalItems.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div class="ui card" style={{ position: "relative" }}>
          <div class="image">
            <img src={composite}></img>
          </div>
          <div class="content">
            <a class="header">Dean Wahle</a>
            <div class="meta">
              <span class="date">Class of 2023</span>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="ui styled accordion">{renderedItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
