import React from 'react'
import Img from '../assets/yoga1.jpg'

const ClassesCard = () => {
  return (
    <div className="">
    <div className=" mx-2 my-2 items-center sm:mx-auto bg-white flex-col justify-center ">
      {/* Image Section with Hover Content */}
      <div className="relative group overflow-hidden ">
        <img
        src={Img}
          alt="Yamas and Niyamas"
          className="max-w-[100%] w-full  sm:h-[27rem] object-cover transition duration-300 group-hover:scale-110   "
        />
        <div className="absolute inset-0 cursor-context-menu  bg-white  opacity-0  group-hover:opacity-90 flex flex-col items-center justify-center transition duration-300">
          {/* Hover Content */}
          <div>
            <div className="text-[#547670] cursor-pointer text-xl flex   mb-2">
              <i className="icon-book-open mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1.2.4em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#227179"
                    d="M952.08 1.552L529.039 116.144c-10.752 2.88-34.096 2.848-44.815-.16L72.08 1.776C35.295-8.352-.336 18.176-.336 56.048V834.16c0 32.096 24.335 62.785 55.311 71.409l412.16 114.224c11.025 3.055 25.217 4.751 39.937 4.751c10.095 0 25.007-.784 38.72-4.528l423.023-114.592c31.056-8.4 55.504-39.024 55.504-71.248V56.048c.016-37.84-35.616-64.464-72.24-54.496zM479.999 956.943L71.071 843.887c-3.088-.847-7.408-6.496-7.408-9.712V66.143L467.135 177.68c3.904 1.088 8.288 1.936 12.864 2.656zm480.336-122.767c0 3.152-5.184 8.655-8.256 9.503L544 954.207v-775.92c.592-.144 1.2-.224 1.792-.384L960.32 65.775v768.4h.016zM641.999 366.303c2.88 0 5.81-.367 8.69-1.184l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.472c3.968 14.128 16.815 23.344 30.783 23.344m.002 192.001c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473c-4.783-17.008-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.457c3.968 14.127 16.815 23.36 30.783 23.36m.002 192c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16L633.38 687.487c-17.024 4.816-26.944 22.464-22.16 39.472c3.968 14.113 16.815 23.345 30.783 23.345M394.629 303.487l-223.934-63.025c-16.912-4.72-34.688 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.937 63.024a31.8 31.8 0 0 0 8.687 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-16.993-5.12-34.657-22.16-39.473m.002 191.999l-223.934-63.025c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.8 31.8 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-16.993-5.12-34.657-22.16-39.473m.002 191.999L170.699 624.46c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.8 31.8 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-17.008-5.12-34.657-22.16-39.473"
                  />
                </svg>
              </i>
              <span>6 Lessons</span>
            </div>
            <div className="text-[#547670] cursor-pointer text-xl flex  mb-2">
              <i className="icon-people mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1.2.4em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#227179"
                    d="m462.541 316.3l-64.344-42.1l24.774-45.418A79.1 79.1 0 0 0 432.093 192v-72a103.941 103.941 0 0 0-174.609-76.477L279.232 67a71.989 71.989 0 0 1 120.861 53v72a46.8 46.8 0 0 1-5.215 21.452L355.962 284.8l89.058 58.274a42.16 42.16 0 0 1 19.073 35.421V432h-72v32h104v-85.506a74.06 74.06 0 0 0-33.552-62.194"
                  />
                  <path
                    fill="#227179"
                    d="m318.541 348.3l-64.343-42.1l24.773-45.418A79.1 79.1 0 0 0 288.093 224v-72A104.21 104.21 0 0 0 184.04 47.866C126.723 47.866 80.093 94.581 80.093 152v72a78 78 0 0 0 9.015 36.775l24.908 45.664L50.047 348.3A74.02 74.02 0 0 0 16.5 410.4L16 496h336.093v-85.506a74.06 74.06 0 0 0-33.552-62.194m1.552 115.7H48.186l.31-53.506a42.16 42.16 0 0 1 19.073-35.421l88.682-58.029l-39.051-71.592A46.84 46.84 0 0 1 112.093 224v-72a72 72 0 1 1 144 0v72a46.8 46.8 0 0 1-5.215 21.452L211.962 316.8l89.058 58.274a42.16 42.16 0 0 1 19.073 35.421Z"
                  />
                </svg>
              </i>
              <span>76 Students Enrolled</span>
            </div>
            <div className="text-[#547670] cursor-pointer text-xl flex ">
              <i className="icon-bulb mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1.2.4em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#227179"
                    d="M7 13.33a7 7 0 1 1 6 0V16H7zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0"
                  />
                </svg>
              </i>
              <a href="#" className="">
                Pranayama
              </a>
              ,{" "}
              <a href="#" className="">
                Vinyasa Yoga
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Content Section */}
    <div className="p-4 sm:max-w-[22rem] mx-5  -mt-10 relative shadow-md sm:mx-auto bg-white ">
      {/* Author Section */}
      <div className="text-sm text-gray-400 mb-1">
        <span className="font-semibold">With</span>
        <a href="#" className=" ml-1 text-gray-400">
          Mildred Reed
        </a>
      </div>
      {/* Course Title */}
      <h3 className="text-lg font-semibold text-[#227179] hover:text-teal-500 transition">
        <a href="#">Yamas and Niyamas</a>
      </h3>
      {/* Price */}
      <div className="mt-2 text-lg font-bold text-black">$39</div>
    </div>
  </div>
  
  )
}

export default ClassesCard