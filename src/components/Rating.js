import React from "react";
import StarRatings from "react-star-ratings";

function Rating(props) {
  return (
    <div className="posting-starRating">
      <StarRatings
        rating={props.rating}
        starRatedColor="#57B561"
        //changeRating={}
        numberOfStars={5}
        starDimension="20px"
        starSpacing="1px"
        name="rating"
      />
    </div>
  );
}

export default Rating;
