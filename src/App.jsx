import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Checkout from "./pages/Checkout";
import SolanaPayment1 from "./pages/SolanaPayment1";
import SolanaPayment2 from "./pages/SolanaPayment2";

const App = () => {
  return (
    <>
    {/* <Landing /> */}
    {/* <Terms /> */}
    {/* <FAQ /> */}
    {/* <Shop /> */}
    {/* <Contact /> */}
    {/* <Reviews /> */}
    {/* <Checkout /> */}
    <SolanaPayment1 />
    {/* <SolanaPayment2 /> */}
      <Routes>
        <Route path=""  />
      </Routes>
    </>
  );
};

export default App;
