import React from 'react'
import NavBar from '../components/NavBar'
import FooterOther from '../components/FooterOther'

const Contact = () => {
  return (
    <>
 <div className="bg-black text-white  min-h-screen">
    <NavBar />
  <div className="max-w-[68rem] mx-auto pt-10 pb-20 lg:flex-col lg:justify-center lg:items-center">
    <div className="grid grid-cols-1 lg:p-0 mt-0 mb-0 bg-transparent rounded-lg gap-y-0 gap-x-8 md:p-5">
      <div className="bg-[#17161B] p-10 md:p-9 rounded-lg w-full">
        {/* Title Section */}
        <div className="flex items-center justify-start mb-2">
          <h1 className="text-4xl font-bold leading-tight text-white text-start">
            Get in Touch
          </h1>
        </div>
        {/* Subtitle Section */}
        <div className="flex items-center justify-start">
          <p className="text-base font-normal leading-6 text-white text-start">
            Got a question or need some help? Get in touch. We'd love to hear
            from you.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-transparent ">
      <div className="px-0 my-0 ">
        <div className="flex justify-center">
          <div className="flex justify-center ">
            <form
              className="flex-col items-center justify-center w-full p-4 bg-transparent border-none shadow-none rounded-2xl"
              onsubmit="return false"
              noValidate="novalidate"
            >
              {/* Title Field */}
              <div className="mb-6 ">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-white "
                >
                  Title
                </label>
                <div className="relative ">
                  <input
                    className=" h-10 mt-2 w-full sm:w-[45vw] bg-gray-800 text-white text-sm border border-gray-700 placeholder-white rounded-full px-4"
                    autoComplete="off"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="e.g : Terms and Conditions for dropshipper"
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className=" mb-7">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white "
                >
                  Email
                </label>
                <div className="relative ">
                  <input
                    className=" h-10  w-full sm:w-[45vw] mt-2 bg-gray-800 text-white text-sm border border-gray-700 placeholder-white rounded-full px-4"
                    autoComplete="off"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              {/* Invoice Id Field */}
              <div className=" mb-7">
                <label
                  htmlFor="invoice_id"
                  className="text-sm font-medium text-white "
                >
                  Invoice Id (optional field)
                </label>
                <div className="relative ">
                  <input
                    className=" h-10  w-full sm:w-[45vw] mt-2 bg-gray-800 text-white text-sm border border-gray-700 placeholder-white rounded-full px-4"
                    autoComplete="off"
                    type="text"
                    id="invoice_id"
                    name="invoice_id"
                    placeholder="Enter 12 digit invoice id"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className=" mb-7">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white "
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What would you like to ask?"
                    className=" h-32 mt-2 bg-gray-800 text-white text-sm  w-full sm:w-[45vw] border border-gray-700 placeholder-white rounded-lg p-4"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="flex w-full justify-stretch">
                <button
                  type="submit"
                  id="ripple-button-y1bxz368hhx"
                  className=" flex justify-center items-center bg-indigo-500 text-white rounded-full py-3  w-full sm:w-[45vw]"
                >
                  <div className=" d-none">
                    <div className="lds-ellipsis spin-2 ">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                  <span className="ripple-button-label">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   <FooterOther />
  </div>


 </div>
    </>
  )
}

export default Contact