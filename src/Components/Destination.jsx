import React from "react";
import DestinationCard from "./layouts/DestinationCard";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";
import '../assets/css/Destination.css';

const Destination = () => {
  return (
    <div className="destination-container">
      <h1 className="destination-title">
        Top Destinations
      </h1>
      <div className="destination-cards">
        <DestinationCard
          img={img1}
          title="Galle"
          para="Galle is a historic coastal city in Sri Lanka, renowned for its well-preserved 16th-century Dutch fort, charming colonial architecture"
        />
        <DestinationCard
          img={img2}
          title="Sigiriya"
          para="Sigiriya, known as the 'Lion Rock', is an ancient fortress in Sri Lanka, celebrated for its stunning frescoes and panoramic views."
        />
        <DestinationCard
          img={img3}
          title="Ella"
          para="Ella is a picturesque town in Sri Lanka, renowned for its lush green hills, tea plantations, and the iconic Nine Arch Bridge."
        />
      </div>
    </div>
  );
};

export default Destination;
