import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

function Messages(props) {
  const [messageData, setMessageData] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState({});

  // const { userInfo} = useContext(UserState);
  // const user_id = userInfo.user_id;
  const user_id = 1;

  useEffect(() => {
    axios
      .get("/getMessages", {
        params: { user_id: user_id }
      })
      .then(function(response) {
        setMessageData(response.data);
      });

    axios
      .get("/getMessagesCount", {
        params: { user_id: user_id }
      })
      .then(function(response) {
        let unreadMsgData = {};
        response.data.forEach(data => {
          unreadMsgData[data.from_username] = data.count;
        });
        setUnreadMessages(unreadMsgData);
      });
  }, []);

  return (
    <div>
      {messageData.map(message => {
        let lastMessage;
        if (message.visited === 0) {
          lastMessage = (
            <p>{unreadMessages[message["from_username"]]} new message(s)</p>
          );
        } else {
          lastMessage = <p>last message: {message.last_message}</p>;
        }

        return (
          <div>
            <img src={message.user_photo} alt="" />
            <p>{message.username}</p>
            {lastMessage}
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
