const postingRoutes = app => {
  app.route("/rating").get((req, res) => {
    let userId = req.query.userId;
    console.log("userId! ");
    console.log(userId);
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
        res.status(200).send(results);
      }
    );
  });

  app.route("/addPosting").post((req, res) => {
    let skillId = req.body.skillId;
    let description = req.body.description;
    let userId = req.body.userId;
    let query = `INSERT INTO posting (role, skill_id, user_id, description) VALUES ('mentor', '${skillId}', '${userId}', '${description}');`;
    pool.query(query, function(error, results) {
      res.status(200).send(results);
    });
  });

  app.route("/postingData/:postingId").get((req, res) => {
    let postingId = req.params.postingId;
    pool.query(
      `select * from posting
            join skill on posting.skill_id = skill.skill_id
            join user on posting.user_id = user.user_id
            where posting_id = ${postingId};`,
      function(error, results) {
        res.status(200).send(results[0]);
      }
    );
  });
};

module.exports.postingRoutes = postingRoutes;
