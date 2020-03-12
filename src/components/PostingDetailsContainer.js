import React, { useContext } from "react";
import Location from "./Location.js";
import Rating from "./Rating.js";
import { Link, useLocation } from "react-router-dom";
import { UserState } from "./AppRouter.jsx";

function PostingDetailsContainer() {
  const location = useLocation();
  const { posting } = location.state;
  const { skill, rating, user_photo, username, description } = posting;
  const context = useContext(UserState);
  const { userInfo } = context;
  const { user_id } = userInfo;

  return (
    <div className="posting-bigContainer">
      <div className="posting-postingDetailsContainer">
        <div className="posting-smallContainer">
          <Link
            to={{
              pathname: `/profile/${username}`,
              state: {
                to_username: posting.user_id
              }
            }}
          >
            <div className="posting-userPhotoPosting">
              <img src={user_photo} alt="" className="posting-image" />
            </div>
          </Link>
          <div>
            <Link
              to={{
                pathname: `/profile/${username}`,
                state: {
                  to_username: posting.user_id
                }
              }}
            >
              <div className="posting-title-container">
                <p className="posting-title">
                  <strong>{skill} </strong>lesson with {username}
                </p>
              </div>
            </Link>
            <Location location={posting.location} />
            <Rating rating={rating} />
          </div>
        </div>
        <div>
          <p className="posting-postingDescription">
            {description ? description : "Ready to learn?"}
          </p>
        </div>
      </div>
      <div className="posting-buttonContainer">
        <Link
          to={{
            pathname: `/chatbox/${username}`,
            state: {
              from_username: user_id,
              to_username: posting.user_id
            }
          }}
        >
          <button className="posting-button">MESSAGE</button>
        </Link>
      </div>
    </div>
  );
}

export default PostingDetailsContainer;
