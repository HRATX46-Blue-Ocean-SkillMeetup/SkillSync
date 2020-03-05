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
    <div className="reviewContainer">
      {/* <SearchBar /> */}
      <div className="reviewPageTitle">{`Rate & Review`}</div>
      {/* <div className="userFullName">{`${props.username}`}</div> */}
      <div className="userFullName">{`bob`}</div>
      <EditableStarRating
        totalStars={5}
        full={
          "https://img.pngio.com/star-png-images-download-33366-star-png-resources-with-yellow-and-blue-png-360_360.png"
        }
        empty={
          "https://www.festivalclaca.cat/pics/b/28/282884_star-outline-png.png"
        }
        width={"65px"}
        height={"65px"}
        setRating={handleRatingChange}
      />
      <textarea
        className="reviewText"
        // placeholder={`How is ${props.username} as a teacher?`}
        placeholder={`How is bob as a teacher?`}
        id="review-text"
        style={{ width: "500px", height: "300px", marginBottom: "50px" }}
        onChange={handleInputChange}
        value={inputs.reviewText}
      ></textarea>
      <button className="reviewSubmitButton" onClick={handleSubmit}>
        Review
      </button>
    </div>
  );
};

export default ReviewPage;
