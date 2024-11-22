import React from 'react'
import logo from "../assets/foologo.png";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#212121] text-white pt-10">
                <div className="mx-auto h-full  px-10 md:px-12 grid grid-cols-1  md:grid-cols-3 max-w-8xl gap-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center space-x-2 -ml-3 mb-4">
                            <img
                              src={logo}
                                alt=""
                                className="w-28 mt-2 "
                            />
                        </div>
                        <p className="text-gray-400  text-[16px] w-3/4 leading-6">
                            Far far away, behind the word mountains, far from countries Vokalia and
                            Consonantia, there live the blind texts. Separated they.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className=" mb-4">
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <div className="flex items-start flex-wrap md:flex-row flex-col gap-2.5 justify-between">
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                            <ul className="space-y-2 xl:mr-24">
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#8fbab3] hover:text-white transition">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 ">Contact Info</h3>
                        <p className="text-gray-400 text-[16px]">
                            1122 air Way
                            <br />
                            Bhogiwal Street, Pakistan
                        </p>
                        <p className="text-[#8fbab3] mt-4">
                            <a href="#" className="hover:text-white  flex gap-1">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#8fbab3"
                                            d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                                        />
                                    </svg>
                                </span>{" "}
                                0000-000-0000
                            </a>
                        </p>
                        <p className="text-[#8fbab3] mt-2">
                            <a href="#" className="text-[#8fbab3]  flex gap-2 hover:text-white">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="#8fbab3"
                                            d="M0 59.1v393.8h512V59.1zm433.2 39.4L256 275.7L78.8 98.5zm39.4 315H39.4V118.2L256 334.8l216.6-216.6z"
                                        />
                                    </svg>
                                </span>{" "}
                                par@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className=" bg-[#0A0A0A] h-full  pb-9  mt-8  pt-6">
                    <div className=" mx-auto mt-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            Copyright © 2024 Al-Quran. All Rights Reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0.73em"
                                    height="1.5em"
                                    viewBox="0 0 486.037 1000"
                                >
                                    <path
                                        fill="gray"
                                        d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="gray"
                                        d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.13em"
                                    height="1.5em"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="gray"
                                        d="M204 6.5C101.4 6.5 0 74.9 0 185.6C0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4c0-9.3-23.7-29.1-23.7-67.8c0-80.4 61.2-137.4 140.4-137.4c68.1 0 118.5 38.7 118.5 109.8c0 53.1-21.3 152.7-90.3 152.7c-24.9 0-46.2-18-46.2-43.8c0-37.8 26.4-74.4 26.4-113.4c0-66.2-93.9-54.2-93.9 25.8c0 16.8 2.1 35.4 9.6 50.7c-13.8 59.4-42 147.9-42 209.1c0 18.9 2.7 37.5 4.5 56.4c3.4 3.8 1.7 3.4 6.9 1.5c50.4-69 48.6-82.5 71.4-172.8c12.3 23.4 44.1 36 69.3 36c106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="gray"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="gray"
                                        d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer