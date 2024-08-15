// src/components/BusinessRegistration.js
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/BusinessRegistration.css';

const BusinessRegistration = () => {
  const [businessType, setBusinessType] = useState('');
  const [guideData, setGuideData] = useState({ name: '', experience: '', languages: '', phone: '' });
  const [hotelData, setHotelData] = useState({ name: '', location: '', starRating: '', phone: '' });
  const [vehicleData, setVehicleData] = useState({ type: '', model: '', pricePerDay: '', phone: '' });

  const handleBusinessTypeChange = (e) => {
    setBusinessType(e.target.value);
  };

  const handleGuideChange = (e) => {
    setGuideData({ ...guideData, [e.target.name]: e.target.value });
  };

  const handleHotelChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handleVehicleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleSubmitGuide = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/guides', guideData)
      .then(response => {
        alert('Guide registered successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleSubmitHotel = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/hotels', hotelData)
      .then(response => {
        alert('Hotel registered successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleSubmitVehicle = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/vehicles', vehicleData)
      .then(response => {
        alert('Vehicle registered successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="business-registration-container">
      <h2 className="business-registration-heading">Business Registration</h2>

      <div className="business-type-selector">
        <label className="business-type-label" htmlFor="businessType">Select Business Type:</label>
        <select
          className="business-type-select"
          id="businessType"
          value={businessType}
          onChange={handleBusinessTypeChange}
        >
          <option value="">-- Select Business Type --</option>
          <option value="guide">Guide</option>
          <option value="hotel">Hotel</option>
          <option value="vehicle">Vehicle</option>
        </select>
      </div>

      {businessType === 'guide' && (
        <GuideForm handleChange={handleGuideChange} handleSubmit={handleSubmitGuide} data={guideData} />
      )}
      {businessType === 'hotel' && (
        <HotelForm handleChange={handleHotelChange} handleSubmit={handleSubmitHotel} data={hotelData} />
      )}
      {businessType === 'vehicle' && (
        <VehicleForm handleChange={handleVehicleChange} handleSubmit={handleSubmitVehicle} data={vehicleData} />
      )}
    </div>
  );
};

const GuideForm = ({ handleChange, handleSubmit, data }) => {
  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Guide Registration</h3>
      <label className="form-label">Guide Name:</label>
      <input className="form-input" type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter guide name" />
      
      <label className="form-label">Experience:</label>
      <input className="form-input" type="text" name="experience" value={data.experience} onChange={handleChange} placeholder="Enter years of experience" />
      
      <label className="form-label">Languages:</label>
      <input className="form-input" type="text" name="languages" value={data.languages} onChange={handleChange} placeholder="Enter languages spoken" />
      
      <label className="form-label">Phone Number:</label>
      <input className="form-input" type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="Enter phone number" />
      
      <button className="form-submit-button" type="submit">Register Guide</button>
    </form>
  );
};

const HotelForm = ({ handleChange, handleSubmit, data }) => {
  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Hotel Registration</h3>
      <label className="form-label">Hotel Name:</label>
      <input className="form-input" type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter hotel name" />
      
      <label className="form-label">Location:</label>
      <input className="form-input" type="text" name="location" value={data.location} onChange={handleChange} placeholder="Enter location" />
      
      <label className="form-label">Star Rating:</label>
      <select className="form-input" name="starRating" value={data.starRating} onChange={handleChange}>
        <option value="">Select Star Rating</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      
      <label className="form-label">Phone Number:</label>
      <input className="form-input" type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="Enter phone number" />
      
      <button className="form-submit-button" type="submit">Register Hotel</button>
    </form>
  );
};

const VehicleForm = ({ handleChange, handleSubmit, data }) => {
  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Vehicle Registration</h3>
      <label className="form-label">Vehicle Type:</label>
      <select className="form-input" name="type" value={data.type} onChange={handleChange}>
        <option value="">Select Vehicle Type</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
      </select>
      
      <label className="form-label">Model:</label>
      <input className="form-input" type="text" name="model" value={data.model} onChange={handleChange} placeholder="Enter vehicle model" />
      
      <label className="form-label">Price per Day:</label>
      <input className="form-input" type="text" name="pricePerDay" value={data.pricePerDay} onChange={handleChange} placeholder="Enter price per day" />
      
      <label className="form-label">Phone Number:</label>
      <input className="form-input" type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="Enter phone number" />
      
      <button className="form-submit-button" type="submit">Register Vehicle</button>
    </form>
  );
};

export default BusinessRegistration;
