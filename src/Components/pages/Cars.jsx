import React from 'react';
import { useNavigate } from 'react-router-dom';
import Suzuki from "../../images/Suzuki.jpg";
import Hyundai from "../../images/Hyundai.jpg";
import Tigor from "../../images/Tigor.png";
import './Cars.css';

const Cars = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="car-rental">
      <h1>Available Cars</h1>
      <div className="car-list">
        <div className="car-item">
          <div className="car-image">
            <img src={Suzuki} alt="Suzuki" />
          </div>
          <p>Maruti Suzuki Swift (Rs.3500/day)</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
        <div className="car-item">
          <div className="car-image">
            <img src={Hyundai} alt="Hyundai" />
          </div>
          <p>Hyundai Grand i10 Nios (Rs.3500/day)</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
        <div className="car-item">
          <div className="car-image">
            <img src={Tigor} alt="Tigor" />
          </div>
          <p>Tata Tigor  (Rs.3500/day)</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
