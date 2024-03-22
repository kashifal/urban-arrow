import React from "react";
import SidebarLayout from "../layouts/SidebarLayout";

const Maintenance = () => {
  return (
    <SidebarLayout>
      <div className="  s rounded-[10px] relative">
        <div className="mx-4 pl-2  py-6">
          <div className="">
            <h3 className=" font-medium text-[20px] leading-[23px] ">
              MAINTENANCE SETTINGS
            </h3>
          </div>
          <div className="py-12 sm:inline-flex   w-full justify-between gap-20">
            <div className="isolate inline-flex rounded-md ">
              <a href="#" className="">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-md bg-[#F4F9FF] px-3  py-3.5 text-[14px] leading-[16px] font-medium text-[#174172] ring-1 ring-inset ring-[#979797] "
                >
                  Daily Asset Checklist
                </button>
              </a>
              <a href="#" className="">
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center bg-white px-6 py-3.5 text-[14px] leading-[16px] font-medium text-[#174172] ring-1 ring-inset ring-[#979797] "
                >
                  Service Provider
                </button>
              </a>
              <a href="#" className="">
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-6 py-3.5 text-[14px] leading-[16px] font-medium text-[#174172] ring-1 ring-inset ring-[#979797] "
                >
                  Service Interval
                </button>
              </a>
            </div>
            <div className="flex items-center sm:pt-0 pt-8 lg:pl-[200px]">
              <div className="inline-flex">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultValue=""
                    className="sr-only peer "
                  />
                  <div className="relative w-11 h-6 bg-gray-200 border border-[#174172]   rounded-[12.5px]  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full items-center  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#174172] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 " />
                </label>
                <p className="text-[14px] font-medium leading-[16px] mt-1 pl-6 text-[#174172] ">
                  Enable Daily Asset Checklist
                </p>
              </div>
            </div>
          </div>
          <div className="py-3 w-full  ">
            <div className="flex-auto">
              <h1 className="text-[20px] font-medium leading-[23px] text-gray-900">
                MAINTENANCE CHECKLIST
              </h1>
            </div>
            <div className="mt-8 sm:flex justify-between sm:mt-8">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="block rounded-[3px] bg-[#174172] px-3.5 py-2.5 text-[16px] font-[500] leading-[18px] text-white hover:bg-[#1d4b80]"
                >
                  Add Checklist
                </button>
                <div className=" sm:left-3 flex mt-4 sm:mt-0 rounded-md sm:relative absolute">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[20px] w-[20px] sm:mt-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#979797"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="border-1 block rounded-[3px] border-[#979797] py-2 pl-16 sm:pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[18px] placeholder:text-[#979797] focus:ring-2 focus:ring-inset focus:ring-[#174172] sm:text-sm sm:leading-6"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="flex  lg:pl-[410px] sm:pl-14   sm:pt-0 pt-20">
                <a
                  href=""
                  className=" gap-2 rounded-[5px] border border-[#979797] bg-[#F4F9FF] px-3 py-2.5 text-center text-[#174172] hover:bg-[#e6ebf5]"
                >
                  <button type="button" className="flex gap-6 ">
                    <p className="text-[14px] mt-[1px] font-[500] leading-[16px]">
                      Show
                    </p>
                    <p className="rounded-[2px] bg-white px-[3px] py-[1px]  border border-[#979797] text-[14px] font-[500] leading-[16px]">
                      10
                    </p>
                    <p className="text-[14px] mt-[1px] font-[500] leading-[16px]">
                      Entries
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-hidden sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-10">
                  <div className="overflow-hidden  rounded-[5px]">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-[#F4F9FF]">
                        <tr className="">
                          <th
                            scope="col"
                            className="py-3.5  pl-3 pr-0 text-left leading-[16px] text-[14px] font-medium text-[#33363F] sm:pl-6"
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="lg:pl-[380px] sm:pl-[210px] lg:px-40 py-3.5 text-center leading-[16px] pl-[70px] text-[14px] font-medium text-[#33363F]"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="py-3.5  gap-1 lg:pl-[200px] sm:pl-[120px] pl-[30px] text-center leading-[16px] text-[14px] font-medium text-[#33363F]"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-[12px] leading-[14px] font-medium text-[#1C7900] text-center sm:pl-6">
                            22
                          </td>
                          <td className="whitespace-nowrap font-medium text-center sm:pl-[230px] pl-[90px] px-3 py-4 text-[12px] leading-[14px] text-black">
                            Rameez
                          </td>
                          <td className="whitespace-nowrap px-20 py-4 font-medium text-center lg:pl-[250px] sm:pl-[180px] pl-[90px] text-[12px] leading-[14px] text-black">
                            ....
                          </td>
                        </tr>
                        {/* More people... */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20   items-center justify-between sm:flex lg:gap-40 sm:gap-10">
            <a
              href=""
              className="fonr-[400] text-[14px] sm:text-left text-center leading-[16px] text-[#174172] sm:ml-0 ml-16 "
            >
              Showing 1 to 4 of 4 entries
            </a>
            <div className=" lg:pl-[300px] sm:pt-0 pt-10 -ml-3 sm:pl-[50px]">
              <div className="text-[#174172] inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
                  />
                </svg>
                <a
                  href="#"
                  className="font-semibold text-[16px] leading-[19px] -mt-[3px] ml-3"
                >
                  Back
                </a>
                <button className="font-semibold text-[16px] leading-[19px] bg-[#174172] -mt-[6px] ml-5 border border-[#174172] px-3 py-1 rounded-[5px] text-white">
                  1
                </button>
                <button className="font-semibold text-[16px] leading-[19px]  -mt-[6px] ml-2 border border-[#174172] px-3 py-1 rounded-[5px] text-[#174172]">
                  2
                </button>
                <button className="font-semibold text-[16px] leading-[19px]  -mt-[6px] ml-2 border border-[#174172] px-3 py-1 rounded-[5px] text-[#174172]">
                  3
                </button>
                <p className="px-2">...</p>
                <button className="font-semibold text-[16px] leading-[19px]  -mt-[6px] ml-2 border border-[#174172] px-3 py-1 rounded-[5px] text-[#174172]">
                  7
                </button>
                <a
                  href="#"
                  className="font-semibold text-[16px] leading-[19px] -mt-[3px] ml-5"
                >
                  Next
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className=" ml-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Maintenance;
