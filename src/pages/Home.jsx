import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header.jsx";
import TryIt from "../components/TryIt";
import MeetFleet from "../components/MeetFleet";
import Ride from "../components/Ride";
import Experience from "../components/Experience";
import Stories from "../components/Stories";
import SunCover from "../components/SunCover";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

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
      <SunCover />
      <Discover />
      <Footer />
    </>
  );
};

export default Home;
