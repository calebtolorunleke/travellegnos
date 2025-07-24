import React from "react";
import flag from "../images/flag.png";
import facebook from "../images/icons/facebook.jpg";
import x from "../images/icons/x.png";
import pinterest from "../images/icons/pinterest.png";
import instagram from "../images/icons/instagram.png";
import youtube from "../images/icons/youtube.png";

const Contact = () => {
  return (
    <main className="w-full bg-blue-900 py-3">
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
        <h1 className="text-white">privacy policy & terms of use</h1>
      </div>
      <div>
        <div className="bg-black">
          <img src={pinterest} alt="pinterest" />
          {/* <img src={} alt="" /> */}
          <img src={instagram} alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Contact;
