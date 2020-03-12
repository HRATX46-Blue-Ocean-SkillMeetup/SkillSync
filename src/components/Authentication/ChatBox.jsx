import React, { useState, useEffect, useReducer, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import InputField from "./InputField.jsx";
import useUnload from "./useUnload.jsx";

import { UserState, socket } from "../AppRouter.jsx";

// get username from Provider.Context
// get id from Provider.Context

//Bring addMessage and addHistory down to this component

// get chats and reducer down to this level

function reducer(state, action) {
  switch (action.type) {
    case "add-message":
      return [
        ...state,
        { message_text: action.message, from_username: action.user_id }
      ];
    case "add-history":
      return [...state, ...action.message];
    default:
      return state;
  }
}

const baseURL = "https://skillsync.herokuapp.com";

export default function ChatBox(props) {
  const context = useContext(UserState);
  const { userInfo, dispatchContext } = context;
  const { user_id, username } = userInfo;
  const location = useLocation();
  const { from_username, to_username } = location.state;

  const [chats, dispatch] = useReducer(reducer, []);

  const [message, setMessage] = useState("");

  const { target } = useParams();

  console.log(target);

  useEffect(() => {
    console.log(chats);
    socket.on("pm", addMessage.bind(null, "message-interlocutor"));
  }, []);

  const addMessage = (user_id, message) => {
    dispatch({ type: "add-message", message, user_id });
  };

  const addHistory = message => {
    dispatch({ type: "add-history", message });
  };

  useEffect(() => {
    const mount = () => {
      console.log(username, target, from_username, to_username);
      socket.emit("mount", to_username);
      axios
        .post(`${baseURL}chat/history`, {
          username,
          target,
          from_username,
          to_username
        })
        .then(data => {
          addHistory(data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    mount();
  }, []);

  useUnload(() => {
    socket.emit("unmount");
    console.log("will unmount");
  });

  let displayChat = [];
  for (let i = 0; i < chats.length; i++) {
    displayChat.push(
      <div
        className={
          user_id === chats[i].from_username
            ? "message-self"
            : "message-interlocutor"
        }
        key={i}
      >
        {chats[i].message_text}
      </div>
    );
  }

  return (
    <div className="message-chatbox-page">
      <div className="message-chatbox">
        {displayChat}
        <div id="anchor"></div>
      </div>

      <div className="message-message-field">
        <input
          className="message-text-field"
          placeholder="your message here"
          type="text"
          value={message}
          onChange={event => {
            setMessage(event.target.value);
          }}
        ></input>
        <button
          className="message-message-button"
          onClick={event => {
            addMessage(user_id, message);
            socket.emit("private", from_username, to_username, target, message);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
