import React from "react";

const DetailCards = ({head, desc,img}) => {
  return (
    <>
      <div className="h-full relative overflow-hidden  pb-4 bg-gradient-hover bg-white/5 border border-white/5 rounded-2xl pt-8 px-4 flex flex-col items-center justify-between backdrop-blur-3xl">
       <div className="flex flex-col items-center">
       <h1 className="font-medium text-center">{head}</h1>
        <p className="text-sm lg:w-[60%] font-medium leading-tight pt-3 pb-5 text-center">
          {desc}
        </p>
       </div>
        <img src={img} alt="" className=" w-[250px]" />
      </div>
    </>
  );
};

export default DetailCards;
