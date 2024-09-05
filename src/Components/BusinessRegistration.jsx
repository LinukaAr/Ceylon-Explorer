import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/BusinessRegistration.css';
import '../axiosConfig';

const provinces = [
  { value: '', label: 'Select Location' },
  { value: 'Ampara', label: 'Ampara' },
  { value: 'Anuradhapura', label: 'Anuradhapura' },
  { value: 'Badulla', label: 'Badulla' },
  { value: 'Batticaloa', label: 'Batticaloa' },
  { value: 'Colombo', label: 'Colombo' },
  { value: 'Galle', label: 'Galle' },
  { value: 'Hambantota', label: 'Hambantota' },
  { value: 'Jaffna', label: 'Jaffna' },
  { value: 'Kandy', label: 'Kandy' },
  { value: 'Kilinochchi', label: 'Kilinochchi' },
  { value: 'Kegalle', label: 'Kegalle' },
  { value: 'Kurunegala', label: 'Kurunegala' },
  { value: 'Mannar', label: 'Mannar' },
  { value: 'Matale', label: 'Matale' },
  { value: 'Matara', label: 'Matara' },
  { value: 'Monaragala', label: 'Monaragala' },
  { value: 'Mullaitivu', label: 'Mullaitivu' },
  { value: 'Nuwara Eliya', label: 'Nuwara Eliya' },
  { value: 'Puttalam', label: 'Puttalam' },
  { value: 'Polonnaruwa', label: 'Polonnaruwa' },
  { value: 'Ratnapura', label: 'Ratnapura' },
  { value: 'Trincomalee', label: 'Trincomalee' },
  { value: 'Vavuniya', label: 'Vavuniya' }
];

const BusinessRegistration = () => {
  const [businessType, setBusinessType] = useState('');
  const [guideData, setGuideData] = useState({ name: '', experience: '', languages: '', phone: '', area: '', ageRange: '', gender: '', image: null });
  const [hotelData, setHotelData] = useState({ name: '', location: '', starRating: '', phone: '', price: '', amenities: '', rooms: '', image: null });
  const [vehicleData, setVehicleData] = useState({ type: '', model: '', pricePerDay: '', phone: '', image: null });

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

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (type === 'guide') {
      setGuideData({ ...guideData, image: file });
    } else if (type === 'hotel') {
      setHotelData({ ...hotelData, image: file });
    } else if (type === 'vehicle') {
      setVehicleData({ ...vehicleData, image: file });
    }
  };

  const handleSubmitGuide = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('guide', JSON.stringify(guideData));
    formData.append('image', guideData.image);

    try {
      const response = await axios.post('https://ceylonexplorerbe-a5cbfnfpddecajfr.eastus-01.azurewebsites.net/guides', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        alert('Guide registered successfully!');
        setGuideData({ name: '', experience: '', languages: '', phone: '', area: '', ageRange: '', gender: '', image: null });
      } else {
        console.error('There was an error!', response.status, "image is", guideData.image);
      }
    } catch (error) {
      console.error('There was an error!', error ,"image is", guideData.image);
    }
  };

  const handleSubmitHotel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('hotel', JSON.stringify(hotelData));
    formData.append('image', hotelData.image);
  
    try {
      const response = await axios.post('https://ceylonexplorerbe-a5cbfnfpddecajfr.eastus-01.azurewebsites.net/hotels', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status === 200) {
        alert('Hotel registered successfully!');
        setHotelData({ name: '', location: '', starRating: '', phone: '', price: '', amenities: '', rooms: '', image: null });
      } else {
        console.error('There was an error!', response.status);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleSubmitVehicle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('vehicle', JSON.stringify(vehicleData));
    formData.append('image', vehicleData.image);
  
    try {
      const response = await axios.post('https://ceylonexplorerbe-a5cbfnfpddecajfr.eastus-01.azurewebsites.net/vehicles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status === 200) {
        alert('Vehicle registered successfully!');
        setVehicleData({ type: '', model: '', pricePerDay: '', phone: '', image: null });
      } else {
        console.error('There was an error!', response.status);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
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
        <GuideForm handleChange={handleGuideChange} handleSubmit={handleSubmitGuide} data={guideData} handleImageUpload={(e) => handleImageUpload(e, 'guide')} />
      )}
      {businessType === 'hotel' && (
        <HotelForm handleChange={handleHotelChange} handleSubmit={handleSubmitHotel} data={hotelData} handleImageUpload={(e) => handleImageUpload(e, 'hotel')} />
      )}
      {businessType === 'vehicle' && (
        <VehicleForm handleChange={handleVehicleChange} handleSubmit={handleSubmitVehicle} data={vehicleData} handleImageUpload={(e) => handleImageUpload(e, 'vehicle')} />
      )}
    </div>
  );
};

