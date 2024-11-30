import React from 'react'
import Logo from '../assets/FooLogo.svg'
import TrustPilot from '../assets/TrustPilot.svg'
import Animate from './Animate';


const Footer = () => {
            return (
    <Animate>
    <div className='bg-[#FAFAF0] px-4 pb-12 pt-20'>
        <a href="#" className="mx-auto w-fit flex justify-center">
            <img src={Logo} alt="" className="" />
        </a>
        <div className="sm:flex grid grid-cols-1 items-start justify-between mt-12 xl:max-w-[86%] mx-auto max-w-[72rem]  gap-5">
           <div className="flex justify-between items-start gap-12 flex-wrap">
            <div className="flex flex-col gap-1">
                <a href="#" className="text-[25px] block hover:underline">Configurator</a>
                <a href="#" className="text-[25px] block hover:underline">Find your dealer</a>
                <a href="#" className="text-[25px] block hover:underline">Configurator</a>
            </div>
            <div className="sm:hidden  button-font block">
                <h4 className="text-[#9A9A94] text-2xl">Products</h4>
                <div className="flex flex-col mt-4 gap-5">
                    <a href="#" className="block hover:underline">Family</a>
                    <a href="#" className="block hover:underline">Accessories</a>
                </div>
            </div>
            </div>
          
            <div className="sm:grid  button-font flex justify-between flex-wrap grid-cols-2 sm:mt-0 mt-10 md:grid-cols-3 2xl:grid-cols-5 gap-x-5 2xl:gap-x-7 gap-y-10">
            <div className="sm:block  button-font hidden">
                <h4 className="text-[#9A9A94]  text-2xl">Products</h4>
                <div className="flex flex-col  mt-4 gap-5">
                    <a href="#" className="block  button-font hover:underline">Family</a>
                    <a href="#" className="block  button-font hover:underline">Accessories</a>
                </div>
            </div>
            <div className="">
                <h4 className="text-[#9A9A94] text-2xl">About us</h4>
                <div className="flex flex-col mt-4 gap-5">
                    <a href="#" className="block  button-font hover:underline">About us</a>
                    <a href="#" className="block  button-font hover:underline">Community</a>
                    <a href="#" className="block  button-font hover:underline">Careers</a>
                </div>
            </div>
            <div className="">
                <h4 className="text-[#9A9A94] text-2xl">Support</h4>
                <div className="flex flex-col mt-4 gap-5">
                    <a href="#" className="flex  button-font items-center gap-[1px] hover:underline">Service Center 
                    <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>
                    </a>
                    <a href="#" className="block  button-font hover:underline">Reviews</a>
                    <a href="#" className="block  button-font hover:underline">Documents</a>
                    <a href="#" className="block  button-font hover:underline">Contact</a>
                </div>
            </div>
            <div className="">
                <h4 className="text-[#9A9A94] text-2xl">Dealers</h4>
                <div className="flex flex-col mt-4 gap-5">
                <a href="#" className="block  button-font hover:underline">Become a dealer</a>
                    <a href="#" className="flex  button-font items-center gap-[1px] hover:underline">Dealer Portal
                    <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>

                    </a>
                </div>
            </div>
            <div className="">
                <h4 className="text-[#9A9A94] text-2xl">Terms</h4>
                <div className="flex flex-col mt-4 gap-5">
                    <a href="#" className="block  button-font hover:underline">General terms and conditions</a>
                    <a href="#" className="block  button-font hover:underline">Social media consent statement 📸</a>
                    <a href="#" className="block  button-font hover:underline">Privacy Policy</a>
                    <a href="#" className="block  button-font hover:underline">Cookies 🍪</a>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-wrap items-start justify-between mt-16 xl:max-w-[86%] mx-auto max-w-[72rem]  gap-5">
            <img src={TrustPilot} />
            <div className="md:flex hidden flex-col text-[#9A9A94] text-sm items-center">
            <p className="">© 2024 Smart Urban Mobility B.V. All rights reserved</p>
            <a href="#" className="flex  button-font underline items-center gap-[1px] hover:underline">Cookie Settings
            <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>

                    </a>
            </div>
            <div className="flex  items-center gap-5">
               <a href="#" className="">
               <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
               </a>
               <a href="#" className="">
               <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
               </a>
               <a href="#" className="">
               <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
               </a>
               <a href="#" className="">
               <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
               </a>
            </div>
        </div>
        <div className="md:hidden flex mt-10 flex-col text-[#9A9A94] text-sm items-center">
            <p className="">© 2024 Smart Urban Mobility B.V. All rights reserved</p>
            <a href="#" className="flex  button-font underline items-center gap-[1px] hover:underline">Cookie Settings
            <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>

                    </a>
            </div>
    </div>
    </Animate>
  )
}

export default Footer