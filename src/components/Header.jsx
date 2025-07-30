import React, { useState } from "react";
import searchIcon from "../images/icons/searchicon.png";
import share from "../images/icons/shareicon.png";
import logo from "../assets/logo.png";
import menuu from "../images/icons/menuicon.png";
import cancel from "../images/icons/cancelicon.png";
import PhoneMenu from "./PhoneMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  return (
    <main className="h-screen flex flex-col">
      <div className="flex fixed w-full flex-row justify-between items-center text-white py-3 px-12 bg-gray-600 z-50">
        <span className="flex flex-row gap-1 items-center cursor-pointer">
          <img src={logo} alt="" className="w-15 h-15" />
          <span className="text-2xl uppercase">legnos</span>
        </span>
        <ul className="hidden xl:flex flex-row font-bold items-center gap-10">
          <li className="cursor-pointer">
            <a href="/prod">Things To Do</a>
          </li>
          <li className="cursor-pointer">
            <a href="/prod">Cities & Region</a>
          </li>
          <li className="cursor-pointer">
            <a href="/prod">Plan Ahead</a>
          </li>
          <li className="cursor-pointer">
            <a href="/prod">Where To Stay</a>
          </li>
        </ul>
        <ul className="flex  flex-row gap-5 items-center">
          {openSearch && (
            <input
              type="text"
              className="border-b-2 px-2 hove:border-2 focus:outline-none focus:bg-gray-700 focus:shadow-xl"
              placeholder="Search...."
            />
          )}

          <button
            value={openSearch}
            onClick={() => setopenSearch(openSearch ? false : true)}
          >
            {openSearch ? (
              <img src={cancel} className="w-5 h-5 cursor-pointer" alt="" />
            ) : (
              <img src={searchIcon} className="w-5 h-5 cursor-pointer" alt="" />
            )}
          </button>

          <span className="flex flex-row gap-1 cursor-pointer">
            <img src={share} className="w-5 h-5 cursor-pointer" alt="" />
            <span>Share</span>
          </span>
          <button className="hidden lg:block bg-blue-900 px-3 rounded-3xl border  border-2 border-white py-1 cursor-pointer">
            <a href="/prod">Search for Hotels</a>
          </button>
          <button
            className="xl:hidden"
            value={menuu}
            onClick={() => setMenu(menu ? false : true)}
          >
            {menu ? (
              <img src={cancel} className="w-10 h-8 cursor-pointer" />
            ) : (
              <img src={menuu} className="w-10 h-8 cursor-pointer " />
            )}
          </button>
        </ul>
      </div>
      {menu && <PhoneMenu />}
      <div className="w-full h-full flex items-center justify-center  flex-col items-center">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[3rem] lg:text-[7rem] text-white font-bold uppercase">
            travel
          </span>
          <span className="flex flex-row gap-1 items-center cursor-pointer">
            <img src={logo} alt="" className="w-30 h-30" />
            <span className="text-[3rem] lg:text-[7rem] text-white font-bold uppercase">
              legnos
            </span>
          </span>
        </div>
        <div className="justify-center  bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {/* Oval shape with bounce animation */}
          <div className="w-6 flex items-end justify-center h-10 bg-gray-700 rounded-full animate-bounce text-white">
            O
          </div>

          {/* Scroll text or line */}
          <span className="mt-2 text-sm text-white tracking-widest uppercase">
            Scroll
          </span>
        </div>
      </div>
    </main>
  );
};

export default Header;
