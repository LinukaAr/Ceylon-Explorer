import React from "react";
import { Link } from "react-scroll";
import img from "../assets/img/about.jpg";
import "../assets/css/Service.css"; // Import the CSS file

const Service = () => {
  const backgroundColor = "white"; // Update this to a valid CSS color

  return (
    <div className="container">
      <div className="text-container">
      <h1 className="heading">
          Explore the Wonders of Sri Lanka with Ceylon Explorer
        </h1>
        <p className="paragraph">
          Your adventure starts here. Let us guide you through the hidden gems and breathtaking landscapes of Sri Lanka.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <button  className="button">Contact Now</button> 
        </Link>
      </div>
      {/* <div className="image-container">
        <img className="image" src={img} alt="img" />
      </div> */}
    </div>
  );
};

export default Service;
