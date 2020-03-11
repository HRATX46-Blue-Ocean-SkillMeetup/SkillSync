const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const connectedUsers = {};

const socketInit = insertMessage => {
  io.on("connection", socket => {
    console.log("connected to" + socket);

    socket.on("login", user_id => {
      socket.user_id = user_id;
      connectedUsers[user_id] = {
        socketId: socket.id,
        username: user_id,
        chatroom: null
      };

      socket.on("mount", target => {
        const user_id = socket.user_id;
        connectedUsers[user_id].chatroom = target;
        console.log("mount", connectedUsers);
      });

      socket.on("unmount", () => {
        const user_id = socket.user_id;
        connectedUsers[user_id].chatroom = null;
        console.log("unmount", connectedUsers);
      });

      console.log(connectedUsers);

      socket.on("private", (from_username, to_username, target, message) => {
        console.log(from_username, "from_username", to_username, "to_username");
        if (connectedUsers[to_username]) {
          const { chatroom, socketId } = connectedUsers[to_username];
          if (chatroom !== from_username) {
            insertMessage(message, false, from_username, to_username);
            console.log("1: wrong chatroom");
          } else {
            io.to(`${socketId}`).emit("pm", message);
            insertMessage(message, true, from_username, to_username);
            console.log("2: connected to the same chatroom");
          }
        } else {
          insertMessage(message, false, from_username, to_username);
          console.log("3: target user is not connected");
        }
      });

      // message_text TEXT,
      // visited BOOLEAN,
      // from_username INT NOT NULL,
      // to_username INT NOT NULL,

      // socket.on("disconnect", () => {
      //   delete connectedUsers[username];
      //   console.log("disconnected" + username);
      // });
    });
  });
};

module.exports.app = app;
module.exports.express = express;
module.exports.server = server;
module.exports.socketInit = socketInit;

module.exports.connectedUsers = connectedUsers;
