import React from 'react'
import StoriesCard from './StoriesCard'

const Stories = () => {
  return (
    <div className="bg-[#F0E600] min-h-[20vw] h-full xl:min-h-[55vw]">
    <div className='xl:max-w-[86%] text-[#000] mx-auto py-16 md:py-32 max-w-[72rem] px-6'>
        <div className="flex items-center justify-between gap-2">
            <h1 className="text-[7vw] md:text-[45px] xl:text-[65px]  leading-none ">We’ve got stories to tell</h1>
            <div className="md:flex hidden items-center gap-1.5">
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
        <div className="mt-20   gap-3">
            <StoriesCard />
        </div>
        <div className="mt-14 flex justify-between md:justify-end">
        <button className="px-5 py-3 rounded-full mt-2 border-black border hover:bg-black text-black hover:text-white">
         All stories
        </button>
        <div className="md:hidden flex items-center gap-1.5">
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
    </div>

    </div>
  )
}

export default Stories