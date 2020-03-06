import React from "react";
import Location from "./Location.js";
import Rating from "./Rating.js";

function PostingDetailsContainer(props) {
  return (
    <div className="postingDetailsContainer">
      <img src={props.photo} alt="" className="userPhotoPosting" />
      <p className="postingTitle">
        {props.activity} lesson with {props.mentor}
      </p>
      <Location location={props.location} />
      <Rating rating={props.rating} />
      <p className="postingDescription">
        I've been playing violin for nearly six decades and teaching for almost
        three! I'm available most weekdays between 9am and 7pm
      </p>
    </div>
  );
}

export default PostingDetailsContainer;
