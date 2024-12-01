import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
