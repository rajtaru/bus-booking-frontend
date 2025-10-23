import React from "react";
import "./BusCard.css";

const BusCard = ({ id, number, route, departure, availableSeats }) => {
  return (
    <div className="bus-card">
      <h3>{id}</h3>
      <p>{number}</p>
      <p>{route}</p>
      <p>Departure: {departure}</p>
      <p>Available Seats: {availableSeats}</p>
    </div>
  );
};

export default BusCard;
