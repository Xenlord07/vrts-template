import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navbar/navbar";
import "./layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header>
        <h1>VRTS Template</h1>
        <Navigation />
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
