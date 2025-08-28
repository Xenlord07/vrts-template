import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 VRTS Template. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
