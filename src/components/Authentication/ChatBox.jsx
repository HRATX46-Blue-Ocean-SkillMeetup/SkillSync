import React, { useState, useEffect, useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
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

const baseURL = "http://localhost:3000/";

export default function ChatBox(props) {
  const { userInfo, dispatchContext } = useContext(UserState);
  const { username, user_id } = userInfo;

  const [chats, dispatch] = useReducer(reducer, []);

  const [message, setMessage] = useState("");

  // need to fix
  const setTargetInit = username => {
    if (username === "g") {
      return "j";
    } else {
      return "g";
    }
  };
  const { target } = useParams();

  console.log(target);

  useEffect(() => {
    console.log(chats);
    socket.on("pm", addMessage.bind(null, "message-interlocutor"));
  }, []);

  const addMessage = (user_id, message) => {
    dispatch({ type: "add-message", message, id: user_id });
  };

  const addHistory = message => {
    dispatch({ type: "add-history", message });
  };

  useEffect(() => {
    const mount = () => {
      socket.emit("mount", target);
      axios
        .post(`${baseURL}chat/history`, {
          username,
          target
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
    <div>
      <div>{target}</div>
      <InputField
        forid="Message"
        type="text"
        value={message}
        setValue={setMessage}
      />
      <button
        onClick={event => {
          addMessage(user_id, message);
          console.log(message);
          socket.emit("private", target, message);
        }}
      >
        Send
      </button>
      <div className="message-chatbox">
        {displayChat}
        <div id="anchor"></div>
      </div>
    </div>
  );
}
