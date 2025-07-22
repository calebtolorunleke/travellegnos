import React from "react";
import trip from "../images/trip.svg";

const TripBuilder = () => {
  return (
    <main className="text-black   items-center justify-center w-full py-[10rem] px-12">
      <div className="w-full grid grid-cols-2 gap-5 py-10 bg-white h-full">
        <div className="grid grid-cols-2 py-15 px-12 items-cente border-r-1 border-gray-500 h-full justify-center w-full px-8">
          <img src={trip} className="w-50 h-50" alt="" />
          <div className="flex flex-col gap-3">
            <h1 className="uppercase text-4xl font-bold">lagos trip builder</h1>
            <h1 className="text-lg">
              Customize your perfect getaway to the Lone Star State.
            </h1>
            <button className="border border-2  py-1 rounded-2xl">
              Start Planning
            </button>
          </div>
        </div>
        <div className="flex flex-col  gap-5  items-center justify-center">
          <h1 className="text-4xl font-bold">STAY IN TOUCH</h1>
          <p className="text-lg">Sign up for Lagos email newsletter</p>
          <div className="flex items-center flex-row gap-2">
            <input
              type="email"
              placeholder="Example@email.com"
              className="border-b-2 border-black pb-2 w-[20rem]"
            />
            <button className="border border-2 px-5 py-1 rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TripBuilder;
