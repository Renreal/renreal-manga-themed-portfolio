import React from "react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import "../css/Timeline.css";

const workexp = () => {
  const items = [
    "Started Project",
    "Built Features",
    "Handled Feedback",
    "Went Live",
  ];

  return (
    <div className="l-container">
      <p className="work-section-header">
        <LuBriefcaseBusiness />
        Experience
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="bullet filled"><p>DevOps Engineer </p> </div>
          {/* <div>description</div> */}
        </div>



        <div className="timeline-item">
          <div className="bullet"></div>
          <p>BUILT FEATURES</p>
        </div>
        <div className="timeline-item">
          <div className="bullet"></div>
          <p>HANDLED FEEDBACK</p>
        </div>
        <div className="timeline-item">
          <div className="bullet"></div>
          <p>WENT LIVE</p>
        </div>
      </div>
    </div>
  );
};

export default workexp;
