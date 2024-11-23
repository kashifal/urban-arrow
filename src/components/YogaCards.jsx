import React from 'react'
import img from '../assets/yoga1.jpg'
const YogaCards = () => {
  return (
    <>
    <div className=" bg-white overflow-hidden border border-gray-300   rounded">
  <div className="relative group overflow-hidden">
    <div className="bg-black/60 absolute  group-hover:opacity-100 group-hover:z-[4] transition-all duration-600  top-0 left-0 w-full h-full z-[0] opacity-0 "></div>
    <img
      src={img}
      alt="Meditation"
      className=" h-96 object-cover w-full  overflow-hidden transform transition duration-500 group-hover:scale-105"
    />
  </div>
  <div className="p-4 flex justify-between">
    <h1 className="text-xs text-[#3dbca8]">Meditation, Pranayama </h1>
    <div className="flex items-center gap-[2px] text-sm text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-yellow-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
        />
      </svg>
      <span className="ml-1">(1)</span>
    </div>
  </div>
  <div className=" pb-4  -mt-2">
    <h2 className="text-xl pl-4 text-[#227179] mb-3 pb-5 border-b border-gray-300 w-full  ">
      Mastering Anxiety
    </h2>
    <div className="pl-4 pb-1">
      <div className="flex items-center  justify-between mb-3">
       <span className='text-lg'>$39</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            className="mr-3"
            height="1.2.4em"
            viewBox="0 0 24 24"
          >
            <path
              fill="gray"
              stroke="gray"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
            />
            <path
              fill="gray"
              d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
              opacity="0.5"
            />
          </svg>
        </span>
      </div>
      <div className="text-sm text-gray-500">
        <p className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="gray"
              d="M952.08 1.552L529.039 116.144c-10.752 2.88-34.096 2.848-44.815-.16L72.08 1.776C35.295-8.352-.336 18.176-.336 56.048V834.16c0 32.096 24.335 62.785 55.311 71.409l412.16 114.224c11.025 3.055 25.217 4.751 39.937 4.751c10.095 0 25.007-.784 38.72-4.528l423.023-114.592c31.056-8.4 55.504-39.024 55.504-71.248V56.048c.016-37.84-35.616-64.464-72.24-54.496zM479.999 956.943L71.071 843.887c-3.088-.847-7.408-6.496-7.408-9.712V66.143L467.135 177.68c3.904 1.088 8.288 1.936 12.864 2.656zm480.336-122.767c0 3.152-5.184 8.655-8.256 9.503L544 954.207v-775.92c.592-.144 1.2-.224 1.792-.384L960.32 65.775v768.4h.016zM641.999 366.303c2.88 0 5.81-.367 8.69-1.184l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.472c3.968 14.128 16.815 23.344 30.783 23.344m.002 192.001c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473c-4.783-17.008-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.457c3.968 14.127 16.815 23.36 30.783 23.36m.002 192c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16L633.38 687.487c-17.024 4.816-26.944 22.464-22.16 39.472c3.968 14.113 16.815 23.345 30.783 23.345M394.629 303.487l-223.934-63.025c-16.912-4.72-34.688 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.937 63.024a31.8 31.8 0 0 0 8.687 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-16.993-5.12-34.657-22.16-39.473m.002 191.999l-223.934-63.025c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.8 31.8 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-16.993-5.12-34.657-22.16-39.473m.002 191.999L170.699 624.46c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.8 31.8 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-17.008-5.12-34.657-22.16-39.473"
            />
          </svg>
          <span>6 Lessons</span>
        </p>
        <div className="flex gap-2 items-start justify-start mt-2 w-fit">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1.2.4em"
            className="mt-1"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="gray"
              d="M2048 1484q0 54-20 102t-58 87l-370 369l-370-369q-38-38-58-86t-20-103t21-104t57-85t84-58t105-21q50 0 97 17t84 53q38-35 84-52t97-18q56 0 104 21t85 57t57 86t21 104m-128 0q0-29-11-54t-30-45t-44-30t-55-11q-57 0-98 41l-82 82l-82-82q-20-20-45-30t-53-11q-29 0-54 11t-45 30t-30 44t-11 55q0 57 41 98l279 279l279-279q41-41 41-98m-768-332q-87-65-181-96t-203-32q-134 0-251 49t-203 136t-136 204t-50 251H0q0-121 35-232t100-206t156-166t206-115q-55-34-99-82t-76-104t-49-119t-17-128q0-106 40-199t110-162T569 41T768 0t199 40t162 110t110 163t41 199q0 65-17 127t-48 119t-76 105t-100 82q66 23 121 58t109 82q-33 11-61 28t-56 39m0-640q0-79-30-148t-83-122t-122-83t-149-31q-79 0-148 30t-122 83t-83 122t-31 149q0 79 30 148t83 122t122 83t149 31q79 0 148-30t122-83t83-122t31-149"
            />
          </svg>
          <span>
            {" "}
            <span>50 Students Enrolled</span>
          </span>
        </div>
        <p />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default YogaCards