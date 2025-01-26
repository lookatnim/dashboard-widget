import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import Header from "./Header";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Outlet } from "react-router-dom";

const layout = [
  { i: "header", x: 0, y: 0, w: 12, h: 1, static: true }, // Header spans full width
  { i: "body", x: 0, y: 1, w: 12, h: 10, static: true },  // Body spans full width
//   { i: "footer", x: 0, y: 16, w: 12, h: 2, static: true } // Footer spans full width
];

const Layout: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth-20);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth -20);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="min-h-auto">
      <GridLayout
        className="layout bg-gray-300"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={width} 
      >
        {/* Header */}
        <div
          key="header"
        >
          <Header />
        </div>

        {/* Body */}
        <div key="body" className="shadow-md ">
          <Outlet />
        </div>

        {/* Footer */}
        {/* <div
          key="footer"
          className="bg-gray-800 text-white flex items-center justify-center"
        >
          <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        </div> */}
      </GridLayout>
    </div>
  );
};

export default Layout;
