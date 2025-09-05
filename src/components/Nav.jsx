import React from "react";
import { Link } from "react-router-dom"; // if you're using React Router
import Logo from "../assets/logo.jpeg";

const Nav = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>
          GARBAGE <br /> DETECTION
        </span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about-us">ABOUT US</Link></li>
          <li><Link to="/live-camera">LIVE CAMERA</Link></li>
          <li><Link to="/report">REPORTS</Link></li>
        </ul>
      </nav>
      <button className="login-btn">
        <Link to="/login">LOGIN</Link>
      </button>
    </header>
  );
};

export default Nav;
