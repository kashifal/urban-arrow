import React from 'react';
import bgImg from '../assets/headerBG.png';
import YogaCards from '../components/YogaCards';

const CourseList = () => {
  return (
    <>
      <div className="mb-12 h-[45vh] flex items-center justify-center w-full">
        <div className="h-[70%] z-[2] !w-full absolute top-0 right-0">
          <img src={bgImg} className="h-full w-full object-cover" alt="Background" />
        </div>
        <div className="z-[3] text-center">
          <h1 className="text-[#227179] text-4xl sm:text-6xl">Course List 1</h1>
        </div>
      </div>
      <div className="grid max-w-7xl mx-auto px-6 pt-10 pb-20 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <YogaCards key={index} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
