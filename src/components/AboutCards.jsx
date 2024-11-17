import React from "react";
import '../App.css';

const AboutCards = ({icon,heading,desc}) => {
  return (
    <>
      <div
      className="border-t bg-gradient-hover transition-all duration-500 border-b flex bg-bottom-opacity-gradient flex-col items-center justify-center py-4 px-6  border-white/20 h-full">
        <span className="opacity-80 ">
          {icon}
        </span>
        <h1 className="text font-medium py-6">{heading}</h1>
        <p className="font-light text-center leading-tight">
         {desc}
        </p>
      </div>
    </>
  );
};

export default AboutCards;
