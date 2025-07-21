import React from "react";
import logo from "../assets/logo.png";

const Splashscreen = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <img
        src={logo}
        alt="Logo"
        className="w-32 animate-bounce h-32 animate-ease-pulse"
      />
      <h1 className="text-4xl animate-bounce font-bold text-white mt-4">
        The Travel Legnos
      </h1>
    </div>
  );
};

export default Splashscreen;
