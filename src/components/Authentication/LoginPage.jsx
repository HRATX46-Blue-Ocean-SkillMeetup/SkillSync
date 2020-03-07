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
          history.push("/home/");
          dispatchContext({
            type: "set-user",
            username: data.data.username,
            user_id: data.data.id
          });
          socket.emit("login", data.data.username, null);
          console.log("logged in");
        })
        // .then(data => {
        // })

        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("nope");
    }
  };
  return (
    <div>
      <InputField
        forid="username"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <br />
      <InputField
        forid="password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <button onClick={submitLogIn}>Log In </button>
      <br />
      <button>Sign Up </button>
    </div>
  );
}
