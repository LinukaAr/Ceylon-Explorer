import React, { useState, useEffect } from "react";
import "../assets/css/Hotel.css";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [amenities, setAmenities] = useState("");

  useEffect(() => {
    const sampleHotels = [
      {
        name: "Luxury Colombo Hotel",
        location: "Colombo",
        priceRange: "$200 - $300",
        rating: 4.7,
        amenities: ["Free Wi-Fi", "Pool", "Spa"],
        image: "https://via.placeholder.com/150",
        description: "A luxurious hotel in the heart of Colombo."
      },
      {
        name: "Kandy Budget Inn",
        location: "Kandy",
        priceRange: "$50 - $100",
        rating: 4.3,
        amenities: ["Free Wi-Fi", "Breakfast Included"],
        image: "https://via.placeholder.com/150",
        description: "Affordable accommodation with great service."
      },
      // Add more hotel data here
    ];
    setHotels(sampleHotels);
    setFilteredHotels(sampleHotels);
  }, []);

  useEffect(() => {
    const filtered = hotels.filter((hotel) => {
      return (
        (location === "" || hotel.location === location) &&
        (priceRange === "" || hotel.priceRange === priceRange) &&
        (rating === "" || hotel.rating >= parseFloat(rating)) &&
        (amenities === "" || hotel.amenities.includes(amenities))
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

      <div className="hotel-cards">
        {filteredHotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img className="hotel-card-img" src={hotel.image} alt={hotel.name} />
            <div className="hotel-card-content">
              <h3 className="hotel-card-name">{hotel.name}</h3>
              <p className="hotel-card-info">
                Location: {hotel.location} | Price: {hotel.priceRange} | Rating: {hotel.rating} ★
              </p>
              <p className="hotel-card-info">
                Amenities: {hotel.amenities.join(", ")}
              </p>
              <p className="hotel-card-description">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
