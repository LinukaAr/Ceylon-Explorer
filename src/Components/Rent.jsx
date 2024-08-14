import React, { useState, useEffect } from "react";
import "../assets/css/Rent.css";

const Rent = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [transmission, setTransmission] = useState("");

  useEffect(() => {
    const sampleVehicles = [
      {
        name: "Toyota Prius",
        type: "Car",
        location: "Colombo",
        priceRange: "$50 - $100",
        transmission: "Automatic",
        image: "https://via.placeholder.com/150",
        description: "Comfortable hybrid car, perfect for city driving."
      },
      {
        name: "Honda CRF 250",
        type: "Bike",
        location: "Kandy",
        priceRange: "$20 - $50",
        transmission: "Manual",
        image: "https://via.placeholder.com/150",
        description: "Ideal for off-road adventures."
      },
      // Add more vehicle data here
    ];
    setVehicles(sampleVehicles);
    setFilteredVehicles(sampleVehicles);
  }, []);

  useEffect(() => {
    const filtered = vehicles.filter((vehicle) => {
      return (
        (type === "" || vehicle.type === type) &&
        (location === "" || vehicle.location === location) &&
        (priceRange === "" || vehicle.priceRange === priceRange) &&
        (transmission === "" || vehicle.transmission === transmission)
      );
    });
    setFilteredVehicles(filtered);
  }, [vehicles, type, location, priceRange, transmission]);

  return (
    <div className="vehicle-container">
      <h2 className="vehicle-heading">Find Your Perfect Vehicle</h2>

      <div className="vehicle-filter">
        <div>
          <label className="vehicle-filter-label" htmlFor="type">Type:</label>
          <select
            className="vehicle-filter-select"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            {/* Add more vehicle types here */}
          </select>
        </div>
        <div>
          <label className="vehicle-filter-label" htmlFor="location">Location:</label>
          <select
            className="vehicle-filter-select"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Colombo">Colombo</option>
            <option value="Kandy">Kandy</option>
            {/* Add more location options here */}
          </select>
        </div>
        <div>
          <label className="vehicle-filter-label" htmlFor="priceRange">Price Range:</label>
          <select
            className="vehicle-filter-select"
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Price Ranges</option>
            <option value="$20 - $50">$20 - $50</option>
            <option value="$50 - $100">$50 - $100</option>
          </select>
        </div>
        <div>
          <label className="vehicle-filter-label" htmlFor="transmission">Transmission:</label>
          <select
            className="vehicle-filter-select"
            id="transmission"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value="">All Transmissions</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
      </div>

      <div className="vehicle-cards">
        {filteredVehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <img className="vehicle-card-img" src={vehicle.image} alt={vehicle.name} />
            <div className="vehicle-card-content">
              <h3 className="vehicle-card-name">{vehicle.name}</h3>
              <p className="vehicle-card-info">
                Type: {vehicle.type} | Location: {vehicle.location} | Price: {vehicle.priceRange} | Transmission: {vehicle.transmission}
              </p>
              <p className="vehicle-card-description">{vehicle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;
