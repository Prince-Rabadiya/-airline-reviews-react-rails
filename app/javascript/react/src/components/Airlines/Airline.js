import React from "react";
import { Link } from "react-router-dom";
import "./Airline.css"

const Airline = (props) => {
  return (
    <div className="card">
      <div className="airline-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="airline-name">{props.attributes.name}</div>
      <div className="airline-score">{props.attributes.avg_score}</div>
      <div className="link-wrapper">
        <Link to={`airlines/${props.attributes.slug}`}> View Airline </Link>
      </div>
    </div>
  );
};

export default Airline;
