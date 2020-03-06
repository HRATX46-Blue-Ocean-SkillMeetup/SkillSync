function userProfileRoutes(app) {

  app.route("/getUserProfile").get((req, res) => {
    pool.query(`SELECT * FROM user WHERE user_id = ${req.query.ID}`, function(error, results) {
      if (error) {
        console.log('error, database query failed');
        res.status(500).send();
      } else {
        console.log('got user information from database');
        res.status(200).send(results);
      }
    })
  })

  app.route("/getAverageReviews").get((req, res) => {
    pool.query(`SELECT AVG(rating) FROM review WHERE user_id = ${req.query.ID}`, function(err, results) {
      console.log(results);
      //console.log(res['AVG(rating)']);
      if (err) {
        console.log('error, database query for reviews failed');
        res.status(500).send();
      } else {
        console.log('got average review rating from database');
        res.status(200).send(results);
      }
    })
  });

  app.route("/getMentorSkills").get((req, res) => {
    pool.query(`SELECT skill FROM skill INNER JOIN user_skill ON skill.skill_id = user_skill.skill_id WHERE (user_skill.user_id = ${req.query.ID} AND user_skill.role="mentor")`, function (err, results) {
      if (err) {
        console.log('error, database query for mentor skills failed');
        res.status(500).send();
      } else {
        console.log('got mentor skills from database');
        res.status(200).send(results);
      }
    })
  });

  app.route("/getMenteeSkills").get((req, res) => {
    pool.query(`SELECT skill FROM skill INNER JOIN user_skill ON skill.skill_id = user_skill.skill_id WHERE (user_skill.user_id = ${req.query.ID} AND user_skill.role="mentee")`, function (err, results) {
      if (err) {
        console.log('error, database query for mentee skills failed');
        res.status(500).send();
      } else {
        console.log('got mentee skills from database');
        res.status(200).send(results);
      }
    })
  });

}

module.exports.userProfileRoutes = userProfileRoutes;
