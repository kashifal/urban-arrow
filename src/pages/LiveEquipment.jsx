import React from "react";

import SidebarLayout from "../layouts/SidebarLayout";
import Heading from "../components/Heading";
import SortIcon from "../icons/SortIcon";
import PrintIcon from "../icons/PrintIcon";
import Card from "../components/Card";
import GaugeChart from "react-gauge-chart";

//
import Passenger from "../assets/Passenger.png";
//
import CustomeCard from "../components/CustomeCard";
import Progress from "../components/Progress";

const LiveEquipment = () => {
  const percentage = 0.4;
  return (
    <SidebarLayout>
      <div className=" px-8 py-6 bg-white rounded-[20px]">
        <div className="flex sm:items-center gap-4 flex-wrap justify-between">
          <Heading title="Welcome to Dashboard , 21 - February - 2024" />
          <div className="flex items-center gap-2">
            <button className="bg-white sm:ml-0 ml-auto text-base border border-[#174172] font-medium flex gap-2 items-center text-[#174172] px-6 py-2 rounded-[3px]">
              <PrintIcon />
              <span className="">Print</span>
            </button>
            <button className="bg-[#174172] sm:ml-0 ml-auto text-base font-medium flex gap-3 text-white px-6 py-2 rounded-[3px]">
              <span className="">Assign Task</span>
            </button>
          </div>
        </div>

        <div className="w-full   gap-6 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:grid-cols-3 h-full   mt-4">
          <CustomeCard>
            <h1 className="font-semibold text-base text-[#164473]">Speed</h1>
            <div className="">
              <GaugeChart
                id="gauge-chart1"
                rOfLevels={10}
                percent={percentage}
                arcsLength={[0.6, 0.2, 0.15]}
                textColor="red"
                hideText={true}
                colors={["#32CD32", "#FFFF00", "#FF0000"]}
                needleColor="#164473"
              />
              <p className="text-sm text-center text-black font-semibold">
                {percentage * 100} Km/h
              </p>
            </div>
          </CustomeCard>
          <CustomeCard>
            <h1 className="font-semibold text-base text-[#164473]">Operator</h1>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww"
              className="h-[150px] shadow-2xl  w-[150px] object-cover rounded-full "
              alt=""
            />

            <h1 className="font-semibold text-base text-black">Mike Johns</h1>
          </CustomeCard>
          <CustomeCard>
            <h1 className="font-semibold text-base text-[#164473]">
              Seat Belt
            </h1>
            <div className="h-[90px] border border-gray-200 flex items-center justify-center shadow-2xl  w-[90px] object-cover rounded-full ">
              <img src={Passenger} alt="" />
            </div>

            <h1 className="font-semibold text-base text-black">
              Seatbelt Fasten
            </h1>
          </CustomeCard>{" "}
          {/* Custome Car 4 Line 2 */}
          <CustomeCard>
            <h1 className="font-semibold text-base text-[#164473]">Battery</h1>
            <div className="flex items-center gap-4">
              <div className=" flex items-center gap-3 flex-col">
                <div className="battery relative flex items-center justify-end flex-col h-40 w-16 bg-white border-4 p-[1px] border-[#3BC642] rounded-xl">
                  <div className="w-full h-[80%] bg-[#3A7FE1] rounded-b-lg"></div>
                  <div className="absolute w-5 h-3 rounded-t-md bg-[#3BC642] -top-4 border border-white"></div>
                  <div className="absolute bottom-14 text-base font-bold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 text-base font-bold text-white">
                    80%
                  </div>
                </div>
                <h1 className="text-sm font-medium">Battery Voltage</h1>
              </div>
              <div className="flex items-center flex-col">
                {" "}
                <div className="flex">
                  <div className="flex items-center gap-2 flex-col">
                    <h1 className="text-sm font-medium">Battery Voltage</h1>
                    <Progress pro="35" color="#3BC642" />
                  </div>
                  <div className="flex items-center gap-2 flex-col">
                    <h1 className="text-sm font-medium">Battery Voltage</h1>
                    <Progress pro="20" color="#FF0000" />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <Progress pro="25" color="#E2B124" />
                  <h1 className="text-sm font-medium">Battery Voltage</h1>
                </div>
              </div>
            </div>
            <p></p>
          </CustomeCard>{" "}
          <CustomeCard>
            <h1 className="font-semibold text-base text-[#164473]">
              Session Violations
            </h1>
            <div class="py-6 text-left">
              <div class="pt-4 px-8">
                <div class="flex text-[#E2B124] gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[22px] h-[22px] "
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <h3 class="text-black font-[500] text-[14px] leading-[16px] pt-1 pl-6">
                    SHARP TURNS
                  </h3>

                  <p class="font-[500] text-[16px] text-center pt-1 pl-[78px] px-5 text-[#A83642] leading-[18px]">
                    3
                  </p>
                </div>

                <div class="flex text-[#E2B124] gap-4 pt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[22px] h-[22px] "
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.39 12.79a34 34 0 0 1 4.25.25c.06-2.72-.18-5.12-.64-6.04c-.13-.27-.31-.5-.5-.7l-8.07 6.92c1.36-.22 3.07-.43 4.96-.43M7.46 17c.13 1.74.39 3.5.81 5h2.07c-.29-.88-.5-1.91-.66-3c0 0 2.32-.44 4.64 0c-.16 1.09-.37 2.12-.66 3h2.07c.44-1.55.7-3.39.83-5.21a34.58 34.58 0 0 0-4.17-.25c-1.93 0-3.61.21-4.93.46M12 7S9 7 8 9c-.34.68-.56 2.15-.63 3.96l6.55-5.62C12.93 7 12 7 12 7m6.57-1.33l-1.14-1.33l-3.51 3.01c.55.19 1.13.49 1.58.95zm2.1 10.16c-.09-.03-1.53-.5-4.03-.79c-.01.57-.04 1.16-.08 1.75c2.25.28 3.54.71 3.56.71zm-13.3-2.87l-3.94 3.38l.89 1.48c.02-.01 1.18-.46 3.14-.82c-.11-1.41-.14-2.8-.09-4.04"
                    />
                  </svg>

                  <h3 class="text-black font-[500] text-[14px] leading-[16px] pt-1 pl-6">
                    SEAT BELT
                  </h3>

                  <p class="font-[500] text-[16px] text-center pt-1 pl-[106px] px-5 text-[#A83642] leading-[18px]">
                    0
                  </p>
                </div>

                <div class="flex text-[#E2B124] gap-4 pt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[22px] h-[22px] "
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0 0 60.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 0 0 496 290.56C496 156.55 388.54 48 256 48m-16 64h32v64h-32Zm-96 192H80v-32h64Zm21.49-83.88l-45.25-45.26l22.62-22.62l45.26 45.25ZM278.6 307.4a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49L320 224Zm45.28-109.91l45.26-45.25l22.62 22.62l-45.25 45.26ZM432 304h-64v-32h64Z"
                    />
                  </svg>

                  <h3 class="text-black whitespace-nowrap font-[500] text-[14px] leading-[16px] pt-1 pl-6">
                    OVER SPEED
                  </h3>

                  <p class="font-[500] text-[16px] text-center pt-1 pl-[90px] px-5 text-[#A83642] leading-[18px]">
                    4
                  </p>
                </div>

                <div class="flex text-[#E2B124] gap-4 pt-6 pb-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[22px] h-[22px] "
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 2c1.78 0 2.67 2.16 1.42 3.42C7.16 6.67 5 5.78 5 4a2 2 0 0 1 2-2M5.5 7h3a2 2 0 0 1 2 2v5.5H9V22H5v-7.5H3.5V9a2 2 0 0 1 2-2M21 8h-6v2h6m0 1h-3v2h3m0-11h-6v2h6m0 1h-3v2h3m0 7h-6v2h6m0 4h-6v2h6m0-5h-3v2h3"
                    />
                  </svg>

                  <h3 class="text-black font-[500] text-[14px] leading-[16px] pt-1 pl-6">
                    IMPACTS
                  </h3>

                  <p class="font-[500] text-[16px] text-center pt-1 pl-[114px] px-5 text-[#A83642] leading-[18px]">
                    1
                  </p>
                </div>
              </div>
            </div>
          </CustomeCard>{" "}
          <CustomeCard>
            <h1 className="font-semibold text-base text-[#164473]">
              Session Information
            </h1>
            <div className="">
              <div class="grid grid-cols-2 gap-4">
                <div class="border border-[#0000001a] rounded-[10px] bg-white shadow-lg px-3 py-3">
                  <p class="text-[#979797] text-[10px]  leading-[11px] font-medium">
                    Login Time
                  </p>
                  <div class="inline-flex gap-8  pt-4">
                    <h3 class="font-semibold text-[14px] leading-[16px]">
                      10:45 AM
                    </h3>
                    <div class="bg-[#3a80e133] rounded-[5px] px-1 py-1 -mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[29px] h-[29px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288T12 18m0 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border border-[#0000001a] rounded-[10px] bg-white shadow-lg px-3 py-3">
                  <p class="text-[#979797] text-[10px]  leading-[11px] font-medium">
                    Login Time
                  </p>
                  <div class="inline-flex gap-8  pt-4">
                    <h3 class="font-semibold text-[14px] leading-[16px]">
                      10:45 AM
                    </h3>
                    <div class="bg-[#3a80e133] rounded-[5px] px-1 py-1 -mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[29px] h-[29px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288T12 18m0 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border border-[#0000001a] rounded-[10px] bg-white shadow-lg px-3 py-3">
                  <p class="text-[#979797] text-[10px]  leading-[11px] font-medium">
                    Login Time
                  </p>
                  <div class="inline-flex gap-8  pt-4">
                    <h3 class="font-semibold text-[14px] leading-[16px]">
                      10:45 AM
                    </h3>
                    <div class="bg-[#3a80e133] rounded-[5px] px-1 py-1 -mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[29px] h-[29px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288T12 18m0 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border border-[#0000001a] rounded-[10px] bg-white shadow-lg px-3 py-3">
                  <p class="text-[#979797] text-[10px]  leading-[11px] font-medium">
                    Login Time
                  </p>
                  <div class="inline-flex gap-8  pt-4">
                    <h3 class="font-semibold text-[14px] leading-[16px]">
                      10:45 AM
                    </h3>
                    <div class="bg-[#3a80e133] rounded-[5px] px-1 py-1 -mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[29px] h-[29px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288T12 18m0 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1></h1>
          </CustomeCard>{" "}
        </div>
      </div>
    </SidebarLayout>
  );
};

export default LiveEquipment;
