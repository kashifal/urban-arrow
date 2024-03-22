import React from "react";

const MyTable = () => {
  return (
    <div>
      <div className="px-6 py-10 sm:px-6 lg:px-8">
        <div className="sm:items-center   h-screen w-full">
          <div className="sm:flex-auto">
            <h1 className="text-[20px] font-semibold leading-[23px] text-gray-900">
              EQUIPMENTS
            </h1>
          </div>
          <div className="mt-8 sm:flex sm:mt-8 relative">
            <button
              type="button"
              className="block rounded-[3px] bg-[#174172] px-3 py-2.5 text-[16px] font-[500] leading-[18px] text-white hover:bg-[#1d4b80]"
            >
              Add Equipment
            </button>
            <div className="absolute  rounded-md sm:pt-0 pt-6 sm:relative sm:left-0 sm:ml-3">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:pt-0 pt-6 pl-6">
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
                className="border-1 block rounded-[3px] border-[#979797] py-2 pl-16  pr-2 sm:pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[18px] placeholder:text-[#979797] focus:ring-2 focus:ring-inset focus:ring-[#174172] sm:text-sm sm:leading-6"
                placeholder="Search..."
              />
            </div>
            <div className="absolute right-0 flex sm:right-0 lg:right-0 bottom-0">
              <a
                href=""
                className="flex gap-2 border border-[#979797] bg-[#F4F9FF] px-3 py-2.5 text-center text-[#174172] hover:bg-[#e6ebf5]"
              >
                <button
                  type="button"
                  className="block rounded-[5px] text-[14px] font-[500] leading-[16px]"
                >
                  Column Visibility
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="sm:mt-8 centered relative   mt-28 flow-root">
            <div className="-mx-4 h-full  overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block  min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-[#F4F9FF] rounded-2xl overflow-hidden text-[14px] text-[#33363F]">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left font-[500] leading-[16px] sm:pl-6"
                        >
                          Asset ID
                        </th>
                        <th
                          scope="col"
                          className=" px-10 py-3.5 text-left font-[500]   leading-[16px]"
                        >
                          Asset Code
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left font-[500] leading-[16px]"
                        >
                          Asset Category
                        </th>
                        <th
                          scope="col"
                          className="flex gap-1 px-16 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          Asset <span className="">Device</span>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          Manufacture
                        </th>
                        <th
                          scope="col"
                          className="flex gap-1 px-20 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          Model <span className="">Number</span>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          Pictures
                        </th>
                        <th
                          scope="col"
                          className="flex gap-1 px-20 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          Technical <span className="">Description</span>
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          <span className="flex gap-1">
                            Year{" "}
                            <span className="flex">
                              of <span className="ml-2">Manufacturing</span>
                            </span>
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="text-gray-900font-[500] flex gap-1 px-20 py-3.5 text-left text-sm font-semibold leading-[16px]"
                        >
                          Serial <span className="">Number</span>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-[500] leading-[16px]"
                        >
                          Action
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y min-w-full divide-gray-300 text-[12px] text-black">
                      <tr className="">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium leading-[12px] text-[#1C7900] sm:pl-6">
                          Lindsay Walton
                        </td>
                        <td className="whitespace-nowrap px-16 py-4 leading-[12px]">
                          aa-22
                        </td>
                        <td className="whitespace-nowrap px-8 py-4 leading-[12px]">
                          Order Picker
                        </td>
                        <td className="whitespace-nowrap px-20 py-4 leading-[12px]">
                          DADA
                        </td>
                        <td className="whitespace-nowrap px-8 py-4 leading-[12px]">
                          Demo
                        </td>
                        <td className="whitespace-nowrap px-28 py-4 leading-[12px]">
                          12
                        </td>
                        <td className="relative py-4 pl-5">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                            className="h-[30px] w-[30px] rounded-full"
                          />
                        </td>
                        <td className="whitespace-nowrap px-32 py-4 leading-[12px]">
                          demo
                        </td>
                        <td className="whitespace-nowrap px-24 py-4 leading-[12px]">
                          2022
                        </td>
                        <td className="whitespace-nowrap px-32 py-4 leading-[12px]">
                          22
                        </td>
                        <td className="px- whitespace-nowrap py-4 leading-[12px]">
                          .....
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className=" w-full mt-auto left-0 absolute bottom-0 bg-green-400">
              <div className="w-full   flex ">
                <div className="flex-1 ">
                  <a
                    href="#"
                    className="text-[#174172] hover:underline text-[14px] font-[400] leading-[16px]"
                  >
                    Showing 1 to 4 of 4 entries
                  </a>
                </div>
                <div className="ml-auto">
                  <div className="text-[#174172] flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 cursor-pointer"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="font-semibold text-[16px] leading-[19px] pl-3"
                    >
                      Back
                    </a>
                    <div className="ml-4 flex space-x-3">
                      <a
                        href="#"
                        className="rounded-[5px] border border-[#174172] bg-[#174172] px-[14px] py-1 -mt-1.5"
                      >
                        <button className=" font-semibold text-[16px] leading-[19px]  text-white">
                          1
                        </button>
                      </a>
                      <a
                        href="#"
                        className="rounded-[5px] border border-[#174172] px-[12px] py-1 -mt-1.5"
                      >
                        <button className="text-[#174172] font-semibold text-[16px] leading-[19px]  ">
                          2
                        </button>
                      </a>
                      <a
                        href="#"
                        className="rounded-[5px] border border-[#174172] px-[12px] py-1 -mt-1.5"
                      >
                        <button className="text-[#174172] font-semibold text-[16px] leading-[19px]  ">
                          3
                        </button>
                      </a>
                      <a
                        href="#"
                        className="text-[#174172] font-semibold text-[16px] leading-[19px]  "
                      >
                        ...
                      </a>
                      <a
                        href="#"
                        className="rounded-[5px] border border-[#174172] px-[12px] py-1 -mt-1.5"
                      >
                        <button className="text-[#174172] font-semibold text-[16px] leading-[19px]  ">
                          7
                        </button>
                      </a>
                    </div>
                    <a
                      href="#"
                      className="font-semibold text-[16px] pl-6 leading-[19px]"
                    >
                      Next
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 cursor-pointer ml-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTable;
