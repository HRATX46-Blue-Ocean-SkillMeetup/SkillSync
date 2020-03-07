import React, { useState, useEffect } from "react";
import axios from "axios";

let promises = [
  axios.get(`http://localhost:3000/getUserProfile`, {
      params: {
        ID: 3,
      },
    }),
  axios.get(`http://localhost:3000/getAverageReviews`, {
      params: {
        ID: 3,
      },
    }),
  axios.get('http://localhost:3000/getMentorSkills', {
    params: {
      ID: 3,
    },
  }),
  axios.get('http://localhost:3000/getMenteeSkills', {
    params: {
      ID: 3,
    },
  })
]

export default function UserProfile({ userId }) {

  const [userInfo, setUserInfo] = useState(0);
  const [rating, setRating] = useState(0);
  const [mentorSkills, setMentorSkills] = useState(['kill']);
  const [menteeSkills, setMenteeSkills] = useState(['people']);

  useEffect(() => {
    axios.all(promises)
    .then(responseArray => {
      setUserInfo(responseArray[0].data[0]);
      setRating(5.0);
      setMentorSkills(responseArray[2].data);
      setMenteeSkills(responseArray[3].data);
    })
    .catch((err) => {
      console.error('request failed');
    })}, []);
  
  return (
    <div className="profileContainer">
      <div className="profileUserInfo">
        <div className="profileRow1">
          <span className="userPhotoProfile">
            <img src={userInfo.user_photo} width="140"/>
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
        <button>MESSAGE</button>
      </div>
      <div className="skillsTeachContainer, clearBackground">
        <div className="profileSectionTitle">
          SKILLS I TEACH
        </div>
        <div className="skills">
          {mentorSkills.map(skill => <div key={skill.skill}>{skill.skill}</div>)}
        </div>
      </div>
      <div className="skillsLearnContainer, clearBackground">
        <div className="profileSectionTitle">
          I WANT TO LEARN
        </div>
        <div className="skills">
          {menteeSkills.map(skills => <div key={skills.skill}>{skills.skill}</div>)}
        </div>
      </div>
      <div className="reviewsContainer">
        <div className="profileSectionTitle">
          REVIEWS
        </div>
        <div className="reviewsContainer">
          YOU CAN'T ADD A REVIEW. YET.
        </div>
        <button>REVIEW LATER</button>
      </div>
    </div>
  );
};