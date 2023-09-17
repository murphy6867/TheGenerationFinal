import React from "react";
import './form.css'

const Activity = () => {
  return (
    <div className="Box h-14 flex">
      <h2 className="w-[30%]">Activity Type</h2>
      <select className="Right mr-2 w-[50%]">
        <option disabled selected hidden>
          Select Activity
        </option>
        <option value="running">Running</option>
        <option value="yoga">Yoga</option>
        <option value="weight">Weight Tainning</option>
        <option value="weight">Bicycle</option>
      </select>
    </div>
  );
};

export default Activity;
