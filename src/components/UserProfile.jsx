import React, { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "./Authentication/PrivateRoute.jsx";

import axios from "axios";

import ChatBox from "./Authentication/ChatBox.jsx";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState(0);
  const [rating, setRating] = useState(0);
  const [menteeSkills, setMenteeSkills] = useState(["React Router"]);
  const [mentorSkills, setMentorSkills] = useState(["Barbecuing"]);
  const target = "g";

  let otherUserId = useRouteMatch("/:slug");

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
        let userRating = responseArray[0].data[0].rating || 5.0;
        setRating(userRating);
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
            <img src={userInfo.user_photo} width="140" />
            <br />
            <span className="Rating">{rating} &#9733;</span> <br />
          </span>
          <span className="userBio">
            <span className="userFullName">{userInfo.username}</span> <br />
            ZIP Code: {userInfo.location} <br />
            Bio: {userInfo.bio} <br />
          </span>
        </div>
      </div>
      <div className="profileContact">
        <button>REQUEST</button>
        <Link to={`/chatbox/${target}`}>Send Message</Link>
      </div>
      <div className="skillsTeachContainer, clearBackground">
        <div className="profileSectionTitle">SKILLS I TEACH</div>
        <div className="skills">
          {mentorSkills.map(skill => (
            <div key={skill.skill}>{skill.skill}</div>
          ))}
        </div>
      </div>
      <div className="skillsLearnContainer, clearBackground">
        <div className="profileSectionTitle">I WANT TO LEARN</div>
        <div className="skills">
          {menteeSkills.map(skills => (
            <div key={skills.skill}>{skills.skill}</div>
          ))}
        </div>
      </div>
      <div className="reviewsContainer">
        <div className="profileSectionTitle">REVIEWS</div>
        <div className="reviewsContainer">YOU CAN'T ADD A REVIEW. YET.</div>
        <Link to={`/review/${target}`}>
          <button>REVIEW LATER</button>
        </Link>
      </div>
    </div>
  );
}
