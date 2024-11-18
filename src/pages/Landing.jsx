import React from "react";
import HeaderLAnding from "../components/HeaderLAnding";
import About from "../components/About";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Integration from "../components/Integration";
import AnimationOnScroll from '../components/AnimatedOnScroll'

const Landing = () => {
  return (
    <>
      <div className="bg-black text-white">
        <section id="header">
        <AnimationOnScroll  transition={{ duration: 0.8 }} >

          <HeaderLAnding />
       </AnimationOnScroll>

        </section>
        <AnimationOnScroll  transition={{ duration: 0.8 }} >
        
        <section id="features">
          
        <AnimationOnScroll  transition={{ duration: 0.8 }} >
        <About />
       </AnimationOnScroll>

        </section>
       </AnimationOnScroll>

        <AnimationOnScroll transition={{ duration: 0.8 }} >

        <Integration />
       </AnimationOnScroll>
       <AnimationOnScroll transition={{ duration: 0.8 }} >
        <section id="pricing">
          <Pricing />
        </section>
       </AnimationOnScroll>
       <AnimationOnScroll transition={{ duration: 0.8 }} >

        <section id="faq">
          <FAQ />
        </section>
       </AnimationOnScroll>

        <Footer />
      </div>
    </>
  );
};

export default Landing;
