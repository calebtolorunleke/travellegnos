import React from "react";

const ProductionControl = () => {
  return (
    <div className="w-screen h-screen flex flex-col uppercase items-center justify-center bg-black">
      <p className="text-4xl font-bold text-white">Production Contorl Only</p>
      <a href="/" className="text-blue-400 underline">
        Go back home
      </a>
    </div>
  );
};

export default ProductionControl;
