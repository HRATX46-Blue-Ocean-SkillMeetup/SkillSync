import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import InputField from "./Authentication/InputField.jsx";
import Skills from "./userProfile/Skills";
import WantSkills from "./userProfile/WantSkills";
import StarRatings from "react-star-ratings";

import { Link, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "./Authentication/PrivateRoute.jsx";
import { UserState, socket } from "./AppRouter.jsx";

export default function MyUserProfile(props) {
  const context = useContext(UserState);
  const { userInfo } = context;
  const { user_id, username, setUsername } = userInfo;

  //const [userInfo, setUserInfo] = useState(0);
  const [mentorSkills, setMentorSkills] = useState(['to serve man']);
  const [menteeSkills, setMenteeSkills] = useState(['cooking']);
  //const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [user_photo, setUser_photo] = useState("");

  useEffect(() => {
    axios.all([
      axios.get(`http://localhost:3000/getUserProfile`, {
        params: {
          ID: user_id,
        },
      }),
      axios.get('http://localhost:3000/getMentorSkills', {
        params: {
          ID: user_id,
        },
      }),
      axios.get('http://localhost:3000/getMenteeSkills', {
        params: {
          ID: user_id,
        },
      })
    ])
    .then(responseArray => {
      setUserInfo(responseArray[0].data[0]);
      setMentorSkills(responseArray[1].data);
      setMenteeSkills(responseArray[2].data);
    })
    .catch((err) => {
      console.error('request failed');
    })}, []);

  const updateInfo = () => {
    const state = [user_id, username, location, bio, user_photo];
    const setState = [
      setUsername,
      setLocation,
      setBio,
      setUser_photo
    ];
    let bool = true;
    for (let i = 0; i < state.length; i++) {
      if (!state[i].length) {
        bool = false;
      }
    }
    if (bool) {
      for (let i = 0; i < setState.length; i++) {
        setState[i]("");
      }
      console.log({ password, username, location, bio, user_photo});
      /*
      axios
        .post("/user/updateProfile", {
          email,
          password,
          username,
          location,
          bio,
          user_photo
        })
        .then(data => {
          console.log("signed up");
        })
        .catch(error => {
          console.log(error);
        });
        */
    } else {
      console.log("nope");
    }
  };
  
  return (
    <div className="profileContainer">
      <div className="profileUserInfo">
        <div className="profileRow1"> {/*START THIS FORM HERE? */}
          <span className="userPhotoProfile">
            <img src={userInfo.user_photo} className="userProfile-image" /><br />
            Update <InputField
              forid="user_photo"
              type="text"
              value={user_photo}
              setValue={setUser_photo}
            /> <br />
            <span className="Rating">< StarRatings
              rating={userInfo.rating || 5.0}
              starRatedColor="#FF8C5B"
              name="rating"
              starDimension='25px'
            /></span> <br />
          </span>
          <span className="userBio">
            <span className="userFullName">{userInfo.username}</span> <br />
            Update <InputField
              forid="username"
              type="text"
              value={username}
              setValue={setUsername}
            /> <br />
            <div className="zip">ZIP Code: {userInfo.location}</div><br />
            Update <InputField
              forid="location"
              type="text"
              value={location}
              setValue={setLocation}
            /> <br />
            <div className="bio">Bio: {userInfo.bio}</div><br />
            Update <InputField forid="bio" type="text" value={bio} setValue={setBio} /> <br />
            <button onClick={updateInfo}>Update User Information</button>
          </span>
        </div>
      </div>
      <div className="skillsTeachContainer, clearBackground">
        <Skills mentorSkills={mentorSkills} />
        <WantSkills menteeSkills={menteeSkills} />
        {/*<Reviews /> */}
        {/* <ReviewsList /> */}
      </div>
    </div>
  );
};
