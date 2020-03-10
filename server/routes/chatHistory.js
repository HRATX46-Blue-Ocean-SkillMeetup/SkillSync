const chatHistory = (app, setVisited) => {
  app.post("/chat/history", (req, res) => {
    const { from_username, to_username } = req.body;
    pool.query(
      `SELECT * FROM message WHERE from_username='${from_username}' AND to_username='${to_username}' OR from_username='${to_username}' AND to_username='${from_username}' ORDER BY message_date ASC`,
      function(error, results) {
        if (results) {
          setVisited(from_username, to_username);
          res.status(200).send(results);
        } else {
          console.log(error);
          res.status(500).send();
        }
      }
    );
  });
};

const chatLog = (req, res) => {
  // const username = socket.username;
  const { user_id } = req.body;
  console.log(user_id);
  pool.query(
    `SELECT *, b.username, (SELECT username FROM user WHERE user_id = a.from_username) as sender FROM message a 
LEFT JOIN user b
	on a.to_username = b.user_id
WHERE b.user_id = '${user_id}' ORDER BY visited ASC`,
    function(error, results) {
      if (results) {
        res.status(200).send(results);
      } else {
        console.log(error);
        res.status(500).send();
      }
    }
  );
};

module.exports.chatHistory = chatHistory;
module.exports.chatLog = chatLog;
