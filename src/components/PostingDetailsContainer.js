import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location.js";
import Rating from "./Rating.js";

function PostingDetailsContainer(props) {
  const [photo, setPhoto] = useState("");
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
    <div>
      <div className="posting-postingDetailsContainer">
        <div className="posting-smallContainer">
          <div className="posting-userPhotoPosting">
            <img src={photo} alt="" className="posting-image" />
          </div>
          <div>
            <p className="posting-title">
              <strong>{activity} </strong>lesson with {mentor}
            </p>
            <Location location={location} />
            <Rating rating={rating} />
          </div>
        </div>
        <div>
          <p className="posting-postingDescription">{postingDescription}</p>
        </div>
      </div>
      <div className="posting-buttonContainer">
        <button className="posting-button">MESSAGE</button>
      </div>
    </div>
  );
}

export default PostingDetailsContainer;
