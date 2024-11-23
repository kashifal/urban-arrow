import React from 'react'
import AboutContact from "../components/AboutContact";
import ContactForm from "../components/ContactForm";
import bgImg from '../assets/headerBG.png'

const Contact = () => {
    return (
        <>
         <div className={`mb-12 h-[65vh] flex items-center justify-center w-full`}>
      <div className={`h-[95%]  z-[2] w-full absolute top-0 right-0`}>
        <img src={bgImg} className="h-full object-cover" alt="Background" />
      </div>
      <div className="z-[3] text-center">
        <h1 className="text-[#227179] font-bold text-5xl sm:text-7xl">Contact Us</h1>
         <h2 className="text-[#609199] mt-6 text-2xl">Get in Touch</h2>
      </div>
    </div>
           
            <AboutContact />
            <ContactForm />
        </>
    )
}

export default Contact