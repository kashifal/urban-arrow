import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
    <Landing />

      <Routes>
        <Route path=""  />
      </Routes>
    </>
  );
};

export default App;
