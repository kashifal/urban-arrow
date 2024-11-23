import React from 'react'
import Circle from '../assets/homeheadercircle.png'
import BottomCircle from '../assets/bottomCircle.png'
import CenterCircle from '../assets/circles.png'
import { IoArrowDownOutline } from "react-icons/io5";

const HomeHeader = () => {
  return (
    <div className='bg-[#DBE8E7] absolute top-0 pt-20 md:pt-40 h-full   w-[100%] '>
       <div className="overflow-hidden z-[2] h-fit w-full">
       <div className="absolute -top-[45%] overflow-hidden -right-[18%] ">
            <img src={Circle} alt="" />
        </div>
        <div className="absolute -top-[25%] overflow-hidden left-[18%] ">
            <img src={CenterCircle} alt="" />
        </div>
        <div className="absolute top-[60%] overflow-hidden -left-[38%] ">
            <img src={BottomCircle} alt="" />
        </div>
       </div>
       <div className="max-w-7xl relative z-[4] mx-auto md:px-6 px-4 h-[90%] w-full flex items-center">
       <div className="sm:w-1/2 ">
       <h1 className="text-[#6F948D] text-5xl sm:text-7xl">Online</h1>
       <h1 className="text-[#404B48] text-5xl sm:text-7xl  leading-snug font-semibold">Yoga Classes</h1>
       <p className="pt-4 text-[#547670] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptas dicta quaerat ipsa ab, ea accusamus.</p>
       <button className='px-9 py-4 mt-10 bg-[#F1615A] text-white font-medium text-sm rounded-full cursor-pointer'>Browse Courses</button>
       </div>
       <div className="absolute text-[#6F948D] cursor-pointer bottom-0">
       <IoArrowDownOutline size={40} />

       </div>
       </div>
       <div className="absolute w-[40%] bottom-0 right-0">
        <img src=" yuijo" alt="PIC HERE" />
       </div>
    </div>
  )
}

export default HomeHeader