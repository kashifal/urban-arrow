import React from "react";

const AddEquipment = ({ close }) => {
  return (
    <div
      className={`fixed left-0 top-0 bottom-0 right-0 z-50 bg-[#F4F9FF] overflow-y-auto`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="">
        <div className="">
          <div className="py-5 sm:px-12 relative px-6 bg-[#174172] rounded-tr-[10px] rounded-tl-[10px]">
            <div className="flex gap-32 sm:gap-40">
              <h3 className="text-[#FBFAFD] font-[700] text-[20px] leading-[23px] ">
                ADD EQUIPMENT
              </h3>

              <div className="absolute mt-1 sm:right-12 right-8">
                <button onClick={close}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] cursor-pointer h-[20px] bg-[#FF0000]"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M14.95 6.46L11.41 10l3.54 3.54l-1.41 1.41L10 11.42l-3.53 3.53l-1.42-1.42L8.58 10L5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid max-w-full gap-8 px-12 py-10 sm:grid-cols-2">
            <div className="">
              <div>
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Equipment Code
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Equipment Code"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Manufacture
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Manufacture"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Image(Maximum 300x300)
                </label>
                <div className="mt-2">
                  <div className=" flex justify-center rounded-[5px] border border-[#17417233] px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="flex mt-4 text-sm leading-6 text-gray-600">
                        <label
                          for="file-upload"
                          className="relative font-semibold bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 "
                        >
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">Drang & Drop images</p>
                      </div>
                      <button className="bg-[#174172] px-4 py-1.5 rounded-[2px] mt-2 text-white text-[14px] font-[500] leading-[16px]">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Year of Manufacture
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Year of Manufacture"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Meter Hours
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Meter Hours"
                  />
                </div>
              </div>

              <div className="py-6">
                <div>
                  <label
                    for="account-number"
                    className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                  >
                    Device Id
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="account-number"
                      id="account-number"
                      className="block w-full rounded-md border-0 pl-4 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]   sm:text-sm sm:leading-6"
                      placeholder="Default"
                    />
                    <div className="pointer-events-none absolute text-[#979797] inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] cursor-context-menu h-[18px]"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Certification Expiry Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="dob"
                    id="email"
                    className="block px-3 w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="py-6">
                <div>
                  <label
                    for="account-number"
                    className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                  >
                    Purchase Condition
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="account-number"
                      id="account-number"
                      className="block w-full rounded-md border-0 pl-4 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]   sm:text-sm sm:leading-6"
                      placeholder="Select Purchase Condition"
                    />
                    <div className="pointer-events-none absolute text-[#979797] inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] cursor-context-menu h-[18px]"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-">
                <div>
                  <label
                    for="account-number"
                    className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                  >
                    Battery Type
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="account-number"
                      id="account-number"
                      className="block w-full rounded-md border-0 pl-4 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]   sm:text-sm sm:leading-6"
                      placeholder="Select Battery Type"
                    />
                    <div className="pointer-events-none absolute text-[#979797] inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] cursor-context-menu h-[18px]"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Battery Voltage
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Select Battery Voltage"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Currency Purchased
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Select Currency Purchased"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-">
                <div>
                  <label
                    for="account-number"
                    className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                  >
                    Equipment Category
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="account-number"
                      id="account-number"
                      className="block w-full rounded-md border-0 pl-4 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-[#17417233] placeholder:text-black focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]   sm:text-sm sm:leading-6"
                      placeholder="Order Picker"
                    />
                    <div className="pointer-events-none absolute text-[#979797] inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] cursor-context-menu h-[18px]"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Model
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Model"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Technical Description
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Technical Description"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Serial No
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Serial No"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Power Source
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                    placeholder="Enter Power Source"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label
                  for="email"
                  className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                >
                  Equipment Certification(Maximum 300x300)
                </label>
                <div className="mt-2">
                  <div className=" flex justify-center rounded-[5px] border border-[#17417233] px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="flex mt-4 text-sm leading-6 text-gray-600">
                        <label
                          for="file-upload"
                          className="relative font-semibold bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 "
                        >
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">Drang & Drop images</p>
                      </div>
                      <button className="bg-[#174172] px-4 py-1.5 rounded-[2px] mt-2 text-white text-[14px] font-[500] leading-[16px]">
                        Browse
                      </button>
                    </div>
                  </div>

                  <div className="pt-6">
                    <label
                      for="email"
                      className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                    >
                      Equipment Purchase Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="dob"
                        id="email"
                        className="block px-3 w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <label
                      for="email"
                      className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                    >
                      Purchase Cost
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                        placeholder="Enter Purchase Cost"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <label
                      for="email"
                      className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                    >
                      Battery AH
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                        placeholder="Enter Battery AH"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <label
                      for="email"
                      className="block text-[14px] font-medium leading-[16px] text-[#00061D]"
                    >
                      Battery Installation Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="dob"
                        id="email"
                        className="block px-3 w-full rounded-[5px] border-0 pl-4 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-[#17417233] placeholder:text-[#979797] focus:ring-2 focus:ring-inset placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16px]  sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 lg:pl-[380px] sm:pl-[50px] pt-20">
                    <a
                      href="#"
                      className="bg-[#A72941] px-6 py-2 rounded-[5px] shadow-lg "
                    >
                      <button className="font-[500] text-[20px] leading-[23px] text-center text-white">
                        Close
                      </button>
                    </a>

                    <a
                      href="#"
                      className="bg-[#174172] px-6 py-2 rounded-[5px] shadow-lg "
                    >
                      <button className="font-[500] text-[20px] leading-[23px] text-center text-white">
                        Submit
                      </button>
                    </a>
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

export default AddEquipment;
