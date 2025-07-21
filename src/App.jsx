import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
