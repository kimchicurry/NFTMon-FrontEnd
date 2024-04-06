import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#151515] text-white">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
