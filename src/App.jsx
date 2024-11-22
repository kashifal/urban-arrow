import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CourseList from "./pages/CourseList";

const App = () => {
  return (
    <>
     <NavBar />
     {/* <Contact /> */}
     {/* <Profile /> */}
     <CourseList />

     <Footer />
    
      {/* <Routes>
      
      </Routes> */}
    </>
  );
};

export default App;
