import React from "react";

const CustomeCard = ({ children }) => {
  return (
    <div className="rounded-[20px] gap-6 flex items-center justify-between flex-col px-8 py-6 bg-white border border-black/[10%] shadow-2xl">
      {children}
    </div>
  );
};

export default CustomeCard;
