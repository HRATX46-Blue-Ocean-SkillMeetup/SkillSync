import React, { useState, useEffect } from "react";
import axios from "axios";

import InputField from "./InputField.jsx";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [user_photo, setUser_photo] = useState("");

  const submitForm = () => {
    const state = [email, password, username, location, bio];
    const setState = [setEmail, setPassword, setUsername, setLocation, setBio];
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
      axios
        .post("/user/signup", {
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
    } else {
      console.log("nope");
    }
  };

  return (
    <div className="signup">
      <div className="logoContainer">
        <img src="../../imgs/logos/SkillSync.png" />
      </div>
      <div className="login-container">
        <InputField
          forid="email"
          type="text"
          value={email}
          setValue={setEmail}
        />
        <InputField
          forid="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <InputField
          forid="username"
          type="text"
          value={username}
          setValue={setUsername}
        />
        <InputField
          forid="location"
          type="text"
          value={location}
          setValue={setLocation}
        />
        <InputField forid="bio" type="textarea" value={bio} setValue={setBio} />
        {/* <InputField
          forid="user_photo"
          type="text"
          value={user_photo}
          setValue={setUser_photo}
        /> */}
        <div className="posting-buttonContainer">
          <button onClick={submitForm}> Sign Up </button>
        </div>
      </div>
    </div>
  );
}
