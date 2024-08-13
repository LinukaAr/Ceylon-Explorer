import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
import '../assets/css/Navbar.css'; 

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src="../../public/logo.png" alt="logo" className="navbar-logo" />
          <h1 className="navbar-title">Ceylon Explore</h1>
        </div>

        <div className="navbar-links">
          <Link to="home" spy={true} smooth={true} duration={500} className="navbar-link">
            Home
          </Link>
          <Link to="features" spy={true} smooth={true} duration={500} className="navbar-link">
            Find a Guide
          </Link>
          <Link to="guide" spy={true} smooth={true} duration={500} className="navbar-link">
            Find a Hotel
          </Link>
          <Link to="hotel" spy={true} smooth={true} duration={500} className="navbar-link">
            Rent a Vehicle
          </Link>
          <Link to="rent" spy={true} smooth={true} duration={500} className="navbar-link">
            Contact
          </Link>
        </div>

        {/* <div className="navbar-right">
          <h1 className="navbar-register">Register</h1>
          <Button title="Login" className="navbar-button" />
        </div> */}

        <div className="navbar-menu-icon" onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={`navbar-mobile-menu ${menu ? "show" : "hide"}`}>
        <Link to="home" spy={true} smooth={true} duration={500} className="navbar-link">
          Home
        </Link>
        <Link to="features" spy={true} smooth={true} duration={500} className="navbar-link">
          Features
        </Link>
        <Link to="destination" spy={true} smooth={true} duration={500} className="navbar-link">
          Destinations
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="navbar-link">
          About
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="navbar-link">
          Contact
        </Link>
        <div className="navbar-mobile-right">
          <h1 className="navbar-register">Register</h1>
          <Button title="Login" className="navbar-button" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
