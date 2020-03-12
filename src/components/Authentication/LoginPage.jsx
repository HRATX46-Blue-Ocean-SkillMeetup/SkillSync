import React, { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";

import InputField from "./InputField.jsx";
import { history } from "../../index.js";
import { UserState, socket } from "../AppRouter.jsx";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, dispatchContext } = useContext(UserState);

  const submitLogIn = () => {
    const state = [username, password];
    const setState = [setUsername, setPassword];
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
        .post("/user/login", {
          username,
          password
        })
        .then(data => {
          history.push("/");
          dispatchContext({
            type: "set-user",
            username: data.data.username,
            user_id: data.data.id
          });
          socket.emit("login", data.data.id);
          console.log("logged in");
        })
        // .then(x => {
        //   history.push("/home/");
        // })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("nope");
    }
  };
  return (
    <div className="login">
      <div className="logoContainer">
        <img src="../../imgs/logos/SkillSync.png" />
      </div>
      <div className="login-container">
        <InputField
          forid="username"
          type="text"
          value={username}
          setValue={setUsername}
        />
        <InputField
          forid="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div className="posting-buttonContainer">
          <button onClick={submitLogIn} className="mb-1">
            Log In{" "}
          </button>
          <button className="mb-1">Sign Up </button>
        </div>
      </div>
    </div>
  );
}
