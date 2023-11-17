import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
