import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location.js";
import Rating from "./Rating.js";

function PostingDetailsContainer(props) {
  const [photo, setPhoto] = useState(
    "https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  );
  const [activity, setActivity] = useState("");
  const [mentor, setMentor] = useState("");
  const [postingDescription, setPostingDescription] = useState(
    "Fugit excepturi et corporis autem possimus. Aut qui minima aliquam dicta eos. Est consequatur aut adipisci iure qui."
  );
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState();

  useEffect(() => {
    axios.get(`/postingData/${props.postingId}`).then(function(response) {
      setPhoto(response.data.user_photo);
      setActivity(response.data.skill);
      setMentor(response.data.username);
      setPostingDescription(response.data.description);
      setLocation(response.data.location);
      setRating(response.data.rating);
    });
  }, []);

  return (
    <div className="posting-postingDetailsContainer">
      <div className="posting-smallContainer">
        <div>
          <img src={photo} alt="" className="posting-userPhotoPosting" />
        </div>
        <div>
          <p className="postingTitle">
            {activity} lesson with {mentor}
          </p>
          <Location location={location} />
          <Rating rating={rating} />
        </div>
      </div>
      <div>
        <p className="postingDescription">
          I've been playing violin for nearly six decades and teaching for
          almost three! I'm available most weekdays between 9am and 7pm
        </p>
      </div>
    </div>
  );
}

export default PostingDetailsContainer;
