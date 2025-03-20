import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <h1 className="logo">Siddhant</h1>

        {/* Hamburger Menu Button */}
        <div className="menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="2x"/>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#"><li>Home</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#" onClick={togglePopup}><li>Resume</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>

      {/* Resume Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <iframe src="public/Siddhant_Adsule_8379909787.pdf" width="100%" height="800px"></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
