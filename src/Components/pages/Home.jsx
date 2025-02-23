import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="hero-container">
      {/* Left Side: Text Content */}
      <div className="hero-text">
        <h1>
          Find, book, <br /> rent a vehicle— <br />
          <span className="highlight">quick and super easy!</span>
        </h1>
        <p>
          Streamline your rental experience with our effortless booking process.
        </p>
        <button
          className="explore-button"
          aria-label="Explore available vehicles"
          onClick={() => navigate("/vehicles")} // Navigate to Vehicles page
        >
          Explore Vehicles
        </button>
      </div>

      {/* Right Side: Background Image in CSS */}
      <div className="hero-image-container"></div>
    </section>
  );
};

export default Home;
