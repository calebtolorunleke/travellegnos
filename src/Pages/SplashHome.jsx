import React, { useEffect } from "react";
import Splashscreen from "./Splashscreen";
import Home from "./Home";

const SplashHome = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return <div>{showSplash ? <Splashscreen /> : <Home />}</div>;
};

export default SplashHome;
