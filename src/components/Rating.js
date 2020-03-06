import React from "react";
import StarRatings from "react-star-ratings";

function Rating(props) {
  return (
    <StarRatings
      rating={props.rating}
      starRatedColor="blue"
      //changeRating={}
      numberOfStars={5}
      name="rating"
    />
  );
}

export default Rating;
