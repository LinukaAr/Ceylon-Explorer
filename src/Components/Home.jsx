import React from "react";
import Button from "./layouts/Button";
import { Link } from "react-scroll";
import img from "../assets/img/hero.png";
import '../assets/css/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="title">Ceylon Explorer</h1>
        <p className="subtitle">Explore the beauty of Sri Lanka</p>
        <div className="button-container">
          <Link to="destination" spy={true} smooth={true} duration={500}>
            {/* <Button title="Destinations✈️" backgroundColor={backgroundColor} /> */}
          </Link>
        </div>
      </div>
      
      <div className="image-container">
        <img src={img} alt="img" className="image" />
      </div>
    </div>
  );
};

export default Home;
