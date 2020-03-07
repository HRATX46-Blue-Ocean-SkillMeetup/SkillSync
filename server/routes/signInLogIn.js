const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const signInLogInRoutes = app => {
  app.post("/user/signup", async (req, res) => {
    const { email, password, username, location, bio, user_photo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      `INSERT INTO user (email, password, username, location, bio, user_photo) VALUES ('${email}', '${hashedPassword}', '${username}', '${location}','${bio}', '${user_photo}')`,
      function(error, results) {
        if (error) {
          res.status(500).send();
        } else {
          console.log("user signed up");
          req.session.id = uuidv4();
          req.session.username = username;
          res.status(201).send();
        }
      }
    );
  });

  app.post("/user/login", (req, res) => {
    const { password, username } = req.body;
    pool.query(
      `SELECT * FROM user WHERE username='${username}'`,
      async function(error, results) {
        console.log(results);
        if (results[0] !== undefined) {
          if (await bcrypt.compare(password, results[0].password)) {
            console.log("it's a match");
            const id = results[0].user_id;
            req.session.id = uuidv4();
            req.session.username = username;

            res.status(200).send({ username, id });
          }
        } else {
          res.status(500).send();
        }
      }
    );
  });

  app.get("/user/logout", (req, res) => {
    req.session = null;
    res.status(201).send();
  });
};

module.exports.signInLogInRoutes = signInLogInRoutes;
