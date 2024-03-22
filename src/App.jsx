import React from "react";
import SidebarLayout from "./layouts/SidebarLayout";
import { Input } from "./components/input";
import MyTable from "./components/MyTable";
//
import Equipment from "./pages/Equipment";
import LiveEquipment from "./pages/LiveEquipment";
//
import { Routes, Route } from "react-router-dom";
import Maintenance from "./pages/Maintenance";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Equipment />} />
      <Route path="/live-equipment" element={<LiveEquipment />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
  );
};

export default App;
