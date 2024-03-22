import React from "react";

const Card = () => {
  return (
    <div className="border border-[#0000001a]  bg-[#F4F9FF] shadow px-4  rounded-[10px]">
      <div className="py-2">
        <h3 className="font-semibold text-[16px] pt-3 text-center leading-[18px] text-[#164473]">
          ASST-00001
        </h3>
      </div>
      <div className="py-1">
        <div className="px-4 py-3 border relative items-center justify-between border-[#0000001a] shadow-sm bg-[#F4F9FF] rounded-[5px] flex gap-28">
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
          <p className=" font-[400] pl-5 text-[12px] leading-[14px] ">
            Manufacture - Model - YOM
          </p>
        </div>
        <div className="flex gap-[18px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Asset Specification:
          </p>
          <p className=" font-[400] pl-[27px] text-[12px] leading-[14px] ">
            Technical Description
          </p>
        </div>
        <div className="flex gap-[37px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Reading Hours:
          </p>
          <p className=" font-[400] text-[12px] pl-[30px] leading-[14px] ">
            902349234
          </p>
        </div>
        <div className="flex gap-[18px] ">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Power Source Detail:
          </p>
          <p className=" font-[400] text-[12px] pl-[20px] leading-[14px] ">
            Lithium Battery - 48V 600 AH
          </p>
        </div>
        <div className="flex gap-[53px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Battery SOC:
          </p>
          <p className=" font-[400] text-[12px] pl-[30px] leading-[14px] ">
            49%
          </p>
        </div>
        <div className="flex gap-[64px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">Location:</p>
          <p className=" font-[400] text-[12px] pl-[38px] leading-[14px] ">
            Hawskbay Karachi
          </p>
        </div>
        <div className="flex gap-[52px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Session Duration:
          </p>
          <p className=" font-[400] text-[12px] pl-[5px] leading-[14px] ">
            3 Hours 50 Mins
          </p>
        </div>
        <div className="flex gap-[17px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Session Idle Time:
          </p>
          <p className=" font-[400] text-[12px] pl-[38px] leading-[14px] ">
            1 Hours 20 Mins
          </p>
        </div>
        <div className="flex gap-[3px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Session Movement Time:
          </p>
          <p className=" font-[400] text-[12px] pl-[13px] leading-[14px] ">
            2 Hours 30 Mins
          </p>
        </div>
        <div className="flex gap-[10px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Seat Belt Violation:
          </p>
          <p className=" font-[400] text-[12px] pl-[38px] leading-[14px] ">0</p>
        </div>
        <div className="flex gap-[21px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Impact Violation:
          </p>
          <p className=" font-[400] text-[12px] pl-[38px] leading-[14px] ">2</p>
        </div>
        <div className="flex gap-[2px]">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Over Speed Violation:
          </p>
          <p className=" font-[400] text-[12px] pl-[31px] leading-[14px] ">3</p>
        </div>
        <div className="flex gap-[4px] py-2">
          <p className=" font-[500] text-[12px] leading-[14px] ">
            Sharp Turn Violation:
          </p>
          <p className=" font-[400] text-[12px] pl-[33px] leading-[14px] ">0</p>
        </div>
        <div className="-ml-4 relative pt-6">
          <div className="border-[#F4F9FF]  border-t flex">
            <a
              className="bg-[#3A7FE1] py-4 px-10 gap-3 rounded-bl-[10px] flex"
              href="#"
            >
              <img
                alt=""
                className="w-7 h-5 mt-1"
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

export default Card;
