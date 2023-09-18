import React, { useState } from "react";
import Activity from "./Activity";
import DateTime from "./DateTime";
import Duration from "./Duration";
import Distance from "./Distance";
import Note from "./Note";
import Location from "./Location";
import BtnSave from "./ButtonSave";

import './form.css'

const Form = () => {
  const [selectOptions, setSelectOptions] = useState("1");

  const handleChange = (event) => {
    setSelectOptions(event.target.value);
  };

  return (
    <>
      <div className="w-[50vw] h-screen absolute left-0 top-20 flex items-center justify-center">
        <form className="w-[500px] h-full justify-center px-2 flex gap-3 relative flex-col">
          <Activity
            selectOptions={selectOptions}
            handleChange={handleChange}
          />
          <DateTime />
          <Duration />
          <Distance selectOption={selectOptions} /> {/* Use selectOption here */}
          <Location />
          <Note />
          <BtnSave />
        </form>
      </div>

      <div className="w-[50vw] h-screen absolute flex justify-center items-center right-0 bg-black">
        <div className="w-[250px] rounded-md h-[250px] bg-white">
          <img alt="Activity" />
        </div>
      </div>
    </>
  );
};

export default Form;
