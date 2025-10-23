import React, { useState } from "react";
import "./Home.css";
import BusCard from "../../components/BusCard/BusCard";
import { busesData } from "../../data/busesData";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBuses = busesData.filter(
    (bus) =>
      bus.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search route or bus number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Booked Seat</button>
      </div>

      {/* Bus Cards */}
      <div className="bus-list">
        {filteredBuses.map((bus) => (
          <BusCard key={bus.id} {...bus} />
        ))}
      </div>
    </div>
  );
};

export default Home;
