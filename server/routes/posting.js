const postingRoutes = app => {
  app.route("/rating").get((req, res) => {
    let userId = req.query.userId;
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

  app.route("/getMessages").get((req, res) => {
    let user_id = req.query.user_id;
    pool.query(
      `select MIN(m.visited) as visited, m.from_username, MAX(m.message_date) as last_message, u.username, u.user_photo 
    from message m
    left join user u on m.from_username = u.user_id
    where to_username = '${user_id}'
    group by from_username;`,
      function(error, results) {
        res.status(200).send(results);
      }
    );
  });

  app.route("/getMessagesCount").get((req, res) => {
    let user_id = req.query.user_id;
    pool.query(
      `select from_username, count(*) as count from message m
      where to_username = '${user_id}' and visited = 0
      group by from_username;`,
      function(error, results) {
        res.status(200).send(results);
      }
    );
  });
};

module.exports.postingRoutes = postingRoutes;
