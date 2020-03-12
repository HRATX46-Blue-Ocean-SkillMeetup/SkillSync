import React, { useState, useEffect, useContext } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import { PrivateRoute } from "./Authentication/PrivateRoute.jsx";

import axios from "axios";
import Skills from "./userProfile/Skills";
import WantSkills from "./userProfile/WantSkills";
//import Reviews from "./Reviews";
//import ReviewsList from "./ReviewsList";
import StarRating from "react-star-ratings";
import { UserState } from "./AppRouter.jsx";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState(0);
  const [rating, setRating] = useState(5);
  const [mentorSkills, setMentorSkills] = useState(["ReactJS"]);
  const [menteeSkills, setMenteeSkills] = useState(["Barbecuing"]);
  const { username } = useParams();

  const context = useContext(UserState);
  const user_id = context.userInfo.user_id;
  // const location = useLocation();
  // const { to_username } = location.state;

  useEffect(() => {
    axios
      .get(`/getUserProfile`, {
        params: {
          ID: username
        }
      })
      .then(({ data }) => {
        setUserInfo(data[0]);
        const newRating = data[0] ? data[0].rating : 5.0;
        setRating(newRating);
        const mentorSkills = [];
        const menteeSkills = [];
        data.forEach(skill => {
          if (skill.role === "mentor") {
            mentorSkills.push(skill);
          } else {
            menteeSkills.push(skill);
          }
        });
        setMentorSkills(mentorSkills);
        setMenteeSkills(menteeSkills);
      })
      .catch(err => {
        console.error("request failed");
      });
  }, []);
  return (
    <div className="profileContainer">
      <div className="profileUserInfo">
        <div className="profileRow1">
          <span className="userPhotoProfile">
            <img className="userProfile-image" src={userInfo.user_photo} />
            <StarRating
              rating={rating}
              starRatedColor="#FF8C5B"
              name="rating"
              starDimension="25px"
              starSpacing="1px"
            />
            <br />
          </span>
          <span className="userBio">
            <span className="userFullName">{userInfo.username}</span> <br />
            <div className="location">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="city-state">{`${userInfo.city}, ${userInfo.state}`}</span>
            </div>
            <div className="bio">{userInfo.bio}</div> <br />
          </span>
        </div>
      </div>
      <div className="profileContact">
        <Link
          to={{
            pathname: `/chatbox/${username}`,
            state: {
              from_username: user_id,
              to_username: username
            }
          }}
        >
          <button>Send Message</button>
        </Link>
      </div>
      <div className="skillsTeachContainer, clearBackground">
        <Skills mentorSkills={mentorSkills} />
        <WantSkills menteeSkills={menteeSkills} />
        {/* <Reviews /> */}
        {/* <ReviewsList /> */}
        <div className="profileSectionTitle">REVIEWS</div>
        <div className="reviewsContainer">YOU CAN'T ADD A REVIEW. YET.</div>
        <Link to={`/review/${username}`}>
          <button>REVIEW LATER</button>
        </Link>
      </div>
    </div>
  );
}
