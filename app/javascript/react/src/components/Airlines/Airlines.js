import React, { useState, useEffect } from "react";
import axios from "axios";
import Airline from "./Airline";
import "./Airlines.css";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/airlines")
      .then((resp) => setAirlines(resp.data.data))
      .catch((err) => console.log(err));
  }, []);

  const airlineGrid = airlines.map((airline) => {
    return <Airline key={airline.id} attributes={airline.attributes} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">
          Rate our flights based on your personal experience.
        </div>
      </div>
      <div className="grid">{airlineGrid}</div>
    </div>
  );
};

export default Airlines;
