import React from 'react'
import CardImg from '../assets/cardHomeImg.jfif'

const InstructorCard = () => {
  return (
    <>
    <div className="flex flex-col gap-8 items-center">
        <img src={CardImg} className='w-full ' alt="" />
        <div className="text-center">
            <h1 className="font-medium text-2xl mb-3 text-[#227179]">Kashif ChaiWala</h1>
            <a href="#" className="text-[#B6B6B6] text-[18px] border-b border-[#B6B6B6] pb-1">2 Classes</a>
        </div>
    </div>
    </>
  )
}

export default InstructorCard