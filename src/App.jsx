import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CourseList from "./pages/CourseList";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courseList" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
