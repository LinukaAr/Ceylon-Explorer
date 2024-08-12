import React from "react";
import Button from "./Button";
import '../../assets/css/DestinationCard.css';

const DestinationCard = (props) => {
  return (
    <div className="destination-card">
      <img className="destination-card-img" src={props.img} alt="img" />
      <div className="destination-card-content">
        <h2 className="destination-card-title">{props.title}</h2>
        <p className="destination-card-description">{props.para}</p>

        {/* <div className="destination-card-button">
          <Button title="Book Tickets" backgroundColor={backgroundColor} />
        </div> */}
      </div>
    </div>
  );
};

export default DestinationCard;
