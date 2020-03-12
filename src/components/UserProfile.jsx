import React, { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "./Authentication/PrivateRoute.jsx";

import axios from "axios";
import Skills from "./userProfile/Skills";
import WantSkills from "./userProfile/WantSkills";
//import Reviews from "./Reviews";
//import ReviewsList from "./ReviewsList";
import StarRating from "react-star-ratings";

export default function UserProfile({ otherUserId }) {
  const [userInfo, setUserInfo] = useState(0);
  const [rating, setRating] = useState(5);
  const [mentorSkills, setMentorSkills] = useState(["ReactJS"]);
  const [menteeSkills, setMenteeSkills] = useState(["Barbecuing"]);
  const target = "g";

  useEffect(() => {
    axios
      .all([
        axios.get(`http://localhost:3000/getUserProfile`, {
          params: {
            ID: otherUserId
          }
        }),
        axios.get("http://localhost:3000/getMentorSkills", {
          params: {
            ID: otherUserId
          }
        }),
        axios.get("http://localhost:3000/getMenteeSkills", {
          params: {
            ID: otherUserId
          }
        })
      ])
      .then(responseArray => {
        setUserInfo(responseArray[0].data[0]);
        let newRating = responseArray[0].data[0].ratings || 5.0;
        setRating(newRating);
        setMentorSkills(responseArray[1].data);
        setMenteeSkills(responseArray[2].data);
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
            <div className="zip">{userInfo.location}</div>
            <div className="bio">{userInfo.bio}</div> <br />
          </span>
        </div>
      </div>
      <div className="profileContact">
        <button>REQUEST</button>
        <Link to={`/chatbox/${target}`}>Send Message</Link>
      </div>
      <div className="skillsTeachContainer, clearBackground">
        <Skills mentorSkills={mentorSkills} />
        <WantSkills menteeSkills={menteeSkills} />
        {/*<Reviews /> */}
        {/* <ReviewsList /> */}
        <div className="profileSectionTitle">REVIEWS</div>
        <div className="reviewsContainer">YOU CAN'T ADD A REVIEW. YET.</div>
        <Link to={`/review/${target}`}>
          <button>REVIEW LATER</button>
        </Link>
      </div>
    </div>
  );
}
