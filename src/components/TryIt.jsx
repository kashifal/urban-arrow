import React from 'react'
import Animate from './Animate'

const TryIt = () => {
  return (
  
    <div
    id="next-section"
    className='bg-white text-[#1A1919] pt-48 md:pb-48 pb-10 max-w-[72rem] xl:max-w-[86%] xl:px-0 px-6 grid lg:grid-cols-2 gap-4 mx-auto'>
       <Animate time={0.3}>
        <h1 className="text-4xl sm:text-[7vw]  md:text-[5.2vw]  xl:text-[68px]  leading-none ">Try it once,<br />
        love it forever.</h1>
        </Animate>
        <div className="">
           <div className="lg:w-[90%] text-black flex flex-col gap-7 font-medium mt-2 ml-auto">
           <p className="">
           <Animate time={0.2}>
            At Urban Arrow, we build top-of-the-line electric cargo bikes. We were the first to do it, actually. Needless to say, we’re crazy about them. But there’s one thing that is even more important to us: the person riding that bike. Owners and riders like you. With every bike we build, we have you and your specific transport needs in mind.
            </Animate>
            </p>
            <p>
            <Animate time={0.3}>
            Whatever it is you care about, we got you covered. Our mission is to improve your life and to improve life in (sub-)urban areas with cargo bikes. Making things cleaner. Quieter. And more efficient.
            </Animate>
            </p>
           </div>
        </div>
      </div>
    
  )
}

export default TryIt