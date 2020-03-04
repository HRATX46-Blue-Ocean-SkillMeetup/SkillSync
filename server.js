const express = require("express");
const app = express();
const path = require("path");
// const port = process.env.PORT || 3000;
const port = 3000;
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

app.listen(port, () => console.log("port " + port + " is on"));
