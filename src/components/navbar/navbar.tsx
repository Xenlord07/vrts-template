import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import ThemeSwitch from "../theme-switch/theme-switch";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
