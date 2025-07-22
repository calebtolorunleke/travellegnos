import React from "react";
import searchIcon from "../images/icons/searchicon.png";
import share from "../images/icons/shareicon.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex fixed w-full flex-row justify-between items-center text-white py-3 px-12 bg-gray-600">
        <span className="flex flex-row gap-1 items-center cursor-pointer">
          <img src={logo} alt="" className="w-15 h-15" />
          <span className="text-2xl uppercase">legnos</span>
        </span>
        <ul className="flex flex-row font-bold items-center gap-10">
          <li className="cursor-pointer">Things To Do</li>
          <li className="cursor-pointer">Cities & Region</li>
          <li className="cursor-pointer">Plan Ahead</li>
          <li className="cursor-pointer">Where To Stay</li>
        </ul>
        <ul className="flex flex-row gap-5 items-center">
          <img src={searchIcon} className="w-5 h-5" alt="" />
          <span className="flex flex-row gap-1 cursor-pointer">
            <img src={share} className="w-5 h-5" alt="" />
            <span>Share</span>
          </span>
          <button className="bg-blue-900 px-3 rounded-3xl border  border-2 border-white py-1 cursor-pointer">
            Search for Hotels
          </button>
        </ul>
      </div>
      <div className="w-full h-full flex items-center justify-center  flex-col items-center">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[7rem] text-white font-bold uppercase">
            travel
          </span>
          <span className="flex flex-row gap-1 items-center cursor-pointer">
            <img src={logo} alt="" className="w-30 h-30" />
            <span className="text-[7rem] text-white font-bold uppercase">
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