const GuideForm = ({ handleChange, handleSubmit, data, handleImageUpload }) => {
  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Guide Registration</h3>
      <label className="form-label">Guide Name:</label>
      <input className="form-input" type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter guide name" />
      
      <label className="form-label">Experience:</label>
      <select className="form-input" name="experience" value={data.experience} onChange={handleChange}>
        <option value="">Select Experience</option>
        <option value="1-3">1-3 years</option>
        <option value="3-5">3-5 years</option>
        <option value="5+">5+ years</option>
      </select>
      
      <label className="form-label">Languages:</label>
      <input className="form-input" type="text" name="languages" value={data.languages} onChange={handleChange} placeholder="Enter languages spoken" />
      
      <label className="form-label">Phone Number:</label>
      <input className="form-input" type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="Enter phone number" />
      
      <label className="form-label">Location:</label>
      <select className="form-input" name="area" value={data.area} onChange={handleChange}>
        {provinces.map((province) => (
          <option key={province.value} value={province.value}>
            {province.label}
          </option>
        ))}
      </select>
      
      <label className="form-label">Age Range:</label>
      <select className="form-input" name="ageRange" value={data.ageRange} onChange={handleChange}>
        <option value="">Select Age Range</option>
        <option value="20-30">20-30</option>
        <option value="30-40">30-40</option>
        <option value="40-50">40-50</option>
      </select>
      
      <label className="form-label">Gender:</label>
      <select className="form-input" name="gender" value={data.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      
      <label className="form-label">Profile Image:</label>
      <input className="form-input" type="file" accept="image/*" onChange={handleImageUpload} />
      <button className="button" type="submit">Register Guide</button>
    </form>
  );
};

const HotelForm = ({ handleChange, handleSubmit, data, handleImageUpload }) => {
  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Hotel Registration</h3>
      <label className="form-label">Hotel Name:</label>
      <input className="form-input" type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter hotel name" />
      
      <label className="form-label">Location:</label>
      <select className="form-input" name="location" value={data.location} onChange={handleChange}>
        {provinces.map((province) => (
            <option key={province.value} value={province.value}>
                {province.label}
            </option>
        ))}
      </select>
      
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
      
      <label className="form-label">Price per Night:</label>
      <input className="form-input" type="text" name="price" value={data.price} onChange={handleChange} placeholder="Enter price per night" />
      
      <label className="form-label">Amenities:</label>
      <input className="form-input" type="text" name="amenities" value={data.amenities} onChange={handleChange} placeholder="Enter amenities" />
      
      <label className="form-label">Number of Rooms:</label>
      <input className="form-input" type="text" name="rooms" value={data.rooms} onChange={handleChange} placeholder="Enter number of rooms" />
      
      <label className="form-label">Hotel Image:</label>
      <input className="form-input" type="file" accept="image/*" onChange={handleImageUpload} />
      <button className="button" type="submit">Register Hotel</button>
    </form>
  );
};

const VehicleForm = ({ handleChange, handleSubmit, data, handleImageUpload }) => {
  return (
    <form className="business-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Vehicle Registration</h3>
      <label className="form-label">Vehicle Type:</label>
      <input className="form-input" type="text" name="type" value={data.type} onChange={handleChange} placeholder="Enter vehicle type" />
      
      <label className="form-label">Model:</label>
      <input className="form-input" type="text" name="model" value={data.model} onChange={handleChange} placeholder="Enter model" />
      
      <label className="form-label">Price per Day:</label>
      <input className="form-input" type="text" name="pricePerDay" value={data.pricePerDay} onChange={handleChange} placeholder="Enter price per day" />
      
      <label className="form-label">Phone Number:</label>
      <input className="form-input" type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="Enter phone number" />
      
      <label className="form-label">Vehicle Image:</label>
      <input className="form-input" type="file" accept="image/*" onChange={handleImageUpload} />
      
      <button className="button" type="submit">Register Vehicle</button>
    </form>
  );
};

export default BusinessRegistration;