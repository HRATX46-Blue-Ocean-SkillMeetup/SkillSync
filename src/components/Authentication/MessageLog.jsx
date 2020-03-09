import React, { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";

import { UserState } from "../AppRouter.jsx";

export default function MessageLog(props) {
  //   const { userInfo } = useContext(UserState);
  //   const { username, user_id } = userInfo;
  const user_id = "52";
  const [messageLog, setMessageLog] = useState([]);

  const generateMessageArray = () => {
    const uniqueMessenger = {};
    for (let i = 0; i < messageLog.length; i++) {
      let current = messageLog[i];
      if (uniqueMessenger[current.from_username] === undefined) {
        uniqueMessenger[current.from_username] = {
          from_username: current.from_username,
          visited: current.visited,
          message_text: current.message_text,
          message_date: current.message_date
        };
      }
    }
    const render = [];
    const values = Object.values(uniqueMessenger);
    for (let i = 0; i < values.length; i++) {
      let current = values[i];
      let className = current.visisted
        ? "message-not-visited"
        : "message-visited";
      render.push(
        <div className={className} key={i}>
          {" "}
          Message: {current.message_text} from {current.from_username} sent on{" "}
          {current.message_date}{" "}
        </div>
      );
    }
    return render;
  };

  useEffect(() => {
    axios
      .post("/chat/log", {
        user_id
      })
      .then(function(response) {
        console.log(response);
        setMessageLog(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return <div>{generateMessageArray()}</div>;
}

// refactor query and css style
