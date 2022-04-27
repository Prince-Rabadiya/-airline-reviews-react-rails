import React from "react";
import "./Header.css";

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <div className="wrapper">
      <h1>
        <img src={image_url} />
        {name}
      </h1>
      <div>
        <div className="total-review">{total} User Reviews</div>
        <div className="star-reting"></div>
        <div className="total">{avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
