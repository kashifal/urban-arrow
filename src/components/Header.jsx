import React from 'react'
import Navbar from './NavBar'
import bgImg from '../assets/headerBG.png'

const Header = ({ title, subtitle, bgHeight = "100vh", textHeight = "100vh" }) => {
  return (
    <div className={`mb- h-[${textHeight}] flex items-center justify-center w-full`}>
      <div className={`md:h-[${bgHeight}]  z-[2] w-full absolute top-0 right-0`}>
        <img src={bgImg} className="h-full object-cover" alt="Background" />
      </div>
      <div className="z-[3] text-center">
        <h1 className="text-[#227179] font-bold text-5xl sm:text-7xl">{title}</h1>
         <h2 className="text-[#609199] mt-6 text-2xl">{subtitle}</h2>
      </div>
    </div>
  )
}

export default Header
