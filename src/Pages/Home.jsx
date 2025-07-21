import React from "react";
import homevid from "../video/homeVid.mp4";
import Header from "../components/Header";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src={homevid}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-[50]">
        <Header />
      </div>
    </main>
  );
};

export default Home;
