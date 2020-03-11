// retrieves both user ids needed to send/receive messages
const getUserIds = (username, target, cb) => {
  console.log(`username ${username} targert ${target}`);
  pool.query(
    `SELECT user_id FROM user WHERE username='${username}' OR username='${target}'`,
    function(error, results) {
      if (error) {
        console.log(error);
      } else {
        console.log("results " + JSON.stringify(results));
        cb(results[0].user_id, results[1].user_id);
      }
    }
  );
};

// insert a message into the database based off the state of the socket
const insertMessage = (message, bool, from_username, to_username) => {
  pool.query(
    `INSERT INTO message (message_text, visited, from_username, to_username) VALUES ('${message}', '${bool}', '${from_username}', '${to_username}')`,
    function(error, results) {
      if (error) {
        console.log(error);
      } else {
        console.log("inserted into message", results);
      }
    }
  );
};

//ensure previously unread messages are marked as visited
const setVisited = (from, to) => {
  pool.query(
    `UPDATE message SET visited=true WHERE from_username='${from}' AND to_username='${to}'`,
    function(error, results) {
      if (error) {
        res.status(500).send();
      }
    }
  );
};

module.exports.getUserIds = getUserIds;
module.exports.insertMessage = insertMessage;
module.exports.setVisited = setVisited;
