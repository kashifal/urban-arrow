import React, { useState } from 'react'
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
        <>
        <div className='bg-[#F3F3F3] py-24 text-[#383838]'>
            <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
                <h1 className="text-4xl font-bold">Leave us your info</h1>
                <p className="text-[#747880] mt-4">and we will get back to you.</p>
                <form onSubmit={submitHandler} className='flex mt-20 flex-col gap-6 w-full'>
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 w-full">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className='border-b-2 bg-transparent outline-none py-3 placeholder:font-normal border-[#D7D7D7]'
                            placeholder='Full Name*'
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className='border-b-2 bg-transparent outline-none py-3 placeholder:font-normal border-[#D7D7D7]'
                            placeholder='Email*'
                        />
                    </div>
                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        className='border-b-2 bg-transparent outline-none py-3 placeholder:font-normal border-[#D7D7D7]'
                        placeholder='Subject*'
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Message*'
                        className='border-b-2 bg-transparent outline-none py-3 placeholder:font-normal border-[#D7D7D7]'
                        rows={4}
                    />
                    <button className="bg-[#547670] px-9 hover:bg-opacity-90 py-3.5 rounded w-fit text-white font-bold text-sm uppercase ">Submit now</button>
                </form>
            </div>
        </div>
        <div className="bg-[#F7D8BC] px-6 py-6 text-center text-[#777780]">
            <h1 className="sm:text-lg font-normal">
            Please install and activate the 
            <a href="#" className="hover:text-[#227691] text-[#3DBCAC]">
            "Wp Google Map Plugin"
            </a>
             or 
             <a href="" className="hover:text-[#227691] text-[#3DBCAC]">
             "Wp Google Maps"
             </a>
              plugin to show the map.
            </h1>
        </div>
        <div className="bg-white gap-8 text-[#1E1E1E] min-h-[30vh] flex items-center justify-center flex-wrap">
            <a href="#" className="">
            <IoMail  size={25} />
            </a>
            <a href="#" className="">
            <FaFacebookF size={20} />
            </a>
            <a href="#" className="">
            <FaSkype size={25} />
            </a>
            <a href="#" className="">
            <FaTwitter size={25} />
            </a>
        </div>
        </>
    )
}

export default ContactForm
