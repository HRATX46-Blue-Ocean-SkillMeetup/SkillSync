import React from "react";
import StarRating from "react-star-ratings";

const Posting = ({ posting, handleSelectPost }) => {
  return (
    <div
      className="post"
      onClick={e => handleSelectPost(e, posting.posting_id)}
    >
      <div className="post-image">
        <img src={posting.user_photo} />
      </div>
      <div className="post-content">
        <div className="post-header">
          {posting.role === "mentor"
            ? `${posting.username.split(".")[0]} teaches ${posting.skill}!`
            : `${posting.username} likes ${posting.skill}!`}
        </div>
        <div className="post-location">
          <i className="fas fa-map-marker-alt"></i>
          <span className="post-location">{`${posting.city}, ${posting.state}`}</span>
        </div>
        <StarRating
          rating={posting.rating === null ? 0 : posting.rating}
          starRatedColor="#FF8C5B"
          name="rating"
          starDimension="25px"
        />
      </div>
    </div>
  );
};

export default Posting;
