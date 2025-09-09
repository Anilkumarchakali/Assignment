// src/Components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import logo from '../assets/images.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <div className="container">
        {/* Logo / Brand */}
        <a href="/" className="brand">
          <img src={logo} alt="Leo9 Logo" className="logo" />
          <span className="brand-title">leo9</span>
        </a>

        {/* Desktop Nav */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li><a href="/work" className="nav-link">Work</a></li>
            <li><a href="/services" className="nav-link">Services</a></li>
            <li><a href="/clients" className="nav-link">Clients</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/knowledge" className="nav-link">Knowledge</a></li>
          </ul>
        </nav>

        {/* Right Side (Dark Mode + Contact + Menu) */}
        <div className="nav-actions">
          {/* Dark/Light Mode Toggle */}
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
          </button>

          <a href="/contact" className="contact-btn">Contact</a>

          {/* Hamburger (Mobile) */}
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
