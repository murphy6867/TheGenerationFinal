import React from "react";

const Distance = ({ selectOption }) => { // Use selectOption as prop name
  return (
    <div>
      {selectOption === "running" && (
        <div className="flex Box h-14">
          <h2>Distance</h2>
          <div className="Right">
            <input
              className="w-[50%]"
              placeholder="0"
              name="distance"
              min={0}
              type="number"
            />
            <label htmlFor="distance" className="mr-2">
              KM.
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Distance;
