import React, { useState, useEffect } from "react";
import "../assets/css/Hotel.css";
import axios from "axios";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [amenities, setAmenities] = useState("");
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch hotel data from API
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hotels"); // Replace with your API endpoint
        if (Array.isArray(response.data)) {
          setHotels(response.data);
          setFilteredHotels(response.data);
        } else {
          console.error("Data received is not an array.");
        }
      } catch (err) {
        console.error("There was an error fetching the hotel data!", err);
        setError("Failed to load hotel data. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    const filtered = hotels.filter((hotel) => {
      return (
        (location === "" || hotel.location === location) &&
        (priceRange === "" || hotel.priceRange === priceRange) &&
        (rating === "" || hotel.rating >= parseFloat(rating)) &&
        (amenities === "" || (hotel.amenities && hotel.amenities.includes(amenities))) // Ensure amenities is defined and is an array
      );
    });
    setFilteredHotels(filtered);
  }, [hotels, location, priceRange, rating, amenities]);

  return (
    <div className="hotel-container">
      <h2 className="hotel-heading">Find Your Perfect Hotel</h2>

      <div className="hotel-filter">
        <div>
          <label className="hotel-filter-label" htmlFor="location">Location:</label>
          <select
            className="hotel-filter-select"
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
          <label className="hotel-filter-label" htmlFor="priceRange">Price Range:</label>
          <select
            className="hotel-filter-select"
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Price Ranges</option>
            <option value="$50 - $100">$50 - $100</option>
            <option value="$100 - $200">$100 - $200</option>
            <option value="$200 - $300">$200 - $300</option>
          </select>
        </div>
        <div>
          <label className="hotel-filter-label" htmlFor="rating">Rating:</label>
          <select
            className="hotel-filter-select"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>
        </div>
        <div>
          <label className="hotel-filter-label" htmlFor="amenities">Amenities:</label>
          <select
            className="hotel-filter-select"
            id="amenities"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
          >
            <option value="">All Amenities</option>
            <option value="Free Wi-Fi">Free Wi-Fi</option>
            <option value="Pool">Pool</option>
            <option value="Spa">Spa</option>
          </select>
        </div>
      </div>

      {loading && <p>Loading hotels...</p>} {/* Display loading status */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}

      <div className="hotel-cards">
        {Array.isArray(filteredHotels) && filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img className="hotel-card-img" src={hotel.image} alt={hotel.name} />
              <div className="hotel-card-content">
                <h3 className="hotel-card-name">{hotel.name}</h3>
                <p className="hotel-card-info">
                  Location: {hotel.location} | Price: {hotel.priceRange} | Rating: {hotel.rating} ★
                </p>
                <p className="hotel-card-info">
                  Amenities: {Array.isArray(hotel.amenities) ? hotel.amenities.join(", ") : "N/A"}
                </p>
                <p className="hotel-card-description">{hotel.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels available.</p>
        )}
      </div>
    </div>
  );
};

export default Hotel;
