import React from 'react'
import LoginOrRegister from '../components/LoginOrRegister';
import bgImg from '../assets/headerBG.png'

const Profile = () => {

  return (
    <>

      <div className="mb-12 h-[45vh] flex items-center justify-center w-full">
        <div className="h-[70%]   z-[2] !w-full absolute top-0 right-0">
          <img src={bgImg} className="h-full w-full object-cover" alt="Background" />
        </div>
        <div className="z-[3] text-center">
          <h1 className="text-[#227179] text-4xl sm:text-6xl">Lp Profile</h1>
        </div>
      </div>
      <LoginOrRegister />
    </>
  )
}

export default Profile