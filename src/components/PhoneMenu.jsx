import React from "react";

const PhoneMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-screen py-40 bg-blue-900 flex items-center justify-center z-40">
      <ul className="flex flex-col gap-10 text-white text-3xl uppercase">
        <li className="flex flex-row items-center gap-2 cursor-pointer">
          <span>things to do</span>
          <span className="text-5xl font-bold">+</span>
        </li>
        <li className="flex flex-row items-center gap-2 cursor-pointer">
          <span>cities & regions</span>
          <span className="text-5xl font-bold">+</span>
        </li>
        <li className="flex flex-row items-center gap-2 cursor-pointer">
          <span>plan ahead</span>
          <span className="text-5xl font-bold">+</span>
        </li>
        <li className="flex flex-row items-center gap-2 cursor-pointer">
          <span>where to stay</span>
          <span className="text-5xl font-bold">+</span>
        </li>
      </ul>
    </div>
  );
};

export default PhoneMenu;
