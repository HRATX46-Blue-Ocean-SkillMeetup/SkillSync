import React, { useState, useEffect } from "react";
import axios from "axios";

import InputField from "./InputField.jsx";
import useUnload from "./useUnload.jsx";

// import { useParams } from "react-router-dom";
// const { target } = useParams();

export default function ChatBox({
  chats,
  socket,
  username,
  addMessage,
  addHistory,
  id
}) {
  const checkTarget = username => {
    if (username === "a") {
      return "b";
    } else {
      return "a";
    }
  };
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(checkTarget(username));

  useEffect(() => {
    const mount = () => {
      socket.emit("mount", target);
      axios
        .post("chat/history", {
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
          id === chats[i].from_username
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
          addMessage(id, message);
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
