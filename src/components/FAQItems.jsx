import React from 'react'
import { IoAdd } from "react-icons/io5";

const FAQItems = ({question, answer}) => {
  return (
    <>
    <div className="px-6 py-6 cursor-pointer border-white/5 border bg-white/5 backdrop-blur-3xl rounded-2xl">
    <div className="flex items-center justify-between gap-2">
        <h1 className="sm:text-lg text-sm font-semibold">{question}</h1>
        <div className="w-10 h-10 shrink-0 cursor-pointer text-white rounded-xl bg-white/5 backdrop-blur-3xl flex items-center justify-center">
        <span className='text-white'>
        <IoAdd />

        </span>
        </div>
    </div>
    <p className="text-sm pt-6 hidden font-medium">
        {answer}
    </p>
    </div>
    </>
  )
}

export default FAQItems