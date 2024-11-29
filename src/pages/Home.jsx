import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeInstructions from "../components/HomeInstructions";
import Footer from "../components/Footer";
import HomeInstructors from "../components/HomeInstructors";
import Testimonial from "../components/Testimonial";
import OnlineClasses from "../components/OnlineClasses";
import Newlesster from "../components/Newlesster";
import Foundation from "../components/Foundation";
import Articles from "../components/Articles";
import Logos from "../components/Logos";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header.jsx";
const Home = () => {
  return (
    <>
      <div className="h-screen relative w-screen">
        <Header />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
