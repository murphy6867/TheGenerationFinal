import React from "react";

const DateTime = () => {
  return (
    <div className="Box flex h-14">
      <h2>Start</h2>
      <div className="flex w-[50%] h-full mr-2">
        <input className="" type="date" />
        <input type="time" />
      </div>
    </div>
  );
};

export default DateTime;
