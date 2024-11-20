import React, { useState,useEffect } from "react";
import "../css/FAQ.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import abc from "../assets/abc.png";
import asset9 from "../assets/asset 9.svg";
import asset7 from "../assets/asset 7.svg";
import { useTranslation } from "react-i18next"; // Import i18n hook

const NavBar = () => {
  const [lang, setLang] = useState('')
  const { t, i18n} = useTranslation(); // Hook for translation
  const cartItems = useSelector((state) => state.cart.items);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle language change

  const changeLanguage = (lang) => {
    setLang(lang)
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Save the selected language to localStorage
  };

  useEffect(() => {
    
    console.log(localStorage.getItem('language')) // Save the selected language to localStorage
    setLang(localStorage.getItem('language'))
    
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="bg-[rgb(14,14,14)] px-2 h-[70px]">
          <div className="max-w-[68rem] mx-auto flex items-center justify-between pt-[14px] relative">
            <div className="col-span-3 xs:col-span-2 sm:col-span-6 md:col-span-3">
              <Link to="/shop" className="flex cursor-pointer items-center">
                <img
                  src={abc}
                  className="h-8 filter w-auto brightness-[-100]"
                  alt=""
                />
              </Link>
            </div>

            {/* Navbar Links (visible on larger screens) */}
            <div className="hidden lg:block">
              <div className="flex text-white gap-10 justify-around text-[0.9rem] pt-[8px]">
                <Link to="/shop">{t("shop")}</Link>
                <Link to="/contact">{t("contact")}</Link>
                <Link to="/reviews">{t("reviews")}</Link>
                <Link to="/faq">{t("faq")}</Link>
                <Link to="/terms">{t("terms")}</Link>
              </div>
            </div>

            {/* Language and Cart */}
            <div className="text-white flex items-center gap-5 sm:gap-0 xs:col-span-6 md:col-span-4">
              <div className="flex">
                {/* <div className="sm:flex hidden border border-[#646363] rounded-full px-[10px] py-[2px] mt-[6px]">
                  <p className="text-[14px]">Solana</p>
                  <img
                    src={asset9}
                    className="h-[18px] ml-[6px] mt-[2px]"
                    alt=""
                  />
                </div> */}
                <select
                value={lang}
                onChange={(e) => changeLanguage(e.target.value)}
                  id="countries"
                  className="bg-gray-800  text-white text-xs rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* <option selected>Lang</option> */}
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                
                </select>
                <Link to={"/checkout"} className="flex mt-[6px]">
                  <img src={asset7} className="h-[24px] ml-[20px]" alt="" />
                  <p className="ml-[10px]">{cartItems.length}</p>
                </Link>
              </div>

              {/* Mobile Drawer */}
              <div className="relative text-white z-[9999] md:hidden block">
                <div className="cursor-pointer" onClick={toggleDrawer}>
                  <RxHamburgerMenu size={30} />
                </div>

                <div
                  className={`fixed top-0 right-0 w-64 h-full bg-[#101010] p-6 transform transition-transform duration-300 ${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="flex flex-col items-start space-y-4">
                    {["Home", "Features", "Pricing", "Faq"].map(
                      (item, index) => (
                        <a
                          href="#"
                          className="px-4 py-2 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full text-sm font-medium"
                          key={index}
                        >
                          {t(item.toLowerCase())} {/* Translate menu items */}
                        </a>
                      )
                    )}

                    {/* Language Selection */}
                    <div
                      className="flex w-full border border-[#646363] rounded-full justify-center px-[10px] py-[2px] mt-[6px]"
                      onClick={() => handleLanguageChange("es")}
                    >
                      <p className="text-[14px]">Español</p>
                      <img
                        src={asset9}
                        className="h-[18px] ml-[6px] mt-[2px]"
                        alt=""
                      />
                    </div>
                    <div
                      className="flex w-full border border-[#646363] rounded-full justify-center px-[10px] py-[2px] mt-[6px]"
                      onClick={() => handleLanguageChange("fr")}
                    >
                      <p className="text-[14px]">Français</p>
                      <img
                        src={asset9}
                        className="h-[18px] filter ml-[6px] mt-[2px]"
                        alt=""
                      />
                    </div>
                    <div
                      className="flex w-full border border-[#646363] rounded-full justify-center px-[10px] py-[2px] mt-[6px]"
                      onClick={() => handleLanguageChange("en")}
                    >
                      <p className="text-[14px]">English</p>
                      <img
                        src={asset9}
                        className="h-[18px] ml-[6px] mt-[2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div
                  className={`fixed inset-0 -z-[4] bg-black opacity-50 transition-opacity duration-300 ${
                    isDrawerOpen
                      ? "opacity-50 block"
                      : "opacity-0 hidden pointer-events-none"
                  }`}
                  onClick={toggleDrawer}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
