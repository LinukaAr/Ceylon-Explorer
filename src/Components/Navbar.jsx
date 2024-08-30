import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import '../assets/css/Navbar.css'; 
import img from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={img} alt="logo" className="navbar-logo" />
          <h1 className="navbar-title">Ceylon Explore</h1>
        </div>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/guide" className="navbar-link">Find a Guide</Link>
          <Link to="/hotel" className="navbar-link">Find a Hotel</Link>
          <Link to="/rent" className="navbar-link">Rent a Vehicle</Link>
          <Link to="/business" className="navbar-link">Business Registration</Link>
        </div>

        <div className="navbar-menu-icon" onClick={handleMenuToggle}>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={`navbar-mobile-menu ${menuOpen ? 'show' : ''}`}>
        <div className="navbar-mobile-menu-close" onClick={handleMenuToggle}>
          &times;
        </div>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/guide" className="navbar-link">Find a Guide</Link>
        <Link to="/hotel" className="navbar-link">Find a Hotel</Link>
        <Link to="/rent" className="navbar-link">Rent a Vehicle</Link>
        <Link to="/business" className="navbar-link">Business Registration</Link>
      </div>
    </>
  );
};

export default Navbar;
