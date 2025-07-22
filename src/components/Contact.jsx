import React from "react";
import flag from "../images/flag.png";

const Contact = () => {
  return (
    <main className="w-full bg-blue-900 py-3">
      <div flex>
        <div className="flex flex-row gap-1 items-center justify-end px-12 ">
          <div className="bg-white flex flex-row px-3 py-3 gap-2 items-center rounded">
            <img src={flag} className="w-12 h-8" alt="" />
            <span className="font-bold">EN ></span>
          </div>
        </div>
        <div className="px-12 flex items-center flex-col gap-5">
          <ul className="flex flex-row gap-10 text-white">
            <li>travel & meeting pros</li>
            <li>contact</li>
            <li>sitemap</li>
            <li>accessibility</li>
          </ul>
          <h1 className="text-white">PRIVACY POLICY & TERMS OF USE</h1>
        </div>
      </div>
    </main>
  );
};

export default Contact;
