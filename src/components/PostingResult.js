import React from "react";
import Rating from "./Rating";
import Location from "./Location";

function PostingResult(props) {
  return (
    <div>
      <div>
        <img src={props.photo} alt="" className="userPhoto" />
      </div>
      <div>
        <p className="resultText">
          {props.mentor} teaches {props.activity}!
        </p>
        <Location />
        <Rating />
      </div>
    </div>
  );
}

export default PostingResult;
