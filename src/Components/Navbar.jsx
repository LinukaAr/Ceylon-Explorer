import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import '../assets/css/Navbar.css'; 
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/guide" className="navbar-link">
            Find a Guide
          </Link>
          <Link to="/hotel" className="navbar-link">
            Find a Hotel
          </Link>
          <Link to="/rent" className="navbar-link">
            Rent a Vehicle
          </Link>
          <Link to="/business" className="navbar-link">
            Business Registration
          </Link>
        </div>

        <div className="navbar-menu-icon" onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
