import React from "react";

const PhoneMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-blue-600 flex items-center justify-center z-40">
      <ul className="flex flex-col gap-10 text-white text-3xl uppercase">
        <li>Phone Menu</li>
        <li>Cities & Regions</li>
        <li>Plan ahead</li>
        <li>where to stay</li>
      </ul>
    </div>
  );
};

export default PhoneMenu;
