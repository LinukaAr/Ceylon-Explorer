import React, { useState, useEffect } from "react";
import "../assets/css/Guide.css";

const Guide = () => {
  const [guides, setGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [areas, setAreas] = useState([]);
  const [languages, setLanguages] = useState([]); 
  const [area, setArea] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [search, setSearch] = useState("");
  const [ratings, setRatings] = useState({});

  // Fetch guide data from the API
  useEffect(() => {
    fetch("http://localhost:8080/guides")
      .then((response) => response.json())
      .then((data) => {
        setGuides(data);
        setFilteredGuides(data);
      })
      .catch((error) => console.error("Error fetching guides:", error));
  }, []);

  // Fetch areas and languages from the API
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [areasResponse, languagesResponse] = await Promise.all([
          fetch("http://localhost:8080/areas"),
          fetch("http://localhost:8080/languages")
        ]);

        if (!areasResponse.ok || !languagesResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const areasData = await areasResponse.json();
        const languagesData = await languagesResponse.json();

        setAreas(areasData);
        setLanguages(languagesData);
      } catch (error) {
        console.error("Error fetching areas or languages:", error);
      }
    };

    fetchFilters();
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

  const handleRatingChange = (guideId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [guideId]: rating,
    }));
  };

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
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
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
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Guide Cards Section */}
      <div className="guide-cards">
        {filteredGuides.map((guide) => (
          <div key={guide.id} className="guide-card">
            <img
              className="guide-card-img"
              src={guide.image ? `data:image/jpeg;base64,${guide.image}` : "/default-image.jpg"}
              alt={guide.name}
            />
            {/* <img src={`data:image/jpeg;base64,${guide.image}`} alt="Guide Image" />  */}

            <div className="guide-card-content">
              <h3 className="guide-card-name">{guide.name}</h3>
              <p className="guide-card-info">
                Experience: {guide.experience} |
                Age: {guide.ageRange} | 
                Gender: {guide.gender} |     
                {/* Availability: {guide.availability} */}
              </p>
              <p className="guide-card-info">
              Location: {guide.area} 
              </p>
              <p className="guide-card-info">
                Languages: {Array.isArray(guide.languages) ? guide.languages.join(", ") : guide.languages} 
              </p>
              <p className="guide-card-bio">{guide.bio}</p>
              <p className="guide-card-info">Phone: {guide.phone}</p>
              <div className="guide-card-rating">
                Rating: {guide.rating || "Not Rated"} ★
                {/* <div className="guide-card-rate">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`guide-card-rate-button ${ratings[guide.id] === star ? "selected" : ""}`}
                      onClick={() => handleRatingChange(guide.id, star)}
                    >
                      {star} ★
                    </button>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
