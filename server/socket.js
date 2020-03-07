const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const connectedUsers = {};

const socketInit = insertMessage => {
  io.on("connection", socket => {
    console.log("connected to" + socket);

    socket.on("login", (user, target) => {
      console.log(target);
      socket.username = user;
      connectedUsers[user] = {
        socketId: socket.id,
        username: user,
        chatroom: target
      };

      socket.on("mount", target => {
        const username = socket.username;
        connectedUsers[username].chatroom = target;
        console.log("mount", connectedUsers);
      });

      socket.on("unmount", () => {
        const username = socket.username;
        connectedUsers[username].chatroom = null;
        console.log("unmount", connectedUsers);
      });

      console.log(connectedUsers);

      socket.on("private", (target, message) => {
        const username = socket.username;
        console.log(username, "username", target, "target");
        if (connectedUsers[target]) {
          const { chatroom, socketId } = connectedUsers[target];
          if (chatroom !== username) {
            insertMessage(message, false, username, target);
            console.log("1: wrong chatroom");
          } else {
            io.to(`${socketId}`).emit("pm", message);
            insertMessage(message, true, username, target);
            console.log("2: connected to the same chatroom");
          }
        } else {
          insertMessage(message, false, username, target);
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
