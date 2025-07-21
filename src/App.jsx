import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashHome from "./Pages/SplashHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashHome />} />
      </Routes>
    </Router>
  );
};

export default App;
