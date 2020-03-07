const {
  app,
  server,
  express,
  socketInit,
  connectedUsers
} = require("./socket");
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const { userProfileRoutes } = require("./routes/userProfile.js");
const { addReviewsRoute } = require("./routes/addReview.js");

const { chatHistory } = require("./routes/chatHistory");
const { signInLogInRoutes } = require("./routes/signInLogIn");
const { getUserIds, insertMessage, setVisited } = require("./messageHelpers");
const { postingRoutes } = require("./routes/posting.js");

pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

socketInit(insertMessage);

app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["nvalsdjflkasdjfiow"]
  })
);

userProfileRoutes(app);
// addReviewsRoute(app);
signInLogInRoutes(app);
chatHistory(app, getUserIds, setVisited);
postingRoutes(app);

app.route("/test").get((req, res) => {
  pool.query(`SELECT * FROM test`, function(error, results) {
    if (error) {
      res.status(500).send();
    } else {
      console.log("hi");
      res.status(200).send(results);
    }
  });
});

app.get("/search", (req, res) => {
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

const addReview = (reviewInfo, callback) => {
  pool.query(
    `INSERT INTO review (user_id, reviewer_id, skill_id, description, rating, review_date) VALUES (${reviewInfo.user_id},${reviewInfo.skill_id}, ${reviewInfo.reviewer_id}, "${reviewInfo.description}", ${reviewInfo.rating}, now())`,
    (err, data) => {
      if (err) throw err;
      else {
        callback(null, data);
      }
    }
  );
};

app.post("/post_review", urlencodedParser, (req, res) => {
  addReview(req.body, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/getSkills", (req, res) => {
  console.log(req.query.ID);
  pool.query(
    `SELECT
  b.role,
  c.skill
  FROM user a
  LEFT JOIN user_skill b
    on a.user_id = b.user_id
  LEFT JOIN skill c
    on b.skill_id = c.skill_id
  WHERE b.user_id = '${req.query.ID}';`,
    (err, data) => {
      if (err) {
        res.status(404).send("");
      }
      res.status(200).send(data);
    }
  );
});


app.get("/postings", (req, res) => {
  pool.query(
    `SELECT
    s.skill,
    u.username,
    u.location,
    u.city,
    u.state,
    u.user_photo,
    u.rating,
    p.role,
    p.creation_date,
    p.posting_id
    FROM posting p 
    LEFT JOIN user u
      on p.user_id=u.user_id
    LEFT JOIN skill s
      on p.skill_id=s.skill_id
    WHERE p.skill_id = '${req.query.skill_id}' and role != 'mentee';`,
    (err, data) => {
      if (err) {
        res.status(404).send("");
      }
      res.status(200).send(data);
    }
  );
});

app.get("/search/postings", (req, res) => {
  pool.query(
    `SELECT
    s.skill,
    u.username,
    u.location,
    u.city,
    u.state,
    u.user_photo,
    u.rating,
    p.role,
    p.creation_date,
    p.posting_id
    FROM posting p 
    LEFT JOIN user u
      on p.user_id=u.user_id
    LEFT JOIN skill s
      on p.skill_id=s.skill_id
    WHERE s.skill LIKE '${req.query.searchTerm}%' and role != 'mentee';`,
    (err, data) => {
      if (err) {
        res.status(404).send("");
      }
      res.status(200).send(data);
    }
  );
});

server.listen(port, () => console.log("port " + port + " is on"));