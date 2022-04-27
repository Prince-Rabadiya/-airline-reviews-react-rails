import React, { Fragment } from "react";
import "./ReviewForm.css";

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          name="rating"
          onChange={() => console.log("selected:", score)}
          id={`rating-${score}`}
          checked={props.review.score == score}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <div className="review-wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Review {props.attributes.name} between 1 to 5 </div>
        <div className="field">
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </div>
        <div className="field">
          <input
            onChange={props.handleChange}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this Airline</div>
            <div className="rating-box">{ratingOptions}</div>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
