import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./Header";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "./Airline.css";

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLodaed] = useState(false);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;
    console.log('airline useEffect')
    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setLodaed(true);
      })
      .catch((err) => console.log(err));
  }, [submited]);

  const handleChange = (e) => {
    e.preventDefault();
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited((prevState) => !prevState);
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    const airlineId = airline.data.id;
    axios
      .post("/api/v1/reviews", { review, airline_id: airlineId })
      .then((resp) => {
        const included = [...airline.included, resp.data.data]
        setAirline({...airline, included})
        setReview({title: '', description: '', score: 0})
      })
      .catch(() => {});
  };

  let reviews;
  if (loaded && airline.included) {
    reviews = airline.included.map( (item, index) => {
      return (
        <Review 
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }

  const setRating = (score, e) => {
    e.preventDefault();
    
    setReview({...review, score})
  };

  return (
    <div className="outer-wrapper">
      {loaded && (
        <Fragment>
          <div className="column">
            <div className="main">
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              {reviews}
            </div>
          </div>
          <div className="column">
            <ReviewForm
              handleChange={handleChange}
              setRating={setRating}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Airline;
