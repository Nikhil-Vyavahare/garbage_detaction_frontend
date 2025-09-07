import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>GARBAGE<br />DETECTION</span>
      </div>
      
      {/* Desktop Navigation Container */}
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><Link to="/live-camera">LIVE CAMERA</Link></li>
            <li><Link to="/report">REPORTS</Link></li>
          </ul>
        </nav>
        <button className="login-btn desktop-login-btn">
          <Link to="/login">LOGIN</Link>
        </button>
      </div>
      
      {/* Mobile menu button */}
      <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about-us" onClick={closeMenu}>ABOUT US</Link></li>
          <li><Link to="/live-camera" onClick={closeMenu}>LIVE CAMERA</Link></li>
          <li><Link to="/report" onClick={closeMenu}>REPORTS</Link></li>
        </ul>
        <button className="login-btn mobile-login-btn">
          <Link to="/login" onClick={closeMenu}>LOGIN</Link>
        </button>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 98
          }}
        />
      )}
    </header>
  );
};

export default Nav;