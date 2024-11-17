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
        <section id="header">
          <HeaderLAnding />
        </section>
        <section id="features">

        <About />
        </section>
        <Integration />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
