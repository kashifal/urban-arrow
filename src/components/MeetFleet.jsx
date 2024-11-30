import React from 'react'
import MeetFleetCard from '../components/MeetFleetCard'
import MeetGirl from '../assets/meetGirl.jpg';
import meetMan from '../assets/meetMan.jpg';

const MeetFleet = () => {
  return (
    <div className='bg-white pb-20 xl:max-w-[86%] max-w-[72rem] xl:px-0 px-6  gap-4 mx-auto'>
           <h1 className="text-4xl sm:text-[7vw]  md:text-[5.2vw]  xl:text-[68px]  leading-none ">
           Meet our fleet</h1>
    <div className="mt-10 xl:mt-20 flex overflow-auto items-start gap-4 md:gap-6 xl:gap-10">
        <MeetFleetCard MainImg={MeetGirl} heading={'Urban Arrow Family'}  hasGradient={true} />
        <MeetFleetCard MainImg={meetMan} heading={'Urban Arrow Family Smart System'} hasGradient={false} />
    </div>
    <div className="flex justify-end mt-10 md:hidden  items-center gap-1.5">
            <div className="size-10 rotate-180 opacity-50  bg-[#1A1919] rounded-full z-[4] relative flex text-white cursor-pointer hover:bg-black hover:scale-[1.05] transition-all duration-100 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
            />
          </svg>
        </div>
            <div className="size-10  bg-[#1A1919] rounded-full z-[4] relative flex text-white cursor-pointer hover:bg-black hover:scale-[1.05] transition-all duration-100 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
            />
          </svg>
        </div>
            </div>
</div>
  )
}

export default MeetFleet