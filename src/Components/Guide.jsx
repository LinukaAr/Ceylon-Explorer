import React, { useState, useEffect } from "react";
import "../assets/css/Guide.css";

const Guide = () => {
  const [guides, setGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [area, setArea] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [search, setSearch] = useState("");

  // Sample guide data (replace with your actual data)
  useEffect(() => {
    const sampleGuides = [
      {
        name: "John Doe",
        area: "Colombo",
        age: "30-40",
        gender: "Male",
        experience: "5 years",
        languages: ["English", "Sinhala"],
        rating: 4.5,
        bio: "Experienced tour guide with deep knowledge of Colombo.",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Jane Smith",
        area: "Kandy",
        age: "20-30",
        gender: "Female",
        experience: "3 years",
        languages: ["English", "Tamil"],
        rating: 4.8,
        bio: "Friendly and knowledgeable about Kandy's history.",
        image: "https://via.placeholder.com/150"
      },{
        name: "John Doe",
        area: "Colombo",
        age: "30-40",
        gender: "Male",
        experience: "5 years",
        languages: ["English", "Sinhala"],
        rating: 4.5,
        bio: "Experienced tour guide with deep knowledge of Colombo.",
        image: "https://via.placeholder.com/150"
      }
      // Add more guide data here
    ];
    setGuides(sampleGuides);
    setFilteredGuides(sampleGuides);
  }, []);

  // Filter guides based on selected criteria
  useEffect(() => {
    const filtered = guides.filter((guide) => {
      return (
        (area === "" || guide.area === area) &&
        (age === "" || guide.age === age) &&
        (gender === "" || guide.gender === gender) &&
        (experience === "" || guide.experience === experience) &&
        (language === "" || guide.languages.includes(language)) &&
        (search === "" || guide.name.toLowerCase().includes(search.toLowerCase()))
      );
    });
    setFilteredGuides(filtered);
  }, [guides, area, age, gender, experience, language, search]);

  return (
    <div className="guide-container">
      <h2 className="guide-heading">Find Your Perfect Guide</h2>

      {/* Filter Section */}
      <div className="guide-filter">
        <input
          type="text"
          placeholder="Search by name..."
          className="guide-filter-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <label className="guide-filter-label" htmlFor="area">Area:</label>
          <select
            className="guide-filter-select"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">All Areas</option>
            <option value="Colombo">Colombo</option>
            <option value="Kandy">Kandy</option>
            {/* Add more area options here */}
          </select>
        </div>
        <div>
          <label className="guide-filter-label" htmlFor="age">Age:</label>
          <select
            className="guide-filter-select"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">All Ages</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
          </select>
        </div>
        <div>
          <label className="guide-filter-label" htmlFor="gender">Gender:</label>
          <select
            className="guide-filter-select"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="guide-filter-label" htmlFor="experience">Experience:</label>
          <select
            className="guide-filter-select"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>
        <div>
          <label className="guide-filter-label" htmlFor="language">Language:</label>
          <select
            className="guide-filter-select"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="Sinhala">Sinhala</option>
            <option value="Tamil">Tamil</option>
            {/* Add more language options here */}
          </select>
        </div>
      </div>

      {/* Guide Cards Section */}
      <div className="guide-cards">
        {filteredGuides.map((guide, index) => (
          <div key={index} className="guide-card">
            <img className="guide-card-img" src={guide.image} alt={guide.name} />
            <div className="guide-card-content">
              <h3 className="guide-card-name">{guide.name}</h3>
              <p className="guide-card-info">
                Area: {guide.area} | Age: {guide.age} | Gender: {guide.gender}
              </p>
              <p className="guide-card-info">
                Experience: {guide.experience} | Languages: {guide.languages.join(", ")}
              </p>
              <p className="guide-card-bio">{guide.bio}</p>
              <div className="guide-card-rating">Rating: {guide.rating} ★</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;   
