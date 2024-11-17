import React from "react";
import HeaderLAnding from "../components/HeaderLAnding";
import About from "../components/About";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Integration from "../components/Integration";



const Landing = () => {
  return (
    <>
     <div className="bg-black text-white">
     <HeaderLAnding />
     <About />
     <Integration />
     <Pricing />
     <FAQ />
     <Footer />

     </div>
    </>
  );
};

export default Landing;
