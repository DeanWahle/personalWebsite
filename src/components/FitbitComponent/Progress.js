import React from "react";
import { render } from "react-dom";
import VisibilitySensor from "react-visibility-sensor";

// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = ({ num }) => {
  return (
    <div>
      <div style={{ width: "100px" }}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible && num != null ? num / 100 : 0;
            return <CircularProgressbar value={percentage} text={`${num}`} />;
          }}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Progress;
