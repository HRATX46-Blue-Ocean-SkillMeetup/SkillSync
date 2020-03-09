import React, { useState, useEffect } from "react";
import EditableStarRating from "./EditableStarRating";
import Axios from "axios";
import useForm from "./CustomHooks";
// import SearchBar from "./Searchbar"

// {
//   review_text: this.state.review_text,
//   review_title: this.state.review_title,
//   rating: this.state.rating,
//   user_id: 1,
//   product_id: this.props.currentItem.id
// }

const ReviewPage = props => {
  const [rating, setRating] = useState(0);

  var handleUploadReview = cb => {
    Axios.post(`/post_review`, {
      description: inputs[""],
      rating: rating,
      //user_id = props.user_id
      user_id: 2,
      //reviewer_id = props.reviewer_id
      reviewer_id: 3,
      //skill_id = props.skill_id
      skill_id: 7
    }).then(cb);
  };
  var { inputs, handleInputChange, handleSubmit } = useForm(handleUploadReview);

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  return (
    <div>
      {/* <SearchBar /> */}
      <img src={`./imgs/logos/Rate&Review.png`} className="review-page-title" />
      <div className="review-container"></div>
      {/* <div className="review-user-full-name">{`${props.username}`}</div> */}
      <div className="review-user-full-name">{`bob`}</div>
      <div className="review-stars">
        <EditableStarRating
          totalStars={5}
          full={"./imgs/logos/pngfuel.com.png"}
          empty={"./imgs/logos/PinClipart.com_six-point-star-clip_3949390.png"}
          width={"74px"}
          height={"74px"}
          setRating={handleRatingChange}
        />
      </div>
      <textarea
        className="review-text"
        // placeholder={`How is ${props.username} as a teacher?`}
        placeholder={`How is bob as a teacher?`}
        onChange={handleInputChange}
        value={inputs.reviewText}
      ></textarea>
      <button className="review-submit-button" onClick={handleSubmit}>
        <div className="review-button-text">Review</div>
      </button>
    </div>
  );
};

export default ReviewPage;
