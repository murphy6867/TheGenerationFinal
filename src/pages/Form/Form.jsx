import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import Activity from "./Activity";
import DateTime from "./DateTime";
import Duration from "./Duration";
import Distance from "./Distance";
import Note from "./Note";
import Location from "./Location";
import BtnSave from "./ButtonSave";

const Form = () => {
  return (
    <>
      <div className="w-[50vw] h-screen absolute left-0  flex items-center justify-center">
        <form className="w-[500px] h-full justify-center px-2 flex gap-3 relative flex-col">
          <Activity />
          <DateTime />
          <Duration />
          <Distance />
          <Location />
          <Note />
          <BtnSave/>
        </form>
      </div>
      
      
      <div className="w-[50vw] h-screen absolute flex justify-center items-center right-0 bg-black">
        <div className="w-[250px] rounded-md h-[250px] bg-white">
          <img />
        </div>
      </div>
    </>
  );
};

export default Form;
