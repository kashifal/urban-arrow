import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header.jsx";
import TryIt from "../components/TryIt";
import MeetFleet from "../components/MeetFleet";
import Ride from "../components/Ride";
import Experience from "../components/Experience";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <>
      <div className="h-screen relative w-screen">
        <Header />
        <HeroSection />
      </div>
      <TryIt />
      <MeetFleet />
      <Ride />
      <Experience />
      <Stories />
    </>
  );
};

export default Home;
