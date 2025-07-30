import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashHome from "./Pages/SplashHome";
import ProductionControl from "./components/ProductionControl";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashHome />} />
        <Route path="/prod" element={<ProductionControl />} />
      </Routes>
    </Router>
  );
};

export default App;
