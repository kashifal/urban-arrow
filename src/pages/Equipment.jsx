import React from "react";

import SidebarLayout from "../layouts/SidebarLayout";
import Heading from "../components/Heading";
import SortIcon from "../icons/SortIcon";
import Card from "../components/Card";

const Equipment = () => {
  return (
    <SidebarLayout>
      <div className=" px-8 py-6 bg-white rounded-[20px]">
        <div className="flex sm:items-center gap-4 flex-wrap justify-between">
          <Heading title="Welcome to Dashboard , 21 - February - 2024" />
          <button className="bg-[#174172] sm:ml-0 ml-auto text-base font-medium flex gap-3 text-white px-6 py-2.5 rounded-[3px]">
            <SortIcon />
            <span className="">Sort By Options</span>
          </button>
        </div>

        <div className="w-full   gap-6 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:grid-cols-4 h-full   mt-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Equipment;
