import React from "react";

const Duration = () => {
  return (
    <div className="flex Box h-14">
      <h2 className="">Duration</h2>
      <div className="Right mr-2">
        <input className='w-20' type="number" placeholder="0" id="hours" name="hours" min="0" max="24" />
        <label for="hours">Hours</label>
        <input className='w-20' type="number" placeholder="0" id="minutes" name="minutes" min="0" max="59" />
        <label for="minutes">Minutes</label>
      </div>
    </div>
  );
};

export default Duration;
