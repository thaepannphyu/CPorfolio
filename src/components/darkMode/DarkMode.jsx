import React from "react";
import "./darkMode.css";

const DarkMode = () => {
  return (
    <div className=" relative">
      <div className=" flex flex-col absolute top-36 left-20 z-20">
        <input type="checkbox" id="darkMode-toggle" className="box1" />
        <label For="darkMode-toggle" className="box"></label>
      </div>
    </div>
  );
};

export default DarkMode;
