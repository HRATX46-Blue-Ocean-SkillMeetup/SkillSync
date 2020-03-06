import React, { useState, useEffect } from "react";
import axios from "axios";

import InputField from "./InputField.jsx";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [user_photo, setUser_photo] = useState("");

  const submitForm = () => {
    const state = [email, password, username, location, bio, user_photo];
    const setState = [
      setEmail,
      setPassword,
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
    <div>
      <InputField forid="email" type="text" value={email} setValue={setEmail} />
      <br />
      <InputField
        forid="password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <br />
      <InputField
        forid="username"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <br />
      <InputField
        forid="location"
        type="text"
        value={location}
        setValue={setLocation}
      />
      <br />
      <InputField forid="bio" type="text" value={bio} setValue={setBio} />
      <br />
      <InputField
        forid="user_photo"
        type="text"
        value={user_photo}
        setValue={setUser_photo}
      />
      <button onClick={submitForm}> Sign Up </button>
    </div>
  );
}
