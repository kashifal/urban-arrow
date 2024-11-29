import React from 'react'
import MeetFleetCard from '../components/MeetFleetCard'
import MeetGirl from '../assets/meetGirl.jpg';
import meetMan from '../assets/meetMan.jpg';

const MeetFleet = () => {
  return (
    <div className='bg-white pb-20 xl:max-w-[84%] max-w-[72rem] lg:px-0 px-6  gap-4 mx-auto'>
    <h1 className="text-[7vw] md:text-[4.9vw] xl:text-[71.3px]  leading-none ">Meet our fleet</h1>
    <div className="mt-10 xl:mt-16 flex items-start gap-6 xl:gap-10">
        <MeetFleetCard MainImg={MeetGirl} heading={'Urban Arrow Family'}  hasGradient={true} />
        <MeetFleetCard MainImg={meetMan} heading={'Urban Arrow Family Smart System'} hasGradient={false} />
    </div>
</div>
  )
}

export default MeetFleet