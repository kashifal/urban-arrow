import React, { useState } from "react";
import SidebarLayout from "./layouts/SidebarLayout";
import { Input } from "./components/input";
import MyTable from "./components/MyTable";
//
import Equipment from "./pages/Equipment";
import LiveEquipment from "./pages/LiveEquipment";
//
import { Routes, Route } from "react-router-dom";
import Maintenance from "./pages/Maintenance";
import AddEquipment from "./pages/AddEquipment";
import { Dialog } from "@headlessui/react";
import AddEquipment from "./pages/AddEquipment";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Equipment />} />
        <Route path="/live-equipment" element={<LiveEquipment />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/add" element={<AddEquipment />} />
      </Routes>
    </>
  );
};

export default App;
