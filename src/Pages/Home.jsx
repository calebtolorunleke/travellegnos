import React from "react";
import homevid from "../video/homeVid.mp4";
import Header from "../components/Header";
import Features from "../components/Features";
import TripBuilder from "../components/TripBuilder";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <div className=" z-[50]">
        <Header />
        <Features />
        <TripBuilder />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
