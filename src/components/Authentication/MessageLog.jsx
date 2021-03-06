import React, { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";

import { UserState } from "../AppRouter.jsx";

export default function MessageLog(props) {
  const context = useContext(UserState);
  const { userInfo, dispatchContext } = context;
  const { user_id } = userInfo;
  console.log(user_id);

  const [messageLog, setMessageLog] = useState([]);

  const generateMessageArray = () => {
    const uniqueMessenger = {};
    for (let i = 0; i < messageLog.length; i++) {
      let current = messageLog[i];
      if (uniqueMessenger[current.from_username] === undefined) {
        uniqueMessenger[current.from_username] = {
          from_username: current.from_username,
          to_username: current.to_username,
          visited: current.visited,
          message_text: current.message_text,
          message_date: current.message_date,
          sender: current.sender
        };
      }
    }
    const render = [];
    const values = Object.values(uniqueMessenger);
    for (let i = 0; i < values.length; i++) {
      let current = values[i];
      let className = !current.visited
        ? "message-not-visited"
        : "message-visited";
      render.push(
        <Link
          to={{
            pathname: `/chatbox/${current.sender}`,
            state: {
              from_username: current.to_username,
              to_username: current.from_username
            }
          }}
        >
          <div className={className} key={i}>
            {" "}
            {current.message_text} sent by {current.sender} latest message on{" "}
            {current.message_date}{" "}
          </div>
        </Link>
      );
    }
    return render;
  };

  useEffect(() => {
    dispatchContext({ type: "notification", bool: false });
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

  return (
    <div className="message-log-container">
      <div className="message-log">{generateMessageArray()}</div>
    </div>
  );
}
