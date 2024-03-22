import { SignalSlashIcon } from "@heroicons/react/24/outline";
import React from "react";

const NoSignalCard = () => {
  return (
    <div className="z-10 border relative border-[#0000001a]  bg-[#D9D9D980] shadow px-4  rounded-[10px]">
      <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <SignalSlashIcon className="w-[90px] h-[90px] text-white" />
      </div>
      <div className="py-2">
        <h3 className="font-semibold text-[16px] pt-3 text-center leading-[18px] text-[#164473]">
          ASST-00001
        </h3>
      </div>
      <div className="py-1">
        <div className="px-4 py-3 border relative items-center justify-between border-[#0000001a] shadow-sm bg-[#D9D9D980] rounded-[5px] flex gap-28">
          <div className="pt-3">
            <img
              alt=""
              className="w-[48px] ml-4 h-[48px] rounded-[23px]"
              src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h3 className="font-[600] text-[16px] pt-2.5 leading-[18px] text-center ">
              Ishan Khan
            </h3>
          </div>

          <img
            alt=""
            className="w-[100px] absolute right-4 h-[100px] rounded-full"
            src="https://images.unsplash.com/photo-1572195577046-2f25894c06fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-[64px]  py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Asset Detail:
          </p>
        </div>
        <div className="flex gap-[18px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Asset Specification:
          </p>
        </div>
        <div className="flex gap-[37px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Reading Hours:
          </p>
        </div>
        <div className="flex gap-[18px] ">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Power Source Detail:
          </p>
        </div>
        <div className="flex gap-[53px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Battery SOC:
          </p>
        </div>
        <div className="flex gap-[64px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">Location:</p>
        </div>

        <div className="relative pt-6 -ml-4">
          <div className="border-[#F4F9FF]  border-t flex">
            <a
              className="bg-[#3A7FE1] py-4 px-10 gap-3 rounded-bl-[10px] flex"
              href="#"
            >
              <img
                alt=""
                className="h-5 mt-1 w-7"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAoCAYAAABTsMJyAAAAAXNSR0IArs4c6QAAAolJREFUaEPtmc+rDmEUxz9fUqwU/wBu1ih1FcXGSinZce2QncWVspCrLCQslIUFt/zopig2Nn5EUfIXyK+FP+FaEOV4j57RY8zMOzPvnfG89c5y5plzzuec7/PMPOcRHV5mtg24BGwFPgO3gAuSvnXhVl0YdZtmtg+4C6zI+Tgn6XQXfjuBMbNp4HUI+APwENgLbAz3piW9WWqgrmBmgYsh2LOS5sxsCnAwv2YlXU4CxsxWASeBQ8A6YHlFYEUwZcO/hHnlsI3nVePKmNlK4AmwvWZmPwIPcjIb9uorYLekr8MGxs/bwMwN5veZYOQdcA/4kXO6E9hVEchz4EXB8w3AQWAZ8EjSnj5hpiR9yjs0sxi4KJ7f0it6YGY3g3wXJa3uDUaDiEoC8uzerghkRtKdknf/JKLMfpndkWRWAeN2D0RLcezfP57zkmwsYJpIo0qiSVRmAhMyEC8ek8o0kcUomavjZxT7naxmdYIuGzN2MGa2Bbgftgf+2/I2gxsrGDPbBDwD1gSAU5LOjx2MmW0GnkYgN4Ajkn4mC2Nmvqr+9YUP0noMrA2B/wPi95OSmZkdG2T+CnANOO5ZDyC+bcikdR04Glckycrk/pg96Kth/5OB+N5mfxFIipXxCe7zIpNTvAoXSisekJTMQnaLgOaBw2UVSVJmUVAxUC2Q5GSWk4x3ZLwRuDCsIklXpu0vTXJzpi1I0jJrAzWpTMjaZAuQNQGbbmvryO6/yWzQFy5sAtYJumJz5mc4M0C/TcBBK/V9aM9+HwUgerf39qw3zv1XfscSARSZeRka541OAhovAOFb4EDZkcb6IUcaTZgXw5HGiV6ONJpE1vfYVpXpO8i6/iYwdTPV97hfI9l5OB7O1bEAAAAASUVORK5CYII="
              />
              <button className="text-[12px] font-[400] leading-[16px] text-[white] ">
                Assign Task
              </button>
            </a>
            <a
              className="  text-[#A72941] py-4 pl-14 px-12 gap-3 flex"
              href="#"
            >
              <svg
                className="w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z"
                  fill="currentColor"
                />
              </svg>
              <button className="text-[12px] font-[600] leading-[16px] text-[#A72941] ">
                Lock
              </button>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NoSignalCard;
