const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
require("dotenv").config();
const { userProfileRoutes } = require('./routes/userProfile.js');
const { addReviewsRoute } = require('./routes/addReview.js');

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

userProfileRoutes(app);
addReviewsRoute(app);

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

app.listen(port, () => console.log("port " + port + " is on"));
