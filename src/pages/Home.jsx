import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeInstructions from '../components/HomeInstructions'
import Footer from "../components/Footer";
import HomeInstructors from '../components/HomeInstructors';
import Testimonial from '../components/Testimonial';
import OnlineClasses from '../components/OnlineClasses';
import Newlesster from '../components/Newlesster';

const Home = () => {
  return (
    <>
    <div className="relative -top-40 h-[150vh] w-full  overflow-hidden">
    <HomeHeader />
    </div> 
    <HomeInstructions />
    < OnlineClasses />
    <HomeInstructors />
    <Testimonial />
    <Newlesster />
    </>
  )
}

export default Home