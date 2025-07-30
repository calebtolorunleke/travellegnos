import React from "react";
import flag from "../images/flag.png";
import facebook from "../images/icons/facebook.png";
import x from "../images/icons/x.png";
import pinterest from "../images/icons/pinterest.png";
import instagram from "../images/icons/instgrm.png";
import youtube from "../images/icons/youtube.png";
import company1 from "../images/icons/company1.png";
import company2 from "../images/icons/company2.png";
import company3 from "../images/icons/company3.png";
import company4 from "../images/icons/company4.png";
import company5 from "../images/icons/company5.png";
import company6 from "../images/icons/company6.png";
import company7 from "../images/icons/company7.png";
import company8 from "../images/icons/company8.png";
import company9 from "../images/icons/company9.png";
// import twitter from "../images/icons/";

const Contact = () => {
  return (
    <main className="w-full bg-blue-800 py-3 border-b-5 border-white">
      <div className="flex flex-row gap-1 items-center justify-end px-12 ">
        <div className="bg-white flex flex-row px-3 py-3 gap-2 items-center rounded">
          <img src={flag} className="w-12 h-8" alt="" />
          <span className="font-bold">
            EN <span className="ml-1">&gt;</span>
          </span>
        </div>
      </div>
      <div className="px-12 uppercase text-2xl font-bold flex items-center flex-col gap-5">
        <ul className="flex flex-row gap-10 text-white">
          <li>travel & meeting pros</li>
          <li>contact</li>
          <li>sitemap</li>
          <li>accessibility</li>
        </ul>
        <h1 className="text-white">privacy policy & terms of use</h1>
      </div>
      <div className="flex flex-row  gap-2 border-r-2 items-center justify-center py-10 my-10">
        <div className="flex flex-row  gap-2 border-r-2 justify-between  border-r-2 border-white py-5 px-7">
          <img src={facebook} alt="pinterest" className="w-20 h-20" />
          {/* <img src={} alt="" /> */}
          <img src={x} alt="xtwitter" className="w-20 h-20" />
          <img src={pinterest} alt="" className="w-20 h-20" />
          <img
            src={instagram}
            alt="Instagram"
            className="w-6 h-6 rounded rounded-full rounded-white w-20 h-20"
          />
          <img
            src={youtube}
            alt="Instagram"
            className="w-6 h-6 rounded rounded-full rounded-white w-20 h-20"
          />
        </div>
        <div className="flex flex-row  gap-2 justify-between">
          <img src={company1} alt="" className="w-20 h-20 mx-3" />
          <img src={company2} alt="" className="w-20 h-20 mx-3" />
          <img src={company3} alt="" className="w-20 h-20 mx-3" />
          <img src={company4} alt="" className="w-20 h-20 mx-3" />
          <img src={company5} alt="" className="w-20 h-20 mx-3" />
          <img src={company6} alt="" className="w-20 h-20 mx-3" />
          <img src={company7} alt="" className="w-20 h-20 mx-3" />
          <img src={company8} alt="" className="w-20 h-20 mx-3" />
          <img src={company9} alt="" className="w-20 h-20 mx-3" />
        </div>
      </div>
    </main>
  );
};

export default Contact;
