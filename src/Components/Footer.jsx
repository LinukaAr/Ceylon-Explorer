import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../assets/css/Footer.css"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="footer-title">Ceylon Explore</h1>
          <p className="footer-description">
          From hidden gems to iconic landmarks, we offer curated travel experiences that cater to every wanderlust. Let us guide you to unforgettable adventures and make your travel dreams a reality.
          </p>
        </div>
        <div className="footer-section">
          <h1 className="footer-title">Branches</h1>
          <nav className="footer-nav">
            <a className="footer-link" href="/">
              Galle
            </a>
            <a className="footer-link" href="/">
              Trincomalee
            </a>
            <a className="footer-link" href="/">
              Sigiriya
            </a>
          </nav>
        </div>
        <div className="footer-section">
          <h1 className="footer-title">About</h1>
          <nav className="footer-nav">
            <a className="footer-link" href="/">
              Contact Us
            </a>
            <a className="footer-link" href="/">
              Testimonial
            </a>
            <a className="footer-link" href="/">
              Rating
            </a>
          </nav>
        </div>
        <div className="footer-section">
          <h1 className="footer-title">Follow Us</h1>
          <nav className="footer-social">
            <FaFacebook className="footer-social-icon" size={25} />
            <FaTwitter className="footer-social-icon" size={25} />
            <FaInstagram className="footer-social-icon" size={25} />
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="../../public/logo.png" alt="logo" className="footer-logo"/>
        <p className="footer-bottom-text">
          &copy; developed by
          <span className="footer-highlight"> LinukaAr</span> | All rights
          reserved | 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
