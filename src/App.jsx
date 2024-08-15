import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Guide from "./Components/Guide"; 
import Hotel from "./Components/Hotel";
import Rent from "./Components/Rent";
import BusinessRegistration from "./Components/BusinessRegistration";



function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Home page route that includes multiple sections */}
          <Route path="/" element={
            <>
              <div id="home">
                <Home />
              </div>

              <div id="destination">
                <Destination />
              </div>

              <div id="service">
                <Service />
              </div>

              <div id="contact">
                <Contact />
              </div>
            </>
          } />

          {/* Guide */}
          <Route path="/guide" element={<Guide />} />

          {/* Hotel */}
           <Route path="/hotel" element={<Hotel />} />

          {/* Rent */}
          <Route path="/rent" element={<Rent />} />

           {/* Business Registration */}
           <Route path="/business" element={<BusinessRegistration />} />


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
