import React from "react";
import UncleWithKids from '../assets/meetMan.jpg'

const Experience = () => {
  return (
    <div className="xl:max-w-[84%] text-[#1A1919] mx-auto  py-40 max-w-[72rem] px-6 grid md:grid-cols-2 gap-10">
      <div className="h-full md:order-1 md:py-0 py-5 order-2 w-fit flex flex-col justify-center">
        <h1 className="text-[7vw] md:text-[45px] xl:text-[65px]  leading-none ">
          Experience Urban Arrow near you
        </h1>
        <p className="text-black py-8 font-medium">
          Ask all your questions to our experts, take a test ride and find out
          which bike suits you and your family <br />
          best.
        </p>
        <button className="bg-[#BEE6D7] w-fit px-5 hover:bg-[#b0d0c4] py-3.5 rounded-full text-black font-medium">
          Find a dealer
        </button>
      </div>
      <img src={UncleWithKids} className="lg:h-[40vw] h-[100vw] md:h-[60vw] md:order-2 order-1 2xl:ml-20 rounded-xl md:rounded-xl w-full object-cover" alt="" />
    </div>
  );
};

export default Experience;
