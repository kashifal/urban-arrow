import React, { useState } from "react";

import SidebarLayout from "../layouts/SidebarLayout";
import Heading from "../components/Heading";
import SortIcon from "../icons/SortIcon";
import Card from "../components/Card";
import AddEquipment from "./AddEquipment";
import { Transition } from "@headlessui/react";
import NoSignalCard from "../components/NoSignalCard";
const Equipment = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  const transitionClasses = {
    enter: "transform ease-out duration-300 transition",
    enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  };
  return (
    <SidebarLayout>
      <div className=" px-8 py-6 bg-white rounded-[20px]">
        <div className="flex flex-wrap justify-between gap-4 sm:items-center">
          <Heading title="Welcome to Dashboard , 21 - February - 2024" />
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#174172] sm:ml-0 ml-auto text-base font-medium flex gap-3 text-white px-6 py-2.5 rounded-[3px]"
          >
            <SortIcon />
            <span className="">Sort By Options</span>
          </button>
        </div>

        <div className="grid w-full h-full grid-cols-1 gap-6 mt-4 xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4">
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
          <NoSignalCard />
          <NoSignalCard />
          <NoSignalCard />
          <NoSignalCard />
        </div>
      </div>
      <Transition
        show={open}
        enter={transitionClasses.enter}
        enterFrom={transitionClasses.enterFrom}
        enterTo={transitionClasses.enterTo}
        leave={transitionClasses.leave}
        leaveFrom={transitionClasses.leaveFrom}
        leaveTo={transitionClasses.leaveTo}
      >
        <AddEquipment close={close} />
      </Transition>
    </SidebarLayout>
  );
};

export default Equipment;
