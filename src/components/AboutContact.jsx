import React from 'react'
import AboutContactInfo from './AboutContactInfo'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const AboutContact = () => {
  return (
    <div className='bg-[#547670]  min-h-[70vh] py-20 flex flex-col  justify-center h-full text-white'>
        <div className="max-w-7xl w-full grid sm:grid-cols-2 md:grid-cols-3 h-full gap-x-4 gap-y-10 mx-auto px-6 ">
            <AboutContactInfo icon={<FaPhoneAlt />} title={'Phone'} desc={'A wonderful serenity has taken possession of my entire soul, like these.'} link={'+1-23456789'} />
            <AboutContactInfo icon={<MdOutlineEmail  />} title={'Email'} desc={'A wonderful serenity has taken possession of my entire soul, like these.'} link={'Contact@probspace.com'} />
            <AboutContactInfo icon={<FaLocationArrow />} title={'Location'} desc={'A wonderful serenity has taken possession of my entire soul, like these.'} link={'View On Google Map'} />
        </div>
    </div>
  )
}

export default AboutContact