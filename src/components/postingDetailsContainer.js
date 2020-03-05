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
"10",
  "mentee",
  "18",
  "10",
  "1997-12-07 11:37:47",
  "18",
  "Music",
  "Guitar",
  "10",
  "simone45@example.com",
  "2c62fe59d4c930601f11755c8166377893eda5ba",
  "rodrigo.wisoky",
  "26634",
  "Recusandae provident quasi impedit ut quam autem sed. Quia accusantium aliquid numquam quia aperiam et iure. Perferendis voluptas fugit vero et autem aspernatur natus.",
  "http://lorempixel.com/640/480/";
