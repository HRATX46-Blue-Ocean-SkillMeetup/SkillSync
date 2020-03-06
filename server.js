const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
require("dotenv").config();

var pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["nvalsdjflkasdjfiow"]
  })
);

app.route("/test").get((req, res) => {
  pool.query(`SELECT * FROM test`, function(error, results) {
    if (error) {
      console.log(
        "bye",
        process.env.DB_HOST,
        process.env.DB_USER,
        process.env.DB_PASS,
        process.env.DB_DB
      );

      res.status(500).send();
    } else {
      console.log("hi");
      res.status(200).send(results);
    }
  });
});

app.get("/search", (req, res) => {
  console.log(req.query.searchTerm);
  pool.query(
    `SELECT * FROM skill WHERE skill LIKE '${req.query.searchTerm}%';`,
    (err, data) => {
      if (err) {
        res.status(404).send("");
      }
      res.status(200).send(data);
    }
  );
});

app.get("/postings", (req, res) => {
  console.log(req.query.skill_id);
  pool.query(
    `SELECT
    s.skill,
    u.username,
    u.location,
    u.user_photo,
    p.role,
    p.creation_date
    FROM posting p 
    LEFT JOIN user u
      on p.user_id=u.user_id
    LEFT JOIN skill s
      on p.skill_id=s.skill_id
    WHERE p.skill_id = '${req.query.skill_id}';`,
    (err, data) => {
      if (err) {
        res.status(404).send("");
      }
      res.status(200).send(data);
    }
  );
});

app.route("/postingData/:postingId").get((req, res) => {
  let postingId = req.params.postingId;
  console.log(postingId);
  pool.query(
    `select * from posting
    join skill on posting.skill_id = skill.skill_id
    join user on posting.user_id = user.user_id
    where posting_id = ${postingId};`,
    function(error, results) {
      console.log("results are: ");
      console.log(results);
      res.status(200).send(results[0]);
    }
  );
});

app.route("/user/rating/:userId").get((req, res) => {
  let userId = req.params.userId;
  pool.query(
    `select AVG(rating) as rating from review where user_id = ${userId};`,
    function(error, results) {
      res.status(200).send(results);
    }
  );
});

app.route("/getSkills/:userId").get((req, res) => {
  let userId = req.params.userId;
  pool.query(
    `select skill, skill.skill_id from user_skill
  left join skill on user_skill.skill_id = skill.skill_id
  where user_id = 1 AND role = 'mentor';`,
    function(error, results) {
      //console.log(results);
      res.status(200).send(results);
    }
  );
});

app.route("/addPosting").post((req, res) => {
  let skillId = req.body.skillId;
  let description = req.body.description;
  let userId = req.body.userId;

  console.log(skillId);
  console.log(description);
  console.log(userId);
  let query = `INSERT INTO posting (role, skill_id, user_id, description) VALUES ('mentor', '${skillId}', '${userId}', '${description}');`;
  console.log(query);
  pool.query(query, function(error, results) {
    console.log("ERROR:");
    console.log(error);
    res.status(200).send(results);
  });
});

app.listen(port, () => console.log("port " + port + " is on"));
