import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import io from "socket.io-client";

import InputField from "./InputField.jsx";
import ChatBox from "./ChatBox.jsx";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [socket, setSocket] = useState(io(socketUrl));
  const [chats, dispatch] = useReducer(reducer, []);
  const [temp, setTemp] = useState("");
  const [showChat, setShowChat] = useState(false);

  const socketUrl = "http://localhost:3000";
  function reducer(state, action) {
    switch (action.type) {
      case "add-message":
        return [
          ...state,
          { message_text: action.message, from_username: action.id }
        ];
      case "add-history":
        return [...state, ...action.message];
      default:
        return state;
    }
  }

  useEffect(() => {
    console.log(chats);
    socket.on("pm", addMessage.bind(null, "message-interlocutor"));
  }, []);

  const addMessage = (id, message) => {
    dispatch({ type: "add-message", message, id });
  };

  const addHistory = message => {
    dispatch({ type: "add-history", message });
  };

  const submitLogIn = () => {
    const state = [username, password];
    const setState = [setUsername, setPassword];
    let bool = true;
    for (let i = 0; i < state.length; i++) {
      if (!state[i].length) {
        bool = false;
      }
    }
    setTemp(username);
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
          setLogged(true);
          setId(data.data.id);
          socket.emit("login", data.data.username, null);
          console.log(document.cookie);
          console.log("logged in");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("nope");
    }
  };

  const submitLogOut = () => {
    axios
      .get("/user/logout")
      .then(data => {
        setLogged(false);
        console.log("logged out");
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!logged) {
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
        <br />
        <br />
        <button>Needs to be linked to Sign Up page </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            setShowChat(true);
          }}
        >
          Enter that Chat
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          {showChat ? (
            <ChatBox
              chats={chats}
              socket={socket}
              username={temp}
              addMessage={addMessage}
              addHistory={addHistory}
              id={id}
            />
          ) : (
            "no chat here"
          )}
        </div>
        <button onClick={submitLogOut}>Log Out</button>
      </div>
    );
  }
}
