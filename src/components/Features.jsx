import React from "react";

const Features = () => {
  return (
    <main className="h-screen grid lg:grid-cols-3 textiwhite pt-20 items-center text-white  font-bold text-4xl">
      <div className="group  flex gap-3 flex-col w-full justify-center items-center border-b-2 lg:border-r-2  h-full hover:bg-black/30">
        <span className="uppercase">things to do</span>
        {/* <span className="text-sm text-center opacity-0 hover:opacity-100"> */}
        <span className="text-sm text-center hidden lg:group-hover:block ">
          Whether you're an antiqurer, foodie or historian, Texas has the
          perfect activity for you.
        </span>
        <button className="text-sm border  px-2 py-1 rounded-3xl lg:hidden cursor-pointer  group-hover:block">
          View More
        </button>
      </div>
      <div className="group  flex gap-3 flex-col w-full justify-center items-center border-b-2 lg:border-r-2  h-full hover:bg-black/30 ">
        <span className="uppercase">CITIES & REGIONS</span>
        {/* <span className="text-sm text-center opacity-0 hover:opacity-100"> */}
        <span className="text-sm text-center hidden lg:group-hover:block">
          Fill up the tank for a tour across Lagos, Nigeria diverse, you might
          forget that it's all in one place
        </span>
        <button className="text-sm border border-2 px-2 cursor-pointer py-1 rounded-3xl lg:hidden group-hover:block">
          View More
        </button>
      </div>{" "}
      <div className="group  flex gap-3 flex-col w-full justify-center items-center h-full hover:bg-black/30">
        <span className="uppercase">PLAN AHEAD</span>
        {/* <span className="text-sm text-center opacity-0 hover:opacity-100"> */}
        <span className="text-sm text-center hidden lg:group-hover:block">
          Planning your trip should be just as enjoyable as your actual stay.
        </span>
        <button className="text-sm cursor-pointer border border-2 px-2 py-1 rounded-3xl lg:hidden group-hover:block">
          View More
        </button>
      </div>
    </main>
  );
};

export default Features;
