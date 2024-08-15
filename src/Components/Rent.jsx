import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Rent.css";

const Rent = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/vehicles");
        console.log("API Response:", response.data); // Log the API response
        if (Array.isArray(response.data)) {
          setVehicles(response.data);
          setFilteredVehicles(response.data);
        } else {
          console.error("Data received is not an array.");
          setError("The data received from the server is not in the expected format.");
        }
      } catch (err) {
        console.error("There was an error fetching the vehicle data!", err);
        setError("Failed to load vehicle data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    const filtered = vehicles.filter((vehicle) => {
      return (
        (type === "" || vehicle.type === type) &&
        (priceRange === "" || vehicle.pricePerDay === priceRange)
      );
    });
    setFilteredVehicles(filtered);
  }, [vehicles, type, priceRange]);

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
          <label className="vehicle-filter-label" htmlFor="priceRange">Price Range:</label>
          <select
            className="vehicle-filter-select"
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Price Ranges</option>
            <option value="100$">100$</option>
            {/* Add more price ranges here */}
          </select>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="vehicle-cards">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-card-content">
              <h3 className="vehicle-card-name">{vehicle.model}</h3>
              <p className="vehicle-card-info">
                Type: {vehicle.type} | Price Per Day: {vehicle.pricePerDay}
              </p>
              <p className="vehicle-card-info">Phone: {vehicle.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;
